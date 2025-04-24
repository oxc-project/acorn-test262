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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 85,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 59,
                      "end": 66,
                      "raw": "\"thing\"",
                      "value": "thing"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 82,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 75,
                      "end": 82,
                      "raw": "\"chill\"",
                      "value": "chill"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 36,
              "end": 49,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 42,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 49,
                "decorators": [],
                "name": "freeze",
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 101,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 101,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 163,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 163,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 157,
        "decorators": [],
        "name": "useThing",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 193,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 165,
          "end": 181,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 165,
            "end": 172,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 173,
            "end": 181,
            "decorators": [],
            "name": "useThing",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 258,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 252,
        "decorators": [],
        "name": "cbThing",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 260,
        "end": 285,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 260,
          "end": 275,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 267,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 268,
            "end": 275,
            "decorators": [],
            "name": "cbThing",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 55,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 34,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 15,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 23,
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 23,
                  "decorators": [],
                  "name": "useThing",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 25,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "name": "cbThing",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 55,
            "arguments": [
              {
                "type": "Literal",
                "start": 45,
                "end": 54,
                "raw": "\"./index\"",
                "value": "./index"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 75,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 67,
            "end": 74,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "useThing",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 290,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 171,
        "end": 289,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 179,
            "end": 288,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 187,
              "end": 288,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 221,
                  "end": 286,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 227,
                      "end": 285,
                      "definite": false,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 252,
                              "decorators": [],
                              "name": "time",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "CallExpression",
                              "start": 254,
                              "end": 264,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 254,
                                "end": 262,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 258,
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 259,
                                  "end": 262,
                                  "decorators": [],
                                  "name": "now",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 274,
                            "end": 278,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 278,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 278,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 171,
          "end": 178,
          "decorators": [],
          "name": "cbThing",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
