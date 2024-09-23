import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            PULSE News (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the https://www.pulsenews.com website (the &quot;Service&quot;). 
            This page informs you of our policies regarding the collection, use, and disclosure of personal data 
            when you use our Service and the choices you have associated with that data.
          </p>
          
          <h2>1. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information 
            that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, 
            but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Cookies and Usage Data</li>
          </ul>
          
          <h2>2. Use of Data</h2>
          <p>PULSE News uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2>3. Transfer of Data</h2>
          <p>
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside 
            of your state, province, country or other governmental jurisdiction where the data protection laws may differ than 
            those from your jurisdiction.
          </p>
          
          <h2>4. Disclosure of Data</h2>
          <p>PULSE News may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul>
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of PULSE News</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>
          
          <h2>5. Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, 
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
            your Personal Data, we cannot guarantee its absolute security.
          </p>
          
          <h2>6. Your Data Protection Rights</h2>
          <p>
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. 
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, 
            please contact us.
          </p>
          
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective 
            and update the "effective date" at the top of this Privacy Policy.
          </p>
          
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </CardContent>
      </Card>
    </div>
  );
}