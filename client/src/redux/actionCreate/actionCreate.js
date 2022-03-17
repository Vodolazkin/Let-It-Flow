import { TEST_TEST } from "../actionType/actionType"

export const testFromTest = (test_payload) => {

  return {
    type: TEST_TEST,
    payload: test_payload
  }
}
