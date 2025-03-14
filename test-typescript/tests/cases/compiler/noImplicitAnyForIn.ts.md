__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 539,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 36,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 32,
                "end": 36,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 32,
                  "end": 34,
                  "members": []
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 39,
            "end": 61,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 40,
                "end": 49,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 41,
                    "end": 42,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 47,
                    "end": 48,
                    "raw": "3",
                    "value": 3
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 51,
                "end": 60,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 52,
                    "end": 59,
                    "raw": "\"hello\"",
                    "value": "hello"
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
      "type": "ForInStatement",
      "start": 64,
      "end": 318,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 318,
        "body": [
          {
            "type": "ForInStatement",
            "start": 87,
            "end": 188,
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 188,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 165,
                  "end": 182,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 169,
                      "end": 181,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 171,
                        "decorators": [],
                        "name": "_j",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 174,
                        "end": 181,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 174,
                          "end": 178,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 175,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "decorators": [],
                          "name": "j",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 92,
              "end": 97,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 96,
                  "end": 97,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "decorators": [],
                    "name": "j",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "MemberExpression",
              "start": 101,
              "end": 105,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            }
          },
          {
            "type": "ForInStatement",
            "start": 194,
            "end": 316,
            "body": {
              "type": "BlockStatement",
              "start": 214,
              "end": 316,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 224,
                  "end": 238,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 228,
                      "end": 237,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 230,
                        "decorators": [],
                        "name": "k1",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 233,
                        "end": 237,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 234,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 235,
                          "end": 236,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 295,
                  "end": 310,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 299,
                      "end": 309,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 301,
                        "decorators": [],
                        "name": "k2",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 309,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 306,
                          "decorators": [],
                          "name": "k1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "decorators": [],
                          "name": "k",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 203,
                  "end": 204,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "MemberExpression",
              "start": 208,
              "end": 212,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 210,
                "end": 211,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 74,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 320,
      "end": 417,
      "body": {
        "type": "BlockStatement",
        "start": 337,
        "end": 417,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 394,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 393,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 415,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 414,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 408,
                  "end": 414,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 325,
        "end": 330,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 330,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 426,
            "decorators": [],
            "name": "idx",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 440,
            "end": 455,
            "elements": [
              {
                "type": "Literal",
                "start": 441,
                "end": 442,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 444,
                "end": 445,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 447,
                "end": 448,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 450,
                "end": 451,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 453,
                "end": 454,
                "raw": "5",
                "value": 5
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
      "start": 498,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 503,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 506,
            "end": 516,
            "operator": "||",
            "left": {
              "type": "ArrayExpression",
              "start": 506,
              "end": 510,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 507,
                  "end": 509,
                  "elements": []
                }
              ]
            },
            "right": {
              "type": "ArrayExpression",
              "start": 514,
              "end": 516,
              "elements": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 519,
      "end": 539,
      "body": {
        "type": "EmptyStatement",
        "start": 538,
        "end": 539
      },
      "left": {
        "type": "MemberExpression",
        "start": 524,
        "end": 532,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 524,
          "end": 525,
          "decorators": [],
          "name": "n",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "UpdateExpression",
          "start": 526,
          "end": 531,
          "argument": {
            "type": "Identifier",
            "start": 526,
            "end": 529,
            "decorators": [],
            "name": "idx",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        }
      },
      "right": {
        "type": "Identifier",
        "start": 536,
        "end": 537,
        "decorators": [],
        "name": "m",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
