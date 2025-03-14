cannotInvokeNewOnIndexExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 10,
                "end": 15,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 10,
                  "end": 13
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 18,
            "end": 28,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 22,
              "end": 28,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 22,
                "end": 25,
                "decorators": [],
                "name": "any",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "raw": "1",
                "value": 1
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
