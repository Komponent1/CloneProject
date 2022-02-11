export function timer (datas: Object) {
  return (resolve: any) => {
    setTimeout(() => resolve(datas), (Math.round(Math.random() * 5) + 1) * 250);
  }
}
type Obj = {
  data: any[]
}
export function fetcher(datas: any[]): Promise<Obj> {
  return new Promise(timer({ data: datas }));
}