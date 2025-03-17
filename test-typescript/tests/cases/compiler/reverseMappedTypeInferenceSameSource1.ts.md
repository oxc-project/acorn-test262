__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 849,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 41,
        "end": 55,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 53,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 80,
        "name": "UnknownAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "name": "Action",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 132,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 100,
            "end": 130,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 119,
                "name": "extraProps",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 129,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 122,
                "end": 129
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 145,
        "name": "Reducer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 150,
              "end": 153
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 187,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 187,
                "name": "UnknownAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 191,
        "end": 236,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 215,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 215,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 202,
                "end": 215,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 202,
                    "end": 203,
                    "typeName": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 206,
                    "end": 215
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 219,
            "end": 228,
            "name": "action",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "name": "A",
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
          "start": 232,
          "end": 236,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 235,
            "end": 236,
            "typeName": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "S",
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
      "type": "TSTypeAliasDeclaration",
      "start": 239,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 261,
        "name": "ReducersMapObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 261,
        "end": 304,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 266,
              "end": 269
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 303,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 303,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 303,
                "name": "UnknownAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 307,
        "end": 346,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 312,
          "end": 324,
          "name": {
            "type": "Identifier",
            "start": 312,
            "end": 313,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 317,
            "end": 324,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 323,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "S",
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
          "start": 327,
          "end": 343,
          "typeName": {
            "type": "Identifier",
            "start": 327,
            "end": 334,
            "name": "Reducer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 334,
            "end": 343,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 335,
                "end": 339,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 335,
                  "end": 336,
                  "typeName": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 336,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 337,
                  "end": 338,
                  "typeName": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 317,
          "end": 324,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 323,
            "end": 324,
            "typeName": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 349,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 380,
        "name": "ConfigureStoreOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 380,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 381,
            "end": 388,
            "name": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 385,
              "end": 388
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 390,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 400,
              "end": 406,
              "typeName": {
                "type": "Identifier",
                "start": 400,
                "end": 406,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 409,
              "end": 422,
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 422,
                "name": "UnknownAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 424,
        "end": 479,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 428,
            "end": 477,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 428,
              "end": 435,
              "name": "reducer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 476,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 437,
                "end": 476,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 437,
                    "end": 450,
                    "typeName": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 444,
                      "name": "Reducer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 444,
                      "end": 450,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 445,
                          "end": 446,
                          "typeName": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 446,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 448,
                          "end": 449,
                          "typeName": {
                            "type": "Identifier",
                            "start": 448,
                            "end": 449,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 453,
                    "end": 476,
                    "typeName": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 470,
                      "name": "ReducersMapObject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 470,
                      "end": 476,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 471,
                          "end": 472,
                          "typeName": {
                            "type": "Identifier",
                            "start": 471,
                            "end": 472,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 474,
                          "end": 475,
                          "typeName": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 481,
      "end": 605,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 512,
        "name": "configureStore",
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
          "start": 559,
          "end": 595,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 566,
            "end": 595,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 568,
              "end": 595,
              "typeName": {
                "type": "Identifier",
                "start": 568,
                "end": 589,
                "name": "ConfigureStoreOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 589,
                "end": 595,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 591,
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 591,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 593,
                    "end": 594,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "name": "A",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 512,
        "end": 555,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 513,
            "end": 520,
            "name": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 517,
              "end": 520
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 522,
            "end": 554,
            "name": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 538,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 538,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 541,
              "end": 554,
              "typeName": {
                "type": "Identifier",
                "start": 541,
                "end": 554,
                "name": "UnknownAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 598,
        "end": 604,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 600,
          "end": 604
        }
      }
    },
    {
      "type": "BlockStatement",
      "start": 607,
      "end": 700,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 611,
          "end": 652,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 617,
              "end": 651,
              "id": {
                "type": "Identifier",
                "start": 617,
                "end": 641,
                "name": "reducer",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 624,
                  "end": 641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 626,
                    "end": 641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 633,
                      "name": "Reducer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 633,
                      "end": 641,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 634,
                          "end": 640
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 644,
                "end": 651,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 650,
                  "end": 651,
                  "value": 0,
                  "raw": "0"
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
          "start": 655,
          "end": 698,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 661,
              "end": 697,
              "id": {
                "type": "Identifier",
                "start": 661,
                "end": 667,
                "name": "store1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "CallExpression",
                "start": 670,
                "end": 697,
                "callee": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 684,
                  "name": "configureStore",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 685,
                    "end": 696,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 687,
                        "end": 694,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "name": "reducer",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "name": "reducer",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 702,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 750,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 740,
            "name": "counterReducer1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 740,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 725,
                "end": 740,
                "typeName": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 732,
                  "name": "Reducer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 732,
                  "end": 740,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 733,
                      "end": 739
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 743,
            "end": 750,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 749,
              "end": 750,
              "value": 0,
              "raw": "0"
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
      "start": 753,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 759,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 759,
            "end": 765,
            "name": "store2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 768,
            "end": 836,
            "callee": {
              "type": "Identifier",
              "start": 768,
              "end": 782,
              "name": "configureStore",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 783,
                "end": 835,
                "properties": [
                  {
                    "type": "Property",
                    "start": 787,
                    "end": 832,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 794,
                      "name": "reducer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 796,
                      "end": 832,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 802,
                          "end": 827,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 802,
                            "end": 810,
                            "name": "counter1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 827,
                            "name": "counterReducer1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 839,
      "end": 848,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
