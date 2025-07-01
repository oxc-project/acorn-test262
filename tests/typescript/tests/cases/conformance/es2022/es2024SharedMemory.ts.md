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
            "name": "sab",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 222
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 257
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 275
                  },
                  "optional": false,
                  "computed": false,
                  "start": 247,
                  "end": 275
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 278,
                  "end": 282
                },
                "start": 247,
                "end": 282
              }
            ],
            "start": 225,
            "end": 283
          },
          "definite": false,
          "start": 219,
          "end": 283
        }
      ],
      "declare": false,
      "start": 213,
      "end": 284
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "int32",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 296
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 313
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              }
            ],
            "start": 299,
            "end": 318
          },
          "definite": false,
          "start": 291,
          "end": 318
        }
      ],
      "declare": false,
      "start": 285,
      "end": 319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sab64",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 331
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 369
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 356,
                  "end": 387
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 390,
                  "end": 394
                },
                "start": 356,
                "end": 394
              }
            ],
            "start": 334,
            "end": 395
          },
          "definite": false,
          "start": 326,
          "end": 395
        }
      ],
      "declare": false,
      "start": 320,
      "end": 396
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "int64",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 408
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 428
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab64",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 434
              }
            ],
            "start": 411,
            "end": 435
          },
          "definite": false,
          "start": 403,
          "end": 435
        }
      ],
      "declare": false,
      "start": 397,
      "end": 436
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "waitValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 452
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "wait",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 467
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 473
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 475,
                "end": 476
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 478,
                "end": 479
              }
            ],
            "optional": false,
            "start": 455,
            "end": 480
          },
          "definite": false,
          "start": 443,
          "end": 480
        }
      ],
      "declare": false,
      "start": 437,
      "end": 481
    },
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
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 495
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 495
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 490,
                "end": 495
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 502
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 502
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 497,
                "end": 502
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 504
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 524
              },
              "optional": false,
              "computed": false,
              "start": 507,
              "end": 524
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 530
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 532,
                "end": 533
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 535,
                "end": 536
              }
            ],
            "optional": false,
            "start": 507,
            "end": 537
          },
          "definite": false,
          "start": 488,
          "end": 537
        }
      ],
      "declare": false,
      "start": 482,
      "end": 538
    },
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
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 552
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 547,
                "end": 561
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 568
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 577
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 563,
                "end": 577
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 582,
              "end": 599
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int64",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 605
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 607,
                "end": 608
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 616
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 617,
                    "end": 618
                  }
                ],
                "optional": false,
                "start": 610,
                "end": 619
              }
            ],
            "optional": false,
            "start": 582,
            "end": 620
          },
          "definite": false,
          "start": 545,
          "end": 620
        }
      ],
      "declare": false,
      "start": 539,
      "end": 621
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "main",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 633
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 663
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 686
                          },
                          "start": 675,
                          "end": 686
                        },
                        "directive": null,
                        "start": 675,
                        "end": 687
                      }
                    ],
                    "start": 665,
                    "end": 693
                  },
                  "alternate": null,
                  "start": 654,
                  "end": 693
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async64",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 709
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value64",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 727,
                            "end": 734
                          },
                          "start": 721,
                          "end": 734
                        },
                        "directive": null,
                        "start": 721,
                        "end": 735
                      }
                    ],
                    "start": 711,
                    "end": 741
                  },
                  "alternate": null,
                  "start": 698,
                  "end": 741
                }
              ],
              "start": 648,
              "end": 743
            },
            "id": null,
            "generator": false,
            "start": 636,
            "end": 743
          },
          "definite": false,
          "start": 629,
          "end": 743
        }
      ],
      "declare": false,
      "start": 623,
      "end": 743
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 748
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 744,
        "end": 750
      },
      "directive": null,
      "start": 744,
      "end": 751
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 213,
  "end": 751
}
```
