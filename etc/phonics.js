 // 전체 학습시간을 저장하는 변수
      let StudyStartTime;
      let StudyEndTime;

      //Alphabet Phonics [unit, image, sound, word, sentence:s or word:w, only word]
      let ap = [['1','01.jpg','01.mp3','<font color="red">a<font color="black">pple','w','apple'],
                ['1','02.jpg','02.mp3','<font color="red">a<font color="black">nt','w','ant'],
                ['1','03.jpg','03.mp3','<font color="red">b<font color="black">ear','w','bear'],
                ['1','04.jpg','04.mp3','<font color="red">b<font color="black">ook','w','book'],
                ['2','05.jpg','05.mp3','<font color="red">c<font color="black">at','w','cat'],
                ['2','06.jpg','06.mp3','<font color="red">c<font color="black">ake','w','cake'],
                ['2','07.jpg','07.mp3','<font color="red">d<font color="black">og','w','dog'],
                ['2','08.jpg','08.mp3','<font color="red">d<font color="black">oor','w','door'],
                ['3','09.jpg','09.mp3','<font color="red">e<font color="black">gg','w','egg'],
                ['3','10.jpg','10.mp3','<font color="red">e<font color="black">lephant','w','elephant'],
                ['4','11.jpg','11.mp3','<font color="red">f<font color="black">ish','w','fish'],
                ['4','12.jpg','12.mp3','<font color="red">f<font color="black">rog','w','frog'],
                ['4','13.jpg','13.mp3','<font color="red">g<font color="black">orilla','w','gorilla'],
                ['4','14.jpg','14.mp3','<font color="red">g<font color="black">old','w','gold'],
                ['5','15.jpg','15.mp3','<font color="red">h<font color="black">am','w','ham'],
                ['5','16.jpg','16.mp3','<font color="red">h<font color="black">ive','w','hive'],
                ['5','17.jpg','17.mp3','<font color="red">i<font color="black">ndian','w','indian'],
                ['5','18.jpg','18.mp3','<font color="red">i<font color="black">nk','w','ink'],
                ['6','19.jpg','19.mp3','<font color="red">j<font color="black">am','w','jam'],
                ['6','20.jpg','20.mp3','<font color="red">j<font color="black">uice','w','juice'],
                ['7','21.jpg','21.mp3','<font color="red">k<font color="black">ing','w','king'],
                ['7','22.jpg','22.mp3','<font color="red">k<font color="black">ey','w','key'],
                ['7','23.jpg','23.mp3','<font color="red">l<font color="black">ion','w','lion'],
                ['7','24.jpg','24.mp3','<font color="red">l<font color="black">emon','w','lemon'],
                ['8','25.jpg','25.mp3','<font color="red">m<font color="black">ouse','w','mouse'],
                ['8','26.jpg','26.mp3','<font color="red">m<font color="black">ilk','w','milk'],
                ['8','27.jpg','27.mp3','<font color="red">n<font color="black">apkin','w','napkin'],
                ['8','28.jpg','28.mp3','<font color="red">n<font color="black">et','w','net'],
                ['9','29.jpg','29.mp3','<font color="red">o<font color="black">x','w','ox'],
                ['9','30.jpg','30.mp3','<font color="red">o<font color="black">ctopus','w','octopus'],
                ['10','31.jpg','31.mp3','<font color="red">p<font color="black">encil','w','pencil'],
                ['10','32.jpg','32.mp3','<font color="red">p<font color="black">iano','w','piano'],
                ['10','33.jpg','33.mp3','<font color="red">q<font color="black">ueen','w','queen'],
                ['10','34.jpg','34.mp3','<font color="red">q<font color="black">uilt','w','quilt'],
                ['11','35.jpg','35.mp3','<font color="red">r<font color="black">abbit','w','rabbit'],
                ['11','36.jpg','36.mp3','<font color="red">r<font color="black">ibbon','w','ribbon'],
                ['11','37.jpg','37.mp3','<font color="red">s<font color="black">chool','w','school'],
                ['11','38.jpg','38.mp3','<font color="red">s<font color="black">poon','w','spoon'],
                ['12','39.jpg','39.mp3','<font color="red">t<font color="black">en','w','ten'],
                ['12','40.jpg','40.mp3','<font color="red">t<font color="black">omato','w','tomato'],
                ['13','41.jpg','41.mp3','<font color="red">u<font color="black">mbrella','w','umbrella'],
                ['13','42.jpg','42.mp3','<font color="red">u<font color="black">ncle','w','uncle'],
                ['13','43.jpg','43.mp3','<font color="red">v<font color="black">iolin','w','violin'],
                ['13','44.jpg','44.mp3','<font color="red">v<font color="black">est','w','vest'],
                ['14','45.jpg','45.mp3','<font color="red">w<font color="black">olf','w','wolf'],
                ['14','46.jpg','46.mp3','<font color="red">w<font color="black">atch','w','watch'],
                ['14','47.jpg','47.mp3','<font color="red">f<font color="black">ox','w','fox'],
                ['14','48.jpg','48.mp3','bo<font color="red">x<font color="black">','w','box'],
                ['15','49.jpg','49.mp3','<font color="red">y<font color="black">acht','w','yacht'],
                ['15','50.jpg','50.mp3','<font color="red">y<font color="black">ellow','w','yellow'],
                ['15','51.jpg','51.mp3','<font color="red">z<font color="black">ebra','w','zebra'],
                ['15','52.jpg','52.mp3','<font color="red">z<font color="black">oo','w','zoo']
              ];

      //Easy Phonics [unit, image, sound, word, sentence:s or word:w, only word]
      let ep = [['1','1.PNG','1.mp3','<font color="red">a<font color="black">nt','w','ant'],
                ['1','2.PNG','2.mp3','<font color="red">a<font color="black">pple','w','apple'],
                ['1','3.PNG','3.mp3','s<font color="red">a<font color="black">d','w','sad'],
                ['1','4.PNG','4.mp3','b<font color="red">a<font color="black">g','w','bag'],
                ['1','5.PNG','5.mp3','j<font color="red">a<font color="black">m','w','jam'],
                ['1','6.PNG','6.mp3','<font color="red">e<font color="black">gg','w','egg'],
                ['1','7.PNG','7.mp3','<font color="red">e<font color="black">lephant','w','elephant'],
                ['1','8.PNG','8.mp3','b<font color="red">e<font color="black">d','w','bed'],
                ['1','9.PNG','9.mp3','r<font color="red">e<font color="black">d','w','red'],
                ['1','10.PNG','10.mp3','h<font color="red">e<font color="black">n','w','hen'],
                ['1','11.PNG','11.mp3','<font color="red">i<font color="black">nk','w','ink'],
                ['1','12.PNG','12.mp3','<font color="red">i<font color="black">ndian','w','indian'],
                ['1','13.PNG','13.mp3','<font color="red">i<font color="black">gloo','w','igloo'],
                ['1','14.PNG','14.mp3','<font color="red">i<font color="black">n','w','in'],
                ['1','15.PNG','15.mp3','p<font color="red">i<font color="black">n','w','pin'],
                ['2','16.PNG','16.mp3','<font color="red">o<font color="black">x','w','ox'],
                ['2','17.PNG','17.mp3','<font color="red">o<font color="black">ctopus','w','octopus'],
                ['2','18.PNG','18.mp3','r<font color="red">o<font color="black">ck','w','rock'],
                ['2','19.PNG','19.mp3','m<font color="red">o<font color="black">m','w','mom'],
                ['2','20.PNG','20.mp3','t<font color="red">o<font color="black">p','w','top'],
                ['2','21.PNG','21.mp3','<font color="red">u<font color="black">ncle','w','uncle'],
                ['2','22.PNG','22.mp3','<font color="red">u<font color="black">mbrella','w','umbrella'],
                ['2','23.PNG','23.mp3','b<font color="red">u<font color="black">g','w','bug'],
                ['2','24.PNG','24.mp3','r<font color="red">u<font color="black">n','w','run'],
                ['2','25.PNG','25.mp3','b<font color="red">u<font color="black">s','w','bus'],
                ['3','26.PNG','26.mp3','<font color="red">b<font color="black">ook','w','book'],
                ['3','27.PNG','27.mp3','<font color="red">b<font color="black">ear','w','bear'],
                ['3','28.PNG','28.mp3','<font color="red">b<font color="black">oy','w','boy'],
                ['3','29.PNG','29.mp3','ro<font color="red">b<font color="black">ot','w','robot'],
                ['3','30.PNG','30.mp3','cra<font color="red">b<font color="black">','w','crab'],
                ['3','31.PNG','31.mp3','ca<font color="red">b<font color="black">in','w','cabin'],
                ['3','32.PNG','32.mp3','<font color="red">c<font color="black">at','w','cat'],
                ['3','33.PNG','33.mp3','<font color="red">c<font color="black">ake','w','cake'],
                ['3','34.PNG','34.mp3','<font color="red">k<font color="black">ing','w','king'],
                ['3','35.PNG','35.mp3','pin<font color="red">k<font color="black">','w','pink'],
                ['3','36.PNG','36.mp3','s<font color="red">c<font color="black">arf','w','scarf'],
                ['3','37.PNG','37.mp3','ba<font color="red">k<font color="black">er','w','baker'],
                ['4','38.PNG','38.mp3','<font color="red">d<font color="black">og','w','dog'],
                ['4','39.PNG','39.mp3','<font color="red">d<font color="black">oor','w','door'],
                ['4','40.PNG','40.mp3','<font color="red">d<font color="black">a<font color="red">d<font color="black">','w','dad'],
                ['4','41.PNG','41.mp3','re<font color="red">d<font color="black">','w','red'],
                ['4','42.PNG','42.mp3','san<font color="red">d<font color="black">','w','sand'],
                ['4','43.PNG','43.mp3','sha<font color="red">d<font color="black">ow','w','shadow'],
                ['4','44.PNG','44.mp3','<font color="red">f<font color="black">ish','w','fish'],
                ['4','45.PNG','45.mp3','<font color="red">f<font color="black">rog','w','frog'],
                ['4','46.PNG','46.mp3','<font color="red">f<font color="black">at','w','fat'],
                ['4','47.PNG','47.mp3','roo<font color="red">f<font color="black">','w','roof'],
                ['4','48.PNG','48.mp3','lea<font color="red">f<font color="black">','w','leaf'],
                ['4','49.PNG','49.mp3','so<font color="red">f<font color="black">a','w','sofa'],
                ['5','50.PNG','50.mp3','<font color="red">g<font color="black">old','w','gold'],
                ['5','51.PNG','51.mp3','<font color="red">g<font color="black">orilla','w','gorilla'],
                ['5','52.PNG','52.mp3','<font color="red">g<font color="black">un','w','gun'],
                ['5','53.PNG','53.mp3','bu<font color="red">g<font color="black">','w','bug'],
                ['5','54.PNG','54.mp3','pi<font color="red">g<font color="black">','w','pig'],
                ['5','55.PNG','55.mp3','lo<font color="red">g<font color="black">','w','log'],
                ['5','56.PNG','56.mp3','<font color="red">h<font color="black">am','w','ham'],
                ['5','57.PNG','57.mp3','<font color="red">h<font color="black">ive','w','hive'],
                ['5','58.PNG','58.mp3','<font color="red">h<font color="black">ippo','w','hippo'],
                ['5','59.PNG','59.mp3','<font color="red">h<font color="black">ungry','w','hungry'],
                ['5','60.PNG','60.mp3','<font color="red">h<font color="black">ammer','w','hammer'],
                ['5','61.PNG','61.mp3','be<font color="red">h<font color="black">ind','w','behind'],
                ['6','62.PNG','62.mp3','<font color="red">j<font color="black">am','w','jam'],
                ['6','63.PNG','63.mp3','<font color="red">j<font color="black">uice','w','juice'],
                ['6','64.PNG','64.mp3','<font color="red">j<font color="black">ungle','w','jungle'],
                ['6','65.PNG','65.mp3','<font color="red">j<font color="black">eans','w','jeans'],
                ['6','66.PNG','66.mp3','en<font color="red">j<font color="black">oy','w','enjoy'],
                ['6','67.PNG','67.mp3','sub<font color="red">j<font color="black">ect','w','subject'],
                ['6','68.PNG','68.mp3','<font color="red">l<font color="black">ion','w','lion'],
                ['6','69.PNG','69.mp3','<font color="red">l<font color="black">emon','w','lemon'],
                ['6','70.PNG','70.mp3','<font color="red">l<font color="black">ook','w','look'],
                ['6','71.PNG','71.mp3','ba<font color="red">ll<font color="black">','w','ball'],
                ['6','72.PNG','72.mp3','wo<font color="red">l<font color="black">f','w','wolf'],
                ['6','73.PNG','73.mp3','g<font color="red">l<font color="black">ass','w','glass'],
                ['7','74.PNG','74.mp3','<font color="red">m<font color="black">ilk','w','milk'],
                ['7','75.PNG','75.mp3','<font color="red">m<font color="black">ouse','w','mouse'],
                ['7','76.PNG','76.mp3','<font color="red">m<font color="black">onkey','w','monkey'],
                ['7','77.PNG','77.mp3','<font color="red">m<font color="black">o<font color="red">m<font color="black">','w','mom'],
                ['7','78.PNG','78.mp3','roo<font color="red">m<font color="black">','w','room'],
                ['7','79.PNG','79.mp3','pu<font color="red">m<font color="black">pkin','w','pumpkin'],
                ['7','80.PNG','80.mp3','<font color="red">n<font color="black">et','w','net'],
                ['7','81.PNG','81.mp3','<font color="red">n<font color="black">apkin','w','napkin'],
                ['7','82.PNG','82.mp3','<font color="red">n<font color="black">est','w','nest'],
                ['7','83.PNG','83.mp3','ma<font color="red">n<font color="black">','w','man'],
                ['7','84.PNG','84.mp3','moo<font color="red">n<font color="black">','w','moon'],
                ['7','85.PNG','85.mp3','a<font color="red">n<font color="black">gel','w','angel'],
                ['8','86.PNG','86.mp3','<font color="red">p<font color="black">encil','w','pencil'],
                ['8','87.PNG','87.mp3','<font color="red">p<font color="black">iano','w','piano'],
                ['8','88.PNG','88.mp3','<font color="red">p<font color="black">ig','w','pig'],
                ['8','89.PNG','89.mp3','<font color="red">p<font color="black">ink','w','pink'],
                ['8','90.PNG','90.mp3','ha<font color="red">pp<font color="black">y','w','happy'],
                ['8','91.PNG','91.mp3','<font color="red">p<font color="black">a<font color="red">p<font color="black">er','w','paper'],
                ['8','92.PNG','92.mp3','<font color="red">qu<font color="black">een','w','queen'],
                ['8','93.PNG','93.mp3','<font color="red">qu<font color="black">ilt','w','quilt'],
                ['8','94.PNG','94.mp3','<font color="red">qu<font color="black">iz','w','quiz'],
                ['8','95.PNG','95.mp3','<font color="red">qu<font color="black">iet','w','quiet'],
                ['8','96.PNG','96.mp3','s<font color="red">qu<font color="black">are','w','square'],
                ['8','97.PNG','97.mp3','s<font color="red">qu<font color="black">irrel','w','squirrel'],
                ['9','98.PNG','98.mp3','<font color="red">r<font color="black">abbit','w','rabbit'],
                ['9','99.PNG','99.mp3','<font color="red">r<font color="black">ibbon','w','ribbon'],
                ['9','100.PNG','100.mp3','<font color="red">r<font color="black">iver','w','river'],
                ['9','101.PNG','101.mp3','<font color="red">r<font color="black">ed','w','red'],
                ['9','102.PNG','102.mp3','g<font color="red">r<font color="black">ass','w','grass'],
                ['9','103.PNG','103.mp3','ca<font color="red">rr<font color="black">ot','w','carrot'],
                ['9','104.PNG','104.mp3','<font color="red">s<font color="black">chool','w','school'],
                ['9','105.PNG','105.mp3','<font color="red">s<font color="black">poon','w','spoon'],
                ['9','106.PNG','106.mp3','<font color="red">s<font color="black">ummer','w','summer'],
                ['9','107.PNG','107.mp3','<font color="red">s<font color="black">i<font color="red">s<font color="black">ter','w','sister'],
                ['9','108.PNG','108.mp3','in<font color="red">s<font color="black">ect','w','insect'],
                ['9','109.PNG','109.mp3','dre<font color="red">ss<font color="black">','w','dress'],
                ['10','110.PNG','110.mp3','<font color="red">t<font color="black">en','w','ten'],
                ['10','111.PNG','111.mp3','<font color="red">t<font color="black">elevision','w','television'],
                ['10','112.PNG','112.mp3','<font color="red">t<font color="black">omato','w','tomato'],
                ['10','113.PNG','113.mp3','doc<font color="red">t<font color="black">or','w','doctor'],
                ['10','114.PNG','114.mp3','den<font color="red">t<font color="black">ist','w','dentist'],
                ['10','115.PNG','115.mp3','hu<font color="red">t<font color="black">','w','hut'],
                ['10','116.PNG','116.mp3','<font color="red">v<font color="black">iolin','w','violin'],
                ['10','117.PNG','117.mp3','<font color="red">v<font color="black">est','w','vest'],
                ['10','118.PNG','118.mp3','<font color="red">v<font color="black">ase','w','vase'],
                ['10','119.PNG','119.mp3','<font color="red">v<font color="black">an','w','van'],
                ['10','120.PNG','120.mp3','mo<font color="red">v<font color="black">ie','w','movie'],
                ['10','121.PNG','121.mp3','do<font color="red">v<font color="black">e','w','dove'],
                ['11','122.PNG','122.mp3','<font color="red">w<font color="black">atch','w','watch'],
                ['11','123.PNG','123.mp3','<font color="red">w<font color="black">olf','w','wolf'],
                ['11','124.PNG','124.mp3','<font color="red">w<font color="black">ind','w','wind'],
                ['11','125.PNG','125.mp3','<font color="red">w<font color="black">itch','w','witch'],
                ['11','126.PNG','126.mp3','s<font color="red">w<font color="black">eater','w','sweater'],
                ['11','127.PNG','127.mp3','bet<font color="red">w<font color="black">een','w','between'],
                ['11','128.PNG','128.mp3','fo<font color="red">x<font color="black">','w','fox'],
                ['11','129.PNG','129.mp3','bo<font color="red">x<font color="black">','w','box'],
                ['11','130.PNG','130.mp3','a<font color="red">x<font color="black">','w','ax'],
                ['11','131.PNG','131.mp3','ta<font color="red">x<font color="black">i','w','taxi'],
                ['11','132.PNG','132.mp3','o<font color="red">x<font color="black">','w','ox'],
                ['11','133.PNG','133.mp3','sa<font color="red">x<font color="black">ophone','w','saxophone'],
                ['12','134.PNG','134.mp3','<font color="red">y<font color="black">ellow','w','yellow'],
                ['12','135.PNG','135.mp3','<font color="red">y<font color="black">acht','w','yacht'],
                ['12','136.PNG','136.mp3','<font color="red">y<font color="black">oung','w','young'],
                ['12','137.PNG','137.mp3','<font color="red">y<font color="black">ard','w','yard'],
                ['12','138.PNG','138.mp3','<font color="red">y<font color="black">ummy','w','yummy'],
                ['12','139.PNG','139.mp3','<font color="red">y<font color="black">ak','w','yak'],
                ['12','140.PNG','140.mp3','<font color="red">z<font color="black">oo','w','zoo'],
                ['12','141.PNG','141.mp3','<font color="red">z<font color="black">ebra','w','zebra'],
                ['12','142.PNG','142.mp3','<font color="red">z<font color="black">ig<font color="red">z<font color="black">ag','w','zigzag'],
                ['12','143.PNG','143.mp3','qui<font color="red">z<font color="black">','w','quiz'],
                ['12','144.PNG','144.mp3','maga<font color="red">z<font color="black">ine','w','magazine'],
                ['12','145.PNG','145.mp3','pri<font color="red">z<font color="black">e','w','prize'],
                ['13','146.PNG','146.mp3','ri<font color="red">c<font color="black">e','w','rice'],
                ['13','147.PNG','147.mp3','prin<font color="red">c<font color="black">e','w','prince'],
                ['13','148.PNG','148.mp3','dan<font color="red">c<font color="black">e','w','dance'],
                ['13','149.PNG','149.mp3','ni<font color="red">c<font color="black">e','w','nice'],
                ['13','150.PNG','150.mp3','<font color="red">c<font color="black">inema','w','cinema'],
                ['13','151.PNG','151.mp3','<font color="red">c<font color="black">ity','w','city'],
                ['13','152.PNG','152.mp3','<font color="red">g<font color="black">iant','w','giant'],
                ['13','153.PNG','153.mp3','oran<font color="red">g<font color="black">e','w','orange'],
                ['13','154.PNG','154.mp3','ca<font color="red">g<font color="black">e','w','cage'],
                ['13','155.PNG','155.mp3','an<font color="red">g<font color="black">el','w','angel'],
                ['13','156.PNG','156.mp3','ma<font color="red">g<font color="black">ic','w','magic'],
                ['13','157.PNG','157.mp3','brid<font color="red">g<font color="black">e','w','br']
              ];

      //Easy Phonics Plus [unit, image, sound, word, sentence:s or word:w, only word]
      let epp = [['1','1.PNG','1.mp3','c<font color="red">a<font color="black">n<font color="red">e','w','cane'],
                ['1','2.PNG','2.mp3','c<font color="red">a<font color="black">v<font color="red">e','w','cave'],
                ['1','3.PNG','3.mp3','l<font color="red">a<font color="black">k<font color="red">e','w','lake'],
                ['1','4.PNG','4.mp3','m<font color="red">a<font color="black">k<font color="red">e','w','make'],
                ['1','5.PNG','5.mp3','v<font color="red">a<font color="black">s<font color="red">e','w','vase'],
                ['1','6.PNG','6.mp3','n<font color="red">a<font color="black">m<font color="red">e','w','name'],
                ['1','7.PNG','7.mp3','c<font color="red">a<font color="black">k<font color="red">e','w','cake'],
                ['1','8.PNG','8.mp3','g<font color="red">a<font color="black">t<font color="red">e','w','gate'],
                ['1','011.PNG','011.mp3','<font size="5">her,father,has,go to,see,by,there is</font>','s','her,father,has,go to,see,by,there is'],
                ['1','012.PNG','012.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Her name is Jane.<br>Her father has a cake.<br>They go to the lake.<br>They see a cave by the lake.<br>There is a cane and a vase.</p>','s','Her name is Jane.<br>Her father has a cake.<br>They go to the lake.<br>They see a cave by the lake.<br>There is a cane and a vase.'],
                ['2','9.PNG','9.mp3','pin<font color="red">e','w','pine'],
                ['2','10.PNG','10.mp3','b<font color="red">i<font color="black">k<font color="red">e','w','bike'],
                ['2','11.PNG','11.mp3','k<font color="red">i<font color="black">t<font color="red">e','w','kite'],
                ['2','12.PNG','12.mp3','f<font color="red">i<font color="black">v<font color="red">e','w','five'],
                ['2','13.PNG','13.mp3','r<font color="red">i<font color="black">d<font color="red">e','w','ride'],
                ['2','14.PNG','14.mp3','l<font color="red">i<font color="black">k<font color="red">e','w','like'],
                ['2','15.PNG','15.mp3','d<font color="red">i<font color="black">v<font color="red">e','w','dive'],
                ['2','16.PNG','16.mp3','t<font color="red">i<font color="black">m<font color="red">e','w','time'],
                ['2','021.PNG','021.mp3','<font size="7">children, park, behind, have, good</font>','s','children, park, behind, have, good'],
                ['2','022.PNG','022.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Five children are in the park.<br>Lisa is behind the pine.<br>Jane and Tom have a kite.<br>Let’s ride a bike!<br>They have a good time.</p>','s','Five children are in the park.<br>Lisa is behind the pine.<br>Jane and Tom have a kite.<br>Let’s ride a bike!<br>They have a good time.'],
                ['3','17.PNG','17.mp3','n<font color="red">o<font color="black">t<font color="red">e','w','note'],
                ['3','18.PNG','18.mp3','r<font color="red">o<font color="black">s<font color="red">e','w','rose'],
                ['3','19.PNG','19.mp3','h<font color="red">o<font color="black">m<font color="red">e','w','home'],
                ['3','20.PNG','20.mp3','b<font color="red">o<font color="black">n<font color="red">e','w','bone'],
                ['3','21.PNG','21.mp3','h<font color="red">o<font color="black">l<font color="red">e','w','hole'],
                ['3','22.PNG','22.mp3','st<font color="red">o<font color="black">n<font color="red">e','w','stone'],
                ['3','23.PNG','23.mp3','r<font color="red">o<font color="black">p<font color="red">e','w','rope'],
                ['3','24.PNG','24.mp3','n<font color="red">o<font color="black">s<font color="red">e','w','nose'],
                ['3','031.PNG','031.mp3','<font size="7">follow, can, and, touch, welcome, my</font>','s','follow, can, and, touch, welcome, my'],
                ['3','032.PNG','032.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My home is in the hole.<br>Follow the rope.<br>You can see a rose and a bone.<br>You can touch a stone.<br>Welcome to my home!</p>','s','My home is in the hole.<br>Follow the rope.<br>You can see a rose and a bone.<br>You can touch a stone.<br>Welcome to my home!'],
                ['4','25.PNG','25.mp3','c<font color="red">u<font color="black">t<font color="red">e','w','cute'],
                ['4','26.PNG','26.mp3','c<font color="red">u<font color="black">b<font color="red">e','w','cube'],
                ['4','27.PNG','27.mp3','f<font color="red">u<font color="black">s<font color="red">e','w','fuse'],
                ['4','28.PNG','28.mp3','h<font color="red">u<font color="black">g<font color="red">e','w','huge'],
                ['4','29.PNG','29.mp3','fl<font color="red">u<font color="black">t<font color="red">e','w','flute'],
                ['4','30.PNG','30.mp3','r<font color="red">u<font color="black">l<font color="red">e','w','rule'],
                ['4','31.PNG','31.mp3','J<font color="red">u<font color="black">n<font color="red">e','w','June'],
                ['4','32.PNG','32.mp3','r<font color="red">u<font color="black">d<font color="red">e','w','rude'],
                ['4','041.PNG','041.mp3','<font size="7">see, climb, up, plays, tree</font>','s','see, climb, up, plays, tree'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Luke is cute.<br>He sees a huge Rubik’s cube.<br>Don’t climb up the cube.<br>He follows the rule.<br>He plays the flute by a huge tree.</p>','s','Luke is cute.<br>He sees a huge Rubik’s cube.<br>Don’t climb up the cube.<br>He follows the rule.<br>He plays the flute by a huge tree.'],
                ['5','33.PNG','33.mp3','t<font color="red">ai<font color="black">l','w','tail'],
                ['5','34.PNG','34.mp3','r<font color="red">ai<font color="black">n','w','rain'],
                ['5','35.PNG','35.mp3','w<font color="red">ai<font color="black">t','w','wait'],
                ['5','36.PNG','36.mp3','tr<font color="red">ai<font color="black">n','w','train'],
                ['5','37.PNG','37.mp3','s<font color="red">ay<font color="black">','w','say'],
                ['5','38.PNG','38.mp3','d<font color="red">ay<font color="black">','w','day'],
                ['5','39.PNG','39.mp3','tr<font color="red">ay<font color="black">','w','tray'],
                ['5','40.PNG','40.mp3','pl<font color="red">ay<font color="black">','w','play'],
                ['5','051.PNG','051.mp3','<font size="7">cat, long, duck, nice</font>','s','cat, long, duck, nice'],
                ['5','052.PNG','052.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Cats wait in the rain.<br>One cat has a long tail.<br>They see a fast train. Choo Choo!<br>Ducks say, It is a nice day.<br>They play in the rain.</p>','s','Cats wait in the rain.<br>One cat has a long tail.<br>They see a fast train. Choo Choo!<br>Ducks say, It is a nice day.<br>They play in the rain.'],
                ['6','41.PNG','41.mp3','b<font color="red">ee<font color="black">','w','bee'],
                ['6','42.PNG','42.mp3','tr<font color="red">ee<font color="black">','w','tree'],
                ['6','43.PNG','43.mp3','m<font color="red">ee<font color="black">t','w','meet'],
                ['6','44.PNG','44.mp3','sl<font color="red">ee<font color="black">p','w','sleep'],
                ['6','45.PNG','45.mp3','s<font color="red">ea<font color="black">','w','sea'],
                ['6','46.PNG','46.mp3','r<font color="red">ea<font color="black">d','w','read'],
                ['6','47.PNG','47.mp3','m<font color="red">ea<font color="black">t','w','meat'],
                ['6','48.PNG','48.mp3','t<font color="red">ea<font color="black">','w','tea'],
                ['6','061.PNG','061.mp3','<font size="7">lion, drink, under, eat</font>','s','lion, drink, under, eat'],
                ['6','062.PNG','062.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Lions meet a bee by the sea.<br>The bee is in the tree.<br>She drinks tea in the tree.<br>Lions are under the tree.<br>They eat the meat.</p>','s','Lions meet a bee by the sea.<br>The bee is in the tree.<br>She drinks tea in the tree.<br>Lions are under the tree.<br>They eat the meat.'],
                ['7','49.PNG','49.mp3','t<font color="red">ie','w','tie'],
                ['7','50.PNG','50.mp3','p<font color="red">ie','w','pie'],
                ['7','51.PNG','51.mp3','d<font color="red">ie','w','die'],
                ['7','52.PNG','52.mp3','l<font color="red">ie','w','lie'],
                ['7','53.PNG','53.mp3','sk<font color="red">y','w','sky'],
                ['7','54.PNG','54.mp3','dr<font color="red">y','w','dry'],
                ['7','55.PNG','55.mp3','cr<font color="red">y','w','cry'],
                ['7','56.PNG','56.mp3','fl<font color="red">y','w','fly'],
                ['7','071.PNG','071.mp3','<font size="7">monkey, share, with, friends, clothes, pig</font>','w','monkey, share, with, friends, clothes, pig'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.</p>','w','The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.'],
                ['8','57.PNG','57.mp3','b<font color="red">oa<font color="black">t','w','boat'],
                ['8','58.PNG','58.mp3','g<font color="red">oa<font color="black">t','w','goat'],
                ['8','59.PNG','59.mp3','r<font color="red">oa<font color="black">d','w','road'],
                ['8','60.PNG','60.mp3','s<font color="red">oa<font color="black">p','w','soap'],
                ['8','61.PNG','61.mp3','sn<font color="red">ow','w','snow'],
                ['8','62.PNG','62.mp3','wind<font color="red">ow','w','window'],
                ['8','63.PNG','63.mp3','b<font color="red">ow<font color="black">l','w','bowl'],
                ['8','64.PNG','64.mp3','yell<font color="red">ow','w','yellow'],
                ['8','081.PNG','081.mp3','<font size="7">monkey, share, with, friends, clothes, pig</font>','s','monkey, share, with, friends, clothes, pig'],
                ['8','082.PNG','082.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.</p>','s','The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.'],
                ['9','65.PNG','65.mp3','fr<font color="red">ui<font color="black">t','w','fruit'],
                ['9','66.PNG','66.mp3','j<font color="red">ui<font color="black">ce','w','juice'],
                ['9','67.PNG','67.mp3','s<font color="red">ui<font color="black">t','w','suit'],
                ['9','68.PNG','68.mp3','cr<font color="red">ui<font color="black">se','w','cruise'],
                ['9','69.PNG','69.mp3','gl<font color="red">ue','w','glue'],
                ['9','70.PNG','70.mp3','bl<font color="red">ue','w','blue'],
                ['9','71.PNG','71.mp3','cl<font color="red">ue','w','clue'],
                ['9','72.PNG','72.mp3','tr<font color="red">ue','w','true'],
                ['9','091.PNG','091.mp3','<font size="7">can, use, drink</font>','s','can, use, drink'],
                ['9','092.PNG','092.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A blue cruise is in the sea.<br>I can make a blue suit.<br>Sue is using the glue.<br>What a nice suit!<br>Sue is drinking fruit juice.</p>','s','A blue cruise is in the sea.<br>I can make a blue suit.<br>Sue is using the glue.<br>What a nice suit!<br>Sue is drinking fruit juice.'],
                ['10','73.PNG','73.mp3','sk<font color="red">y','w','sky'],
                ['10','74.PNG','74.mp3','dr<font color="red">y','w','dry'],
                ['10','75.PNG','75.mp3','cr<font color="red">y','w','cry'],
                ['10','76.PNG','76.mp3','fl<font color="red">y','w','fly'],
                ['10','77.PNG','77.mp3','bab<font color="red">y','w','baby'],
                ['10','78.PNG','78.mp3','sunn<font color="red">y','w','sunny'],
                ['10','79.PNG','79.mp3','carr<font color="red">y','w','carry'],
                ['10','80.PNG','80.mp3','happ<font color="red">y','w','happy'],
                ['10','1010.PNG','1010.mp3','<font size="7">two, bird, don’t, very</font>','s','two, bird, don’t, very'],
                ['10','1020.PNG','1020.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">It is sunny.<br>Two birds fly in the sky.<br>They carry a baby.<br>Don’t cry, cute baby.<br>They are very happy.</p>','s','It is sunny.<br>Two birds fly in the sky.<br>They carry a baby.<br>Don’t cry, cute baby.<br>They are very happy.'],
                ['11','81.PNG','81.mp3','<font color="red">ch<font color="black">eese','w','cheese'],
                ['11','82.PNG','82.mp3','<font color="red">ch<font color="black">ur<font color="red">ch<font color="black">','w','church'],
                ['11','83.PNG','83.mp3','<font color="red">ch<font color="black">erry','w','cherry'],
                ['11','84.PNG','84.mp3','<font color="red">ch<font color="black">ildren','w','children'],
                ['11','85.PNG','85.mp3','ben<font color="red">ch','w','bench'],
                ['11','86.PNG','86.mp3','lun<font color="red">ch','w','lunch'],
                ['11','87.PNG','87.mp3','bea<font color="red">ch','w','beach'],
                ['11','88.PNG','88.mp3','pea<font color="red">ch','w','peach'],
                ['11','1110.PNG','1110.mp3','<font size="7">boy, girl, cake</font>','s','boy, girl, cake'],
                ['11','1120.PNG','1120.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Children play at the beach.<br>It’s time for lunch.<br>Children eat lunch on the bench.<br>A boy eats cheese cake and a peach.<br>A girl eats cheese cake and a cherry.</p>','s','Children play at the beach.<br>It’s time for lunch.<br>Children eat lunch on the bench.<br>A boy eats cheese cake and a peach.<br>A girl eats cheese cake and a cherry.'],
                ['12','89.PNG','89.mp3','<font color="red">sh<font color="black">irt','w','shirt'],
                ['12','90.PNG','90.mp3','<font color="red">sh<font color="black">op','w','shop'],
                ['12','91.PNG','91.mp3','<font color="red">sh<font color="black">oes','w','shoes'],
                ['12','92.PNG','92.mp3','<font color="red">sh<font color="black">eep','w','sheep'],
                ['12','93.PNG','93.mp3','fi<font color="red">sh','w','fish'],
                ['12','94.PNG','94.mp3','di<font color="red">sh','w','dish'],
                ['12','95.PNG','95.mp3','bru<font color="red">sh','w','brush'],
                ['12','96.PNG','96.mp3','wa<font color="red">sh','w','wash'],
                ['12','1210.PNG','1210.mp3','<font size="7">face, wears, buys, need, too</font>','s','face, wears, buys, need, too'],
                ['12','1220.PNG','1220.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Sue washes her face.<br>She wears shoes and goes to a shop.<br>She buys a shirt at the clothes shop.<br>I need a fish, too.<br>She buys a fish at the fish shop.</p>','s','Sue washes her face.<br>She wears shoes and goes to a shop.<br>She buys a shirt at the clothes shop.<br>I need a fish, too.<br>She buys a fish at the fish shop.'],
                ['13','97.PNG','97.mp3','<font color="red">th<font color="black">ey','w','they'],
                ['13','98.PNG','98.mp3','mo<font color="red">th<font color="black">er','w','mother'],
                ['13','99.PNG','99.mp3','bro<font color="red">th<font color="black">er','w','brother'],
                ['13','100.PNG','100.mp3','fea<font color="red">th<font color="black">er','w','feather'],
                ['13','101.PNG','101.mp3','<font color="red">th<font color="black">ree','w','three'],
                ['13','102.PNG','102.mp3','<font color="red">th<font color="black">in','w','thin'],
                ['13','103.PNG','103.mp3','ma<font color="red">th','w','math'],
                ['13','104.PNG','104.mp3','mou<font color="red">th','w','mouth'],
                ['13','1310.PNG','1310.mp3','<font size="7">look at, pictures, big, hat</font>','s','look at, pictures, big, hat'],
                ['13','1320.PNG','1320.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Look at the three pictures.<br>They are my mother, father and brother.<br>My mother is thin.<br>My father has a big mouth.<br>My brother wears a hat with a feather.</p>','s','Look at the three pictures.<br>They are my mother, father and brother.<br>My mother is thin.<br>My father has a big mouth.<br>My brother wears a hat with a feather.'],
                ['14','105.PNG','105.mp3','du<font color="red">ck','w','duck'],
                ['14','106.PNG','106.mp3','ro<font color="red">ck','w','rock'],
                ['14','107.PNG','107.mp3','si<font color="red">ck','w','sick'],
                ['14','108.PNG','108.mp3','ki<font color="red">ck','w','kick'],
                ['14','109.PNG','109.mp3','so<font color="red">ng','w','song'],
                ['14','110.PNG','110.mp3','wi<font color="red">ng','w','wing'],
                ['14','111.PNG','111.mp3','ki<font color="red">ng','w','king'],
                ['14','112.PNG','112.mp3','ri<font color="red">ng','w','ring'],
                ['14','1410.PNG','1410.mp3','<font size="7">on, sings, for, give</font>','s','on, sings, for, give'],
                ['14','1420.PNG','1420.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A duck is on the rock.<br>The duck has big wings.<br>The duck sings a song for the king.<br>The king is sick.<br>I will give you a ring.</p>','s','A duck is on the rock.<br>The duck has big wings.<br>The duck sings a song for the king.<br>The king is sick.<br>I will give you a ring.'],
                ['15','113.PNG','113.mp3','<font color="red">wh<font color="black">eel','w','wheel'],
                ['15','114.PNG','114.mp3','<font color="red">wh<font color="black">eat','w','wheat'],
                ['15','115.PNG','115.mp3','<font color="red">wh<font color="black">ite','w','white'],
                ['15','116.PNG','116.mp3','<font color="red">wh<font color="black">ale','w','whale'],
                ['15','117.PNG','117.mp3','<font color="red">ph<font color="black">oto','w','photo'],
                ['15','118.PNG','118.mp3','<font color="red">ph<font color="black">one','w','phone'],
                ['15','119.PNG','119.mp3','dol<font color="red">ph<font color="black">in','w','dolphin'],
                ['15','120.PNG','120.mp3','ele<font color="red">ph<font color="black">ant','w','elephant'],
                ['15','1510.PNG','1510.mp3','<font size="7">goes, sea, take a photo</font>','s','goes, sea, take a photo'],
                ['15','1520.PNG','1520.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An elephant goes to the sea.<br>Are you a whale?<br>No, I’m not. I am a dolphin.<br>The elephant looks at a white whale.<br>The elephant takes a photo by the wheat.</p>','s','An elephant goes to the sea.<br>Are you a whale?<br>No, I’m not. I am a dolphin.<br>The elephant looks at a white whale.<br>The elephant takes a photo by the wheat.']
              ];

      // Phonics Fun 1 [unit, image, sound, word, sentence:s or word:w, only word]
      let pf1 = [['1','01.PNG','01.mp3','<font color="red">a<font color="black">nt','w','ant'],
                ['1','02.PNG','02.mp3','<font color="red">a<font color="black">pple','w','apple'],
                ['1','03.PNG','03.mp3','<font color="red">a<font color="black">x','w','ax'],
                ['1','04.PNG','04.mp3','<font color="red">e<font color="black">gg','w','egg'],
                ['1','05.PNG','05.mp3','<font color="red">e<font color="black">lephant','w','elephant'],
                ['1','06.PNG','06.mp3','<font color="red">e<font color="black">lbow','w','elbow'],
                ['2','07.PNG','07.mp3','<font color="red">i<font color="black">ndian','w','indian'],
                ['2','08.PNG','08.mp3','<font color="red">i<font color="black">nk','w','ink'],
                ['2','09.PNG','09.mp3','<font color="red">i<font color="black">gloo','w','igloo'],
                ['2','10.PNG','10.mp3','<font color="red">o<font color="black">x','w','ox'],
                ['2','11.PNG','11.mp3','<font color="red">o<font color="black">ctopus','w','octopus'],
                ['2','12.PNG','12.mp3','t<font color="red">o<font color="black">p','w','top'],
                ['3','13.PNG','13.mp3','<font color="red">u<font color="black">mbrella','w','umbrella'],
                ['3','14.PNG','14.mp3','<font color="red">u<font color="black">nder','w','under'],
                ['3','15.PNG','15.mp3','d<font color="red">u<font color="black">ck','w','duck'],
                ['4','16.PNG','16.mp3','<font color="red">b<font color="black">ag','w','bag'],
                ['4','17.PNG','17.mp3','<font color="red">bfont color="black">ed','w','bed'],
                ['4','18.PNG','18.mp3','<font color="red">p<font color="black">en','w','pen'],
                ['4','19.PNG','19.mp3','<font color="red">p<font color="black">ig','w','pig'],
                ['5','20.PNG','20.mp3','<font color="red">c<font color="black">at','w','cat'],
                ['5','21.PNG','21.mp3','<font color="red">k<font color="black">id','w','kid'],
                ['5','22.PNG','22.mp3','<font color="red">g<font color="black">um','w','gum'],
                ['5','23.PNG','23.mp3','<font color="red">g<font color="black">ap','w','gap'],
                ['6','24.PNG','24.mp3','<font color="red">t<font color="black">en','w','ten'],
                ['6','25.PNG','25.mp3','<font color="red">t<font color="black">ub','w','tub'],
                ['6','26.PNG','26.mp3','<font color="red">d<font color="black">ad','w','dad'],
                ['6','27.PNG','27.mp3','<font color="red">d<font color="black">ot','w','dot'],
                ['7','28.PNG','28.mp3','<font color="red">m<font color="black">an','w','man'],
                ['7','29.PNG','29.mp3','<font color="red">m<font color="black">om','w','mom'],
                ['7','30.PNG','30.mp3','<font color="red">n<font color="black">et','w','net'],
                ['7','31.PNG','31.mp3','<font color="red">n<font color="black">ap','w','nap'],
                ['8','32.PNG','32.mp3','<font color="red">f<font color="black">ox','w','fox'],
                ['8','33.PNG','33.mp3','<font color="red">f<font color="black">an','w','fan'],
                ['8','34.PNG','34.mp3','<font color="red">v<font color="black">an','w','van'],
                ['8','35.PNG','35.mp3','<font color="red">v<font color="black">et','w','vet'],
                ['10','36.PNG','36.mp3','<font color="red">s<font color="black">un','w','sun'],
                ['10','37.PNG','37.mp3','<font color="red">s<font color="black">it','w','sit'],
                ['10','38.PNG','38.mp3','<font color="red">z<font color="black">ip','w','zip'],
                ['10','39.PNG','39.mp3','<font color="red">z<font color="black">igzag','w','zigzag'],
                ['11','40.PNG','40.mp3','<font color="red">l<font color="black">id','w','lid'],
                ['11','41.PNG','41.mp3','<font color="red">l<font color="black">ap','w','lap'],
                ['11','42.PNG','42.mp3','<font color="red">r<font color="black">ed','w','red'],
                ['11','43.PNG','43.mp3','<font color="red">r<font color="black">un','w','run'],
                ['12','44.PNG','44.mp3','<font color="red">h<font color="black">am','w','ham'],
                ['12','45.PNG','45.mp3','<font color="red">h<font color="black">ut','w','hut'],
                ['12','46.PNG','46.mp3','<font color="red">j<font color="black">am','w','jam'],
                ['12','47.PNG','47.mp3','<font color="red">j<font color="black">et','w','jet'],
                ['13','48.PNG','48.mp3','<font color="red">w<font color="black">et','w','wet'],
                ['13','49.PNG','49.mp3','<font color="red">w<font color="black">ig','w','wig'],
                ['13','50.PNG','50.mp3','<font color="red">y<font color="black">ak','w','yak'],
                ['13','51.PNG','51.mp3','<font color="red">y<font color="black">ell','w','yell'],
                ['14','52.PNG','52.mp3','bo<font color="red">x<font color="black">','w','box'],
                ['14','53.PNG','53.mp3','si<font color="red">x<font color="black">','w','six'],
                ['14','54.PNG','54.mp3','<font color="red">qu<font color="black">iz','w','quiz'],
                ['14','55.PNG','55.mp3','<font color="red">qu<font color="black">ilt','w','quilt']
                ];

      // Phonics Fun 2 [unit, image, sound, word, sentence:s or word:w, only word]
      let pf2 = [['1','01.PNG','01.mp3','c<font color="red">a<font color="black">n<font color="red">e','w','cane'],
                ['1','02.PNG','02.mp3','l<font color="red">a<font color="black">k<font color="red">e','w','lake'],
                ['1','03.PNG','03.mp3','v<font color="red">a<font color="black">s<font color="red">e','w','vase'],
                ['1','04.PNG','04.mp3','t<font color="red">a<font color="black">p<font color="red">e','w','tape'],
                ['2','05.PNG','05.mp3','p<font color="red">i<font color="black">n<font color="red">e','w','pine'],
                ['2','06.PNG','06.mp3','b<font color="red">i<font color="black">k<font color="red">e','w','bike'],
                ['2','07.PNG','07.mp3','k<font color="red">i<font color="black">t<font color="red">e','w','kite'],
                ['2','08.PNG','08.mp3','r<font color="red">i<font color="black">d<font color="red">e','w','ride'],
                ['3','09.PNG','09.mp3','b<font color="red">o<font color="black">n<font color="red">e','w','bone'],
                ['3','10.PNG','10.mp3','h<font color="red">o<font color="black">p<font color="red">e','w','hope'],
                ['3','11.PNG','11.mp3','n<font color="red">o<font color="black">t<font color="red">e','w','note'],
                ['3','12.PNG','12.mp3','r<font color="red">o<font color="black">p<font color="red">e','w','rope'],
                ['4','13.PNG','13.mp3','c<font color="red">u<font color="black">t<font color="red">e','w','cute'],
                ['4','14.PNG','14.mp3','t<font color="red">u<font color="black">b<font color="red">e','w','tube'],
                ['4','15.PNG','15.mp3','d<font color="red">u<font color="black">n<font color="red">e','w','dune'],
                ['4','16.PNG','16.mp3','m<font color="red">u<font color="black">t<font color="red">e','w','mute'],
                ['5','17.PNG','17.mp3','r<font color="red">ai<font color="black">n','w','rain'],
                ['5','18.PNG','18.mp3','t<font color="red">ai<font color="black">l','w','tail'],
                ['5','19.PNG','19.mp3','n<font color="red">ai<font color="black">l','w','nail'],
                ['5','20.PNG','20.mp3','h<font color="red">ay','w','hay'],
                ['5','21.PNG','21.mp3','M<font color="red">ay','w','May'],
                ['5','22.PNG','22.mp3','s<font color="red">ay','w','say'],
                ['6','23.PNG','23.mp3','b<font color="red">ee<font color="black">','w','bee'],
                ['6','24.PNG','24.mp3','f<font color="red">ee<font color="black">t','w','feet'],
                ['6','25.PNG','25.mp3','s<font color="red">ee<font color="black">d','w','seed'],
                ['6','26.PNG','26.mp3','s<font color="red">ea<font color="black">','w','sea'],
                ['6','27.PNG','27.mp3','m<font color="red">ea<font color="black">t','w','meat'],
                ['6','28.PNG','28.mp3','l<font color="red">ea<font color="black">f','w','leaf'],
                ['7','29.PNG','29.mp3','sk<font color="red">','w','sky'],
                ['7','30.PNG','30.mp3','cr<font color="red">','w','cry'],
                ['7','31.PNG','31.mp3','dr<font color="red">','w','dry'],
                ['7','32.PNG','32.mp3','cand<font color="red">y','w','candy'],
                ['7','33.PNG','33.mp3','bab<font color="red">y','w','baby'],
                ['7','34.PNG','34.mp3','wind<font color="red">y','w','widny'],
                ['8','35.PNG','35.mp3','b<font color="red">oa<font color="black">t','w','boat'],
                ['8','36.PNG','36.mp3','r<font color="red">oa<font color="black">d','w','road'],
                ['8','37.PNG','37.mp3','s<font color="red">oa<font color="black">p','w','soap'],
                ['8','38.PNG','38.mp3','b<font color="red">ow<font color="black">l','w','bowl'],
                ['8','39.PNG','39.mp3','sn<font color="red">ow','w','snow'],
                ['8','40.PNG','40.mp3','wind<font color="red">ow','w','window'],
                ['9','41.PNG','41.mp3','s<font color="red">ui<font color="black">t','w','suit'],
                ['9','42.PNG','42.mp3','j<font color="red">ui<font color="black">ce','w','juice'],
                ['9','43.PNG','43.mp3','fr<font color="red">ui<font color="black">t','w','fruit'],
                ['9','44.PNG','44.mp3','bl<font color="red">ue','w','blue'],
                ['9','45.PNG','45.mp3','gl<font color="red">ue','w','glue'],
                ['9','46.PNG','46.mp3','cl<font color="red">ue','w','clue'],
                ['10','47.PNG','47.mp3','<font color="red">bl<font color="black">ow','w','blow'],
                ['10','48.PNG','48.mp3','<font color="red">bl<font color="black">ack','w','black'],
                ['10','49.PNG','49.mp3','<font color="red">cl<font color="black">am','w','clam'],
                ['10','50.PNG','50.mp3','<font color="red">cl<font color="black">ean','w','clean'],
                ['10','51.PNG','51.mp3','<font color="red">fl<font color="black">ag','w','flag'],
                ['10','52.PNG','52.mp3','<font color="red">fl<font color="black">ame','w','flame'],
                ['11','53.PNG','53.mp3','<font color="red">br<font color="black">ave','w','brave'],
                ['11','54.PNG','54.mp3','<font color="red">br<font color="black">ide','w','bride'],
                ['11','55.PNG','55.mp3','<font color="red">cr<font color="black">ab','w','crab'],
                ['11','56.PNG','56.mp3','<font color="red">cr<font color="black">ow','w','crow'],
                ['11','57.PNG','57.mp3','<font color="red">dr<font color="black">um','w','drum'],
                ['11','58.PNG','58.mp3','<font color="red">dr<font color="black">ive','w','drive'],
                ['12','59.PNG','59.mp3','<font color="red">gl<font color="black">ad','w','glad'],
                ['12','60.PNG','60.mp3','<font color="red">gl<font color="black">obe','w','globe'],
                ['12','61.PNG','61.mp3','<font color="red">pl<font color="black">um','w','plum'],
                ['12','62.PNG','62.mp3','<font color="red">pl<font color="black">ane','w','plane'],
                ['12','63.PNG','63.mp3','<font color="red">sl<font color="black">ed','w','sled'],
                ['12','64.PNG','64.mp3','<font color="red">sl<font color="black">ow','w','slow'],
                ['13','65.PNG','65.mp3','<font color="red">fr<font color="black">og','w','frog'],
                ['13','66.PNG','66.mp3','<font color="red">fr<font color="black">ame','w','frame'],
                ['13','67.PNG','67.mp3','<font color="red">pr<font color="black">ize','w','prize'],
                ['13','68.PNG','68.mp3','<font color="red">pr<font color="black">ay','w','pray'],
                ['13','69.PNG','69.mp3','<font color="red">tr<font color="black">ain','w','train'],
                ['13','70.PNG','70.mp3','<font color="red">tr<font color="black">ee','w','tree'],
                ['14','71.PNG','71.mp3','<font color="red">sn<font color="black">ake','w','snake'],
                ['14','72.PNG','72.mp3','<font color="red">sn<font color="black">ail','w','snail'],
                ['14','73.PNG','73.mp3','<font color="red">sp<font color="black">ace','w','space'],
                ['14','74.PNG','74.mp3','<font color="red">sp<font color="black">in','w','spin'],
                ['14','75.PNG','75.mp3','<font color="red">st<font color="black">op','w','stop'],
                ['14','76.PNG','76.mp3','<font color="red">st<font color="black">one','w','stone']
                ];

      // Phonics Fun 3 [unit, image, sound, word, sentence:s or word:w, only word]
      let pf3 = [['1','01.PNG','01.mp3','sea<font color="red">l','w','seal'],
                ['1','02.PNG','02.mp3','mai<font color="red">l','w','mail'],
                ['1','03.PNG','03.mp3','ra<font color="red">m','w','ram'],
                ['1','04.PNG','04.mp3','crea<font color="red">m','w','cream'],
                ['1','05.PNG','05.mp3','wi<font color="red">n','w','win'],
                ['1','06.PNG','06.mp3','gree<font color="red">n','w','green'],
                ['2','07.PNG','07.mp3','<font color="red">oi<font color="black">l','w','oil'],
                ['2','08.PNG','08.mp3','b<font color="red">oi<font color="black">l','w','boil'],
                ['2','09.PNG','09.mp3','c<font color="red">oi<font color="black">n','w','coin'],
                ['2','10.PNG','10.mp3','b<font color="red">oy','w','boy'],
                ['2','11.PNG','11.mp3','t<font color="red">oy','w','toy'],
                ['2','12.PNG','12.mp3','j<font color="red">oy','w','joy'],
                ['3','13.PNG','13.mp3','l<font color="red">ou<font color="black">d','w','loud'],
                ['3','14.PNG','14.mp3','cl<font color="red">ou<font color="black">d','w','cloud'],
                ['3','15.PNG','15.mp3','h<font color="red">ou<font color="black">se','w','house'],
                ['3','16.PNG','16.mp3','c<font color="red">ow<font color="black">','w','cow'],
                ['3','17.PNG','17.mp3','<font color="red">ow<font color="black">l','w','owl'],
                ['3','18.PNG','18.mp3','cl<font color="red">ow<font color="black">n','w','clown'],
                ['4','19.PNG','19.mp3','d<font color="red">ew<font color="black">','w','dew'],
                ['4','20.PNG','20.mp3','n<font color="red">ew<font color="black">s','w','news'],
                ['4','21.PNG','21.mp3','st<font color="red">ew<font color="black">','w','stew'],
                ['4','22.PNG','22.mp3','z<font color="red">oo<font color="black">','w','zoo'],
                ['4','23.PNG','23.mp3','r<font color="red">oo<font color="black">f','w','roof'],
                ['4','24.PNG','24.mp3','sp<font color="red">oo<font color="black">n','w','spoon'],
                ['6','25.PNG','25.mp3','<font color="red">kn<font color="black">ee','w','knee'],
                ['6','26.PNG','26.mp3','<font color="red">kn<font color="black">ife','w','knife'],
                ['6','27.PNG','27.mp3','<font color="red">wr<font color="black">ap','w','wrap'],
                ['6','28.PNG','28.mp3','<font color="red">wr<font color="black">ite','w','write'],
                ['6','29.PNG','29.mp3','bo<font color="red">mb','w','bomb'],
                ['6','30.PNG','30.mp3','la<font color="red">mb','w','lamb'],
                ['7','31.PNG','31.mp3','<font color="red">spr<font color="black">ay','w','spray'],
                ['7','32.PNG','32.mp3','<font color="red">spr<font color="black">out','w','sprout'],
                ['7','33.PNG','33.mp3','<font color="red">str<font color="black">eet','w','street'],
                ['7','34.PNG','34.mp3','<font color="red">str<font color="black">ipe','w','stripe'],
                ['7','35.PNG','35.mp3','<font color="red">str<font color="black">ew','w','screw'],
                ['7','36.PNG','36.mp3','<font color="red">str<font color="black">een','w','screen'],
                ['8','37.PNG','37.mp3','st<font color="red">ar','w','star'],
                ['8','38.PNG','38.mp3','c<font color="red">ar','w','car'],
                ['8','39.PNG','39.mp3','wint<font color="red">er','w','winter'],
                ['8','40.PNG','40.mp3','summ<font color="red">er','w','summer'],
                ['8','41.PNG','41.mp3','sk<font color="red">ir<font color="black">t','w','skirt'],
                ['8','42.PNG','42.mp3','h<font color="red">ur<font color="black">t','w','hurt'],
                ['9','43.PNG','43.mp3','c<font color="red">or<font color="black">n','w','corn'],
                ['9','44.PNG','44.mp3','h<font color="red">or<font color="black">se','w','horse'],
                ['9','45.PNG','45.mp3','h<font color="red">air','w','hair'],
                ['9','46.PNG','46.mp3','st<font color="red">air','w','stair'],
                ['9','47.PNG','47.mp3','<font color="red">care','w','care'],
                ['9','48.PNG','48.mp3','squ<font color="red">are','w','square'],
                ['10','49.PNG','49.mp3','<font color="red">c<font color="black">one','w','corn'],
                ['10','50.PNG','50.mp3','<font color="red">c<font color="black">ity','w','city'],
                ['10','51.PNG','51.mp3','ri<font color="red">c<font color="black">e','w','rice'],
                ['10','52.PNG','52.mp3','<font color="red">g<font color="black">ame','w','game'],
                ['10','53.PNG','53.mp3','<font color="red">g<font color="black">em','w','gem'],
                ['10','54.PNG','54.mp3','ma<font color="red">g<font color="black">ic','w','magic'],
                ['11','55.PNG','55.mp3','<font color="red">sh<font color="black">ip','w','ship'],
                ['11','56.PNG','56.mp3','<font color="red">sh<font color="black">op','w','shop'],
                ['11','57.PNG','57.mp3','fi<font color="red">sh<font color="black">','w','fish'],
                ['11','58.PNG','58.mp3','<font color="red">ch<font color="black">in','w','chin'],
                ['11','59.PNG','59.mp3','<font color="red">ch<font color="black">air','w','chair'],
                ['11','60.PNG','60.mp3','pea<font color="red">ch<font color="black">','w','peach'],
                ['12','61.PNG','61.mp3','<font color="red">ph<font color="black">one','w','phone'],
                ['12','62.PNG','62.mp3','gra<font color="red">ph<font color="black">','w','graph'],
                ['12','63.PNG','63.mp3','dol<font color="red">ph<font color="black">in','w','dolphin'],
                ['12','64.PNG','64.mp3','<font color="red">wh<font color="black">ite','w','white'],
                ['12','65.PNG','65.mp3','<font color="red">wh<font color="black">eel','w','wheel'],
                ['12','66.PNG','66.mp3','<font color="red">wh<font color="black">ale','w','whale'],
                ['13','67.PNG','67.mp3','<font color="red">th<font color="black">is','w','this'],
                ['13','68.PNG','68.mp3','<font color="red">th<font color="black">at','w','that'],
                ['13','69.PNG','69.mp3','bro<font color="red">th<font color="black">er','w','brother'],
                ['13','70.PNG','70.mp3','<font color="red">th<font color="black">in','w','thin'],
                ['13','71.PNG','71.mp3','tee<font color="red">th<font color="black">','w','teeth'],
                ['13','72.PNG','72.mp3','ma<font color="red">th<font color="black">','w','math'],
                ['14','73.PNG','73.mp3','ki<font color="red">ng','w','king'],
                ['14','74.PNG','74.mp3','si<font color="red">ng','w','sing'],
                ['14','75.PNG','75.mp3','ba<font color="red">nk','w','bank'],
                ['14','76.PNG','76.mp3','pi<font color="red">nk','w','pink'],
                ['14','77.PNG','77.mp3','lu<font color="red">ck','w','luck'],
                ['14','78.PNG','78.mp3','lo<font color="red">ck','w','lock']
                ];

      // Phonics Town 1 [unit, image, sound, word, sentence:s or word:w, only word]
      let pt1 = [['1','001.PNG','001.mp3','<font size="7">bear, big, banana, bubble</font>','s','bear, big, banana, bubble'],
                ['1','002.PNG','002.mp3','<font size="7">pig, pink, pie, pretty</font>','s','pig, pink, pie, pretty'],
                ['1','003.PNG','003.mp3','<font size="7">hen, hill, house, hat</font>','s','hen, hill, house, hat'],

                ['2','01.PNG','01.mp3','<font color="red">b<font color="black">ear','w','bear'],
                ['2','02.PNG','02.mp3','<font color="red">b<font color="black">ig','w','big'],
                ['2','03.PNG','03.mp3','<font color="red">b<font color="black">anana','w','banana'],
                ['2','04.PNG','04.mp3','<font color="red">b<font color="black">ubble','w','bubble'],
                ['2','05.PNG','05.mp3','<font color="red">p<font color="black">ig','w','pig'],
                ['2','06.PNG','06.mp3','<font color="red">p<font color="black">ink','w','pink'],
                ['2','07.PNG','07.mp3','<font color="red">p<font color="black">ie','w','pie'],
                ['2','08.PNG','08.mp3','<font color="red">p<font color="black">retty','w','pretty'],
                ['2','09.PNG','09.mp3','<font color="red">h<font color="black">en','w','hen'],
                ['2','10.PNG','10.mp3','<font color="red">h<font color="black">ill','w','hill'],
                ['2','11.PNG','11.mp3','<font color="red">h<font color="black">ouse','w','house'],
                ['2','12.PNG','12.mp3','<font color="red">h<font color="black">at','w','hat'],

                ['3','004.PNG','004.mp3','<font size="7">goes, wears, to, on, for, in</font>','s','goes, wears, to, on, for, in'],

                ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The pink pig is pretty.<br>The bear goes to the hill.<br>The hen goes to the house.</p>','s','The pink pig is pretty.<br>The bear goes to the hill.<br>The hen goes to the house.'],
                ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The bear is on the hill.<br>The bear wears a pretty hat.<br>The banana is for the pink pig.</p>','s','The bear is on the hill.<br>The bear wears a pretty hat.<br>The banana is for the pink pig.'],
                ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The hen is in the house.<br>The hen wears a big hat.<br>The pie is for the pink pig.</p>','s','The hen is in the house.<br>The hen wears a big hat.<br>The pie is for the pink pig.'],
                ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The pink pig wears a pretty hat.<br>The big pie is for the pink pig.<br>The hen is in the bubble.<br>The pink pig is in the bubble.</p>','s','The pink pig wears a pretty hat.<br>The big pie is for the pink pig.<br>The hen is in the bubble.<br>The pink pig is in the bubble.'],

                ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 분홍 돼지는 예쁩니다.<br>그 곰은 그 언덕으로 갑니다.<br>그 암탉은 그 집으로 갑니다.</p>','s','그 분홍 돼지는 예쁩니다.<br>그 곰은 그 언덕으로 갑니다.<br>그 암탉은 그 집으로 갑니다.'],
                ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 곰은 그 언덕 위에 있습니다.<br>그 곰은 예쁜 모자를 씁니다.<br>그 바나나는 그 분홍 돼지를 위한 것입니다.</p>','s','그 곰은 그 언덕 위에 있습니다.<br>그 곰은 예쁜 모자를 씁니다.<br>그 바나나는 그 분홍 돼지를 위한 것입니다.'],
                ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 암탉은 그 집 안에 있습니다.<br>그 암탉은 큰 모자를 씁니다.<br>그 파이는 그 분홍 돼지를 위한 것입니다.</p>','s','그 암탉은 그 집 안에 있습니다.<br>그 암탉은 큰 모자를 씁니다.<br>그 파이는 그 분홍 돼지를 위한 것입니다.'],
                ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 분홍 돼지는 예쁜 모자를 씁니다.<br>그 큰 파이는 그 분홍 돼지를 위한 것입니다.<br>그 암탉은 그 비눗방울 안에 있습니다.<br>그 분홍 돼지는 그 비눗방울 안에 있습니다.</p>','s','그 분홍 돼지는 예쁜 모자를 씁니다.<br>그 큰 파이는 그 분홍 돼지를 위한 것입니다.<br>그 암탉은 그 비눗방울 안에 있습니다.<br>그 분홍 돼지는 그 비눗방울 안에 있습니다.'],

                ['6','101.PNG','101.mp3','<font size="7">dad, doll, draw, drink</font>','s','dad, doll, draw, drink'],
                ['6','102.PNG','102.mp3','<font size="7">tomato, table, toy, tent</font>','s','tomato, table, toy, tent'],
                ['6','103.PNG','103.mp3','<font size="7">juice, jeans, jet, jungle</font>','s','juice, jeans, jet, jungle'],

                ['7','13.PNG','13.mp3','<font color="red">d<font color="black">ad','w','dad'],
                ['7','14.PNG','14.mp3','<font color="red">d<font color="black">oll','w','doll'],
                ['7','15.PNG','15.mp3','<font color="red">d<font color="black">raw','w','draw'],
                ['7','16.PNG','16.mp3','<font color="red">d<font color="black">rink','w','drink'],
                ['7','17.PNG','17.mp3','<font color="red">t<font color="black">omato','w','tomato'],
                ['7','18.PNG','18.mp3','<font color="red">t<font color="black">able','w','table'],
                ['7','19.PNG','19.mp3','<font color="red">t<font color="black">oy','w','toy'],
                ['7','20.PNG','20.mp3','<font color="red">t<font color="black">ent','w','tent'],
                ['7','21.PNG','21.mp3','<font color="red">j<font color="black">uice','w','juice'],
                ['7','22.PNG','22.mp3','<font color="red">j<font color="black">eans','w','jeans'],
                ['7','23.PNG','23.mp3','<font color="red">j<font color="black">et','w','jet'],
                ['7','24.PNG','24.mp3','<font color="red">j<font color="black">ungle','w','jungle'],

                ['8','104.PNG','104.mp3','<font size="7">has, her, bag, makes, and</font>','s','has, her, bag, makes, and'],

                ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.</p>','s','Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.','s','Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.</p>'],
                ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy wears jeans.<br>The doll and the toy are in her bag.<br>Dorothy and her dad are in the jet.</p>','s','Dorothy wears jeans.<br>The doll and the toy are in her bag.<br>Dorothy and her dad are in the jet.'],
                ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy and her dad are in the jungle.<br>Her dad makes a big tent.<br>Her dad makes a table.<br>Dorothy and her dad are in the tent.</p>','s','Dorothy and her dad are in the jungle.<br>Her dad makes a big tent.<br>Her dad makes a table.<br>Dorothy and her dad are in the tent.'],
                ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The doll is on the jet.<br>Dorothy draws the jet and the doll.<br>Her dad is in the tent.<br>Her dad drinks tomato juice.</p>','s','The doll is on the jet.<br>Dorothy draws the jet and the doll.<br>Her dad is in the tent.<br>Her dad drinks tomato juice.'],

                ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy는 탁자를 가지고 있습니다.<br>인형과 장난감이 그 탁자 위에 있습니다.<br>Dorothy는 토마토 주스를 마십니다.<br>그녀의 아빠는 그 탁자 위에 인형을 그립니다.</p>','s','Dorothy는 탁자를 가지고 있습니다.<br>인형과 장난감이 그 탁자 위에 있습니다.<br>Dorothy는 토마토 주스를 마십니다.<br>그녀의 아빠는 그 탁자 위에 인형을 그립니다.'],
                ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy는 청바지를 입습니다.<br>그 인형과 그 장난감은 그녀의 가방 안에 있습니다.<br>Dorothy와 그녀의 아빠는 그 제트기 안에 있습니다.</p>','s','Dorothy는 청바지를 입습니다.<br>그 인형과 그 장난감은 그녀의 가방 안에 있습니다.<br>Dorothy와 그녀의 아빠는 그 제트기 안에 있습니다.'],
                ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy와 그녀의 아빠는 그 정글 안에 있습니다.<br>그녀의 아빠는 큰 텐트를 만듭니다.<br>그녀의 아빠는 탁자를 만듭니다.<br>Dorothy와 그녀의 아빠는 그 텐트 안에 있습니다.</p>','s','Dorothy와 그녀의 아빠는 그 정글 안에 있습니다.<br>그녀의 아빠는 큰 텐트를 만듭니다.<br>그녀의 아빠는 탁자를 만듭니다.<br>Dorothy와 그녀의 아빠는 그 텐트 안에 있습니다.'],
                ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 인형은 그 제트기 위에 있습니다.<br>Dorothy는 그 제트기와 그 인형을 그립니다.<br>그녀의 아빠는 그 텐트 안에 있습니다.<br>그녀의 아빠는 토마토 주스를 마십니다.</p>','s','그 인형은 그 제트기 위에 있습니다.<br>Dorothy는 그 제트기와 그 인형을 그립니다.<br>그녀의 아빠는 그 텐트 안에 있습니다.<br>그녀의 아빠는 토마토 주스를 마십니다.'],

                ['11','201.PNG','201.mp3','<font size="7">fox, frog, fan, fat</font>','s','fox, frog, fan, fat'],
                ['11','202.PNG','202.mp3','<font size="7">vest, vase, violin, very</font>','s','vest, vase, violin, very'],
                ['11','203.PNG','203.mp3','<font size="7">wig, woods, wear, wolf</font>','s','wig, woods, wear, wolf'],

                ['12','25.PNG','25.mp3','<font color="red">f<font color="black">ox','w','fox'],
                ['12','26.PNG','26.mp3','<font color="red">f<font color="black">rog','w','frog'],
                ['12','27.PNG','27.mp3','<font color="red">f<font color="black">an','w','fan'],
                ['12','28.PNG','28.mp3','<font color="red">f<font color="black">at','w','fat'],
                ['12','29.PNG','29.mp3','<font color="red">v<font color="black">est','w','vest'],
                ['12','30.PNG','30.mp3','<font color="red">v<font color="black">ase','w','vase'],
                ['12','31.PNG','31.mp3','<font color="red">v<font color="black">iolin','w','violin'],
                ['12','32.PNG','32.mp3','<font color="red">v<font color="black">ery','w','very'],
                ['12','33.PNG','33.mp3','<font color="red">w<font color="black">ig','w','wig'],
                ['12','34.PNG','34.mp3','<font color="red">w<font color="black">oods','w','woods'],
                ['12','35.PNG','35.mp3','<font color="red">w<font color="black">ear','w','wear'],
                ['12','36.PNG','36.mp3','<font color="red">w<font color="black">olf','w','wolf'],

                ['13','204.PNG','104.mp3','<font size="7">there is, what, this, it, not, comes, nice</font>','s','there is, what, this, it, not, comes, nice'],

                ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A fox goes to the woods.<br>The fox wears a vest.<br>There is a wig in the woods.</p>','s','A fox goes to the woods.<br>The fox wears a vest.<br>There is a wig in the woods.'],
                ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox goes to the frog.<br>What is this for?<br>The frog looks at the wig.<br>It’s a vase.<br>No, it’s not a vase.</p>','s','The fox goes to the frog.<br>What is this for?<br>The frog looks at the wig.<br>It’s a vase.<br>No, it’s not a vase.'],
                ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox and the frog go to the wolf.<br>The wolf has a violin.<br>What is this for?<br>It’s a fan.<br>No, it’s not a fan.</p>','s','The fox and the frog go to the wolf.<br>The wolf has a violin.<br>What is this for?<br>It’s a fan.<br>No, it’s not a fan.'],
                ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A fat bear comes to the fox.<br>It is my wig. Thank you.<br>The fat bear wears the wig.<br>You are very nice!</p>','s','A fat bear comes to the fox.<br>It is my wig. Thank you.<br>The fat bear wears the wig.<br>You are very nice!'],

                ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">여우가 그 숲으로 갑니다.<br>그 여우는 조끼를 입습니다.<br>그 숲 안에 가발이 있습니다.</p>','s','여우가 그 숲으로 갑니다.<br>그 여우는 조끼를 입습니다.<br>그 숲 안에 가발이 있습니다.'],
                ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우는 개구리에게 갑니다.<br>이것은 무엇을 위한 것이니?<br>그 개구리는 그 가발을 봅니다.<br>그것은 꽃병이야.<br>아니, 그것은 꽃병이 아니야.</p>','s','그 여우는 개구리에게 갑니다.<br>이것은 무엇을 위한 것이니?<br>그 개구리는 그 가발을 봅니다.<br>그것은 꽃병이야.<br>아니, 그것은 꽃병이 아니야.'],
                ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우와 그 개구리는 그 늑대에게 갑니다.<br>그 늑대는 바이올린을 가지고 있습니다.<br>이것은 무엇을 위한 것이니?<br>그것은 부채야.<br>아니, 그것은 부채가 아니야.</p>','s','그 여우와 그 개구리는 그 늑대에게 갑니다.<br>그 늑대는 바이올린을 가지고 있습니다.<br>이것은 무엇을 위한 것이니?<br>그것은 부채야.<br>아니, 그것은 부채가 아니야.'],
                ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">뚱뚱한 곰이 그 여우에게 옵니다.<br>그것은 나의 가발이야. 고마워.<br>그 뚱뚱한 곰은 그 가발을 씁니다.<br>나는 매우 멋져!</p>','s','뚱뚱한 곰이 그 여우에게 옵니다.<br>그것은 나의 가발이야. 고마워.<br>그 뚱뚱한 곰은 그 가발을 씁니다.<br>나는 매우 멋져!'],

                ];

      // Phonics Town 2 [unit, image, sound, word, sentence:s or word:w, only word]
      let pt2 = [['1','001.PNG','001.mp3','<font size="7">lamb, long, log, ladder</font>','s','lamb, long, log, ladder'],
                  ['1','002.PNG','002.mp3','<font size="7">raccon, river, rain, rainbow</font>','s','raccon, river, rain, rainbow'],
                  ['1','003.PNG','003.mp3','<font size="7">yard, yak, yellow, yarn</font>','s','yard, yak, yellow, yarn'],

                  ['2','01.PNG','01.mp3','<font color="red">l<font color="black">amb','w','lamb'],
                  ['2','02.PNG','02.mp3','<font color="red">l<font color="black">ong','w','long'],
                  ['2','03.PNG','03.mp3','<font color="red">l<font color="black">og','w','log'],
                  ['2','04.PNG','04.mp3','<font color="red">l<font color="black">adder','w','ladder'],
                  ['2','05.PNG','05.mp3','<font color="red">r<font color="black">accoon','w','raccoon'],
                  ['2','06.PNG','06.mp3','<font color="red">r<font color="black">iver','w','river'],
                  ['2','07.PNG','07.mp3','<font color="red">r<font color="black">ain','w','rain'],
                  ['2','08.PNG','08.mp3','<font color="red">r<font color="black">ainbow','w','rainbow'],
                  ['2','09.PNG','09.mp3','<font color="red">y<font color="black">ard','w','yard'],
                  ['2','10.PNG','10.mp3','<font color="red">y<font color="black">ark','w','yark'],
                  ['2','11.PNG','11.mp3','<font color="red">y<font color="black">ellow','w','yellow'],
                  ['2','12.PNG','12.mp3','<font color="red">y<font color="black">arn','w','yarn'],

                  ['3','004.PNG','004.mp3','<font size="7">looks at, map, pulls, don\'t like, up, thank</font>','s','looks at, map, pulls, don\'t like, up, thank'],

                  ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A lamb is in the yard.<br>A yak looks at a yellow map.<br>A raccoon comes to the yard.<br>The raccoon has long yarn.</p>','s','A lamb is in the yard.<br>A yak looks at a yellow map.<br>A raccoon comes to the yard.<br>The raccoon has long yarn.'],
                  ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a long river.<br>The yak looks at a long log.<br>The lamb and the raccoon are on the log.<br>The yak pulls the yarn in the river.</p>','s','There is a long river.<br>The yak looks at a long log.<br>The lamb and the raccoon are on the log.<br>The yak pulls the yarn in the river.'],
                  ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The lamb and the yak are in the rain.<br>I don’t like rain.<br>The raccoon is in the rain.<br>I like rain.</p>','s','The lamb and the yak are in the rain.<br>I don’t like rain.<br>The raccoon is in the rain.<br>I like rain.'],
                  ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The raccoon looks at a yellow ladder.<br>They go up the yellow ladder.<br>The lamb looks at the rainbow.<br>Thank you, rain.</p>','s','The raccoon looks at a yellow ladder.<br>They go up the yellow ladder.<br>The lamb looks at the rainbow.<br>Thank you, rain.'],

                  ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">어린양은 그 마당에 있습니다.<br>야크는 노란색 지도를 봅니다.<br>너구리는 그 마당으로 옵니다.<br>그 너구리는 긴 실을 가지고 있습니다.</p>','s','어린양은 그 마당에 있습니다.<br>야크는 노란색 지도를 봅니다.<br>너구리는 그 마당으로 옵니다.<br>그 너구리는 긴 실을 가지고 있습니다.'],
                  ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">긴 강이 있습니다.<br>그 야크는 긴 통나무를 봅니다.<br>그 어린양과 그 너구리는 그 통나무 위에 있습니다.<br>그 야크는 그 강에서 그 실을 당깁니다.</p>','s','긴 강이 있습니다.<br>그 야크는 긴 통나무를 봅니다.<br>그 어린양과 그 너구리는 그 통나무 위에 있습니다.<br>그 야크는 그 강에서 그 실을 당깁니다.'],
                  ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 어린양과 그 야크는 그 빗속에 있습니다.<br>나는 비를 좋아하지 않아.<br>그 너구리는 그 빗속에 있습니다.<br>나는 비를 좋아해.</p>','s','그 어린양과 그 야크는 그 빗속에 있습니다.<br>나는 비를 좋아하지 않아.<br>그 너구리는 그 빗속에 있습니다.<br>나는 비를 좋아해.'],
                  ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 너구리는 노란색 사다리를 봅니다.<br>그들은 그 노란색 사다리 위로 갑니다.<br>그 어린양은 그 무지개를 봅니다.<br>고마워, 비야.</p>','s','그 너구리는 노란색 사다리를 봅니다.<br>그들은 그 노란색 사다리 위로 갑니다.<br>그 어린양은 그 무지개를 봅니다.<br>고마워, 비야.'],

                  ['6','101.PNG','101.mp3','<font size="7">cat, cake, cut, kite, kangaroo</font>','s','cat, cake, cut, kite, kangaroo'],
                  ['6','102.PNG','102.mp3','<font size="7">gorilla, garden, game, green</font>','s','gorilla, garden, game, green'],
                  ['6','103.PNG','103.mp3','<font size="7">queen, quilt, quiet, quiz</font>','s','queen, quilt, quiet, quiz'],

                  ['7','13.PNG','13.mp3','<font color="red">c<font color="black">at','w','cat'],
                  ['7','14.PNG','14.mp3','<font color="red">c<font color="black">ake','w','cake'],
                  ['7','15.PNG','15.mp3','<font color="red">c<font color="black">ut','w','cut'],
                  ['7','16.PNG','16.mp3','<font color="red">k<font color="black">ite','w','kite'],
                  ['7','17.PNG','17.mp3','<font color="red">k<font color="black">angaroo','w','kangaroo'],
                  ['7','18.PNG','18.mp3','<font color="red">g<font color="black">orilla','w','gorilla'],
                  ['7','19.PNG','19.mp3','<font color="red">g<font color="black">arden','w','garden'],
                  ['7','20.PNG','20.mp3','<font color="red">g<font color="black">ame','w','game'],
                  ['7','21.PNG','21.mp3','<font color="red">g<font color="black">reen','w','green'],
                  ['7','22.PNG','22.mp3','<font color="red">qu<font color="black">een','w','queen'],
                  ['7','23.PNG','23.mp3','<font color="red">qu<font color="black">ilt','w','quilt'],
                  ['7','24.PNG','24.mp3','<font color="red">qu<font color="black">iet','w','quiet'],
                  ['7','25.PNG','25.mp3','<font color="red">qu<font color="black">iz','w','quiz'],

                  ['8','104.PNG','104.mp3','<font size="7">gets, gives, sees, goodbye, down</font>','s','gets, gives, sees, goodbye, down'],

                  ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A cat goes to a gorilla.<br>The cat has a pretty quilt<br>The cat is in the woods.<br>It is quiet.</p>','s','A cat goes to a gorilla.<br>The cat has a pretty quilt<br>The cat is in the woods.<br>It is quiet.'],
                  ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat is in the garden.<br>The queen likes a quiz game.<br>The cat gets a nice cake.</p>','s','The cat is in the garden.<br>The queen likes a quiz game.<br>The cat gets a nice cake.'],
                  ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat goes up the green hill.<br>The cat sees a kangaroo.<br>The kangaroo gives the kite to the cat.<br>Thank you. Goodbye.</p>','s','The cat goes up the green hill.<br>The cat sees a kangaroo.<br>The kangaroo gives the kite to the cat.<br>Thank you. Goodbye.'],
                  ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat gives the quilt to the gorilla.<br>The gorilla cuts the cake.<br>Go down the green hill.<br>And go to the quiet woods.</p>','s','The cat gives the quilt to the gorilla.<br>The gorilla cuts the cake.<br>Go down the green hill.<br>And go to the quiet woods.'],

                  ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">고양이는 고릴라에게 갑니다.<br>그 고양이는 예쁜 퀼트를 가지고 있습니다.<br>그 고양이는 그 숲속에 있습니다.<br>그곳은 조용합니다.</p>','s','고양이는 고릴라에게 갑니다.<br>그 고양이는 예쁜 퀼트를 가지고 있습니다.<br>그 고양이는 그 숲속에 있습니다.<br>그곳은 조용합니다.'],
                  ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 정원에 있습니다.<br>그 여왕은 퀴즈게임을 좋아합니다.<br>그 고양이는 멋진 케이크를 얻습니다.</p>','s','그 고양이는 그 정원에 있습니다.<br>그 여왕은 퀴즈게임을 좋아합니다.<br>그 고양이는 멋진 케이크를 얻습니다.'],
                  ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 초록색 언덕 위로 갑니다.<br>그 고양이는 캥거루를 봅니다.<br>그 캥거루는 그 연을 그 고양이에게 줍니다.<br>고마워, 안녕.</p>','s','그 고양이는 그 초록색 언덕 위로 갑니다.<br>그 고양이는 캥거루를 봅니다.<br>그 캥거루는 그 연을 그 고양이에게 줍니다.<br>고마워, 안녕.'],
                  ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 퀼트를 그 고릴라에게 줍니다.<br>그 고릴라는 그 케이크를 자릅니다.<br>그 초록색 언덕 아래로 가라.<br>그리고 그 조용한 숲으로 가라.</p>','s','그 고양이는 그 퀼트를 그 고릴라에게 줍니다.<br>그 고릴라는 그 케이크를 자릅니다.<br>그 초록색 언덕 아래로 가라.<br>그리고 그 조용한 숲으로 가라.'],

                  ['11','201.PNG','201.mp3','<font size="7">sea, seal, sun, sing</font>','s','sea, seal, sun, sing'],
                  ['11','202.PNG','202.mp3','<font size="7">zebra, zoo, zookeeper, zigzag</font>','s','zebra, zoo, zookeeper, zigzag'],
                  ['11','203.PNG','203.mp3','<font size="7">six, fox, box, mailbox</font>','s','six, fox, box, mailbox'],

                  ['12','26.PNG','26.mp3','<font color="red">s<font color="black">ea','w','sea'],
                  ['12','27.PNG','27.mp3','<font color="red">s<font color="black">eal','w','seal'],
                  ['12','28.PNG','28.mp3','<font color="red">s<font color="black">un','w','sun'],
                  ['12','29.PNG','29.mp3','<font color="red">s<font color="black">ing','w','sing'],
                  ['12','30.PNG','30.mp3','<font color="red">z<font color="black">ebra','w','zebra'],
                  ['12','31.PNG','31.mp3','<font color="red">z<font color="black">oo','w','zoo'],
                  ['12','32.PNG','32.mp3','<font color="red">z<font color="black">ookeeper','w','zookeeper'],
                  ['12','33.PNG','33.mp3','<font color="red">z<font color="black">igzag','w','zig<font color="red">x<font color="black">ag'],
                  ['12','34.PNG','34.mp3','si<font color="red">x<font color="black">','w','six'],
                  ['12','35.PNG','35.mp3','fo<font color="red">x<font color="black">','w','fox'],
                  ['12','36.PNG','36.mp3','bo<font color="red">x<font color="black">','w','box'],
                  ['12','37.PNG','37.mp3','mailbo<font color="red">x<font color="black">','w','mailbox'],

                  ['13','204.PNG','204.mp3','<font size="7">boys, swims, falls into, tree, under, cars</font>','s','boys, swims, falls into, tree, under, cars'],

                  ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A zebra is in the zoo.<br>Six boys like the zebra.<br>A fox is on the box.</p>','s','A zebra is in the zoo.<br>Six boys like the zebra.<br>A fox is on the box.'],
                  ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The zookeeper goes to the mailbox.<br>The zebra goes in zigzags.<br>The fox looks at the zebra.<br>The zebra goes to the sea.</p>','s','The zookeeper goes to the mailbox.<br>The zebra goes in zigzags.<br>The fox looks at the zebra.<br>The zebra goes to the sea.'],
                  ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A seal swims in the sea.<br>The zebra falls into the sea.<br>Six lambs sing under the tree.<br>The zebra is under the sun.</p>','s','A seal swims in the sea.<br>The zebra falls into the sea.<br>Six lambs sing under the tree.<br>The zebra is under the sun.'],
                  ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Six cars are under the sun.<br>The zebra sings in the car.<br>The zookeeper is in the zoo.<br>The fox sings on the box.</p>','s','Six cars are under the sun.<br>The zebra sings in the car.<br>The zookeeper is in the zoo.<br>The fox sings on the box.'],

                  ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">얼룩말은 그 동물원에 있습니다.<br>6명의 소년들은 그 얼룩말을 좋아합니다.<br>여우는 그 상자 위에 있습니다.</p>','s','얼룩말은 그 동물원에 있습니다.<br>6명의 소년들은 그 얼룩말을 좋아합니다.<br>여우는 그 상자 위에 있습니다.'],
                  ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 사육사는 그 우편함으로 갑니다.<br>그 얼룩말은 지그재그로 갑니다.<br>그 여우는 그 얼룩말을 봅니다.<br>그 얼룩말은 그 바다로 갑니다.</p>','s','그 사육사는 그 우편함으로 갑니다.<br>그 얼룩말은 지그재그로 갑니다.<br>그 여우는 그 얼룩말을 봅니다.<br>그 얼룩말은 그 바다로 갑니다.'],
                  ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">물개는 그 바다에서 수영합니다.<br>그 얼룩말은 그 바다에 빠집니다.<br>6마리의 어린양들이 그 나무 아래에서 노래합니다.<br>그 얼룩말은 그 태양 아래에 있습니다.</p>','s','물개는 그 바다에서 수영합니다.<br>그 얼룩말은 그 바다에 빠집니다.<br>6마리의 어린양들이 그 나무 아래에서 노래합니다.<br>그 얼룩말은 그 태양 아래에 있습니다.'],
                  ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">6대의 자동차들이 그 태양 아래에 있습니다.<br>그 얼룩말은 그 자동차에서 노래합니다.<br>그 사욕사는 그 동물원에 있습니다.<br>그 여우는 그 상자 위에서 노래합니다.</p>','s','6대의 자동차들이 그 태양 아래에 있습니다.<br>그 얼룩말은 그 자동차에서 노래합니다.<br>그 사욕사는 그 동물원에 있습니다.<br>그 여우는 그 상자 위에서 노래합니다.']
                ];

      // Phonics Town 3 [unit, image, sound, word, sentence:s or word:w, only word]
      let pt3 = [['1','001.PNG','001.mp3','<font size="7">monkey, mole, mirror, make</font>','s','monkey, mole, mirror, make'],
                ['1','002.PNG','002.mp3','<font size="7">nut, necktie, nest, noise</font>','s','nut, necktie, nest, noise'],
                ['1','003.PNG','003.mp3','<font size="7">rabbit, angry, hat, happy</font>','s','rabbit, angry, hat, happy'],

                ['2','01.PNG','01.mp3','<font color="red">m<font color="black">onkey','w','monkey'],
                ['2','02.PNG','02.mp3','<font color="red">m<font color="black">ole','w','mole'],
                ['2','03.PNG','03.mp3','<font color="red">m<font color="black">irror','w','mirror'],
                ['2','04.PNG','04.mp3','<font color="red">m<font color="black">ake','w','make'],
                ['2','05.PNG','05.mp3','<font color="red">n<font color="black">ut','w','nut'],
                ['2','06.PNG','06.mp3','<font color="red">n<font color="black">ecktie','w','necktie'],
                ['2','07.PNG','07.mp3','<font color="red">n<font color="black">est','w','nest'],
                ['2','08.PNG','08.mp3','<font color="red">n<font color="black">oise','w','noise'],
                ['2','09.PNG','09.mp3','r<font color="red">a<font color="black">bbit','w','rabbit'],
                ['2','10.PNG','10.mp3','<font color="red">a<font color="black">ngry','w','angry'],
                ['2','11.PNG','11.mp3','h<font color="red">a<font color="black">t','w','hat'],
                ['2','12.PNG','12.mp3','h<font color="red">a<font color="black">ppy','w','happy'],

                ['3','004.PNG','004.mp3','<font size="7">breaks, birds, sleep, magician</font>','s','breaks, birds, sleep, magician'],

                ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has the rabbit’s nuts.<br>The rabbit is angry.<br>The cat looks at her hat.<br>I am very angry.</p>','s','The monkey has the rabbit’s nuts.<br>The rabbit is angry.<br>The cat looks at her hat.<br>I am very angry.'],
                ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The mole wears a necktie.<br>The monkey breaks the mole’s mirror.<br>Birds sleep in the nest.<br>The monkey makes noise.</p>','s','The mole wears a necktie.<br>The monkey breaks the mole’s mirror.<br>Birds sleep in the nest.<br>The monkey makes noise.'],
                ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey doesn’t make noise.<br>The mole and the rabbit are angry.<br>The magician’s hat is in the nest.<br>The monkey gives the hat to the magician.</p>','s','The monkey doesn’t make noise.<br>The mole and the rabbit are angry.<br>The magician’s hat is in the nest.<br>The monkey gives the hat to the magician.'],
                ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey gets the magician’s bag.<br>The monkey makes nuts.<br>The monkey makes the mole’s mirror.<br>They are very happy.</p>','s','The monkey gets the magician’s bag.<br>The monkey makes nuts.<br>The monkey makes the mole’s mirror.<br>They are very happy.'],

                ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 그 토끼의 견과들을 가지고 있습니다.<br>그 토끼는 화가 납니다.<br>그 고양이는 그녀의 모자를 봅니다.<br>나는 매우 화가 났어.</p>','s','그 원숭이는 그 토끼의 견과들을 가지고 있습니다.<br>그 토끼는 화가 납니다.<br>그 고양이는 그녀의 모자를 봅니다.<br>나는 매우 화가 났어.'],
                ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 두더지는 넥타이를 맵니다.<br>그 원숭이는 그 두더지의 거울을 깹니다.<br>새들은 그 둥지 안에서 잡니다.<br>그 원숭이는 소음을 냅니다.</p>','s','그 두더지는 넥타이를 맵니다.<br>그 원숭이는 그 두더지의 거울을 깹니다.<br>새들은 그 둥지 안에서 잡니다.<br>그 원숭이는 소음을 냅니다.'],
                ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 소음을 내지 않습니다.<br>그 두더지와 그 토끼는 화가 납니다.<br>그 마술사의 모자는 그 둥지 안에 있습니다.<br>그 원숭이는 그 모자를 그 마술사에게 줍니다.</p>','s','그 원숭이는 소음을 내지 않습니다.<br>그 두더지와 그 토끼는 화가 납니다.<br>그 마술사의 모자는 그 둥지 안에 있습니다.<br>그 원숭이는 그 모자를 그 마술사에게 줍니다.'],
                ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 그 마술사의 가방을 얻습니다.<br>그 원숭이는 견과들을 만듭니다.<br>그 원숭이는 그 두더지의 거울을 만듭니다.<br>그들은 행복합니다.</p>','s','그 원숭이는 그 마술사의 가방을 얻습니다.<br>그 원숭이는 견과들을 만듭니다.<br>그 원숭이는 그 두더지의 거울을 만듭니다.<br>그들은 행복합니다.'],

                ['6','101.PNG','101.mp3','<font size="7">letter, send, sled, bed, help</font>','s','letter, send, sled, bed, help'],
                ['6','102.PNG','102.mp3','<font size="7">sister, big, hill, sick, gift</font>','s','sister, big, hill, sick, gift'],

                ['7','13.PNG','13.mp3','l<font color="red">e<font color="black">tter','w','letter'],
                ['7','14.PNG','14.mp3','s<font color="red">e<font color="black">nd','w','send'],
                ['7','15.PNG','15.mp3','sl<font color="red">e<font color="black">d','w','sled'],
                ['7','16.PNG','16.mp3','b<font color="red">e<font color="black">d','w','bed'],
                ['7','17.PNG','17.mp3','h<font color="red">e<font color="black">lp','w','help'],
                ['7','18.PNG','18.mp3','s<font color="red">i<font color="black">ster','w','sister'],
                ['7','19.PNG','19.mp3','b<font color="red">i<font color="black">g','w','big'],
                ['7','20.PNG','20.mp3','h<font color="red">i<font color="black">ll','w','hill'],
                ['7','21.PNG','21.mp3','s<font color="red">i<font color="black">ck','w','sick'],
                ['7','22.PNG','22.mp3','g<font color="red">i<font color="black">ft','w','gift'],

                ['8','104.PNG','104.mp3','<font size="7">writes, she, rides, with, children, says</font>','s','writes, she, rides, with, children, says'],

                ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister writes a letter.<br>She sends the letter to Santa Claus.<br>My sister has a big sled.<br>She rides the sled down the hill.</p>','s','My sister writes a letter.<br>She sends the letter to Santa Claus.<br>My sister has a big sled.<br>She rides the sled down the hill.'],
                ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is on the bed.<br>She is sick.<br>My sister rides the big sled.<br>Santa Claus looks at the letter.</p>','s','My sister is on the bed.<br>She is sick.<br>My sister rides the big sled.<br>Santa Claus looks at the letter.</p>'],
                ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is with Santa Claus.<br>They ride the big sled down the hill.<br>My sister helps Santa Claus.<br>She gives gifts to the children.</p>','s','My sister is with Santa Claus.<br>They ride the big sled down the hill.<br>My sister helps Santa Claus.<br>She gives gifts to the children.'],
                ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister says goodbye to Santa Claus.<br>She rides the sled down the hill.<br>My sister is on the bed.<br>She looks at the gift.<br>Merry Christmas!</p>','s','My sister says goodbye to Santa Claus.<br>She rides the sled down the hill.<br>My sister is on the bed.<br>She looks at the gift.<br>Merry Christmas!'],

                ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 편지를 씁니다.<br>그녀는 그 편지를 산타클로스에게 보냅니다.<br>나의 여동생은 큰 썰매를 가지고 있습니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.</p>','s','나의 여동생은 편지를 씁니다.<br>그녀는 그 편지를 산타클로스에게 보냅니다.<br>나의 여동생은 큰 썰매를 가지고 있습니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.'],
                ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 그 침대 위에 있습니다.<br>그녀는 아픕니다.<br>나의 여동생은 그 큰 썰매를 탑니다.<br>산타클로스는 그 편지를 봅니다.</p>','s','나의 여동생은 그 침대 위에 있습니다.<br>그녀는 아픕니다.<br>나의 여동생은 그 큰 썰매를 탑니다.<br>산타클로스는 그 편지를 봅니다.'],
                ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 산타 클로스와 함께 있습니다.<br>그들은 그 언덕 아래로 그 큰 썰매를 탑니다.<br>나의 여동생은 산타클로스를 돕습니다.<br>그녀는 그 어린이들에게 선물들을 줍니다.</p>','s','나의 여동생은 산타 클로스와 함께 있습니다.<br>그들은 그 언덕 아래로 그 큰 썰매를 탑니다.<br>나의 여동생은 산타클로스를 돕습니다.<br>그녀는 그 어린이들에게선물들을 줍니다.'],
                ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 산타클로스에게 작별 인사를 합니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.<br>나의 여동생은 그 침대 위에 있습니다.<br>그녀는 그 선물을 봅니다.<br>즐거운 크리스마스!</p>','s','나의 여동생은 산타클로스에게 작별 인사를 합니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.<br>나의 여동생은 그 침대 위에 있습니다.<br>그녀는 그 선물을 봅니다. <br>즐거운 크리스마스!'],

                ['11','201.PNG','201.mp3','<font size="7">ox, ostrich, song, rock, fox</font>','s','ox, ostrich, song, rock, fox'],
                ['11','202.PNG','202.mp3','<font size="7">duck, run, hut, lunch, umbrella</font>','s','duck, run, hut, lunch, umbrella'],

                ['12','23.PNG','23.mp3','<font color="red">o<font color="black">x','w','ox'],
                ['12','24.PNG','24.mp3','<font color="red">o<font color="black">strich','w','ostrich'],
                ['12','25.PNG','25.mp3','s<font color="red">o<font color="black">ng','w','song'],
                ['12','26.PNG','26.mp3','r<font color="red">o<font color="black">ck','w','rock'],
                ['12','27.PNG','27.mp3','f<font color="red">o<font color="black">x','w','fox'],
                ['12','28.PNG','28.mp3','d<font color="red">u<font color="black">ck','w','duck'],
                ['12','29.PNG','29.mp3','r<font color="red">u<font color="black">n','w','run'],
                ['12','30.PNG','30.mp3','h<font color="red">u<font color="black">t','w','hut'],
                ['12','31.PNG','31.mp3','l<font color="red">u<font color="black">nch','w','lunch'],
                ['12','32.PNG','32.mp3','<font color="red">u<font color="black">mbrella','w','umbrella'],

                ['13','204.PNG','204.mp3','<font size="7">man, runs, after, meets, eats, friends</font>','s','man, runs, after, meets, eats, friends'],

                ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An ox runs up the hill.<br>A man runs after the ox.<br>The ox meets a duck.<br>The ox and the duck make a big hut.</p>','s','An ox runs up the hill.<br>A man runs after the ox.<br>The ox meets a duck.<br>The ox and the duck make a big hut.'],
                ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An ostrich comes to the hut.<br>The ox eats lunch with friends.<br>The duck has a big umbrella.<br>The ostrich sings a song on the rock.</p>','s','An ostrich comes to the hut.<br>The ox eats lunch with friends.<br>The duck has a big umbrella.<br>The ostrich sings a song on the rock.'],
                ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The duck and the o see the hut.<br>They are under the big umbrella.<br>A fox comes to the hut.<br>The duck sees the fox on the rock.</p>','s','The duck and the o see the hut.<br>They are under the big umbrella.<br>A fox comes to the hut.<br>The duck sees the fox on the rock.'],
                ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox runs up the hill.<br>The ox runs after the fox.<br>The duck is under the umbrella.<br>The ostrich sings a song on the rock.</p>','s','The fox runs up the hill.<br>The ox runs after the fox.<br>The duck is under the umbrella.<br>The ostrich sings a song on the rock.'],

                ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">황소는 그 언덕 위로 달립니다.<br>남자는 그 황소를 쫓아갑니다.<br>그 황소는 오리를 만납니다.<br>그 황소와 그 오리는 큰 오두막을 만듭니다.</p>','s','황소는 그 언덕 위로 달립니다.<br>남자는 그 황소를 쫓아갑니다.<br>그 황소는 오리를 만납니다.<br>그 황소와 그 오리는 큰 오두막을 만듭니다.'],
                ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">타조가 그 오두막으로 옵니다.<br>그 황소는 친구들과 함께 점심을 먹습니다.<br>그 오리는 큰 우산을 가지고 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.</p>','s','타조가 그 오두막으로 옵니다.<br>그 황소는 친구들과 함께 점심을 먹습니다.<br>그 오리는 큰 우산을 가지고 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.'],
                ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 오리와 그 타조는 그 오두막을 봅니다.<br>그들은 그 큰 우산 아래에 있습니다.<br>여우가 그 오두막을 옵니다.<br>그 오리는 그 바위 위에서 그 여우를 봅니다.</p>','s','그 오리와 그 타조는 그 오두막을 봅니다.<br>그들은 그 큰 우산 아래에 있습니다.<br>여우가 그 오두막을 옵니다.<br>그 오리는 그 바위 위에서 그 여우를 봅니다.'],
                ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우는 그 언덕 위로 달립니다.<br>그 황소는 그 여우를 쫓아갑니다.<br>그 오리는 그 우산 아래에 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.</p>','s','그 여우는 그 언덕 위로 달립니다.<br>그 황소는 그 여우를 쫓아갑니다.<br>그 오리는 그 우산 아래에 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.']

                ];

      // Theme English 1 [unit, image, sound, word, sentence:s or word:w, only word]
      let te1 = [
                  ['1','011.PNG','011.mp3','doll','s','doll'],
                  ['1','012.PNG','012.mp3','car','s','car'],
                  ['1','013.PNG','013.mp3','ball','s','ball'],
                  ['1','014.PNG','014.mp3','balloon','s','balloon'],
                  ['1','015.PNG','015.mp3','robot','s','robot'],
                  ['1','016.PNG','016.mp3','kite','s','kite'],

                  ['2','021.PNG','021.mp3','doll','w','doll'],
                  ['2','022.PNG','022.mp3','car','w','car'],
                  ['2','023.PNG','023.mp3','ball','w','ball'],
                  ['2','024.PNG','024.mp3','balloon','w','balloon'],
                  ['2','025.PNG','025.mp3','robot','w','robot'],
                  ['2','026.PNG','026.mp3','kite','w','kite'],

                  ['3','031.PNG','031.mp3','Chant','s','Chat'],

                  ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a balloon.<br><br><br><br></p>','s','What is this?<br>It is a balloon.'],
                  ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a car.<br><br><br><br></p>','s','What is this?<br>It is a car.'],
                  ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a doll.<br><br><br><br></p>','s','What is this?<br>It is a doll.'],
                  ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a robot.<br><br><br><br></p>','s','What is this?<br>It is a robot.'],
                  ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a kite.<br><br><br><br></p>','s','What is this?<br>It is a kite.'],
                  ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a ball.<br><br><br><br></p>','s','What is this?<br>It is a ball.'],

                  ['5','051.PNG','051.mp3','bike','w','bike'],
                  ['5','052.PNG','052.mp3','airplane','w','airplane'],
                  ['5','053.PNG','053.mp3','boat','w','boat'],
                  ['5','054.PNG','054.mp3','truck','w','truck'],
                  ['5','055.PNG','055.mp3','bus','w','bus'],
                  ['5','056.PNG','056.mp3','train','w','train'],

                  ['6','061.PNG','061.mp3','Chant','s','Chant'],

                  ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a bike.<br><br><br><br></p>','s','What is this?<br>It is a bike.'],
                  ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a truck.<br><br><br><br></p>','s','What is this?<br>It is a truck.'],
                  ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a airplane.<br><br><br><br></p>','s','What is this?<br>It is a airplane.'],
                  ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a train.<br><br><br><br></p>','s','What is this?<br>It is a train.'],
                  ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a boat.<br><br><br><br></p>','s','What is this?<br>It is a train.'],
                  ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a but.<br><br><br><br></p>','s','What is this?<br>It is a but.'],

                  ['8','081.PNG','081.mp3','red','s','red'],
                  ['8','082.PNG','082.mp3','yellow','s','yellow'],
                  ['8','083.PNG','083.mp3','blue','s','blue'],
                  ['8','084.PNG','084.mp3','green','s','green'],
                  ['8','085.PNG','085.mp3','black','s','black'],
                  ['8','086.PNG','086.mp3','white','s','white'],

                  ['9','091.PNG','091.mp3','red','w','red'],
                  ['9','092.PNG','092.mp3','yellow','w','yellow'],
                  ['9','093.PNG','093.mp3','blue','w','yellow'],
                  ['9','094.PNG','094.mp3','green','w','green'],
                  ['9','095.PNG','095.mp3','black','w','black'],
                  ['9','096.PNG','096.mp3','white','w','white'],

                  ['10','101.PNG','101.mp3','Chant','s','Chant'],

                  ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is green.<br><br><br><br></p>','s','What color is this?<br>It is green.'],
                  ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is red.<br><br><br><br></p>','s','What color is this?<br>It is red.'],
                  ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is black.<br><br><br><br></p>','s','What color is this?<br>It is black.'],
                  ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is white.<br><br><br><br></p>','s','What color is this?<br>It is white.'],
                  ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is yellow.<br><br><br><br></p>','s','What color is this?<br>It is yellow.'],
                  ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is blue.<br><br><br><br></p>','s','What color is this?<br>It is blue.'],

                  ['12','121.PNG','121.mp3','big','w','big'],
                  ['12','122.PNG','122.mp3','small','w','small'],
                  ['12','123.PNG','123.mp3','long','w','long'],
                  ['12','124.PNG','124.mp3','short','w','short'],
                  ['12','125.PNG','125.mp3','new','w','new'],
                  ['12','126.PNG','126.mp3','old','w','old'],

                  ['13','131.PNG','131.mp3','Chant','s','Chant'],

                  ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>It is a a small ball.<br><br><br><br></p>','s','What is that?<br>It is a a small ball.'],
                  ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a big ball.<br><br><br><br></p>','s','What is this?<br>It is a big ball.'],
                  ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a long train.<br><br><br><br></p>','s','What is this?<br>It is a long train.'],
                  ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a short train.<br><br><br><br></p>','s','What is this?<br>It is a short train.'],
                  ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a new robot.<br><br><br><br></p>','s','What is this?<br>It is a new robot.'],
                  ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old robot.<br><br><br><br></p>','s','What is this?<br>It is a old robot.'],

                  ['15','151.PNG','151.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>It is a a new yellow car.<br><br><br><br></p>','s','What is that?<br>It is a a new yellow car.'],
                  ['15','152.PNG','152.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a new green bike.<br><br><br><br></p>','s','What is this?<br>It is a new green bike.'],
                  ['15','153.PNG','153.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old red car.<br><br><br><br></p>','s','What is this?<br>It is a old red car.'],
                  ['15','154.PNG','154.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old green kite.<br><br><br><br></p>','s','What is this?<br>It is a old green kite.'],
                  ['15','155.PNG','155.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a big red ball.<br><br><br><br></p>','s','What is this?<br>It is a big red ball.'],
                  ['15','156.PNG','156.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a long blue train.<br><br><br><br></p>','s','What is this?<br>It is a long blue train.'],

                ];

      // Theme English 2 [unit, image, sound, word, sentence:s or word:w, only word]
      let te2 = [['1','011.PNG','011.mp3','jacket','s','jacket'],
                ['1','012.PNG','012.mp3','sweater','s','sweater'],
                ['1','013.PNG','013.mp3','shirt','s','shirt'],
                ['1','014.PNG','014.mp3','skirt','s','skirt'],
                ['1','015.PNG','015.mp3','coat','s','coat'],
                ['1','016.PNG','016.mp3','cap','s','cap'],

                ['2','021.PNG','021.mp3','jacket','w','jacket'],
                ['2','022.PNG','022.mp3','sweater','w','sweater'],
                ['2','023.PNG','023.mp3','shirt','w','shirt'],
                ['2','024.PNG','024.mp3','skirt','w','skirt'],
                ['2','025.PNG','025.mp3','coat','w','coat'],
                ['2','026.PNG','026.mp3','cap','w','cap'],

                ['3','031.PNG','031.mp3','Chant','s','Chant'],

                ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a cap.<br><br><br><br></p>','s','What is it?<br>It is a cap.'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a shirt.<br><br><br><br></p>','s','What is it?<br>It is a shirt.'],
                ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a jacket.<br><br><br><br></p>','s','What is it?<br>It is a jacket.'],
                ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a skirt.<br><br><br><br></p>','s','What is it?<br>It is a skirt.'],
                ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a sweater.<br><br><br><br></p>','s','What is it?<br>It is a sweater.'],
                ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a coat.<br><br><br><br></p>','s','What is it?<br>It is a coat.'],
                ['4','047.PNG','047.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a new coat.<br><br><br><br></p>','s','What is it?<br>It is a new coat.'],
                ['4','048.PNG','048.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a blue cap.<br><br><br><br></p>','s','What is it?<br>It is a blue cap.'],
                ['4','049.PNG','049.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a yellow shirt.<br><br><br><br></p>','s','What is it?<br>It is a yellow shirt.'],
                ['4','0410.PNG','0410.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a green sweater.<br><br><br><br></p>','s','What is it?<br>It is a green sweater.'],
                ['4','0411.PNG','0411.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a big jacket.<br><br><br><br></p>','s','What is it?<br>It is a big jacket.'],
                ['4','0412.PNG','0412.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a long skirt.<br><br><br><br></p>','s','What is it?<br>It is a long skirt.'],

                ['5','051.PNG','051.mp3','pants','w','pants'],
                ['5','052.PNG','052.mp3','socks','w','socks'],
                ['5','053.PNG','053.mp3','shoes','w','shoes'],
                ['5','054.PNG','054.mp3','gloves','w','gloves'],
                ['5','055.PNG','055.mp3','shorts','w','shorts'],

                ['6','061.PNG','061.mp3','Chant','s','Chant'],

                ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are shorts.<br><br><br><br></p>','s','What are they?<br>They are shorts.'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are socks.<br><br><br><br></p>','s','What are they?<br>They are socks.'],
                ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are gloves.<br><br><br><br></p>','s','What are they?<br>They are gloves.'],
                ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are pants.<br><br><br><br></p>','s','What are they?<br>They are pants.'],
                ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are shoes.<br><br><br><br></p>','s','What are they?<br>They are shoes.'],

                ['8','081.PNG','081.mp3','one','s','one'],
                ['8','082.PNG','082.mp3','two','s','two'],
                ['8','083.PNG','083.mp3','three','s','three'],
                ['8','084.PNG','084.mp3','four','s','four'],
                ['8','085.PNG','085.mp3','five','s','five'],
                ['8','086.PNG','086.mp3','six','s','six'],

                ['9','091.PNG','091.mp3','one','w','one'],
                ['9','092.PNG','092.mp3','two','w','two'],
                ['9','093.PNG','093.mp3','three','w','three'],
                ['9','094.PNG','094.mp3','four','w','four'],
                ['9','095.PNG','095.mp3','five','w','five'],
                ['9','096.PNG','096.mp3','six','w','six'],

                ['10','101.PNG','101.mp3','Chant','s','Chant'],

                ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many balls are there?<br>six<br><br><br><br></p>','s','How many balls are there?<br>six'],
                ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many shoes are there?<br>four<br><br><br><br></p>','s','How many shoes are there?<br>four'],
                ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many airplanes are there?<br>one<br><br><br><br></p>','s','How many airplanes are there?<br>one'],
                ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many dolls are there?<br>three<br><br><br><br></p>','s','How many dolls are there?<br>three'],
                ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many caps are there?<br>five<br><br><br><br></p>','s','How many caps are there?<br>five'],
                ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many cars are there?<br>two<br><br><br><br></p>','s','How many cars are there?<br>two'],

                ['12','121.PNG','121.mp3','seven','w','seven'],
                ['12','122.PNG','122.mp3','eight','w','eight'],
                ['12','123.PNG','123.mp3','nine','w','nine'],
                ['12','124.PNG','124.mp3','ten','w','ten'],
                ['12','125.PNG','125.mp3','eleven','w','eleven'],
                ['12','126.PNG','126.mp3','twelve','w','twelve'],

                ['13','131.PNG','131.mp3','Chant','s','Chant'],

                ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many balls are there?<br>six<br><br><br><br></p>','s','How many balls are there?<br>six'],
                ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many shoes are there?<br>four<br><br><br><br></p>','s','How many shoes are there?<br>four'],
                ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many airplanes are there?<br>one<br><br><br><br></p>','s','How many airplanes are there?<br>one'],
                ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many dolls are there?<br>three<br><br><br><br></p>','s','How many dolls are there?<br>three'],
                ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many caps are there?<br>five<br><br><br><br></p>','s','How many caps are there?<br>five'],
                ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many cars are there?<br>two<br><br><br><br></p>','s','How many cars are there?<br>two'],

                ['15','151.PNG','151.mp3','Review','s','Review'],

                ];

      // Theme English 3 [unit, image, sound, word, sentence:s or word:w, only word]
      let te3 = [['1','011.PNG','011.mp3','father','s','father'],
                ['1','012.PNG','012.mp3','mother','s','mother'],
                ['1','013.PNG','013.mp3','grandfather','s','grandfather'],
                ['1','014.PNG','014.mp3','grandmother','s','grandmother'],
                ['1','015.PNG','015.mp3','sister','s','sister'],
                ['1','016.PNG','016.mp3','brother','s','brother'],

                ['2','021.PNG','021.mp3','father','w','father'],
                ['2','022.PNG','022.mp3','mother','w','mother'],
                ['2','023.PNG','023.mp3','grandfather','w','grandfather'],
                ['2','024.PNG','024.mp3','grandmother','w','grandmother'],
                ['2','025.PNG','025.mp3','sister','w','sister'],
                ['2','026.PNG','026.mp3','brother','w','brother'],

                ['3','021.PNG','021.mp3','Chant','s','Chant'],

                ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my mother.<br><br><br><br></p>','s','Who is this?<br>This is my mother.'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my grandmother.<br><br><br><br></p>','s','Who is this?<br>This is my grandmother'],
                ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my grandfather.<br><br><br><br></p>','s','Who is this?<br>This is my grandfather.'],
                ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my father.<br><br><br><br></p>','s','Who is this?<br>This is my father.'],
                ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my brother.br><br><br><br></p>','s','Who is this?<br>This is my brother.'],
                ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my sister.<br><br><br><br></p>','s','Who is this?<br>This is my sister.'],

                ['5','051.PNG','051.mp3','tall','w','tall'],
                ['5','052.PNG','052.mp3','short','w','short'],
                ['5','053.PNG','053.mp3','fat','w','fat'],
                ['5','054.PNG','054.mp3','thin','w','thin'],
                ['5','055.PNG','055.mp3','old','w','old'],
                ['5','056.PNG','056.mp3','young','w','young'],

                ['6','061.PNG','061.mp3','Chant','s','Chant'],

                ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandfather is old.<br><br><br><br></p>','s','My grandfather is old.'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandmother is fat.<br><br><br><br></p>','s','My grandmother is fat.'],
                ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My father is tall.<br><br><br><br></p>','s','My father is tall.'],
                ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My mother is thin.<br><br><br><br></p>','s','My mother is thin.'],
                ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My brother is young.<br><br><br><br></p>','s','My brother is young.'],
                ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is short.<br><br><br><br></p>','s','My sister is short.'],
                ['7','077.PNG','077.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My brother is short.<br><br><br><br></p>','s','My brother is short.'],
                ['7','078.PNG','078.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My mother is tall.<br><br><br><br></p>','s','My mother is tall.'],
                ['7','079.PNG','079.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My father is thin.<br><br><br><br></p>','s','My father is thin.'],
                ['7','0710.PNG','0710.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandfather is fat.<br><br><br><br></p>','s','My grandfather is fat.'],
                ['7','0711.PNG','0711.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandmother is old.<br><br><br><br></p>','s','My grandmother is old.'],
                ['7','0712.PNG','0712.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is young.<br><br><br><br></p>','s','My sister is young.'],

                ['8','081.PNG','081.mp3','eye','s','eye'],
                ['8','082.PNG','082.mp3','nose','s','nose'],
                ['8','083.PNG','083.mp3','mouth','s','mouth'],
                ['8','084.PNG','084.mp3','ear','s','ear'],
                ['8','085.PNG','085.mp3','hair','s','hair'],
                ['8','086.PNG','086.mp3','face','s','face'],

                ['9','091.PNG','091.mp3','nose','w','nose'],
                ['9','092.PNG','092.mp3','hair','w','hair'],
                ['9','093.PNG','093.mp3','face','w','face'],
                ['9','094.PNG','094.mp3','ear','w','ear'],
                ['9','095.PNG','095.mp3','eye','w','eye'],
                ['9','096.PNG','096.mp3','mouth','w','mouth'],

                ['10','101.PNG','101.mp3','Chant','s','Chant'],

                ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">blue, eye<br>My eyes are blue.<br><br><br><br></p>','s','blue, eye<br>My eyes are blue.'],
                ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">small, mouth<br>My mouth is small.<br><br><br><br></p>','s','small, mouth<br>My mouth is small.'],
                ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, nose<br>My nose is long.<br><br><br><br></p>','s','long, nose<br>My nose is long.'],
                ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">white, face<br>My face is white.<br><br><br><br></p>','s','white, face<br>My face is white.'],
                ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">black, hair<br>My hair is black.<br><br><br><br></p>','s','black, hair<br>My hair is black.'],
                ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, ear<br>My ears are big.<br><br><br><br></p>','s','big, ear<br>My ears are big.'],

                ['12','121.PNG','121.mp3','neck','w','neck'],
                ['12','122.PNG','122.mp3','arm','w','arm'],
                ['12','123.PNG','123.mp3','leg','w','leg'],
                ['12','124.PNG','124.mp3','foot','w','foot'],
                ['12','125.PNG','125.mp3','hand','w','hand'],
                ['12','126.PNG','126.mp3','head','w','head'],

                ['13','131.PNG','131.mp3','Chant','s','Chant'],

                ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, foot<br>My feet are big.<br><br><br><br></p>','s','blue, eye<br>My eyes are blue.'],
                ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, leg<br>My legs are long.<br><br><br><br></p>','s','long, leg<br>My legs are long.'],
                ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, neck<br>My neck is big.<br><br><br><br></p>','s','long, neck<br>My neck is big.'],
                ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, arm<br>My arms are big.<br><br><br><br></p>','s','long, arm<br>My arms are big.'],
                ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, head<br>My head is big.<br><br><br><br></p>','s','big, head<br>My head is big.'],
                ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, hand<br>My hands are big.<br><br><br><br></p>','s','big, hand<br>My hands are big.'],

                ['15','151.PNG','151.mp3','Review','s','Review']
                ];

      // Theme English 4 [unit, image, sound, word, sentence:s or word:w, only word]
      let te4 = [
                ['1','011.PNG','011.mp3','bedroom','s','bedroom'],
                ['1','012.PNG','012.mp3','bathroom','s','bathroom'],
                ['1','013.PNG','013.mp3','kitchen','s','kitchen'],
                ['1','014.PNG','014.mp3','living room','s','livingroom'],
                ['1','015.PNG','015.mp3','dining room','s','dining room'],

                ['2','021.PNG','021.mp3','bedroom','w','bedroom'],
                ['2','022.PNG','022.mp3','bathroom','w','bathroom'],
                ['2','023.PNG','023.mp3','dining room','w','dining room'],
                ['2','024.PNG','024.mp3','living room','w','livingroom'],
                ['2','025.PNG','025.mp3','kitchen','w','kitchen'],

                ['3','031.PNG','031.mp3','Chant','s','Chant'],

                ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your grandfather?<br>My grandfather is in the bedroom.<br><br><br><br></p>','s','Where is your grandfather?<br>My grandfather is in the bedroom.'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your father?<br>My father is in the kitchen.<br><br><br><br></p>','s','Where is your father?<br>My father is in the kitchen.'],
                ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your mother?<br>My mother is in the bathroom.<br><br><br><br></p>','s','Where is your mother?<br>My mother is in the bathroom.'],
                ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your sister?<br>My sister is in the livingroom.<br><br><br><br></p>','s','Where is your sister?<br>My sister is in the livingroom.'],
                ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your brother?<br>My brother is in the diningroom.<br><br><br><br></p>','s','Where is your brother?<br>My brother is in the diningroom.'],

                ['5','051.PNG','051.mp3','sofa','w','sofa'],
                ['5','052.PNG','052.mp3','telephone','w','telephone'],
                ['5','053.PNG','053.mp3','clock','w','clock'],
                ['5','054.PNG','054.mp3','table','w','table'],
                ['5','055.PNG','055.mp3','bed','w','bed'],

                ['6','061.PNG','061.mp3','Chant','s','Chant'],

                ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the telephone.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the telephone.'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the table.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the table.'],
                ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the sofa.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the sofa.'],
                ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the clock.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the clock.'],
                ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the bed.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the bed.'],

                ['8','081.PNG','081.mp3','spoon','s','spoon'],
                ['8','082.PNG','082.mp3','fork','s','fork'],
                ['8','083.PNG','083.mp3','cup','s','cup'],
                ['8','084.PNG','084.mp3','plate','s','plate'],
                ['8','085.PNG','085.mp3','bowl','s','bowl'],

                ['9','091.PNG','091.mp3','bowl','w','bowl'],
                ['9','092.PNG','092.mp3','fork','w','fork'],
                ['9','093.PNG','093.mp3','cup','w','cup'],
                ['9','094.PNG','094.mp3','spoon','w','spoon'],
                ['9','095.PNG','095.mp3','plate','w','plate'],

                ['10','101.PNG','101.mp3','Chant','s','Chant'],

                ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your grandfather?<br>My grandfather is in the bedroom.<br><br><br><br></p>','s','Where is your grandfather?<br>My grandfather is in the bedroom.'],
                ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your father?<br>My father is in the kitchen.<br><br><br><br></p>','s','Where is your father?<br>My father is in the kitchen.'],
                ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your mother?<br>My mother is in the bathroom.<br><br><br><br></p>','s','Where is your mother?<br>My mother is in the bathroom.'],
                ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your sister?<br>My sister is in the livingroom.<br><br><br><br></p>','s','Where is your sister?<br>My sister is in the livingroom.'],
                ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your brother?<br>My brother is in the diningroom.<br><br><br><br></p>','s','Where is your brother?<br>My brother is in the diningroom'],

                ['12','121.PNG','121.mp3','bathtub','w','bathtub'],
                ['12','122.PNG','122.mp3','towel','w','towel'],
                ['12','123.PNG','123.mp3','toilet','w','toilet'],
                ['12','124.PNG','124.mp3','mirror','w','mirror'],
                ['12','125.PNG','125.mp3','soap','w','soap'],
                ['12','126.PNG','126.mp3','shower','w','shower'],

                ['13','131.PNG','131.mp3','Chant','s','Chant'],

                ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the shower?<br>The shower is in the bathroom.<br><br><br><br></p>','s','Where is the shower?<br>The shower is in the bathroom.'],
                ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the towel?<br>The towel is in the bathroom.<br><br><br><br></p>','s','Where is the towel?<br>The towel is in the bathroom.'],
                ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the mirror?<br>The mirror is in the bathroom.<br><br><br><br></p>','s','Where is the mirror?<br>The mirror is in the bathroom.'],
                ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the soap?<br>The soap is in the bathroom.<br><br><br><br></p>','s','Where is the soap?<br>The soap is in the bathroom.'],
                ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the bathtub?<br>The bathtub is in the bathroom.<br><br><br><br></p>','s','Where is the bathtub?<br>The bathtub is in the bathroom.'],
                ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the toilet?<br>The toilet is in the bathroom.<br><br><br><br></p>','s','Where is the toilet?<br>The toilet is in the bathroom.'],

                ['15','151.PNG','151.mp3','Review','s','Review']
                ];

      // Theme English 5 [unit, image, sound, word, sentence:s or word:w, only word]
      let te5 = [
                ['1','011.PNG','011.mp3','carrot','s','carrot'],
                ['1','012.PNG','012.mp3','potato','s','potato'],
                ['1','013.PNG','013.mp3','cucumber','s','cucumber'],
                ['1','014.PNG','014.mp3','onion','s','onion'],
                ['1','015.PNG','015.mp3','cabbage','s','cabbage'],
                ['1','016.PNG','016.mp3','tomato','s','tomato'],

                ['2','021.PNG','021.mp3','carrot','s','carrot'],
                ['2','022.PNG','022.mp3','potato','s','potato'],
                ['2','023.PNG','023.mp3','cucumber','s','cucumber'],
                ['2','024.PNG','024.mp3','onion','s','onion'],
                ['2','025.PNG','025.mp3','cabbage','s','cabbage'],
                ['2','026.PNG','026.mp3','tomato','s','tomato'],

                ['3','031.PNG','031.mp3','Chant','s','Chant'],

                ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is an onion.<br><br><br><br></p>','s','What is this?<br>This is an onion.'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a cucumber.<br><br><br><br></p>','s','What is this?<br>This is a cucumber.'],
                ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a tomato.<br><br><br><br></p>','s','What is this?<br>This is a tomato.'],
                ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a cabbage.<br><br><br><br></p>','s','What is this?<br>This is a cabbage.'],
                ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a strawberrry.<br><br><br><br></p>','s','What is this?<br>This is a strawberrry.'],
                ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is carrot.<br><br><br><br></p>','s','What is this?<br>This is carrot.'],

                ['5','051.PNG','051.mp3','orange','w','orange'],
                ['5','052.PNG','052.mp3','pear','w','pear'],
                ['5','053.PNG','053.mp3','banana','w','banana'],
                ['5','054.PNG','054.mp3','strawberry','w','strawberry'],
                ['5','055.PNG','055.mp3','lemon','w','lemon'],
                ['5','056.PNG','056.mp3','apple','w','apple'],

                ['6','061.PNG','061.mp3','Chant','s','Chant'],

                ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is an orange.<br><br><br><br></p>','s','What is that?<br>That is an orange.'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a strawberry.<br><br><br><br></p>','s','What is that?<br>That is a strawberry.'],
                ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a pear.<br><br><br><br></p>','s','What is that?<br>That is a pear.'],
                ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a banana.<br><br><br><br></p>','s','What is that?<br>That is a banana.'],
                ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is an apple.<br><br><br><br></p>','s','What is that?<br>That is an apple.'],
                ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a lemon.<br><br><br><br></p>','s','What is that?<br>That is a lemon.'],

                ['8','081.PNG','081.mp3','chocolate','s','chocolate'],
                ['8','082.PNG','082.mp3','cake','s','cake'],
                ['8','083.PNG','083.mp3','cheese','s','cheese'],
                ['8','084.PNG','084.mp3','bread','s','bread'],
                ['8','085.PNG','085.mp3','candy','s','candy'],
                ['8','086.PNG','086.mp3','pizza','s','pizza'],

                ['9','091.PNG','091.mp3','candy','w','candy'],
                ['9','092.PNG','092.mp3','chocolate','w','chocolate'],
                ['9','093.PNG','093.mp3','cheese','w','cheese'],
                ['9','094.PNG','094.mp3','bread','w','bread'],
                ['9','095.PNG','095.mp3','cake','w','cake'],
                ['9','096.PNG','096.mp3','pizza','w','pizza'],

                ['10','101.PNG','101.mp3','Chant','s','Chant'],

                ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like chocolate.<br><br><br><br></p>','s','What do you like?<br>I like chocolate.'],
                ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like cake.<br><br><br><br></p>','s','What do you like?<br>I like cake.'],
                ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like cheese.<br><br><br><br></p>','s','What do you like?<br>I like cheese.'],
                ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like candy.<br><br><br><br></p>','s','What do you like?<br>I like candy.'],
                ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like pizza.<br><br><br><br></p>','s','What do you like?<br>I like pizza.'],
                ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like bread.<br><br><br><br></p>','s','What do you like?<br>I like bread.'],

                ['12','121.PNG','121.mp3','juice','w','juice'],
                ['12','122.PNG','122.mp3','water','w','water'],
                ['12','123.PNG','123.mp3','milk','w','milk'],
                ['12','124.PNG','124.mp3','Coke','w','Coke'],
                ['12','125.PNG','125.mp3','icecream','w','icecream'],

                ['13','131.PNG','131.mp3','Chant','s','Chant'],

                ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like juice?<br>I don\'t like juice.<br><br><br><br></p>','s','Do you like juice?<br>I don\'t like juice.'],
                ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like milk?<br>I like milk.<br><br><br><br></p>','s','Do you like milk?<br>I like milk.'],
                ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like water?<br>I don\'t like water.<br><br><br><br></p>','s','Do you like water?<br>I don\'t like water.'],
                ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like Coke?<br>I like Coke.<br><br><br><br></p>','s','Do you like Coke?<br>I like Coke.'],
                ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like icecream?<br>I like icecream.<br><br><br><br></p>','s','Do you like icecream?<br>I like icecream.'],

                ['15','151.PNG','151.mp3','Review','s','Review']
                ];

      // Theme English 6 [unit, image, sound, word, sentence:s or word:w, only word]
      let te6 = [
                ['1','011.PNG','011.mp3','dog','s','dog'],
                ['1','012.PNG','012.mp3','cat','s','cat'],
                ['1','013.PNG','013.mp3','bird','s','bird'],
                ['1','014.PNG','014.mp3','fish','s','fish'],
                ['1','015.PNG','015.mp3','rabbit','s','rabbit'],
                ['1','016.PNG','016.mp3','hamster','s','hamster'],

                ['2','021.PNG','021.mp3','fish','w','fish'],
                ['2','022.PNG','022.mp3','hamster','w','hamster'],
                ['2','023.PNG','023.mp3','rabbit','w','rabbit'],
                ['2','024.PNG','024.mp3','dog','w','dog'],
                ['2','025.PNG','025.mp3','cat','w','cat'],
                ['2','026.PNG','026.mp3','fish','w','fish'],

                ['3','031.PNG','031.mp3','Chant','s','Chant'],

                ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a cat.<br><br><br><br></p>','s','What do you have?<br>I have a cat.'],
                ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a dog.<br><br><br><br></p>','s','What do you have?<br>I have a dog.'],
                ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a hamster.<br><br><br><br></p>','s','What do you have?<br>I have a hamster.'],
                ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a fish.<br><br><br><br></p>','s','What do you have?<br>I have a fish.'],
                ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a rabbit.<br><br><br><br></p>','s','What do you have?<br>I have a rabbit.'],
                ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a bird.<br><br><br><br></p>','s','What do you have?<br>I have a bird.'],

                ['5','051.PNG','051.mp3','frog','w','frog'],
                ['5','052.PNG','052.mp3','snake','w','snake'],
                ['5','053.PNG','053.mp3','snail','w','snail'],
                ['5','054.PNG','054.mp3','mouse','w','mouse'],
                ['5','055.PNG','055.mp3','squirrel','w','squirrel'],
                ['5','056.PNG','056.mp3','turtle','w','turtle'],

                ['6','061.PNG','061.mp3','Chant','s','Chant'],

                ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a mouse.<br><br><br><br></p>','s','What do you have?<br>I have a mouse.'],
                ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a snail.<br><br><br><br></p>','s','What do you have?<br>I have a snail.'],
                ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a turtle.<br><br><br><br></p>','s','What do you have?<br>I have a turtle.'],
                ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a squirrel.<br><br><br><br></p>','s','What do you have?<br>I have a squirrel.'],
                ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a snake.<br><br><br><br></p>','s','What do you have?<br>I have a snake.'],
                ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a frog.<br><br><br><br></p>','s','What do you have?<br>I have a frog.'],

                ['8','081.PNG','081.mp3','lion','s','lion'],
                ['8','082.PNG','082.mp3','elephant','s','elephant'],
                ['8','083.PNG','083.mp3','monkey','s','monkey'],
                ['8','084.PNG','084.mp3','tiger','s','tiger'],
                ['8','085.PNG','085.mp3','bear','s','bear'],
                ['8','086.PNG','086.mp3','giraffe','s','giraffe'],

                ['9','091.PNG','091.mp3','lion','w','lion'],
                ['9','092.PNG','092.mp3','bear','w','bear'],
                ['9','093.PNG','093.mp3','tiger','w','tiger'],
                ['9','094.PNG','094.mp3','monkey','w','monkey'],
                ['9','095.PNG','095.mp3','giraffe','w','giraffe'],
                ['9','096.PNG','096.mp3','elephant','w','elephant'],

                ['10','101.PNG','101.mp3','Chant','s','Chant'],

                ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a bear.<br><br><br><br></p>','s','There is a bear'],
                ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is an elephant.<br><br><br><br></p>','s','There is an elephant.'],
                ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a tiger.<br><br><br><br></p>','s','There is a tiger.'],
                ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a lion.<br><br><br><br></p>','s','There is a lion.'],
                ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a giraffe.<br><br><br><br></p>','s','There is a giraffe.'],
                ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a monkey.<br><br><br><br></p>','s','There is a monkey'],

                ['12','121.PNG','121.mp3','horse','w','horse'],
                ['12','122.PNG','122.mp3','duck','w','duck'],
                ['12','123.PNG','123.mp3','pig','w','pig'],
                ['12','124.PNG','124.mp3','cow','w','cow'],
                ['12','125.PNG','125.mp3','goat','w','goat'],
                ['12','126.PNG','126.mp3','lamb','w','lamb'],

                ['13','131.PNG','131.mp3','Chant','s','Chant'],

                ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a goat.<br><br><br><br></p>','s','There is a goat.'],
                ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a lamb.<br><br><br><br></p>','s','There is a lamb.'],
                ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a horse.<br><br><br><br></p>','s','There is a horse.'],
                ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a cow.<br><br><br><br></p>','s','There is a cow.'],
                ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a pig.<br><br><br><br></p>','s','There is a pig.'],
                ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a duck.<br><br><br><br></p>','s','There is a duck.'],

                ['15','151.PNG','151.mp3','Review','s','Review']
                ];

      // 선택된 아이템을 담을 변수
      let selecteditem=[['0','0','0','0','0']];

      //선택된 아이템의 갯수
      let listlength;

      // 루틴 돌릴때 카운트 수 listlength를 넘어가면 다시 1로 됨.초기값은 1
      let count=1;

      let repeatcount = 0;

      //학습시간을 카운트 하기 위해 처음 접속인지만 확인하는 boolean
      let totalfirst = true;

      // 다음 버튼 누르면 Audio stop 하도록
      let myaudio = new Audio();
      // 발음듣기 함수
      function PlayWord(){

        let bookselected = document.getElementById('book').value;

        if(choiceismade){
        count--;
        myaudio.src = bookselected + '/' + selecteditem[count][2];
        count++;

        //오디오 플레이시 넥스트 버튼 안 먹히게
        //let whileplay = document.getElementById('nextbutton');
        //whileplay.disabled = true;
        myaudio.play();
        //whileplay.disabled = false;
        }
        else{
          alert("교재와 유닛을 먼저 선택하셔야 합니다.");
        }
      }

      function stopAudio(){
        myaudio.pause();
        myaudio.currentTime=0;
      }

      //선택된 책과 유닛들의 문자열
      let whatchosen;

      //선택의 유무
      let choiceismade;

      // 선택된 책과 유닛 알아내는 함수
      function Getunits(){
        let units = document.getElementsByName('unit');
        let unitchoice;
        let bookselected = document.getElementById('book').value;

        choiceismade = false;
        whatchosen = '선택교재 : '+bookselected+' => 선택된 유닛 : ';

        count=1;

        //교재가 다시 시작되므로 반복횟수는 0으로 재설정
        repeatcount = 0;
        let repeatshow  = document.getElementById("repeat");
        let repeatnumber  = document.getElementById("repeatnumber");
        let tellrepeat="";

        tellrepeat = tellrepeat + bookselected + "<br>";
        for(let i=0;i<units.length-1;i++){
          if(units[i].checked)
          tellrepeat+="Unit"+units[i].value+',';
        }

        tellrepeat = tellrepeat.slice(0,-1);

        if(units[15].checked){
          tellrepeat=bookselected+"<br>전체유닛"
        }

        repeatshow.innerHTML = tellrepeat;
        repeatnumber.innerHTML = "<span style='font-size:60px;'>" + repeatcount + "</span>"

        //최초 학습시간 기록용
        if(totalfirst){
          totalfirst = false;
          let startTime = new Date();
          document.getElementById('totalstudytime').innerHTML = "[학습시작]<br>"+startTime.getHours()+"시"+startTime.getMinutes()+"분"+startTime.getSeconds()+"초";
          StudyStartTime = startTime.getHours()*60*60+startTime.getMinutes()*60+startTime.getSeconds();
        }

        //초기화
        for(let i=1;i<selecteditem.length;i++){
          selecteditem.splice(1,listlength);
        }

        for(let i=1;i<playunitinfo.length;i++){
          playunitinfo.splice(1,playunitinfo.length);
        }

        Stopplaygame();

        document.getElementById("image").innerHTML='<img id="images" src = "Hanna.png" width="400px" height="400px">';

        //시작
        if(units[units.length-1].checked){
          //모든 유닛이 선택되었으면 해당 교재의 모든 정보를 selecteditem에 입력
          // Alphabet Phonics 일때
          listlength = 1;

          if(bookselected == 'Alphabet Phonics'){
            for(let i=0;i<52;i++){
              selecteditem.push(ap[i]);
              listlength++;
            }
          }

          if(bookselected == 'Easy Phonics'){
            for(let i=0;i<157;i++){
              selecteditem.push(ep[i]);
              listlength++;
            }
          }

          if(bookselected == 'Easy Phonics Plus'){
            for(let i=0;i<150;i++){
              selecteditem.push(epp[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 1'){
            for(let i=0;i<55;i++){
              selecteditem.push(pf1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 2'){
            for(let i=0;i<76;i++){
              selecteditem.push(pf2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 3'){
            for(let i=0;i<78;i++){
              selecteditem.push(pf3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 1'){
            for(let i=0;i<72;i++){
              selecteditem.push(pt1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 2'){
            for(let i=0;i<73;i++){
              selecteditem.push(pt2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 3'){
            for(let i=0;i<66;i++){
              selecteditem.push(pt3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 1'){
            for(let i=0;i<70;i++){
              selecteditem.push(te1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 2'){
            for(let i=0;i<69;i++){
              selecteditem.push(te2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 3'){
            for(let i=0;i<71;i++){
              selecteditem.push(te3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 4'){
            for(let i=0;i<57;i++){
              selecteditem.push(te4[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 5'){
            for(let i=0;i<63;i++){
              selecteditem.push(te5[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 6'){
            for(let i=0;i<65;i++){
              selecteditem.push(te6[i]);
              listlength++;
            }
          }

          // 기타 교재는 여기에....
          choiceismade = true;
          whatchosen = whatchosen+'전체 유닛';
        }
        // 유닛이 선별적으로 선택되어졌을 때
        else{
          listlength = 1;
          choiceismade=false;
          for(let i = 0; i < units.length-1; i++){
            if(units[i].checked){

              if(bookselected=='Alphabet Phonics'){
                for(let j=0;j<52;j++){
                  if(ap[j][0]==units[i].value){
                    selecteditem.push(ap[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Easy Phonics'){
                for(let j=0;j<157;j++){
                  if(ep[j][0]==units[i].value){
                    selecteditem.push(ep[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Easy Phonics Plus'){
                for(let j=0;j<150;j++){
                  if(epp[j][0]==units[i].value){
                    selecteditem.push(epp[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 1'){
                for(let j=0;j<55;j++){
                  if(pf1[j][0]==units[i].value){
                    selecteditem.push(pf1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 2'){
                for(let j=0;j<76;j++){
                  if(pf2[j][0]==units[i].value){
                    selecteditem.push(pf2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 3'){
                for(let j=0;j<78;j++){
                  if(pf3[j][0]==units[i].value){
                    selecteditem.push(pf3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 1'){
                for(let j=0;j<72;j++){
                  if(pt1[j][0]==units[i].value){
                    selecteditem.push(pt1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 2'){
                for(let j=0;j<73;j++){
                  if(pt2[j][0]==units[i].value){
                    selecteditem.push(pt2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 3'){
                for(let j=0;j<66;j++){
                  if(pt3[j][0]==units[i].value){
                    selecteditem.push(pt3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 1'){
                for(let j=0;j<70;j++){
                  if(te1[j][0]==units[i].value){
                    selecteditem.push(te1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 2'){
                for(let j=0;j<69;j++){
                  if(te2[j][0]==units[i].value){
                    selecteditem.push(te2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 3'){
                for(let j=0;j<71;j++){
                  if(te3[j][0]==units[i].value){
                    selecteditem.push(te3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 4'){
                for(let j=0;j<57;j++){
                  if(te4[j][0]==units[i].value){
                    selecteditem.push(te4[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 5'){
                for(let j=0;j<63;j++){
                  if(te5[j][0]==units[i].value){
                    selecteditem.push(te5[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 6'){
                for(let j=0;j<65;j++){
                  if(te6[j][0]==units[i].value){
                    selecteditem.push(te6[j]);
                    listlength ++;
                  }
                }
              }

              //다른 교재일때
              //if(bookselected=''){
              //}

              // 선택된 유닛 알아내서 팝업창 표시
              whatchosen = whatchosen + "Unit "+units[i].value +', ';
              choiceismade=true;
            }
            //Check가 안되어 있으면 Skip
          }

        }

        if(choiceismade){
          whatchosen=whatchosen.slice(0,-1);
          whatchosen=whatchosen.slice(0,-1);
          whatchosen = whatchosen + "입니다.";
          alert(whatchosen);
        }
        else{
          alert("choice has not been made yet!!");

        }
      }

      // 다음 단어 보기
      function NextWord(){
          let imgtag = document.getElementById("images");
          let bookselected = document.getElementById('book').value;
          let chosenword = document.getElementById("wordshow");

          let units = document.getElementById('np');

          if(choiceismade){


          //플레이되는 오디오가 있으면 Stop
          stopAudio();

          chosenword.innerText='Tell me What it is!!!';

          if(count > listlength-1){
            let units = document.getElementsByName('unit');

            count = 1;
            let repeatshow  = document.getElementById("repeat");
            let repeatnumber  = document.getElementById("repeatnumber");
            let tellrepeat="";

            tellrepeat = tellrepeat + bookselected + "<br>";
            for(let i=0;i<units.length;i++){
              if(units[i].checked)
              tellrepeat+="Unit"+units[i].value+',';
            }

            repeatcount++;

            tellrepeat = tellrepeat.slice(0,-1);

            repeatshow.innerHTML = tellrepeat;
            repeatnumber.innerHTML = "<span style='font-size:60px;'>" + repeatcount + "</span>"
          }


          //No 이미지가 선택되면 글자표시
          if(units.checked){
            document.all("image").innerHTML = "<p style='font-size:126px;text-align:center;'>"+selecteditem[count][3]+"</p>";
          }
          else{
            document.all("image").innerHTML = '<img id="images" width="400px" height="400px">';
            let imgtag = document.getElementById("images");
            imgtag.src = bookselected + '/' + selecteditem[count][1];
          }
          count++;
          }
          else{
            alert("교재와 유닛을 먼저 선택하셔야 합니다.");
          }

      }

      // 단어 보여주기
      function ShowWord(){
        let chosenword = document.getElementById("wordshow");
        if(choiceismade){

        count--;
        chosenword.innerHTML=selecteditem[count][5];
        //chosenword.innerText=selecteditem[count][3];
        count++;
        }
        else{
            alert("교재와 유닛을 먼저 선택하셔야 합니다.");
        }
      }

      // 학습 결과 전송
      function SendResult(){
        let endstudytime = document.getElementById("endstudytime");
        let endTime = new Date();
        let StudyRealTime;
        let temphour=0;
        let tempmin=0;
        let tempsec=0;
        let tempstring="";

        endstudytime.innerHTML="[학습종료]<br>"+endTime.getHours()+"시"+endTime.getMinutes()+"분"+endTime.getSeconds()+"초";

        StudyEndTime = endTime.getHours()*60*60+endTime.getMinutes()*60+endTime.getSeconds();

        StudyRealTime = StudyEndTime - StudyStartTime;

        let i;
        tempsec = StudyRealTime;
        for(i=0;tempsec>60;i++){
          tempsec = tempsec - 60;
        }

        tempmin = i;
        for(i = 0;tempmin>60;i++){
          tempmin = tempmin - 60;
        }
        temphour = i;

        if(temphour != 0){
          tempstring = tempstring + temphour+"시간";
        }
        if(tempmin != 0){
          tempstring = tempstring + tempmin+"분";
        }
        tempstring = tempstring + tempsec+"초";
        document.getElementById("realstudytime").innerHTML = "[학습시간]<br>"+tempstring;
      }

      // 처음 접속이라는 걸 인지
      let isitfirst = true;

      //문제 정답 숫자를 담는 변수
      let answer = 0;
      let useranswer = 0;

      //총문제수와 정답을 대답한 갯수를 담는 변수
      let correctanswer = 0;
      let totalproblem = 0;

      // 접속시간표시
      function getCurrentTime(){
        let currentDate = new Date();
        let pos = document.getElementById("connectTime");
        let msg = "";

        if(currentDate.getHours() > 12){
          msg = msg +(currentDate.getHours()-12)+"시";
        }
        else{
          msg = msg + currentDate.getHours() + "시";
        }

        msg = msg + currentDate.getMinutes()+"분";
        msg = msg + currentDate.getSeconds()+"초";

        if(currentDate.getHours() > 12){
          msg = msg + "PM";
        }
        else{
          msg = msg + "AM";
        }

        pos.innerHTML = msg;

        //처음 접속시 최초접속시간도 표시
        if(isitfirst){
          document.getElementById("firstcon").innerHTML=msg;
          isitfirst = false;
        }

        setTimeout(getCurrentTime,1000);
      }

      // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w]
      let playunitinfo = [['0','0','0','0','0','0']];
      // 확인학습 진입
      function Playgame(){

        stopAudio();

        if(choiceismade){
            if(repeatcount>=1){
              let playgamebutton = document.getElementById('playgame');

              //초기화
              for(let i=1;i<playunitinfo.length;i++){
                playunitinfo.splice(1,1);
              }

              // 게임할 배열들만 옮김
              for(let i=1;i<selecteditem.length;i++){
                if(selecteditem[i][4]=='w'){
                  playunitinfo.push([document.getElementById('book').value,selecteditem[i][0],selecteditem[i][1],selecteditem[i][2],selecteditem[i][3],selecteditem[i][4]]);
                }
              }

              Buttondisable();

              playgamebutton.value = "그만하기";
              playgamebutton.setAttribute("onClick","Stopplaygame()");

              //게임시작

              totalproblem = 0;
              correctanswer = 0;

              if(playunitinfo.length > 1){
                  nextgame();
              }
              else {
                alert("선택한 유닛에는 학습할 단어가 없습니다.");
                Stopplaygame();
              }

            }
            else{
              alert("유닛학습을 1회 이상 수행하셔야 확인학습을 진행할수 있습니다.");
            }
        }
        else{
          alert("교재와 유닛을 먼저 선택하셔야 합니다.");
        }

      }

      //해당 문제의 mp3파일의 전체 경로
      let problemaudiosource;

      // 확인학습 시작
      function nextgame(){
          //들려주는 단어 듣고 해당하는 그림 맞추기
          totalproblem++;
          let uppertext = document.getElementById('uppertext');
          let belowtext = document.getElementById('wordshow');

          let questiontext = "<h1>"+"여기에는 문제가 나갑니다."+"</h1>";
          let belowbutton = "여기는 결과가 나옵니다.";

          let q1, q2, q3, q4, centerquestionimage;

          let tempplayui = [['0','0','0','0','0','0']];

          for(let i=1;i<tempplayui.length;i++){
            tempplayui.splice(i,1);
          }

          for(let i=1;i<playunitinfo.length;i++){
            tempplayui.push(playunitinfo[i]);
          }

          //문제출제
          questiontext = '<h1>'+'아래 버튼을 눌르면 들려주는 단어를 찾아 클릭하세요.'+'</h1>'
          belowbutton = '<input type="button" style="height:35px;" value="준비되면 누르세요." onclick="playquestion()">';

          uppertext.innerHTML = questiontext;
          belowtext.innerHTML = belowbutton;

          // 총 단어수 중 랜덤선택
          let randnum = Math.random()*(playunitinfo.length-1);
          randnum = Math.floor(randnum)+1;

          // 1,2,3,4번중에 어디에 정답을 포함시킬껀지를 랜덤으로 선택
          let randnum2 = Math.random()*4;
          randnum2 = Math.floor(randnum2)+1;

         //randnum2 = 1;
          if(randnum2==1){
            q1 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==2){
            q2 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==3){
            q3 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else
          {
            q4 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }

          centerquestionimage = '<span class="questionimage">1<img src="'+q1+'" width="200px" height="190px" onclick="imageclick(1)"></span>'
            +'<span class="questionimage">2<img src="'+q2+'"width="200px" height="190px" onclick="imageclick(2)"></span>'
            +'<div> ---- </div>'
            +'<span class="questionimage">3<img src="'+q3+'" width="200px" height="190px" onclick="imageclick(3)"></span>'
            +'<span class="questionimage">4<img src="'+q4+'" width="200px" height="190px" onclick="imageclick(4)"></span>';

          // 그림출력
          document.all("image").innerHTML = centerquestionimage;

          // 정답 입력
          answer = randnum2;
      }

      //문제음성출력
      function playquestion(){
        myaudio.src = problemaudiosource;
        myaudio.play();
      }

      //정답을 확인해서 표시하는 함수
      function imageclick(theanswer){
        stopAudio();
        useranswer = theanswer;
        if(answer!=0){
          if(answer==useranswer){
            correctanswer++;
            document.getElementById('playscore').innerHTML = totalproblem + "개 중 <br>"+correctanswer+"개 정답";
            //let interval = setInterval('oxdisplay("정답입니다~^^")',200);
            //setTimeout(function(){clearInterval(interval);},3000);
            alert("정답입니다~~^^");
            nextgame();
          }
          else{
            document.getElementById('playscore').innerHTML = totalproblem + "개 중 <br>"+correctanswer+"개 정답";
            //let interval = setInterval('oxdisplay("아쉽게 틀렸어요...ㅠㅠ")',200);
            //setTimeout(function(){clearInterval(interval);},3000);
            alert("아쉬워요, 틀렸어요....ㅠㅠ");
            nextgame();
          }
        }
        else{
          alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
        }
      }

      // 깜빡이기 위한 변수
      //let print=true;
      // 정답, 오답 결과를 깜빡이며 나타내 줌.
      //function oxdisplay(result){
      //  if(print){
      //    document.getElementById('wordshow').innerHTML = result;
      //  }
      //  else{
      //    document.getElementById('wordshow').innerHTML = "<div style='background-color:beige;color:beige;'>----</div>";
      //  }
      //  print = !print;
      //}

      //확인학습 그만둘때 호출되는 함수
      function Stopplaygame(){
        let playgamebutton = document.getElementById('playgame');

        Buttonenable();

        playgamebutton.value = "확인학습";
        playgamebutton.setAttribute("onClick","Playgame()");

        //여기에 초기화면으로 바꾸기
        let uppertext = document.getElementById('uppertext');
        let belowtext = document.getElementById('wordshow');

        uppertext.innerHTML = "<h1>Say What it is!!</h1>";
        belowtext.innerHTML = "Tell me What it is!!!!";
      }

      function Buttondisable(){
        document.getElementById("playword").disabled = true;
        document.getElementById("showword").disabled = true;
        document.getElementById("nextbutton").disabled = true;

      }

      function Buttonenable(){
        document.getElementById("playword").disabled = false;
        document.getElementById("showword").disabled = false;
        document.getElementById("nextbutton").disabled = false;
      }
