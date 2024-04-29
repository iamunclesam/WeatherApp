
const Header = () => {
    return (
    <>
        <div className="flex justify-between items-center mb-12">
            <div className="add-location">
            <svg xmlns="http://www.w3.org/2000/svg" className=" text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg>
            </div>

            <div className="brand">
                <h1 className="text-2xl text-white uppercase">Weather</h1>
            </div>

            <div className="settings">
            <svg xmlns="http://www.w3.org/2000/svg" className=" text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="M28.832 18.472a1.48 1.48 0 0 1 .537 1.634a14.3 14.3 0 0 1-3.156 5.443a1.48 1.48 0 0 1-1.671.347l-1.955-.858a1.5 1.5 0 0 0-.68-.128a1.5 1.5 0 0 0-.66.2a1.47 1.47 0 0 0-.727 1.124l-.235 2.13a1.48 1.48 0 0 1-1.13 1.276c-2.076.495-4.24.495-6.316 0a1.48 1.48 0 0 1-1.125-1.27l-.235-2.126a1.48 1.48 0 0 0-.485-.94a1.5 1.5 0 0 0-1.58-.255l-1.955.859a1.48 1.48 0 0 1-1.668-.343a14.3 14.3 0 0 1-3.16-5.45a1.48 1.48 0 0 1 .536-1.632l1.725-1.275a1.488 1.488 0 0 0 0-2.4l-1.725-1.273a1.48 1.48 0 0 1-.536-1.623A14.25 14.25 0 0 1 5.79 6.467c.14-.151.31-.271.5-.351a1.5 1.5 0 0 1 1.17 0l1.947.858a1.493 1.493 0 0 0 2.073-1.206l.236-2.122a1.48 1.48 0 0 1 1.148-1.281a15.5 15.5 0 0 1 3.146-.362c1.052.012 2.1.133 3.127.362a1.48 1.48 0 0 1 1.147 1.284l.236 2.12a1.483 1.483 0 0 0 2.067 1.2l1.946-.857a1.48 1.48 0 0 1 1.674.346a14.2 14.2 0 0 1 3.157 5.44a1.48 1.48 0 0 1-.537 1.63l-1.72 1.273a1.48 1.48 0 0 0-.004 2.395zM16 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>
            </div>
        </div>
    </>
    )
}

export default Header