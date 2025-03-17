__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 308,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 69,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 47,
          "object": {
            "type": "LogicalExpression",
            "start": 23,
            "end": 42,
            "left": {
              "type": "CallExpression",
              "start": 23,
              "end": 36,
              "callee": {
                "type": "MemberExpression",
                "start": 23,
                "end": 31,
                "object": {
                  "type": "Literal",
                  "start": 23,
                  "end": 25,
                  "value": "",
                  "raw": "''"
                },
                "property": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 31,
                  "name": "match",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 35,
                  "value": null,
                  "raw": "/ /",
                  "regex": {
                    "flags": "",
                    "pattern": " "
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "start": 40,
              "end": 42,
              "elements": []
            }
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 68,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 53,
              "end": 68,
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 66,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 66,
                  "name": "toLowerCase",
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
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
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
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 118,
                  "end": 131,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 118,
                    "end": 126,
                    "object": {
                      "type": "Literal",
                      "start": 118,
                      "end": 120,
                      "value": "",
                      "raw": "''"
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 126,
                      "name": "match",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 127,
                      "end": 130,
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "flags": "",
                        "pattern": " "
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
            "type": "VariableDeclaration",
            "start": 137,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 145,
                  "end": 152,
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "start": 150,
                    "end": 152,
                    "elements": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 166,
                  "end": 193,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 166,
                    "end": 171,
                    "object": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 171,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 172,
                      "end": 192,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 177,
                        "end": 192,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 177,
                          "end": 190,
                          "object": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 178,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 190,
                            "name": "toLowerCase",
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
                      "typeParameters": null,
                      "returnType": null
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "name": "f2",
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
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 226,
                  "end": 239,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 226,
                    "end": 234,
                    "object": {
                      "type": "Literal",
                      "start": 226,
                      "end": 228,
                      "value": "",
                      "raw": "''"
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 229,
                      "end": 234,
                      "name": "match",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "flags": "",
                        "pattern": " "
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
            "type": "VariableDeclaration",
            "start": 245,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 263,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 253,
                  "end": 263,
                  "test": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "start": 261,
                    "end": 263,
                    "elements": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 304,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 282,
                    "object": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 283,
                      "end": 303,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 288,
                        "end": 303,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 288,
                          "end": 301,
                          "object": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 289,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 301,
                            "name": "toLowerCase",
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
                      "typeParameters": null,
                      "returnType": null
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
