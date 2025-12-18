__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fAsync",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 21
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 102,
                  "end": 103
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 105,
                  "end": 109
                }
              ],
              "start": 101,
              "end": 110
            },
            "start": 94,
            "end": 111
          }
        ],
        "start": 24,
        "end": 113
      },
      "expression": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fAsyncExplicit",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 144
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 155
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 157,
                    "end": 163
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ],
                "start": 156,
                "end": 173
              }
            ],
            "start": 155,
            "end": 174
          },
          "start": 148,
          "end": 174
        },
        "start": 146,
        "end": 174
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 235,
                  "end": 236
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 238,
                  "end": 242
                }
              ],
              "start": 234,
              "end": 243
            },
            "start": 227,
            "end": 244
          }
        ],
        "start": 175,
        "end": 246
      },
      "expression": false,
      "start": 115,
      "end": 246
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 317
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
              "name": "stringProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              },
              "start": 334,
              "end": 342
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 343
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
              },
              "start": 355,
              "end": 360
            },
            "accessibility": null,
            "static": false,
            "start": 348,
            "end": 361
          }
        ],
        "start": 318,
        "end": 363
      },
      "declare": false,
      "start": 304,
      "end": 363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 405
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 414
              },
              "typeArguments": null,
              "start": 411,
              "end": 414
            },
            "start": 409,
            "end": 414
          },
          "start": 406,
          "end": 414
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 424
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 428
                  },
                  "typeArguments": null,
                  "start": 425,
                  "end": 428
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 429,
                    "end": 441
                  },
                  "start": 429,
                  "end": 441
                },
                "start": 425,
                "end": 442
              }
            ],
            "start": 424,
            "end": 443
          },
          "start": 417,
          "end": 443
        },
        "start": 415,
        "end": 443
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 460
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 471
              },
              "optional": false,
              "computed": false,
              "start": 457,
              "end": 471
            },
            "start": 450,
            "end": 472
          }
        ],
        "start": 444,
        "end": 474
      },
      "expression": false,
      "start": 365,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForPromiseOfStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 525
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 534
              },
              "typeArguments": null,
              "start": 531,
              "end": 534
            },
            "start": 529,
            "end": 534
          },
          "start": 526,
          "end": 534
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 544
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 548
                  },
                  "typeArguments": null,
                  "start": 545,
                  "end": 548
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 549,
                    "end": 561
                  },
                  "start": 549,
                  "end": 561
                },
                "start": 545,
                "end": 562
              }
            ],
            "start": 544,
            "end": 563
          },
          "start": 537,
          "end": 563
        },
        "start": 535,
        "end": 563
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 584
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 592
                },
                "optional": false,
                "computed": false,
                "start": 577,
                "end": 592
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 596
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 607
                  },
                  "optional": false,
                  "computed": false,
                  "start": 593,
                  "end": 607
                }
              ],
              "optional": false,
              "start": 577,
              "end": 608
            },
            "start": 570,
            "end": 609
          }
        ],
        "start": 564,
        "end": 611
      },
      "expression": false,
      "start": 476,
      "end": 611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForExplicitPromiseOfStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 670
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 679
              },
              "typeArguments": null,
              "start": 676,
              "end": 679
            },
            "start": 674,
            "end": 679
          },
          "start": 671,
          "end": 679
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 689
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 693
                  },
                  "typeArguments": null,
                  "start": 690,
                  "end": 693
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 694,
                    "end": 706
                  },
                  "start": 694,
                  "end": 706
                },
                "start": 690,
                "end": 707
              }
            ],
            "start": 689,
            "end": 708
          },
          "start": 682,
          "end": 708
        },
        "start": 680,
        "end": 708
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 729
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 730,
                  "end": 737
                },
                "optional": false,
                "computed": false,
                "start": 722,
                "end": 737
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 738,
                        "end": 741
                      },
                      "typeArguments": null,
                      "start": 738,
                      "end": 741
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "stringProp",
                        "raw": "\"stringProp\"",
                        "start": 742,
                        "end": 754
                      },
                      "start": 742,
                      "end": 754
                    },
                    "start": 738,
                    "end": 755
                  }
                ],
                "start": 737,
                "end": 756
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 757,
                    "end": 760
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 771
                  },
                  "optional": false,
                  "computed": false,
                  "start": 757,
                  "end": 771
                }
              ],
              "optional": false,
              "start": 722,
              "end": 772
            },
            "start": 715,
            "end": 773
          }
        ],
        "start": 709,
        "end": 775
      },
      "expression": false,
      "start": 613,
      "end": 775
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 792,
        "end": 814
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 823
              },
              "typeArguments": null,
              "start": 820,
              "end": 823
            },
            "start": 818,
            "end": 823
          },
          "start": 815,
          "end": 823
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 833
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 837
                  },
                  "typeArguments": null,
                  "start": 834,
                  "end": 837
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 838,
                    "end": 847
                  },
                  "start": 838,
                  "end": 847
                },
                "start": 834,
                "end": 848
              }
            ],
            "start": 833,
            "end": 849
          },
          "start": 826,
          "end": 849
        },
        "start": 824,
        "end": 849
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 866
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 874
              },
              "optional": false,
              "computed": false,
              "start": 863,
              "end": 874
            },
            "start": 856,
            "end": 875
          }
        ],
        "start": 850,
        "end": 877
      },
      "expression": false,
      "start": 777,
      "end": 877
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForPromiseOfAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 925
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 934
              },
              "typeArguments": null,
              "start": 931,
              "end": 934
            },
            "start": 929,
            "end": 934
          },
          "start": 926,
          "end": 934
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 937,
            "end": 944
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 948
                  },
                  "typeArguments": null,
                  "start": 945,
                  "end": 948
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 949,
                    "end": 958
                  },
                  "start": 949,
                  "end": 958
                },
                "start": 945,
                "end": 959
              }
            ],
            "start": 944,
            "end": 960
          },
          "start": 937,
          "end": 960
        },
        "start": 935,
        "end": 960
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 974,
                  "end": 981
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 982,
                  "end": 989
                },
                "optional": false,
                "computed": false,
                "start": 974,
                "end": 989
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 993
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 994,
                    "end": 1001
                  },
                  "optional": false,
                  "computed": false,
                  "start": 990,
                  "end": 1001
                }
              ],
              "optional": false,
              "start": 974,
              "end": 1002
            },
            "start": 967,
            "end": 1003
          }
        ],
        "start": 961,
        "end": 1005
      },
      "expression": false,
      "start": 879,
      "end": 1005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fIndexedTypeForExplicitPromiseOfAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1061
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1070
              },
              "typeArguments": null,
              "start": 1067,
              "end": 1070
            },
            "start": 1065,
            "end": 1070
          },
          "start": 1062,
          "end": 1070
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1080
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1084
                  },
                  "typeArguments": null,
                  "start": 1081,
                  "end": 1084
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 1085,
                    "end": 1094
                  },
                  "start": 1085,
                  "end": 1094
                },
                "start": 1081,
                "end": 1095
              }
            ],
            "start": 1080,
            "end": 1096
          },
          "start": 1073,
          "end": 1096
        },
        "start": 1071,
        "end": 1096
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1117
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1125
                },
                "optional": false,
                "computed": false,
                "start": 1110,
                "end": 1125
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1126,
                        "end": 1129
                      },
                      "typeArguments": null,
                      "start": 1126,
                      "end": 1129
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "anyProp",
                        "raw": "\"anyProp\"",
                        "start": 1130,
                        "end": 1139
                      },
                      "start": 1130,
                      "end": 1139
                    },
                    "start": 1126,
                    "end": 1140
                  }
                ],
                "start": 1125,
                "end": 1141
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1142,
                    "end": 1145
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1146,
                    "end": 1153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1142,
                  "end": 1153
                }
              ],
              "optional": false,
              "start": 1110,
              "end": 1154
            },
            "start": 1103,
            "end": 1155
          }
        ],
        "start": 1097,
        "end": 1157
      },
      "expression": false,
      "start": 1007,
      "end": 1157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1206
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1211
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1223
              },
              "typeArguments": null,
              "start": 1220,
              "end": 1223
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1207,
            "end": 1223
          }
        ],
        "start": 1206,
        "end": 1224
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1234
              },
              "typeArguments": null,
              "start": 1230,
              "end": 1234
            },
            "start": 1228,
            "end": 1234
          },
          "start": 1225,
          "end": 1234
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1244
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1249
                  },
                  "typeArguments": null,
                  "start": 1245,
                  "end": 1249
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 1250,
                    "end": 1262
                  },
                  "start": 1250,
                  "end": 1262
                },
                "start": 1245,
                "end": 1263
              }
            ],
            "start": 1244,
            "end": 1264
          },
          "start": 1237,
          "end": 1264
        },
        "start": 1235,
        "end": 1264
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1278,
                "end": 1281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1292
              },
              "optional": false,
              "computed": false,
              "start": 1278,
              "end": 1292
            },
            "start": 1271,
            "end": 1293
          }
        ],
        "start": 1265,
        "end": 1295
      },
      "expression": false,
      "start": 1159,
      "end": 1295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForPromiseOfStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1353
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1354,
              "end": 1358
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1367,
                "end": 1370
              },
              "typeArguments": null,
              "start": 1367,
              "end": 1370
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1354,
            "end": 1370
          }
        ],
        "start": 1353,
        "end": 1371
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1381
            },
            "start": 1375,
            "end": 1381
          },
          "start": 1372,
          "end": 1381
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1384,
            "end": 1391
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1392,
                    "end": 1396
                  },
                  "typeArguments": null,
                  "start": 1392,
                  "end": 1396
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 1397,
                    "end": 1409
                  },
                  "start": 1397,
                  "end": 1409
                },
                "start": 1392,
                "end": 1410
              }
            ],
            "start": 1391,
            "end": 1411
          },
          "start": 1384,
          "end": 1411
        },
        "start": 1382,
        "end": 1411
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1432
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1440
                },
                "optional": false,
                "computed": false,
                "start": 1425,
                "end": 1440
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1441,
                    "end": 1444
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1455
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1441,
                  "end": 1455
                }
              ],
              "optional": false,
              "start": 1425,
              "end": 1456
            },
            "start": 1418,
            "end": 1457
          }
        ],
        "start": 1412,
        "end": 1459
      },
      "expression": false,
      "start": 1297,
      "end": 1459
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForExplicitPromiseOfStringProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1476,
        "end": 1525
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1530
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1539,
                "end": 1542
              },
              "typeArguments": null,
              "start": 1539,
              "end": 1542
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1526,
            "end": 1542
          }
        ],
        "start": 1525,
        "end": 1543
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1549,
                "end": 1553
              },
              "typeArguments": null,
              "start": 1549,
              "end": 1553
            },
            "start": 1547,
            "end": 1553
          },
          "start": 1544,
          "end": 1553
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1556,
            "end": 1563
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1564,
                    "end": 1568
                  },
                  "typeArguments": null,
                  "start": 1564,
                  "end": 1568
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "stringProp",
                    "raw": "\"stringProp\"",
                    "start": 1569,
                    "end": 1581
                  },
                  "start": 1569,
                  "end": 1581
                },
                "start": 1564,
                "end": 1582
              }
            ],
            "start": 1563,
            "end": 1583
          },
          "start": 1556,
          "end": 1583
        },
        "start": 1554,
        "end": 1583
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1597,
                  "end": 1604
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1612
                },
                "optional": false,
                "computed": false,
                "start": 1597,
                "end": 1612
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1613,
                        "end": 1617
                      },
                      "typeArguments": null,
                      "start": 1613,
                      "end": 1617
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "stringProp",
                        "raw": "\"stringProp\"",
                        "start": 1618,
                        "end": 1630
                      },
                      "start": 1618,
                      "end": 1630
                    },
                    "start": 1613,
                    "end": 1631
                  }
                ],
                "start": 1612,
                "end": 1632
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1633,
                    "end": 1636
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1637,
                    "end": 1647
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1633,
                  "end": 1647
                }
              ],
              "optional": false,
              "start": 1597,
              "end": 1648
            },
            "start": 1590,
            "end": 1649
          }
        ],
        "start": 1584,
        "end": 1651
      },
      "expression": false,
      "start": 1461,
      "end": 1651
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1668,
        "end": 1697
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1698,
              "end": 1702
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1711,
                "end": 1714
              },
              "typeArguments": null,
              "start": 1711,
              "end": 1714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1698,
            "end": 1714
          }
        ],
        "start": 1697,
        "end": 1715
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1721,
                "end": 1725
              },
              "typeArguments": null,
              "start": 1721,
              "end": 1725
            },
            "start": 1719,
            "end": 1725
          },
          "start": 1716,
          "end": 1725
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1728,
            "end": 1735
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1736,
                    "end": 1740
                  },
                  "typeArguments": null,
                  "start": 1736,
                  "end": 1740
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 1741,
                    "end": 1750
                  },
                  "start": 1741,
                  "end": 1750
                },
                "start": 1736,
                "end": 1751
              }
            ],
            "start": 1735,
            "end": 1752
          },
          "start": 1728,
          "end": 1752
        },
        "start": 1726,
        "end": 1752
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1766,
                "end": 1769
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1777
              },
              "optional": false,
              "computed": false,
              "start": 1766,
              "end": 1777
            },
            "start": 1759,
            "end": 1778
          }
        ],
        "start": 1753,
        "end": 1780
      },
      "expression": false,
      "start": 1653,
      "end": 1780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForPromiseOfAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1835
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1836,
              "end": 1840
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1849,
                "end": 1852
              },
              "typeArguments": null,
              "start": 1849,
              "end": 1852
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1836,
            "end": 1852
          }
        ],
        "start": 1835,
        "end": 1853
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1859,
                "end": 1863
              },
              "typeArguments": null,
              "start": 1859,
              "end": 1863
            },
            "start": 1857,
            "end": 1863
          },
          "start": 1854,
          "end": 1863
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1866,
            "end": 1873
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1874,
                    "end": 1878
                  },
                  "typeArguments": null,
                  "start": 1874,
                  "end": 1878
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 1879,
                    "end": 1888
                  },
                  "start": 1879,
                  "end": 1888
                },
                "start": 1874,
                "end": 1889
              }
            ],
            "start": 1873,
            "end": 1890
          },
          "start": 1866,
          "end": 1890
        },
        "start": 1864,
        "end": 1890
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1904,
                  "end": 1911
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1912,
                  "end": 1919
                },
                "optional": false,
                "computed": false,
                "start": 1904,
                "end": 1919
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1920,
                    "end": 1923
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1924,
                    "end": 1931
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1920,
                  "end": 1931
                }
              ],
              "optional": false,
              "start": 1904,
              "end": 1932
            },
            "start": 1897,
            "end": 1933
          }
        ],
        "start": 1891,
        "end": 1935
      },
      "expression": false,
      "start": 1782,
      "end": 1935
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForExplicitPromiseOfAnyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1952,
        "end": 1998
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1999,
              "end": 2003
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2012,
                "end": 2015
              },
              "typeArguments": null,
              "start": 2012,
              "end": 2015
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1999,
            "end": 2015
          }
        ],
        "start": 1998,
        "end": 2016
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2022,
                "end": 2026
              },
              "typeArguments": null,
              "start": 2022,
              "end": 2026
            },
            "start": 2020,
            "end": 2026
          },
          "start": 2017,
          "end": 2026
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2029,
            "end": 2036
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2037,
                    "end": 2041
                  },
                  "typeArguments": null,
                  "start": 2037,
                  "end": 2041
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "anyProp",
                    "raw": "\"anyProp\"",
                    "start": 2042,
                    "end": 2051
                  },
                  "start": 2042,
                  "end": 2051
                },
                "start": 2037,
                "end": 2052
              }
            ],
            "start": 2036,
            "end": 2053
          },
          "start": 2029,
          "end": 2053
        },
        "start": 2027,
        "end": 2053
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2067,
                  "end": 2074
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2075,
                  "end": 2082
                },
                "optional": false,
                "computed": false,
                "start": 2067,
                "end": 2082
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2083,
                        "end": 2087
                      },
                      "typeArguments": null,
                      "start": 2083,
                      "end": 2087
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "anyProp",
                        "raw": "\"anyProp\"",
                        "start": 2088,
                        "end": 2097
                      },
                      "start": 2088,
                      "end": 2097
                    },
                    "start": 2083,
                    "end": 2098
                  }
                ],
                "start": 2082,
                "end": 2099
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2100,
                    "end": 2103
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anyProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2111
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2100,
                  "end": 2111
                }
              ],
              "optional": false,
              "start": 2067,
              "end": 2112
            },
            "start": 2060,
            "end": 2113
          }
        ],
        "start": 2054,
        "end": 2115
      },
      "expression": false,
      "start": 1937,
      "end": 2115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForKProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 2132,
        "end": 2159
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2160,
              "end": 2164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2173,
                "end": 2176
              },
              "typeArguments": null,
              "start": 2173,
              "end": 2176
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2160,
            "end": 2176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2178,
              "end": 2179
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2194,
                  "end": 2198
                },
                "typeArguments": null,
                "start": 2194,
                "end": 2198
              },
              "start": 2188,
              "end": 2198
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2178,
            "end": 2198
          }
        ],
        "start": 2159,
        "end": 2199
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2205,
                "end": 2209
              },
              "typeArguments": null,
              "start": 2205,
              "end": 2209
            },
            "start": 2203,
            "end": 2209
          },
          "start": 2200,
          "end": 2209
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "typeArguments": null,
              "start": 2216,
              "end": 2217
            },
            "start": 2214,
            "end": 2217
          },
          "start": 2211,
          "end": 2217
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2220,
            "end": 2227
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2228,
                    "end": 2232
                  },
                  "typeArguments": null,
                  "start": 2228,
                  "end": 2232
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2233,
                    "end": 2234
                  },
                  "typeArguments": null,
                  "start": 2233,
                  "end": 2234
                },
                "start": 2228,
                "end": 2235
              }
            ],
            "start": 2227,
            "end": 2236
          },
          "start": 2220,
          "end": 2236
        },
        "start": 2218,
        "end": 2236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2250,
                "end": 2253
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 2254,
                "end": 2257
              },
              "optional": false,
              "computed": true,
              "start": 2250,
              "end": 2258
            },
            "start": 2243,
            "end": 2259
          }
        ],
        "start": 2237,
        "end": 2261
      },
      "expression": false,
      "start": 2117,
      "end": 2261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForPromiseOfKProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 2278,
        "end": 2314
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2315,
              "end": 2319
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2328,
                "end": 2331
              },
              "typeArguments": null,
              "start": 2328,
              "end": 2331
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2315,
            "end": 2331
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2334
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2349,
                  "end": 2353
                },
                "typeArguments": null,
                "start": 2349,
                "end": 2353
              },
              "start": 2343,
              "end": 2353
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2333,
            "end": 2353
          }
        ],
        "start": 2314,
        "end": 2354
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2364
              },
              "typeArguments": null,
              "start": 2360,
              "end": 2364
            },
            "start": 2358,
            "end": 2364
          },
          "start": 2355,
          "end": 2364
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2372
              },
              "typeArguments": null,
              "start": 2371,
              "end": 2372
            },
            "start": 2369,
            "end": 2372
          },
          "start": 2366,
          "end": 2372
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2375,
            "end": 2382
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2383,
                    "end": 2387
                  },
                  "typeArguments": null,
                  "start": 2383,
                  "end": 2387
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2388,
                    "end": 2389
                  },
                  "typeArguments": null,
                  "start": 2388,
                  "end": 2389
                },
                "start": 2383,
                "end": 2390
              }
            ],
            "start": 2382,
            "end": 2391
          },
          "start": 2375,
          "end": 2391
        },
        "start": 2373,
        "end": 2391
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2405,
                  "end": 2412
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2413,
                  "end": 2420
                },
                "optional": false,
                "computed": false,
                "start": 2405,
                "end": 2420
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2421,
                    "end": 2424
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2425,
                    "end": 2428
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2421,
                  "end": 2429
                }
              ],
              "optional": false,
              "start": 2405,
              "end": 2430
            },
            "start": 2398,
            "end": 2431
          }
        ],
        "start": 2392,
        "end": 2433
      },
      "expression": false,
      "start": 2263,
      "end": 2433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fGenericIndexedTypeForExplicitPromiseOfKProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 2450,
        "end": 2494
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 2495,
              "end": 2499
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2508,
                "end": 2511
              },
              "typeArguments": null,
              "start": 2508,
              "end": 2511
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2495,
            "end": 2511
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2514
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2529,
                  "end": 2533
                },
                "typeArguments": null,
                "start": 2529,
                "end": 2533
              },
              "start": 2523,
              "end": 2533
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2513,
            "end": 2533
          }
        ],
        "start": 2494,
        "end": 2534
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2540,
                "end": 2544
              },
              "typeArguments": null,
              "start": 2540,
              "end": 2544
            },
            "start": 2538,
            "end": 2544
          },
          "start": 2535,
          "end": 2544
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2551,
                "end": 2552
              },
              "typeArguments": null,
              "start": 2551,
              "end": 2552
            },
            "start": 2549,
            "end": 2552
          },
          "start": 2546,
          "end": 2552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2555,
            "end": 2562
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2563,
                    "end": 2567
                  },
                  "typeArguments": null,
                  "start": 2563,
                  "end": 2567
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2569
                  },
                  "typeArguments": null,
                  "start": 2568,
                  "end": 2569
                },
                "start": 2563,
                "end": 2570
              }
            ],
            "start": 2562,
            "end": 2571
          },
          "start": 2555,
          "end": 2571
        },
        "start": 2553,
        "end": 2571
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2585,
                  "end": 2592
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2593,
                  "end": 2600
                },
                "optional": false,
                "computed": false,
                "start": 2585,
                "end": 2600
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2601,
                        "end": 2605
                      },
                      "typeArguments": null,
                      "start": 2601,
                      "end": 2605
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2606,
                        "end": 2607
                      },
                      "typeArguments": null,
                      "start": 2606,
                      "end": 2607
                    },
                    "start": 2601,
                    "end": 2608
                  }
                ],
                "start": 2600,
                "end": 2609
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2610,
                    "end": 2613
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2614,
                    "end": 2617
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2610,
                  "end": 2618
                }
              ],
              "optional": false,
              "start": 2585,
              "end": 2619
            },
            "start": 2578,
            "end": 2620
          }
        ],
        "start": 2572,
        "end": 2622
      },
      "expression": false,
      "start": 2435,
      "end": 2622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2622
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14,
    "range": [
      6,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "fAsync",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 94,
    "end": 100,
    "range": [
      94,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 115,
    "end": 120,
    "range": [
      115,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129,
    "range": [
      121,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "fAsyncExplicit",
    "start": 130,
    "end": 144,
    "range": [
      130,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 148,
    "end": 155,
    "range": [
      148,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 304,
    "end": 313,
    "range": [
      304,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 324,
    "end": 334,
    "range": [
      324,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342,
    "range": [
      336,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 348,
    "end": 355,
    "range": [
      348,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 357,
    "end": 360,
    "range": [
      357,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 365,
    "end": 370,
    "range": [
      365,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 371,
    "end": 379,
    "range": [
      371,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForStringProp",
    "start": 380,
    "end": 405,
    "range": [
      380,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 411,
    "end": 414,
    "range": [
      411,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 417,
    "end": 424,
    "range": [
      417,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 429,
    "end": 441,
    "range": [
      429,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 461,
    "end": 471,
    "range": [
      461,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 476,
    "end": 481,
    "range": [
      476,
      481
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 482,
    "end": 490,
    "range": [
      482,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForPromiseOfStringProp",
    "start": 491,
    "end": 525,
    "range": [
      491,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 526,
    "end": 529,
    "range": [
      526,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 531,
    "end": 534,
    "range": [
      531,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 537,
    "end": 544,
    "range": [
      537,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 545,
    "end": 548,
    "range": [
      545,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 549,
    "end": 561,
    "range": [
      549,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 577,
    "end": 584,
    "range": [
      577,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 585,
    "end": 592,
    "range": [
      585,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 593,
    "end": 596,
    "range": [
      593,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 597,
    "end": 607,
    "range": [
      597,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 613,
    "end": 618,
    "range": [
      613,
      618
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 619,
    "end": 627,
    "range": [
      619,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForExplicitPromiseOfStringProp",
    "start": 628,
    "end": 670,
    "range": [
      628,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 676,
    "end": 679,
    "range": [
      676,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 682,
    "end": 689,
    "range": [
      682,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 690,
    "end": 693,
    "range": [
      690,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 694,
    "end": 706,
    "range": [
      694,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 715,
    "end": 721,
    "range": [
      715,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 722,
    "end": 729,
    "range": [
      722,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 730,
    "end": 737,
    "range": [
      730,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 738,
    "end": 741,
    "range": [
      738,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 742,
    "end": 754,
    "range": [
      742,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 757,
    "end": 760,
    "range": [
      757,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 761,
    "end": 771,
    "range": [
      761,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 777,
    "end": 782,
    "range": [
      777,
      782
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 783,
    "end": 791,
    "range": [
      783,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForAnyProp",
    "start": 792,
    "end": 814,
    "range": [
      792,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 820,
    "end": 823,
    "range": [
      820,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 826,
    "end": 833,
    "range": [
      826,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 838,
    "end": 847,
    "range": [
      838,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 867,
    "end": 874,
    "range": [
      867,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 879,
    "end": 884,
    "range": [
      879,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 885,
    "end": 893,
    "range": [
      885,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForPromiseOfAnyProp",
    "start": 894,
    "end": 925,
    "range": [
      894,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 926,
    "end": 929,
    "range": [
      926,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 931,
    "end": 934,
    "range": [
      931,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 937,
    "end": 944,
    "range": [
      937,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 945,
    "end": 948,
    "range": [
      945,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 949,
    "end": 958,
    "range": [
      949,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 967,
    "end": 973,
    "range": [
      967,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 974,
    "end": 981,
    "range": [
      974,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 982,
    "end": 989,
    "range": [
      982,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 990,
    "end": 993,
    "range": [
      990,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 994,
    "end": 1001,
    "range": [
      994,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1007,
    "end": 1012,
    "range": [
      1007,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1013,
    "end": 1021,
    "range": [
      1013,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "fIndexedTypeForExplicitPromiseOfAnyProp",
    "start": 1022,
    "end": 1061,
    "range": [
      1022,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1062,
    "end": 1065,
    "range": [
      1062,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1067,
    "end": 1070,
    "range": [
      1067,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1073,
    "end": 1080,
    "range": [
      1073,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1081,
    "end": 1084,
    "range": [
      1081,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 1085,
    "end": 1094,
    "range": [
      1085,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1103,
    "end": 1109,
    "range": [
      1103,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1110,
    "end": 1117,
    "range": [
      1110,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1118,
    "end": 1125,
    "range": [
      1118,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1126,
    "end": 1129,
    "range": [
      1126,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 1130,
    "end": 1139,
    "range": [
      1130,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1142,
    "end": 1145,
    "range": [
      1142,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 1146,
    "end": 1153,
    "range": [
      1146,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1159,
    "end": 1164,
    "range": [
      1159,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1165,
    "end": 1173,
    "range": [
      1165,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForStringProp",
    "start": 1174,
    "end": 1206,
    "range": [
      1174,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1207,
    "end": 1211,
    "range": [
      1207,
      1211
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1212,
    "end": 1219,
    "range": [
      1212,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1220,
    "end": 1223,
    "range": [
      1220,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1225,
    "end": 1228,
    "range": [
      1225,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1230,
    "end": 1234,
    "range": [
      1230,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1237,
    "end": 1244,
    "range": [
      1237,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1245,
    "end": 1249,
    "range": [
      1245,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 1250,
    "end": 1262,
    "range": [
      1250,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1271,
    "end": 1277,
    "range": [
      1271,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1278,
    "end": 1281,
    "range": [
      1278,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 1282,
    "end": 1292,
    "range": [
      1282,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1297,
    "end": 1302,
    "range": [
      1297,
      1302
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1303,
    "end": 1311,
    "range": [
      1303,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForPromiseOfStringProp",
    "start": 1312,
    "end": 1353,
    "range": [
      1312,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1354,
    "end": 1358,
    "range": [
      1354,
      1358
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1359,
    "end": 1366,
    "range": [
      1359,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1367,
    "end": 1370,
    "range": [
      1367,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1372,
    "end": 1375,
    "range": [
      1372,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1377,
    "end": 1381,
    "range": [
      1377,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1384,
    "end": 1391,
    "range": [
      1384,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1392,
    "end": 1396,
    "range": [
      1392,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 1397,
    "end": 1409,
    "range": [
      1397,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1418,
    "end": 1424,
    "range": [
      1418,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1425,
    "end": 1432,
    "range": [
      1425,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1433,
    "end": 1440,
    "range": [
      1433,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1441,
    "end": 1444,
    "range": [
      1441,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 1445,
    "end": 1455,
    "range": [
      1445,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1461,
    "end": 1466,
    "range": [
      1461,
      1466
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1467,
    "end": 1475,
    "range": [
      1467,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForExplicitPromiseOfStringProp",
    "start": 1476,
    "end": 1525,
    "range": [
      1476,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1526,
    "end": 1530,
    "range": [
      1526,
      1530
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1531,
    "end": 1538,
    "range": [
      1531,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1539,
    "end": 1542,
    "range": [
      1539,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1544,
    "end": 1547,
    "range": [
      1544,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1549,
    "end": 1553,
    "range": [
      1549,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1556,
    "end": 1563,
    "range": [
      1556,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1564,
    "end": 1568,
    "range": [
      1564,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 1569,
    "end": 1581,
    "range": [
      1569,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1590,
    "end": 1596,
    "range": [
      1590,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1597,
    "end": 1604,
    "range": [
      1597,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1605,
    "end": 1612,
    "range": [
      1605,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1613,
    "end": 1617,
    "range": [
      1613,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "String",
    "value": "\"stringProp\"",
    "start": 1618,
    "end": 1630,
    "range": [
      1618,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "stringProp",
    "start": 1637,
    "end": 1647,
    "range": [
      1637,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1653,
    "end": 1658,
    "range": [
      1653,
      1658
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1659,
    "end": 1667,
    "range": [
      1659,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForAnyProp",
    "start": 1668,
    "end": 1697,
    "range": [
      1668,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1698,
    "end": 1702,
    "range": [
      1698,
      1702
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1703,
    "end": 1710,
    "range": [
      1703,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1711,
    "end": 1714,
    "range": [
      1711,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1716,
    "end": 1719,
    "range": [
      1716,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1721,
    "end": 1725,
    "range": [
      1721,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1728,
    "end": 1735,
    "range": [
      1728,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1736,
    "end": 1740,
    "range": [
      1736,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 1741,
    "end": 1750,
    "range": [
      1741,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1759,
    "end": 1765,
    "range": [
      1759,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1766,
    "end": 1769,
    "range": [
      1766,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 1770,
    "end": 1777,
    "range": [
      1770,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1782,
    "end": 1787,
    "range": [
      1782,
      1787
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1788,
    "end": 1796,
    "range": [
      1788,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForPromiseOfAnyProp",
    "start": 1797,
    "end": 1835,
    "range": [
      1797,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1836,
    "end": 1840,
    "range": [
      1836,
      1840
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1841,
    "end": 1848,
    "range": [
      1841,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1849,
    "end": 1852,
    "range": [
      1849,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1854,
    "end": 1857,
    "range": [
      1854,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1859,
    "end": 1863,
    "range": [
      1859,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1866,
    "end": 1873,
    "range": [
      1866,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1874,
    "end": 1878,
    "range": [
      1874,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 1879,
    "end": 1888,
    "range": [
      1879,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1897,
    "end": 1903,
    "range": [
      1897,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1904,
    "end": 1911,
    "range": [
      1904,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1912,
    "end": 1919,
    "range": [
      1912,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1920,
    "end": 1923,
    "range": [
      1920,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 1924,
    "end": 1931,
    "range": [
      1924,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1937,
    "end": 1942,
    "range": [
      1937,
      1942
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1943,
    "end": 1951,
    "range": [
      1943,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForExplicitPromiseOfAnyProp",
    "start": 1952,
    "end": 1998,
    "range": [
      1952,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 1999,
    "end": 2003,
    "range": [
      1999,
      2003
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2004,
    "end": 2011,
    "range": [
      2004,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2012,
    "end": 2015,
    "range": [
      2012,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2017,
    "end": 2020,
    "range": [
      2017,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2022,
    "end": 2026,
    "range": [
      2022,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2029,
    "end": 2036,
    "range": [
      2029,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2037,
    "end": 2041,
    "range": [
      2037,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 2042,
    "end": 2051,
    "range": [
      2042,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2060,
    "end": 2066,
    "range": [
      2060,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2067,
    "end": 2074,
    "range": [
      2067,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2075,
    "end": 2082,
    "range": [
      2075,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2083,
    "end": 2087,
    "range": [
      2083,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "String",
    "value": "\"anyProp\"",
    "start": 2088,
    "end": 2097,
    "range": [
      2088,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2100,
    "end": 2103,
    "range": [
      2100,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "anyProp",
    "start": 2104,
    "end": 2111,
    "range": [
      2104,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2117,
    "end": 2122,
    "range": [
      2117,
      2122
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2123,
    "end": 2131,
    "range": [
      2123,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForKProp",
    "start": 2132,
    "end": 2159,
    "range": [
      2132,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2160,
    "end": 2164,
    "range": [
      2160,
      2164
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2165,
    "end": 2172,
    "range": [
      2165,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2173,
    "end": 2176,
    "range": [
      2173,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2180,
    "end": 2187,
    "range": [
      2180,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2188,
    "end": 2193,
    "range": [
      2188,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2194,
    "end": 2198,
    "range": [
      2194,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2200,
    "end": 2203,
    "range": [
      2200,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2205,
    "end": 2209,
    "range": [
      2205,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2211,
    "end": 2214,
    "range": [
      2211,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2220,
    "end": 2227,
    "range": [
      2220,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2228,
    "end": 2232,
    "range": [
      2228,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2243,
    "end": 2249,
    "range": [
      2243,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2250,
    "end": 2253,
    "range": [
      2250,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2254,
    "end": 2257,
    "range": [
      2254,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2263,
    "end": 2268,
    "range": [
      2263,
      2268
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2269,
    "end": 2277,
    "range": [
      2269,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForPromiseOfKProp",
    "start": 2278,
    "end": 2314,
    "range": [
      2278,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2315,
    "end": 2319,
    "range": [
      2315,
      2319
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2320,
    "end": 2327,
    "range": [
      2320,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2328,
    "end": 2331,
    "range": [
      2328,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2335,
    "end": 2342,
    "range": [
      2335,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2343,
    "end": 2348,
    "range": [
      2343,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2349,
    "end": 2353,
    "range": [
      2349,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2355,
    "end": 2358,
    "range": [
      2355,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2360,
    "end": 2364,
    "range": [
      2360,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2366,
    "end": 2369,
    "range": [
      2366,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2375,
    "end": 2382,
    "range": [
      2375,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2383,
    "end": 2387,
    "range": [
      2383,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2398,
    "end": 2404,
    "range": [
      2398,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2405,
    "end": 2412,
    "range": [
      2405,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2413,
    "end": 2420,
    "range": [
      2413,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2421,
    "end": 2424,
    "range": [
      2421,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2425,
    "end": 2428,
    "range": [
      2425,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2435,
    "end": 2440,
    "range": [
      2435,
      2440
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2441,
    "end": 2449,
    "range": [
      2441,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "fGenericIndexedTypeForExplicitPromiseOfKProp",
    "start": 2450,
    "end": 2494,
    "range": [
      2450,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2495,
    "end": 2499,
    "range": [
      2495,
      2499
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2500,
    "end": 2507,
    "range": [
      2500,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2508,
    "end": 2511,
    "range": [
      2508,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2515,
    "end": 2522,
    "range": [
      2515,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2523,
    "end": 2528,
    "range": [
      2523,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2529,
    "end": 2533,
    "range": [
      2529,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2535,
    "end": 2538,
    "range": [
      2535,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2540,
    "end": 2544,
    "range": [
      2540,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2546,
    "end": 2549,
    "range": [
      2546,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2555,
    "end": 2562,
    "range": [
      2555,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2563,
    "end": 2567,
    "range": [
      2563,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2578,
    "end": 2584,
    "range": [
      2578,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2585,
    "end": 2592,
    "range": [
      2585,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2593,
    "end": 2600,
    "range": [
      2593,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Identifier",
    "value": "TObj",
    "start": 2601,
    "end": 2605,
    "range": [
      2601,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2610,
    "end": 2613,
    "range": [
      2610,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2614,
    "end": 2617,
    "range": [
      2614,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  }
]
```
