export function timer (datas: Object) {
  return (resolve: any, reject: any) => {
    setTimeout(() => {
      const ran = Math.random();
      if (ran > 0.95) reject('err');
      else resolve(datas);
    }, (Math.round(Math.random() * 5) + 1) * 250);
  }
}
type Obj = {
  data: any[]
}
export function fetcher(datas: any[]): Promise<Obj> {
  return new Promise(timer({ data: datas }));
}