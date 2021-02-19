export function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
export class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc29ydGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95cy9naXQvbWNoYWluL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5zb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLGFBQWEsQ0FBQyxTQUFjLEVBQUUsQ0FBTSxFQUFFLENBQU07SUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDdkI7SUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDVCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELE1BQU0sT0FBTyxXQUFXO0lBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBZ0IsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxhQUF3QjtRQUV0RixNQUFNLEdBQUcsR0FBVyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLE9BQU8sR0FBYSxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBRXhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcGFyZVZhbHVlcyhkaXJlY3Rpb246IGFueSwgYTogYW55LCBiOiBhbnkpIHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xICogZGlyZWN0aW9uO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFNvcnRlciB7XG5cbiAgc3RhdGljIHNvcnQoZGF0YTogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcsIGN1c3RvbUNvbXBhcmU/OiBGdW5jdGlvbik6IEFycmF5PGFueT4ge1xuXG4gICAgY29uc3QgZGlyOiBudW1iZXIgPSAoZGlyZWN0aW9uID09PSAnYXNjJykgPyAxIDogLTE7XG4gICAgY29uc3QgY29tcGFyZTogRnVuY3Rpb24gPSBjdXN0b21Db21wYXJlID8gY3VzdG9tQ29tcGFyZSA6IGNvbXBhcmVWYWx1ZXM7XG5cbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gY29tcGFyZS5jYWxsKG51bGwsIGRpciwgYVtmaWVsZF0sIGJbZmllbGRdKTtcbiAgICB9KTtcbiAgfVxufVxuIl19