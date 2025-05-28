__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 431,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "A",
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
        "start": 14,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 30,
            "expression": {
              "type": "AssignmentExpression",
              "start": 20,
              "end": 30,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 20,
                "end": 26,
                "object": {
                  "type": "ThisExpression",
                  "start": 20,
                  "end": 24
                },
                "property": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 84,
            "expression": {
              "type": "AssignmentExpression",
              "start": 56,
              "end": 84,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 56,
                "end": 66,
                "object": {
                  "type": "ThisExpression",
                  "start": 56,
                  "end": 60
                },
                "property": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 66,
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 69,
                "end": 84,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 69,
                  "end": 80,
                  "object": {
                    "type": "ThisExpression",
                    "start": 69,
                    "end": 73
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 80,
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Literal",
                  "start": 83,
                  "end": 84,
                  "value": 1,
                  "raw": "1"
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
      "type": "ExpressionStatement",
      "start": 112,
      "end": 183,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 125,
          "object": {
            "type": "MemberExpression",
            "start": 112,
            "end": 123,
            "object": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 128,
          "end": 183,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 128,
            "end": 141,
            "object": {
              "type": "MemberExpression",
              "start": 128,
              "end": 139,
              "object": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 130,
                "end": 139,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "right": {
            "type": "FunctionExpression",
            "start": 144,
            "end": 183,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
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
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 158,
              "end": 183,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 164,
                  "end": 181,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 171,
                    "end": 181,
                    "left": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "start": 175,
                      "end": 181,
                      "object": {
                        "type": "ThisExpression",
                        "start": 175,
                        "end": 179
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                }
              ]
            },
            "expression": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 209,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 209,
          "end": 212,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 215,
          "end": 260,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 215,
            "end": 218,
            "object": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "right": {
            "type": "FunctionExpression",
            "start": 221,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "g",
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
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 235,
              "end": 260,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 241,
                  "end": 258,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 248,
                    "end": 258,
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "start": 252,
                      "end": 258,
                      "object": {
                        "type": "ThisExpression",
                        "start": 252,
                        "end": 256
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 258,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                }
              ]
            },
            "expression": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 276,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 269,
            "end": 276,
            "callee": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 286,
      "expression": {
        "type": "CallExpression",
        "start": 277,
        "end": 286,
        "callee": {
          "type": "MemberExpression",
          "start": 277,
          "end": 280,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 281,
            "end": 285,
            "value": "no",
            "raw": "'no'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 313,
        "callee": {
          "type": "MemberExpression",
          "start": 296,
          "end": 299,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 300,
            "end": 312,
            "value": "not really",
            "raw": "'not really'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 338,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 338,
        "callee": {
          "type": "MemberExpression",
          "start": 323,
          "end": 326,
          "object": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 327,
            "end": 337,
            "value": "still no",
            "raw": "'still no'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 370,
      "expression": {
        "type": "CallExpression",
        "start": 348,
        "end": 370,
        "callee": {
          "type": "MemberExpression",
          "start": 348,
          "end": 351,
          "object": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 350,
            "end": 351,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 352,
            "end": 369,
            "value": "not here either",
            "raw": "'not here either'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 392,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 392,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 380,
          "end": 387,
          "object": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 382,
            "end": 387,
            "decorators": [],
            "name": "first",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 390,
          "end": 392,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
