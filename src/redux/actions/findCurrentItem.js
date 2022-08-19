export const type = 'findCurrentItem'

const findCurrentItem = (itemId) => ({
  type,
  payload: Number(itemId)
})

export default findCurrentItem
