contextualTypingFunctionReturningFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 63,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 15,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 26,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 18,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 33,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 29,
                "end": 33
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 61,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 60,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 41,
                "end": 60,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 56,
                    "end": 60
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 65,
      "end": 96,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 88,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 95,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 136,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 100,
            "end": 135,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 106,
                  "end": 113,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 111,
                    "end": 113,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 116,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 132,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 125,
                    "end": 132,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 130,
                      "end": 132,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
