const lightLogoFileName = 'KM_Wordmark_Stacked_Anchor_RGB.png';
const darkLogoFileName = 'KM_Wordmark_Stacked_Negative_RGB.png';

function resolveLogoUrl(logoElement, fileName) {
  try {
    return new URL(fileName, logoElement.src).toString();
  } catch {
    return fileName;
  }
}

function updateThemeLogo() {
  const logoElement = document.getElementById('logo');
  if (!(logoElement instanceof HTMLImageElement)) {
    return;
  }

  const theme = document.documentElement.getAttribute('data-bs-theme');
  const logoFileName = theme === 'dark' ? darkLogoFileName : lightLogoFileName;
  const nextLogoUrl = resolveLogoUrl(logoElement, logoFileName);

  if (logoElement.src !== nextLogoUrl) {
    logoElement.src = nextLogoUrl;
  }
}

export default {
  start: () => {
    updateThemeLogo();

    const themeObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-bs-theme') {
          updateThemeLogo();
        }
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme'],
    });
  },
};