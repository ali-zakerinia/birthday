import HTMLFlipBook from "react-pageflip";

const PhotoAlbum = () => {
    return (
        <HTMLFlipBook width={400} height={500} showCover>
            <div className="bg-red-200">Page 1</div>
            <div className="bg-green-200">Page 2</div>
            <div className="bg-blue-200">Page 3</div>
            <div className="bg-yellow-200">Page 4</div>
        </HTMLFlipBook>
    )
}
export default PhotoAlbum;