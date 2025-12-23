declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyOptions) => void;
    };
  }
}

interface TallyOptions {
  layout?: 'default' | 'modal';
  width?: number;
  autoClose?: number;
  hideTitle?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
}

export const TALLY_FORM_ID = 'rjBLb5';

export const openAssetAudit = (onSuccess?: () => void) => {
  if (typeof window !== 'undefined' && window.Tally) {
    window.Tally.openPopup(TALLY_FORM_ID, {
      layout: 'modal',
      width: 600,
      hideTitle: true,
      onSubmit: () => {
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.href = '/success';
          }, 2000);
        }
      },
    });
  } else {
    console.warn('Tally not loaded. Make sure the Tally script is included.');
  }
};

export {};
