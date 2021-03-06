import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PicSlider from '../PicSlider'
import { InternationalContext } from '../../HOC/internationalContext';

const ArticleCard = (props) => {
  const { id, title, description, pictures, onClick, left, size } = props
  const { lang } = useContext(InternationalContext)
  return (
    <div
      id={id}
      className="uk-card uk-card-default uk-grid-collapse uk-child-width-expand uk-margin uk-margin-top uk-container-center"
      uk-grid="true"
    >
      {pictures.length > 0 && (left || size === 'S') && (
        <div className="uk-cover-container uk-width-2-3@l ">
          <PicSlider pictures={pictures} />
        </div>
      )}
      <div className="uk-container uk-width-expand">
        <div className="uk-card-header">
          <div className="uk-card-title uk-text-center">{title}</div>
        </div>
        <div className="uk-card-body uk">
          <div className="uk-text">{description}</div>
        </div>
        <div className="uk-card-footer ">
          <button
            type="button"
            className="uk-button uk-button-primary uk-margin-auto uk-width-1-1"
            onClick={() => onClick(id)}
          >
            Plus de détails
          </button>
        </div>
      </div>
      {pictures.length > 0 && !left && size !== 'S' && (
        <div className="uk-cover-container uk-width-2-3@l">
          <PicSlider pictures={pictures} />
        </div>
      )}
    </div>
  )
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
}

export default ArticleCard
