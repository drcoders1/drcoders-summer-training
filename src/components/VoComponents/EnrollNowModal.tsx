import { Dialog, DialogContent } from "@/components/ui/dialog";
import EnrollNowForm from "./enrollnow-form";
import { X } from "lucide-react";
import { useState, useRef } from "react";

export default function EnrollNowModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [dirty, setDirty] = useState(false);
  const pendingClose = useRef<null | (() => void)>(null);

  // Handler for close button or dialog close
  const handleRequestClose = () => {
    if (dirty) {
      setShowConfirm(true);
      pendingClose.current = () => onOpenChange(false);
    } else {
      onOpenChange(false);
    }
  };

  // Handler for EnrollNowForm to set dirty state
  const handleDirtyChange = (isDirty: boolean) => setDirty(isDirty);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => (v ? onOpenChange(true) : handleRequestClose())}
    >
      <DialogContent className="flex h-[80vh] w-full max-w-2xl flex-col border-none bg-transparent p-0 shadow-none">
        {/* Close (X) button */}
        <button
          className="bg-brand-white-10 text-brand-white hover:bg-brand-white-20 absolute right-4 top-4 z-20 rounded-full p-2 focus:outline-none sm:right-6 sm:top-6"
          aria-label="Close"
          onClick={handleRequestClose}
        >
          <X className="h-6 w-6" />
        </button>
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <EnrollNowForm onDirtyChange={handleDirtyChange} />
        </div>
        {/* Confirmation dialog */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-xs rounded-lg bg-white p-6 text-center">
              <div className="text-brand-primary mb-4 text-lg font-semibold">
                Are you sure?
              </div>
              <div className="text-brand-grey mb-6 text-sm">
                You have unsaved changes. If you close, your edits will be lost.
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-brand-sky-mint text-brand-primary hover:bg-brand-sky-mint-90 rounded px-4 py-2 font-semibold"
                  onClick={() => {
                    setShowConfirm(false);
                    if (pendingClose.current) pendingClose.current();
                  }}
                >
                  Yes, Close
                </button>
                <button
                  className="bg-brand-grey hover:bg-brand-grey/80 rounded px-4 py-2 font-semibold text-white"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
