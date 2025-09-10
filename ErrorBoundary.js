import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from './styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: colors.bg,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <View style={{
            backgroundColor: colors.panel,
            padding: 30,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            maxWidth: 400,
            width: '100%',
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
              marginBottom: 16,
            }}>
              Something went wrong
            </Text>
            
            <Text style={{
              fontSize: 16,
              color: colors.muted,
              textAlign: 'center',
              marginBottom: 24,
              lineHeight: 22,
            }}>
              The application encountered an unexpected error. Please try refreshing the page.
            </Text>
            
            <TouchableOpacity
              onPress={this.handleRetry}
              style={{
                backgroundColor: colors.accent,
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderRadius: 8,
                alignItems: 'center',
              }}
            >
              <Text style={{
                color: '#111',
                fontSize: 16,
                fontWeight: '600',
              }}>
                Try Again
              </Text>
            </TouchableOpacity>
            
            {__DEV__ && this.state.error && (
              <View style={{ marginTop: 20, padding: 16, backgroundColor: 'rgba(255,0,0,0.1)', borderRadius: 8 }}>
                <Text style={{ color: '#ff6b6b', fontSize: 12, fontFamily: 'monospace' }}>
                  {this.state.error.toString()}
                </Text>
                {this.state.errorInfo && (
                  <Text style={{ color: '#ff6b6b', fontSize: 10, fontFamily: 'monospace', marginTop: 8 }}>
                    {this.state.errorInfo.componentStack}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
