__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 42,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 21,
          "end": 42,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 22,
              "end": 41,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 30,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 22,
                "end": 25,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 23,
                    "end": 24,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 21,
          "decorators": [],
          "name": "ReturnType",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 92,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 92,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 88,
          "decorators": [],
          "name": "_x",
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
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 136,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 128,
                "end": 135,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 134,
                  "end": 135,
                  "raw": "1",
                  "value": 1
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 106,
              "end": 127,
              "params": [
                {
                  "type": "TSFunctionType",
                  "start": 107,
                  "end": 126,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 111,
                      "end": 115,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 112,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 114,
                          "end": 115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 120,
                      "end": 126
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 107,
                    "end": 110,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 108,
                        "end": 109,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
