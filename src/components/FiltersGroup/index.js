import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeCategory,
    onChangeRating,
    category,
    rating,
  } = props

  const changeCategory = categoryId => {
    onChangeCategory(categoryId)
  }

  const changeRating = ratingId => {
    onChangeRating(ratingId)
  }

  // console.log(categoryOptions.categoryId, category)

  return (
    <div className="filters-group-container">
      <ul>
        <h1>Category</h1>
        {categoryOptions.map(each => {
          const activeCategory =
            each.categoryId === category ? 'active-category' : ''
          return (
            <li
              className={`categoryItem ${activeCategory}`}
              onClick={() => changeCategory(each.categoryId)}
            >
              {each.name}
            </li>
          )
        })}
      </ul>
      <h1>Rating</h1>
      {ratingsList.map(each => {
        const activeRating = each.ratingId === rating ? 'active-rating' : ''
        return (
          <button
            type="button"
            className={`ratingItem ${activeRating}`}
            onClick={() => changeRating(each.ratingId)}
          >
            <img src={each.imageUrl} className="ratingImg" />
            <p className="">&up</p>
          </button>
        )
      })}
      <button className="clearBtn" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
