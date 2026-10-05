async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}


async function getQuestions(categoryId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/questions/?category=${categoryId}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch questions');
  }

  return res.json();
}


export default async function PracticePage({ params }) {
  const { slug } = params;

  const categories = await getCategories();

  const category = categories.find(
    (c) => c.slug === slug
  );

  if (!category) {
    return (
      <div className="p-10">
        Category not found
      </div>
    );
  }

  const questions = await getQuestions(category.id);

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-4xl mx-auto px-4 py-12">

        <h1 className="text-3xl font-bold mb-2">
          {category.name}
        </h1>

        <p className="text-gray-600 mb-8">
          Practice Questions
        </p>


        {questions.length === 0 ? (

          <p className="text-gray-600">
            No practice questions added yet.
          </p>

        ) : (

          <div className="space-y-6">

            {questions.map((q, index) => (

              <div
                key={q.id}
                className="border border-gray-200 rounded-xl p-6"
              >

                <p className="font-semibold text-lg">
                  {index + 1}. {q.question}
                </p>


                {q.answer && (

                  <details className="mt-4">

                    <summary className="cursor-pointer text-blue-600 font-medium">
                      Show Answer
                    </summary>

                    <p className="mt-3 text-gray-700">
                      {q.answer}
                    </p>

                  </details>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}