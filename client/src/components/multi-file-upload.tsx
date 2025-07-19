import React from 'react';
import { Upload, FileText, X, File, Image, FileSpreadsheet } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface MultiFileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizePerFile?: number; // in MB
  acceptedTypes?: string;
  label?: string;
}

export default function MultiFileUpload({
  files,
  onFilesChange,
  maxFiles = 5,
  maxSizePerFile = 10,
  acceptedTypes = ".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.zip,.rar,.csv,.xlsx,.pptx",
  label = "Attach Files (Optional)"
}: MultiFileUploadProps) {
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    if (files.length + selectedFiles.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can only upload up to ${maxFiles} files.`,
        variant: "destructive",
      });
      return;
    }

    const validFiles: File[] = [];
    
    for (const file of selectedFiles) {
      // Check file size
      if (file.size > maxSizePerFile * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than ${maxSizePerFile}MB.`,
          variant: "destructive",
        });
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      onFilesChange([...files, ...validFiles]);
    }

    // Reset input
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onFilesChange(newFiles);
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'pdf':
        return <FileText className="w-4 h-4 text-red-600" />;
      case 'doc':
      case 'docx':
        return <File className="w-4 h-4 text-blue-600" />;
      case 'xlsx':
      case 'csv':
        return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return <Image className="w-4 h-4 text-purple-600" />;
      default:
        return <File className="w-4 h-4 text-gray-600" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-800">{label}</label>
      
      {/* Upload Area */}
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-50/50 hover:bg-gray-50 hover:border-primary/50 transition-all duration-200">
          <div className="flex flex-col items-center justify-center pt-2 pb-2">
            <Upload className="w-6 h-6 mb-2 text-gray-400" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">
              Multiple files allowed (max {maxFiles} files, {maxSizePerFile}MB each)
            </p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
            accept={acceptedTypes}
            multiple
          />
        </label>
      </div>

      {/* Selected Files */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Selected Files ({files.length}/{maxFiles})
          </p>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  {getFileIcon(file.name)}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-blue-800 font-medium truncate block">
                      {file.name}
                    </span>
                    <span className="text-xs text-blue-600">
                      {formatFileSize(file.size)} MB
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}