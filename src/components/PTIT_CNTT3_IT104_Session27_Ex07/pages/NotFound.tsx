import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                    <div className="text-6xl font-bold text-gray-400 mb-2">404</div>
                    <div className="text-xl text-gray-600">Oops!</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Trang bạn tìm không tồn tại
                </h2>
                <p className="text-gray-600 mb-8">
                    Có vẻ như trang bạn đang tìm kiếm đã bị di chuyển, xóa hoặc không bao giờ tồn tại.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Quay về trang chủ
                    </Link>
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Quay lại
                    </button>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        URL: <span className="font-mono text-gray-700">{window.location.pathname}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound