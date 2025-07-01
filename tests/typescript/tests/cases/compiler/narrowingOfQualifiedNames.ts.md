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
        "name": "IProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aaa",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 71,
                        "end": 77
                      },
                      "start": 69,
                      "end": 77
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 66,
                    "end": 77
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bbb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 89
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 86,
                    "end": 97
                  }
                ],
                "start": 56,
                "end": 103
              },
              "start": 54,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 103
          }
        ],
        "start": 44,
        "end": 105
      },
      "declare": false,
      "start": 22,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "init",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "properties",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IProperties",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 144
              },
              "typeArguments": null,
              "start": 133,
              "end": 144
            },
            "start": 131,
            "end": 144
          },
          "start": 121,
          "end": 144
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 156,
              "end": 170
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FooOK",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 192
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 212
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 216
                      },
                      "start": 202,
                      "end": 216
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 216
                  },
                  "declare": false,
                  "start": 182,
                  "end": 217
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 240
                    },
                    "optional": false,
                    "computed": false,
                    "start": 226,
                    "end": 240
                  },
                  "directive": null,
                  "start": 226,
                  "end": 241
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "init": null,
                        "definite": false,
                        "start": 302,
                        "end": 303
                      }
                    ],
                    "declare": false,
                    "start": 296,
                    "end": 303
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 308,
                        "end": 309
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 311,
                        "end": 312
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 314,
                        "end": 315
                      }
                    ],
                    "start": 307,
                    "end": 316
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 340
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 341,
                            "end": 344
                          },
                          "optional": false,
                          "computed": false,
                          "start": 330,
                          "end": 344
                        },
                        "directive": null,
                        "start": 330,
                        "end": 345
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FooOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 402,
                          "end": 416
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "properties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 426,
                              "end": 436
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 440
                            },
                            "start": 426,
                            "end": 440
                          },
                          "typeArguments": null,
                          "start": 419,
                          "end": 440
                        },
                        "declare": false,
                        "start": 397,
                        "end": 441
                      }
                    ],
                    "start": 318,
                    "end": 499
                  },
                  "start": 291,
                  "end": 499
                }
              ],
              "start": 172,
              "end": 505
            },
            "alternate": null,
            "start": 152,
            "end": 505
          }
        ],
        "start": 146,
        "end": 507
      },
      "expression": false,
      "start": 107,
      "end": 507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 531
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 570,
                              "end": 571
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              },
                              "start": 572,
                              "end": 580
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 570,
                            "end": 580
                          }
                        ],
                        "start": 556,
                        "end": 590
                      },
                      "start": 554,
                      "end": 590
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 552,
                    "end": 590
                  }
                ],
                "start": 542,
                "end": 596
              },
              "start": 540,
              "end": 596
            },
            "accessibility": null,
            "static": false,
            "start": 538,
            "end": 596
          }
        ],
        "start": 532,
        "end": 598
      },
      "declare": false,
      "start": 509,
      "end": 598
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "init2",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 632
              },
              "typeArguments": null,
              "start": 620,
              "end": 632
            },
            "start": 618,
            "end": 632
          },
          "start": 615,
          "end": 632
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 647
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 644,
              "end": 649
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 667
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 677,
                        "end": 680
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 682
                      },
                      "start": 677,
                      "end": 682
                    },
                    "typeArguments": null,
                    "start": 670,
                    "end": 682
                  },
                  "declare": false,
                  "start": 661,
                  "end": 683
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 708,
                          "end": 711
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 712,
                          "end": 713
                        },
                        "start": 708,
                        "end": 713
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 715
                      },
                      "start": 708,
                      "end": 715
                    },
                    "typeArguments": null,
                    "start": 701,
                    "end": 715
                  },
                  "declare": false,
                  "start": 692,
                  "end": 716
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 731
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 744
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 745,
                            "end": 746
                          },
                          "start": 741,
                          "end": 746
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 748
                        },
                        "start": 741,
                        "end": 748
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "start": 741,
                      "end": 750
                    },
                    "typeArguments": null,
                    "start": 734,
                    "end": 750
                  },
                  "declare": false,
                  "start": 725,
                  "end": 751
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 771,
                          "end": 772
                        },
                        "init": null,
                        "definite": false,
                        "start": 771,
                        "end": 772
                      }
                    ],
                    "declare": false,
                    "start": 765,
                    "end": 772
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 777,
                        "end": 778
                      }
                    ],
                    "start": 776,
                    "end": 779
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 801
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 811,
                              "end": 814
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 816
                            },
                            "start": 811,
                            "end": 816
                          },
                          "typeArguments": null,
                          "start": 804,
                          "end": 816
                        },
                        "declare": false,
                        "start": 795,
                        "end": 817
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 836
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 846,
                                "end": 849
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 850,
                                "end": 851
                              },
                              "start": 846,
                              "end": 851
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 852,
                              "end": 853
                            },
                            "start": 846,
                            "end": 853
                          },
                          "typeArguments": null,
                          "start": 839,
                          "end": 853
                        },
                        "declare": false,
                        "start": 830,
                        "end": 854
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 873
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 883,
                                  "end": 886
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 887,
                                  "end": 888
                                },
                                "start": 883,
                                "end": 888
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 889,
                                "end": 890
                              },
                              "start": 883,
                              "end": 890
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 891,
                              "end": 892
                            },
                            "start": 883,
                            "end": 892
                          },
                          "typeArguments": null,
                          "start": 876,
                          "end": 892
                        },
                        "declare": false,
                        "start": 867,
                        "end": 893
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 911,
                              "end": 914
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 915,
                              "end": 916
                            },
                            "optional": false,
                            "computed": false,
                            "start": 911,
                            "end": 916
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 917,
                            "end": 918
                          },
                          "optional": false,
                          "computed": false,
                          "start": 911,
                          "end": 918
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 943,
                                "end": 944
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 954,
                                    "end": 957
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 958,
                                    "end": 959
                                  },
                                  "start": 954,
                                  "end": 959
                                },
                                "typeArguments": null,
                                "start": 947,
                                "end": 959
                              },
                              "declare": false,
                              "start": 938,
                              "end": 960
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 982,
                                "end": 983
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 993,
                                      "end": 996
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 997,
                                      "end": 998
                                    },
                                    "start": 993,
                                    "end": 998
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 999,
                                    "end": 1000
                                  },
                                  "start": 993,
                                  "end": 1000
                                },
                                "typeArguments": null,
                                "start": 986,
                                "end": 1000
                              },
                              "declare": false,
                              "start": 977,
                              "end": 1001
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1023,
                                "end": 1024
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1034,
                                        "end": 1037
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1038,
                                        "end": 1039
                                      },
                                      "start": 1034,
                                      "end": 1039
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1040,
                                      "end": 1041
                                    },
                                    "start": 1034,
                                    "end": 1041
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1042,
                                    "end": 1043
                                  },
                                  "start": 1034,
                                  "end": 1043
                                },
                                "typeArguments": null,
                                "start": 1027,
                                "end": 1043
                              },
                              "declare": false,
                              "start": 1018,
                              "end": 1044
                            },
                            {
                              "type": "ForOfStatement",
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "_",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1072,
                                      "end": 1073
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 1072,
                                    "end": 1073
                                  }
                                ],
                                "declare": false,
                                "start": 1066,
                                "end": 1073
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1078,
                                    "end": 1079
                                  }
                                ],
                                "start": 1077,
                                "end": 1080
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1109,
                                      "end": 1110
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1120,
                                          "end": 1123
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1124,
                                          "end": 1125
                                        },
                                        "start": 1120,
                                        "end": 1125
                                      },
                                      "typeArguments": null,
                                      "start": 1113,
                                      "end": 1125
                                    },
                                    "declare": false,
                                    "start": 1104,
                                    "end": 1126
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1152,
                                      "end": 1153
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1163,
                                            "end": 1166
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1167,
                                            "end": 1168
                                          },
                                          "start": 1163,
                                          "end": 1168
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1169,
                                          "end": 1170
                                        },
                                        "start": 1163,
                                        "end": 1170
                                      },
                                      "typeArguments": null,
                                      "start": 1156,
                                      "end": 1170
                                    },
                                    "declare": false,
                                    "start": 1147,
                                    "end": 1171
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1197,
                                      "end": 1198
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "TSQualifiedName",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "foo",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1208,
                                              "end": 1211
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "a",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1212,
                                              "end": 1213
                                            },
                                            "start": 1208,
                                            "end": 1213
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "b",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1214,
                                            "end": 1215
                                          },
                                          "start": 1208,
                                          "end": 1215
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1216,
                                          "end": 1217
                                        },
                                        "start": 1208,
                                        "end": 1217
                                      },
                                      "typeArguments": null,
                                      "start": 1201,
                                      "end": 1217
                                    },
                                    "declare": false,
                                    "start": 1192,
                                    "end": 1218
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1244,
                                            "end": 1247
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1248,
                                            "end": 1249
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1244,
                                          "end": 1249
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1250,
                                          "end": 1251
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1244,
                                        "end": 1251
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1252,
                                        "end": 1253
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1244,
                                      "end": 1253
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1286,
                                            "end": 1287
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "foo",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1297,
                                                "end": 1300
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1301,
                                                "end": 1302
                                              },
                                              "start": 1297,
                                              "end": 1302
                                            },
                                            "typeArguments": null,
                                            "start": 1290,
                                            "end": 1302
                                          },
                                          "declare": false,
                                          "start": 1281,
                                          "end": 1303
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1333,
                                            "end": 1334
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1344,
                                                  "end": 1347
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "a",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1348,
                                                  "end": 1349
                                                },
                                                "start": 1344,
                                                "end": 1349
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "b",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1350,
                                                "end": 1351
                                              },
                                              "start": 1344,
                                              "end": 1351
                                            },
                                            "typeArguments": null,
                                            "start": 1337,
                                            "end": 1351
                                          },
                                          "declare": false,
                                          "start": 1328,
                                          "end": 1352
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1382,
                                            "end": 1383
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "left": {
                                                  "type": "TSQualifiedName",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "foo",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1393,
                                                    "end": 1396
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "a",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1397,
                                                    "end": 1398
                                                  },
                                                  "start": 1393,
                                                  "end": 1398
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "b",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1399,
                                                  "end": 1400
                                                },
                                                "start": 1393,
                                                "end": 1400
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "c",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1401,
                                                "end": 1402
                                              },
                                              "start": 1393,
                                              "end": 1402
                                            },
                                            "typeArguments": null,
                                            "start": 1386,
                                            "end": 1402
                                          },
                                          "declare": false,
                                          "start": 1377,
                                          "end": 1403
                                        },
                                        {
                                          "type": "ForOfStatement",
                                          "await": false,
                                          "left": {
                                            "type": "VariableDeclaration",
                                            "kind": "const",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1439,
                                                  "end": 1440
                                                },
                                                "init": null,
                                                "definite": false,
                                                "start": 1439,
                                                "end": 1440
                                              }
                                            ],
                                            "declare": false,
                                            "start": 1433,
                                            "end": 1440
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 1445,
                                                "end": 1446
                                              }
                                            ],
                                            "start": 1444,
                                            "end": 1447
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "A",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1484,
                                                  "end": 1485
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "foo",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1495,
                                                      "end": 1498
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "a",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1499,
                                                      "end": 1500
                                                    },
                                                    "start": 1495,
                                                    "end": 1500
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1488,
                                                  "end": 1500
                                                },
                                                "declare": false,
                                                "start": 1479,
                                                "end": 1501
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "B",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1535,
                                                  "end": 1536
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "foo",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1546,
                                                        "end": 1549
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "a",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1550,
                                                        "end": 1551
                                                      },
                                                      "start": 1546,
                                                      "end": 1551
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "b",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1552,
                                                      "end": 1553
                                                    },
                                                    "start": 1546,
                                                    "end": 1553
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1539,
                                                  "end": 1553
                                                },
                                                "declare": false,
                                                "start": 1530,
                                                "end": 1554
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1588,
                                                  "end": 1589
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "left": {
                                                        "type": "TSQualifiedName",
                                                        "left": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "foo",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1599,
                                                          "end": 1602
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "a",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1603,
                                                          "end": 1604
                                                        },
                                                        "start": 1599,
                                                        "end": 1604
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "b",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1605,
                                                        "end": 1606
                                                      },
                                                      "start": 1599,
                                                      "end": 1606
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "c",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1607,
                                                      "end": 1608
                                                    },
                                                    "start": 1599,
                                                    "end": 1608
                                                  },
                                                  "typeArguments": null,
                                                  "start": 1592,
                                                  "end": 1608
                                                },
                                                "declare": false,
                                                "start": 1583,
                                                "end": 1609
                                              }
                                            ],
                                            "start": 1449,
                                            "end": 1635
                                          },
                                          "start": 1429,
                                          "end": 1635
                                        }
                                      ],
                                      "start": 1255,
                                      "end": 1657
                                    },
                                    "alternate": null,
                                    "start": 1240,
                                    "end": 1657
                                  }
                                ],
                                "start": 1082,
                                "end": 1675
                              },
                              "start": 1062,
                              "end": 1675
                            }
                          ],
                          "start": 920,
                          "end": 1689
                        },
                        "alternate": null,
                        "start": 907,
                        "end": 1689
                      }
                    ],
                    "start": 781,
                    "end": 1699
                  },
                  "start": 761,
                  "end": 1699
                }
              ],
              "start": 651,
              "end": 1705
            },
            "alternate": null,
            "start": 640,
            "end": 1705
          }
        ],
        "start": 634,
        "end": 1707
      },
      "expression": false,
      "start": 600,
      "end": 1707
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fish",
        "optional": false,
        "typeAnnotation": null,
        "start": 1736,
        "end": 1740
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1749
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "fish",
                  "raw": "'fish'",
                  "start": 1751,
                  "end": 1757
                },
                "start": 1751,
                "end": 1757
              },
              "start": 1749,
              "end": 1757
            },
            "accessibility": null,
            "static": false,
            "start": 1745,
            "end": 1758
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasFins",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1766
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1768,
                  "end": 1772
                },
                "start": 1768,
                "end": 1772
              },
              "start": 1766,
              "end": 1772
            },
            "accessibility": null,
            "static": false,
            "start": 1759,
            "end": 1772
          }
        ],
        "start": 1743,
        "end": 1774
      },
      "declare": false,
      "start": 1731,
      "end": 1774
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1780,
        "end": 1783
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1792
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "dog",
                  "raw": "'dog'",
                  "start": 1794,
                  "end": 1799
                },
                "start": 1794,
                "end": 1799
              },
              "start": 1792,
              "end": 1799
            },
            "accessibility": null,
            "static": false,
            "start": 1788,
            "end": 1800
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "saysWoof",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1809
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1811,
                  "end": 1815
                },
                "start": 1811,
                "end": 1815
              },
              "start": 1809,
              "end": 1815
            },
            "accessibility": null,
            "static": false,
            "start": 1801,
            "end": 1815
          }
        ],
        "start": 1786,
        "end": 1817
      },
      "declare": false,
      "start": 1775,
      "end": 1817
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pet",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1827
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fish",
              "optional": false,
              "typeAnnotation": null,
              "start": 1830,
              "end": 1834
            },
            "typeArguments": null,
            "start": 1830,
            "end": 1834
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1840
            },
            "typeArguments": null,
            "start": 1837,
            "end": 1840
          }
        ],
        "start": 1830,
        "end": 1840
      },
      "declare": false,
      "start": 1819,
      "end": 1841
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handleDogBroken",
        "optional": false,
        "typeAnnotation": null,
        "start": 1852,
        "end": 1867
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
              "name": "PetType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1875
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "typeAnnotation": null,
                "start": 1884,
                "end": 1887
              },
              "typeArguments": null,
              "start": 1884,
              "end": 1887
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1868,
            "end": 1887
          }
        ],
        "start": 1867,
        "end": 1888
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1894,
                "end": 1901
              },
              "typeArguments": null,
              "start": 1894,
              "end": 1901
            },
            "start": 1892,
            "end": 1901
          },
          "start": 1889,
          "end": 1901
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1912,
                  "end": 1915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1920
                },
                "optional": false,
                "computed": false,
                "start": 1912,
                "end": 1920
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "dog",
                "raw": "'dog'",
                "start": 1925,
                "end": 1930
              },
              "start": 1912,
              "end": 1930
            },
            "consequent": {
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
                        "name": "_okay1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1948,
                        "end": 1954
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1957,
                          "end": 1960
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1961,
                          "end": 1969
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1957,
                        "end": 1969
                      },
                      "definite": false,
                      "start": 1948,
                      "end": 1969
                    }
                  ],
                  "declare": false,
                  "start": 1942,
                  "end": 1970
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
                        "name": "_okay2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pet",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2000,
                                "end": 2003
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "saysWoof",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2004,
                                "end": 2012
                              },
                              "start": 2000,
                              "end": 2012
                            },
                            "typeArguments": null,
                            "start": 1993,
                            "end": 2012
                          },
                          "start": 1991,
                          "end": 2012
                        },
                        "start": 1985,
                        "end": 2012
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2015,
                          "end": 2018
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2019,
                          "end": 2027
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2015,
                        "end": 2027
                      },
                      "definite": false,
                      "start": 1985,
                      "end": 2027
                    }
                  ],
                  "declare": false,
                  "start": 1979,
                  "end": 2028
                }
              ],
              "start": 1932,
              "end": 2034
            },
            "alternate": null,
            "start": 1909,
            "end": 2034
          }
        ],
        "start": 1903,
        "end": 2036
      },
      "expression": false,
      "start": 1843,
      "end": 2036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handleDogWorking",
        "optional": false,
        "typeAnnotation": null,
        "start": 2047,
        "end": 2063
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2069,
                "end": 2072
              },
              "typeArguments": null,
              "start": 2069,
              "end": 2072
            },
            "start": 2067,
            "end": 2072
          },
          "start": 2064,
          "end": 2072
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2083,
                  "end": 2086
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2087,
                  "end": 2091
                },
                "optional": false,
                "computed": false,
                "start": 2083,
                "end": 2091
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "dog",
                "raw": "'dog'",
                "start": 2096,
                "end": 2101
              },
              "start": 2083,
              "end": 2101
            },
            "consequent": {
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
                        "name": "_okay1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2119,
                        "end": 2125
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2128,
                          "end": 2131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2132,
                          "end": 2140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2128,
                        "end": 2140
                      },
                      "definite": false,
                      "start": 2119,
                      "end": 2140
                    }
                  ],
                  "declare": false,
                  "start": 2113,
                  "end": 2141
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
                        "name": "_okay2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "pet",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2171,
                                "end": 2174
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "saysWoof",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2175,
                                "end": 2183
                              },
                              "start": 2171,
                              "end": 2183
                            },
                            "typeArguments": null,
                            "start": 2164,
                            "end": 2183
                          },
                          "start": 2162,
                          "end": 2183
                        },
                        "start": 2156,
                        "end": 2183
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2186,
                          "end": 2189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "saysWoof",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2190,
                          "end": 2198
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2186,
                        "end": 2198
                      },
                      "definite": false,
                      "start": 2156,
                      "end": 2198
                    }
                  ],
                  "declare": false,
                  "start": 2150,
                  "end": 2199
                }
              ],
              "start": 2103,
              "end": 2205
            },
            "alternate": null,
            "start": 2080,
            "end": 2205
          }
        ],
        "start": 2074,
        "end": 2207
      },
      "expression": false,
      "start": 2038,
      "end": 2207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 2207
}
```
