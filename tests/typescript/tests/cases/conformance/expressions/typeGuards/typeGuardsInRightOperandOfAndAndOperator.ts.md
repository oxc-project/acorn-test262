__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 144,
  "end": 1825,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 156,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 175,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 160,
              "end": 175,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 160,
                  "end": 166
                },
                {
                  "type": "TSStringKeyword",
                  "start": 169,
                  "end": 175
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 177,
        "end": 243,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 183,
            "end": 231,
            "argument": {
              "type": "LogicalExpression",
              "start": 190,
              "end": 230,
              "left": {
                "type": "BinaryExpression",
                "start": 190,
                "end": 211,
                "left": {
                  "type": "UnaryExpression",
                  "start": 190,
                  "end": 198,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 203,
                  "end": 211,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 215,
                "end": 230,
                "left": {
                  "type": "MemberExpression",
                  "start": 215,
                  "end": 223,
                  "object": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 223,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 228,
                  "end": 230,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 244,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 257,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 258,
          "end": 276,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 276,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 261,
              "end": 276,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 261,
                  "end": 267
                },
                {
                  "type": "TSStringKeyword",
                  "start": 270,
                  "end": 276
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 278,
        "end": 391,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 322,
            "end": 370,
            "argument": {
              "type": "LogicalExpression",
              "start": 329,
              "end": 369,
              "left": {
                "type": "BinaryExpression",
                "start": 329,
                "end": 350,
                "left": {
                  "type": "UnaryExpression",
                  "start": 329,
                  "end": 337,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 342,
                  "end": 350,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 355,
                "end": 368,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 356,
                  "end": 362,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 360,
                    "end": 362,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 392,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 405,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 406,
          "end": 424,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 424,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 409,
              "end": 424,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 409,
                  "end": 415
                },
                {
                  "type": "TSStringKeyword",
                  "start": 418,
                  "end": 424
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 568,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 494,
            "end": 547,
            "argument": {
              "type": "LogicalExpression",
              "start": 501,
              "end": 546,
              "left": {
                "type": "BinaryExpression",
                "start": 501,
                "end": 522,
                "left": {
                  "type": "UnaryExpression",
                  "start": 501,
                  "end": 509,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 509,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 514,
                  "end": 522,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 527,
                "end": 545,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 528,
                  "end": 539,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 532,
                    "end": 539,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 569,
      "end": 759,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 582,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 583,
          "end": 611,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 584,
            "end": 611,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 586,
              "end": 611,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 586,
                  "end": 592
                },
                {
                  "type": "TSStringKeyword",
                  "start": 595,
                  "end": 601
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 604,
                  "end": 611
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 613,
        "end": 759,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 619,
            "end": 744,
            "argument": {
              "type": "LogicalExpression",
              "start": 626,
              "end": 743,
              "left": {
                "type": "LogicalExpression",
                "start": 626,
                "end": 709,
                "left": {
                  "type": "BinaryExpression",
                  "start": 626,
                  "end": 647,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 626,
                    "end": 634,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 634,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 639,
                    "end": 647,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 688,
                  "end": 709,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 688,
                    "end": 696,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 696,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 701,
                    "end": 709,
                    "value": "number",
                    "raw": "\"number\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 742,
                "end": 743,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 760,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 773,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 774,
          "end": 802,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 775,
            "end": 802,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 777,
              "end": 802,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 777,
                  "end": 783
                },
                {
                  "type": "TSStringKeyword",
                  "start": 786,
                  "end": 792
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 795,
                  "end": 802
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 804,
        "end": 1089,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 905,
            "end": 929,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 909,
                "end": 928,
                "id": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 928,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 910,
                    "end": 928,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 912,
                      "end": 928,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 912,
                          "end": 918
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 921,
                          "end": 928
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 934,
            "end": 1074,
            "argument": {
              "type": "LogicalExpression",
              "start": 941,
              "end": 1073,
              "left": {
                "type": "BinaryExpression",
                "start": 941,
                "end": 962,
                "left": {
                  "type": "UnaryExpression",
                  "start": 941,
                  "end": 949,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 948,
                    "end": 949,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 954,
                  "end": 962,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 1004,
                "end": 1072,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1005,
                  "end": 1010,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1005,
                    "end": 1006,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1009,
                    "end": 1010,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "LogicalExpression",
                  "start": 1016,
                  "end": 1071,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 1016,
                    "end": 1037,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1016,
                      "end": 1024,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 1023,
                        "end": 1024,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 1029,
                      "end": 1037,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1071,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1090,
      "end": 1395,
      "id": {
        "type": "Identifier",
        "start": 1099,
        "end": 1103,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1104,
          "end": 1132,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1105,
            "end": 1132,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1107,
              "end": 1132,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1107,
                  "end": 1113
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1116,
                  "end": 1122
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1125,
                  "end": 1132
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1134,
        "end": 1395,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1228,
            "end": 1382,
            "argument": {
              "type": "LogicalExpression",
              "start": 1235,
              "end": 1382,
              "left": {
                "type": "BinaryExpression",
                "start": 1235,
                "end": 1256,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1235,
                  "end": 1243,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 1242,
                    "end": 1243,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 1248,
                  "end": 1256,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "ConditionalExpression",
                "start": 1298,
                "end": 1381,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1298,
                  "end": 1319,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1298,
                    "end": 1306,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1306,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 1311,
                    "end": 1319,
                    "value": "number",
                    "raw": "\"number\""
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1351,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "start": 1373,
                  "end": 1381,
                  "left": {
                    "type": "Identifier",
                    "start": 1373,
                    "end": 1374,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1379,
                    "end": 1381,
                    "value": 10,
                    "raw": "10"
                  }
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1396,
      "end": 1825,
      "id": {
        "type": "Identifier",
        "start": 1405,
        "end": 1409,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1410,
          "end": 1438,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1411,
            "end": 1438,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1413,
              "end": 1438,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1413,
                  "end": 1419
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1422,
                  "end": 1428
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1431,
                  "end": 1438
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1440,
        "end": 1825,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1446,
            "end": 1478,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1450,
                "end": 1477,
                "id": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1477,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1451,
                    "end": 1477,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1453,
                      "end": 1477,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1453,
                          "end": 1459
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1461,
                          "end": 1468
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1471,
                          "end": 1477
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1483,
            "end": 1515,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1487,
                "end": 1514,
                "id": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1514,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1488,
                    "end": 1514,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1490,
                      "end": 1514,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1490,
                          "end": 1496
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1498,
                          "end": 1505
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1508,
                          "end": 1514
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1554,
            "end": 1807,
            "argument": {
              "type": "LogicalExpression",
              "start": 1561,
              "end": 1806,
              "left": {
                "type": "BinaryExpression",
                "start": 1561,
                "end": 1582,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1561,
                  "end": 1569,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 1568,
                    "end": 1569,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 1574,
                  "end": 1582,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "start": 1595,
                "end": 1805,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1596,
                  "end": 1601,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1596,
                    "end": 1597,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1600,
                    "end": 1601,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "ConditionalExpression",
                  "start": 1635,
                  "end": 1804,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1635,
                    "end": 1656,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1635,
                      "end": 1643,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 1642,
                        "end": 1643,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1648,
                      "end": 1656,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "start": 1697,
                    "end": 1721,
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 1698,
                      "end": 1704,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1698,
                        "end": 1699,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1702,
                        "end": 1704,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "start": 1709,
                      "end": 1721,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1709,
                        "end": 1719,
                        "object": {
                          "type": "Identifier",
                          "start": 1709,
                          "end": 1710,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1719,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "start": 1780,
                    "end": 1803,
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 1781,
                      "end": 1786,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1782,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1785,
                        "end": 1786,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "start": 1791,
                      "end": 1803,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1791,
                        "end": 1801,
                        "object": {
                          "type": "Identifier",
                          "start": 1791,
                          "end": 1792,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1793,
                          "end": 1801,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
