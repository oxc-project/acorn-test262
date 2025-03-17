__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 213,
  "end": 752,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 222,
            "name": "sab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 225,
            "end": 283,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 246,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 247,
                "end": 282,
                "left": {
                  "type": "MemberExpression",
                  "start": 247,
                  "end": 275,
                  "object": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 257,
                    "name": "Int32Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 275,
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
                  "start": 278,
                  "end": 282,
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
      "start": 285,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 296,
            "name": "int32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 299,
            "end": 318,
            "callee": {
              "type": "Identifier",
              "start": 303,
              "end": 313,
              "name": "Int32Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 314,
                "end": 317,
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
      "start": 320,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 331,
            "name": "sab64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 334,
            "end": 395,
            "callee": {
              "type": "Identifier",
              "start": 338,
              "end": 355,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 356,
                "end": 394,
                "left": {
                  "type": "MemberExpression",
                  "start": 356,
                  "end": 387,
                  "object": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 369,
                    "name": "BigInt64Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 387,
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
                  "start": 390,
                  "end": 394,
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
      "start": 397,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 408,
            "name": "int64",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 411,
            "end": 435,
            "callee": {
              "type": "Identifier",
              "start": 415,
              "end": 428,
              "name": "BigInt64Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 429,
                "end": 434,
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
      "start": 437,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 452,
            "name": "waitValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 455,
            "end": 480,
            "callee": {
              "type": "MemberExpression",
              "start": 455,
              "end": 467,
              "object": {
                "type": "Identifier",
                "start": 455,
                "end": 462,
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 463,
                "end": 467,
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
                "start": 468,
                "end": 473,
                "name": "int32",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 475,
                "end": 476,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 478,
                "end": 479,
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
      "start": 482,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 537,
          "id": {
            "type": "ObjectPattern",
            "start": 488,
            "end": 504,
            "properties": [
              {
                "type": "Property",
                "start": 490,
                "end": 495,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 495,
                  "name": "async",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 495,
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
                "start": 497,
                "end": 502,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 502,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 502,
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
            "start": 507,
            "end": 537,
            "callee": {
              "type": "MemberExpression",
              "start": 507,
              "end": 524,
              "object": {
                "type": "Identifier",
                "start": 507,
                "end": 514,
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 515,
                "end": 524,
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
                "start": 525,
                "end": 530,
                "name": "int32",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 535,
                "end": 536,
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
      "start": 539,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 620,
          "id": {
            "type": "ObjectPattern",
            "start": 545,
            "end": 579,
            "properties": [
              {
                "type": "Property",
                "start": 547,
                "end": 561,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 552,
                  "name": "async",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 561,
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
                "start": 563,
                "end": 577,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 568,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 577,
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
            "start": 582,
            "end": 620,
            "callee": {
              "type": "MemberExpression",
              "start": 582,
              "end": 599,
              "object": {
                "type": "Identifier",
                "start": 582,
                "end": 589,
                "name": "Atomics",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 590,
                "end": 599,
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
                "start": 600,
                "end": 605,
                "name": "int64",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 607,
                "end": 608,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "CallExpression",
                "start": 610,
                "end": 619,
                "callee": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 616,
                  "name": "BigInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 617,
                    "end": 618,
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
      "start": 623,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 743,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 633,
            "name": "main",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 636,
            "end": 743,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 648,
              "end": 743,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 654,
                  "end": 693,
                  "test": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 663,
                    "name": "async",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 665,
                    "end": 693,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 675,
                        "end": 687,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 675,
                          "end": 686,
                          "argument": {
                            "type": "Identifier",
                            "start": 681,
                            "end": 686,
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
                  "start": 698,
                  "end": 741,
                  "test": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 709,
                    "name": "async64",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 711,
                    "end": 741,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 721,
                        "end": 735,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 721,
                          "end": 734,
                          "argument": {
                            "type": "Identifier",
                            "start": 727,
                            "end": 734,
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
      "start": 744,
      "end": 751,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 750,
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 748,
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
