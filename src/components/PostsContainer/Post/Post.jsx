import { useActiveUser } from '../../UserContext/UserContext';
import styles from './Post.module.css';

export default function Post({ post }) {
  const { user } = useActiveUser();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.midsection}>
        <div className={styles.meta}>
          <div className={styles.user}>
            {user === null ? 'anon' : post.user_firstname}
          </div>
          <div className={styles.time}>{convertTime(post.date_time)}</div>
        </div>
        <div className={styles.content}>{post.content}</div>
      </div>
    </div>
  );
}

function convertTime(time) {
  const newDate = new Date(time);
  const [month, day, hour, minute] = [
    newDate.getMonth(),
    newDate.getDate(),
    newDate.getHours(),
    newDate.getMinutes(),
  ];
  return `${month + 1}/${day} - ${hour}:${minute}`;
}
