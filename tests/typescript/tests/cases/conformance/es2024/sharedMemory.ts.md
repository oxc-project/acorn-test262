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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 70,
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
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 33,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 34,
                "end": 69,
                "left": {
                  "type": "MemberExpression",
                  "start": 34,
                  "end": 62,
                  "object": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 44,
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 62,
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 65,
                  "end": 69,
                  "value": 1024,
                  "raw": "1024"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 105,
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
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 100,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 183,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 182,
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
            "callee": {
              "type": "Identifier",
              "start": 125,
              "end": 142,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 143,
                "end": 181,
                "left": {
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 174,
                  "object": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 156,
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 174,
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 177,
                  "end": 181,
                  "value": 1024,
                  "raw": "1024"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 223,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 222,
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
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 215,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 268,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 267,
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
            "callee": {
              "type": "MemberExpression",
              "start": 242,
              "end": 254,
              "object": {
                "type": "Identifier",
                "start": 242,
                "end": 249,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "wait",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 265,
                "end": 266,
                "value": 0,
                "raw": "0"
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
      "start": 269,
      "end": 325,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 324,
          "id": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 291,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 277,
                "end": 282,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "async",
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
                "start": 284,
                "end": 289,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "value",
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
            "start": 294,
            "end": 324,
            "callee": {
              "type": "MemberExpression",
              "start": 294,
              "end": 311,
              "object": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 322,
                "end": 323,
                "value": 0,
                "raw": "0"
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
      "start": 326,
      "end": 408,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 407,
          "id": {
            "type": "ObjectPattern",
            "start": 332,
            "end": 366,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 334,
                "end": 348,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 348,
                  "decorators": [],
                  "name": "async64",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 350,
                "end": 364,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 355,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 364,
                  "decorators": [],
                  "name": "value64",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 369,
            "end": 407,
            "callee": {
              "type": "MemberExpression",
              "start": 369,
              "end": 386,
              "object": {
                "type": "Identifier",
                "start": 369,
                "end": 376,
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 386,
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "CallExpression",
                "start": 397,
                "end": 406,
                "callee": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 403,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 404,
                    "end": 405,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
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
      "start": 410,
      "end": 530,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 530,
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
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 435,
              "end": 530,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 441,
                  "end": 480,
                  "test": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 450,
                    "decorators": [],
                    "name": "async",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 452,
                    "end": 480,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 462,
                        "end": 474,
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
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 485,
                  "end": 528,
                  "test": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 496,
                    "decorators": [],
                    "name": "async64",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 498,
                    "end": 528,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 508,
                        "end": 522,
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
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 538,
      "expression": {
        "type": "CallExpression",
        "start": 531,
        "end": 537,
        "callee": {
          "type": "Identifier",
          "start": 531,
          "end": 535,
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
