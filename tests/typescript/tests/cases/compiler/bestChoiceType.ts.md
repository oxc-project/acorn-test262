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
                  "decorators": [],
                  "name": "match",
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
                  "start": 32,
                  "end": 35,
                  "value": null,
                  "raw": "/ /",
                  "regex": {
                    "pattern": " ",
                    "flags": ""
                  }
                }
              ],
              "optional": false
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
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 68,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 66,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
        "decorators": [],
        "name": "f1",
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
        "start": 104,
        "end": 196,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 132,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 131,
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
                      "decorators": [],
                      "name": "match",
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
                      "start": 127,
                      "end": 130,
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "pattern": " ",
                        "flags": ""
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 153,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 152,
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
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 194,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 193,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 166,
                    "end": 171,
                    "object": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 171,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 172,
                      "end": 192,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 190,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "decorators": [],
        "name": "f2",
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
        "start": 212,
        "end": 307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 218,
            "end": 240,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 239,
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
                      "decorators": [],
                      "name": "match",
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
                      "start": 235,
                      "end": 238,
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "pattern": " ",
                        "flags": ""
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 264,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 263,
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
                  "test": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 269,
            "end": 305,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 304,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 282,
                    "object": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 283,
                      "end": 303,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 301,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
