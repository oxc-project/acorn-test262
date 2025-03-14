generatorTypeCheck26.ts
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
      "async": false,
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
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 90,
                "end": 103,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 95,
                  "end": 103,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 103,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 132,
            "expression": {
              "type": "YieldExpression",
              "start": 109,
              "end": 131,
              "argument": {
                "type": "ArrayExpression",
                "start": 116,
                "end": 131,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 117,
                    "end": 130,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 130,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 130,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ]
                  }
                ]
              },
              "delegate": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 158,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 144,
              "end": 157,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 149,
                "end": 157,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 157,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 77,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 77,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 32,
                "end": 53,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    }
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 65,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 59,
                        "end": 65
                      }
                    }
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
