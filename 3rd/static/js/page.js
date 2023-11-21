/*let p='goldenretriver';
    var d=fetch('dogs.json').then(function(response){
      return response.json();
    })
    .then(function(products){
      
        console.log(products.breed[p]);
      
    });*/
const c =
  "{" +
  '"breed": {' +
  '"affenpinscher": {' +
  '"features": ["Curious", "Energetic", "Fearless"],' +
  '"history": "The Affenpinscher, originating in Germany, is a small toy breed known for its distinct appearance and lively personality. Affectionately nicknamed the Monkey Terrier, these dogs were initially bred to be rat catchers in homes and stables. Over time, they became cherished companions due to their charming and playful nature."' +
  "}," +
  '"afghan_hound": {' +
  '"features": ["Regal", "Elegant", "Independent"],' +
  '"history": "The Afghan Hound, known for its luxurious coat and elegant appearance, has a rich history that dates back to ancient Afghanistan. Originally bred for hunting large game, these hounds were prized for their speed and agility. Today, they are esteemed for their beauty and grace."' +
  "}," +
  '"african_hunting_dog": {' +
  '"features": ["Energetic", "Social", "Hunting Instinct"],' +
  '"history": "The African Hunting Dog, also known as the African Wild Dog, is native to sub-Saharan Africa. Living in packs, these dogs are exceptional hunters with unique coat patterns. They are highly social animals, relying on cooperation within the pack for hunting success."' +
  "}," +
  '"airedale": {' +
  '"features": ["Confident", "Intelligent", "Energetic"],' +
  '"history": "The Airedale Terrier, often called the King of Terriers, hails from England. Originally bred for hunting and as a working dog, the Airedale is versatile and excels in various roles. With a distinct appearance and confident demeanor, they make loyal companions."' +
  "}," +
  '"american_staffordshire_terrier": {' +
  '"features": ["Courageous", "Affectionate", "Smart"],' +
  '"history": "The American Staffordshire Terrier, known for its muscular build and affectionate nature, has roots in the United States. Originally bred for dog fighting, their friendly disposition has made them popular as family pets. They are loyal, smart, and adaptable."' +
  "}," +
  '"appenzeller": {' +
  '"features": ["Energetic", "Lively", "Intelligent"],' +
  '"history": "The Appenzeller, a Swiss mountain dog, is known for its agility and herding capabilities. With a striking tricolor coat and energetic personality, these dogs were traditionally used for driving cattle in the Swiss Alps. They are intelligent, loyal, and make excellent working dogs."' +
  "}," +
  '"australian_terrier": {' +
  '"features": ["Alert", "Courageous", "Loyal"],' +
  '"history": "The Australian Terrier, originating in Australia, is a small but sturdy breed with a keen sense of alertness. Bred for vermin control, these dogs are courageous and make excellent watchdogs. Despite their size, they are known for their loyalty and affection."' +
  "}," +
  '"basenji": {' +
  '"features": ["Curious", "Energetic", "Independent"],' +
  '"history": "The Basenji, known as the Barkless Dog, has ancient origins in Africa. Originally bred for hunting, these dogs are characterized by their yodel-like vocalizations. Basenjis are independent, curious, and possess a unique set of skills."' +
  "}," +
  '"basset": {' +
  '"features": ["Gentle", "Friendly", "Good-natured"],' +
  '"history": "The Basset Hound, a scent hound with a distinctive appearance, originated in France. Bred for hunting small game, particularly rabbits, their keen sense of smell and gentle demeanor make them wonderful companions. Bassets are known for their long ears and soulful expression."' +
  "}," +
  '"beagle": {' +
  '"features": ["Friendly", "Curious", "Merry"],' +
  '"history": "The Beagle, a small hound breed, has a history rooted in hunting and companionship. Known for their keen sense of smell and friendly disposition, Beagles make excellent family pets. Their merry and curious nature endears them to many."' +
  "}," +
  '"bedlington_terrier": {' +
  '"features": ["Gentle", "Affectionate", "Energetic"],' +
  '"history": "The Bedlington Terrier, originating in England, is known for its distinctive lamb-like appearance. Initially bred for mining work and vermin control, these terriers are affectionate and energetic. Despite their gentle nature, they have a determined and brave disposition."' +
  "}," +
  '"bernese_mountain_dog": {' +
  '"features": ["Gentle", "Affectionate", "Strong"],' +
  '"history": "The Bernese Mountain Dog, originating in Switzerland, is a large and sturdy working breed. Known for their gentle and affectionate temperament, Bernese Mountain Dogs were traditionally used as draft animals and for herding cattle. They are strong, loyal, and make excellent family companions."' +
  "}," +
  '"black-and-tan_coonhound": {' +
  '"features": ["Independent", "Intelligent", "Courageous"],' +
  '"history": "The Black and Tan Coonhound, an American breed, is known for its tracking and hunting abilities. Originally bred for trailing and treeing raccoons, these dogs are independent and possess a keen sense of smell. They are courageous and make loyal companions."' +
  "}," +
  '"blenheim_spaniel": {' +
  '"features": ["Affectionate", "Gentle", "Playful"],' +
  '"history": "The Blenheim Spaniel, a variety of the Cavalier King Charles Spaniel, has royal origins in England. Named after Blenheim Palace, these spaniels were favored by royalty. With a sweet and affectionate nature, Blenheims make wonderful companions."' +
  "}," +
  '"bloodhound": {' +
  '"features": ["Gentle", "Determined", "Keen Nose"],' +
  '"history": "The Bloodhound, known for its exceptional sense of smell, has a long history dating back to medieval Europe. Originally bred for tracking, these dogs have a gentle and affectionate nature. Their keen nose makes them invaluable in search and rescue operations."' +
  "}," +
  '"bluetick": {' +
  '"features": ["Friendly", "Determined", "Energetic"],' +
  '"history": "The Bluetick Coonhound, a Southern American breed, is known for its striking coat pattern and determination in tracking. Originally developed for hunting raccoons and other small game, these dogs are friendly and energetic. They excel in scent work and make loyal companions."' +
  "}," +
  '"border_collie": {' +
  '"features": ["Intelligent", "Energetic", "Hardworking"],' +
  '"history": "The Border Collie, originating on the Scottish-English border, is a highly intelligent herding dog. Known for their work ethic and agility, Border Collies are used in various canine sports and activities. They are loyal, energetic, and excel in obedience training."' +
  "}," +
  '"border_terrier": {' +
  '"features": ["Alert", "Fearless", "Good-natured"],' +
  '"history": "The Border Terrier, hailing from England, is a small but hardy terrier breed. Bred for vermin control, these dogs are characterized by their alert expression and fearless nature. Border Terriers are good-natured and make affectionate family pets."' +
  "}," +
  '"borzoi": {' +
  '"features": ["Elegant", "Gentle", "Independent"],' +
  '"history": "The Borzoi, originally known as the Russian Wolfhound, has aristocratic roots in Russia. Bred for hunting wolves, these dogs are characterized by their elegant appearance and independent nature. Borzois are gentle and loyal companions."' +
  "}," +
  '"boston_bull": {' +
  '"features": ["Friendly", "Intelligent", "Alert"],' +
  '"history": "The Boston Bull Terrier, commonly known as the Boston Terrier, has American origins. Bred for companionship, these dogs are characterized by their tuxedo-like coat pattern and friendly demeanor. Boston Terriers are intelligent, alert, and make excellent family pets."' +
  "}," +
  '"bouvier_des_flandres": {' +
  '"features": ["Loyal", "Protective", "Gentle"],' +
  '"history": "The Bouvier des Flandres, originating in Belgium, is a versatile working dog. Bred for herding cattle and pulling carts, Bouviers are known for their loyalty and protective nature. They are gentle giants, making them excellent family guardians."' +
  "}," +
  '"boxer": {' +
  '"features": ["Energetic", "Playful", "Loyal"],' +
  '"history": "The Boxer, originating in Germany, is a medium to large-sized working breed. Known for their athleticism and playful nature, Boxers were initially used for hunting and guarding. They are energetic, loyal, and make excellent family companions."' +
  "}," +
  '"brabancon_griffon": {' +
  '"features": ["Curious", "Charming", "Intelligent"],' +
  '"history": "The Brabancon Griffon, a small toy breed, has Belgian origins. Known for their charming and expressive faces, these dogs were originally bred for vermin control. Brabancon Griffons are curious, intelligent, and make delightful companions."' +
  "}," +
  '"briard": {' +
  '"features": ["Loyal", "Intelligent", "Protective"],' +
  '"history": "The Briard, a French herding breed, has a long history dating back to medieval France. Known for their loyalty and intelligence, Briards were used for herding and guarding. They are protective, affectionate, and make devoted family members."' +
  "}," +
  '"brittany_spaniel": {' +
  '"features": ["Energetic", "Intelligent", "Affectionate"],' +
  '"history": "The Brittany Spaniel, known for its versatility and bird-hunting skills, has French origins. Originally bred for pointing and retrieving game, Brittanys are energetic and intelligent. They make affectionate companions and excel in various canine sports."' +
  "}," +
  '"bull_mastiff": {' +
  '"features": ["Gentle", "Courageous", "Loyal"],' +
  '"history": "The Bullmastiff, a large and powerful breed, has British origins. Bred for guarding estates, these dogs are a combination of bulldog and mastiff. Bullmastiffs are known for their gentle nature, courage, and loyalty."' +
  "}," +
  '"cairn": {' +
  '"features": ["Alert", "Energetic", "Fearless"],' +
  '"history": "The Cairn Terrier is a small, sturdy dog that originated in Scotland. Bred for hunting and guarding, Cairns are known for their alertness, energy, and fearless disposition."' +
  "}," +
  '"cardigan": {' +
  '"features": ["Intelligent", "Affectionate", "Loyal"],' +
  '"history": "The Cardigan Welsh Corgi, originating in Wales, is a herding breed known for its intelligence, affectionate nature, and loyalty. Cardigans make excellent companions and are versatile in various activities."' +
  "}," +
  '"chesapeake_bay_retriever": {' +
  '"features": ["Intelligent", "Loyal", "Courageous"],' +
  '"history": "The Chesapeake Bay Retriever is an American breed developed for retrieving in harsh water conditions. Known for their intelligence, loyalty, and courageous nature, Chesapeakes are excellent working dogs and loyal companions."' +
  "}," +
  '"chihuahua": {' +
  '"features": ["Alert", "Graceful", "Devoted"],' +
  '"history": "The Chihuahua, originating in Mexico, is a small and alert toy breed. Known for their grace and devotion to their owners, Chihuahuas make charming and affectionate companions."' +
  "}," +
  '"chow": {' +
  '"features": ["Loyal", "Dignified", "Independent"],' +
  '"history": "The Chow Chow, originating in China, is known for its distinctive lion-like mane and a dignified demeanor. Chows are loyal, independent, and have a rich history as guard and hunting dogs."' +
  "}," +
  '"clumber": {' +
  '"features": ["Gentle", "Affectionate", "Determined"],' +
  '"history": "The Clumber Spaniel, originating in England, is a large and gentle sporting breed. Known for their affectionate nature and determination in the field, Clumbers make excellent family companions."' +
  "}," +
  '"cocker_spaniel": {' +
  '"features": ["Gentle", "Smart", "Energetic"],' +
  '"history": "The Cocker Spaniel, with origins in England and America, is a popular sporting breed. Known for their gentle nature, intelligence, and energy, Cockers excel as both companions and working dogs."' +
  "}," +
  '"collie": {' +
  '"features": ["Intelligent", "Gentle", "Devoted"],' +
  '"history": "The Collie, originating in Scotland, is a herding breed known for its intelligence, gentleness, and devotion. Collies have a rich history as herders and have become beloved family pets."' +
  "}," +
  '"curly-coated_retriever": {' +
  '"features": ["Confident", "Independent", "Energetic"],' +
  '"history": "The Curly-Coated Retriever is a versatile hunting breed with origins in England. Known for their confidence, independence, and energy, Curlies excel in retrieving game both on land and in water."' +
  "}," +
  '"dandie_dinmont": {' +
  '"features": ["Curious", "Determined", "Loyal"],' +
  '"history": "The Dandie Dinmont Terrier, originating in Scotland, is a small terrier breed. Known for their curiosity, determination, and loyalty, Dandies have a distinct appearance and make charming companions."' +
  "}," +
  '"dhole": {' +
  '"features": ["Social", "Energetic", "Intelligent"],' +
  '"history": "The Dhole, also known as the Asiatic Wild Dog, is a social and highly energetic species. With a keen intelligence and complex social structure, Dholes are known for their cooperative hunting."' +
  "}," +
  '"dingo": {' +
  '"features": ["Adaptable", "Clever", "Independent"],' +
  '"history": "The Dingo, native to Australia, is a wild canine known for its adaptability, cleverness, and independent nature. Dingoes have a long history in Australian ecosystems."' +
  "}," +
  '"doberman": {' +
  '"features": ["Energetic", "Intelligent", "Loyal"],' +
  '"history": "The Doberman Pinscher, originating in Germany, is a medium to large-sized breed. Known for their energy, intelligence, and loyalty, Dobermans have been used as guard dogs, police dogs, and loyal family pets."' +
  "}," +
  '"english_foxhound": {' +
  '"features": ["Gentle", "Sociable", "Energetic"],' +
  '"history": "The English Foxhound is a medium to large hunting breed known for its gentle and sociable nature. Bred for endurance and a keen sense of smell, English Foxhounds have a rich history as fox hunting companions."' +
  "}," +
  '"english_setter": {' +
  '"features": ["Gentle", "Loyal", "Energetic"],' +
  '"history": "The English Setter is a graceful and elegant hunting breed with a gentle and loyal temperament. Known for their energy and keen sense of smell, English Setters have a history of working alongside hunters in the field."' +
  "}," +
  '"english_springer": {' +
  '"features": ["Friendly", "Energetic", "Intelligent"],' +
  '"history": "The English Springer Spaniel is a friendly and energetic sporting breed. Known for their intelligence and versatility, English Springers have a history of excelling in retrieving and flushing game during hunting."' +
  "}," +
  '"entlebucher": {' +
  '"features": ["Loyal", "Energetic", "Protective"],' +
  '"history": "The Entlebucher Mountain Dog, originating in Switzerland, is a loyal and energetic working breed. Bred for herding and guarding, Entlebuchers have a history of being versatile farm dogs in the Swiss Alps."' +
  "}," +
  '"eskimo_dog": {' +
  '"features": ["Friendly", "Alert", "Adaptable"],' +
  '"history": "The Eskimo Dog, also known as the American Eskimo Dog, is a friendly and adaptable breed. Bred for various tasks, including herding and performing tricks, Eskimo Dogs have a history as versatile companions and performers."' +
  "}," +
  '"flat-coated_retriever": {' +
  '"features": ["Outgoing", "Optimistic", "Waggy"],' +
  '"history": "The Flat-Coated Retriever is an outgoing and optimistic sporting breed. Known for their friendly nature and waggy tails, Flat-Coats have a history as versatile retrievers, excelling in both land and water retrieval."' +
  "}," +
  '"french_bulldog": {' +
  '"features": ["Adaptable", "Affectionate", "Charming"],' +
  '"history": "The French Bulldog is an adaptable and charming companion breed. Known for their affectionate nature and unique appearance, French Bulldogs have a history as delightful and affectionate city companions."' +
  "}," +
  '"german_shepherd": {' +
  '"features": ["Intelligent", "Loyal", "Versatile"],' +
  '"history": "The German Shepherd is an intelligent and versatile working breed. Known for their loyalty and trainability, German Shepherds have a history of serving as police and military dogs, as well as loyal family protectors."' +
  "}," +
  '"german_short-haired_pointer": {' +
  '"features": ["Energetic", "Intelligent", "Versatile"],' +
  '"history": "The German Shorthaired Pointer is an energetic and intelligent hunting breed. Known for their versatility in pointing and retrieving, German Shorthaired Pointers have a history as excellent hunting companions and family dogs."' +
  "}," +
  '"giant_schnauzer": {' +
  '"features": ["Bold", "Intelligent", "Loyal"],' +
  '"history": "The Giant Schnauzer is a bold and intelligent working breed. Bred for guarding and herding, Giant Schnauzers have a history as versatile working dogs with a strong sense of loyalty to their families."' +
  "}," +
  '"golden_retriever": {' +
  '"features": ["Intelligent", "Loyal", "Friendly"],' +
  '"history": "The Golden Retriever is an intelligent and friendly sporting breed. Known for their loyalty and versatility, Golden Retrievers have a history as excellent retrievers, guide dogs, and family companions."' +
  "}," +
  '"gordon_setter": {' +
  '"features": ["Confident", "Gentle", "Loyal"],' +
  '"history": "The Gordon Setter is a confident and gentle sporting breed. Known for their loyalty and distinctive black and tan coat, Gordon Setters have a history as skilled bird hunters and devoted family members."' +
  "}," +
  '"great_dane": {' +
  '"features": ["Gentle", "Devoted", "Dignified"],' +
  '"history": "The Great Dane is a gentle and dignified giant breed. Known for their size and gentle nature, Great Danes have a history as majestic guard dogs and loyal family protectors."' +
  "}," +
  '"great_pyrenees": {' +
  '"features": ["Gentle", "Fearless", "Loyal"],' +
  '"history": "The Great Pyrenees is a gentle and fearless guardian breed. Known for their loyalty and protective instincts, Great Pyrenees have a history as excellent livestock guardians in mountainous regions."' +
  "}," +
  '"greater_swiss_mountain_dog": {' +
  '"features": ["Gentle", "Versatile", "Sturdy"],' +
  '"history": "The Greater Swiss Mountain Dog is a gentle and versatile working breed. Known for their sturdy build and friendly nature, Greater Swiss Mountain Dogs have a history as strong and capable draft and farm dogs."' +
  "}," +
  '"groenendael": {' +
  '"features": ["Intelligent", "Energetic", "Alert"],' +
  '"history": "The Groenendael, a variety of the Belgian Shepherd, is an intelligent and energetic herding breed. Known for their alertness and versatility, Groenendaels have a history as skilled herders and loyal companions."' +
  "}," +
  '"ibizan_hound": {' +
  '"features": ["Agile", "Elegant", "Independent"],' +
  '"history": "The Ibizan Hound is an agile and elegant breed originating from Spain. Known for their independent nature and remarkable hunting skills, Ibizan Hounds have a history as adept sight hounds used in hunting."' +
  "}," +
  '"irish_setter": {' +
  '"features": ["Energetic", "Friendly", "Playful"],' +
  '"history": "The Irish Setter is an energetic and friendly sporting breed. Known for their playful nature and distinctive mahogany coat, Irish Setters have a history as versatile bird dogs and loving family companions."' +
  "}," +
  '"irish_terrier": {' +
  '"features": ["Courageous", "Loyal", "Spunky"],' +
  '"history": "The Irish Terrier is a courageous and spunky terrier breed. Known for their loyalty and distinctive red coat, Irish Terriers have a history as fearless farm and hunting dogs with a friendly disposition."' +
  "}," +
  '"irish_water_spaniel": {' +
  '"features": ["Adaptable", "Intelligent", "Water-loving"],' +
  '"history": "The Irish Water Spaniel is an adaptable and intelligent sporting breed. Known for their love of water and distinctive curly coat, Irish Water Spaniels have a history as skilled water retrievers and companions."' +
  "}," +
  '"irish_wolfhound": {' +
  '"features": ["Gentle", "Dignified", "Massive"],' +
  '"history": "The Irish Wolfhound is a gentle and massive giant breed. Known for their dignified nature and imposing size, Irish Wolfhounds have a history as ancient war dogs and cherished companions of Irish nobility."' +
  "}," +
  '"italian_greyhound": {' +
  '"features": ["Graceful", "Affectionate", "Sleek"],' +
  '"history": "The Italian Greyhound is a graceful and affectionate toy breed. Known for their sleek appearance and gentle demeanor, Italian Greyhounds have a history as companion dogs favored by nobility throughout history."' +
  "}," +
  '"japanese_spaniel": {' +
  '"features": ["Charming", "Affectionate", "Alert"],' +
  '"history": "The Japanese Spaniel, also known as the Chin, is a charming and alert toy breed. Known for their affectionate nature and distinctive appearance, Japanese Spaniels have a history as cherished companion dogs in Japanese culture."' +
  "}," +
  '"keeshond": {' +
  '"features": ["Friendly", "Energetic", "Alert"],' +
  '"history": "The Keeshond is a friendly and alert spitz-type breed originating from the Netherlands. Known for their distinctive fox-like expression and thick double coat, Keeshonds have a history as companions and watchdogs on Dutch barges."' +
  "}," +
  '"kelpie": {' +
  '"features": ["Intelligent", "Energetic", "Hardworking"],' +
  '"history": "The Australian Kelpie is an intelligent and hardworking herding breed. Known for their energy and agility, Kelpies have a history as skilled herders and versatile working dogs in Australia."' +
  "}," +
  '"kerry_blue_terrier": {' +
  '"features": ["Curious", "Loyal", "Playful"],' +
  '"history": "The Kerry Blue Terrier is a curious and playful terrier breed. Known for their distinctive blue coat and charming personality, Kerry Blues have a history as versatile farm dogs and vermin hunters in Ireland."' +
  "}," +
  '"komondor": {' +
  '"features": ["Fearless", "Gentle", "Dignified"],' +
  '"history": "The Komondor is a fearless and dignified livestock guardian breed originating from Hungary. Known for their unique corded coat and protective nature, Komondors have a history as guardians of sheep and other livestock."' +
  "}," +
  '"kuvasz": {' +
  '"features": ["Loyal", "Brave", "Gentle"],' +
  '"history": "The Kuvasz is a loyal and gentle Hungarian guardian breed. Known for their bravery and protective instincts, Kuvasz dogs have a history as guardians of livestock and royal companions in Hungary."' +
  "}," +
  '"labrador_retriever": {' +
  '"features": ["Friendly", "Intelligent", "Energetic"],' +
  '"history": "The Labrador Retriever is a friendly and intelligent sporting breed. Known for their versatility, Labs have a history as excellent retrievers, guide dogs, and family companions."' +
  "}," +
  '"lakeland_terrier": {' +
  '"features": ["Bold", "Friendly", "Alert"],' +
  '"history": "The Lakeland Terrier is a bold and friendly terrier breed. Known for their distinctive wire coat and friendly nature, Lakelands have a history as skilled vermin hunters and family companions."' +
  "}," +
  '"leonberg": {' +
  '"features": ["Gentle", "Adaptable", "Powerful"],' +
  '"history": "The Leonberger is a gentle and powerful giant breed originating from Germany. Known for their adaptability and friendly nature, Leonbergers have a history as versatile working dogs and loyal family guardians."' +
  "}," +
  '"lhasa": {' +
  '"features": ["Loyal", "Intelligent", "Independent"],' +
  '"history": "The Lhasa Apso is a loyal and independent toy breed originating from Tibet. Known for their distinctive long coat and alertness, Lhasas have a history as palace guards and cherished companions in Tibetan monasteries."' +
  "}," +
  '"malamute": {' +
  '"features": ["Strong", "Friendly", "Independent"],' +
  '"history": "The Alaskan Malamute is a strong and independent working breed. Known for their endurance and friendly disposition, Malamutes have a history as sled dogs, hauling freight in the Arctic regions."' +
  "}," +
  '"malinois": {' +
  '"features": ["Intelligent", "Loyal", "Energetic"],' +
  '"history": "The Belgian Malinois is an intelligent and loyal herding breed. Known for their energy and versatility, Malinois dogs have a history as herders and police/military working dogs."' +
  "}," +
  '"maltese_dog": {' +
  '"features": ["Gentle", "Affectionate", "Elegant"],' +
  '"history": "The Maltese is a gentle and elegant toy breed. Known for their luxurious long coat and affectionate nature, Maltese dogs have a history as companions favored by nobility throughout history."' +
  "}," +
  '"mexican_hairless": {' +
  '"features": ["Alert", "Agile", "Loyal"],' +
  '"history": "The Mexican Hairless, also known as the Xoloitzcuintli, is an alert and agile breed with a loyal disposition. Known for their unique appearance and ancient history, Xolos were considered sacred by the Aztecs."' +
  "}," +
  '"miniature_pinscher": {' +
  '"features": ["Fearless", "Energetic", "Alert"],' +
  '"history": "The Miniature Pinscher is a fearless and energetic toy breed. Known for their alertness and confident demeanor, Min Pins have a history as skilled vermin hunters and spirited companions."' +
  "}," +
  '"miniature_poodle": {' +
  '"features": ["Intelligent", "Adaptable", "Graceful"],' +
  '"history": "The Miniature Poodle is an intelligent and adaptable toy breed. Known for their graceful appearance and versatility, Miniature Poodles have a history as water retrievers and companions in various settings."' +
  "}," +
  '"miniature_schnauzer": {' +
  '"features": ["Smart", "Fearless", "Affectionate"],' +
  '"history": "The Miniature Schnauzer is a smart and fearless terrier breed. Known for their distinctive beard and eyebrows, Mini Schnauzers have a history as skilled vermin hunters and delightful family companions."' +
  "}," +
  '"newfoundland": {' +
  '"features": ["Gentle", "Sweet-natured", "Strong"],' +
  '"history": "The Newfoundland is a gentle and sweet-natured giant breed. Known for their strength and water-rescue abilities, Newfoundlands have a history as water rescue dogs and loyal family companions."' +
  "}," +
  '"norfolk_terrier": {' +
  '"features": ["Adventurous", "Loyal", "Compact"],' +
  '"history": "The Norfolk Terrier is an adventurous and loyal terrier breed. Known for their compact size and friendly nature, Norfolks have a history as skilled ratting dogs and charming companions."' +
  "}," +
  '"norwegian_elkhound": {' +
  '"features": ["Vigilant", "Energetic", "Independent"],' +
  '"history": "The Norwegian Elkhound is a vigilant and energetic hunting breed. Known for their independence and endurance, Elkhounds have a history as skilled hunters and guardians in the rugged Norwegian landscape."' +
  "}," +
  '"norwich_terrier": {' +
  '"features": ["Affectionate", "Brave", "Sociable"],' +
  '"history": "The Norwich Terrier is an affectionate and brave terrier breed. Known for their sociable nature and fox-like expression, Norwichterriers have a history as ratting dogs and delightful companions."' +
  "}," +
  '"old_english_sheepdog": {' +
  '"features": ["Adaptable", "Intelligent", "Gentle"],' +
  '"history": "The Old English Sheepdog is an adaptable and intelligent herding breed. Known for their distinctive Bobtail appearance and gentle nature, Old English Sheepdogs have a history as herders of sheep and cattle in England."' +
  "}," +
  '"otterhound": {' +
  '"features": ["Affectionate", "Determined", "Gentle"],' +
  '"history": "The Otterhound is an affectionate and determined hunting breed. Known for their large, webbed feet and excellent sense of smell, Otterhounds have a history as skilled hunters of otters in England."' +
  "}," +
  '"papillon": {' +
  '"features": ["Intelligent", "Graceful", "Alert"],' +
  '"history": "The Papillon is an intelligent and graceful toy breed. Known for their distinctive butterfly-like ears and alert demeanor, Papillons have a history as companion dogs favored by European royalty."' +
  "}," +
  '"pekinese": {' +
  '"features": ["Regal", "Affectionate", "Confident"],' +
  '"history": "The Pekingese is a regal and affectionate toy breed. Known for their distinctive lion-like mane and confident demeanor, Pekingeses have a history as companions of Chinese royalty for over 2,000 years."' +
  "}," +
  '"pembroke": {' +
  '"features": ["Intelligent", "Energetic", "Affectionate"],' +
  '"history": "The Pembroke Welsh Corgi is an intelligent and energetic herding breed. Known for their distinctive appearance and friendly nature, Pembrokes have a history as herders of cattle in Wales."' +
  "}," +
  '"pomeranian": {' +
  '"features": ["Bold", "Curious", "Adaptable"],' +
  '"history": "The Pomeranian is a bold and curious toy breed. Known for their luxurious double coat and lively personality, Pomeranians have a history as companions favored by European nobility."' +
  "}," +
  '"pug": {' +
  '"features": ["Charming", "Affectionate", "Sociable"],' +
  '"history": "The Pug is a charming and affectionate toy breed. Known for their distinctive wrinkled face and sociable nature, Pugs have a history as companions in Chinese and European courts."' +
  "}," +
  '"redbone": {' +
  '"features": ["Friendly", "Energetic", "Hunting Instinct"],' +
  '"history": "The Redbone Coonhound is a friendly and energetic hunting breed. Known for their striking red coat and hunting instincts, Redbones have a history as skilled raccoon hunters in the Southern United States."' +
  "}," +
  '"rhodesian_ridgeback": {' +
  '"features": ["Loyal", "Strong-willed", "Courageous"],' +
  '"history": "The Rhodesian Ridgeback is a loyal and strong-willed hunting breed. Known for the distinctive ridge of hair along their back and courageous nature, Rhodesian Ridgebacks have a history as versatile hunters and guardians in Southern Africa."' +
  "}," +
  '"rottweiler": {' +
  '"features": ["Loyal", "Confident", "Fearless"],' +
  '"history": "The Rottweiler is a loyal and confident working breed. Known for their fearless nature and strong build, Rottweilers have a history as herders and guard dogs, originating from the Roman Empire."' +
  "}," +
  '"saint_bernard": {' +
  '"features": ["Gentle", "Generous", "Powerful"],' +
  '"history": "The Saint Bernard is a gentle and powerful giant breed. Known for their generous nature and remarkable rescue abilities in the Swiss Alps, Saint Bernards have a history as rescue dogs and loyal companions."' +
  "}," +
  '"saluki": {' +
  '"features": ["Graceful", "Independent", "Swift"],' +
  '"history": "The Saluki is a graceful and independent hunting breed. Known for their swift running and elegant appearance, Salukis have a history as ancient hunting companions in the Middle East."' +
  "}," +
  '"samoyed": {' +
  '"features": ["Friendly", "Gentle", "Adaptable"],' +
  '"history": "The Samoyed is a friendly and adaptable working breed. Known for their fluffy white coat and friendly nature, Samoyeds have a history as sled dogs and companions to the Samoyedic people in Siberia."' +
  "}," +
  '"schipperke": {' +
  '"features": ["Curious", "Energetic", "Alert"],' +
  '"history": "The Schipperke is a curious and energetic breed. Known for their distinctive appearance and alert demeanor, Schipperkes have a history as versatile boat dogs and companions in Belgium."' +
  "}," +
  '"scotch_terrier": {' +
  '"features": ["Independent", "Alert", "Courageous"],' +
  '"history": "The Scottish Terrier, also known as the Scottie, is an independent and courageous terrier breed. Known for their distinctive appearance and hunting skills, Scottish Terriers have a history as ratting dogs in Scotland."' +
  "}," +
  '"scottish_deerhound": {' +
  '"features": ["Gentle", "Dignified", "Powerful"],' +
  '"history": "The Scottish Deerhound is a gentle and dignified hunting breed. Known for their powerful build and hunting prowess, Scottish Deerhounds have a history as deer hunters in the Scottish Highlands."' +
  "}," +
  '"sealyham_terrier": {' +
  '"features": ["Courageous", "Friendly", "Alert"],' +
  '"history": "The Sealyham Terrier is a courageous and friendly terrier breed. Known for their distinctive appearance and hunting abilities, Sealyhams have a history as skilled vermin hunters in Wales."' +
  "}," +
  '"shetland_sheepdog": {' +
  '"features": ["Intelligent", "Energetic", "Loyal"],' +
  '"history": "The Shetland Sheepdog, also known as the Sheltie, is an intelligent and energetic herding breed. Known for their loyalty and herding instincts, Shelties have a history as herders in the Shetland Islands."' +
  "}," +
  '"shih-tzu": {' +
  '"features": ["Affectionate", "Outgoing", "Playful"],' +
  '"history": "The Shih Tzu is an affectionate and outgoing toy breed. Known for their playful nature and distinctive appearance, Shih Tzus have a history as companions favored by Chinese royalty."' +
  "}," +
  '"siberian_husky": {' +
  '"features": ["Friendly", "Adventurous", "Independent"],' +
  '"history": "The Siberian Husky is a friendly and adventurous working breed. Known for their endurance and independence, Siberian Huskies have a history as sled dogs and companions to the Chukchi people in Siberia."' +
  "}," +
  '"silky_terrier": {' +
  '"features": ["Elegant", "Alert", "Friendly"],' +
  '"history": "The Silky Terrier is an elegant and alert toy breed. Known for their silky, flowing coat and friendly nature, Silky Terriers have a history as companion dogs with Terrier instincts, originating in Australia."' +
  "}," +
  '"soft-coated_wheaten_terrier": {' +
  '"features": ["Friendly", "Playful", "Affectionate"],' +
  '"history": "The Soft Coated Wheaten Terrier is a friendly and playful terrier breed. Known for their soft, silky coat and affectionate nature, Wheaten Terriers have a history as versatile farm dogs in Ireland."' +
  "}," +
  '"staffordshire_bullterrier": {' +
  '"features": ["Courageous", "Affectionate", "Strong"],' +
  '"history": "The Staffordshire Bull Terrier is a courageous and affectionate terrier breed. Known for their strong build and friendly nature, Staffies have a history as skilled ratting dogs and loyal family companions."' +
  "}," +
  '"standard_poodle": {' +
  '"features": ["Intelligent", "Elegant", "Versatile"],' +
  '"history": "The Standard Poodle is an intelligent and elegant working breed. Known for their versatile skills and distinctive coat, Standard Poodles have a history as water retrievers and performing dogs in various settings."' +
  "}," +
  '"standard_schnauzer": {' +
  '"features": ["Intelligent", "Fearless", "Robust"],' +
  '"history": "The Standard Schnauzer is an intelligent and fearless terrier breed. Known for their distinctive beard and robust build, Standard Schnauzers have a history as versatile working dogs, including ratting and herding."' +
  "}," +
  '"sussex_spaniel": {' +
  '"features": ["Gentle", "Affectionate", "Determined"],' +
  '"history": "The Sussex Spaniel is a gentle and affectionate sporting breed. Known for their determination and distinctive golden liver coat, Sussex Spaniels have a history as skilled hunting companions in England."' +
  "}," +
  '"tibetan_mastiff": {' +
  '"features": ["Independent", "Loyal", "Protective"],' +
  '"history": "The Tibetan Mastiff is an independent and loyal guardian breed. Known for their protective instincts and thick double coat, Tibetan Mastiffs have a history as guardians of livestock and homes in the Himalayan region."' +
  "}," +
  '"tibetan_terrier": {' +
  '"features": ["Lively", "Intelligent", "Friendly"],' +
  '"history": "The Tibetan Terrier is a lively and intelligent companion breed. Known for their friendly nature and long, flowing coat, Tibetan Terriers have a history as companions and herders in the monasteries of Tibet."' +
  "}," +
  '"toy_poodle": {' +
  '"features": ["Intelligent", "Elegant", "Playful"],' +
  '"history": "The Toy Poodle is an intelligent and elegant toy breed. Known for their playful nature and hypoallergenic coat, Toy Poodles have a history as companion dogs and performers in various settings."' +
  "}," +
  '"toy_terrier": {' +
  '"features": ["Courageous", "Alert", "Compact"],' +
  '"history": "The Toy Terrier is a courageous and alert toy breed. Known for their compact size and lively temperament, Toy Terriers have a history as ratting dogs and delightful companions."' +
  "}," +
  '"vizsla": {' +
  '"features": ["Energetic", "Affectionate", "Versatile"],' +
  '"history": "The Vizsla is an energetic and affectionate sporting breed. Known for their versatility and golden rust coat, Vizslas have a history as skilled hunters and loyal companions in Hungary."' +
  "}," +
  '"walker_hound": {' +
  '"features": ["Energetic", "Determined", "Versatile"],' +
  '"history": "The Walker Hound, often referring to the American English Coonhound, is an energetic and determined hunting breed. Known for their versatility and endurance, Walker Hounds have a history as raccoon and big-game hunters in the United States."' +
  "}," +
  '"weimaraner": {' +
  '"features": ["Graceful", "Loyal", "Energetic"],' +
  '"history": "The Weimaraner is a graceful and loyal sporting breed. Known for their distinctive silver-gray coat and boundless energy, Weimaraners have a history as versatile hunters and companions in Germany."' +
  "}," +
  '"welsh_springer_spaniel": {' +
  '"features": ["Friendly", "Adaptable", "Energetic"],' +
  '"history": "The Welsh Springer Spaniel is a friendly and adaptable sporting breed. Known for their boundless energy and red and white coat, Welsh Springers have a history as skilled hunters and family companions."' +
  "}," +
  '"west_highland_white_terrier": {' +
  '"features": ["Bold", "Friendly", "Confident"],' +
  '"history": "The West Highland White Terrier is a bold and friendly terrier breed. Known for their distinctive white coat and confident demeanor, Westies have a history as skilled vermin hunters and beloved companions."' +
  "}," +
  '"whippet": {' +
  '"features": ["Graceful", "Athletic", "Gentle"],' +
  '"history": "The Whippet is a graceful and athletic sighthound breed. Known for their speed and gentle nature, Whippets have a history as skilled hunters and racing dogs in England."' +
  "}," +
  '"wire-haired_fox_terrier": {' +
  '"features": ["Fearless", "Alert", "Friendly"],' +
  '"history": "The Wire-Haired Fox Terrier is a fearless and alert terrier breed. Known for their distinctive wire coat and friendly personality, Wire-Haired Fox Terriers have a history as skilled vermin hunters and family companions."' +
  "}," +
  '"yorkshire_terrier": {' +
  '"features": ["Bold", "Affectionate", "Compact"],' +
  '"history": "The Yorkshire Terrier, often known as the Yorkie, is a bold and affectionate toy breed. Known for their compact size and silky coat, Yorkies have a history as companions favored by Victorian-era mill workers in Yorkshire, England."' +
  "}" +
  "}}";
var jsonObject = JSON.parse(c);
console.log(jsonObject);

    $(document).ready(function () {
      // Init
      $(".image-section").hide();
      $(".loader").hide();
      $("#result").hide();
      $("#breed").hide();
      $("#feat").hide();
      $("#features").hide();
      // Upload Preview
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $("#img").css(
              "background-image",
              "url(" + e.target.result + ")"
            );
            $("#img").hide();
            $("#img").fadeIn(650);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#fil").change(function () {
        $(".image-section").show();
        $("#sub").show();
        $("#result").text("");
        $("#result").hide();
        $("#breed").text("");
        $("#breed").hide();
        $("#feat").text("");
        $("#feat").hide();
        $("#features").text("");
        $("#features").hide();
        readURL(this);
      });

      // Predict
      $("#sub").click(function () {
        var form_data = new FormData($("#upload-file")[0]);

        // Show loading animation
        $(this).hide();
        $(".loader").show();

        // Make prediction by calling api /predict
        $.ajax({
          type: "POST",
          url: "/predict",
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          async: true,
          success: function (data) {
            // Get and display the result
            $(".loader").hide();
            $("#breed").fadeIn(600);
            $("#breed").text(" Breed:  " + data);
            $("#features").fadeIn(600);
            
            $("#feat").fadeIn(600);
            $("#feat").text("History:");
            $("#result").fadeIn(600);
            console.log(data);
            let t = ""+data;
            $("#result").text(jsonObject.breed[t]["history"]);
            $("#features").text("Features:" + jsonObject.breed[t]["features"]);
            
          },
        });
        
      });
    });
  