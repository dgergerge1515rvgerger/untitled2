public class a {
    public static void b(int... a){
        System.out.println(6);
        for(int i=0;i<a.length;i++){
            System.out.println(a[i]);
        }
    }
    public static void main(String[] args) {

        a.b(1,2,2);
        System.out.println(6+"ll");

    }
}
