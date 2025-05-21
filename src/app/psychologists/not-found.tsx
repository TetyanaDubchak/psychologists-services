import s from '@/styles/components/NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={s['wrapper']}>
      <h1 className={s['title']}>😢 Ooops...something went wrong</h1>
      <p className={s['subtitle']}>Please, try reload page...</p>
    </div>
  );
}
