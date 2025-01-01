export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-900 rounded-full" />
        <div className="absolute inset-0 border-4 border-primary-500 dark:border-primary-400 rounded-full border-t-transparent animate-spin" />
      </div>
    </div>
  );
} 