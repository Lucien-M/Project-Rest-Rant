const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>

                <div>
                    <img src='/images/Entry-food.jpg' alt='food' />
                    <div>
                    Photo by <a href="AUTHOR_LINK">Heather Barnes</a> on <a href="UNSPLASH_LINK">Unsplash</a>  
                    </div>                
                    <a href='/places'>
                        <button className='btn-primary'>Places page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home