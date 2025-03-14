comparisonOfPartialDeepAndIndexedAccessTerminatesWithoutError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "PartialDeep",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 22,
        "end": 58,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 29,
          "end": 36,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 57,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 51,
            "end": 57,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 52,
                "end": 56,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "decorators": [],
            "name": "PartialDeep",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 92,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "Many",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 75,
        "end": 91,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 75,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeOperator",
            "start": 79,
            "end": 91,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 88,
              "end": 91,
              "elementType": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 186,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 186,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 184,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
              "decorators": [],
              "name": "sortBy",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 131,
                "end": 167,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 143,
                  "decorators": [],
                  "name": "iteratees",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 145,
                    "end": 167,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 165,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 149,
                        "end": 165,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 150,
                            "end": 164,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 161,
                              "end": 164,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 162,
                                  "end": 163,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 162,
                                    "end": 163,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 161,
                              "decorators": [],
                              "name": "PartialDeep",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 149,
                        "decorators": [],
                        "name": "Many",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 183,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 180,
                  "end": 183,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 181,
                      "end": 182,
                      "typeName": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 180,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 114,
        "decorators": [],
        "name": "Collection",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 116,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "start": 188,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 220,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 220,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 220,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 208,
                      "end": 219,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 209,
                          "end": 218,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 210,
                            "end": 218,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 212,
                              "end": 218
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 207,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 224,
            "end": 273,
            "expression": {
              "type": "TSAsExpression",
              "start": 224,
              "end": 235,
              "expression": {
                "type": "Literal",
                "start": 224,
                "end": 228,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 232,
                "end": 235
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 273,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 249,
                "end": 273,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 250,
                    "end": 272,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 251,
                        "end": 261,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 254,
                            "end": 260
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 262,
                        "end": 271,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 263,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 263,
                          "end": 271,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 265,
                            "end": 271
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 249,
                "decorators": [],
                "name": "Collection",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 287,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
