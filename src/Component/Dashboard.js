import React from "react";
require('./style.css');

const data = [
    {
        id: 'box1',
        text: 'Box 1'
    },
    {
        id: 'box2',
        text: 'Box 2'
    },
    {
        id: 'box3',
        text: 'Box 3'
    },
    {
        id: 'box4',
        text: 'Box 4'
    }
]
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: data,
            box2: []
        }
    }

    dragStart = (e, id, item, index) => {
        e.dataTransfer.setData("text", e.target.id)
    }

    dragOver = (e) => {
        e.preventDefault();
    }


    dropData1 = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const filteredData = this.state.box2.filter(item => {
            return item.id === data
        });
        
        const updatedData = [...this.state.item, ...filteredData];

        const item2data = [...this.state.box2];
        const removeIndex = item2data.findIndex(x => {
            return x.id === data;
        });
        item2data.splice(removeIndex, 1);
        this.setState({
            ...this.state,
            item: updatedData,
            box2: item2data
        })
    }

    dropData2 = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
       
       
        const filteredData = this.state.item.filter(item => {
            return item.id === data
        });
        const updatedData = [...this.state.box2, ...filteredData];

        const itemData = [...this.state.item]
        const removeIndex = itemData.findIndex(x => {
            return x.id === data;
        });
        itemData.splice(removeIndex, 1);
        this.setState({
            item: itemData,
            box2: updatedData

        })
    }

    dropData2 = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const filteredData = this.state.item.filter(item => {
            return item.id === data
        });
        const updatedData = [...this.state.box2, ...filteredData];

        const itemData = [...this.state.item]
        const removeIndex = itemData.findIndex(x => {
            return x.id === data;
        });
        itemData.splice(removeIndex, 1);

        // console.log(removeIndex)
        this.setState({
            item: itemData,
            box2: updatedData

        })
    }
    render() {
        const { item, box2 } = this.state;
        return (
            <div className="container">
                <div className="box1" onDragOver={(e) => this.dragOver(e)} onDrop={(e) => this.dropData1(e)}>
                    {
                        !item.length && <div>Nodata</div>
                    }
                    {
                        item.map((item, i) => {
                            return <button key={i} id={item.id} draggable={true} onDragStart={(e) => this.dragStart(e, item, i)}>{item.text}</button>
                        })
                    }

                </div>
                <div className="box2" onDragOver={(e) => this.dragOver(e)} onDrop={(e) => this.dropData2(e)}>
                {
                        !box2.length && <div>Nodata</div>
                    }
                    {
                        box2.map((item, i) => {
                            return <button key={i} id={item.id} draggable={true} onDragStart={(e) => this.dragStart(e, item, i)}>{item.text}</button>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;