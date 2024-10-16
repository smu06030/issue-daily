import { NewsResultsType } from './newsInfo';
// 즐겨찾기 타입
export type CardProps = {
  likes: NewsResultsType | null;
};

// UserProfile 타입 정의
export type UserProfile = {
  id: string;
  user_name: string;
  email: string;
  avatar_url?: string | null; // avatar_url이 없거나 null일 수 있음을 명시
};

// Modal 컴포넌트의 프롭스 타입 정의
export interface ModalProps {
  isOpen: boolean; // 모달 열림 여부
  onClose: () => void; // 모달 닫기 함수
  userProfile: UserProfile | null; // 사용자 프로필 (null일 수 있음)
  userId: string | null;
}
