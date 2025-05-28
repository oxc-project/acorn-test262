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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "value": 3,
                    "raw": "3"
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
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 39,
      "end": 293,
      "left": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 49,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 293,
        "body": [
          {
            "type": "ForInStatement",
            "start": 62,
            "end": 163,
            "left": {
              "type": "VariableDeclaration",
              "start": 67,
              "end": 72,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 76,
              "end": 80,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 163,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 140,
                  "end": 157,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 144,
                      "end": 156,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 149,
                          "end": 153,
                          "object": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ForInStatement",
            "start": 169,
            "end": 291,
            "left": {
              "type": "VariableDeclaration",
              "start": 174,
              "end": 179,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 178,
                  "end": 179,
                  "id": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 183,
              "end": 187,
              "object": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "body": {
              "type": "BlockStatement",
              "start": 189,
              "end": 291,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 199,
                  "end": 213,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 203,
                      "end": 212,
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
                        "object": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 210,
                          "end": 211,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 270,
                  "end": 285,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 274,
                      "end": 284,
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
                        "object": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 283,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
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
      "start": 295,
      "end": 392,
      "left": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 305,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 304,
            "end": 305,
            "id": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 309,
        "end": 310,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 392,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 363,
            "end": 369,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 367,
                "end": 368,
                "id": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 375,
            "end": 390,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 389,
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
                  "left": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 406,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 405,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 431,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 430,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 419,
                "end": 420,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 428,
                "end": 429,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 492,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 491,
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
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "start": 489,
              "end": 491,
              "elements": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 494,
      "end": 514,
      "left": {
        "type": "MemberExpression",
        "start": 499,
        "end": 507,
        "object": {
          "type": "Identifier",
          "start": 499,
          "end": 500,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "UpdateExpression",
          "start": 501,
          "end": 506,
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 501,
            "end": 504,
            "decorators": [],
            "name": "idx",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "computed": true
      },
      "right": {
        "type": "Identifier",
        "start": 511,
        "end": 512,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "EmptyStatement",
        "start": 513,
        "end": 514
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
