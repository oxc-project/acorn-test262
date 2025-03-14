destructuringVariableDeclaration1ES5.ts
```json
{
  "type": "Program",
  "start": 165,
  "end": 2437,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 231,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 169,
            "end": 205,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 170,
                "end": 172,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 172,
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
                  "start": 170,
                  "end": 172,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 174,
                "end": 176,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
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
                  "start": 174,
                  "end": 176,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 205,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 181,
                    "end": 192,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "decorators": [],
                      "name": "a1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 183,
                      "end": 191,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 185,
                        "end": 191
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 193,
                    "end": 203,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 195,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 208,
            "end": 231,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 216,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
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
                  "start": 214,
                  "end": 216,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 218,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 220,
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
                  "start": 222,
                  "end": 229,
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
      "start": 232,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 308,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 236,
            "end": 283,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 237,
                "end": 239,
                "decorators": [],
                "name": "a3",
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 241,
                "end": 247,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 242,
                    "end": 246,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 245,
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
                "start": 249,
                "end": 251,
                "decorators": [],
                "name": "a5",
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 254,
                "end": 283,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 255,
                    "end": 261
                  },
                  {
                    "type": "TSTupleType",
                    "start": 263,
                    "end": 273,
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "start": 264,
                        "end": 272,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 265,
                            "end": 271
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 275,
                    "end": 282
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 286,
            "end": 308,
            "elements": [
              {
                "type": "Literal",
                "start": 287,
                "end": 288,
                "raw": "1",
                "value": 1
              },
              {
                "type": "ArrayExpression",
                "start": 290,
                "end": 301,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 291,
                    "end": 300,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 292,
                        "end": 299,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 303,
                "end": 307,
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
      "start": 524,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 591,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 528,
            "end": 564,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 530,
                "end": 561,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 532,
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
                  "start": 534,
                  "end": 561,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 534,
                    "end": 541,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 536,
                        "end": 539,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 539,
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
                          "start": 536,
                          "end": 539,
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
                    "start": 544,
                    "end": 561,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 546,
                        "end": 559,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 549,
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
                          "start": 551,
                          "end": 559,
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
            "start": 567,
            "end": 591,
            "properties": [
              {
                "type": "Property",
                "start": 569,
                "end": 589,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 571,
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
                  "start": 573,
                  "end": 589,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 575,
                      "end": 587,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 578,
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
                        "start": 580,
                        "end": 587,
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
      "start": 593,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 629,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 601,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 604,
            "end": 629,
            "properties": [
              {
                "type": "Property",
                "start": 606,
                "end": 614,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 608,
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
                  "start": 610,
                  "end": 614,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 616,
                "end": 627,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 618,
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
                  "start": 620,
                  "end": 627,
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
      "start": 631,
      "end": 707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 706,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 635,
            "end": 665,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 636,
                "end": 642,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 638,
                  "decorators": [],
                  "name": "b2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 641,
                  "end": 642,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 644,
                "end": 653,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 646,
                  "decorators": [],
                  "name": "b3",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 649,
                  "end": 653,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 655,
                "end": 664,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 657,
                  "decorators": [],
                  "name": "b4",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 664,
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
            "start": 668,
            "end": 706,
            "elements": [
              {
                "type": "Literal",
                "start": 669,
                "end": 670,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 672,
                "end": 677,
                "raw": "false",
                "value": false
              },
              {
                "type": "ObjectExpression",
                "start": 679,
                "end": 705,
                "properties": [
                  {
                    "type": "Property",
                    "start": 681,
                    "end": 690,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 683,
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
                      "start": 685,
                      "end": 690,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 692,
                    "end": 703,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 694,
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
                      "start": 696,
                      "end": 703,
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
      "start": 708,
      "end": 779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 778,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 712,
            "end": 742,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 713,
                "end": 719,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 715,
                  "decorators": [],
                  "name": "b5",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 718,
                  "end": 719,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 721,
                "end": 730,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 723,
                  "decorators": [],
                  "name": "b6",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 726,
                  "end": 730,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 732,
                "end": 741,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 734,
                  "decorators": [],
                  "name": "b7",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 741,
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
            "start": 745,
            "end": 778,
            "elements": [
              {
                "type": "Identifier",
                "start": 746,
                "end": 755,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 757,
                "end": 766,
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 768,
                "end": 777,
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
      "start": 1017,
      "end": 1039,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1038,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1021,
            "end": 1028,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1022,
                "end": 1027,
                "argument": {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1027,
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
            "start": 1031,
            "end": 1038,
            "elements": [
              {
                "type": "Literal",
                "start": 1032,
                "end": 1033,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1034,
                "end": 1035,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1036,
                "end": 1037,
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
      "start": 1041,
      "end": 1073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1045,
          "end": 1072,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1045,
            "end": 1052,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 1046,
                "end": 1051,
                "argument": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1051,
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
            "start": 1055,
            "end": 1072,
            "elements": [
              {
                "type": "Literal",
                "start": 1056,
                "end": 1057,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1058,
                "end": 1059,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1060,
                "end": 1061,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 1063,
                "end": 1071,
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
      "start": 1404,
      "end": 1430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1408,
          "end": 1430,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1408,
            "end": 1415,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1409,
                "end": 1411,
                "decorators": [],
                "name": "d1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1412,
                "end": 1414,
                "decorators": [],
                "name": "d2",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1418,
            "end": 1430,
            "elements": [
              {
                "type": "Literal",
                "start": 1419,
                "end": 1420,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1421,
                "end": 1429,
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
      "start": 1679,
      "end": 1710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1683,
          "end": 1710,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1683,
            "end": 1688,
            "decorators": [],
            "name": "temp1",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1691,
            "end": 1710,
            "elements": [
              {
                "type": "Literal",
                "start": 1692,
                "end": 1696,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 1698,
                "end": 1703,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 1705,
                "end": 1709,
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
      "start": 1711,
      "end": 1750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1715,
          "end": 1749,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1715,
            "end": 1723,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1716,
                "end": 1718,
                "decorators": [],
                "name": "d3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1720,
                "end": 1722,
                "decorators": [],
                "name": "d4",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1726,
            "end": 1749,
            "elements": [
              {
                "type": "Literal",
                "start": 1727,
                "end": 1728,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1730,
                "end": 1738,
                "raw": "\"string\"",
                "value": "string"
              },
              {
                "type": "SpreadElement",
                "start": 1740,
                "end": 1748,
                "argument": {
                  "type": "Identifier",
                  "start": 1743,
                  "end": 1748,
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
      "start": 1795,
      "end": 1875,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1799,
          "end": 1874,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1799,
            "end": 1840,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1800,
                "end": 1839,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1800,
                  "end": 1801,
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
                  "start": 1803,
                  "end": 1839,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1804,
                      "end": 1806,
                      "decorators": [],
                      "name": "e1",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1810,
                      "decorators": [],
                      "name": "e2",
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 1812,
                      "end": 1838,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1812,
                        "end": 1814,
                        "decorators": [],
                        "name": "e3",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1817,
                        "end": 1838,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1819,
                            "end": 1827,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1819,
                              "end": 1821,
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
                              "start": 1823,
                              "end": 1827,
                              "raw": "1000",
                              "value": 1000
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1829,
                            "end": 1836,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1829,
                              "end": 1831,
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
                              "start": 1833,
                              "end": 1836,
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
            "start": 1843,
            "end": 1874,
            "properties": [
              {
                "type": "Property",
                "start": 1845,
                "end": 1872,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1845,
                  "end": 1846,
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
                  "start": 1848,
                  "end": 1872,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1849,
                      "end": 1850,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 1852,
                      "end": 1853,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1855,
                      "end": 1871,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1857,
                          "end": 1862,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1857,
                            "end": 1859,
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
                            "start": 1861,
                            "end": 1862,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1864,
                          "end": 1869,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1864,
                            "end": 1866,
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
                            "start": 1868,
                            "end": 1869,
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
      "start": 1877,
      "end": 1949,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1881,
          "end": 1948,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1881,
            "end": 1914,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1882,
                "end": 1913,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1882,
                  "end": 1883,
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
                  "start": 1885,
                  "end": 1913,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1886,
                      "end": 1888,
                      "decorators": [],
                      "name": "f1",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1890,
                      "end": 1892,
                      "decorators": [],
                      "name": "f2",
                      "optional": false
                    },
                    {
                      "type": "ObjectPattern",
                      "start": 1894,
                      "end": 1908,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1896,
                          "end": 1902,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1896,
                            "end": 1898,
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
                            "start": 1900,
                            "end": 1902,
                            "decorators": [],
                            "name": "f4",
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1904,
                          "end": 1906,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1904,
                            "end": 1906,
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
                            "start": 1904,
                            "end": 1906,
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
            "start": 1917,
            "end": 1948,
            "properties": [
              {
                "type": "Property",
                "start": 1919,
                "end": 1946,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1919,
                  "end": 1920,
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
                  "start": 1922,
                  "end": 1946,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1923,
                      "end": 1924,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 1926,
                      "end": 1927,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1929,
                      "end": 1945,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1931,
                          "end": 1936,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1931,
                            "end": 1933,
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
                            "start": 1935,
                            "end": 1936,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1938,
                          "end": 1943,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1938,
                            "end": 1940,
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
                            "start": 1942,
                            "end": 1943,
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
      "start": 2271,
      "end": 2351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2275,
          "end": 2350,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2275,
            "end": 2326,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2276,
                "end": 2303,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2276,
                  "end": 2277,
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
                  "start": 2279,
                  "end": 2303,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2280,
                      "end": 2302,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2280,
                        "end": 2282,
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
                        "start": 2280,
                        "end": 2302,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2280,
                          "end": 2282,
                          "decorators": [],
                          "name": "g1",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2285,
                          "end": 2302,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2286,
                              "end": 2295,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 2297,
                              "end": 2301,
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
              "start": 2304,
              "end": 2326,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2306,
                "end": 2326,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2308,
                    "end": 2324,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2308,
                      "end": 2309,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2309,
                      "end": 2324,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2311,
                        "end": 2324,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2313,
                            "end": 2322,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2313,
                              "end": 2315,
                              "decorators": [],
                              "name": "g1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2315,
                              "end": 2322,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2317,
                                "end": 2322,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2317,
                                  "end": 2320
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
            "start": 2329,
            "end": 2350,
            "properties": [
              {
                "type": "Property",
                "start": 2331,
                "end": 2348,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2332,
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
                  "start": 2334,
                  "end": 2348,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2336,
                      "end": 2346,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2336,
                        "end": 2338,
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
                        "start": 2340,
                        "end": 2346,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2341,
                            "end": 2342,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 2344,
                            "end": 2345,
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
      "start": 2352,
      "end": 2435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2356,
          "end": 2434,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 2356,
            "end": 2410,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 2357,
                "end": 2384,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2357,
                  "end": 2358,
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
                  "start": 2360,
                  "end": 2384,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2361,
                      "end": 2383,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2361,
                        "end": 2363,
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
                        "start": 2361,
                        "end": 2383,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2361,
                          "end": 2363,
                          "decorators": [],
                          "name": "h1",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 2366,
                          "end": 2383,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2367,
                              "end": 2376,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 2378,
                              "end": 2382,
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
              "start": 2385,
              "end": 2410,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2387,
                "end": 2410,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2389,
                    "end": 2408,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2389,
                      "end": 2390,
                      "decorators": [],
                      "name": "h",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2390,
                      "end": 2408,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2392,
                        "end": 2408,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2394,
                            "end": 2406,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2394,
                              "end": 2396,
                              "decorators": [],
                              "name": "h1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2396,
                              "end": 2406,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2398,
                                "end": 2406,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 2398,
                                  "end": 2404
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
            "start": 2413,
            "end": 2434,
            "properties": [
              {
                "type": "Property",
                "start": 2415,
                "end": 2432,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2415,
                  "end": 2416,
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
                  "start": 2418,
                  "end": 2432,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2420,
                      "end": 2430,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2420,
                        "end": 2422,
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
                        "start": 2424,
                        "end": 2430,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 2425,
                            "end": 2426,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 2428,
                            "end": 2429,
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
