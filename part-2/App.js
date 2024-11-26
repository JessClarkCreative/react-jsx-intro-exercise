function App() {
    return (
        <>
        <Tweet 
            name="Jess Clark" 
            username="JessClarkCreative" 
            date={new Date().toDateString()} 
            message="I'm a Videographer" 
        />
        <Tweet 
           name="Braxton" 
           username="Braxtothemax" 
           date={new Date().toDateString()} 
           message="I work at a mill" 
        />
        <Tweet 
           name="Rusty" 
           username="RustyDawg" 
           date={new Date().toDateString()} 
           message="I'm just a cute dawg" 
        />
        </>
    );
}