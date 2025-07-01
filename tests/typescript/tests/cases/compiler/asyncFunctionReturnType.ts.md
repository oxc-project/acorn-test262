__ESTREE_TEST__:PASS:
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
