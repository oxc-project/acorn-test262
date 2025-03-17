__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 1071,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "name": "Methods",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 49,
        "end": 110,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 52,
          "end": 64,
          "name": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "start": 52,
          "end": 53,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "Methods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Filter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 219,
        "end": 280,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 222,
          "end": 234,
          "name": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "start": 222,
          "end": 223,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "Modify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 345,
        "end": 404,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 348,
          "end": 360,
          "name": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "start": 348,
          "end": 349,
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
      "start": 407,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 419,
        "name": "fun",
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
          "start": 423,
          "end": 429,
          "name": "val",
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
        "start": 431,
        "end": 505,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 460,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 459,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 453,
                  "name": "x",
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
                        "name": "Filter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 456,
                  "end": 459,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 471,
            "end": 494,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 475,
                "end": 493,
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 487,
                  "name": "y",
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
                        "name": "Modify",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 525,
        "name": "FilterInclOpt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 531,
        "end": 594,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 534,
          "end": 546,
          "name": {
            "type": "Identifier",
            "start": 534,
            "end": 535,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": null,
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
          "start": 534,
          "end": 535,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "ModifyInclOpt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 620,
        "end": 686,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 623,
          "end": 635,
          "name": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": null,
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
          "start": 623,
          "end": 624,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "FilterExclOpt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 712,
        "end": 775,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 715,
          "end": 727,
          "name": {
            "type": "Identifier",
            "start": 715,
            "end": 716,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": null,
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
          "start": 715,
          "end": 716,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "name": "ModifyExclOpt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "start": 801,
        "end": 867,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 804,
          "end": 816,
          "name": {
            "type": "Identifier",
            "start": 804,
            "end": 805,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": null,
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
          "start": 804,
          "end": 805,
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
      "start": 870,
      "end": 1068,
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 883,
        "name": "fun2",
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
          "start": 887,
          "end": 893,
          "name": "val",
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
        "start": 895,
        "end": 1068,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 901,
            "end": 931,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 905,
                "end": 930,
                "id": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 924,
                  "name": "x",
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
                        "name": "FilterInclOpt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 927,
                  "end": 930,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 942,
            "end": 972,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 946,
                "end": 971,
                "id": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 965,
                  "name": "y",
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
                        "name": "ModifyInclOpt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 968,
                  "end": 971,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 983,
            "end": 1013,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 987,
                "end": 1012,
                "id": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 1006,
                  "name": "z",
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
                        "name": "FilterExclOpt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1012,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1027,
            "end": 1057,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1056,
                "id": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1050,
                  "name": "w",
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
                        "name": "ModifyExclOpt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "type": "Identifier",
                  "start": 1053,
                  "end": 1056,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
