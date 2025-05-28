__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 3059,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 177,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 176,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
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
      "start": 178,
      "end": 204,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 203,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 188,
                "end": 203,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
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
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "decorators": [],
        "name": "f",
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
          "start": 247,
          "end": 269,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 269,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 254,
              "end": 269,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 271,
        "end": 619,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 320,
            "end": 367,
            "expression": {
              "type": "AssignmentExpression",
              "start": 320,
              "end": 366,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 320,
                "end": 323,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 327,
                "end": 366,
                "left": {
                  "type": "BinaryExpression",
                  "start": 327,
                  "end": 351,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 327,
                    "end": 338,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 338,
                      "decorators": [],
                      "name": "var1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 343,
                    "end": 351,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 355,
                  "end": 366,
                  "object": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 359,
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 366,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 424,
            "end": 450,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 428,
                "end": 449,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 449,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 434,
                      "end": 449,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 434,
                          "end": 440
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
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
            "type": "ExpressionStatement",
            "start": 455,
            "end": 501,
            "expression": {
              "type": "AssignmentExpression",
              "start": 455,
              "end": 500,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 455,
                "end": 458,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 461,
                "end": 500,
                "left": {
                  "type": "BinaryExpression",
                  "start": 461,
                  "end": 485,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 461,
                    "end": 472,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 472,
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 477,
                    "end": 485,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 489,
                  "end": 500,
                  "object": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 493,
                    "decorators": [],
                    "name": "var2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 500,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 559,
            "end": 607,
            "expression": {
              "type": "AssignmentExpression",
              "start": 559,
              "end": 606,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 559,
                "end": 562,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 565,
                "end": 606,
                "left": {
                  "type": "BinaryExpression",
                  "start": 565,
                  "end": 590,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 565,
                    "end": 577,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 577,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 582,
                    "end": 590,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 594,
                  "end": 606,
                  "object": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 599,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 606,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 1298,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 661,
        "decorators": [],
        "name": "f1",
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
          "start": 662,
          "end": 684,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 667,
            "end": 684,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 669,
              "end": 684,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 669,
                  "end": 675
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 678,
                  "end": 684
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 686,
        "end": 1298,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 692,
            "end": 718,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 696,
                "end": 717,
                "id": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 717,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 700,
                    "end": 717,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 702,
                      "end": 717,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 702,
                          "end": 708
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 711,
                          "end": 717
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
            "type": "FunctionDeclaration",
            "start": 723,
            "end": 1296,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 734,
              "decorators": [],
              "name": "f2",
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
                "start": 735,
                "end": 758,
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 741,
                  "end": 758,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 743,
                    "end": 758,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 743,
                        "end": 749
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 752,
                        "end": 758
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 760,
              "end": 1296,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 817,
                  "end": 863,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 817,
                    "end": 862,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 817,
                      "end": 820,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 823,
                      "end": 862,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 823,
                        "end": 847,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 823,
                          "end": 834,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 830,
                            "end": 834,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 839,
                          "end": 847,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 851,
                        "end": 862,
                        "object": {
                          "type": "Identifier",
                          "start": 851,
                          "end": 855,
                          "decorators": [],
                          "name": "var1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 856,
                          "end": 862,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 936,
                  "end": 982,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 936,
                    "end": 981,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 936,
                      "end": 939,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 942,
                      "end": 981,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 942,
                        "end": 966,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 942,
                          "end": 953,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 949,
                            "end": 953,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 958,
                          "end": 966,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 970,
                        "end": 981,
                        "object": {
                          "type": "Identifier",
                          "start": 970,
                          "end": 974,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 975,
                          "end": 981,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1045,
                  "end": 1093,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1045,
                    "end": 1092,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1045,
                      "end": 1048,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1051,
                      "end": 1092,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1051,
                        "end": 1076,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1051,
                          "end": 1063,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 1058,
                            "end": 1063,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1068,
                          "end": 1076,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1080,
                        "end": 1092,
                        "object": {
                          "type": "Identifier",
                          "start": 1080,
                          "end": 1085,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1086,
                          "end": 1092,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1130,
                  "end": 1156,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1134,
                      "end": 1155,
                      "id": {
                        "type": "Identifier",
                        "start": 1134,
                        "end": 1155,
                        "decorators": [],
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1138,
                          "end": 1155,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1140,
                            "end": 1155,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1140,
                                "end": 1146
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1149,
                                "end": 1155
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
                  "type": "ExpressionStatement",
                  "start": 1165,
                  "end": 1211,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1165,
                    "end": 1210,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1168,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1171,
                      "end": 1210,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1171,
                        "end": 1195,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1171,
                          "end": 1182,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 1178,
                            "end": 1182,
                            "decorators": [],
                            "name": "var3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1187,
                          "end": 1195,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1199,
                        "end": 1210,
                        "object": {
                          "type": "Identifier",
                          "start": 1199,
                          "end": 1203,
                          "decorators": [],
                          "name": "var3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1204,
                          "end": 1210,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1230,
                  "end": 1280,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1230,
                    "end": 1279,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1230,
                      "end": 1233,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1236,
                      "end": 1279,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1236,
                        "end": 1262,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1236,
                          "end": 1249,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 1243,
                            "end": 1249,
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1254,
                          "end": 1262,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1266,
                        "end": 1279,
                        "object": {
                          "type": "Identifier",
                          "start": 1266,
                          "end": 1272,
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1273,
                          "end": 1279,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1322,
      "end": 2067,
      "id": {
        "type": "Identifier",
        "start": 1331,
        "end": 1333,
        "decorators": [],
        "name": "f2",
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
          "start": 1334,
          "end": 1356,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1339,
            "end": 1356,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1341,
              "end": 1356,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1341,
                  "end": 1347
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1350,
                  "end": 1356
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1358,
        "end": 2067,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1405,
            "end": 1431,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1409,
                "end": 1430,
                "id": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1430,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1413,
                    "end": 1430,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1415,
                      "end": 1430,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1415,
                          "end": 1421
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1424,
                          "end": 1430
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
            "start": 1477,
            "end": 2065,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1481,
                "end": 2064,
                "id": {
                  "type": "Identifier",
                  "start": 1481,
                  "end": 1482,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1485,
                  "end": 2064,
                  "callee": {
                    "type": "FunctionExpression",
                    "start": 1485,
                    "end": 2056,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1495,
                        "end": 1518,
                        "decorators": [],
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1501,
                          "end": 1518,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1503,
                            "end": 1518,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1503,
                                "end": 1509
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1512,
                                "end": 1518
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1520,
                      "end": 2056,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1577,
                          "end": 1623,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1577,
                            "end": 1622,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1580,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 1583,
                              "end": 1622,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1583,
                                "end": 1607,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 1583,
                                  "end": 1594,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1590,
                                    "end": 1594,
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 1599,
                                  "end": 1607,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 1611,
                                "end": 1622,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1611,
                                  "end": 1615,
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1616,
                                  "end": 1622,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1696,
                          "end": 1742,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1696,
                            "end": 1741,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 1696,
                              "end": 1699,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 1702,
                              "end": 1741,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1702,
                                "end": 1726,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 1702,
                                  "end": 1713,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1709,
                                    "end": 1713,
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 1718,
                                  "end": 1726,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 1730,
                                "end": 1741,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1730,
                                  "end": 1734,
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1735,
                                  "end": 1741,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1805,
                          "end": 1853,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1805,
                            "end": 1852,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1808,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 1811,
                              "end": 1852,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1811,
                                "end": 1836,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 1811,
                                  "end": 1823,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1818,
                                    "end": 1823,
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 1828,
                                  "end": 1836,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 1840,
                                "end": 1852,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1840,
                                  "end": 1845,
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1846,
                                  "end": 1852,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1890,
                          "end": 1916,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1894,
                              "end": 1915,
                              "id": {
                                "type": "Identifier",
                                "start": 1894,
                                "end": 1915,
                                "decorators": [],
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1898,
                                  "end": 1915,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 1900,
                                    "end": 1915,
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 1900,
                                        "end": 1906
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 1909,
                                        "end": 1915
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
                          "type": "ExpressionStatement",
                          "start": 1925,
                          "end": 1971,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1925,
                            "end": 1970,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 1925,
                              "end": 1928,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 1931,
                              "end": 1970,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1931,
                                "end": 1955,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 1931,
                                  "end": 1942,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1938,
                                    "end": 1942,
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 1947,
                                  "end": 1955,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 1959,
                                "end": 1970,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1959,
                                  "end": 1963,
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1964,
                                  "end": 1970,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1990,
                          "end": 2040,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1990,
                            "end": 2039,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 1990,
                              "end": 1993,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 1996,
                              "end": 2039,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1996,
                                "end": 2022,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 1996,
                                  "end": 2009,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2003,
                                    "end": 2009,
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2014,
                                  "end": 2022,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2026,
                                "end": 2039,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2026,
                                  "end": 2032,
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2033,
                                  "end": 2039,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2058,
                      "end": 2063,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2088,
      "end": 2828,
      "id": {
        "type": "Identifier",
        "start": 2097,
        "end": 2099,
        "decorators": [],
        "name": "f3",
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
          "start": 2100,
          "end": 2122,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2105,
            "end": 2122,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2107,
              "end": 2122,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2107,
                  "end": 2113
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2116,
                  "end": 2122
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2124,
        "end": 2828,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2171,
            "end": 2197,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2175,
                "end": 2196,
                "id": {
                  "type": "Identifier",
                  "start": 2175,
                  "end": 2196,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2179,
                    "end": 2196,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2181,
                      "end": 2196,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2181,
                          "end": 2187
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2190,
                          "end": 2196
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
            "start": 2243,
            "end": 2826,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2247,
                "end": 2825,
                "id": {
                  "type": "Identifier",
                  "start": 2247,
                  "end": 2248,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2251,
                  "end": 2825,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 2252,
                    "end": 2817,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2253,
                        "end": 2276,
                        "decorators": [],
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2259,
                          "end": 2276,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 2261,
                            "end": 2276,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 2261,
                                "end": 2267
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 2270,
                                "end": 2276
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2281,
                      "end": 2817,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2338,
                          "end": 2384,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2338,
                            "end": 2383,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2338,
                              "end": 2341,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 2344,
                              "end": 2383,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2344,
                                "end": 2368,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2344,
                                  "end": 2355,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2351,
                                    "end": 2355,
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2360,
                                  "end": 2368,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2372,
                                "end": 2383,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2372,
                                  "end": 2376,
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2377,
                                  "end": 2383,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2457,
                          "end": 2503,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2457,
                            "end": 2502,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2457,
                              "end": 2460,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 2463,
                              "end": 2502,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2463,
                                "end": 2487,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2463,
                                  "end": 2474,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2470,
                                    "end": 2474,
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2479,
                                  "end": 2487,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2491,
                                "end": 2502,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2491,
                                  "end": 2495,
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2496,
                                  "end": 2502,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2566,
                          "end": 2614,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2566,
                            "end": 2613,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2566,
                              "end": 2569,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 2572,
                              "end": 2613,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2572,
                                "end": 2597,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2572,
                                  "end": 2584,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2579,
                                    "end": 2584,
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2589,
                                  "end": 2597,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2601,
                                "end": 2613,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2601,
                                  "end": 2606,
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2607,
                                  "end": 2613,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 2651,
                          "end": 2677,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2655,
                              "end": 2676,
                              "id": {
                                "type": "Identifier",
                                "start": 2655,
                                "end": 2676,
                                "decorators": [],
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2659,
                                  "end": 2676,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 2661,
                                    "end": 2676,
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 2661,
                                        "end": 2667
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 2670,
                                        "end": 2676
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
                          "type": "ExpressionStatement",
                          "start": 2686,
                          "end": 2732,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2686,
                            "end": 2731,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2686,
                              "end": 2689,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 2692,
                              "end": 2731,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2692,
                                "end": 2716,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2692,
                                  "end": 2703,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2699,
                                    "end": 2703,
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2708,
                                  "end": 2716,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2720,
                                "end": 2731,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2720,
                                  "end": 2724,
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2725,
                                  "end": 2731,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 2751,
                          "end": 2801,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2751,
                            "end": 2800,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2751,
                              "end": 2754,
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 2757,
                              "end": 2800,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2757,
                                "end": 2783,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2757,
                                  "end": 2770,
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2764,
                                    "end": 2770,
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 2775,
                                  "end": 2783,
                                  "value": "string",
                                  "raw": "\"string\""
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "start": 2787,
                                "end": 2800,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2787,
                                  "end": 2793,
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2794,
                                  "end": 2800,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2819,
                      "end": 2824,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2887,
      "end": 2917,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2891,
          "end": 2916,
          "id": {
            "type": "Identifier",
            "start": 2891,
            "end": 2916,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2899,
              "end": 2916,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2901,
                "end": 2916,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2901,
                    "end": 2907
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2910,
                    "end": 2916
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
      "type": "FunctionDeclaration",
      "start": 2918,
      "end": 2994,
      "id": {
        "type": "Identifier",
        "start": 2927,
        "end": 2929,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2932,
        "end": 2994,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2938,
            "end": 2975,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2942,
                "end": 2974,
                "id": {
                  "type": "Identifier",
                  "start": 2942,
                  "end": 2963,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2946,
                    "end": 2963,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2948,
                      "end": 2963,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2948,
                          "end": 2954
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2957,
                          "end": 2963
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2966,
                  "end": 2974,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2980,
            "end": 2992,
            "argument": {
              "type": "Identifier",
              "start": 2987,
              "end": 2991,
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2995,
      "end": 3039,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2995,
        "end": 3038,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2995,
          "end": 3003,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 3006,
          "end": 3038,
          "left": {
            "type": "BinaryExpression",
            "start": 3006,
            "end": 3030,
            "left": {
              "type": "UnaryExpression",
              "start": 3006,
              "end": 3017,
              "operator": "typeof",
              "argument": {
                "type": "CallExpression",
                "start": 3013,
                "end": 3017,
                "callee": {
                  "type": "Identifier",
                  "start": 3013,
                  "end": 3015,
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 3022,
              "end": 3030,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "start": 3034,
            "end": 3038,
            "callee": {
              "type": "Identifier",
              "start": 3034,
              "end": 3036,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
