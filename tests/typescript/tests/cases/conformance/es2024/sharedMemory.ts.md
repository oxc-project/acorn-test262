__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "sab",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 12,
            "end": 70,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 34,
                "end": 69,
                "operator": "*",
                "left": {
                  "type": "MemberExpression",
                  "start": 34,
                  "end": 62,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 44,
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 62,
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 65,
                  "end": 69,
                  "raw": "1024",
                  "value": 1024
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 33,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 83,
            "decorators": [],
            "name": "int32",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 86,
            "end": 105,
            "arguments": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "decorators": [],
                "name": "sab",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 100,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 118,
            "decorators": [],
            "name": "sab64",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 121,
            "end": 182,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 143,
                "end": 181,
                "operator": "*",
                "left": {
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 174,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 156,
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 174,
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 177,
                  "end": 181,
                  "raw": "1024",
                  "value": 1024
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 125,
              "end": 142,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 195,
            "decorators": [],
            "name": "int64",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 198,
            "end": 222,
            "arguments": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 221,
                "decorators": [],
                "name": "sab64",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 215,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 239,
            "decorators": [],
            "name": "waitValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 242,
            "end": 267,
            "arguments": [
              {
                "type": "Identifier",
                "start": 255,
                "end": 260,
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 265,
                "end": 266,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 242,
              "end": 254,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 242,
                "end": 249,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "wait",
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
      "type": "VariableDeclaration",
      "start": 269,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 324,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 291,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 277,
                "end": 282,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 284,
                "end": 289,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 294,
            "end": 324,
            "arguments": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 317,
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 319,
                "end": 320,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 322,
                "end": 323,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 294,
              "end": 311,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "decorators": [],
                "name": "waitAsync",
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
      "type": "VariableDeclaration",
      "start": 326,
      "end": 408,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 407,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 332,
            "end": 366,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 334,
                "end": 348,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 348,
                  "decorators": [],
                  "name": "async64",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 350,
                "end": 364,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 355,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 364,
                  "decorators": [],
                  "name": "value64",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 369,
            "end": 407,
            "arguments": [
              {
                "type": "Identifier",
                "start": 387,
                "end": 392,
                "decorators": [],
                "name": "int64",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 394,
                "end": 395,
                "raw": "0",
                "value": 0
              },
              {
                "type": "CallExpression",
                "start": 397,
                "end": 406,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 404,
                    "end": 405,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 403,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 369,
              "end": 386,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 369,
                "end": 376,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 386,
                "decorators": [],
                "name": "waitAsync",
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
      "type": "VariableDeclaration",
      "start": 410,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 420,
            "decorators": [],
            "name": "main",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 530,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 435,
              "end": 530,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 441,
                  "end": 480,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 452,
                    "end": 480,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 462,
                        "end": 474,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 462,
                          "end": 473,
                          "argument": {
                            "type": "Identifier",
                            "start": 468,
                            "end": 473,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 450,
                    "decorators": [],
                    "name": "async",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 485,
                  "end": 528,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 498,
                    "end": 528,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 508,
                        "end": 522,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 508,
                          "end": 521,
                          "argument": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 521,
                            "decorators": [],
                            "name": "value64",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 496,
                    "decorators": [],
                    "name": "async64",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 538,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 531,
        "end": 537,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 531,
          "end": 535,
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
