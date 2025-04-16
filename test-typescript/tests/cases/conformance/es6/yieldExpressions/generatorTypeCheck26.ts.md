__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 104,
            "expression": {
              "type": "YieldExpression",
              "start": 84,
              "end": 103,
              "delegate": false,
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 90,
                "end": 103,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 95,
                  "end": 103,
                  "object": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 103,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 132,
            "expression": {
              "type": "YieldExpression",
              "start": 109,
              "end": 131,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 116,
                "end": 131,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 117,
                    "end": 130,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 130,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 130,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 158,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 144,
              "end": 157,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "MemberExpression",
                "start": 149,
                "end": 157,
                "object": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 157,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 77,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 32,
                "end": 53,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  }
                }
              },
              {
                "type": "TSFunctionType",
                "start": 55,
                "end": 76,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 65,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 59,
                        "end": 65
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  }
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
