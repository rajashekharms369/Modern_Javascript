    // const app = {
    //     nextIndex: 0,
    //     teams: ['a', 'b', 'c', 'd'],
    //     next(){
    //         if(this.nextIndex >= this.teams.length){
    //             return {done: true};
    //         }
    //         const returnValue = {value: this.teams[this.nextIndex], done: false};

    //         this.nextIndex++;
    //         return returnValue;
    //     },
    // };

    // console.log(app.next());
    // console.log(app.next());
    // console.log(app.next());
    // console.log(app.next());
    // console.log(app.next());
    // console.log(app.next());



    // const app = {
    //     teams: ['a', 'b', 'c', 'd'],
    //     [Symbol.iterator]: function(){
    //         let nextIndex = 0;
    //         return {
    //             next: () => {
    //                 return nextIndex < this.teams.length ? {value: this.teams[nextIndex++], done: false}:{done: true};
    //             },
    //         };
    //     },
    // };


    // for(const team of app){
    //     console.log(team);
    // }

    // console.log("Hello world");