const createArrayWithCheckPoints = (arrayLength, checkpoints) => {
  const array = []

  for (let index = 0; index < arrayLength; index++) {
    const saveCheckpoint = checkpoints.find(
      ({ position }) => position === index
    )

    if (saveCheckpoint) {
      array.push(saveCheckpoint.value)
    } else {
      array.push('')
    }
  }

  return array
}

export { createArrayWithCheckPoints }
