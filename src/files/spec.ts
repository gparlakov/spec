describe("<%= classify(name) %>", () => {
  it("when then should", () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    // c.act
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  const builder = {
    default() {
      return builder;
    },
    build() {
      return new Object();
    }
  };

  return builder;
}
