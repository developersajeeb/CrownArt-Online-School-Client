const SectionHeader = ({miniTitle, bigTitle}) => {
    return (
        <div className="text-center">
            <h4 className="text-xl italic primary-color">{miniTitle}</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-700 mt-2">{bigTitle}</h2>
        </div>
    );
};

export default SectionHeader;