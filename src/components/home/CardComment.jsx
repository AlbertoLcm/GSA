import styles from "./CardComment.module.css";

function CardComment({ comment }) {
  return (
    <div className={styles.card}>
      <p>"{comment.comment}"</p>
      <div className={styles.user}>
        <img src={comment.avatar} alt={comment.name} />
        <div className={styles.userDescription}>
          <p className={styles.userName}>{comment.name}</p>
          <p className={styles.userProfesion}>{comment.profesion}</p>
        </div>
      </div>
    </div>
  );
}

export default CardComment;
