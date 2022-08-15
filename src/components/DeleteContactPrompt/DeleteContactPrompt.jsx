import { PromptContainer } from './DeleteContactPrompt.styled';

const getNameOfDelettingTarget = (contacts, delettingID) => {
  let delettingName = null;

  for (const contact of contacts) {
    if (contact.id !== delettingID) continue;

    delettingName = contact.name;
    break;
  }

  return delettingName;
};

export const DeleteContactPrompt = ({
  contacts,
  delettingTarget,
  shouldShown,
  onContactDelete,
  onClose,
}) => {
  if (!delettingTarget) return;

  const delettingName = getNameOfDelettingTarget(
    contacts,
    delettingTarget.value
  );

  return (
    <PromptContainer shouldShown={shouldShown}>
      <p>{`Delete contact ${delettingName}?`}</p>
      <button type="button" onClick={onContactDelete}>
        Delete
      </button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </PromptContainer>
  );
};
