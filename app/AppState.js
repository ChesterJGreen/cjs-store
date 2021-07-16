
import Animal from "./Models/Animal.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  animals = [new Animal('https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', 'Benji', 100, 'Good dog with an even better heart!', 2), new Animal('https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg', 'Brutus', 150, 'he loves to play and chase his ball!', 15,), new Animal('https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg', 'Bingus', 3000, 'Worth his wait in Gold', 20), new Animal('https://upload.wikimedia.org/wikipedia/en/d/db/Yoshi_%28Nintendo_character%29.png', 'Yoshi', 269, "He's very loyal, almost too loyal", 3), new Animal('https://pyxis.nymag.com/v1/imgs/595/cb7/9ce22399bbbf5e219f0679171ac6fad6c1-22-got-ghost.rsocial.w1200.jpg', 'Dire Wolf', 257.79, 'A good and faithful protector.', 28), new Animal('https://i.pinimg.com/originals/d7/67/e5/d767e5cb6e86ec741149cb373b0e16d8.jpg', 'Dregen', 1000.06, "He won't bite!", 12), new Animal('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINouEClW4gVXvjlWT4gmJa5VlyxLC3fD6uUSQPJGVTxffPO0j7iO-1dELJqv_wt7vdZU&usqp=CAU', 'Spartan', 800, 'He WILL kick you', 300), new Animal('https://static.scientificamerican.com/sciam/cache/file/766BFBD4-F8A1-4B7D-8416A370010B5A88_source.jpg?w=590&h=800&5A61F7C0-0DAE-410B-90ECB88BDF9CF3FC', 'Axolotl', 1000000, "Very nice lad.", 11)]




}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
