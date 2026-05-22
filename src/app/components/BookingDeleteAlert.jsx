
import {AlertDialog, Button} from "@heroui/react";
import { FaTrash } from "react-icons/fa";
export default function BookingDeleteAlert({bookingsId }) {
  



  return (
     <AlertDialog>
       <button className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                <FaTrash /> Delete
              </button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}
