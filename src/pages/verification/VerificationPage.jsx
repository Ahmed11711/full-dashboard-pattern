import GenericListPage from "../../components/components/BaseComponents/FullDynamic/GenericListPage";
import { VerificationFields } from "../../schemas/verificationSchema";

export default function VerificationPage() {
  return (
    <GenericListPage
      endpoint="verificationAdmin"
      headers={VerificationFields}
      title={"All verification"}
      routePrefix={'Verification'}
    />
  );
}