export default function Result({ length }: { length: number }) {
  if (!length) {
    return <p>Length must be more than 3 characters</p>;
  }

  const domain = '@email.com';
  const email = 'a'.repeat(length - domain.length) + domain;

  return (
    <div>
      <div style={{ maxWidth: '300px', overflowWrap: 'break-word', margin: '0 auto' }}>
        {email}
      </div>
      <button onClick={() => navigator.clipboard.writeText(email)}>Copy</button>
    </div>
  );
}
