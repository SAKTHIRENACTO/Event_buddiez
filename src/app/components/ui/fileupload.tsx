import { FileText, Upload, X } from "lucide-react";

interface FileUploadProps {
  label: string;
  subLabel?: string;
  name: string;
  register: any;
  error: any;
  required?: string;
  watch: any;
  setValue: any;
}

const FileUploadField = ({ label, subLabel, name, register, error, required, watch, setValue }: FileUploadProps) => {
  const fileList = watch(name);
  const file = fileList?.[0];

  const handleRemove = () => {
    setValue(name, null);
  };

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {subLabel && <span className="text-gray-400 text-xs font-normal">{subLabel}</span>}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {!file ? (
        <div className={`relative border-2 border-dashed rounded-xl p-8 transition-all flex flex-col items-center justify-center bg-gray-50 hover:bg-indigo-50/30 ${
          error ? "border-red-300 bg-red-50/30" : "border-gray-200 hover:border-indigo-400"
        }`}>
          <Upload className={`w-8 h-8 mb-3 ${error ? "text-red-400" : "text-indigo-500"}`} />
          <p className="text-sm font-medium text-indigo-600">Click to upload</p>
          <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG (Max 5MB)</p>
          
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            {...register(name, { 
              required: required,
              validate: {
                lessThan5MB: (files: FileList) => !files[0] || files[0].size < 5000000 || "Max size 5MB",
                acceptedFormats: (files: FileList) => 
                  !files[0] || 
                  ['image/jpeg', 'image/png', 'application/pdf'].includes(files[0].type) || 
                  "Unsupported format"
              }
            })}
          />
        </div>
      ) : (
        /* File Preview / Success State */
        <div className="flex items-center justify-between p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="bg-indigo-500 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
              <p className="text-xs text-indigo-600 font-medium">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      
      {error && <p className="text-red-500 text-xs mt-1.5 font-medium">{error.message}</p>}
    </div>
  );
};


export default FileUploadField;