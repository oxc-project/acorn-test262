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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
        "name": "callb",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 76,
          "name": "lam",
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
                  "name": "l",
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 79,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 93,
        "name": "callb",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 113,
          "name": "lam",
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
                  "name": "n",
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 130,
        "name": "callb",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 137,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "callb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 144,
            "end": 161,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 158,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
