contextualTyping38.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 52,
            "expression": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 52,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 42,
                    "end": 50,
                    "argument": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 26,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 13,
                  "end": 24,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 15,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 17,
                      "end": 23
                    }
                  }
                }
              ]
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
