import { Choice } from '../choice/Choice'
function Pick({ text, playerChoice }) {
    return (
        <div>
            <h2>{text}</h2>
            {playerChoice == null ? (
                <> </>
            ) : (
                <Choice choice={playerChoice}/>
            )}

        </div>
    )
}

export { Pick }