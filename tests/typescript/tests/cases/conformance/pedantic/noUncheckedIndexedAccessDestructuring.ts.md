__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 24,
                  "end": 30
                },
                "start": 24,
                "end": 32
              },
              "start": 22,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
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
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  }
                ],
                "start": 61,
                "end": 77
              },
              "start": 59,
              "end": 77
            },
            "start": 48,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 77
        }
      ],
      "declare": true,
      "start": 34,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 193
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 205
          },
          "definite": false,
          "start": 190,
          "end": 205
        }
      ],
      "declare": false,
      "start": 184,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 207,
        "end": 220
      },
      "directive": null,
      "start": 207,
      "end": 221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 334
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 329,
                "end": 334
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 335
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 346
          },
          "definite": false,
          "start": 328,
          "end": 346
        }
      ],
      "declare": false,
      "start": 322,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 355
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 365
          }
        ],
        "optional": false,
        "start": 348,
        "end": 366
      },
      "directive": null,
      "start": 348,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              null,
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 504
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 499,
                "end": 504
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 505
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 516
          },
          "definite": false,
          "start": 494,
          "end": 516
        }
      ],
      "declare": false,
      "start": 488,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 518,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 535
          }
        ],
        "optional": false,
        "start": 518,
        "end": 536
      },
      "directive": null,
      "start": 518,
      "end": 537
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
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 673,
                            "end": 679
                          },
                          "start": 671,
                          "end": 679
                        },
                        "start": 670,
                        "end": 679
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 682,
                        "end": 688
                      },
                      "start": 680,
                      "end": 688
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 669,
                    "end": 688
                  }
                ],
                "start": 667,
                "end": 690
              },
              "start": 665,
              "end": 690
            },
            "start": 659,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 659,
          "end": 690
        }
      ],
      "declare": true,
      "start": 645,
      "end": 691
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 703
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 705
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 714
          },
          "definite": false,
          "start": 699,
          "end": 714
        }
      ],
      "declare": false,
      "start": 693,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 716,
          "end": 727
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 716,
        "end": 729
      },
      "directive": null,
      "start": 716,
      "end": 730
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 784
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 779,
                "end": 784
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 786
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 795
          },
          "definite": false,
          "start": 777,
          "end": 795
        }
      ],
      "declare": false,
      "start": 771,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "optional": false,
            "computed": false,
            "start": 797,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 810
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 797,
        "end": 812
      },
      "directive": null,
      "start": 797,
      "end": 813
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
            "name": "numMapPoint",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 907,
                          "end": 908
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          },
                          "start": 908,
                          "end": 916
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 907,
                        "end": 917
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 919
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 921,
                            "end": 927
                          },
                          "start": 919,
                          "end": 927
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 918,
                        "end": 927
                      }
                    ],
                    "start": 905,
                    "end": 928
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 937,
                                "end": 943
                              },
                              "start": 935,
                              "end": 943
                            },
                            "start": 934,
                            "end": 943
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 946,
                            "end": 952
                          },
                          "start": 944,
                          "end": 952
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 933,
                        "end": 952
                      }
                    ],
                    "start": 931,
                    "end": 954
                  }
                ],
                "start": 905,
                "end": 954
              },
              "start": 903,
              "end": 954
            },
            "start": 892,
            "end": 954
          },
          "init": null,
          "definite": false,
          "start": 892,
          "end": 954
        }
      ],
      "declare": true,
      "start": 878,
      "end": 955
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 971
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 971
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 970,
                    "end": 971
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 973,
                    "end": 974
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 976,
                    "end": 977
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 979
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 993
              },
              "definite": false,
              "start": 968,
              "end": 993
            }
          ],
          "declare": false,
          "start": 962,
          "end": 994
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 999,
                "end": 1000
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1008
              },
              "optional": false,
              "computed": false,
              "start": 999,
              "end": 1008
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 999,
            "end": 1010
          },
          "directive": null,
          "start": 999,
          "end": 1011
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1038
              },
              "optional": false,
              "computed": false,
              "start": 1029,
              "end": 1038
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1029,
            "end": 1040
          },
          "directive": null,
          "start": 1029,
          "end": 1041
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1060
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1061,
                "end": 1068
              },
              "optional": false,
              "computed": false,
              "start": 1059,
              "end": 1068
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1059,
            "end": 1070
          },
          "directive": null,
          "start": 1059,
          "end": 1071
        }
      ],
      "start": 956,
      "end": 1089
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1106
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1106
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1105,
                    "end": 1106
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1112
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1108,
                    "end": 1112
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1114
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1128
              },
              "definite": false,
              "start": 1103,
              "end": 1128
            }
          ],
          "declare": false,
          "start": 1097,
          "end": 1129
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1143
              },
              "optional": false,
              "computed": false,
              "start": 1134,
              "end": 1143
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1134,
            "end": 1145
          },
          "directive": null,
          "start": 1134,
          "end": 1146
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1165
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                },
                "optional": false,
                "computed": false,
                "start": 1164,
                "end": 1167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1175
              },
              "optional": false,
              "computed": false,
              "start": 1164,
              "end": 1175
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1164,
            "end": 1177
          },
          "directive": null,
          "start": 1164,
          "end": 1178
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1199
                },
                "optional": false,
                "computed": false,
                "start": 1196,
                "end": 1199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1207
              },
              "optional": false,
              "computed": false,
              "start": 1196,
              "end": 1207
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1196,
            "end": 1209
          },
          "directive": null,
          "start": 1196,
          "end": 1210
        }
      ],
      "start": 1091,
      "end": 1228
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1245
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1245
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1244,
                    "end": 1245
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1247,
                    "end": 1251
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1253
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1267
              },
              "definite": false,
              "start": 1242,
              "end": 1267
            }
          ],
          "declare": false,
          "start": 1236,
          "end": 1268
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1287
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1287
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1273,
            "end": 1289
          },
          "directive": null,
          "start": 1273,
          "end": 1290
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1317
                },
                "optional": false,
                "computed": false,
                "start": 1309,
                "end": 1317
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1325
              },
              "optional": false,
              "computed": false,
              "start": 1309,
              "end": 1325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1309,
            "end": 1327
          },
          "directive": null,
          "start": 1309,
          "end": 1328
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1348
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1355
                },
                "optional": false,
                "computed": false,
                "start": 1347,
                "end": 1355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1363
              },
              "optional": false,
              "computed": false,
              "start": 1347,
              "end": 1363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1347,
            "end": 1365
          },
          "directive": null,
          "start": 1347,
          "end": 1366
        }
      ],
      "start": 1230,
      "end": 1384
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1414,
                "end": 1420
              },
              "start": 1412,
              "end": 1420
            },
            "start": 1399,
            "end": 1420
          },
          "init": null,
          "definite": false,
          "start": 1399,
          "end": 1420
        }
      ],
      "declare": true,
      "start": 1387,
      "end": 1421
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string_undef",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1455,
                    "end": 1461
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1464,
                    "end": 1473
                  }
                ],
                "start": 1455,
                "end": 1473
              },
              "start": 1453,
              "end": 1473
            },
            "start": 1434,
            "end": 1473
          },
          "init": null,
          "definite": false,
          "start": 1434,
          "end": 1473
        }
      ],
      "declare": true,
      "start": 1422,
      "end": 1474
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string_arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1506,
                  "end": 1512
                },
                "start": 1506,
                "end": 1514
              },
              "start": 1504,
              "end": 1514
            },
            "start": 1487,
            "end": 1514
          },
          "init": null,
          "definite": false,
          "start": 1487,
          "end": 1514
        }
      ],
      "declare": true,
      "start": 1475,
      "end": 1515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1551
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1552
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1555,
          "end": 1563
        },
        "start": 1537,
        "end": 1563
      },
      "directive": null,
      "start": 1537,
      "end": 1564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string_undef",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1601
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1581,
          "end": 1602
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1605,
          "end": 1613
        },
        "start": 1581,
        "end": 1613
      },
      "directive": null,
      "start": 1581,
      "end": 1614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            null,
            null,
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "target_string_arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1654
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1634,
              "end": 1654
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1655
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1666
        },
        "start": 1629,
        "end": 1666
      },
      "directive": null,
      "start": 1629,
      "end": 1667
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
                  },
                  "start": 1693,
                  "end": 1701
                },
                "start": 1692,
                "end": 1701
              },
              "init": null,
              "definite": false,
              "start": 1692,
              "end": 1701
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1706,
                    "end": 1712
                  },
                  "start": 1704,
                  "end": 1712
                },
                "start": 1703,
                "end": 1712
              },
              "init": null,
              "definite": false,
              "start": 1703,
              "end": 1712
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1717,
                        "end": 1723
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1726,
                        "end": 1735
                      }
                    ],
                    "start": 1717,
                    "end": 1735
                  },
                  "start": 1715,
                  "end": 1735
                },
                "start": 1714,
                "end": 1735
              },
              "init": null,
              "definite": false,
              "start": 1714,
              "end": 1735
            }
          ],
          "declare": false,
          "start": 1688,
          "end": 1736
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1745
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1745
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1744,
                  "end": 1745
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1747,
                  "end": 1748
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1750,
                  "end": 1751
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1753
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1767
            },
            "start": 1742,
            "end": 1767
          },
          "directive": null,
          "start": 1741,
          "end": 1769
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1795,
                    "end": 1801
                  },
                  "start": 1793,
                  "end": 1801
                },
                "start": 1792,
                "end": 1801
              },
              "init": null,
              "definite": false,
              "start": 1792,
              "end": 1801
            }
          ],
          "declare": false,
          "start": 1788,
          "end": 1802
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1810,
                  "end": 1811
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1813
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1827
            },
            "start": 1808,
            "end": 1827
          },
          "directive": null,
          "start": 1807,
          "end": 1829
        }
      ],
      "start": 1682,
      "end": 1847
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1847
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 14,
    "end": 22,
    "range": [
      14,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41,
    "range": [
      34,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47,
    "range": [
      42,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "strStrTuple",
    "start": 48,
    "end": 59,
    "range": [
      48,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189,
    "range": [
      184,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 191,
    "end": 193,
    "range": [
      191,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 197,
    "end": 205,
    "range": [
      197,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 207,
    "end": 209,
    "range": [
      207,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 210,
    "end": 218,
    "range": [
      210,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 329,
    "end": 332,
    "range": [
      329,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 332,
    "end": 334,
    "range": [
      332,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 338,
    "end": 346,
    "range": [
      338,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 356,
    "end": 365,
    "range": [
      356,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 488,
    "end": 493,
    "range": [
      488,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 502,
    "end": 504,
    "range": [
      502,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 508,
    "end": 516,
    "range": [
      508,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 518,
    "end": 520,
    "range": [
      518,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 521,
    "end": 525,
    "range": [
      521,
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
    "value": "undefined",
    "start": 526,
    "end": 535,
    "range": [
      526,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 645,
    "end": 652,
    "range": [
      645,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 653,
    "end": 658,
    "range": [
      653,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 659,
    "end": 665,
    "range": [
      659,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 673,
    "end": 679,
    "range": [
      673,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
    "start": 682,
    "end": 688,
    "range": [
      682,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 693,
    "end": 698,
    "range": [
      693,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 701,
    "end": 703,
    "range": [
      701,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 708,
    "end": 714,
    "range": [
      708,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 716,
    "end": 718,
    "range": [
      716,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 719,
    "end": 727,
    "range": [
      719,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 782,
    "end": 784,
    "range": [
      782,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 789,
    "end": 795,
    "range": [
      789,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 802,
    "end": 810,
    "range": [
      802,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 878,
    "end": 885,
    "range": [
      878,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 886,
    "end": 891,
    "range": [
      886,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 892,
    "end": 903,
    "range": [
      892,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 921,
    "end": 927,
    "range": [
      921,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 937,
    "end": 943,
    "range": [
      937,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 962,
    "end": 967,
    "range": [
      962,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 982,
    "end": 993,
    "range": [
      982,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1001,
    "end": 1008,
    "range": [
      1001,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1031,
    "end": 1038,
    "range": [
      1031,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1061,
    "end": 1068,
    "range": [
      1061,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1097,
    "end": 1102,
    "range": [
      1097,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1108,
    "end": 1111,
    "range": [
      1108,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1117,
    "end": 1128,
    "range": [
      1117,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1136,
    "end": 1143,
    "range": [
      1136,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1168,
    "end": 1175,
    "range": [
      1168,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1200,
    "end": 1207,
    "range": [
      1200,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1236,
    "end": 1241,
    "range": [
      1236,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1247,
    "end": 1250,
    "range": [
      1247,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1256,
    "end": 1267,
    "range": [
      1256,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1280,
    "end": 1287,
    "range": [
      1280,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1318,
    "end": 1325,
    "range": [
      1318,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1356,
    "end": 1363,
    "range": [
      1356,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1387,
    "end": 1394,
    "range": [
      1387,
      1394
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1395,
    "end": 1398,
    "range": [
      1395,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string",
    "start": 1399,
    "end": 1412,
    "range": [
      1399,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1414,
    "end": 1420,
    "range": [
      1414,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1422,
    "end": 1429,
    "range": [
      1422,
      1429
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1430,
    "end": 1433,
    "range": [
      1430,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string_undef",
    "start": 1434,
    "end": 1453,
    "range": [
      1434,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1455,
    "end": 1461,
    "range": [
      1455,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1464,
    "end": 1473,
    "range": [
      1464,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1475,
    "end": 1482,
    "range": [
      1475,
      1482
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1483,
    "end": 1486,
    "range": [
      1483,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string_arr",
    "start": 1487,
    "end": 1504,
    "range": [
      1487,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1506,
    "end": 1512,
    "range": [
      1506,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string",
    "start": 1538,
    "end": 1551,
    "range": [
      1538,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1555,
    "end": 1563,
    "range": [
      1555,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string_undef",
    "start": 1582,
    "end": 1601,
    "range": [
      1582,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1605,
    "end": 1613,
    "range": [
      1605,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1634,
    "end": 1637,
    "range": [
      1634,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "target_string_arr",
    "start": 1637,
    "end": 1654,
    "range": [
      1637,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1658,
    "end": 1666,
    "range": [
      1658,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1688,
    "end": 1691,
    "range": [
      1688,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1695,
    "end": 1701,
    "range": [
      1695,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1706,
    "end": 1712,
    "range": [
      1706,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1717,
    "end": 1723,
    "range": [
      1717,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1726,
    "end": 1735,
    "range": [
      1726,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1756,
    "end": 1767,
    "range": [
      1756,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1788,
    "end": 1791,
    "range": [
      1788,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1795,
    "end": 1801,
    "range": [
      1795,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1816,
    "end": 1827,
    "range": [
      1816,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  }
]
```
