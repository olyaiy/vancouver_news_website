import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using PULSE News (the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
            If you disagree with any part of the terms, you may not access the Service.
          </p>
          
          <h2>2. Content</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, 
            videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, 
            including its legality, reliability, and appropriateness.
          </p>
          
          <h2>3. Accounts</h2>
          <p>
            When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current 
            at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
          </p>
          
          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain 
            the exclusive property of PULSE News and its licensors.
          </p>
          
          <h2>5. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third party web sites or services that are not owned or controlled by PULSE News. 
            PULSE News has no control over, and assumes no responsibility for the content, privacy policies, or practices of any 
            third party web sites or services.
          </p>
          
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
            under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
          
          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
          </p>
          
          <h2>8. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change 
            will be determined at our sole discretion.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us.</p>
        </CardContent>
      </Card>
    </div>
  )
}