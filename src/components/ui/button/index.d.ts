export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading?: boolean;
   type?: 'button' | 'submit' | 'reset' | undefined;
   variation?: 'login-button' | 'deposit-btn' | 'wallet_button';
   children: React.ReactNode;
}
