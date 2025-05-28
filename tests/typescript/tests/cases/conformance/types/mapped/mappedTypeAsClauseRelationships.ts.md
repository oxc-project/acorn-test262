__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 1070,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "Methods",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 49,
        "end": 110,
        "key": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 57,
          "end": 64,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 63,
            "end": 64,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 68,
          "end": 101,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 68,
            "end": 72,
            "objectType": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 81,
            "end": 89,
            "typeName": {
              "type": "Identifier",
              "start": 81,
              "end": 89,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 92,
            "end": 93,
            "typeName": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 96,
            "end": 101
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 104,
          "end": 108,
          "objectType": {
            "type": "TSTypeReference",
            "start": 104,
            "end": 105,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 106,
            "end": 107,
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 118,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSIndexedAccessType",
        "start": 124,
        "end": 143,
        "objectType": {
          "type": "TSTypeReference",
          "start": 124,
          "end": 125,
          "typeName": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 126,
          "end": 142,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 132,
            "end": 142,
            "typeName": {
              "type": "Identifier",
              "start": 132,
              "end": 139,
              "decorators": [],
              "name": "Methods",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 139,
              "end": 142,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 202,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 213,
        "decorators": [],
        "name": "Filter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 219,
        "end": 280,
        "key": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 227,
          "end": 234,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 233,
            "end": 234,
            "typeName": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 238,
          "end": 271,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 238,
            "end": 242,
            "objectType": {
              "type": "TSTypeReference",
              "start": 238,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 251,
            "end": 259,
            "typeName": {
              "type": "Identifier",
              "start": 251,
              "end": 259,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 262,
            "end": 263,
            "typeName": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 266,
            "end": 271
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 274,
          "end": 278,
          "objectType": {
            "type": "TSTypeReference",
            "start": 274,
            "end": 275,
            "typeName": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 276,
            "end": 277,
            "typeName": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 328,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 339,
        "decorators": [],
        "name": "Modify",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 339,
        "end": 342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 340,
            "end": 341,
            "name": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 345,
        "end": 404,
        "key": {
          "type": "Identifier",
          "start": 348,
          "end": 349,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 353,
          "end": 360,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 359,
            "end": 360,
            "typeName": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 364,
          "end": 395,
          "checkType": {
            "type": "TSTypeReference",
            "start": 364,
            "end": 365,
            "typeName": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 374,
            "end": 380
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 382,
            "end": 392,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 382,
                "end": 389,
                "value": {
                  "cooked": "bool",
                  "raw": "bool"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 390,
                "end": 392,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 389,
                "end": 390,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 390,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 394,
            "end": 395,
            "typeName": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 398,
          "end": 402,
          "objectType": {
            "type": "TSTypeReference",
            "start": 398,
            "end": 399,
            "typeName": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 400,
            "end": 401,
            "typeName": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 407,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 419,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 419,
        "end": 422,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 420,
            "end": 421,
            "name": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 423,
          "end": 429,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 426,
            "end": 429,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 428,
              "end": 429,
              "typeName": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 431,
        "end": 505,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 460,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 459,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 453,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 453,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 450,
                        "decorators": [],
                        "name": "Filter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 450,
                        "end": 453,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 451,
                            "end": 452,
                            "typeName": {
                              "type": "Identifier",
                              "start": 451,
                              "end": 452,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 459,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 471,
            "end": 494,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 475,
                "end": 493,
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 487,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 487,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 487,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 484,
                        "decorators": [],
                        "name": "Modify",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 484,
                        "end": 487,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 485,
                            "end": 486,
                            "typeName": {
                              "type": "Identifier",
                              "start": 485,
                              "end": 486,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 525,
        "decorators": [],
        "name": "FilterInclOpt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 525,
        "end": 528,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 527,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 531,
        "end": 594,
        "key": {
          "type": "Identifier",
          "start": 534,
          "end": 535,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 539,
          "end": 546,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 545,
            "end": 546,
            "typeName": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 550,
          "end": 583,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 550,
            "end": 554,
            "objectType": {
              "type": "TSTypeReference",
              "start": 550,
              "end": 551,
              "typeName": {
                "type": "Identifier",
                "start": 550,
                "end": 551,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 552,
              "end": 553,
              "typeName": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 563,
            "end": 571,
            "typeName": {
              "type": "Identifier",
              "start": 563,
              "end": 571,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 574,
            "end": 575,
            "typeName": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 578,
            "end": 583
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 588,
          "end": 592,
          "objectType": {
            "type": "TSTypeReference",
            "start": 588,
            "end": 589,
            "typeName": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 590,
            "end": 591,
            "typeName": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 596,
      "end": 687,
      "id": {
        "type": "Identifier",
        "start": 601,
        "end": 614,
        "decorators": [],
        "name": "ModifyInclOpt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 614,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 615,
            "end": 616,
            "name": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 620,
        "end": 686,
        "key": {
          "type": "Identifier",
          "start": 623,
          "end": 624,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 628,
          "end": 635,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 634,
            "end": 635,
            "typeName": {
              "type": "Identifier",
              "start": 634,
              "end": 635,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 639,
          "end": 674,
          "checkType": {
            "type": "TSTypeReference",
            "start": 639,
            "end": 640,
            "typeName": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 649,
            "end": 655
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 657,
            "end": 667,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 657,
                "end": 664,
                "value": {
                  "cooked": "bool",
                  "raw": "bool"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 665,
                "end": 667,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 664,
                "end": 665,
                "typeName": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 669,
            "end": 674
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 680,
          "end": 684,
          "objectType": {
            "type": "TSTypeReference",
            "start": 680,
            "end": 681,
            "typeName": {
              "type": "Identifier",
              "start": 680,
              "end": 681,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 682,
            "end": 683,
            "typeName": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 688,
      "end": 776,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 706,
        "decorators": [],
        "name": "FilterExclOpt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 706,
        "end": 709,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 707,
            "end": 708,
            "name": {
              "type": "Identifier",
              "start": 707,
              "end": 708,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 712,
        "end": 775,
        "key": {
          "type": "Identifier",
          "start": 715,
          "end": 716,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 720,
          "end": 727,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 726,
            "end": 727,
            "typeName": {
              "type": "Identifier",
              "start": 726,
              "end": 727,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 731,
          "end": 764,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 731,
            "end": 735,
            "objectType": {
              "type": "TSTypeReference",
              "start": 731,
              "end": 732,
              "typeName": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 733,
              "end": 734,
              "typeName": {
                "type": "Identifier",
                "start": 733,
                "end": 734,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 744,
            "end": 752,
            "typeName": {
              "type": "Identifier",
              "start": 744,
              "end": 752,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 755,
            "end": 756,
            "typeName": {
              "type": "Identifier",
              "start": 755,
              "end": 756,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 759,
            "end": 764
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 769,
          "end": 773,
          "objectType": {
            "type": "TSTypeReference",
            "start": 769,
            "end": 770,
            "typeName": {
              "type": "Identifier",
              "start": 769,
              "end": 770,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 771,
            "end": 772,
            "typeName": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 777,
      "end": 868,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 795,
        "decorators": [],
        "name": "ModifyExclOpt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 795,
        "end": 798,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 796,
            "end": 797,
            "name": {
              "type": "Identifier",
              "start": 796,
              "end": 797,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 801,
        "end": 867,
        "key": {
          "type": "Identifier",
          "start": 804,
          "end": 805,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 809,
          "end": 816,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 815,
            "end": 816,
            "typeName": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 820,
          "end": 855,
          "checkType": {
            "type": "TSTypeReference",
            "start": 820,
            "end": 821,
            "typeName": {
              "type": "Identifier",
              "start": 820,
              "end": 821,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 830,
            "end": 836
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "start": 838,
            "end": 848,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 838,
                "end": 845,
                "value": {
                  "cooked": "bool",
                  "raw": "bool"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 846,
                "end": 848,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 845,
                "end": 846,
                "typeName": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 846,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 850,
            "end": 855
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 861,
          "end": 865,
          "objectType": {
            "type": "TSTypeReference",
            "start": 861,
            "end": 862,
            "typeName": {
              "type": "Identifier",
              "start": 861,
              "end": 862,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 863,
            "end": 864,
            "typeName": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 870,
      "end": 1068,
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 883,
        "decorators": [],
        "name": "fun2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 883,
        "end": 886,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 884,
            "end": 885,
            "name": {
              "type": "Identifier",
              "start": 884,
              "end": 885,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 887,
          "end": 893,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 890,
            "end": 893,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 892,
              "end": 893,
              "typeName": {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 895,
        "end": 1068,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 901,
            "end": 931,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 905,
                "end": 930,
                "id": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 924,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 906,
                    "end": 924,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 908,
                      "end": 924,
                      "typeName": {
                        "type": "Identifier",
                        "start": 908,
                        "end": 921,
                        "decorators": [],
                        "name": "FilterInclOpt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 921,
                        "end": 924,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 922,
                            "end": 923,
                            "typeName": {
                              "type": "Identifier",
                              "start": 922,
                              "end": 923,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 930,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 942,
            "end": 972,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 946,
                "end": 971,
                "id": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 965,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 947,
                    "end": 965,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 949,
                      "end": 965,
                      "typeName": {
                        "type": "Identifier",
                        "start": 949,
                        "end": 962,
                        "decorators": [],
                        "name": "ModifyInclOpt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 962,
                        "end": 965,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 963,
                            "end": 964,
                            "typeName": {
                              "type": "Identifier",
                              "start": 963,
                              "end": 964,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 971,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 983,
            "end": 1013,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 987,
                "end": 1012,
                "id": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 1006,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 988,
                    "end": 1006,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 990,
                      "end": 1006,
                      "typeName": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 1003,
                        "decorators": [],
                        "name": "FilterExclOpt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1003,
                        "end": 1006,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1004,
                            "end": 1005,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1004,
                              "end": 1005,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1012,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1027,
            "end": 1057,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1056,
                "id": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1050,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1032,
                    "end": 1050,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1034,
                      "end": 1050,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1034,
                        "end": 1047,
                        "decorators": [],
                        "name": "ModifyExclOpt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1047,
                        "end": 1050,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1048,
                            "end": 1049,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1048,
                              "end": 1049,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1053,
                  "end": 1056,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
