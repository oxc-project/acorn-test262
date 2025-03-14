destructuringVariableDeclaration1ES6.ts
```json
{
  "type": "Program",
  "start": 181,
  "end": 2453,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 247,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 185,
            "end": 221,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 186,
                "end": 188,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 188,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 188,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 190,
                "end": 192,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 195,
                "end": 221,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 208,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 199,
                      "decorators": [],
                      "name": "a1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 209,
                    "end": 219,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 211,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 211,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 247,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 232,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 228,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 230,
                  "end": 232,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 234,
                "end": 245,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 236,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 245,
                  "raw": "\"world\"",
                  "value": "world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 324,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 252,
            "end": 299,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 255,
                "decorators": [],
                "name": "a3",
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 257,
                "end": 263,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 258,
                    "end": 262,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 259,
                        "end": 261,
                        "decorators": [],
                        "name": "a4",
                        "optional": false
                      }
                    ],
                    "optional": false
                  }
                ],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 265,
                "end": 267,
                "decorators": [],
                "name": "a5",
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 270,
                "end": 299,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 271,
                    "end": 277
                  },
                  {
                    "type": "TSTupleType",
                    "start": 279,
                    "end": 289,
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "start": 280,
                        "end": 288,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 281,
                            "end": 287
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 291,
                    "end": 298
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 302,
            "end": 324,
            "elements": [
              {
                "type": "Literal",
                "start": 303,
                "end": 304,
                "raw": "1",
                "value": 1
              },
              {
                "type": "ArrayExpression",
                "start": 306,
                "end": 317,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 307,
                    "end": 316,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 308,
                        "end": 315,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 319,
                "end": 323,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 607,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 544,
            "end": 580,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 546,
                "end": 577,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "decorators": [],
                  "name": "b1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 550,
                  "end": 577,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 550,
                    "end": 557,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 552,
                        "end": 555,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 555,
                          "decorators": [],
                          "name": "b11",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 555,
                          "decorators": [],
                          "name": "b11",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 560,
                    "end": 577,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 562,
                        "end": 575,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 562,
                          "end": 565,
                          "decorators": [],
                          "name": "b11",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 567,
                          "end": 575,
                          "raw": "\"string\"",
                          "value": "string"
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 583,
            "end": 607,
            "properties": [
              {
                "type": "Property",
                "start": 585,
                "end": 605,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 587,
                  "decorators": [],
                  "name": "b1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 589,
                  "end": 605,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 591,
                      "end": 603,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 594,
                        "decorators": [],
                        "name": "b11",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 596,
                        "end": 603,
                        "raw": "\"world\"",
                        "value": "world"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 645,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 617,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 620,
            "end": 645,
            "properties": [
              {
                "type": "Property",
                "start": 622,
                "end": 630,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 624,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 626,
                  "end": 630,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 632,
                "end": 643,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 634,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 636,
                  "end": 643,
                  "raw": "\"false\"",
                  "value": "false"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 647,
      "end": 723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 722,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 651,
            "end": 681,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 652,
                "end": 658,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 654,
                  "decorators": [],
                  "name": "b2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 657,
                  "end": 658,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 660,
                "end": 669,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 662,
                  "decorators": [],
                  "name": "b3",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 665,
                  "end": 669,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 671,
                "end": 680,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 673,
                  "decorators": [],
                  "name": "b4",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 680,
                  "decorators": [],
                  "name": "temp",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 684,
            "end": 722,
            "elements": [
              {
                "type": "Literal",
                "start": 685,
                "end": 686,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 688,
                "end": 693,
                "raw": "false",
                "value": false
              },
              {
                "type": "ObjectExpression",
                "start": 695,
                "end": 721,
                "properties": [
                  {
                    "type": "Property",
                    "start": 697,
                    "end": 706,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 699,
                      "decorators": [],
                      "name": "t1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 701,
                      "end": 706,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 708,
                    "end": 719,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 708,
                      "end": 710,
                      "decorators": [],
                      "name": "t2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 712,
                      "end": 719,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 724,
      "end": 795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 728,
          "end": 794,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 728,
            "end": 758,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 729,
                "end": 735,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 731,
                  "decorators": [],
                  "name": "b5",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 734,
                  "end": 735,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 737,
                "end": 746,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 739,
                  "decorators": [],
                  "name": "b6",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 742,
                  "end": 746,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 748,
                "end": 757,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 750,
                  "decorators": [],
                  "name": "b7",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 757,
                  "decorators": [],
                  "name": "temp",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 761,
            "end": 794,
            "elements": [
              {
                "type": "Identifier",
                "start": 762,
                "end": 771,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 773,
                "end": 782,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 784,
                "end": 793,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1033,
      "end": 1055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1037,
          "end": 1054,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1037,
            "end": 1044,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1038,
                "end": 1043,
                "argument": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1043,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1047,
            "end": 1054,
            "elements": [
              {
                "type": "Literal",
                "start": 1048,
                "end": 1049,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1050,
                "end": 1051,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1052,
                "end": 1053,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1057,
      "end": 1089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1061,
          "end": 1088,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1061,
            "end": 1068,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1062,
                "end": 1067,
                "argument": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1067,
                  "decorators": [],
                  "name": "c2",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1071,
            "end": 1088,
            "elements": [
              {
                "type": "Literal",
                "start": 1072,
                "end": 1073,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1074,
                "end": 1075,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1076,
                "end": 1077,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 1079,
                "end": 1087,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1420,
      "end": 1446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1424,
          "end": 1446,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1424,
            "end": 1431,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1425,
                "end": 1427,
                "decorators": [],
                "name": "d1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1428,
                "end": 1430,
                "decorators": [],
                "name": "d2",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1434,
            "end": 1446,
            "elements": [
              {
                "type": "Literal",
                "start": 1435,
                "end": 1436,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1437,
                "end": 1445,
                "raw": "\"string\"",
                "value": "string"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1695,
      "end": 1726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1699,
          "end": 1726,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1699,
            "end": 1704,
            "decorators": [],
            "name": "temp1",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1707,
            "end": 1726,
            "elements": [
              {
                "type": "Literal",
                "start": 1708,
                "end": 1712,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 1714,
                "end": 1719,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 1721,
                "end": 1725,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1727,
      "end": 1766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1731,
          "end": 1765,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1731,
            "end": 1739,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1732,
                "end": 1734,
                "decorators": [],
                "name": "d3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1736,
                "end": 1738,
                "decorators": [],
                "name": "d4",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1742,
            "end": 1765,
            "elements": [
              {
                "type": "Literal",
                "start": 1743,
                "end": 1744,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1746,
                "end": 1754,
                "raw": "\"string\"",
                "value": "string"
              },
              {
                "type": "SpreadElement",
                "start": 1756,
                "end": 1764,
                "argument": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1764,
                  "decorators": [],
                  "name": "temp1",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1811,
      "end": 1891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1815,
          "end": 1890,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1815,
            "end": 1856,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1816,
                "end": 1855,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1817,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayPattern",
                  "start": 1819,
                  "end": 1855,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1820,
                      "end": 1822,
                      "decorators": [],
                      "name": "e1",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1824,
                      "end": 1826,
                      "decorators": [],
                      "name": "e2",
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 1828,
                      "end": 1854,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1828,
                        "end": 1830,
                        "decorators": [],
                        "name": "e3",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1833,
                        "end": 1854,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1835,
                            "end": 1843,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1835,
                              "end": 1837,
                              "decorators": [],
                              "name": "b1",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1839,
                              "end": 1843,
                              "raw": "1000",
                              "value": 1000
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1845,
                            "end": 1852,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1845,
                              "end": 1847,
                              "decorators": [],
                              "name": "b4",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1849,
                              "end": 1852,
                              "raw": "200",
                              "value": 200
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1859,
            "end": 1890,
            "properties": [
              {
                "type": "Property",
                "start": 1861,
                "end": 1888,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1861,
                  "end": 1862,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 1864,
                  "end": 1888,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1865,
                      "end": 1866,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 1868,
                      "end": 1869,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1871,
                      "end": 1887,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1873,
                          "end": 1878,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1873,
                            "end": 1875,
                            "decorators": [],
                            "name": "b1",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1877,
                            "end": 1878,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1880,
                          "end": 1885,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1880,
                            "end": 1882,
                            "decorators": [],
                            "name": "b4",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1884,
                            "end": 1885,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1893,
      "end": 1965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1897,
          "end": 1964,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1897,
            "end": 1930,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1898,
                "end": 1929,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1898,
                  "end": 1899,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayPattern",
                  "start": 1901,
                  "end": 1929,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1902,
                      "end": 1904,
                      "decorators": [],
                      "name": "f1",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1906,
                      "end": 1908,
                      "decorators": [],
                      "name": "f2",
                      "optional": false
                    },
                    {
                      "type": "ObjectPattern",
                      "start": 1910,
                      "end": 1924,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1912,
                          "end": 1918,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1912,
                            "end": 1914,
                            "decorators": [],
                            "name": "f3",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 1916,
                            "end": 1918,
                            "decorators": [],
                            "name": "f4",
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1920,
                          "end": 1922,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1920,
                            "end": 1922,
                            "decorators": [],
                            "name": "f5",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 1920,
                            "end": 1922,
                            "decorators": [],
                            "name": "f5",
                            "optional": false
                          }
                        }
                      ]
                    },
                    null
                  ],
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1933,
            "end": 1964,
            "properties": [
              {
                "type": "Property",
                "start": 1935,
                "end": 1962,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1935,
                  "end": 1936,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 1938,
                  "end": 1962,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1939,
                      "end": 1940,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 1942,
                      "end": 1943,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1945,
                      "end": 1961,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1947,
                          "end": 1952,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1947,
                            "end": 1949,
                            "decorators": [],
                            "name": "f3",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1951,
                            "end": 1952,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1954,
                          "end": 1959,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1954,
                            "end": 1956,
                            "decorators": [],
                            "name": "f5",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1958,
                            "end": 1959,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2287,
      "end": 2367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2291,
          "end": 2366,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2291,
            "end": 2342,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2292,
                "end": 2319,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2293,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 2295,
                  "end": 2319,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2296,
                      "end": 2318,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2296,
                        "end": 2298,
                        "decorators": [],
                        "name": "g1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2296,
                        "end": 2318,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2296,
                          "end": 2298,
                          "decorators": [],
                          "name": "g1",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2301,
                          "end": 2318,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2302,
                              "end": 2311,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 2313,
                              "end": 2317,
                              "raw": "null",
                              "value": null
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2320,
              "end": 2342,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2322,
                "end": 2342,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2324,
                    "end": 2340,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2324,
                      "end": 2325,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2325,
                      "end": 2340,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2327,
                        "end": 2340,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2329,
                            "end": 2338,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2329,
                              "end": 2331,
                              "decorators": [],
                              "name": "g1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2331,
                              "end": 2338,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2333,
                                "end": 2338,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2333,
                                  "end": 2336
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2345,
            "end": 2366,
            "properties": [
              {
                "type": "Property",
                "start": 2347,
                "end": 2364,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2347,
                  "end": 2348,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2350,
                  "end": 2364,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2352,
                      "end": 2362,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2352,
                        "end": 2354,
                        "decorators": [],
                        "name": "g1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2356,
                        "end": 2362,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2357,
                            "end": 2358,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 2360,
                            "end": 2361,
                            "raw": "2",
                            "value": 2
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2368,
      "end": 2451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2372,
          "end": 2450,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2372,
            "end": 2426,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2373,
                "end": 2400,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2373,
                  "end": 2374,
                  "decorators": [],
                  "name": "h",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 2376,
                  "end": 2400,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2377,
                      "end": 2399,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2377,
                        "end": 2379,
                        "decorators": [],
                        "name": "h1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 2377,
                        "end": 2399,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2377,
                          "end": 2379,
                          "decorators": [],
                          "name": "h1",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2382,
                          "end": 2399,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2383,
                              "end": 2392,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 2394,
                              "end": 2398,
                              "raw": "null",
                              "value": null
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2401,
              "end": 2426,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2403,
                "end": 2426,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2405,
                    "end": 2424,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2405,
                      "end": 2406,
                      "decorators": [],
                      "name": "h",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2406,
                      "end": 2424,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2408,
                        "end": 2424,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2410,
                            "end": 2422,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2410,
                              "end": 2412,
                              "decorators": [],
                              "name": "h1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2412,
                              "end": 2422,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2414,
                                "end": 2422,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2414,
                                  "end": 2420
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2429,
            "end": 2450,
            "properties": [
              {
                "type": "Property",
                "start": 2431,
                "end": 2448,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2431,
                  "end": 2432,
                  "decorators": [],
                  "name": "h",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2434,
                  "end": 2448,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2436,
                      "end": 2446,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2436,
                        "end": 2438,
                        "decorators": [],
                        "name": "h1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 2440,
                        "end": 2446,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2441,
                            "end": 2442,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 2444,
                            "end": 2445,
                            "raw": "2",
                            "value": 2
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
