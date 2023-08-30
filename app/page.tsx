import { action } from "./action";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form action={action} onSubmit={() => console.log('Submit')}>
      <button type="submit">button</button>
    </form>
  );
}
