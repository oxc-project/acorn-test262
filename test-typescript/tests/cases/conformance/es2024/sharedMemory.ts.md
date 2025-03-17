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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "sab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 12,
            "end": 70,
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 33,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "Int32Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 62,
                    "name": "BYTES_PER_ELEMENT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 83,
            "name": "int32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 86,
            "end": 105,
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 100,
              "name": "Int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "name": "sab",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 118,
            "name": "sab64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 121,
            "end": 182,
            "callee": {
              "type": "Identifier",
              "start": 125,
              "end": 142,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "BigInt64Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 174,
                    "name": "BYTES_PER_ELEMENT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 195,
            "name": "int64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 198,
            "end": 222,
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 215,
              "name": "BigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 221,
                "name": "sab64",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 239,
            "name": "waitValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "name": "wait",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 255,
                "end": 260,
                "name": "int32",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 275,
            "end": 291,
            "properties": [
              {
                "type": "Property",
                "start": 277,
                "end": 282,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "name": "async",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "name": "async",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 284,
                "end": 289,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "name": "value",
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
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 311,
                "name": "waitAsync",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 317,
                "name": "int32",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 332,
            "end": 366,
            "properties": [
              {
                "type": "Property",
                "start": 334,
                "end": 348,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "name": "async",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 348,
                  "name": "async64",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 350,
                "end": 364,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 355,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 364,
                  "name": "value64",
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
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 386,
                "name": "waitAsync",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 387,
                "end": 392,
                "name": "int64",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "BigInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 404,
                    "end": 405,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 420,
            "name": "main",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 530,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
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
                    "name": "async",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                    "name": "async64",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "value64",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "main",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
