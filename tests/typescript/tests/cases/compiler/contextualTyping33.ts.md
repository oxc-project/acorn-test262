__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                    "typeParameters": null,
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
                    "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "expression": false
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
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 64,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "expression": false
              },
              {
                "type": "FunctionExpression",
                "start": 89,
                "end": 113,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  ]
                },
                "expression": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
