__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 287,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 86,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 36,
            "end": 85,
            "callee": {
              "type": "MemberExpression",
              "start": 36,
              "end": 49,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 42,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 50,
                "end": 84,
                "properties": [
                  {
                    "type": "Property",
                    "start": 56,
                    "end": 66,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 59,
                      "end": 66,
                      "value": "thing",
                      "raw": "\"thing\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 82,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 75,
                      "end": 82,
                      "value": "chill",
                      "raw": "\"chill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 88,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 101,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 101,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 157,
        "decorators": [],
        "name": "useThing",
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
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 163,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 165,
          "end": 181,
          "object": {
            "type": "Identifier",
            "start": 165,
            "end": 172,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 173,
            "end": 181,
            "decorators": [],
            "name": "useThing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 184,
          "end": 192,
          "decorators": [],
          "name": "useThing",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 252,
        "decorators": [],
        "name": "cbThing",
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
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 258,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 286,
      "expression": {
        "type": "AssignmentExpression",
        "start": 260,
        "end": 285,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 260,
          "end": 275,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 267,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 268,
            "end": 275,
            "decorators": [],
            "name": "cbThing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 278,
          "end": 285,
          "decorators": [],
          "name": "cbThing",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 55,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 34,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 15,
                "end": 23,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 23,
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 23,
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 25,
                "end": 32,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 55,
            "callee": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 45,
                "end": 54,
                "value": "./index",
                "raw": "\"./index\""
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
      "type": "ExpressionStatement",
      "start": 58,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "useThing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 67,
            "end": 74,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 290,
      "expression": {
        "type": "CallExpression",
        "start": 171,
        "end": 289,
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 178,
          "decorators": [],
          "name": "cbThing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 179,
            "end": 288,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 183,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 187,
              "end": 288,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 221,
                  "end": 286,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 227,
                      "end": 285,
                      "id": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 235,
                        "decorators": [],
                        "name": "logEntry",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 238,
                        "end": 285,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 248,
                            "end": 264,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 252,
                              "decorators": [],
                              "name": "time",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "CallExpression",
                              "start": 254,
                              "end": 264,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 254,
                                "end": 262,
                                "object": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 258,
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 259,
                                  "end": 262,
                                  "decorators": [],
                                  "name": "now",
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 274,
                            "end": 278,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 278,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 278,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
