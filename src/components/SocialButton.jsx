export default function SocialButton({ icon }) {
  return (
          <button style={{
                          height:'55px',
                          width: '55px',
                          margin: '5px',
                          display: 'inline-block',
                          fontSize: '22px',
                          borderRadius: '50px'}}>
              <i className={`fa fa-${icon}`} /> {icon}
          </button>
  );
}
  
  
  
  
  
  
  