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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 35,
            "name": "globalCounter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
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
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 62,
        "name": "incrementIdx",
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
          "start": 63,
          "end": 74,
          "name": "max",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "globalCounter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 113,
                  "name": "idx",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 116,
                  "end": 147,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 116,
                    "end": 126,
                    "object": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 120,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 126,
                      "name": "floor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 127,
                      "end": 146,
                      "left": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 140,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 138,
                          "object": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 131,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 138,
                            "name": "random",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "*",
                      "right": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 146,
                        "name": "max",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 164,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "name": "idx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 178,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 191,
                "end": 192,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 194,
                "end": 195,
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
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "CallExpression",
            "start": 206,
            "end": 233,
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 218,
              "name": "incrementIdx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 219,
                "end": 232,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 225,
                  "name": "array1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 232,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 239,
          "end": 240,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 249,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "CallExpression",
            "start": 250,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 262,
              "name": "incrementIdx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 263,
                "end": 276,
                "object": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 269,
                  "name": "array1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": true,
          "optional": false
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
            "object": {
              "type": "Identifier",
              "start": 283,
              "end": 289,
              "name": "array1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "CallExpression",
              "start": 290,
              "end": 317,
              "callee": {
                "type": "Identifier",
                "start": 290,
                "end": 302,
                "name": "incrementIdx",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 303,
                  "end": 316,
                  "object": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 309,
                    "name": "array1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 316,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": true,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 323,
            "end": 324,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "CallExpression",
            "start": 334,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 346,
              "name": "incrementIdx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 347,
                "end": 360,
                "object": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 353,
                  "name": "array1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 360,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 367,
          "end": 407,
          "left": {
            "type": "MemberExpression",
            "start": 367,
            "end": 402,
            "object": {
              "type": "Identifier",
              "start": 367,
              "end": 373,
              "name": "array1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "CallExpression",
              "start": 374,
              "end": 401,
              "callee": {
                "type": "Identifier",
                "start": 374,
                "end": 386,
                "name": "incrementIdx",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 387,
                  "end": 400,
                  "object": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 393,
                    "name": "array1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 400,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": true,
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 406,
            "end": 407,
            "value": 2,
            "raw": "2"
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
