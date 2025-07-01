__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 23,
                  "end": 25
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 31
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 31
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "/ /",
                  "regex": {
                    "pattern": " ",
                    "flags": ""
                  },
                  "start": 32,
                  "end": 35
                }
              ],
              "optional": false,
              "start": 23,
              "end": 36
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 40,
              "end": 42
            },
            "start": 23,
            "end": 42
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 47
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 47
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 54
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 66
                },
                "optional": false,
                "computed": false,
                "start": 53,
                "end": 66
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 53,
              "end": 68
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 68
          }
        ],
        "optional": false,
        "start": 22,
        "end": 69
      },
      "directive": null,
      "start": 22,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 118,
                      "end": 120
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 126
                    },
                    "optional": false,
                    "computed": false,
                    "start": 118,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "pattern": " ",
                        "flags": ""
                      },
                      "start": 127,
                      "end": 130
                    }
                  ],
                  "optional": false,
                  "start": 118,
                  "end": 131
                },
                "definite": false,
                "start": 114,
                "end": 131
              }
            ],
            "declare": false,
            "start": 110,
            "end": 132
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 150,
                    "end": 152
                  },
                  "start": 145,
                  "end": 152
                },
                "definite": false,
                "start": 141,
                "end": 152
              }
            ],
            "declare": false,
            "start": 137,
            "end": 153
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 171
                    },
                    "optional": false,
                    "computed": false,
                    "start": 166,
                    "end": 171
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 173
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 178
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 190
                          },
                          "optional": false,
                          "computed": false,
                          "start": 177,
                          "end": 190
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 177,
                        "end": 192
                      },
                      "id": null,
                      "generator": false,
                      "start": 172,
                      "end": 192
                    }
                  ],
                  "optional": false,
                  "start": 166,
                  "end": 193
                },
                "definite": false,
                "start": 162,
                "end": 193
              }
            ],
            "declare": false,
            "start": 158,
            "end": 194
          }
        ],
        "start": 104,
        "end": 196
      },
      "expression": false,
      "start": 90,
      "end": 196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 209
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 226,
                      "end": 228
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "match",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 234
                    },
                    "optional": false,
                    "computed": false,
                    "start": 226,
                    "end": 234
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "/ /",
                      "regex": {
                        "pattern": " ",
                        "flags": ""
                      },
                      "start": 235,
                      "end": 238
                    }
                  ],
                  "optional": false,
                  "start": 226,
                  "end": 239
                },
                "definite": false,
                "start": 222,
                "end": 239
              }
            ],
            "declare": false,
            "start": 218,
            "end": 240
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 258
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 261,
                    "end": 263
                  },
                  "start": 253,
                  "end": 263
                },
                "definite": false,
                "start": 249,
                "end": 263
              }
            ],
            "declare": false,
            "start": 245,
            "end": 264
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 282
                    },
                    "optional": false,
                    "computed": false,
                    "start": 277,
                    "end": 282
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 288,
                            "end": 289
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 301
                          },
                          "optional": false,
                          "computed": false,
                          "start": 288,
                          "end": 301
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 288,
                        "end": 303
                      },
                      "id": null,
                      "generator": false,
                      "start": 283,
                      "end": 303
                    }
                  ],
                  "optional": false,
                  "start": 277,
                  "end": 304
                },
                "definite": false,
                "start": 273,
                "end": 304
              }
            ],
            "declare": false,
            "start": 269,
            "end": 305
          }
        ],
        "start": 212,
        "end": 307
      },
      "expression": false,
      "start": 198,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 307
}
```
