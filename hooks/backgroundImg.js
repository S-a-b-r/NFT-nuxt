export function getBg(bgUrl) {
    const img = useImage();

    const backgroundStyle = () => {
        const imgUrl = img(`../images/${bgUrl}`);
        return { backgroundImage: `url('${imgUrl}')` };
    };

    return backgroundStyle();
}
