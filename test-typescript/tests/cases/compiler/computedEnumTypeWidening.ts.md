__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1565,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "computed",
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
          "start": 26,
          "end": 35,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 44,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 47,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 60,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 64,
            "end": 75,
            "callee": {
              "type": "Identifier",
              "start": 64,
              "end": 72,
              "name": "computed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 73,
                "end": 74,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 81,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 85,
            "end": 96,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "name": "computed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 102,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 106,
            "end": 117,
            "callee": {
              "type": "Identifier",
              "start": 106,
              "end": 114,
              "name": "computed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 115,
                "end": 116,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 123,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 127,
            "end": 138,
            "callee": {
              "type": "Identifier",
              "start": 127,
              "end": 135,
              "name": "computed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 136,
                "end": 137,
                "value": 3,
                "raw": "3"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 54,
        "end": 141,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 64,
              "end": 75,
              "callee": {
                "type": "Identifier",
                "start": 64,
                "end": 72,
                "name": "computed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 81,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 85,
              "end": 96,
              "callee": {
                "type": "Identifier",
                "start": 85,
                "end": 93,
                "name": "computed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 94,
                  "end": 95,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 102,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 106,
              "end": 117,
              "callee": {
                "type": "Identifier",
                "start": 106,
                "end": 114,
                "name": "computed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 123,
            "end": 138,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 127,
              "end": 138,
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "name": "computed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 143,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 388,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 163,
            "end": 178,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 177,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 177,
                  "object": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "name": "B",
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
            "start": 197,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 208,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 233,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 228,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 233,
                  "name": "c1",
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
            "type": "VariableDeclaration",
            "start": 253,
            "end": 265,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 264,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 264,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 276,
            "end": 296,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 295,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 289,
                  "name": "c3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 289,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 286,
                        "end": 289,
                        "left": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "name": "B",
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
                  "start": 292,
                  "end": 295,
                  "object": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "name": "B",
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
            "start": 309,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 315,
                  "name": "v3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 320,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 334,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 340,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 347,
                  "name": "c4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 347,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 347,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 344,
                        "end": 347,
                        "left": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 347,
                          "name": "B",
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
                  "type": "Identifier",
                  "start": 350,
                  "end": 352,
                  "name": "c1",
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
            "type": "VariableDeclaration",
            "start": 366,
            "end": 378,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 377,
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 372,
                  "name": "v4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 377,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 826,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "name": "f2",
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
          "start": 402,
          "end": 415,
          "name": "cond",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 406,
            "end": 415,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 408,
              "end": 415
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 417,
        "end": 826,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 429,
                "end": 450,
                "id": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 431,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 434,
                  "end": 450,
                  "test": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 438,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 441,
                    "end": 444,
                    "object": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 447,
                    "end": 450,
                    "object": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 448,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 482,
            "end": 507,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 488,
                "end": 506,
                "id": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 501,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 490,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 492,
                      "end": 501,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 492,
                          "end": 495,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 492,
                            "end": 495,
                            "left": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 493,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 495,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 498,
                          "end": 501,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 498,
                            "end": 501,
                            "left": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 499,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 500,
                              "end": 501,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 506,
                  "name": "c1",
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
            "type": "VariableDeclaration",
            "start": 526,
            "end": 552,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 551,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 534,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 537,
                  "end": 551,
                  "test": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 541,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 544,
                    "end": 546,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "name": "c2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 571,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 597,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 579,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 582,
                  "end": 597,
                  "test": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 586,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 591,
                    "name": "c3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 594,
                    "end": 597,
                    "object": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 597,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 629,
            "end": 660,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 635,
                "end": 659,
                "id": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 654,
                  "name": "c5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 637,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 639,
                      "end": 654,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 639,
                          "end": 642,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 639,
                            "end": 642,
                            "left": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 640,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 642,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 645,
                          "end": 648,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 645,
                            "end": 648,
                            "left": {
                              "type": "Identifier",
                              "start": 645,
                              "end": 646,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 648,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 651,
                          "end": 654,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 651,
                            "end": 654,
                            "left": {
                              "type": "Identifier",
                              "start": 651,
                              "end": 652,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 653,
                              "end": 654,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 659,
                  "name": "c4",
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
            "type": "VariableDeclaration",
            "start": 684,
            "end": 696,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 688,
                "end": 695,
                "id": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 690,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 695,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 707,
            "end": 719,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 711,
                "end": 718,
                "id": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 713,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 718,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 738,
            "end": 750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 742,
                "end": 749,
                "id": {
                  "type": "Identifier",
                  "start": 742,
                  "end": 744,
                  "name": "v3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 749,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 769,
            "end": 781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 773,
                "end": 780,
                "id": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 775,
                  "name": "v4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 780,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 792,
            "end": 804,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 796,
                "end": 803,
                "id": {
                  "type": "Identifier",
                  "start": 796,
                  "end": 798,
                  "name": "v5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 803,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 828,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 839,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 842,
        "end": 1094,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 848,
            "end": 863,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 854,
                "end": 862,
                "id": {
                  "type": "Identifier",
                  "start": 854,
                  "end": 856,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 859,
                  "end": 862,
                  "object": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 860,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
                    "name": "B",
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
            "start": 868,
            "end": 880,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 872,
                "end": 879,
                "id": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 874,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 879,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 891,
            "end": 911,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 910,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 899,
                    "end": 904,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 901,
                      "end": 904,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 901,
                        "end": 904,
                        "left": {
                          "type": "Identifier",
                          "start": 901,
                          "end": 902,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 904,
                          "name": "B",
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
                  "start": 907,
                  "end": 910,
                  "object": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 908,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 910,
                    "name": "B",
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
            "start": 916,
            "end": 928,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 920,
                "end": 927,
                "id": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 922,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 927,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 941,
            "end": 963,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 947,
                "end": 962,
                "id": {
                  "type": "Identifier",
                  "start": 947,
                  "end": 949,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 952,
                  "end": 962,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 952,
                    "end": 955,
                    "object": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 955,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 959,
                    "end": 962,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 959,
                      "end": 962,
                      "left": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 960,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 962,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 968,
            "end": 980,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 972,
                "end": 979,
                "id": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 974,
                  "name": "v3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 979,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 993,
            "end": 1013,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 999,
                "end": 1012,
                "id": {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1001,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 1004,
                  "end": 1012,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1009,
                    "end": 1012,
                    "object": {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1010,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1012,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1005,
                    "end": 1008,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1005,
                      "end": 1008,
                      "left": {
                        "type": "Identifier",
                        "start": 1005,
                        "end": 1006,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1007,
                        "end": 1008,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1018,
            "end": 1030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1022,
                "end": 1029,
                "id": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1024,
                  "name": "v4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1029,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1043,
            "end": 1067,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1049,
                "end": 1066,
                "id": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1051,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1054,
                  "end": 1066,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1054,
                    "end": 1057,
                    "object": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1055,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1056,
                      "end": 1057,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1061,
                    "end": 1066,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1066,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1072,
            "end": 1084,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1076,
                "end": 1083,
                "id": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1078,
                  "name": "v5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1081,
                  "end": 1083,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1096,
      "end": 1126,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1111,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1114,
          "end": 1115,
          "id": {
            "type": "Identifier",
            "start": 1114,
            "end": 1115,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1117,
          "end": 1118,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1118,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1120,
          "end": 1121,
          "id": {
            "type": "Identifier",
            "start": 1120,
            "end": 1121,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1123,
          "end": 1124,
          "id": {
            "type": "Identifier",
            "start": 1123,
            "end": 1124,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 1112,
        "end": 1126,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1114,
            "end": 1115,
            "id": {
              "type": "Identifier",
              "start": 1114,
              "end": 1115,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1117,
            "end": 1118,
            "id": {
              "type": "Identifier",
              "start": 1117,
              "end": 1118,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1120,
            "end": 1121,
            "id": {
              "type": "Identifier",
              "start": 1120,
              "end": 1121,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1123,
            "end": 1124,
            "id": {
              "type": "Identifier",
              "start": 1123,
              "end": 1124,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1128,
      "end": 1206,
      "id": {
        "type": "Identifier",
        "start": 1137,
        "end": 1139,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1142,
        "end": 1206,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1148,
            "end": 1164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1154,
                "end": 1163,
                "id": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1156,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1159,
                  "end": 1163,
                  "object": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1161,
                    "name": "E2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1163,
                    "name": "B",
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
            "start": 1184,
            "end": 1197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1188,
                "end": 1196,
                "id": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1190,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1193,
                  "end": 1196,
                  "object": {
                    "type": "Identifier",
                    "start": 1193,
                    "end": 1194,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1196,
                    "name": "B",
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1208,
      "end": 1223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1214,
          "end": 1222,
          "id": {
            "type": "Identifier",
            "start": 1214,
            "end": 1216,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1219,
            "end": 1222,
            "object": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "name": "B",
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
      "start": 1224,
      "end": 1248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1230,
          "end": 1247,
          "id": {
            "type": "Identifier",
            "start": 1230,
            "end": 1232,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1235,
            "end": 1247,
            "expression": {
              "type": "MemberExpression",
              "start": 1235,
              "end": 1238,
              "object": {
                "type": "Identifier",
                "start": 1235,
                "end": 1236,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1242,
              "end": 1247,
              "typeName": {
                "type": "Identifier",
                "start": 1242,
                "end": 1247,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1249,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1253,
          "end": 1261,
          "id": {
            "type": "Identifier",
            "start": 1253,
            "end": 1255,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1258,
            "end": 1261,
            "object": {
              "type": "Identifier",
              "start": 1258,
              "end": 1259,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1260,
              "end": 1261,
              "name": "B",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1263,
      "end": 1285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1284,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1269,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1272,
            "end": 1284,
            "expression": {
              "type": "MemberExpression",
              "start": 1272,
              "end": 1275,
              "object": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1274,
                "end": 1275,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1279,
              "end": 1284,
              "typeName": {
                "type": "Identifier",
                "start": 1279,
                "end": 1284,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1287,
      "end": 1382,
      "id": {
        "type": "Identifier",
        "start": 1293,
        "end": 1294,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1295,
        "end": 1382,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1299,
            "end": 1308,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1299,
              "end": 1301,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 1304,
              "end": 1307,
              "object": {
                "type": "Identifier",
                "start": 1304,
                "end": 1305,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1306,
                "end": 1307,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1311,
            "end": 1329,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1311,
              "end": 1313,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSAsExpression",
              "start": 1316,
              "end": 1328,
              "expression": {
                "type": "MemberExpression",
                "start": 1316,
                "end": 1319,
                "object": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1317,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1318,
                  "end": 1319,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1323,
                "end": 1328,
                "typeName": {
                  "type": "Identifier",
                  "start": 1323,
                  "end": 1328,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1332,
            "end": 1350,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1341,
              "end": 1343,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 1346,
              "end": 1349,
              "object": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1348,
                "end": 1349,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1353,
            "end": 1380,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1362,
              "end": 1364,
              "name": "p4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSAsExpression",
              "start": 1367,
              "end": 1379,
              "expression": {
                "type": "MemberExpression",
                "start": 1367,
                "end": 1370,
                "object": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1368,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1369,
                  "end": 1370,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1374,
                "end": 1379,
                "typeName": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1379,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1406,
      "end": 1429,
      "id": {
        "type": "Identifier",
        "start": 1411,
        "end": 1417,
        "name": "MyEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1420,
          "end": 1421,
          "id": {
            "type": "Identifier",
            "start": 1420,
            "end": 1421,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1423,
          "end": 1424,
          "id": {
            "type": "Identifier",
            "start": 1423,
            "end": 1424,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1426,
          "end": 1427,
          "id": {
            "type": "Identifier",
            "start": 1426,
            "end": 1427,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1418,
        "end": 1429,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1420,
            "end": 1421,
            "id": {
              "type": "Identifier",
              "start": 1420,
              "end": 1421,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1423,
            "end": 1424,
            "id": {
              "type": "Identifier",
              "start": 1423,
              "end": 1424,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1426,
            "end": 1427,
            "id": {
              "type": "Identifier",
              "start": 1426,
              "end": 1427,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1431,
      "end": 1451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1435,
          "end": 1450,
          "id": {
            "type": "Identifier",
            "start": 1435,
            "end": 1439,
            "name": "val1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1442,
            "end": 1450,
            "object": {
              "type": "Identifier",
              "start": 1442,
              "end": 1448,
              "name": "MyEnum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1449,
              "end": 1450,
              "name": "A",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1452,
      "end": 1468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1452,
        "end": 1467,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1452,
          "end": 1456,
          "name": "val1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1459,
          "end": 1467,
          "object": {
            "type": "Identifier",
            "start": 1459,
            "end": 1465,
            "name": "MyEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1470,
      "end": 1509,
      "id": {
        "type": "Identifier",
        "start": 1483,
        "end": 1497,
        "name": "MyDeclaredEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1500,
          "end": 1501,
          "id": {
            "type": "Identifier",
            "start": 1500,
            "end": 1501,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1503,
          "end": 1504,
          "id": {
            "type": "Identifier",
            "start": 1503,
            "end": 1504,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1506,
          "end": 1507,
          "id": {
            "type": "Identifier",
            "start": 1506,
            "end": 1507,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 1498,
        "end": 1509,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1500,
            "end": 1501,
            "id": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1503,
            "end": 1504,
            "id": {
              "type": "Identifier",
              "start": 1503,
              "end": 1504,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1506,
            "end": 1507,
            "id": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1511,
      "end": 1539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1515,
          "end": 1538,
          "id": {
            "type": "Identifier",
            "start": 1515,
            "end": 1519,
            "name": "val2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1522,
            "end": 1538,
            "object": {
              "type": "Identifier",
              "start": 1522,
              "end": 1536,
              "name": "MyDeclaredEnum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1537,
              "end": 1538,
              "name": "A",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1540,
      "end": 1564,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1540,
        "end": 1563,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1540,
          "end": 1544,
          "name": "val2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1547,
          "end": 1563,
          "object": {
            "type": "Identifier",
            "start": 1547,
            "end": 1561,
            "name": "MyDeclaredEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1562,
            "end": 1563,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
