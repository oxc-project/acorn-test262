__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 2207,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "name": "IProperties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 105,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 103,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 56,
                "end": 103,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 66,
                    "end": 77,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 69,
                      "name": "aaa",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 71,
                        "end": 77
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 97,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
                      "name": "bbb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "name": "init",
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
          "start": 121,
          "end": 144,
          "name": "properties",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 133,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 133,
                "end": 144,
                "name": "IProperties",
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
        "start": 146,
        "end": 507,
        "body": [
          {
            "type": "IfStatement",
            "start": 152,
            "end": 505,
            "test": {
              "type": "MemberExpression",
              "start": 156,
              "end": 170,
              "object": {
                "type": "Identifier",
                "start": 156,
                "end": 166,
                "name": "properties",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 170,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 172,
              "end": 505,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 182,
                  "end": 217,
                  "id": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 192,
                    "name": "FooOK",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 195,
                    "end": 216,
                    "exprName": {
                      "type": "TSQualifiedName",
                      "start": 202,
                      "end": 216,
                      "left": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 212,
                        "name": "properties",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 216,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 226,
                  "end": 241,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 226,
                    "end": 240,
                    "object": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 236,
                      "name": "properties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 240,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ForOfStatement",
                  "start": 291,
                  "end": 499,
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 296,
                    "end": 303,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 302,
                        "end": 303,
                        "id": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 307,
                    "end": 316,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 308,
                        "end": 309,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 311,
                        "end": 312,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 314,
                        "end": 315,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 318,
                    "end": 499,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 330,
                        "end": 345,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 330,
                          "end": 344,
                          "object": {
                            "type": "Identifier",
                            "start": 330,
                            "end": 340,
                            "name": "properties",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 344,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 397,
                        "end": 441,
                        "id": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 416,
                          "name": "FooOrUndefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 419,
                          "end": 440,
                          "exprName": {
                            "type": "TSQualifiedName",
                            "start": 426,
                            "end": 440,
                            "left": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 436,
                              "name": "properties",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 440,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 509,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 531,
        "name": "DeepOptional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 532,
        "end": 598,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 538,
            "end": 596,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 540,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 542,
                "end": 596,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 552,
                    "end": 590,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 554,
                      "end": 590,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 556,
                        "end": 590,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 570,
                            "end": 580,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 570,
                              "end": 571,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 572,
                              "end": 580,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 574,
                                "end": 580
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "FunctionDeclaration",
      "start": 600,
      "end": 1707,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 614,
        "name": "init2",
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
          "start": 615,
          "end": 632,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 618,
            "end": 632,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 620,
              "end": 632,
              "typeName": {
                "type": "Identifier",
                "start": 620,
                "end": 632,
                "name": "DeepOptional",
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
        "start": 634,
        "end": 1707,
        "body": [
          {
            "type": "IfStatement",
            "start": 640,
            "end": 1705,
            "test": {
              "type": "MemberExpression",
              "start": 644,
              "end": 649,
              "object": {
                "type": "Identifier",
                "start": 644,
                "end": 647,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 651,
              "end": 1705,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 661,
                  "end": 683,
                  "id": {
                    "type": "Identifier",
                    "start": 666,
                    "end": 667,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 670,
                    "end": 682,
                    "exprName": {
                      "type": "TSQualifiedName",
                      "start": 677,
                      "end": 682,
                      "left": {
                        "type": "Identifier",
                        "start": 677,
                        "end": 680,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 682,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 692,
                  "end": 716,
                  "id": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 701,
                    "end": 715,
                    "exprName": {
                      "type": "TSQualifiedName",
                      "start": 708,
                      "end": 715,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 708,
                        "end": 713,
                        "left": {
                          "type": "Identifier",
                          "start": 708,
                          "end": 711,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 712,
                          "end": 713,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 715,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 725,
                  "end": 751,
                  "id": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 731,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 734,
                    "end": 750,
                    "exprName": {
                      "type": "TSQualifiedName",
                      "start": 741,
                      "end": 750,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 741,
                        "end": 748,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 741,
                          "end": 746,
                          "left": {
                            "type": "Identifier",
                            "start": 741,
                            "end": 744,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 745,
                            "end": 746,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 747,
                          "end": 748,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 750,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "declare": false
                },
                {
                  "type": "ForOfStatement",
                  "start": 761,
                  "end": 1699,
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 765,
                    "end": 772,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 771,
                        "end": 772,
                        "id": {
                          "type": "Identifier",
                          "start": 771,
                          "end": 772,
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 776,
                    "end": 779,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 777,
                        "end": 778,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 781,
                    "end": 1699,
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 795,
                        "end": 817,
                        "id": {
                          "type": "Identifier",
                          "start": 800,
                          "end": 801,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 804,
                          "end": 816,
                          "exprName": {
                            "type": "TSQualifiedName",
                            "start": 811,
                            "end": 816,
                            "left": {
                              "type": "Identifier",
                              "start": 811,
                              "end": 814,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 816,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 830,
                        "end": 854,
                        "id": {
                          "type": "Identifier",
                          "start": 835,
                          "end": 836,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 839,
                          "end": 853,
                          "exprName": {
                            "type": "TSQualifiedName",
                            "start": 846,
                            "end": 853,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 846,
                              "end": 851,
                              "left": {
                                "type": "Identifier",
                                "start": 846,
                                "end": 849,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 850,
                                "end": 851,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 852,
                              "end": 853,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "start": 867,
                        "end": 893,
                        "id": {
                          "type": "Identifier",
                          "start": 872,
                          "end": 873,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 876,
                          "end": 892,
                          "exprName": {
                            "type": "TSQualifiedName",
                            "start": 883,
                            "end": 892,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 883,
                              "end": 890,
                              "left": {
                                "type": "TSQualifiedName",
                                "start": 883,
                                "end": 888,
                                "left": {
                                  "type": "Identifier",
                                  "start": 883,
                                  "end": 886,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 887,
                                  "end": 888,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 889,
                                "end": 890,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 891,
                              "end": 892,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        "declare": false
                      },
                      {
                        "type": "IfStatement",
                        "start": 907,
                        "end": 1689,
                        "test": {
                          "type": "MemberExpression",
                          "start": 911,
                          "end": 918,
                          "object": {
                            "type": "MemberExpression",
                            "start": 911,
                            "end": 916,
                            "object": {
                              "type": "Identifier",
                              "start": 911,
                              "end": 914,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 915,
                              "end": 916,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 917,
                            "end": 918,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 920,
                          "end": 1689,
                          "body": [
                            {
                              "type": "TSTypeAliasDeclaration",
                              "start": 938,
                              "end": 960,
                              "id": {
                                "type": "Identifier",
                                "start": 943,
                                "end": 944,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 947,
                                "end": 959,
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "start": 954,
                                  "end": 959,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 954,
                                    "end": 957,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 958,
                                    "end": 959,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              },
                              "declare": false
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "start": 977,
                              "end": 1001,
                              "id": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 983,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 986,
                                "end": 1000,
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "start": 993,
                                  "end": 1000,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 993,
                                    "end": 998,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 993,
                                      "end": 996,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 997,
                                      "end": 998,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 999,
                                    "end": 1000,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              },
                              "declare": false
                            },
                            {
                              "type": "TSTypeAliasDeclaration",
                              "start": 1018,
                              "end": 1044,
                              "id": {
                                "type": "Identifier",
                                "start": 1023,
                                "end": 1024,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 1027,
                                "end": 1043,
                                "exprName": {
                                  "type": "TSQualifiedName",
                                  "start": 1034,
                                  "end": 1043,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 1034,
                                    "end": 1041,
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "start": 1034,
                                      "end": 1039,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1034,
                                        "end": 1037,
                                        "name": "foo",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1038,
                                        "end": 1039,
                                        "name": "a",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1040,
                                      "end": 1041,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1042,
                                    "end": 1043,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              },
                              "declare": false
                            },
                            {
                              "type": "ForOfStatement",
                              "start": 1062,
                              "end": 1675,
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "start": 1066,
                                "end": 1073,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 1072,
                                    "end": 1073,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1072,
                                      "end": 1073,
                                      "name": "_",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "start": 1077,
                                "end": 1080,
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "start": 1078,
                                    "end": 1079,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                ]
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 1082,
                                "end": 1675,
                                "body": [
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "start": 1104,
                                    "end": 1126,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1109,
                                      "end": 1110,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "start": 1113,
                                      "end": 1125,
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "start": 1120,
                                        "end": 1125,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 1120,
                                          "end": 1123,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1124,
                                          "end": 1125,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "typeArguments": null
                                    },
                                    "declare": false
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "start": 1147,
                                    "end": 1171,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1152,
                                      "end": 1153,
                                      "name": "B",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "start": 1156,
                                      "end": 1170,
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "start": 1163,
                                        "end": 1170,
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "start": 1163,
                                          "end": 1168,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1163,
                                            "end": 1166,
                                            "name": "foo",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1167,
                                            "end": 1168,
                                            "name": "a",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1169,
                                          "end": 1170,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "typeArguments": null
                                    },
                                    "declare": false
                                  },
                                  {
                                    "type": "TSTypeAliasDeclaration",
                                    "start": 1192,
                                    "end": 1218,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1197,
                                      "end": 1198,
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeParameters": null,
                                    "typeAnnotation": {
                                      "type": "TSTypeQuery",
                                      "start": 1201,
                                      "end": 1217,
                                      "exprName": {
                                        "type": "TSQualifiedName",
                                        "start": 1208,
                                        "end": 1217,
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "start": 1208,
                                          "end": 1215,
                                          "left": {
                                            "type": "TSQualifiedName",
                                            "start": 1208,
                                            "end": 1213,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 1208,
                                              "end": 1211,
                                              "name": "foo",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "start": 1212,
                                              "end": 1213,
                                              "name": "a",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1214,
                                            "end": 1215,
                                            "name": "b",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1216,
                                          "end": 1217,
                                          "name": "c",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "typeArguments": null
                                    },
                                    "declare": false
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1240,
                                    "end": 1657,
                                    "test": {
                                      "type": "MemberExpression",
                                      "start": 1244,
                                      "end": 1253,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1244,
                                        "end": 1251,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 1244,
                                          "end": 1249,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1244,
                                            "end": 1247,
                                            "name": "foo",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1248,
                                            "end": 1249,
                                            "name": "a",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1250,
                                          "end": 1251,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1252,
                                        "end": 1253,
                                        "name": "c",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1255,
                                      "end": 1657,
                                      "body": [
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "start": 1281,
                                          "end": 1303,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 1286,
                                            "end": 1287,
                                            "name": "A",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "start": 1290,
                                            "end": 1302,
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "start": 1297,
                                              "end": 1302,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 1297,
                                                "end": 1300,
                                                "name": "foo",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1301,
                                                "end": 1302,
                                                "name": "a",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            },
                                            "typeArguments": null
                                          },
                                          "declare": false
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "start": 1328,
                                          "end": 1352,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 1333,
                                            "end": 1334,
                                            "name": "B",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "start": 1337,
                                            "end": 1351,
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "start": 1344,
                                              "end": 1351,
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "start": 1344,
                                                "end": 1349,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 1344,
                                                  "end": 1347,
                                                  "name": "foo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 1348,
                                                  "end": 1349,
                                                  "name": "a",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1350,
                                                "end": 1351,
                                                "name": "b",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            },
                                            "typeArguments": null
                                          },
                                          "declare": false
                                        },
                                        {
                                          "type": "TSTypeAliasDeclaration",
                                          "start": 1377,
                                          "end": 1403,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 1382,
                                            "end": 1383,
                                            "name": "C",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeParameters": null,
                                          "typeAnnotation": {
                                            "type": "TSTypeQuery",
                                            "start": 1386,
                                            "end": 1402,
                                            "exprName": {
                                              "type": "TSQualifiedName",
                                              "start": 1393,
                                              "end": 1402,
                                              "left": {
                                                "type": "TSQualifiedName",
                                                "start": 1393,
                                                "end": 1400,
                                                "left": {
                                                  "type": "TSQualifiedName",
                                                  "start": 1393,
                                                  "end": 1398,
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 1393,
                                                    "end": 1396,
                                                    "name": "foo",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 1397,
                                                    "end": 1398,
                                                    "name": "a",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  }
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 1399,
                                                  "end": 1400,
                                                  "name": "b",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1401,
                                                "end": 1402,
                                                "name": "c",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            },
                                            "typeArguments": null
                                          },
                                          "declare": false
                                        },
                                        {
                                          "type": "ForOfStatement",
                                          "start": 1429,
                                          "end": 1635,
                                          "await": false,
                                          "left": {
                                            "type": "VariableDeclaration",
                                            "start": 1433,
                                            "end": 1440,
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 1439,
                                                "end": 1440,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 1439,
                                                  "end": 1440,
                                                  "name": "_",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "init": null,
                                                "definite": false
                                              }
                                            ],
                                            "kind": "const",
                                            "declare": false
                                          },
                                          "right": {
                                            "type": "ArrayExpression",
                                            "start": 1444,
                                            "end": 1447,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 1445,
                                                "end": 1446,
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            ]
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 1449,
                                            "end": 1635,
                                            "body": [
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "start": 1479,
                                                "end": 1501,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 1484,
                                                  "end": 1485,
                                                  "name": "A",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "start": 1488,
                                                  "end": 1500,
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "start": 1495,
                                                    "end": 1500,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 1495,
                                                      "end": 1498,
                                                      "name": "foo",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 1499,
                                                      "end": 1500,
                                                      "name": "a",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "typeArguments": null
                                                },
                                                "declare": false
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "start": 1530,
                                                "end": 1554,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 1535,
                                                  "end": 1536,
                                                  "name": "B",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "start": 1539,
                                                  "end": 1553,
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "start": 1546,
                                                    "end": 1553,
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "start": 1546,
                                                      "end": 1551,
                                                      "left": {
                                                        "type": "Identifier",
                                                        "start": 1546,
                                                        "end": 1549,
                                                        "name": "foo",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "start": 1550,
                                                        "end": 1551,
                                                        "name": "a",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 1552,
                                                      "end": 1553,
                                                      "name": "b",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "typeArguments": null
                                                },
                                                "declare": false
                                              },
                                              {
                                                "type": "TSTypeAliasDeclaration",
                                                "start": 1583,
                                                "end": 1609,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 1588,
                                                  "end": 1589,
                                                  "name": "C",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeParameters": null,
                                                "typeAnnotation": {
                                                  "type": "TSTypeQuery",
                                                  "start": 1592,
                                                  "end": 1608,
                                                  "exprName": {
                                                    "type": "TSQualifiedName",
                                                    "start": 1599,
                                                    "end": 1608,
                                                    "left": {
                                                      "type": "TSQualifiedName",
                                                      "start": 1599,
                                                      "end": 1606,
                                                      "left": {
                                                        "type": "TSQualifiedName",
                                                        "start": 1599,
                                                        "end": 1604,
                                                        "left": {
                                                          "type": "Identifier",
                                                          "start": 1599,
                                                          "end": 1602,
                                                          "name": "foo",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        },
                                                        "right": {
                                                          "type": "Identifier",
                                                          "start": 1603,
                                                          "end": 1604,
                                                          "name": "a",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        }
                                                      },
                                                      "right": {
                                                        "type": "Identifier",
                                                        "start": 1605,
                                                        "end": 1606,
                                                        "name": "b",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      }
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 1607,
                                                      "end": 1608,
                                                      "name": "c",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "typeArguments": null
                                                },
                                                "declare": false
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1731,
      "end": 1774,
      "id": {
        "type": "Identifier",
        "start": 1736,
        "end": 1740,
        "name": "Fish",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1743,
        "end": 1774,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1745,
            "end": 1758,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1745,
              "end": 1749,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1749,
              "end": 1757,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1751,
                "end": 1757,
                "literal": {
                  "type": "Literal",
                  "start": 1751,
                  "end": 1757,
                  "value": "fish",
                  "raw": "'fish'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1759,
            "end": 1772,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1759,
              "end": 1766,
              "name": "hasFins",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1766,
              "end": 1772,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1768,
                "end": 1772,
                "literal": {
                  "type": "Literal",
                  "start": 1768,
                  "end": 1772,
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 1775,
      "end": 1817,
      "id": {
        "type": "Identifier",
        "start": 1780,
        "end": 1783,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1786,
        "end": 1817,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1788,
            "end": 1800,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1788,
              "end": 1792,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1792,
              "end": 1799,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1794,
                "end": 1799,
                "literal": {
                  "type": "Literal",
                  "start": 1794,
                  "end": 1799,
                  "value": "dog",
                  "raw": "'dog'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1801,
            "end": 1815,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1801,
              "end": 1809,
              "name": "saysWoof",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1809,
              "end": 1815,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1811,
                "end": 1815,
                "literal": {
                  "type": "Literal",
                  "start": 1811,
                  "end": 1815,
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 1819,
      "end": 1841,
      "id": {
        "type": "Identifier",
        "start": 1824,
        "end": 1827,
        "name": "Pet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1830,
        "end": 1840,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1830,
            "end": 1834,
            "typeName": {
              "type": "Identifier",
              "start": 1830,
              "end": 1834,
              "name": "Fish",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1837,
            "end": 1840,
            "typeName": {
              "type": "Identifier",
              "start": 1837,
              "end": 1840,
              "name": "Dog",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1843,
      "end": 2036,
      "id": {
        "type": "Identifier",
        "start": 1852,
        "end": 1867,
        "name": "handleDogBroken",
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
          "start": 1889,
          "end": 1901,
          "name": "pet",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1892,
            "end": 1901,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1894,
              "end": 1901,
              "typeName": {
                "type": "Identifier",
                "start": 1894,
                "end": 1901,
                "name": "PetType",
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
        "start": 1903,
        "end": 2036,
        "body": [
          {
            "type": "IfStatement",
            "start": 1909,
            "end": 2034,
            "test": {
              "type": "BinaryExpression",
              "start": 1912,
              "end": 1930,
              "left": {
                "type": "MemberExpression",
                "start": 1912,
                "end": 1920,
                "object": {
                  "type": "Identifier",
                  "start": 1912,
                  "end": 1915,
                  "name": "pet",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1916,
                  "end": 1920,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1925,
                "end": 1930,
                "value": "dog",
                "raw": "'dog'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1932,
              "end": 2034,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1942,
                  "end": 1970,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1948,
                      "end": 1969,
                      "id": {
                        "type": "Identifier",
                        "start": 1948,
                        "end": 1954,
                        "name": "_okay1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1957,
                        "end": 1969,
                        "object": {
                          "type": "Identifier",
                          "start": 1957,
                          "end": 1960,
                          "name": "pet",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1961,
                          "end": 1969,
                          "name": "saysWoof",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1979,
                  "end": 2028,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1985,
                      "end": 2027,
                      "id": {
                        "type": "Identifier",
                        "start": 1985,
                        "end": 2012,
                        "name": "_okay2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1991,
                          "end": 2012,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 1993,
                            "end": 2012,
                            "exprName": {
                              "type": "TSQualifiedName",
                              "start": 2000,
                              "end": 2012,
                              "left": {
                                "type": "Identifier",
                                "start": 2000,
                                "end": 2003,
                                "name": "pet",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2004,
                                "end": 2012,
                                "name": "saysWoof",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2015,
                        "end": 2027,
                        "object": {
                          "type": "Identifier",
                          "start": 2015,
                          "end": 2018,
                          "name": "pet",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2019,
                          "end": 2027,
                          "name": "saysWoof",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1867,
        "end": 1888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1868,
            "end": 1887,
            "name": {
              "type": "Identifier",
              "start": 1868,
              "end": 1875,
              "name": "PetType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1884,
              "end": 1887,
              "typeName": {
                "type": "Identifier",
                "start": 1884,
                "end": 1887,
                "name": "Pet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
      "type": "FunctionDeclaration",
      "start": 2038,
      "end": 2207,
      "id": {
        "type": "Identifier",
        "start": 2047,
        "end": 2063,
        "name": "handleDogWorking",
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
          "start": 2064,
          "end": 2072,
          "name": "pet",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2067,
            "end": 2072,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2069,
              "end": 2072,
              "typeName": {
                "type": "Identifier",
                "start": 2069,
                "end": 2072,
                "name": "Pet",
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
        "start": 2074,
        "end": 2207,
        "body": [
          {
            "type": "IfStatement",
            "start": 2080,
            "end": 2205,
            "test": {
              "type": "BinaryExpression",
              "start": 2083,
              "end": 2101,
              "left": {
                "type": "MemberExpression",
                "start": 2083,
                "end": 2091,
                "object": {
                  "type": "Identifier",
                  "start": 2083,
                  "end": 2086,
                  "name": "pet",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2087,
                  "end": 2091,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2096,
                "end": 2101,
                "value": "dog",
                "raw": "'dog'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2103,
              "end": 2205,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2113,
                  "end": 2141,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2119,
                      "end": 2140,
                      "id": {
                        "type": "Identifier",
                        "start": 2119,
                        "end": 2125,
                        "name": "_okay1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2128,
                        "end": 2140,
                        "object": {
                          "type": "Identifier",
                          "start": 2128,
                          "end": 2131,
                          "name": "pet",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2132,
                          "end": 2140,
                          "name": "saysWoof",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2150,
                  "end": 2199,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2156,
                      "end": 2198,
                      "id": {
                        "type": "Identifier",
                        "start": 2156,
                        "end": 2183,
                        "name": "_okay2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2162,
                          "end": 2183,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 2164,
                            "end": 2183,
                            "exprName": {
                              "type": "TSQualifiedName",
                              "start": 2171,
                              "end": 2183,
                              "left": {
                                "type": "Identifier",
                                "start": 2171,
                                "end": 2174,
                                "name": "pet",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2175,
                                "end": 2183,
                                "name": "saysWoof",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2186,
                        "end": 2198,
                        "object": {
                          "type": "Identifier",
                          "start": 2186,
                          "end": 2189,
                          "name": "pet",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2190,
                          "end": 2198,
                          "name": "saysWoof",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
