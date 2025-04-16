__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 422,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "Selector",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 22,
        "end": 37,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "S",
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
          "start": 33,
          "end": 37,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 36,
            "end": 37,
            "typeName": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 81,
        "name": "createStructuredSelector",
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
          "start": 91,
          "end": 137,
          "name": "selectors",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 137,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 102,
              "end": 137,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 104,
                "end": 116,
                "name": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 109,
                  "end": 116,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 116,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
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
                "type": "TSTypeReference",
                "start": 119,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 127,
                  "name": "Selector",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 127,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "start": 131,
                      "end": 135,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 134,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 109,
                "end": 116,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 115,
                  "end": 116,
                  "typeName": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
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
                "start": 104,
                "end": 105,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 142,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "name": "Selector",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 150,
            "end": 156,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 151,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 154,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 173,
            "name": "editable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 176,
            "end": 186,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 183,
              "end": 185,
              "properties": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 421,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 210,
            "name": "mapStateToProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 213,
            "end": 421,
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 237,
              "name": "createStructuredSelector",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 238,
                "end": 420,
                "properties": [
                  {
                    "type": "Property",
                    "start": 242,
                    "end": 290,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 250,
                      "name": "editable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 252,
                      "end": 290,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 253,
                          "end": 263,
                          "name": "state",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 258,
                            "end": 263,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 260,
                              "end": 263
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 265,
                          "end": 275,
                          "name": "props",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 270,
                            "end": 275,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 272,
                              "end": 275
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 280,
                        "end": 290,
                        "callee": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 288,
                          "name": "editable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
