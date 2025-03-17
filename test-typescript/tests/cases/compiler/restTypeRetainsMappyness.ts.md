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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 28,
        "end": 56,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 35,
          "end": 47,
          "name": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 50,
          "end": 54,
          "objectType": {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 52,
            "end": 53,
            "typeName": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 58,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "test",
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
          "start": 89,
          "end": 118,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 118,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 93,
              "end": 118,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 94,
                  "end": 109,
                  "argument": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 106,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "value": null
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 143,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 140,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 160,
            "end": 170,
            "expression": {
              "type": "CallExpression",
              "start": 160,
              "end": 170,
              "callee": {
                "type": "Identifier",
                "start": 160,
                "end": 162,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 163,
                  "end": 169,
                  "argument": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 169,
                    "name": "arr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
