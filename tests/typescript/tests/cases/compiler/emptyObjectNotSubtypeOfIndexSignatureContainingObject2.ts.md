__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 120,
  "end": 1095,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 120,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 140,
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 169,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 148,
            "end": 167,
            "parameters": [
              {
                "type": "Identifier",
                "start": 149,
                "end": 162,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 171,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 198,
        "decorators": [],
        "name": "NumericDictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 198,
        "end": 201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 199,
            "end": 200,
            "name": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 202,
        "end": 227,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 206,
            "end": 225,
            "parameters": [
              {
                "type": "Identifier",
                "start": 207,
                "end": 220,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 212,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 214,
                    "end": 220
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 229,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 248,
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 248,
        "end": 266,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 256,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 256,
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 265,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 265,
              "decorators": [],
              "name": "TResult",
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
        "type": "TSFunctionType",
        "start": 269,
        "end": 353,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 273,
            "end": 302,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 302,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 280,
                "end": 302,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 280,
                  "end": 287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 287,
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 288,
                  "end": 301,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 294,
                    "end": 301,
                    "typeName": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 301,
                      "decorators": [],
                      "name": "TObject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 306,
            "end": 317,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 317,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              }
            }
          },
          {
            "type": "Identifier",
            "start": 321,
            "end": 340,
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 340,
                  "decorators": [],
                  "name": "TObject",
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
          "start": 343,
          "end": 353,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 346,
            "end": 353,
            "typeName": {
              "type": "Identifier",
              "start": 346,
              "end": 353,
              "decorators": [],
              "name": "TResult",
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
      "start": 356,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 379,
        "decorators": [],
        "name": "DictionaryIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 379,
        "end": 391,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 380,
            "end": 381,
            "name": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 390,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 390,
              "decorators": [],
              "name": "TResult",
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
        "type": "TSTypeReference",
        "start": 394,
        "end": 432,
        "typeName": {
          "type": "Identifier",
          "start": 394,
          "end": 408,
          "decorators": [],
          "name": "ObjectIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 408,
          "end": 432,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 409,
              "end": 422,
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 419,
                "decorators": [],
                "name": "Dictionary",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 419,
                "end": 422,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 421,
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 421,
                      "decorators": [],
                      "name": "T",
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
              "start": 424,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 431,
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 529,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 547,
        "decorators": [],
        "name": "mapValues",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 547,
        "end": 559,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 548,
            "end": 549,
            "name": {
              "type": "Identifier",
              "start": 548,
              "end": 549,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 551,
            "end": 558,
            "name": {
              "type": "Identifier",
              "start": 551,
              "end": 558,
              "decorators": [],
              "name": "TResult",
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
          "start": 563,
          "end": 623,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 566,
            "end": 623,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 568,
              "end": 623,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 568,
                  "end": 581,
                  "typeName": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 578,
                    "decorators": [],
                    "name": "Dictionary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 578,
                    "end": 581,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 579,
                        "end": 580,
                        "typeName": {
                          "type": "Identifier",
                          "start": 579,
                          "end": 580,
                          "decorators": [],
                          "name": "T",
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
                  "start": 584,
                  "end": 604,
                  "typeName": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 601,
                    "decorators": [],
                    "name": "NumericDictionary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 601,
                    "end": 604,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 602,
                        "end": 603,
                        "typeName": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 603,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 607,
                  "end": 611
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 614,
                  "end": 623
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 627,
          "end": 667,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 635,
            "end": 667,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 637,
              "end": 667,
              "typeName": {
                "type": "Identifier",
                "start": 637,
                "end": 655,
                "decorators": [],
                "name": "DictionaryIterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 655,
                "end": 667,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 656,
                    "end": 657,
                    "typeName": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 657,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 659,
                    "end": 666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 666,
                      "decorators": [],
                      "name": "TResult",
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
        "start": 669,
        "end": 690,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 671,
          "end": 690,
          "typeName": {
            "type": "Identifier",
            "start": 671,
            "end": 681,
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 681,
            "end": 690,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 682,
                "end": 689,
                "typeName": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 689,
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 691,
        "end": 716,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 695,
            "end": 714,
            "argument": {
              "type": "TSAsExpression",
              "start": 702,
              "end": 713,
              "expression": {
                "type": "Literal",
                "start": 702,
                "end": 706,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 710,
                "end": 713
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 744,
      "end": 776,
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 757,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 758,
        "end": 776,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 762,
            "end": 774,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 762,
              "end": 765,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 773,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 767,
                "end": 773
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
      "start": 778,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 788,
        "end": 791,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 792,
        "end": 810,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 796,
            "end": 808,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 796,
              "end": 799,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 799,
              "end": 807,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 801,
                "end": 807
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
      "type": "ExportNamedDeclaration",
      "start": 812,
      "end": 1095,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 819,
        "end": 1095,
        "id": {
          "type": "Identifier",
          "start": 828,
          "end": 836,
          "decorators": [],
          "name": "fooToBar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 840,
            "end": 865,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 865,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 846,
                "end": 865,
                "typeName": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 852,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 852,
                  "end": 865,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 853,
                      "end": 859
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 861,
                      "end": 864,
                      "typeName": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 864,
                        "decorators": [],
                        "name": "Foo",
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
          "start": 867,
          "end": 895,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 869,
            "end": 895,
            "typeName": {
              "type": "Identifier",
              "start": 869,
              "end": 875,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 875,
              "end": 895,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 876,
                  "end": 882
                },
                {
                  "type": "TSUnionType",
                  "start": 884,
                  "end": 894,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 884,
                      "end": 887,
                      "typeName": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 887,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 890,
                      "end": 894
                    }
                  ]
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 896,
          "end": 1095,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 900,
              "end": 940,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 906,
                  "end": 939,
                  "id": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 909,
                    "decorators": [],
                    "name": "wat",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 912,
                    "end": 939,
                    "callee": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 921,
                      "decorators": [],
                      "name": "mapValues",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 922,
                        "end": 926,
                        "decorators": [],
                        "name": "foos",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 928,
                        "end": 938,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 928,
                            "end": 929,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "start": 933,
                          "end": 938,
                          "object": {
                            "type": "Identifier",
                            "start": 933,
                            "end": 934,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 938,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "id": null,
                        "generator": false
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
              "type": "VariableDeclaration",
              "start": 943,
              "end": 1006,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 949,
                  "end": 1005,
                  "id": {
                    "type": "Identifier",
                    "start": 949,
                    "end": 955,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 958,
                    "end": 1005,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 958,
                      "end": 970,
                      "left": {
                        "type": "Identifier",
                        "start": 958,
                        "end": 962,
                        "decorators": [],
                        "name": "foos",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 966,
                        "end": 970,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "consequent": {
                      "type": "ObjectExpression",
                      "start": 973,
                      "end": 975,
                      "properties": []
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "start": 978,
                      "end": 1005,
                      "callee": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 987,
                        "decorators": [],
                        "name": "mapValues",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 988,
                          "end": 992,
                          "decorators": [],
                          "name": "foos",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 994,
                          "end": 1004,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 994,
                              "end": 995,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "start": 999,
                            "end": 1004,
                            "object": {
                              "type": "Identifier",
                              "start": 999,
                              "end": 1000,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1001,
                              "end": 1004,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 1079,
              "end": 1093,
              "argument": {
                "type": "Identifier",
                "start": 1086,
                "end": 1092,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
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
