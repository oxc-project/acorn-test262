destructuringVariableDeclaration2.ts
```json
{
  "type": "Program",
  "start": 165,
  "end": 1395,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 227,
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
            "end": 227,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 218,
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
                  "end": 218,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 220,
                "end": 225,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 222,
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
                  "start": 224,
                  "end": 225,
                  "raw": "1",
                  "value": 1
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
      "start": 251,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 325,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 255,
            "end": 302,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 256,
                "end": 258,
                "decorators": [],
                "name": "a3",
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 260,
                "end": 266,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 261,
                    "end": 265,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 262,
                        "end": 264,
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
                "start": 268,
                "end": 270,
                "decorators": [],
                "name": "a5",
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 273,
                "end": 302,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 274,
                    "end": 280
                  },
                  {
                    "type": "TSTupleType",
                    "start": 282,
                    "end": 292,
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "start": 283,
                        "end": 291,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 284,
                            "end": 290
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 294,
                    "end": 301
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 305,
            "end": 325,
            "elements": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "raw": "1",
                "value": 1
              },
              {
                "type": "ArrayExpression",
                "start": 309,
                "end": 318,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 310,
                    "end": 317,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 311,
                        "end": 316,
                        "raw": "false",
                        "value": false
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 320,
                "end": 324,
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
      "start": 551,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 587,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 559,
            "decorators": [],
            "name": "temp",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 562,
            "end": 587,
            "properties": [
              {
                "type": "Property",
                "start": 564,
                "end": 572,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 566,
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
                  "start": 568,
                  "end": 572,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 574,
                "end": 585,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 576,
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
                  "start": 578,
                  "end": 585,
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
      "start": 589,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 657,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 593,
            "end": 623,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 594,
                "end": 600,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 596,
                  "decorators": [],
                  "name": "b0",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 599,
                  "end": 600,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 602,
                "end": 611,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 604,
                  "decorators": [],
                  "name": "b1",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 607,
                  "end": 611,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 613,
                "end": 622,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 615,
                  "decorators": [],
                  "name": "b2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 622,
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
            "start": 626,
            "end": 657,
            "elements": [
              {
                "type": "Literal",
                "start": 627,
                "end": 628,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 630,
                "end": 635,
                "raw": "false",
                "value": false
              },
              {
                "type": "ObjectExpression",
                "start": 637,
                "end": 656,
                "properties": [
                  {
                    "type": "Property",
                    "start": 639,
                    "end": 648,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 641,
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
                      "start": 643,
                      "end": 648,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 650,
                    "end": 655,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 652,
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
                      "start": 654,
                      "end": 655,
                      "raw": "5",
                      "value": 5
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
      "start": 906,
      "end": 971,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 910,
          "end": 970,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 910,
            "end": 943,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 911,
                "end": 913,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 915,
                "end": 917,
                "decorators": [],
                "name": "c2",
                "optional": false
              },
              {
                "type": "ObjectPattern",
                "start": 919,
                "end": 933,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 921,
                    "end": 927,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 923,
                      "decorators": [],
                      "name": "c3",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 925,
                      "end": 927,
                      "decorators": [],
                      "name": "c4",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 929,
                    "end": 931,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 931,
                      "decorators": [],
                      "name": "c5",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 931,
                      "decorators": [],
                      "name": "c5",
                      "optional": false
                    }
                  }
                ]
              },
              null,
              {
                "type": "RestElement",
                "start": 937,
                "end": 942,
                "argument": {
                  "type": "Identifier",
                  "start": 940,
                  "end": 942,
                  "decorators": [],
                  "name": "c6",
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
            "start": 946,
            "end": 970,
            "elements": [
              {
                "type": "Literal",
                "start": 947,
                "end": 948,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 950,
                "end": 951,
                "raw": "2",
                "value": 2
              },
              {
                "type": "ObjectExpression",
                "start": 953,
                "end": 969,
                "properties": [
                  {
                    "type": "Property",
                    "start": 955,
                    "end": 960,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 957,
                      "decorators": [],
                      "name": "c3",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 959,
                      "end": 960,
                      "raw": "4",
                      "value": 4
                    }
                  },
                  {
                    "type": "Property",
                    "start": 962,
                    "end": 967,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 962,
                      "end": 964,
                      "decorators": [],
                      "name": "c5",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 966,
                      "end": 967,
                      "raw": "0",
                      "value": 0
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
      "start": 1303,
      "end": 1385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1384,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 1307,
            "end": 1360,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1308,
                "end": 1334,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1309,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 1311,
                  "end": 1334,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1312,
                      "end": 1333,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1312,
                        "end": 1314,
                        "decorators": [],
                        "name": "d1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 1312,
                        "end": 1333,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1314,
                          "decorators": [],
                          "name": "d1",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "ArrayExpression",
                          "start": 1317,
                          "end": 1333,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1318,
                              "end": 1326,
                              "raw": "\"string\"",
                              "value": "string"
                            },
                            {
                              "type": "Literal",
                              "start": 1328,
                              "end": 1332,
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
              "start": 1335,
              "end": 1360,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1337,
                "end": 1360,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1339,
                    "end": 1358,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1339,
                      "end": 1340,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1340,
                      "end": 1358,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1342,
                        "end": 1358,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1344,
                            "end": 1356,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1344,
                              "end": 1346,
                              "decorators": [],
                              "name": "d1",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1346,
                              "end": 1356,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1348,
                                "end": 1356,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 1348,
                                  "end": 1354
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
            "start": 1363,
            "end": 1384,
            "properties": [
              {
                "type": "Property",
                "start": 1365,
                "end": 1382,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1365,
                  "end": 1366,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1368,
                  "end": 1382,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1370,
                      "end": 1380,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1372,
                        "decorators": [],
                        "name": "d1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 1374,
                        "end": 1380,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 1375,
                            "end": 1376,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 1378,
                            "end": 1379,
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
