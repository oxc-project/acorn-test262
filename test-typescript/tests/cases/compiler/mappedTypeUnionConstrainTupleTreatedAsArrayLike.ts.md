__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 26,
        "name": "HomomorphicMappedType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 32,
        "end": 88,
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
          "type": "TSConditionalType",
          "start": 50,
          "end": 86,
          "checkType": {
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
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 63,
            "end": 69
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 72,
            "end": 79
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 82,
            "end": 86
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
      "start": 90,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 104,
        "name": "test1",
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
          "start": 136,
          "end": 143,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 143,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 143,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
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
      "body": {
        "type": "BlockStatement",
        "start": 145,
        "end": 262,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 149,
            "end": 198,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 198,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 165,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 158,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 160,
                      "end": 165,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 160,
                        "end": 163
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 168,
                  "end": 198,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 168,
                    "end": 170,
                    "elements": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 195,
                      "name": "HomomorphicMappedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 195,
                      "end": 198,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 196,
                          "end": 197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 197,
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 260,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 207,
                "end": 260,
                "id": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 227,
                  "name": "arr2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 211,
                    "end": 227,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 213,
                      "end": 227,
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 222,
                        "end": 227,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 222,
                          "end": 225
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 230,
                  "end": 260,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 230,
                    "end": 232,
                    "elements": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 236,
                    "end": 260,
                    "typeName": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 257,
                      "name": "HomomorphicMappedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 257,
                      "end": 260,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 258,
                          "end": 259,
                          "typeName": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 259,
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 115,
              "end": 134,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 115,
                  "end": 123,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 116,
                      "end": 122
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 126,
                  "end": 134,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 278,
        "name": "test2",
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
          "start": 319,
          "end": 326,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 326,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 326,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
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
      "body": {
        "type": "BlockStatement",
        "start": 328,
        "end": 454,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 332,
            "end": 381,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 338,
                "end": 381,
                "id": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 348,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 341,
                    "end": 348,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 343,
                      "end": 348,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 343,
                        "end": 346
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 351,
                  "end": 381,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 351,
                    "end": 353,
                    "elements": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 378,
                      "name": "HomomorphicMappedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 378,
                      "end": 381,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 379,
                          "end": 380,
                          "typeName": {
                            "type": "Identifier",
                            "start": 379,
                            "end": 380,
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 393,
            "end": 452,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 399,
                "end": 452,
                "id": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 419,
                  "name": "arr2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 419,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 405,
                      "end": 419,
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 414,
                        "end": 419,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 414,
                          "end": 417
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 422,
                  "end": 452,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 422,
                    "end": 424,
                    "elements": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 428,
                    "end": 452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 449,
                      "name": "HomomorphicMappedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 449,
                      "end": 452,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 450,
                          "end": 451,
                          "typeName": {
                            "type": "Identifier",
                            "start": 450,
                            "end": 451,
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 317,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 289,
              "end": 317,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 289,
                  "end": 297,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 290,
                      "end": 296
                    }
                  ]
                },
                {
                  "type": "TSTypeOperator",
                  "start": 300,
                  "end": 317,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 309,
                    "end": 317,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 310,
                        "end": 316
                      }
                    ]
                  }
                }
              ]
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
