import { Component } from "react";

class ShopItemClass extends Component {

    render() {
        return (
            <>
                <div className="main-content">
                    <h2>{this.props.item.brand}</h2>
                    <h1>{this.props.item.title}</h1>
                    <h3>{this.props.item.description}</h3>
                    <div className="description">
                        {this.props.item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile">
                        <div className="highlight-overlay"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">
                            {this.props.item.currency + Number(this.props.item.price).toFixed(2)}
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ShopItemClass