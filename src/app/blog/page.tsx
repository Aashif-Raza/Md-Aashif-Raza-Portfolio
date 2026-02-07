import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect blog route to home since blogs are removed
  redirect('/');
}
