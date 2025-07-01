__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 140
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 141,
            "end": 142
          }
        ],
        "start": 140,
        "end": 143
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  },
                  "start": 154,
                  "end": 162
                },
                "start": 149,
                "end": 162
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 148,
            "end": 167
          }
        ],
        "start": 144,
        "end": 169
      },
      "declare": false,
      "start": 120,
      "end": 169
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 198
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          }
        ],
        "start": 198,
        "end": 201
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 214,
                    "end": 220
                  },
                  "start": 212,
                  "end": 220
                },
                "start": 207,
                "end": 220
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              "start": 221,
              "end": 224
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 206,
            "end": 225
          }
        ],
        "start": 202,
        "end": 227
      },
      "declare": false,
      "start": 171,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 248
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 256
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 265
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 258,
            "end": 265
          }
        ],
        "start": 248,
        "end": 266
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 287
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 301
                    },
                    "typeArguments": null,
                    "start": 294,
                    "end": 301
                  },
                  "start": 288,
                  "end": 301
                },
                "start": 280,
                "end": 302
              },
              "start": 278,
              "end": 302
            },
            "start": 273,
            "end": 302
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "start": 306,
            "end": 317
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "collection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 340
                },
                "typeArguments": null,
                "start": 333,
                "end": 340
              },
              "start": 331,
              "end": 340
            },
            "start": 321,
            "end": 340
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 353
            },
            "typeArguments": null,
            "start": 346,
            "end": 353
          },
          "start": 343,
          "end": 353
        },
        "start": 269,
        "end": 353
      },
      "declare": false,
      "start": 229,
      "end": 354
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DictionaryIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 379
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 380,
            "end": 381
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 390
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 390
          }
        ],
        "start": 379,
        "end": 391
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 408
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dictionary",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    },
                    "typeArguments": null,
                    "start": 420,
                    "end": 421
                  }
                ],
                "start": 419,
                "end": 422
              },
              "start": 409,
              "end": 422
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 431
              },
              "typeArguments": null,
              "start": 424,
              "end": 431
            }
          ],
          "start": 408,
          "end": 432
        },
        "start": 394,
        "end": 432
      },
      "declare": false,
      "start": 356,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 547
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 549
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 548,
            "end": 549
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 558
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 551,
            "end": 558
          }
        ],
        "start": 547,
        "end": 559
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 578
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 580
                        },
                        "typeArguments": null,
                        "start": 579,
                        "end": 580
                      }
                    ],
                    "start": 578,
                    "end": 581
                  },
                  "start": 568,
                  "end": 581
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumericDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 601
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 603
                        },
                        "typeArguments": null,
                        "start": 602,
                        "end": 603
                      }
                    ],
                    "start": 601,
                    "end": 604
                  },
                  "start": 584,
                  "end": 604
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
              ],
              "start": 568,
              "end": 623
            },
            "start": 566,
            "end": 623
          },
          "start": 563,
          "end": 623
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DictionaryIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 655
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 656,
                      "end": 657
                    },
                    "typeArguments": null,
                    "start": 656,
                    "end": 657
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 659,
                    "end": 666
                  }
                ],
                "start": 655,
                "end": 667
              },
              "start": 637,
              "end": 667
            },
            "start": 635,
            "end": 667
          },
          "start": 627,
          "end": 667
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 681
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 689
                },
                "typeArguments": null,
                "start": 682,
                "end": 689
              }
            ],
            "start": 681,
            "end": 690
          },
          "start": 671,
          "end": 690
        },
        "start": 669,
        "end": 690
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 702,
                "end": 706
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 710,
                "end": 713
              },
              "start": 702,
              "end": 713
            },
            "start": 695,
            "end": 714
          }
        ],
        "start": 691,
        "end": 716
      },
      "expression": false,
      "start": 529,
      "end": 716
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 757
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 765
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 767,
                "end": 773
              },
              "start": 765,
              "end": 773
            },
            "accessibility": null,
            "static": false,
            "start": 762,
            "end": 774
          }
        ],
        "start": 758,
        "end": 776
      },
      "declare": false,
      "start": 744,
      "end": 776
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 791
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 799
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 801,
                "end": 807
              },
              "start": 799,
              "end": 807
            },
            "accessibility": null,
            "static": false,
            "start": 796,
            "end": 808
          }
        ],
        "start": 792,
        "end": 810
      },
      "declare": false,
      "start": 778,
      "end": 810
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooToBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 828,
          "end": 836
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 852
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 853,
                      "end": 859
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 861,
                        "end": 864
                      },
                      "typeArguments": null,
                      "start": 861,
                      "end": 864
                    }
                  ],
                  "start": 852,
                  "end": 865
                },
                "start": 846,
                "end": 865
              },
              "start": 844,
              "end": 865
            },
            "start": 840,
            "end": 865
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 875
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 876,
                  "end": 882
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 887
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 887
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 890,
                      "end": 894
                    }
                  ],
                  "start": 884,
                  "end": 894
                }
              ],
              "start": 875,
              "end": 895
            },
            "start": 869,
            "end": 895
          },
          "start": 867,
          "end": 895
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 909
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mapValues",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 912,
                      "end": 921
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foos",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 926
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 928,
                            "end": 929
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 933,
                            "end": 934
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 938
                          },
                          "optional": false,
                          "computed": false,
                          "start": 933,
                          "end": 938
                        },
                        "id": null,
                        "generator": false,
                        "start": 928,
                        "end": 938
                      }
                    ],
                    "optional": false,
                    "start": 912,
                    "end": 939
                  },
                  "definite": false,
                  "start": 906,
                  "end": 939
                }
              ],
              "declare": false,
              "start": 900,
              "end": 940
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 949,
                    "end": 955
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foos",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 958,
                        "end": 962
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 966,
                        "end": 970
                      },
                      "start": 958,
                      "end": 970
                    },
                    "consequent": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 973,
                      "end": 975
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapValues",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 987
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foos",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 988,
                          "end": 992
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 994,
                              "end": 995
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 999,
                              "end": 1000
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1001,
                              "end": 1004
                            },
                            "optional": false,
                            "computed": false,
                            "start": 999,
                            "end": 1004
                          },
                          "id": null,
                          "generator": false,
                          "start": 994,
                          "end": 1004
                        }
                      ],
                      "optional": false,
                      "start": 978,
                      "end": 1005
                    },
                    "start": 958,
                    "end": 1005
                  },
                  "definite": false,
                  "start": 949,
                  "end": 1005
                }
              ],
              "declare": false,
              "start": 943,
              "end": 1006
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1092
              },
              "start": 1079,
              "end": 1093
            }
          ],
          "start": 896,
          "end": 1095
        },
        "expression": false,
        "start": 819,
        "end": 1095
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 812,
      "end": 1095
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 120,
  "end": 1095
}
```
