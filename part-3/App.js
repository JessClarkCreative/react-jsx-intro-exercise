function App() {
    return (
        <div>
            <Person 
                name="Jess"
                age={36}
                hobbies={["photography", "kiteboarding", "eating healthy"]}
            />
            <Person 
                name="Brax"
                age={28}
                hobbies={["disc golf", "cooking", "judo"]}
            />
            <Person 
                name="Rusty"
                age={100}
                hobbies={["chasing sticks", "snuggling", "eating treats"]}
            />
        </div>
    );
}