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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 103,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 85,
              "end": 102,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 97,
                  "end": 101,
                  "raw": "\"ok\"",
                  "value": "ok",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 85,
                "end": 96,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
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
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 35,
            "end": 78,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 75,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 64,
                          "end": 69,
                          "raw": "\"bad\"",
                          "value": "bad",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 63,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 305,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 260,
            "end": 262,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
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
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 227,
            "end": 253,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 228,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 240,
                    "end": 246,
                    "directive": null,
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
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 447,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 410,
        "end": 447,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 414,
            "end": 416,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
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
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 355,
            "end": 356,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
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
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 380,
            "end": 407,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 381,
              "end": 404,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 404,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 393,
                    "end": 400,
                    "directive": null,
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
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 562,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 562,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 538,
            "end": 540,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 460,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
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
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 497,
            "end": 498,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
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
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 504,
                "end": 517,
                "computed": true,
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
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
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
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
