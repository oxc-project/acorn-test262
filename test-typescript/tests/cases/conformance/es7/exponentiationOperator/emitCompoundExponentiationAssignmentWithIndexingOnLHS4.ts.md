__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 408,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 35,
            "decorators": [],
            "name": "globalCounter",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 166,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 166,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 101,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 100,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 82,
                "end": 95,
                "decorators": [],
                "name": "globalCounter",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 106,
            "end": 148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 110,
                "end": 147,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 113,
                  "decorators": [],
                  "name": "idx",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 116,
                  "end": 147,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 127,
                      "end": 146,
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 140,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 138,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 138,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 146,
                        "decorators": [],
                        "name": "max",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 116,
                    "end": 126,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 120,
                      "decorators": [],
                      "name": "Math",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 126,
                      "decorators": [],
                      "name": "floor",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 164,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "decorators": [],
              "name": "idx",
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
        "start": 50,
        "end": 62,
        "decorators": [],
        "name": "incrementIdx",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 74,
          "decorators": [],
          "name": "max",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 178,
            "decorators": [],
            "name": "array1",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 181,
            "end": 196,
            "elements": [
              {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 191,
                "end": 192,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 194,
                "end": 195,
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
      "type": "ExpressionStatement",
      "start": 199,
      "end": 241,
      "expression": {
        "type": "AssignmentExpression",
        "start": 199,
        "end": 240,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 199,
          "end": 234,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
            "decorators": [],
            "name": "array1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 206,
            "end": 233,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 219,
                "end": 232,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 225,
                  "decorators": [],
                  "name": "array1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 232,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 218,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 239,
          "end": 240,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 324,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 243,
          "end": 278,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 249,
            "decorators": [],
            "name": "array1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 250,
            "end": 277,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 263,
                "end": 276,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 269,
                  "decorators": [],
                  "name": "array1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 262,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 283,
          "end": 324,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 283,
            "end": 318,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 283,
              "end": 289,
              "decorators": [],
              "name": "array1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "start": 290,
              "end": 317,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 303,
                  "end": 316,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 309,
                    "decorators": [],
                    "name": "array1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 290,
                "end": 302,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false
              },
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 323,
            "end": 324,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 408,
      "expression": {
        "type": "AssignmentExpression",
        "start": 327,
        "end": 407,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 327,
          "end": 362,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "decorators": [],
            "name": "array1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 334,
            "end": 361,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 347,
                "end": 360,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 353,
                  "decorators": [],
                  "name": "array1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 360,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 346,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 367,
          "end": 407,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 367,
            "end": 402,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 367,
              "end": 373,
              "decorators": [],
              "name": "array1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "start": 374,
              "end": 401,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 387,
                  "end": 400,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 393,
                    "decorators": [],
                    "name": "array1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 400,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 374,
                "end": 386,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false
              },
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 406,
            "end": 407,
            "raw": "2",
            "value": 2
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
