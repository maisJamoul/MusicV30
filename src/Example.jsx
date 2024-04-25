// import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider,} from '@tanstack/react-query'

// function Example() {
//     const { isPending, error, data } = useQuery({
//       queryKey: ['repoData'],
//       queryFn: () =>
//         fetch('https://api.vagalume.com.br/search.php?art=U2&mus=one&apikey={key}').then((res) =>
//           res.json(),
          
//         ),
//     })
  
//     if (isPending) return 'Loading...'
  
//     if (error) return 'An error has occurred: ' + error.message
  
//     return (
//       <div>

//         {/* <h1>{data.name}</h1>
//         <p>{data.description}</p>
//         <strong>👀 {data.subscribers_count}</strong>{' '}
//         <strong>✨ {data.stargazers_count}</strong>{' '}
//         <strong>🍴 {data.forks_count}</strong> */}

//         {data.key} 
//       </div>
//     )
//   }
//   export default Example