__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 24,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 22,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "decorators": [],
        "name": "callb",
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
          "start": 57,
          "end": 76,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 76,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 62,
              "end": 76,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 69,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 72,
                  "end": 76
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 79,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 93,
        "decorators": [],
        "name": "callb",
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
          "start": 94,
          "end": 113,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 113,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 99,
              "end": 113,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 104,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 104,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 106,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 109,
                  "end": 113
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 130,
        "decorators": [],
        "name": "callb",
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
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 137,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 162,
        "callee": {
          "type": "Identifier",
          "start": 138,
          "end": 143,
          "decorators": [],
          "name": "callb",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 144,
            "end": 161,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 161,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 159,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 153,
                    "end": 158,
                    "object": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 158,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
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
