import './ReviewList.css'
export const ReviewList = ({ items }) =>
{
    return (
        <ul>
            {items.map((item, index, array) =>
                <ReviewListItem item={item}></ReviewListItem>
            )
            }
        </ul>
    );
}
const formatDate = value =>
{
    const date = new Date(value);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}
const ReviewListItem = ({ item }) => (
    <div className="ReviewListItem">
        <img src={item.imgUrl} alt={item.title} className="ReviewListItem-img"></img>
        <div>
            <h1>{item.title}</h1>
            <p>{item.rating}</p>
            <p>{formatDate(item.createdAt)}</p>
            <p>{item.content}</p>
        </div>
    </div>
)