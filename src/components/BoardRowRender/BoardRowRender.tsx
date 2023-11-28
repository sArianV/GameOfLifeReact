import React from 'react'
import Square from '../Square/Square'

const BoardRowRender = ({ boardRow, rowNumber }: {
    boardRow: number[],
    rowNumber: number
}) => {
    return (
        <div
            style={{
                display: 'flex'
            }}
        >
            {
                boardRow.map((square, columnNumber) => (
                    <Square
                        key={`people-${rowNumber}-${columnNumber}`}
                        status={Boolean(square)}
                    />
                ))
            }
        </div>
    )
}

export default BoardRowRender