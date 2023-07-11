export {};

declare global {
    interface Window {
        clipboardData: DataTransfer;
    }
}
