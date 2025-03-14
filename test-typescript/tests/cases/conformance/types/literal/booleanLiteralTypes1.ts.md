__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1587,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "A1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 10,
        "end": 22,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 10,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 10,
              "end": 14,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "TSLiteralType",
            "start": 17,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "raw": "false",
              "value": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 31,
        "decorators": [],
        "name": "A2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 34,
        "end": 46,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 39,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 39,
              "raw": "false",
              "value": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 42,
            "end": 46,
            "literal": {
              "type": "Literal",
              "start": 42,
              "end": 46,
              "raw": "true",
              "value": true
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 146,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 79,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 78,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 76,
                      "end": 78,
                      "typeName": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 78,
                        "decorators": [],
                        "name": "A1",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 94,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 93,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 93,
                        "decorators": [],
                        "name": "A2",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 119,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 118,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 106,
                      "end": 118,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 106,
                          "end": 110,
                          "literal": {
                            "type": "Literal",
                            "start": 106,
                            "end": 110,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 113,
                          "end": 118,
                          "literal": {
                            "type": "Literal",
                            "start": 113,
                            "end": 118,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 124,
            "end": 144,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 128,
                "end": 143,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 143,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 129,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 131,
                      "end": 143,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 131,
                          "end": 136,
                          "literal": {
                            "type": "Literal",
                            "start": 131,
                            "end": 136,
                            "raw": "false",
                            "value": false
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 139,
                          "end": 143,
                          "literal": {
                            "type": "Literal",
                            "start": 139,
                            "end": 143,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 214,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 195,
            "end": 201,
            "expression": {
              "type": "AssignmentExpression",
              "start": 195,
              "end": 200,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 206,
            "end": 212,
            "expression": {
              "type": "AssignmentExpression",
              "start": 206,
              "end": 211,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "a",
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
        "start": 157,
        "end": 159,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 160,
          "end": 175,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 175,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 163,
              "end": 175,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 163,
                  "end": 167,
                  "literal": {
                    "type": "Literal",
                    "start": 163,
                    "end": 167,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 170,
                  "end": 175,
                  "literal": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 177,
          "end": 187,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 187,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 180,
              "end": 187
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 321,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 262,
        "end": 321,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 268,
            "end": 283,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 272,
                "end": 282,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 276,
                  "end": 282,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 282,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 288,
            "end": 303,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 292,
                "end": 302,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 296,
                  "end": 302,
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 297,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 308,
            "end": 319,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 312,
                "end": 318,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 316,
                  "end": 318,
                  "argument": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "operator": "!",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 228,
          "end": 243,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 243,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 231,
              "end": 243,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 231,
                  "end": 235,
                  "literal": {
                    "type": "Literal",
                    "start": 231,
                    "end": 235,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 238,
                  "end": 243,
                  "literal": {
                    "type": "Literal",
                    "start": 238,
                    "end": 243,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 245,
          "end": 260,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 246,
            "end": 260,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 248,
              "end": 260,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 248,
                  "end": 252,
                  "literal": {
                    "type": "Literal",
                    "start": 248,
                    "end": 252,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 255,
                  "end": 260,
                  "literal": {
                    "type": "Literal",
                    "start": 255,
                    "end": 260,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 323,
      "end": 475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 475,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 360,
            "end": 376,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 364,
                "end": 375,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 366,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 369,
                  "end": 375,
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 370,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 381,
            "end": 397,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 385,
                "end": 396,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 387,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 390,
                  "end": 396,
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 402,
            "end": 418,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 406,
                "end": 417,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 408,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 411,
                  "end": 417,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 439,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 438,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "decorators": [],
                  "name": "x4",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 432,
                  "end": 438,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 444,
            "end": 456,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 455,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "x5",
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 453,
                  "end": 455,
                  "argument": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "operator": "!",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 461,
            "end": 473,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 465,
                "end": 472,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 467,
                  "decorators": [],
                  "name": "x6",
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 470,
                  "end": 472,
                  "argument": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "operator": "!",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 334,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 335,
          "end": 342,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 342,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 338,
              "end": 342,
              "literal": {
                "type": "Literal",
                "start": 338,
                "end": 342,
                "raw": "true",
                "value": true
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 344,
          "end": 352,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 352,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 347,
              "end": 352,
              "literal": {
                "type": "Literal",
                "start": 347,
                "end": 352,
                "raw": "false",
                "value": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 477,
      "end": 513,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 495,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 496,
          "end": 503,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 497,
            "end": 503,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 499,
              "end": 503,
              "literal": {
                "type": "Literal",
                "start": 499,
                "end": 503,
                "raw": "true",
                "value": true
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 504,
        "end": 512,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 506,
          "end": 512
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 514,
      "end": 552,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 532,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 533,
          "end": 541,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 534,
            "end": 541,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 536,
              "end": 541,
              "literal": {
                "type": "Literal",
                "start": 536,
                "end": 541,
                "raw": "false",
                "value": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 542,
        "end": 551,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 544,
          "end": 551
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 553,
      "end": 592,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 571,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 572,
          "end": 582,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 573,
            "end": 582,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 575,
              "end": 582
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 583,
        "end": 591,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 585,
          "end": 591
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 594,
      "end": 685,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 618,
        "end": 685,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 624,
            "end": 641,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 628,
                "end": 640,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 630,
                  "decorators": [],
                  "name": "z1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 633,
                  "end": 640,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 635,
                      "end": 639,
                      "raw": "true",
                      "value": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 634,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 646,
            "end": 664,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 650,
                "end": 663,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "decorators": [],
                  "name": "z2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 655,
                  "end": 663,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 657,
                      "end": 662,
                      "raw": "false",
                      "value": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 669,
            "end": 683,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 673,
                "end": 682,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 675,
                  "decorators": [],
                  "name": "z3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 678,
                  "end": 682,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 680,
                      "end": 681,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 679,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 605,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 606,
          "end": 616,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 607,
            "end": 616,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 687,
      "end": 769,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 725,
        "end": 769,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 731,
            "end": 767,
            "argument": {
              "type": "NewExpression",
              "start": 737,
              "end": 766,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 747,
                  "end": 765,
                  "raw": "\"Unexpected value\"",
                  "value": "Unexpected value"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 741,
                "end": 746,
                "decorators": [],
                "name": "Error",
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
        "start": 696,
        "end": 707,
        "decorators": [],
        "name": "assertNever",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 708,
          "end": 716,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 709,
            "end": 716,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 711,
              "end": 716
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 717,
        "end": 724,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 719,
          "end": 724
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 771,
      "end": 897,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 801,
        "end": 897,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 807,
            "end": 895,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 828,
                "end": 853,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 839,
                    "end": 853,
                    "argument": {
                      "type": "Literal",
                      "start": 846,
                      "end": 852,
                      "raw": "\"true\"",
                      "value": "true"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 833,
                  "end": 837,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 862,
                "end": 889,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 874,
                    "end": 889,
                    "argument": {
                      "type": "Literal",
                      "start": 881,
                      "end": 888,
                      "raw": "\"false\"",
                      "value": "false"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 867,
                  "end": 872,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 780,
        "end": 783,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 784,
          "end": 799,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 785,
            "end": 799,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 787,
              "end": 799,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 787,
                  "end": 791,
                  "literal": {
                    "type": "Literal",
                    "start": 787,
                    "end": 791,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 794,
                  "end": 799,
                  "literal": {
                    "type": "Literal",
                    "start": 794,
                    "end": 799,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 899,
      "end": 1052,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 929,
        "end": 1052,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 935,
            "end": 1023,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 956,
                "end": 981,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 967,
                    "end": 981,
                    "argument": {
                      "type": "Literal",
                      "start": 974,
                      "end": 980,
                      "raw": "\"true\"",
                      "value": "true"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 961,
                  "end": 965,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 990,
                "end": 1017,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1002,
                    "end": 1017,
                    "argument": {
                      "type": "Literal",
                      "start": 1009,
                      "end": 1016,
                      "raw": "\"false\"",
                      "value": "false"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 995,
                  "end": 1000,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 943,
              "end": 944,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1028,
            "end": 1050,
            "argument": {
              "type": "CallExpression",
              "start": 1035,
              "end": 1049,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1048,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1035,
                "end": 1046,
                "decorators": [],
                "name": "assertNever",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 911,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 912,
          "end": 927,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 913,
            "end": 927,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 915,
              "end": 927,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 915,
                  "end": 919,
                  "literal": {
                    "type": "Literal",
                    "start": 915,
                    "end": 919,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 922,
                  "end": 927,
                  "literal": {
                    "type": "Literal",
                    "start": 922,
                    "end": 927,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1054,
      "end": 1145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1084,
        "end": 1145,
        "body": [
          {
            "type": "IfStatement",
            "start": 1090,
            "end": 1143,
            "alternate": {
              "type": "BlockStatement",
              "start": 1125,
              "end": 1143,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1135,
                  "end": 1137,
                  "expression": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1136,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1097,
              "end": 1115,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1107,
                  "end": 1109,
                  "expression": {
                    "type": "Identifier",
                    "start": 1107,
                    "end": 1108,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1094,
              "end": 1095,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1063,
        "end": 1066,
        "decorators": [],
        "name": "f12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1067,
          "end": 1082,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1068,
            "end": 1082,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1070,
              "end": 1082,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1070,
                  "end": 1074,
                  "literal": {
                    "type": "Literal",
                    "start": 1070,
                    "end": 1074,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1077,
                  "end": 1082,
                  "literal": {
                    "type": "Literal",
                    "start": 1077,
                    "end": 1082,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1147,
      "end": 1247,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1177,
        "end": 1247,
        "body": [
          {
            "type": "IfStatement",
            "start": 1183,
            "end": 1245,
            "alternate": {
              "type": "BlockStatement",
              "start": 1227,
              "end": 1245,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1237,
                  "end": 1239,
                  "expression": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1238,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1199,
              "end": 1217,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1209,
                  "end": 1211,
                  "expression": {
                    "type": "Identifier",
                    "start": 1209,
                    "end": 1210,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1187,
              "end": 1197,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1193,
                "end": 1197,
                "raw": "true",
                "value": true
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
        "start": 1156,
        "end": 1159,
        "decorators": [],
        "name": "f13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1160,
          "end": 1175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1161,
            "end": 1175,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1163,
              "end": 1175,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1163,
                  "end": 1167,
                  "literal": {
                    "type": "Literal",
                    "start": 1163,
                    "end": 1167,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1170,
                  "end": 1175,
                  "literal": {
                    "type": "Literal",
                    "start": 1170,
                    "end": 1175,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1249,
      "end": 1324,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1254,
        "end": 1258,
        "decorators": [],
        "name": "Item",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1265,
        "end": 1323,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1265,
            "end": 1290,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1267,
                "end": 1278,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1271,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1271,
                  "end": 1277,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1273,
                    "end": 1277,
                    "literal": {
                      "type": "Literal",
                      "start": 1273,
                      "end": 1277,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1279,
                "end": 1288,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1280,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1280,
                  "end": 1288,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1282,
                    "end": 1288
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1297,
            "end": 1323,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1299,
                "end": 1311,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1303,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1303,
                  "end": 1310,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1305,
                    "end": 1310,
                    "literal": {
                      "type": "Literal",
                      "start": 1305,
                      "end": 1310,
                      "raw": "false",
                      "value": false
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1312,
                "end": 1321,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1313,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1313,
                  "end": 1321,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1315,
                    "end": 1321
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1326,
      "end": 1442,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1348,
        "end": 1442,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1354,
            "end": 1440,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1380,
                "end": 1402,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1391,
                    "end": 1402,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1398,
                      "end": 1401,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1398,
                        "end": 1399,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1400,
                        "end": 1401,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1385,
                  "end": 1389,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 1411,
                "end": 1434,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1423,
                    "end": 1434,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1430,
                      "end": 1433,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1430,
                        "end": 1431,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1432,
                        "end": 1433,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1416,
                  "end": 1421,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 1362,
              "end": 1368,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1362,
                "end": 1363,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1364,
                "end": 1368,
                "decorators": [],
                "name": "kind",
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
        "start": 1335,
        "end": 1338,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1339,
          "end": 1346,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1340,
            "end": 1346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1342,
              "end": 1346,
              "typeName": {
                "type": "Identifier",
                "start": 1342,
                "end": 1346,
                "decorators": [],
                "name": "Item",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1444,
      "end": 1587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1466,
        "end": 1587,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1472,
            "end": 1558,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1498,
                "end": 1520,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1509,
                    "end": 1520,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1516,
                      "end": 1519,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1516,
                        "end": 1517,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1518,
                        "end": 1519,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1503,
                  "end": 1507,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 1529,
                "end": 1552,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1541,
                    "end": 1552,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1548,
                      "end": 1551,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1548,
                        "end": 1549,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1550,
                        "end": 1551,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1534,
                  "end": 1539,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 1480,
              "end": 1486,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1480,
                "end": 1481,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1482,
                "end": 1486,
                "decorators": [],
                "name": "kind",
                "optional": false
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1563,
            "end": 1585,
            "argument": {
              "type": "CallExpression",
              "start": 1570,
              "end": 1584,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1583,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1570,
                "end": 1581,
                "decorators": [],
                "name": "assertNever",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1453,
        "end": 1456,
        "decorators": [],
        "name": "f21",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1457,
          "end": 1464,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1458,
            "end": 1464,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1460,
              "end": 1464,
              "typeName": {
                "type": "Identifier",
                "start": 1460,
                "end": 1464,
                "decorators": [],
                "name": "Item",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
