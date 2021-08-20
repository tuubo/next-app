// すべてのリクエストの度に実行される
export async function getServerSideProps() {
  // 外部APIからデータフェッチ
  const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060`)
  const data = await res.json()

  // props を通じて Page に data を渡す
  return { props: { data } }
}

function Test({ data }) {
  const results = data.results;

  return (
    <main>
      <div>This is test page!!</div>
      <div>{results[0].address1}</div>
    </main>
  );
}

export default Test;