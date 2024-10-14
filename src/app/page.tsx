"use client"

export default function Home() {
  const logout = async () => {
    const res = await fetch('/api/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { message } = await res.json();
    console.log(message);
  };

  return (
    <div className="font-pretendard">
      <div className="font-thin" onClick={async () => await logout()}>
        dsfsdf
      </div>
      <div className="font-bold">dsfsdf</div>
      <div className="font-medium">dsfsdf</div>
    </div>
  );
}
