interface TallyOptions {
  layout?: 'default' | 'modal';
  width?: number;
  autoClose?: number;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  onSubmit?: (payload?: unknown) => void;
  onClose?: () => void;
  onOpen?: () => void;
}

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyOptions) => void;
      closePopup: (formId: string) => void;
    };
  }
}

export {};
