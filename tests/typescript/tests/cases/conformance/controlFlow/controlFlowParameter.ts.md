__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 562,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 15,
          "end": 78,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 15,
            "end": 32,
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 25,
                "end": 32
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "start": 35,
            "end": 78,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 75,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 75,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 48,
                    "end": 71,
                    "argument": {
                      "type": "NewExpression",
                      "start": 54,
                      "end": 70,
                      "callee": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 63,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 64,
                          "end": 69,
                          "value": "bad",
                          "raw": "\"bad\""
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 103,
            "expression": {
              "type": "CallExpression",
              "start": 85,
              "end": 102,
              "callee": {
                "type": "MemberExpression",
                "start": 85,
                "end": 96,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "log",
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
                  "start": 97,
                  "end": 101,
                  "value": "ok",
                  "raw": "\"ok\""
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "f2",
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
          "start": 173,
          "end": 203,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 203,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 176,
              "end": 203,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 176,
                  "end": 182
                },
                {
                  "type": "TSStringKeyword",
                  "start": 185,
                  "end": 191
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 194,
                  "end": 203
                }
              ]
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 207,
          "end": 253,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 207,
            "end": 224,
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 224,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 217,
                "end": 224
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "start": 227,
            "end": 253,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 228,
              "end": 250,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 240,
                    "end": 246,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 240,
                      "end": 245,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 244,
                        "end": 245,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 260,
            "end": 262,
            "expression": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 322,
          "end": 356,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 322,
            "end": 352,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 352,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 325,
                "end": 352,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 334,
                    "end": 340
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 343,
                    "end": 352
                  }
                ]
              }
            }
          },
          "right": {
            "type": "Literal",
            "start": 355,
            "end": 356,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 360,
          "end": 407,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 360,
            "end": 377,
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 377,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 370,
                "end": 377
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "start": 380,
            "end": 407,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 381,
              "end": 404,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 404,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 393,
                    "end": 400,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 393,
                      "end": 399,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 397,
                        "end": 399,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 410,
        "end": 447,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 414,
            "end": 416,
            "expression": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 460,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 464,
          "end": 498,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 464,
            "end": 494,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 494,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 467,
                "end": 494,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 467,
                    "end": 473
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 476,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 485,
                    "end": 494
                  }
                ]
              }
            }
          },
          "right": {
            "type": "Literal",
            "start": 497,
            "end": 498,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 502,
          "end": 531,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 502,
            "end": 519,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 504,
                "end": 517,
                "kind": "init",
                "key": {
                  "type": "AssignmentExpression",
                  "start": 506,
                  "end": 512,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 507,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 510,
                    "end": 512,
                    "value": "",
                    "raw": "\"\""
                  }
                },
                "value": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "TSAsExpression",
            "start": 522,
            "end": 531,
            "expression": {
              "type": "ObjectExpression",
              "start": 522,
              "end": 524,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 528,
              "end": 531
            }
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 562,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 538,
            "end": 540,
            "expression": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
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
