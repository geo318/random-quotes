function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Quots = [
["Life is wasted if we do not grasp the glory of the cross, cherish it for the treasure that it is, and cleave to it as the highest price of every pleasure and the deepest comfort in every pain. What was once foolishness to us—a crucified God—must become our wisdom and our power and our only boast in this world.", "John Piper"], ["God loves each of us as if there were only one of us.", "Augustine"], ["God never said that the journey would be easy, but He did say that the arrival would be worthwhile", "Max Lucado"], ["God’s work done in God’s way will never lack God’s supplies.", "Hudson Taylor"], ["God will meet you where you are in order to take you where He wants you to go.", "Tony Evans"], ["Let God’s promises shine on your problems.", "Corrie ten Boom"], ["Christ literally walked in our shoes.", "Tim Keller"], ["He is no fool who gives what he cannot keep, to gain what he cannot lose.", "Jim Elliot"], ["Remember who you are. Don’t compromise for anyone, for any reason. You are a child of the Almighty God. Live that truth.", "Lysa Terkeurst"], ["If you can’t fly, then run, If you can’t run, then walk, If you can’t walk, then crawl, but whatever you do, you have to keep moving forward.", "Martin Luther King Jr."], ["Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.", "Francis Chan"], ["If God is your partner, make your plans BIG!", "D.L. Moody"], ["You are the only Bible some unbelievers will ever read.", "John MacArthur"], ["We gain strength, and courage, and confidence by each experience in which we really stop to look fear in the face... we must do that which we think we cannot.", "Eleanor Roosevelt"], ["He who lays up treasures on earth spends his life backing away from his treasures. To him, death is loss. He who lays up treasures in heaven looks forward to eternity; he’s moving daily toward his treasures. To him, death is gain.", "Randy Alcorn"], ["God does not give us everything we want, but He does fulfill His promises, leading us along the best and straightest paths to Himself.", "Dietrich Bonhoeffer"], ["The Christian life is not a constant high. I have my moments of deep discouragement. I have to go to God in prayer with tears in my eyes, and say, 'O God, forgive me,' or 'Help me'.", "Billy Graham"], ["Always, everywhere God is present, and always He seeks to discover Himself to each one", "A.W.Tozer"], ["If you believe in a God who controls the big things, you have to believe in a God who controls the little things.  It is we, of course, to whom things look 'little' or 'big'.", "Elisabeth Elliot"], [
"There is no one who is insignificant in the purpose of God.", "Alistair Begg"]];


const Rand = () => Math.round(Math.random() * (Quots.length - 1));

class QuoteGen extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "nextQuote",







    () => {
      this.setState({
        quote: Rand() });

    });this.state = { quote: Rand() };this.nextQuote = this.nextQuote.bind(this);}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", style: wrapStyle }, /*#__PURE__*/
      React.createElement("div", { style: quoteStyle }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-angle-double-right", "aria-hidden": "true" }), /*#__PURE__*/
      React.createElement("span", { id: "text" },
      Quots[this.state.quote][0])), /*#__PURE__*/


      React.createElement("div", { className: "quoteFooter", style: flexStyle }, /*#__PURE__*/
      React.createElement(Social, null), /*#__PURE__*/
      React.createElement("div", { id: "author" }, Quots[this.state.quote][1]), /*#__PURE__*/
      React.createElement("i", { class: "fa fa-pencil", "aria-hidden": "true" })), /*#__PURE__*/

      React.createElement("button", {
        id: "new-quote", onClick: this.nextQuote }, "Next Quote"))));




  }}


class Social extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { className: "tweet-quote" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote",
        href: "https://twitter.com/intent/tweet",
        target: "_blank" }, /*#__PURE__*/

      React.createElement("i", { class: "fa fa-twitter", "aria-hidden": "true" })))));




  }}


const wrapStyle = {
  display: "block",
  width: "50%",
  minWidth: 400,
  maxWidth: 600,
  margin: "50px auto" };


const quoteStyle = {
  minHeight: 60,
  marginBottom: 20,
  textAlign: "justify" };

const flexStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: "row",
  margin: "20px 0" };

//render//
ReactDOM.render( /*#__PURE__*/React.createElement(QuoteGen, null), document.getElementById('wrap'));