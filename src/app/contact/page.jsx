import CopyRight from "@/components/Footer/copyRight";
import MenuFooter from "@/components/Footer/menuFooter";
import Headers from "@/components/Header";
import Layout from "@/components/Layout";
import Text from "@/components/Text";

function Contact() {
  const onSubmit = async (event) => {
    console.log("event", event);
  };

  return (
    <Layout>
      <Headers isMenu={false} />
      <div className="h-full mt-2 w-full py-3 bg-gray-100">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-semibold text-[#034ea1]">CONTACT US</h1>
          <Text>Do you have any questions about SUNGJIN?</Text>
          <Text>
            Customer service representatives will answer all inquiries as best
            as possible.
          </Text>
          <h3 className="text-lg mt-4 font-semibold text-orange-600 border-b-[1px] border-gray-600">
            CUSTOMER
          </h3>
          <form id="signup-form">
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex-auto">
                <div className="mt-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="name"
                  />
                </div>
                <div className="mt-2">
                  <label
                    for="person"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact person
                  </label>
                  <input
                    type="text"
                    id="person"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="person"
                  />
                </div>
                <div className="mt-2">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="email"
                  />
                </div>
                <div className="mt-2">
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="phone"
                  />
                </div>
                <div className="mt-2">
                  <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    name="address"
                  />
                </div>
              </div>
              <div className="flex-auto mt-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[calc(100%-1.75rem)]"
                  name="message"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white my-12 min-w-64 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confirm Content
              </button>
            </div>
          </form>
          <div className="min-h-96">
            <h3 className="text-lg border-b-[1px] border-gray-600 font-semibold pb-3">
              Privacy Terms
            </h3>
            <Text class="mt-4">Personal Information Items to Collect.</Text>
            <Text class="mb-6">- Name, email, contact, content</Text>
            <Text>How We Collect Personal Information.</Text>
            <Text class="mb-6">
              - Customers register directly on the homepage
            </Text>
            <Text>Purpose of collecting and using personal information.</Text>
            <Text class="mb-6">- Customer consultation</Text>
            <Text>Record consumer complaints or disputes.</Text>
            <Text>
              - Reason for preservation: Article 6 of the Enforcement Decree of
              the Consumer Protection Act in Electronic Commerce, etc
            </Text>
            <Text>- Retention period: 3 years</Text>
          </div>
        </div>
      </div>
      <footer className="w-full">
        <MenuFooter />
        <CopyRight />
      </footer>
    </Layout>
  );
}

export default Contact;
