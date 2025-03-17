__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 563,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 15,
          "end": 78,
          "left": {
            "type": "Identifier",
            "start": 15,
            "end": 32,
            "name": "required",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 25,
                "end": 32
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 35,
            "end": 78,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 75,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 64,
                          "end": 69,
                          "value": "bad",
                          "raw": "\"bad\""
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "log",
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
                  "start": 97,
                  "end": 101,
                  "value": "ok",
                  "raw": "\"ok\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "name": "f2",
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
          "start": 173,
          "end": 203,
          "name": "a",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 207,
          "end": 253,
          "left": {
            "type": "Identifier",
            "start": 207,
            "end": 224,
            "name": "required",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 224,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 217,
                "end": 224
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 227,
            "end": 253,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 228,
              "end": 250,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 322,
          "end": 356,
          "left": {
            "type": "Identifier",
            "start": 322,
            "end": 352,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 355,
            "end": 356,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 360,
          "end": 407,
          "left": {
            "type": "Identifier",
            "start": 360,
            "end": 377,
            "name": "required",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 377,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 370,
                "end": 377
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 380,
            "end": 407,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 381,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 460,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 464,
          "end": 498,
          "left": {
            "type": "Identifier",
            "start": 464,
            "end": 494,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 497,
            "end": 498,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 502,
          "end": 531,
          "left": {
            "type": "ObjectPattern",
            "start": 502,
            "end": 519,
            "properties": [
              {
                "type": "Property",
                "start": 504,
                "end": 517,
                "method": false,
                "shorthand": false,
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
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
