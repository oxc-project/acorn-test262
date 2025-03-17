__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1848,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 32,
            "name": "strArray",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 32,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 24,
                "end": 32,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 24,
                  "end": 30
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 77,
            "name": "strStrTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 61,
                "end": 77,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 205,
          "id": {
            "type": "ArrayPattern",
            "start": 190,
            "end": 194,
            "elements": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 193,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 197,
            "end": 205,
            "name": "strArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 207,
        "end": 220,
        "callee": {
          "type": "MemberExpression",
          "start": 207,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 210,
            "end": 218,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 346,
          "id": {
            "type": "ArrayPattern",
            "start": 328,
            "end": 335,
            "elements": [
              {
                "type": "RestElement",
                "start": 329,
                "end": 334,
                "argument": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "name": "s2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 338,
            "end": 346,
            "name": "strArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 367,
      "expression": {
        "type": "CallExpression",
        "start": 348,
        "end": 366,
        "callee": {
          "type": "MemberExpression",
          "start": 348,
          "end": 355,
          "object": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 355,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 356,
            "end": 365,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 516,
          "id": {
            "type": "ArrayPattern",
            "start": 494,
            "end": 505,
            "elements": [
              null,
              null,
              {
                "type": "RestElement",
                "start": 499,
                "end": 504,
                "argument": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 504,
                  "name": "s3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 508,
            "end": 516,
            "name": "strArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 518,
      "end": 537,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 536,
        "callee": {
          "type": "MemberExpression",
          "start": 518,
          "end": 525,
          "object": {
            "type": "Identifier",
            "start": 518,
            "end": 520,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 521,
            "end": 525,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 526,
            "end": 535,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 645,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 690,
            "name": "strMap",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 690,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 667,
                "end": 690,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 669,
                    "end": 688,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 670,
                        "end": 679,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 671,
                          "end": 679,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 673,
                            "end": 679
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 680,
                      "end": 688,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 682,
                        "end": 688
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 715,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 714,
          "id": {
            "type": "ObjectPattern",
            "start": 699,
            "end": 705,
            "properties": [
              {
                "type": "Property",
                "start": 701,
                "end": 703,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 703,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 703,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 708,
            "end": 714,
            "name": "strMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 716,
      "end": 730,
      "expression": {
        "type": "CallExpression",
        "start": 716,
        "end": 729,
        "callee": {
          "type": "MemberExpression",
          "start": 716,
          "end": 727,
          "object": {
            "type": "Identifier",
            "start": 716,
            "end": 718,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 719,
            "end": 727,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 777,
          "end": 795,
          "id": {
            "type": "ObjectPattern",
            "start": 777,
            "end": 786,
            "properties": [
              {
                "type": "RestElement",
                "start": 779,
                "end": 784,
                "argument": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 784,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 789,
            "end": 795,
            "name": "strMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 813,
      "expression": {
        "type": "CallExpression",
        "start": 797,
        "end": 812,
        "callee": {
          "type": "MemberExpression",
          "start": 797,
          "end": 810,
          "object": {
            "type": "MemberExpression",
            "start": 797,
            "end": 801,
            "object": {
              "type": "Identifier",
              "start": 797,
              "end": 799,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 802,
            "end": 810,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 878,
      "end": 955,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 954,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 954,
            "name": "numMapPoint",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 903,
              "end": 954,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 905,
                "end": 954,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 905,
                    "end": 928,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 907,
                        "end": 917,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 908,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 908,
                          "end": 916,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 918,
                        "end": 927,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 918,
                          "end": 919,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 919,
                          "end": 927,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 921,
                            "end": 927
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 931,
                    "end": 954,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 933,
                        "end": 952,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 934,
                            "end": 943,
                            "name": "s",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 935,
                              "end": 943,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 937,
                                "end": 943
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 944,
                          "end": 952,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 946,
                            "end": 952
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "BlockStatement",
      "start": 956,
      "end": 1089,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 962,
          "end": 994,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 968,
              "end": 993,
              "id": {
                "type": "ObjectPattern",
                "start": 968,
                "end": 979,
                "properties": [
                  {
                    "type": "Property",
                    "start": 970,
                    "end": 971,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 970,
                      "end": 971,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 970,
                      "end": 971,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 973,
                    "end": 974,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 976,
                    "end": 977,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 977,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 977,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 982,
                "end": 993,
                "name": "numMapPoint",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 999,
          "end": 1011,
          "expression": {
            "type": "CallExpression",
            "start": 999,
            "end": 1010,
            "callee": {
              "type": "MemberExpression",
              "start": 999,
              "end": 1008,
              "object": {
                "type": "Identifier",
                "start": 999,
                "end": 1000,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1001,
                "end": 1008,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1029,
          "end": 1041,
          "expression": {
            "type": "CallExpression",
            "start": 1029,
            "end": 1040,
            "callee": {
              "type": "MemberExpression",
              "start": 1029,
              "end": 1038,
              "object": {
                "type": "Identifier",
                "start": 1029,
                "end": 1030,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1031,
                "end": 1038,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1059,
          "end": 1071,
          "expression": {
            "type": "CallExpression",
            "start": 1059,
            "end": 1070,
            "callee": {
              "type": "MemberExpression",
              "start": 1059,
              "end": 1068,
              "object": {
                "type": "Identifier",
                "start": 1059,
                "end": 1060,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1061,
                "end": 1068,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1091,
      "end": 1228,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1097,
          "end": 1129,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1103,
              "end": 1128,
              "id": {
                "type": "ObjectPattern",
                "start": 1103,
                "end": 1114,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1105,
                    "end": 1106,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1105,
                      "end": 1106,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1105,
                      "end": 1106,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1108,
                    "end": 1112,
                    "argument": {
                      "type": "Identifier",
                      "start": 1111,
                      "end": 1112,
                      "name": "q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 1117,
                "end": 1128,
                "name": "numMapPoint",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1134,
          "end": 1146,
          "expression": {
            "type": "CallExpression",
            "start": 1134,
            "end": 1145,
            "callee": {
              "type": "MemberExpression",
              "start": 1134,
              "end": 1143,
              "object": {
                "type": "Identifier",
                "start": 1134,
                "end": 1135,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1136,
                "end": 1143,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1164,
          "end": 1178,
          "expression": {
            "type": "CallExpression",
            "start": 1164,
            "end": 1177,
            "callee": {
              "type": "MemberExpression",
              "start": 1164,
              "end": 1175,
              "object": {
                "type": "MemberExpression",
                "start": 1164,
                "end": 1167,
                "object": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1165,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1167,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1168,
                "end": 1175,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1196,
          "end": 1210,
          "expression": {
            "type": "CallExpression",
            "start": 1196,
            "end": 1209,
            "callee": {
              "type": "MemberExpression",
              "start": 1196,
              "end": 1207,
              "object": {
                "type": "MemberExpression",
                "start": 1196,
                "end": 1199,
                "object": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1197,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1198,
                  "end": 1199,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1200,
                "end": 1207,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1230,
      "end": 1384,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1236,
          "end": 1268,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1242,
              "end": 1267,
              "id": {
                "type": "ObjectPattern",
                "start": 1242,
                "end": 1253,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1244,
                    "end": 1245,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1244,
                      "end": 1245,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1244,
                      "end": 1245,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 1247,
                    "end": 1251,
                    "argument": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1251,
                      "name": "q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 1256,
                "end": 1267,
                "name": "numMapPoint",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1273,
          "end": 1290,
          "expression": {
            "type": "CallExpression",
            "start": 1273,
            "end": 1289,
            "callee": {
              "type": "MemberExpression",
              "start": 1273,
              "end": 1287,
              "object": {
                "type": "Identifier",
                "start": 1273,
                "end": 1274,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1280,
                "end": 1287,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1309,
          "end": 1328,
          "expression": {
            "type": "CallExpression",
            "start": 1309,
            "end": 1327,
            "callee": {
              "type": "MemberExpression",
              "start": 1309,
              "end": 1325,
              "object": {
                "type": "MemberExpression",
                "start": 1309,
                "end": 1317,
                "object": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1310,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1317,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1318,
                "end": 1325,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 1347,
          "end": 1366,
          "expression": {
            "type": "CallExpression",
            "start": 1347,
            "end": 1365,
            "callee": {
              "type": "MemberExpression",
              "start": 1347,
              "end": 1363,
              "object": {
                "type": "MemberExpression",
                "start": 1347,
                "end": 1355,
                "object": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1348,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1354,
                  "end": 1355,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1356,
                "end": 1363,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 1387,
      "end": 1421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1399,
          "end": 1420,
          "id": {
            "type": "Identifier",
            "start": 1399,
            "end": 1420,
            "name": "target_string",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1412,
              "end": 1420,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1414,
                "end": 1420
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1422,
      "end": 1474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1434,
          "end": 1473,
          "id": {
            "type": "Identifier",
            "start": 1434,
            "end": 1473,
            "name": "target_string_undef",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1453,
              "end": 1473,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1455,
                "end": 1473,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1475,
      "end": 1515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1487,
          "end": 1514,
          "id": {
            "type": "Identifier",
            "start": 1487,
            "end": 1514,
            "name": "target_string_arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1504,
              "end": 1514,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1506,
                "end": 1514,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1506,
                  "end": 1512
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1537,
      "end": 1564,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1537,
        "end": 1563,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1537,
          "end": 1552,
          "elements": [
            {
              "type": "Identifier",
              "start": 1538,
              "end": 1551,
              "name": "target_string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1555,
          "end": 1563,
          "name": "strArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1581,
      "end": 1614,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1581,
        "end": 1613,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1581,
          "end": 1602,
          "elements": [
            {
              "type": "Identifier",
              "start": 1582,
              "end": 1601,
              "name": "target_string_undef",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1605,
          "end": 1613,
          "name": "strArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1629,
      "end": 1667,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1629,
        "end": 1666,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1629,
          "end": 1655,
          "elements": [
            null,
            null,
            null,
            {
              "type": "RestElement",
              "start": 1634,
              "end": 1654,
              "argument": {
                "type": "Identifier",
                "start": 1637,
                "end": 1654,
                "name": "target_string_arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1658,
          "end": 1666,
          "name": "strArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "BlockStatement",
      "start": 1682,
      "end": 1847,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1688,
          "end": 1736,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1692,
              "end": 1701,
              "id": {
                "type": "Identifier",
                "start": 1692,
                "end": 1701,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1693,
                  "end": 1701,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 1703,
              "end": 1712,
              "id": {
                "type": "Identifier",
                "start": 1703,
                "end": 1712,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1704,
                  "end": 1712,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1706,
                    "end": 1712
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            },
            {
              "type": "VariableDeclarator",
              "start": 1714,
              "end": 1735,
              "id": {
                "type": "Identifier",
                "start": 1714,
                "end": 1735,
                "name": "z",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1715,
                  "end": 1735,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1717,
                    "end": 1735,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1741,
          "end": 1769,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1742,
            "end": 1767,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1742,
              "end": 1753,
              "properties": [
                {
                  "type": "Property",
                  "start": 1744,
                  "end": 1745,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1744,
                    "end": 1745,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1744,
                    "end": 1745,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1747,
                  "end": 1748,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1747,
                    "end": 1748,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1747,
                    "end": 1748,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1750,
                  "end": 1751,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1750,
                    "end": 1751,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1750,
                    "end": 1751,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1756,
              "end": 1767,
              "name": "numMapPoint",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1788,
          "end": 1802,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1792,
              "end": 1801,
              "id": {
                "type": "Identifier",
                "start": 1792,
                "end": 1801,
                "name": "q",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1793,
                  "end": 1801,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1795,
                    "end": 1801
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1807,
          "end": 1829,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1808,
            "end": 1827,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1808,
              "end": 1813,
              "properties": [
                {
                  "type": "Property",
                  "start": 1810,
                  "end": 1811,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1811,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1811,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1816,
              "end": 1827,
              "name": "numMapPoint",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
