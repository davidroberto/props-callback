
const Header = (props) => {

    return (
        <header>
            <form onSubmit={props.submitArticlesCallback}>
            <input type="text" name="search" />
            <input type="submit" />
            </form>
        </header>
    )

}

export default Header;