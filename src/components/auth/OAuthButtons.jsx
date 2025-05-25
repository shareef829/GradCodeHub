import { loginWithGoogle } from '../../services/auth';

export default function OAuthButtons({ action = 'login' }) {
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        <span>{action === 'login' ? 'Login' : 'Sign up'} with Google</span>
      </button>
    </div>
  );
}