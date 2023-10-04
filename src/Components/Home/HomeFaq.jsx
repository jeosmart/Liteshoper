import "./HomeFaq.scss";
function Faq() {
  return (
    <div className="HomeFaq">
      <h1>Frequenly Ask Questions</h1>
      <div className="wrapper">
        <div className="row">
          <div className="faqBox">
            <button>What is Litemarket?</button>
            <div className="body">Litemarket is an e-commerce platform that lets you create your own online store to sell your products.</div>
          </div>
          <div className="faqBox">
            <button>What is basically needed for a Litemarket store?</button>
            <div className="body">To make your store "Ready to sell", you only need to follow 5 steps:
              <ul>
                <li>Create your first product</li>
                <li>Create a payment method</li>
                <li>add  a delivery method</li>
                <li>maintain your contact information for your customers</li>
                <li>Add legal pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="faqBox">
            <button>What do i need to consider when creating a product?</button>
            <div className="body">For your product to be appealing to your customers, the following things must be presents: 
              <ul>
                <li>Title</li>
                <li>Price</li>
                <li>Pictures</li>
                <li>features, e.g technical data</li>
                <li>detailed description of the product</li>
              </ul>
            </div>
          </div>
          <div className="faqBox">
            <button>Is Litemarket free of charge?</button>
            <div className="body">Yes, Litemarket is free of charge.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq