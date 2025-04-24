__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 514,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 11,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 11,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 7,
                  "end": 9,
                  "members": []
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 14,
            "end": 36,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 15,
                "end": 24,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 16,
                    "end": 17,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "raw": "3",
                    "value": 3
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 26,
                "end": 35,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 27,
                    "end": 34,
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
      "start": 39,
      "end": 293,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 293,
        "body": [
          {
            "type": "ForInStatement",
            "start": 62,
            "end": 163,
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 163,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 140,
                  "end": 157,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 144,
                      "end": 156,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "_j",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 156,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 149,
                          "end": 153,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
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
              "start": 67,
              "end": 72,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 72,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "MemberExpression",
              "start": 76,
              "end": 80,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ForInStatement",
            "start": 169,
            "end": 291,
            "body": {
              "type": "BlockStatement",
              "start": 189,
              "end": 291,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 199,
                  "end": 213,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 203,
                      "end": 212,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 205,
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
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
                          "optional": false,
                          "typeAnnotation": null
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
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 270,
                  "end": 285,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 274,
                      "end": 284,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 276,
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 279,
                        "end": 284,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 283,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
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
              "start": 174,
              "end": 179,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 178,
                  "end": 179,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "MemberExpression",
              "start": 183,
              "end": 187,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 49,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 295,
      "end": 392,
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 392,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 363,
            "end": 369,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 367,
                "end": 368,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 390,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 389,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 383,
                  "end": 389,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 300,
        "end": 305,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 304,
            "end": 305,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 309,
        "end": 310,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 401,
            "decorators": [],
            "name": "idx",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 404,
            "end": 405,
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
      "start": 407,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 415,
            "end": 430,
            "elements": [
              {
                "type": "Literal",
                "start": 416,
                "end": 417,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 419,
                "end": 420,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 428,
                "end": 429,
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
      "start": 473,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 491,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 481,
            "end": 491,
            "operator": "||",
            "left": {
              "type": "ArrayExpression",
              "start": 481,
              "end": 485,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 482,
                  "end": 484,
                  "elements": []
                }
              ]
            },
            "right": {
              "type": "ArrayExpression",
              "start": 489,
              "end": 491,
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
      "start": 494,
      "end": 514,
      "body": {
        "type": "EmptyStatement",
        "start": 513,
        "end": 514
      },
      "left": {
        "type": "MemberExpression",
        "start": 499,
        "end": 507,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 499,
          "end": 500,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "UpdateExpression",
          "start": 501,
          "end": 506,
          "argument": {
            "type": "Identifier",
            "start": 501,
            "end": 504,
            "decorators": [],
            "name": "idx",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "++",
          "prefix": false
        }
      },
      "right": {
        "type": "Identifier",
        "start": 511,
        "end": 512,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
