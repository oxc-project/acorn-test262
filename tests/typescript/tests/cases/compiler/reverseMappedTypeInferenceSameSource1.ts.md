__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 848,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "UnknownAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
                "decorators": [],
                "name": "extraProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  }
                }
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
        "decorators": [],
        "name": "Reducer",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null
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
            "decorators": [],
            "name": "state",
            "optional": false,
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
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          {
            "type": "Identifier",
            "start": 219,
            "end": 228,
            "decorators": [],
            "name": "action",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "ReducersMapObject",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null
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
        "key": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
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
            "decorators": [],
            "name": "Reducer",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
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
        "decorators": [],
        "name": "ConfigureStoreOptions",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 400,
              "end": 406,
              "typeName": {
                "type": "Identifier",
                "start": 400,
                "end": 406,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "reducer",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Reducer",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ReducersMapObject",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
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
        "decorators": [],
        "name": "configureStore",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 538,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 538,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 559,
          "end": 595,
          "decorators": [],
          "name": "options",
          "optional": false,
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
                "decorators": [],
                "name": "ConfigureStoreOptions",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 598,
        "end": 604,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 600,
          "end": 604
        }
      },
      "body": null,
      "expression": false
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
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 617,
              "end": 651,
              "id": {
                "type": "Identifier",
                "start": 617,
                "end": 641,
                "decorators": [],
                "name": "reducer",
                "optional": false,
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
                      "decorators": [],
                      "name": "Reducer",
                      "optional": false,
                      "typeAnnotation": null
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
                }
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 644,
                "end": 651,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 650,
                  "end": 651,
                  "value": 0,
                  "raw": "0"
                },
                "id": null,
                "generator": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 655,
          "end": 698,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 661,
              "end": 697,
              "id": {
                "type": "Identifier",
                "start": 661,
                "end": 667,
                "decorators": [],
                "name": "store1",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 670,
                "end": 697,
                "callee": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 684,
                  "decorators": [],
                  "name": "configureStore",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 702,
      "end": 751,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 750,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 740,
            "decorators": [],
            "name": "counterReducer1",
            "optional": false,
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
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 743,
            "end": 750,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 749,
              "end": 750,
              "value": 0,
              "raw": "0"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 753,
      "end": 837,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 759,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 759,
            "end": 765,
            "decorators": [],
            "name": "store2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 768,
            "end": 836,
            "callee": {
              "type": "Identifier",
              "start": 768,
              "end": 782,
              "decorators": [],
              "name": "configureStore",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 794,
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 802,
                            "end": 810,
                            "decorators": [],
                            "name": "counter1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 827,
                            "decorators": [],
                            "name": "counterReducer1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 839,
      "end": 848,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
