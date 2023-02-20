import React from 'react'
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

const Card = ({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus
}) => {

  const [isAdded, setIsAdded] = React.useState();

  const onClickPlus = () => {
    setIsAdded(true);
  }

  return (
    <div className={styles.card}>
      <img onClick={onFavorite} className={styles.favoriteImgg} height={40} width={40} src="./images/favorite-active.png" alt="Favorite inactive icon" />
      <img className={styles.gpuImgg} width={100} height={100} src={imageUrl} alt="2060" />
      <div className={styles.card__info}>
        <div className={styles.title}>
          <h5 className={styles.title__item}>{title}</h5>
        </div>
        <div className={styles.card__infoBlock}>
          <div className={styles.price}>
            <span>Price:&nbsp;</span>
            <b>{price}$</b>
          </div>
            <img onClick={onClickPlus} className={styles.plusImgg} height={40} width={40} src="./images/plus.png" alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Card;
