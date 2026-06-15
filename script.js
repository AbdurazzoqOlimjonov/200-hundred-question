const QUESTIONS = [
	{ q: 'Which organ pumps blood?', opts: ['Liver', 'Kidney', 'Lung', 'Heart'], ans: 3 },
	{ q: 'Where do we breathe in oxygen?', opts: ['Lungs', 'Liver', 'Stomach', 'Brain'], ans: 0 },
	{ q: 'Which organ controls the body?', opts: ['Skin', 'Stomach', 'Brain', 'Kidney'], ans: 2 },
	{ q: 'Which organ cleans the blood?', opts: ['Kidneys', 'Intestine', 'Heart', 'Lungs'], ans: 0 },
	{ q: 'The skeleton is made of ___.', opts: ['nerves', 'skin', 'muscles', 'bones'], ans: 3 },
	{ q: 'The largest organ of the body is ___.', opts: ['liver', 'heart', 'eye', 'skin'], ans: 3 },
	{
		q: 'Where is the liver located?',
		opts: ['In the brain', 'In the neck', 'In the chest', 'In the right upper abdomen'],
		ans: 3,
	},
	{ q: 'Which part of the body connects the head and torso?', opts: ['Finger', 'Leg', 'Neck', 'Arm'], ans: 2 },
	{ q: 'What organ produces insulin?', opts: ['Pancreas', 'Brain', 'Lung', 'Liver'], ans: 0 },
	{ q: 'The heart is located in the ___.', opts: ['chest', 'head', 'leg', 'neck'], ans: 0 },
	{ q: 'The organ responsible for vision is the ___.', opts: ['mouth', 'eye', 'nose', 'ear'], ans: 1 },
	{ q: 'The ribs protect the ___.', opts: ['skin', 'eyes', 'legs', 'lungs'], ans: 3 },
	{ q: 'The kidneys are part of the ___ system.', opts: ['urinary', 'reproductive', 'digestive', 'respiratory'], ans: 0 },
	{ q: 'Which organ stores bile?', opts: ['Bladder', 'Gallbladder', 'Pancreas', 'Small intestine'], ans: 1 },
	{ q: 'Blood flows through ___.', opts: ['stomach', 'skin', 'lungs', 'arteries'], ans: 3 },
	{ q: 'The __ connects the mouth to the stomach.', opts: ['diaphragm', 'esophagus', 'trachea', 'artery'], ans: 1 },
	{ q: 'The diaphragm helps with ___.', opts: ['seeing', 'eating', 'hearing', 'breathing'], ans: 3 },
	{ q: 'The __ filters bacteria from the blood.', opts: ['tongue', 'spine', 'spleen', 'eye'], ans: 2 },
	{ q: 'The intestines are part of the ___ system.', opts: ['nervous', 'muscular', 'digestive', 'endocrine'], ans: 2 },
	{ q: 'The doctor is talking to ___.', opts: ['our', 'them', 'they', 'we'], ans: 1 },
	{ q: 'The small intestine is ___ than the large intestine.', opts: ['longest', 'longer', 'long', 'more long'], ans: 1 },
	{ q: 'There ___ no pain now.', opts: ['be', 'is', 'being', 'are'], ans: 1 },
	{ q: 'The patient has a problem with ___ lungs.', opts: ['he', 'him', 'his', 'their'], ans: 2 },
	{ q: 'The surgeon ___ the operation tomorrow.', opts: ['performs', 'is performing', 'will perform', 'perform'], ans: 2 },
	{ q: 'The blood flows ___ the veins.', opts: ['by', 'at', 'on', 'through'], ans: 3 },
	{ q: 'Where ___ the kidneys located?', opts: ['be', 'am', 'are', 'is'], ans: 2 },
	{ q: 'The patient ___ to the emergency room every week.', opts: ['comes', 'came', 'coming', 'come'], ans: 0 },
	{ q: 'The heart beats about ___ times a minute.', opts: ['sixty', 'sixteen', 'six', 'sixtyth'], ans: 0 },
	{ q: 'The doctor ___ blood pressure very carefully.', opts: ['measure', 'measured', 'measures', 'is measuring'], ans: 2 },
	{ q: 'The kidneys are located ___ the spine.', opts: ['on', 'in front of', 'behind', 'under'], ans: 2 },
	{ q: 'He ___ pain in his back now.', opts: ['feels', 'feeling', 'feel', 'is feeling'], ans: 3 },
	{ q: 'The lungs belong to the ___ system.', opts: ['respiratory', 'urinary', 'digestive', 'circulatory'], ans: 0 },
	{ q: 'The spleen is ___ organ of the lymphatic system.', opts: ['the', 'an', '–', 'a'], ans: 1 },
	{ q: 'The doctor ___ to check your temperature.', opts: ['wants', 'wantes', 'wanting', 'want'], ans: 0 },
	{ q: 'The heart lies ___ the lungs.', opts: ['into', 'on', 'between', 'at'], ans: 2 },
	{ q: 'The patient ___ not eat before surgery.', opts: ['must to', 'musts', 'must', 'is must'], ans: 2 },
	{ q: 'Which organ filters waste?', opts: ['liver', 'stomach', 'pancreas', 'heart'], ans: 0 },
	{ q: 'The professor ___ a lecture now.', opts: ['is giving', 'give', 'gives', 'giving'], ans: 0 },
	{ q: 'The tongue helps a person ___ food.', opts: ['taste', 'to tasting', 'tasted', 'tasting'], ans: 0 },
	{ q: 'The nurse gave ___ the medicine.', opts: ['him', 'he’s', 'his', 'he'], ans: 0 },
	{ q: 'The heart ___ faster during exercise.', opts: ['beating', 'beat', 'beated', 'beats'], ans: 3 },
	{ q: 'There ___ some blood on the table.', opts: ['are', 'be', 'were', 'is'], ans: 3 },
	{ q: 'The skull protects the ___.', opts: ['lungs', 'brain', 'kidneys', 'liver'], ans: 1 },
	{ q: 'We ___ the patient yesterday.', opts: ['examined', 'are examining', 'examines', 'examine'], ans: 0 },
	{ q: 'The diaphragm helps ___ breathing.', opts: ['on', 'in', 'with', 'at'], ans: 2 },
	{ q: 'She ___ always tired.', opts: ['be', 'is', 'are', 'am'], ans: 1 },
	{ q: 'The intestines are ___ of the digestive system.', opts: ['parts', 'a part', 'parted', 'part'], ans: 0 },
	{ q: 'The doctor usually ___ patients in the morning.', opts: ['saw', 'sees', 'seeing', 'see'], ans: 1 },
	{ q: 'The ribs protect the ___ organs.', opts: ['chest', 'leg', 'head', 'brain'], ans: 0 },
	{ q: 'The patient ___ take this medicine every 6 hours.', opts: ['is can', 'cans', 'can', 'can to'], ans: 2 },
	{
		q: 'The blood vessels are part of the ___ system.',
		opts: ['circulatory', 'muscular', 'respiratory', 'digestive'],
		ans: 0,
	},
	{ q: '___ is the organ that pumps blood?', opts: ['Where', 'Which', 'Who', 'What'], ans: 3 },
	{ q: 'The doctor ___ the patient’s pulse right now.', opts: ['checked', 'is checking', 'checking', 'checks'], ans: 1 },
	{ q: 'The doctor ___ a stethoscope to listen to the heart.', opts: ['using', 'is use', 'use', 'uses'], ans: 3 },
	{ q: 'The main function of the lungs is to ___ oxygen.', opts: ['transport', 'absorb', 'produce', 'digest'], ans: 1 },
	{ q: 'The kidneys are located ___ the back.', opts: ['on', 'in', 'in the lower part of', 'at'], ans: 2 },
	{ q: 'The nurse ___ the blood pressure every morning.', opts: ['checking', 'checks', 'check', 'is check'], ans: 1 },
	{ q: 'The heart is a part of the ___ system.', opts: ['skeletal', 'circulatory', 'digestive', 'nervous'], ans: 1 },
	{ q: 'He ___ not feel well today.', opts: ['did', 'is', 'does', 'do'], ans: 2 },
	{ q: 'The stomach helps the body ___ food.', opts: ['digests', 'to digestion', 'digest', 'digesting'], ans: 2 },
	{ q: 'The liver is ___ large organ.', opts: ['an', '–', 'the', 'a'], ans: 3 },
	{ q: 'The patient ___ pain in his chest yesterday.', opts: ['have', 'having', 'has', 'had'], ans: 3 },
	{ q: 'The skeleton is made of ___.', opts: ['lungs', 'muscles', 'organs', 'bones'], ans: 3 },
	{ q: 'Where ___ the heart located?', opts: ['are', 'am', 'be', 'is'], ans: 3 },
	{
		q: 'The intestines are responsible for ___ nutrients.',
		opts: ['absorption', 'absorb', 'absorbing', 'absorbed'],
		ans: 2,
	},
	{ q: 'The doctor ___ the patient right now.', opts: ['examined', 'examine', 'is examining', 'examines'], ans: 2 },
	{ q: 'The lungs are in the ___.', opts: ['chest', 'head', 'pelvis', 'abdomen'], ans: 0 },
	{ q: 'The professor is talking to ___.', opts: ['we', 'us', 'our', 'they'], ans: 1 },
	{ q: 'The blood ___ through arteries and veins.', opts: ['flowed', 'flowing', 'is flow', 'flows'], ans: 3 },
	{ q: 'She ___ a future surgeon.', opts: ['be', 'are', 'am', 'is'], ans: 3 },
	{ q: 'The brain controls all ___ functions.', opts: ['bodys', "body's", 'bodies', 'body'], ans: 3 },
	{ q: 'The diaphragm is located ___ the lungs.', opts: ['in', 'above', 'around', 'below'], ans: 3 },
	{ q: 'The doctor ___ the results yesterday.', opts: ['saw', 'seeing', 'see', 'sees'], ans: 0 },
	{ q: 'There ___ many nerves in the body.', opts: ['be', 'am', 'is', 'are'], ans: 3 },
	{ q: 'The heart ___ blood to all organs.', opts: ['is send', 'sending', 'send', 'sends'], ans: 3 },
	{ q: 'The students ___ anatomy every week.', opts: ['studied', 'studies', 'study', 'studying'], ans: 2 },
	{ q: 'The rib cage protects the ___.', opts: ['kidneys', 'stomach', 'heart and lungs', 'intestines'], ans: 2 },
	{ q: 'She ___ take this medicine today.', opts: ['musts', 'is must', 'must', 'must to'], ans: 2 },
	{ q: 'The liver ___ toxins from the blood.', opts: ['removing', 'removed', 'removes', 'remove'], ans: 2 },
	{ q: '___ eye is an important sense organ.', opts: ['The', 'A', '–', 'An'], ans: 3 },
	{ q: 'The stomach is located ___ the left side of the abdomen.', opts: ['in', 'by', 'at', 'on'], ans: 0 },
	{ q: 'The patient ___ better now.', opts: ['feeling', 'feels', 'feel', 'is feels'], ans: 1 },
	{ q: 'The kidneys help ___ blood pressure.', opts: ['controlled', 'control', 'controlling', 'to controlling'], ans: 1 },
	{ q: 'The doctor ___ not agree with this diagnosis.', opts: ['do', 'does', 'is', 'did'], ans: 1 },
	{ q: 'The spine is part of the ___ system.', opts: ['urinary', 'digestive', 'skeletal', 'respiratory'], ans: 2 },
	{ q: 'The nurse ___ the patient’s temperature now.', opts: ['taking', 'take', 'is taking', 'takes'], ans: 2 },
	{ q: 'The mouth is used for eating and ___.', opts: ['breathing', 'breathes', 'breathe', 'breath'], ans: 0 },
	{ q: '___ of these organs is the largest?', opts: ['What', 'Where', 'Which', 'Who'], ans: 2 },
	{ q: 'The brain ___ information from the senses.', opts: ['received', 'receive', 'receives', 'receiving'], ans: 2 },
	{ q: 'The heart is located ___ the lungs.', opts: ['above', 'behind', 'between', 'into'], ans: 2 },
	{ q: 'The muscles help the body ___.', opts: ['move', 'moving', 'movement', 'moved'], ans: 0 },
	{ q: 'There ___ no symptoms left.', opts: ['are', 'being', 'is', 'be'], ans: 0 },
	{ q: 'The intestines are part of the ___ system.', opts: ['respiratory', 'digestive', 'nervous', 'endocrine'], ans: 1 },
	{
		q: 'The professor ___ very fast, so students take notes quickly.',
		opts: ['speak', 'spoke', 'speaks', 'speaking'],
		ans: 2,
	},
	{ q: 'The nose helps the body with breathing and ___.', opts: ['smelling', 'seeing', 'taste', 'hearing'], ans: 0 },
	{ q: 'The patient ___ the pills yesterday evening.', opts: ['take', 'taking', 'takes', 'took'], ans: 3 },
	{ q: 'The ribs are made of ___.', opts: ['bone', 'fat', 'skin', 'muscle'], ans: 0 },
	{ q: 'The pancreas is ___ organ of the endocrine system.', opts: ['–', 'a', 'an', 'the'], ans: 2 },
	{
		q: 'The doctor ___ to call you tomorrow.',
		opts: ['is going to', 'will be going', 'is going to be', 'is going'],
		ans: 0,
	},
	{ q: 'The heart ___ blood through the body.', opts: ['pumps', 'pumping', 'pump', 'is pump'], ans: 0 },
	{ q: 'The lungs are part of the ___ system.', opts: ['urinary', 'endocrine', 'digestive', 'respiratory'], ans: 3 },
	{ q: 'The doctor ___ the results now.', opts: ['checks', 'is checking', 'checked', 'check'], ans: 1 },
	{ q: 'The kidneys help the body ___ waste.', opts: ['removed', 'removing', 'to removing', 'remove'], ans: 3 },
	{ q: '___ liver is one of the largest organs.', opts: ['–', 'The', 'An', 'A'], ans: 1 },
	{ q: 'The patient ___ not feel well today.', opts: ['is', 'did', 'do', 'does'], ans: 3 },
	{ q: 'The stomach is located ___ the left side.', opts: ['on', 'in', 'under', 'at'], ans: 1 },
	{ q: 'I ___ pain in my arm yesterday.', opts: ['have', 'having', 'had', 'has'], ans: 2 },
	{ q: 'The heart is protected by the ___.', opts: ['skull', 'ribs', 'spine', 'pelvis'], ans: 1 },
	{ q: 'The students ___ a lecture at the moment.', opts: ['attended', 'attend', 'are attending', 'attends'], ans: 2 },
	{ q: 'The skin protects the body from ___.', opts: ['digestion', 'infection', 'pumping', 'organs'], ans: 1 },
	{ q: 'The diaphragm lies ___ the lungs.', opts: ['into', 'above', 'below', 'on'], ans: 2 },
	{ q: 'The blood ___ oxygen to the tissues.', opts: ['carried', 'carrying', 'carry', 'carries'], ans: 3 },
	{ q: 'She ___ a medical student.', opts: ['am', 'is', 'be', 'are'], ans: 1 },
	{ q: 'The veins transport blood ___ the heart.', opts: ['by', 'in', 'to', 'on'], ans: 2 },
	{ q: 'The doctor ___ the patient yesterday.', opts: ['examines', 'examining', 'examine', 'examined'], ans: 3 },
	{ q: 'The small intestine is ___ than the large intestine.', opts: ['longest', 'more long', 'longer', 'long'], ans: 2 },
	{ q: 'The nurse called ___.', opts: ['him', 'his', 'he’s', 'he'], ans: 0 },
	{ q: 'The brain controls the ___ system.', opts: ['digestive', 'nervous', 'urinary', 'muscular'], ans: 1 },
	{ q: 'There ___ two lungs in the human body.', opts: ['are', 'is', 'be', 'am'], ans: 0 },
	{ q: 'The doctor uses a thermometer to measure ___.', opts: ['temperature', 'pressure', 'vision', 'hearing'], ans: 0 },
	{ q: 'The patient ___ take these pills tomorrow.', opts: ['must', 'must to', 'musts', 'is must'], ans: 0 },
	{ q: 'The spine is located ___ the back.', opts: ['in', 'on', 'in the middle of', 'at'], ans: 2 },
	{ q: 'He ___ the medicine now.', opts: ['taking', 'is taking', 'take', 'takes'], ans: 1 },
	{ q: 'The ribs form the ___.', opts: ['pelvis', 'rib cage', 'diaphragm', 'skull'], ans: 1 },
	{ q: 'The spleen is ___ organ of the immune system.', opts: ['an', 'the', 'a', '–'], ans: 0 },
	{ q: 'The stomach ___ food into nutrients.', opts: ['broke', 'break', 'breaking', 'breaks'], ans: 3 },
	{ q: 'There ___ no blood left.', opts: ['is', 'are', 'were', 'be'], ans: 0 },
	{ q: 'The pancreas produces ___.', opts: ['urine', 'oxygen', 'insulin', 'saliva'], ans: 2 },
	{ q: 'We ___ for the exam yesterday.', opts: ['prepared', 'preparing', 'prepares', 'prepare'], ans: 0 },
	{ q: 'The skull protects the ___.', opts: ['stomach', 'lungs', 'liver', 'brain'], ans: 3 },
	{ q: 'The heart is located ___ the chest.', opts: ['in', 'at', 'on', 'under'], ans: 0 },
	{ q: 'The intestines are part of the ___ system.', opts: ['circulatory', 'nervous', 'digestive', 'immune'], ans: 2 },
	{ q: 'The surgeon ___ the operation tomorrow.', opts: ['is perform', 'performed', 'performs', 'will perform'], ans: 3 },
	{ q: 'The liver is located ___ the right upper abdomen.', opts: ['into', 'on', 'at', 'in'], ans: 3 },
	{ q: 'The doctor ___ not agree with this conclusion.', opts: ['is', 'did', 'do', 'does'], ans: 3 },
	{ q: 'The blood travels through ___.', opts: ['nerves', 'muscles', 'bones', 'vessels'], ans: 3 },
	{ q: '___ organ pumps blood?', opts: ['Who', 'Where', 'Which', 'What'], ans: 3 },
	{ q: 'The lungs help the body ___ carbon dioxide.', opts: ['to removing', 'remove', 'removing', 'removed'], ans: 1 },
	{ q: 'We ___ to the hospital every week.', opts: ['gone', 'goes', 'go', 'going'], ans: 2 },
	{ q: 'The ribs protect the heart and ___.', opts: ['liver', 'lungs', 'stomach', 'kidneys'], ans: 1 },
	{ q: '___ eye is responsible for vision.', opts: ['A', '–', 'An', 'The'], ans: 2 },
	{ q: 'The patient ___ the pills this morning.', opts: ['takes', 'has  taken', 'taken', 'taking'], ans: 1 },
	{ q: 'There ___ a lot of oxygen in the lungs.', opts: ['are', 'being', 'be', 'is'], ans: 3 },
	{ q: 'The diaphragm is important for ___.', opts: ['seeing', 'hearing', 'breathing', 'eating'], ans: 2 },
	{ q: 'The students ___ the notes now.', opts: ['writing', 'write', 'are writing', 'writes'], ans: 2 },
	{ q: 'The doctor ___ many patients every day.', opts: ['seeing', 'see', 'seen', 'sees'], ans: 3 },
	{ q: 'The kidneys remove waste from the ___.', opts: ['skin', 'blood', 'stomach', 'brain'], ans: 1 },
	{ q: 'The heart is ___ important organ.', opts: ['a', '–', 'an', 'the'], ans: 2 },
	{ q: 'The nurse ___ the temperature now.', opts: ['measure', 'measured', 'is measuring', 'measures'], ans: 2 },
	{ q: 'The lungs are located in the ___.', opts: ['pelvis', 'chest', 'spine', 'head'], ans: 1 },
	{ q: 'He ___ not eat before operation.', opts: ['is must', 'musts', 'must to', 'must'], ans: 3 },
	{ q: 'The blood ___ nutrients to the cells.', opts: ['carry', 'carries', 'carried', 'is carry'], ans: 1 },
	{ q: 'The brain is part of the ___ system.', opts: ['endocrine', 'nervous', 'respiratory', 'digestive'], ans: 1 },
	{ q: 'The patient ___ better today.', opts: ['feeling', 'feels', 'feel', 'is feel'], ans: 1 },
	{ q: 'The stomach helps the body ___ food.', opts: ['digests', 'digestion', 'to digestion', 'digest'], ans: 3 },
	{ q: 'The heart is located ___ the lungs.', opts: ['between', 'on', 'around', 'at'], ans: 0 },
	{ q: 'The spine ___ the body upright.', opts: ['keep', 'keeping', 'kept', 'keeps'], ans: 3 },
	{ q: 'She ___ a nurse.', opts: ['is', 'be', 'am', 'are'], ans: 0 },
	{ q: 'The liver is located on the ___ side of the abdomen.', opts: ['left', 'upper', 'front', 'right'], ans: 3 },
	{ q: 'The doctor asked ___ to wait.', opts: ['us', 'our', 'we', 'they'], ans: 0 },
	{ q: 'The intestines are part of the ___ system.', opts: ['urinary', 'digestive', 'immune', 'endocrine'], ans: 1 },
	{ q: 'There ___ no patients in the room.', opts: ['be', 'are', 'is', 'were'], ans: 1 },
	{ q: 'The pancreas produces ___.', opts: ['oxygen', 'urine', 'blood', 'insulin'], ans: 3 },
	{
		q: 'The professor ___ the topic very clearly each lesson.',
		opts: ['explain', 'explains', 'is explain', 'explained'],
		ans: 1,
	},
	{ q: 'The diaphragm helps the body ___.', opts: ['hear', 'breathe', 'see', 'digest'], ans: 1 },
	{ q: 'The students ___ reading the text now.', opts: ['am', 'are', 'be', 'is'], ans: 1 },
	{ q: 'The ribs protect the ___.', opts: ['brain', 'lungs', 'intestines', 'kidneys'], ans: 1 },
	{ q: 'We ___ to the clinic tomorrow.', opts: ['going', 'go', 'will  go', 'goes'], ans: 2 },
	{ q: 'Blood pressure is measured in ___.', opts: ['grams', 'liters', 'millimeters', 'degrees'], ans: 2 },
	{ q: '___ organ cleans the blood?', opts: ['What', 'Which', 'Where', 'Who'], ans: 0 },
	{ q: 'The lungs ___ air when we breathe.', opts: ['inhaled', 'inhaling', 'inhale', 'are inhale'], ans: 2 },
	{ q: 'The doctor ___ the patient yesterday evening.', opts: ['see', 'saw', 'seen', 'seeing'], ans: 1 },
	{ q: 'The skin covers the ___.', opts: ['surface', 'organs', 'blood', 'bones'], ans: 1 },
	{ q: '___ pancreas is part of the digestive system.', opts: ['The', 'An', '–', 'A'], ans: 0 },
	{ q: 'The heart ___ faster during exercise.', opts: ['beating', 'beats', 'beat', 'beated'], ans: 1 },
	{ q: 'There ___ a lot of water in the body.', opts: ['are', 'be', 'were', 'is'], ans: 3 },
	{ q: 'The spine is made of many ___.', opts: ['bones', 'organs', 'veins', 'nerves'], ans: 0 },
	{ q: 'He ___ studying medicine now.', opts: ['am', 'are', 'is', 'be'], ans: 2 },
	{ q: 'The kidneys ___ urine.', opts: ['produces', 'produce', 'producing', 'produced'], ans: 1 },
	{
		q: 'The surgeon ___ an operation tomorrow.',
		opts: ['performed', 'will  perform', 'will performs', 'performs'],
		ans: 1,
	},
	{ q: 'The ribs form the ___.', opts: ['rib cage', 'rib wall', 'rib belt', 'rib head'], ans: 0 },
	{ q: 'The doctor ___ not understand the handwriting.', opts: ['did', 'does', 'do', 'are'], ans: 1 },
	{ q: 'Oxygen enters the blood through the ___.', opts: ['liver', 'heart', 'stomach', 'lungs'], ans: 3 },
	{ q: 'We ___ the exam results last week.', opts: ['get', 'gets', 'got', 'getting'], ans: 2 },
	{ q: 'The brain ___ all body movements.', opts: ['controlled', 'controls', 'control', 'controlling'], ans: 1 },
	{ q: 'The stomach is located ___ the diaphragm.', opts: ['on', 'above', 'between', 'under'], ans: 3 },
	{ q: 'The mouth helps with eating and ___.', opts: ['breathing', 'smelling', 'hearing', 'sensing'], ans: 0 },
	{ q: 'They ___ studying for the test now.', opts: ['is', 'be', 'am', 'are'], ans: 3 },
	{ q: 'The heart is a ___ muscle.', opts: ['voluntary', 'weak', 'strong', 'soft'], ans: 2 },
	{ q: 'The doctor asked ___ to return in two days.', opts: ['they', 'them', 'their', 'theirs'], ans: 1 },
	{ q: 'The stomach ___ food into smaller pieces.', opts: ['breaks', 'broke', 'break', 'breaking'], ans: 0 },
	{ q: 'There ___ many organs in the abdominal cavity.', opts: ['is', 'been', 'be', 'are'], ans: 3 },
	{ q: 'The lungs take in oxygen and release ___.', opts: ['helium', 'hydrogen', 'carbon dioxide', 'nitrogen'], ans: 2 },
	{ q: 'The doctor ___ the patient’s pulse at the moment.', opts: ['checking', 'checks', 'is checking', 'check'], ans: 2 },
];

let idx = 0,
	correct = 0,
	wrong = 0;
let answered = false;

const letters = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

// Shuffle all questions at start
let questions = shuffle([...QUESTIONS]);

function render() {
	const q = questions[idx];
	const total = questions.length;

	document.getElementById('q-num').textContent = 'QUESTION ' + (idx + 1);
	document.getElementById('q-text').textContent = q.q;
	document.getElementById('prog-text').textContent = 'Question ' + (idx + 1) + ' of ' + total;

	const pct = Math.round((idx / total) * 100);
	document.getElementById('pct').textContent = pct + '%';
	document.getElementById('prog-fill').style.width = pct + '%';

	document.getElementById('sc').textContent = correct;
	document.getElementById('sw').textContent = wrong;

	// Options
	const optDiv = document.getElementById('options');
	optDiv.innerHTML = '';

	q.opts.forEach((opt, i) => {
		const btn = document.createElement('button');
		btn.className = 'option';
		btn.onclick = () => answer(i);
		btn.innerHTML = `
      <span class="letter">${letters[i]}</span>
      <span class="opt-text">${opt}</span>
      <span class="mark"></span>
    `;
		optDiv.appendChild(btn);
	});

	document.getElementById('feedback').className = 'feedback';
	document.getElementById('feedback').textContent = '';
	document.getElementById('btn-next').className = 'btn-next';
	answered = false;
}

function answer(chosen) {
	if (answered) return;
	answered = true;

	const q = questions[idx];
	const correctIdx = q.ans;
	const optBtns = document.querySelectorAll('.option');

	optBtns.forEach((btn, i) => {
		btn.disabled = true;
		const mark = btn.querySelector('.mark');

		if (i === correctIdx) {
			btn.classList.add('correct');
			mark.textContent = '✓';
		} else if (i === chosen && chosen !== correctIdx) {
			btn.classList.add('wrong');
			mark.textContent = '✗';
		} else {
			btn.classList.add('dimmed');
		}
	});

	const fb = document.getElementById('feedback');
	if (chosen === correctIdx) {
		correct++;
		fb.className = 'feedback correct show';
		fb.textContent = '✓ Correct!';
	} else {
		wrong++;
		fb.className = 'feedback wrong show';
		fb.textContent = '✗ Wrong! Correct answer: ' + q.opts[correctIdx];
	}

	document.getElementById('sc').textContent = correct;
	document.getElementById('sw').textContent = wrong;

	const btn = document.getElementById('btn-next');
	if (idx < questions.length - 1) {
		btn.textContent = 'Next Question →';
	} else {
		btn.textContent = 'See Results →';
	}
	btn.className = 'btn-next show';
}

function nextQuestion() {
	idx++;
	if (idx >= questions.length) {
		showResults();
	} else {
		render();
	}
}

function showResults() {
	document.getElementById('quiz-screen').style.display = 'none';
	document.querySelector('.ecg').style.display = 'none';
	document.querySelector('.progress-wrap').style.display = 'none';

	const total = questions.length;
	const pct = Math.round((correct / total) * 100);

	let emoji, title, sub, grade;
	if (pct >= 90) {
		emoji = '🏆';
		title = 'Excellent!';
		sub = 'Outstanding performance!';
		grade = 'Grade: A+';
	} else if (pct >= 80) {
		emoji = '🎉';
		title = 'Great Job!';
		sub = 'Very good result!';
		grade = 'Grade: A';
	} else if (pct >= 70) {
		emoji = '👍';
		title = 'Good Work!';
		sub = 'Above average performance.';
		grade = 'Grade: B';
	} else if (pct >= 60) {
		emoji = '📚';
		title = 'Keep Studying!';
		sub = 'You can do better with practice.';
		grade = 'Grade: C';
	} else if (pct >= 50) {
		emoji = '💪';
		title = 'Almost There!';
		sub = 'Review the material and try again.';
		grade = 'Grade: D';
	} else {
		emoji = '📖';
		title = 'Need More Practice!';
		sub = 'Study harder and retry.';
		grade = 'Grade: F';
	}

	document.getElementById('res-emoji').textContent = emoji;
	document.getElementById('res-title').textContent = title;
	document.getElementById('res-sub').textContent = sub;
	document.getElementById('res-c').textContent = correct;
	document.getElementById('res-w').textContent = wrong;
	document.getElementById('res-p').textContent = pct + '%';
	document.getElementById('grade-text').textContent = grade + ' — ' + pct + '% (' + correct + '/' + total + ' correct)';

	document.getElementById('results').style.display = 'block';

	setTimeout(() => {
		document.getElementById('grade-fill').style.width = pct + '%';
	}, 300);
}

function restart() {
	idx = 0;
	correct = 0;
	wrong = 0;
	questions = shuffle([...QUESTIONS]);

	document.getElementById('quiz-screen').style.display = 'block';
	document.querySelector('.ecg').style.display = 'block';
	document.querySelector('.progress-wrap').style.display = 'block';
	document.getElementById('results').style.display = 'none';
	document.getElementById('grade-fill').style.width = '0%';

	render();
}

render();
