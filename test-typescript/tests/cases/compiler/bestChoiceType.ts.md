__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 307,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 69,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 68,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 53,
              "end": 68,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 66,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 66,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 47,
          "computed": false,
          "object": {
            "type": "LogicalExpression",
            "start": 23,
            "end": 42,
            "operator": "||",
            "left": {
              "type": "CallExpression",
              "start": 23,
              "end": 36,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 35,
                  "raw": "/ /",
                  "regex": {
                    "flags": "",
                    "pattern": " "
                  },
                  "value": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 23,
                "end": 31,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 23,
                  "end": 25,
                  "raw": "''",
                  "value": ""
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 31,
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "ArrayExpression",
              "start": 40,
              "end": 42,
              "elements": []
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 196,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 132,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 131,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 118,
                  "end": 131,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 127,
                      "end": 130,
                      "raw": "/ /",
                      "regex": {
                        "flags": "",
                        "pattern": " "
                      },
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 118,
                    "end": 126,
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "start": 118,
                      "end": 120,
                      "raw": "''",
                      "value": ""
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 126,
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 152,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 145,
                  "end": 152,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 150,
                    "end": 152,
                    "elements": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 193,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 166,
                  "end": 193,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 172,
                      "end": 192,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 177,
                        "end": 192,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 177,
                          "end": 190,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 178,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 190,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 166,
                    "end": 171,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 171,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 218,
            "end": 240,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 239,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 226,
                  "end": 239,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "raw": "/ /",
                      "regex": {
                        "flags": "",
                        "pattern": " "
                      },
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 226,
                    "end": 234,
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "start": 226,
                      "end": 228,
                      "raw": "''",
                      "value": ""
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 234,
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 263,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 253,
                  "end": 263,
                  "alternate": {
                    "type": "ArrayExpression",
                    "start": 261,
                    "end": 263,
                    "elements": []
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 269,
            "end": 305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 304,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 304,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 283,
                      "end": 303,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 288,
                        "end": 303,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 288,
                          "end": 301,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 289,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 301,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 282,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
