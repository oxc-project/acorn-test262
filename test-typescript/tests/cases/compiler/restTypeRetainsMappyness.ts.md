__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 28,
        "end": 56,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 40,
          "end": 47,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 46,
            "end": 47,
            "typeName": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 50,
          "end": 54,
          "indexType": {
            "type": "TSTypeReference",
            "start": 52,
            "end": 53,
            "typeName": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 24,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 19,
              "end": 24,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
      "type": "FunctionDeclaration",
      "start": 58,
      "end": 255,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 155,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 143,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 143,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 140,
                        "end": 143,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 140,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 146,
                  "end": 155,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 146,
                    "end": 148,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 152,
                    "end": 155
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 160,
            "end": 170,
            "expression": {
              "type": "CallExpression",
              "start": 160,
              "end": 170,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 163,
                  "end": 169,
                  "argument": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 169,
                    "decorators": [],
                    "name": "arr",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 162,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 118,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 118,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 93,
              "end": 118,
              "params": [
                {
                  "type": "RestElement",
                  "start": 94,
                  "end": 109,
                  "argument": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 109,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 106,
                        "end": 109,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 107,
                            "end": 108,
                            "typeName": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 108,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 106,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 114,
                  "end": 118
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 87,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 82,
              "end": 87,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
