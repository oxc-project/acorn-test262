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
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 47,
                    "end": 48,
                    "value": 3,
                    "raw": "3"
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
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 64,
      "end": 318,
      "left": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 318,
        "body": [
          {
            "type": "ForInStatement",
            "start": 87,
            "end": 188,
            "left": {
              "type": "VariableDeclaration",
              "start": 92,
              "end": 97,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 96,
                  "end": 97,
                  "id": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 101,
              "end": 105,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 171,
                        "name": "_j",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 174,
                        "end": 181,
                        "object": {
                          "type": "MemberExpression",
                          "start": 174,
                          "end": 178,
                          "object": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 175,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ForInStatement",
            "start": 194,
            "end": 316,
            "left": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 203,
                  "end": 204,
                  "id": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 208,
              "end": 212,
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 210,
                "end": 211,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 230,
                        "name": "k1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 233,
                        "end": 237,
                        "object": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 234,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 235,
                          "end": 236,
                          "value": 0,
                          "raw": "0"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 301,
                        "name": "k2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 309,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 306,
                          "name": "k1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 320,
      "end": 417,
      "left": {
        "type": "VariableDeclaration",
        "start": 325,
        "end": 330,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 330,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 408,
                  "end": 414,
                  "left": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 426,
            "name": "idx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 429,
            "end": 430,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 444,
                "end": 445,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 447,
                "end": 448,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 450,
                "end": 451,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 453,
                "end": 454,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 503,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 506,
            "end": 516,
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
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "start": 514,
              "end": 516,
              "elements": []
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 519,
      "end": 539,
      "left": {
        "type": "MemberExpression",
        "start": 524,
        "end": 532,
        "object": {
          "type": "Identifier",
          "start": 524,
          "end": 525,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "UpdateExpression",
          "start": 526,
          "end": 531,
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 526,
            "end": 529,
            "name": "idx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "computed": true,
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 536,
        "end": 537,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "EmptyStatement",
        "start": 538,
        "end": 539
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
