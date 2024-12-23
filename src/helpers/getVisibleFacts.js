export const getVisibleFacts = (facts, query, selectedValue) => {
  let visibleFacts = [...facts];

  if (query) {
    const normalizedQuery = query.toLowerCase();

    visibleFacts = visibleFacts.filter((fact) =>
      fact.fact.toLowerCase().includes(normalizedQuery)
    );
  }

  if (selectedValue !== "All facts") {
    switch (selectedValue) {
      case "Show long ones first":
        visibleFacts = visibleFacts.sort(
          (firstFact, secondFact) => secondFact.length - firstFact.length
        );

        break;

      case "Show short ones first":
        visibleFacts = visibleFacts.sort(
          (firstFact, secondFact) => firstFact.length - secondFact.length
        );

        break;

      case "Short ones only":
        visibleFacts = visibleFacts.filter((fact) => fact.fact.length < 100);

        break;

      case "Long ones only":
        visibleFacts = visibleFacts.filter((fact) => fact.fact.length >= 100);

        break;

      default:
        return true;
    }
  }
  return visibleFacts;
};
