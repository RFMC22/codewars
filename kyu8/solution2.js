//Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let r = (s1+s2+s3)/3;
  if(r>=90) return 'A';
  if(r>=80) return 'B';
  if(r>=70) return 'C';
  if(r>=60) return 'D';
  if(r>=0) return 'F';
}