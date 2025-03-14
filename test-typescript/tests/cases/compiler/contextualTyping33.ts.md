contextualTyping33.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 59,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 54,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 54,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 20,
              "end": 54,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 52,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 21,
                    "end": 31,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 24,
                        "end": 30
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 32,
                    "end": 50,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 41,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 59,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 115,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 65,
            "end": 114,
            "elements": [
              {
                "type": "FunctionExpression",
                "start": 66,
                "end": 87,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 76,
                  "end": 87,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 77,
                      "end": 86,
                      "argument": {
                        "type": "Literal",
                        "start": 84,
                        "end": 85,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              {
                "type": "FunctionExpression",
                "start": 89,
                "end": 113,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 99,
                  "end": 113,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 100,
                      "end": 112,
                      "argument": {
                        "type": "Literal",
                        "start": 107,
                        "end": 112,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 64,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
