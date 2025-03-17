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
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 138,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 49,
            "end": 60,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 72,
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 102,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 80,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 82,
                    "end": 102,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 83,
                        "end": 96,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 96,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 86,
                            "end": 96,
                            "indexType": {
                              "type": "TSTypeOperator",
                              "start": 88,
                              "end": 95,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 94,
                                "end": 95,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 94,
                                  "end": 95,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 86,
                              "end": 87,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 87,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 135,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 135,
                  "params": [
                    {
                      "type": "TSMappedType",
                      "start": 115,
                      "end": 134,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 122,
                        "end": 129,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 128,
                          "end": 129,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "nameType": null,
                      "optional": null,
                      "readonly": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 132,
                        "end": 133,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 114,
                  "decorators": [],
                  "name": "Chainable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 72,
              "end": 75,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 73,
                  "end": 74,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "Chainable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 140,
      "end": 186,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "decorators": [],
        "name": "chain",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 171,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 173,
          "end": 185,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 182,
            "end": 185,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 173,
            "end": 182,
            "decorators": [],
            "name": "Chainable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "decorators": [],
            "name": "square",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 203,
            "end": 223,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 218,
              "end": 223,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 204,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 205,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 281,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 236,
              "end": 279,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 236,
                "end": 273,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 272,
                    "decorators": [],
                    "name": "square",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 236,
                  "end": 265,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 236,
                    "end": 255,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 244,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 246,
                              "end": 247,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "Property",
                            "start": 249,
                            "end": 253,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 250,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 252,
                              "end": 253,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 241,
                      "decorators": [],
                      "name": "chain",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 265,
                    "decorators": [],
                    "name": "mapValues",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 274,
                "end": 279,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
