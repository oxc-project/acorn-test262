inDoesNotOperateOnPrimitiveTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "validHasKey",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 20,
            "end": 113,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 81,
              "end": 113,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 85,
                  "end": 105,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 92,
                    "end": 104,
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 95,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 104,
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 50,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 54,
                "end": 65,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 77,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 20,
              "end": 38,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 37,
                  "const": false,
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 31,
                    "end": 37
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 137,
            "decorators": [],
            "name": "alsoValidHasKey",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 263,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 186,
              "end": 263,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 190,
                  "end": 210,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 197,
                    "end": 209,
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 200,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 209,
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 159,
                "end": 170,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 182,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 175,
                "end": 182
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 140,
              "end": 143,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 141,
                  "end": 142,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 266,
      "end": 439,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 355,
        "end": 439,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 359,
            "end": 379,
            "argument": {
              "type": "BinaryExpression",
              "start": 366,
              "end": 378,
              "operator": "in",
              "left": {
                "type": "Identifier",
                "start": 366,
                "end": 369,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 373,
                "end": 378,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 288,
        "decorators": [],
        "name": "invalidHasKey",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 319,
          "end": 327,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 327,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 327,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 327,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 331,
          "end": 342,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 342,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 336,
              "end": 342
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 354,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 347,
          "end": 354
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 315,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 314,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 299,
              "end": 314,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 299,
                  "end": 305
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 308,
                  "end": 314
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 596,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 517,
        "end": 596,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 521,
            "end": 536,
            "expression": {
              "type": "BinaryExpression",
              "start": 521,
              "end": 535,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 521,
                "end": 526,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 530,
                "end": 535,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 456,
        "decorators": [],
        "name": "union1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 503,
          "end": 515,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 515,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 510,
              "end": 515,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 510,
                  "end": 511,
                  "typeName": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 514,
                  "end": 515,
                  "typeName": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 456,
        "end": 502,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 482,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 467,
              "end": 482,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 476,
                  "end": 482
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 484,
            "end": 501,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 494,
              "end": 501
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 598,
      "end": 800,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 800,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 677,
            "end": 692,
            "expression": {
              "type": "BinaryExpression",
              "start": 677,
              "end": 691,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 677,
                "end": 682,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 686,
                "end": 691,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 736,
            "end": 798,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 767,
              "end": 798,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 773,
                  "end": 788,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 773,
                    "end": 787,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 773,
                      "end": 778,
                      "raw": "\"key\"",
                      "value": "key"
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 787,
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 740,
              "end": 765,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 740,
                "end": 752,
                "argument": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 752,
                  "decorators": [],
                  "name": "thing",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 757,
                "end": 765,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 613,
        "decorators": [],
        "name": "union2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 659,
          "end": 671,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 664,
            "end": 671,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 666,
              "end": 671,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 666,
                  "end": 667,
                  "typeName": {
                    "type": "Identifier",
                    "start": 666,
                    "end": 667,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 670,
                  "end": 671,
                  "typeName": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 671,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 658,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 630,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 624,
              "end": 630
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 657,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 642,
              "end": 657,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 642,
                  "end": 648
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 651,
                  "end": 657
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 802,
      "end": 1047,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 849,
        "end": 1047,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 853,
            "end": 868,
            "expression": {
              "type": "BinaryExpression",
              "start": 853,
              "end": 867,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 853,
                "end": 858,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 862,
                "end": 867,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 912,
            "end": 1045,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 972,
              "end": 1045,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 978,
                  "end": 993,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 978,
                    "end": 992,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 978,
                      "end": 983,
                      "raw": "\"key\"",
                      "value": "key"
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 987,
                      "end": 992,
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 916,
              "end": 970,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 916,
                "end": 941,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 916,
                  "end": 928,
                  "argument": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 928,
                    "decorators": [],
                    "name": "thing",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 933,
                  "end": 941,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 945,
                "end": 970,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 945,
                  "end": 957,
                  "argument": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 957,
                    "decorators": [],
                    "name": "thing",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 962,
                  "end": 970,
                  "raw": "\"number\"",
                  "value": "number"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 811,
        "end": 817,
        "decorators": [],
        "name": "union3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 821,
          "end": 847,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 826,
            "end": 847,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 828,
              "end": 847,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 828,
                  "end": 829,
                  "typeName": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 829,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 832,
                  "end": 838
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 817,
        "end": 820,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 818,
            "end": 819,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 818,
              "end": 819,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1049,
      "end": 1164,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1103,
        "end": 1164,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1107,
            "end": 1122,
            "expression": {
              "type": "BinaryExpression",
              "start": 1107,
              "end": 1121,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1107,
                "end": 1112,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 1116,
                "end": 1121,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1064,
        "decorators": [],
        "name": "union4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1093,
          "end": 1101,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1098,
            "end": 1101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1100,
              "end": 1101,
              "typeName": {
                "type": "Identifier",
                "start": 1100,
                "end": 1101,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1064,
        "end": 1092,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1065,
            "end": 1091,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1075,
              "end": 1091,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1075,
                  "end": 1081
                },
                {
                  "type": "TSLiteralType",
                  "start": 1084,
                  "end": 1091,
                  "literal": {
                    "type": "Literal",
                    "start": 1084,
                    "end": 1091,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1166,
      "end": 1895,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1246,
        "end": 1895,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1823,
            "end": 1834,
            "expression": {
              "type": "BinaryExpression",
              "start": 1823,
              "end": 1833,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1823,
                "end": 1828,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 1832,
                "end": 1833,
                "decorators": [],
                "name": "p",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1839,
            "end": 1893,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1866,
              "end": 1893,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1876,
                  "end": 1887,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 1876,
                    "end": 1886,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 1876,
                      "end": 1881,
                      "raw": "\"key\"",
                      "value": "key"
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1886,
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1843,
              "end": 1864,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 1843,
                "end": 1851,
                "argument": {
                  "type": "Identifier",
                  "start": 1850,
                  "end": 1851,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1856,
                "end": 1864,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1175,
        "end": 1181,
        "decorators": [],
        "name": "union5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1236,
          "end": 1244,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1237,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1239,
              "end": 1244,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1239,
                  "end": 1240,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1243,
                  "end": 1244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1243,
                    "end": 1244,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1181,
        "end": 1235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1182,
            "end": 1207,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1192,
              "end": 1207,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1192,
                  "end": 1198
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1201,
                  "end": 1207
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1182,
              "end": 1183,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1209,
            "end": 1234,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1219,
              "end": 1234,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1219,
                  "end": 1225
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1228,
                  "end": 1234
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1897,
      "end": 2052,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1973,
        "end": 2052,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1977,
            "end": 1992,
            "expression": {
              "type": "BinaryExpression",
              "start": 1977,
              "end": 1991,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1977,
                "end": 1982,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 1986,
                "end": 1991,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1906,
        "end": 1919,
        "decorators": [],
        "name": "intersection1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1959,
          "end": 1971,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1964,
            "end": 1971,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1966,
              "end": 1971,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1966,
                  "end": 1967,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1966,
                    "end": 1967,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1970,
                  "end": 1971,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1971,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1919,
        "end": 1958,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1920,
            "end": 1936,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1930,
              "end": 1936
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1920,
              "end": 1921,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1938,
            "end": 1957,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1948,
              "end": 1957,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1948,
                  "end": 1949,
                  "literal": {
                    "type": "Literal",
                    "start": 1948,
                    "end": 1949,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1952,
                  "end": 1953,
                  "literal": {
                    "type": "Literal",
                    "start": 1952,
                    "end": 1953,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1956,
                  "end": 1957,
                  "literal": {
                    "type": "Literal",
                    "start": 1956,
                    "end": 1957,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2054,
      "end": 2182,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2104,
        "end": 2182,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2108,
            "end": 2123,
            "expression": {
              "type": "BinaryExpression",
              "start": 2108,
              "end": 2122,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 2108,
                "end": 2113,
                "raw": "\"key\"",
                "value": "key"
              },
              "right": {
                "type": "Identifier",
                "start": 2117,
                "end": 2122,
                "decorators": [],
                "name": "thing",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2063,
        "end": 2076,
        "decorators": [],
        "name": "intersection2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2080,
          "end": 2102,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2085,
            "end": 2102,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2087,
              "end": 2102,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2087,
                  "end": 2088,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2087,
                    "end": 2088,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 2092,
                  "end": 2101,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 2092,
                      "end": 2093,
                      "literal": {
                        "type": "Literal",
                        "start": 2092,
                        "end": 2093,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 2096,
                      "end": 2097,
                      "literal": {
                        "type": "Literal",
                        "start": 2096,
                        "end": 2097,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 2100,
                      "end": 2101,
                      "literal": {
                        "type": "Literal",
                        "start": 2100,
                        "end": 2101,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2076,
        "end": 2079,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2077,
            "end": 2078,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2077,
              "end": 2078,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
