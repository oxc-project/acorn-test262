__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 283,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "name": "Chainable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 138,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 49,
            "end": 60,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 136,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 72,
              "name": "mapValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 72,
              "end": 75,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 73,
                  "end": 74,
                  "name": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 102,
                "name": "func",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 80,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 82,
                    "end": 102,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 83,
                        "end": 96,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 96,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 86,
                            "end": 96,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 86,
                              "end": 87,
                              "typeName": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 87,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeOperator",
                              "start": 88,
                              "end": 95,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 94,
                                "end": 95,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 94,
                                  "end": 95,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 114,
                  "name": "Chainable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 135,
                  "params": [
                    {
                      "type": "TSMappedType",
                      "start": 115,
                      "end": 134,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 117,
                        "end": 129,
                        "name": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 122,
                          "end": 129,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 128,
                            "end": 129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 129,
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
                        "start": 132,
                        "end": 133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 122,
                        "end": 129,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 128,
                          "end": 129,
                          "typeName": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
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
                        "start": 117,
                        "end": 118,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 140,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "name": "chain",
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
          "start": 166,
          "end": 170,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
        "start": 171,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 173,
          "end": 185,
          "typeName": {
            "type": "Identifier",
            "start": 173,
            "end": 182,
            "name": "Chainable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 182,
            "end": 185,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
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
      "start": 188,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "name": "square",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 203,
            "end": 223,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 204,
                "end": 213,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 205,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 218,
              "end": 223,
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "start": 226,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 281,
            "callee": {
              "type": "MemberExpression",
              "start": 236,
              "end": 279,
              "object": {
                "type": "CallExpression",
                "start": 236,
                "end": 273,
                "callee": {
                  "type": "MemberExpression",
                  "start": 236,
                  "end": 265,
                  "object": {
                    "type": "CallExpression",
                    "start": 236,
                    "end": 255,
                    "callee": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 241,
                      "name": "chain",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 242,
                        "end": 254,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 243,
                            "end": 247,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 244,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 246,
                              "end": 247,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 249,
                            "end": 253,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 250,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 252,
                              "end": 253,
                              "value": 2,
                              "raw": "2"
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
                  "property": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 265,
                    "name": "mapValues",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 272,
                    "name": "square",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 274,
                "end": 279,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
