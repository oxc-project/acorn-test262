__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
              },
              "typeArguments": null,
              "start": 41,
              "end": 49
            },
            "start": 39,
            "end": 49
          },
          "start": 33,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        },
        "start": 50,
        "end": 56
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "start": 92,
            "end": 100
          },
          "start": 91,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 120
                  },
                  "typeArguments": null,
                  "start": 112,
                  "end": 120
                },
                "start": 110,
                "end": 120
              },
              "start": 104,
              "end": 120
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 125,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          "start": 103,
          "end": 129
        },
        "start": 101,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 58,
      "end": 130
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 181
              },
              "typeArguments": null,
              "start": 175,
              "end": 181
            },
            "start": 173,
            "end": 181
          },
          "start": 167,
          "end": 181
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 188,
                  "end": 194
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 197,
                  "end": 203
                }
              ],
              "start": 188,
              "end": 203
            },
            "start": 186,
            "end": 203
          },
          "start": 183,
          "end": 203
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "descriptor",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 236
              },
              "typeArguments": null,
              "start": 218,
              "end": 236
            },
            "start": 216,
            "end": 236
          },
          "start": 205,
          "end": 236
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 239,
          "end": 243
        },
        "start": 237,
        "end": 243
      },
      "body": null,
      "expression": false,
      "start": 131,
      "end": 244
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 280
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 284,
              "end": 290
            },
            "start": 282,
            "end": 290
          },
          "start": 281,
          "end": 290
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 308
                  },
                  "typeArguments": null,
                  "start": 302,
                  "end": 308
                },
                "start": 300,
                "end": 308
              },
              "start": 294,
              "end": 308
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 315,
                      "end": 321
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ],
                  "start": 315,
                  "end": 330
                },
                "start": 313,
                "end": 330
              },
              "start": 310,
              "end": 330
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "descriptor",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDescriptor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 363
                  },
                  "typeArguments": null,
                  "start": 345,
                  "end": 363
                },
                "start": 343,
                "end": 363
              },
              "start": 332,
              "end": 363
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 368,
              "end": 372
            },
            "start": 365,
            "end": 372
          },
          "start": 293,
          "end": 372
        },
        "start": 291,
        "end": 372
      },
      "body": null,
      "expression": false,
      "start": 245,
      "end": 373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParameterDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 410
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 425
              },
              "typeArguments": null,
              "start": 419,
              "end": 425
            },
            "start": 417,
            "end": 425
          },
          "start": 411,
          "end": 425
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 432,
                  "end": 438
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 441,
                  "end": 447
                }
              ],
              "start": 432,
              "end": 447
            },
            "start": 430,
            "end": 447
          },
          "start": 427,
          "end": 447
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "paramIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 461,
              "end": 467
            },
            "start": 459,
            "end": 467
          },
          "start": 449,
          "end": 467
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 470,
          "end": 474
        },
        "start": 468,
        "end": 474
      },
      "body": null,
      "expression": false,
      "start": 374,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParameterDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 512
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 516,
              "end": 522
            },
            "start": 514,
            "end": 522
          },
          "start": 513,
          "end": 522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 540
                  },
                  "typeArguments": null,
                  "start": 534,
                  "end": 540
                },
                "start": 532,
                "end": 540
              },
              "start": 526,
              "end": 540
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 547,
                      "end": 553
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 556,
                      "end": 562
                    }
                  ],
                  "start": 547,
                  "end": 562
                },
                "start": 545,
                "end": 562
              },
              "start": 542,
              "end": 562
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "paramIndex",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 576,
                  "end": 582
                },
                "start": 574,
                "end": 582
              },
              "start": 564,
              "end": 582
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 587,
              "end": 591
            },
            "start": 584,
            "end": 591
          },
          "start": 525,
          "end": 591
        },
        "start": 523,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 476,
      "end": 592
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassDecorator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 610
          },
          "start": 594,
          "end": 610
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassDecorator2",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 627
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 628,
                "end": 630
              }
            ],
            "optional": false,
            "start": 612,
            "end": 631
          },
          "start": 611,
          "end": 631
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 645
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 652,
              "end": 663
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 691
                      },
                      "start": 671,
                      "end": 691
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 719
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 20,
                            "raw": "20",
                            "start": 720,
                            "end": 722
                          }
                        ],
                        "optional": false,
                        "start": 700,
                        "end": 723
                      },
                      "start": 699,
                      "end": 723
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeting",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 748,
                        "end": 754
                      },
                      "start": 746,
                      "end": 754
                    },
                    "start": 738,
                    "end": 754
                  },
                  "readonly": false,
                  "static": false,
                  "start": 671,
                  "end": 754
                },
                {
                  "type": "RestElement",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 771,
                        "end": 790
                      },
                      "start": 770,
                      "end": 790
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 818
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 30,
                            "raw": "30",
                            "start": 819,
                            "end": 821
                          }
                        ],
                        "optional": false,
                        "start": 799,
                        "end": 822
                      },
                      "start": 798,
                      "end": 822
                    }
                  ],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 834
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 836,
                        "end": 842
                      },
                      "start": 836,
                      "end": 844
                    },
                    "start": 834,
                    "end": 844
                  },
                  "value": null,
                  "start": 770,
                  "end": 844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 846,
                "end": 853
              },
              "expression": false,
              "start": 663,
              "end": 853
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 652,
            "end": 853
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 882
                },
                "start": 863,
                "end": 882
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 906
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 40,
                      "raw": "40",
                      "start": 907,
                      "end": 909
                    }
                  ],
                  "optional": false,
                  "start": 888,
                  "end": 910
                },
                "start": 887,
                "end": 910
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 920
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "<h1>",
                          "raw": "\"<h1>\"",
                          "start": 940,
                          "end": 946
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 949,
                            "end": 953
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "greeting",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 954,
                            "end": 962
                          },
                          "optional": false,
                          "computed": false,
                          "start": 949,
                          "end": 962
                        },
                        "start": 940,
                        "end": 962
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "</h1>",
                        "raw": "\"</h1>\"",
                        "start": 965,
                        "end": 972
                      },
                      "start": 940,
                      "end": 972
                    },
                    "start": 933,
                    "end": 973
                  }
                ],
                "start": 923,
                "end": 979
              },
              "expression": false,
              "start": 920,
              "end": 979
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 863,
            "end": 979
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 1004
                },
                "start": 985,
                "end": 1004
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1028
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 50,
                      "raw": "50",
                      "start": 1029,
                      "end": 1031
                    }
                  ],
                  "optional": false,
                  "start": 1010,
                  "end": 1032
                },
                "start": 1009,
                "end": 1032
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1048,
                "end": 1054
              },
              "start": 1046,
              "end": 1054
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 985,
            "end": 1055
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1080
                },
                "start": 1061,
                "end": 1080
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1104
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 60,
                      "raw": "60",
                      "start": 1105,
                      "end": 1107
                    }
                  ],
                  "optional": false,
                  "start": 1086,
                  "end": 1108
                },
                "start": 1085,
                "end": 1108
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1132,
                "end": 1138
              },
              "start": 1130,
              "end": 1138
            },
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1141,
              "end": 1143
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1061,
            "end": 1144
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1164
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1192
                      },
                      "start": 1172,
                      "end": 1192
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1201,
                          "end": 1220
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 70,
                            "raw": "70",
                            "start": 1221,
                            "end": 1223
                          }
                        ],
                        "optional": false,
                        "start": 1201,
                        "end": 1224
                      },
                      "start": 1200,
                      "end": 1224
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1235,
                      "end": 1241
                    },
                    "start": 1233,
                    "end": 1241
                  },
                  "start": 1232,
                  "end": 1241
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1260,
                        "end": 1264
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1265,
                        "end": 1273
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1260,
                      "end": 1273
                    },
                    "start": 1253,
                    "end": 1274
                  }
                ],
                "start": 1243,
                "end": 1280
              },
              "expression": false,
              "start": 1164,
              "end": 1280
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1154,
            "end": 1280
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1305
                },
                "start": 1286,
                "end": 1305
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1329
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 80,
                      "raw": "80",
                      "start": 1330,
                      "end": 1332
                    }
                  ],
                  "optional": false,
                  "start": 1311,
                  "end": 1333
                },
                "start": 1310,
                "end": 1333
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1351
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1371,
                        "end": 1375
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1376,
                        "end": 1384
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1371,
                      "end": 1384
                    },
                    "start": 1364,
                    "end": 1385
                  }
                ],
                "start": 1354,
                "end": 1391
              },
              "expression": false,
              "start": 1351,
              "end": 1391
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1286,
            "end": 1391
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1410
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1438
                      },
                      "start": 1418,
                      "end": 1438
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1466
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 90,
                            "raw": "90",
                            "start": 1467,
                            "end": 1469
                          }
                        ],
                        "optional": false,
                        "start": 1447,
                        "end": 1470
                      },
                      "start": 1446,
                      "end": 1470
                    }
                  ],
                  "name": "greetings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1489,
                      "end": 1495
                    },
                    "start": 1487,
                    "end": 1495
                  },
                  "start": 1478,
                  "end": 1495
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1507,
                          "end": 1511
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1512,
                          "end": 1520
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1507,
                        "end": 1520
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greetings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1532
                      },
                      "start": 1507,
                      "end": 1532
                    },
                    "directive": null,
                    "start": 1507,
                    "end": 1533
                  }
                ],
                "start": 1497,
                "end": 1539
              },
              "expression": false,
              "start": 1410,
              "end": 1539
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1397,
            "end": 1539
          }
        ],
        "start": 646,
        "end": 1545
      },
      "abstract": false,
      "declare": false,
      "start": 594,
      "end": 1545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1545
}
```
