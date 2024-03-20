export const Sample = () => {
    return (
        <div className="bg-black h-screen">

            <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default
                range</label>
            <input id="default-range" type="range" value="50"
                   className="w-20 rounded-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

        </div>
    )
}

export default Sample
