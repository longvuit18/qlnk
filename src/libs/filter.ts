export const filterTable = <T>(key: string, dataFilter: Array<T>, element: string ): Array<T> => {
    return dataFilter.filter(item => {
        const a = (item as any)[element] as string;

        return a.toLocaleLowerCase().search(key.toLocaleLowerCase()) !== -1
    })
}