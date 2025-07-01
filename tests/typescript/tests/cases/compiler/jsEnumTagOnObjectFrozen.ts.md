__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 33
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
              },
              "optional": false,
              "computed": false,
              "start": 36,
              "end": 49
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "value": {
                      "type": "Literal",
                      "value": "thing",
                      "raw": "\"thing\"",
                      "start": 59,
                      "end": 66
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 56,
                    "end": 66
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "value": {
                      "type": "Literal",
                      "value": "chill",
                      "raw": "\"chill\"",
                      "start": 75,
                      "end": 82
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 72,
                    "end": 82
                  }
                ],
                "start": 50,
                "end": 84
              }
            ],
            "optional": false,
            "start": 36,
            "end": 85
          },
          "definite": false,
          "start": 28,
          "end": 85
        }
      ],
      "declare": false,
      "start": 22,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 88,
          "end": 101
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "directive": null,
      "start": 88,
      "end": 110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 157
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 159
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 161,
        "end": 163
      },
      "expression": false,
      "start": 140,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 172
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "useThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 165,
          "end": 181
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "useThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 192
        },
        "start": 165,
        "end": 192
      },
      "directive": null,
      "start": 165,
      "end": 193
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cbThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 252
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 256,
        "end": 258
      },
      "expression": false,
      "start": 236,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 267
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "cbThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 275
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 275
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "cbThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 285
        },
        "start": 260,
        "end": 285
      },
      "directive": null,
      "start": 260,
      "end": 286
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 287
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 13
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 23
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 23
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 23
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 32
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 32
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 25,
                "end": 32
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 34
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./index",
                "raw": "\"./index\"",
                "start": 45,
                "end": 54
              }
            ],
            "optional": false,
            "start": 37,
            "end": 55
          },
          "definite": false,
          "start": 6,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "useThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 72
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "optional": false,
            "computed": false,
            "start": 67,
            "end": 74
          }
        ],
        "optional": false,
        "start": 58,
        "end": 75
      },
      "directive": null,
      "start": 58,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cbThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 178
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 183
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "logEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 235
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "time",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 248,
                              "end": 252
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 254,
                                  "end": 258
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "now",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 259,
                                  "end": 262
                                },
                                "optional": false,
                                "computed": false,
                                "start": 254,
                                "end": 262
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 254,
                              "end": 264
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 248,
                            "end": 264
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 278
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 278
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 274,
                            "end": 278
                          }
                        ],
                        "start": 238,
                        "end": 285
                      },
                      "definite": false,
                      "start": 227,
                      "end": 285
                    }
                  ],
                  "declare": false,
                  "start": 221,
                  "end": 286
                }
              ],
              "start": 187,
              "end": 288
            },
            "id": null,
            "generator": false,
            "start": 179,
            "end": 288
          }
        ],
        "optional": false,
        "start": 171,
        "end": 289
      },
      "directive": null,
      "start": 171,
      "end": 290
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 290
}
```
