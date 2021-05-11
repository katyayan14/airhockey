class Game{
    constructor()
    {

    }
    getState()
    {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){gameState=data.val();})

    }
    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }
    async start()
    {
        if(gameState===0)
        {
            player = new Player();
            var playerCountInfo = await database.ref("playerCount").once("value");
            if(playerCountInfo.exists())
            {       
                playerCount=playerCountInfo.val();
                player.getCount();
            }
            form = new Form();
            form.display();
            
        }
        p1 = createSprite(100,150);
        p2 = createSprite(500,500);
        p =[p1,p2];

    }
    play()
    {
        
        form.hide();
        text("Air Hockey",200,200);
        Player.getPlayerInfo();
        if(info!==undefined)
        {   
            var index = 0;
            var x = 0
            var y ;
            for(var i in info)
            {
                index +=1;
            //    x += displayWidth-100;
                x = x+200;
                y = displayHeight - info[i].distance;
                
                p[index-1].x = x;
                p[index-1].y = y;
                if(index===player.index)
                {   
                    p[index-1].shapeColor="red"; 
                    p[index-1].x = mouseX;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance += 10;
            player.update();
        }
        drawSprites();
    }


}