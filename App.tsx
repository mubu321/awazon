import React, { useState, useEffect, useCallback } from 'react';
import type { Product, GeneratedProductData } from './types';
import { generateProduct, generateProductImage } from './services/geminiService';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { ProductView } from './components/ProductView';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [balance, setBalance] = useState<number>(500000);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { t, language } = useLanguage();

    const fetchNextProduct = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setCurrentProduct(null); 
        try {
            const productData: GeneratedProductData = await generateProduct(language);
            
            const imageUrl = await generateProductImage(productData.name);
            
            const newProduct: Product = {
                ...productData,
                id: crypto.randomUUID(),
                rating: Math.random() * 2 + 3, // Random rating between 3 and 5
                reviewCount: Math.floor(Math.random() * 2000) + 50,
                imageUrl,
            };

            setCurrentProduct(newProduct);
        } catch (err) {
            setError(t('app.error'));
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [t, language]);

    useEffect(() => {
        fetchNextProduct();
    }, [fetchNextProduct]);

    const handleBuy = () => {
        if (!currentProduct) return;

        if (balance >= currentProduct.price) {
            setBalance(prevBalance => prevBalance - currentProduct.price);
            alert(t('app.purchaseSuccess', currentProduct.name, currentProduct.price.toLocaleString()));
            fetchNextProduct();
        } else {
            alert(t('app.purchaseFail'));
        }
    };

    const handleSkip = () => {
        fetchNextProduct();
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <Header balance={balance} />
            <main className="flex-grow flex items-center justify-center p-4">
                {isLoading && <Loader />}
                {error && (
                    <div className="text-center p-8 bg-white rounded-lg shadow-md">
                        <p className="text-red-600 font-semibold">{error}</p>
                        <button onClick={fetchNextProduct} className="mt-4 px-6 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-600">
                            {t('app.tryAgain')}
                        </button>
                    </div>
                )}
                {!isLoading && !error && currentProduct && (
                     <ProductView 
                        product={currentProduct}
                        onBuy={handleBuy}
                        onSkip={handleSkip}
                     />
                )}
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};


export default App;