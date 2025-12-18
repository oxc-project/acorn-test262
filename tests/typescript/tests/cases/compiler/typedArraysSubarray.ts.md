__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "int8ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 42
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 58
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 59,
                      "end": 61
                    }
                  ],
                  "start": 45,
                  "end": 62
                },
                "definite": false,
                "start": 39,
                "end": 62
              }
            ],
            "declare": false,
            "start": 35,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 80
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 80
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 68,
              "end": 82
            },
            "directive": null,
            "start": 68,
            "end": 83
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 100
                },
                "optional": false,
                "computed": false,
                "start": 88,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 101,
                  "end": 102
                }
              ],
              "optional": false,
              "start": 88,
              "end": 103
            },
            "directive": null,
            "start": 88,
            "end": 104
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 121
                },
                "optional": false,
                "computed": false,
                "start": 109,
                "end": 121
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 122,
                  "end": 123
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 125,
                  "end": 127
                }
              ],
              "optional": false,
              "start": 109,
              "end": 128
            },
            "directive": null,
            "start": 109,
            "end": 129
          }
        ],
        "start": 29,
        "end": 131
      },
      "expression": false,
      "start": 0,
      "end": 131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint8ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 193
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 194,
                      "end": 196
                    }
                  ],
                  "start": 179,
                  "end": 197
                },
                "definite": false,
                "start": 173,
                "end": 197
              }
            ],
            "declare": false,
            "start": 169,
            "end": 198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "optional": false,
                "computed": false,
                "start": 203,
                "end": 215
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 203,
              "end": 217
            },
            "directive": null,
            "start": 203,
            "end": 218
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 226
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 236,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 223,
              "end": 238
            },
            "directive": null,
            "start": 223,
            "end": 239
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 247
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 244,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 257,
                  "end": 258
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 260,
                  "end": 262
                }
              ],
              "optional": false,
              "start": 244,
              "end": 263
            },
            "directive": null,
            "start": 244,
            "end": 264
          }
        ],
        "start": 163,
        "end": 266
      },
      "expression": false,
      "start": 133,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint8ClampedArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 302
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 318
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8ClampedArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 342
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 343,
                      "end": 345
                    }
                  ],
                  "start": 321,
                  "end": 346
                },
                "definite": false,
                "start": 315,
                "end": 346
              }
            ],
            "declare": false,
            "start": 311,
            "end": 347
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 355
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 364
                },
                "optional": false,
                "computed": false,
                "start": 352,
                "end": 364
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 352,
              "end": 366
            },
            "directive": null,
            "start": 352,
            "end": 367
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 375
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 372,
                "end": 384
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 385,
                  "end": 386
                }
              ],
              "optional": false,
              "start": 372,
              "end": 387
            },
            "directive": null,
            "start": 372,
            "end": 388
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 396
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 406,
                  "end": 407
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 409,
                  "end": 411
                }
              ],
              "optional": false,
              "start": 393,
              "end": 412
            },
            "directive": null,
            "start": 393,
            "end": 413
          }
        ],
        "start": 305,
        "end": 415
      },
      "expression": false,
      "start": 268,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "int16ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 444
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 460
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int16Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 477
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 478,
                      "end": 480
                    }
                  ],
                  "start": 463,
                  "end": 481
                },
                "definite": false,
                "start": 457,
                "end": 481
              }
            ],
            "declare": false,
            "start": 453,
            "end": 482
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 490
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 499
                },
                "optional": false,
                "computed": false,
                "start": 487,
                "end": 499
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 487,
              "end": 501
            },
            "directive": null,
            "start": 487,
            "end": 502
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 510
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 519
                },
                "optional": false,
                "computed": false,
                "start": 507,
                "end": 519
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 520,
                  "end": 521
                }
              ],
              "optional": false,
              "start": 507,
              "end": 522
            },
            "directive": null,
            "start": 507,
            "end": 523
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 540
                },
                "optional": false,
                "computed": false,
                "start": 528,
                "end": 540
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 541,
                  "end": 542
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 544,
                  "end": 546
                }
              ],
              "optional": false,
              "start": 528,
              "end": 547
            },
            "directive": null,
            "start": 528,
            "end": 548
          }
        ],
        "start": 447,
        "end": 550
      },
      "expression": false,
      "start": 417,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint16ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 580
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 596
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint16Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 614
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 615,
                      "end": 617
                    }
                  ],
                  "start": 599,
                  "end": 618
                },
                "definite": false,
                "start": 593,
                "end": 618
              }
            ],
            "declare": false,
            "start": 589,
            "end": 619
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 636
                },
                "optional": false,
                "computed": false,
                "start": 624,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 624,
              "end": 638
            },
            "directive": null,
            "start": 624,
            "end": 639
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 647
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 656
                },
                "optional": false,
                "computed": false,
                "start": 644,
                "end": 656
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 657,
                  "end": 658
                }
              ],
              "optional": false,
              "start": 644,
              "end": 659
            },
            "directive": null,
            "start": 644,
            "end": 660
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 668
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 665,
                "end": 677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 678,
                  "end": 679
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 681,
                  "end": 683
                }
              ],
              "optional": false,
              "start": 665,
              "end": 684
            },
            "directive": null,
            "start": 665,
            "end": 685
          }
        ],
        "start": 583,
        "end": 687
      },
      "expression": false,
      "start": 552,
      "end": 687
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "int32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 698,
        "end": 716
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 732
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 749
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 750,
                      "end": 752
                    }
                  ],
                  "start": 735,
                  "end": 753
                },
                "definite": false,
                "start": 729,
                "end": 753
              }
            ],
            "declare": false,
            "start": 725,
            "end": 754
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 762
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 759,
                "end": 771
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 759,
              "end": 773
            },
            "directive": null,
            "start": 759,
            "end": 774
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 782
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 791
                },
                "optional": false,
                "computed": false,
                "start": 779,
                "end": 791
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 792,
                  "end": 793
                }
              ],
              "optional": false,
              "start": 779,
              "end": 794
            },
            "directive": null,
            "start": 779,
            "end": 795
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 803
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 812
                },
                "optional": false,
                "computed": false,
                "start": 800,
                "end": 812
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 813,
                  "end": 814
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 816,
                  "end": 818
                }
              ],
              "optional": false,
              "start": 800,
              "end": 819
            },
            "directive": null,
            "start": 800,
            "end": 820
          }
        ],
        "start": 719,
        "end": 822
      },
      "expression": false,
      "start": 689,
      "end": 822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 852
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 868
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 886
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 887,
                      "end": 889
                    }
                  ],
                  "start": 871,
                  "end": 890
                },
                "definite": false,
                "start": 865,
                "end": 890
              }
            ],
            "declare": false,
            "start": 861,
            "end": 891
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 899
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 908
                },
                "optional": false,
                "computed": false,
                "start": 896,
                "end": 908
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 896,
              "end": 910
            },
            "directive": null,
            "start": 896,
            "end": 911
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 919
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 928
                },
                "optional": false,
                "computed": false,
                "start": 916,
                "end": 928
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 929,
                  "end": 930
                }
              ],
              "optional": false,
              "start": 916,
              "end": 931
            },
            "directive": null,
            "start": 916,
            "end": 932
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 949
                },
                "optional": false,
                "computed": false,
                "start": 937,
                "end": 949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 950,
                  "end": 951
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 953,
                  "end": 955
                }
              ],
              "optional": false,
              "start": 937,
              "end": 956
            },
            "directive": null,
            "start": 937,
            "end": 957
          }
        ],
        "start": 855,
        "end": 959
      },
      "expression": false,
      "start": 824,
      "end": 959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "float32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 990
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1003,
                  "end": 1006
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Float32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1013,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1026,
                      "end": 1028
                    }
                  ],
                  "start": 1009,
                  "end": 1029
                },
                "definite": false,
                "start": 1003,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 999,
            "end": 1030
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1047
                },
                "optional": false,
                "computed": false,
                "start": 1035,
                "end": 1047
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1035,
              "end": 1049
            },
            "directive": null,
            "start": 1035,
            "end": 1050
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1058
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1067
                },
                "optional": false,
                "computed": false,
                "start": 1055,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1068,
                  "end": 1069
                }
              ],
              "optional": false,
              "start": 1055,
              "end": 1070
            },
            "directive": null,
            "start": 1055,
            "end": 1071
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1079
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1088
                },
                "optional": false,
                "computed": false,
                "start": 1076,
                "end": 1088
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1089,
                  "end": 1090
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1092,
                  "end": 1094
                }
              ],
              "optional": false,
              "start": 1076,
              "end": 1095
            },
            "directive": null,
            "start": 1076,
            "end": 1096
          }
        ],
        "start": 993,
        "end": 1098
      },
      "expression": false,
      "start": 961,
      "end": 1098
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "float64ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1129
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1145
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Float64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1152,
                    "end": 1164
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1165,
                      "end": 1167
                    }
                  ],
                  "start": 1148,
                  "end": 1168
                },
                "definite": false,
                "start": 1142,
                "end": 1168
              }
            ],
            "declare": false,
            "start": 1138,
            "end": 1169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1177
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1186
                },
                "optional": false,
                "computed": false,
                "start": 1174,
                "end": 1186
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1174,
              "end": 1188
            },
            "directive": null,
            "start": 1174,
            "end": 1189
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1206
                },
                "optional": false,
                "computed": false,
                "start": 1194,
                "end": 1206
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1207,
                  "end": 1208
                }
              ],
              "optional": false,
              "start": 1194,
              "end": 1209
            },
            "directive": null,
            "start": 1194,
            "end": 1210
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1218
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1227
                },
                "optional": false,
                "computed": false,
                "start": 1215,
                "end": 1227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1228,
                  "end": 1229
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1231,
                  "end": 1233
                }
              ],
              "optional": false,
              "start": 1215,
              "end": 1234
            },
            "directive": null,
            "start": 1215,
            "end": 1235
          }
        ],
        "start": 1132,
        "end": 1237
      },
      "expression": false,
      "start": 1100,
      "end": 1237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1237
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "int8ArraySubarray",
    "start": 9,
    "end": 26,
    "range": [
      9,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 49,
    "end": 58,
    "range": [
      49,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 59,
    "end": 61,
    "range": [
      59,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 72,
    "end": 80,
    "range": [
      72,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 92,
    "end": 100,
    "range": [
      92,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 109,
    "end": 112,
    "range": [
      109,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 133,
    "end": 141,
    "range": [
      133,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "uint8ArraySubarray",
    "start": 142,
    "end": 160,
    "range": [
      142,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 183,
    "end": 193,
    "range": [
      183,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 194,
    "end": 196,
    "range": [
      194,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 203,
    "end": 206,
    "range": [
      203,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 207,
    "end": 215,
    "range": [
      207,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 227,
    "end": 235,
    "range": [
      227,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 244,
    "end": 247,
    "range": [
      244,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 248,
    "end": 256,
    "range": [
      248,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 260,
    "end": 262,
    "range": [
      260,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276,
    "range": [
      268,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArraySubarray",
    "start": 277,
    "end": 302,
    "range": [
      277,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 321,
    "end": 324,
    "range": [
      321,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 325,
    "end": 342,
    "range": [
      325,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 356,
    "end": 364,
    "range": [
      356,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 376,
    "end": 384,
    "range": [
      376,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 393,
    "end": 396,
    "range": [
      393,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 397,
    "end": 405,
    "range": [
      397,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 409,
    "end": 411,
    "range": [
      409,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 417,
    "end": 425,
    "range": [
      417,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "int16ArraySubarray",
    "start": 426,
    "end": 444,
    "range": [
      426,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 463,
    "end": 466,
    "range": [
      463,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 467,
    "end": 477,
    "range": [
      467,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 491,
    "end": 499,
    "range": [
      491,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 511,
    "end": 519,
    "range": [
      511,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 528,
    "end": 531,
    "range": [
      528,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 532,
    "end": 540,
    "range": [
      532,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 544,
    "end": 546,
    "range": [
      544,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 552,
    "end": 560,
    "range": [
      552,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "uint16ArraySubarray",
    "start": 561,
    "end": 580,
    "range": [
      561,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 589,
    "end": 592,
    "range": [
      589,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 593,
    "end": 596,
    "range": [
      593,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 603,
    "end": 614,
    "range": [
      603,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 615,
    "end": 617,
    "range": [
      615,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 624,
    "end": 627,
    "range": [
      624,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 628,
    "end": 636,
    "range": [
      628,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 648,
    "end": 656,
    "range": [
      648,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 665,
    "end": 668,
    "range": [
      665,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 669,
    "end": 677,
    "range": [
      669,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 689,
    "end": 697,
    "range": [
      689,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "int32ArraySubarray",
    "start": 698,
    "end": 716,
    "range": [
      698,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728,
    "range": [
      725,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 739,
    "end": 749,
    "range": [
      739,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 750,
    "end": 752,
    "range": [
      750,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 759,
    "end": 762,
    "range": [
      759,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 763,
    "end": 771,
    "range": [
      763,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 783,
    "end": 791,
    "range": [
      783,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 800,
    "end": 803,
    "range": [
      800,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 804,
    "end": 812,
    "range": [
      804,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 816,
    "end": 818,
    "range": [
      816,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832,
    "range": [
      824,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "uint32ArraySubarray",
    "start": 833,
    "end": 852,
    "range": [
      833,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864,
    "range": [
      861,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 865,
    "end": 868,
    "range": [
      865,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 871,
    "end": 874,
    "range": [
      871,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 875,
    "end": 886,
    "range": [
      875,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 887,
    "end": 889,
    "range": [
      887,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 896,
    "end": 899,
    "range": [
      896,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 900,
    "end": 908,
    "range": [
      900,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 916,
    "end": 919,
    "range": [
      916,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 920,
    "end": 928,
    "range": [
      920,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 937,
    "end": 940,
    "range": [
      937,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 941,
    "end": 949,
    "range": [
      941,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 953,
    "end": 955,
    "range": [
      953,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 961,
    "end": 969,
    "range": [
      961,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "float32ArraySubarray",
    "start": 970,
    "end": 990,
    "range": [
      970,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002,
    "range": [
      999,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1003,
    "end": 1006,
    "range": [
      1003,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1009,
    "end": 1012,
    "range": [
      1009,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 1013,
    "end": 1025,
    "range": [
      1013,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1026,
    "end": 1028,
    "range": [
      1026,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1035,
    "end": 1038,
    "range": [
      1035,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1039,
    "end": 1047,
    "range": [
      1039,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1055,
    "end": 1058,
    "range": [
      1055,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1059,
    "end": 1067,
    "range": [
      1059,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1076,
    "end": 1079,
    "range": [
      1076,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1080,
    "end": 1088,
    "range": [
      1080,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1092,
    "end": 1094,
    "range": [
      1092,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1100,
    "end": 1108,
    "range": [
      1100,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "float64ArraySubarray",
    "start": 1109,
    "end": 1129,
    "range": [
      1109,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1138,
    "end": 1141,
    "range": [
      1138,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1142,
    "end": 1145,
    "range": [
      1142,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1148,
    "end": 1151,
    "range": [
      1148,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 1152,
    "end": 1164,
    "range": [
      1152,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1165,
    "end": 1167,
    "range": [
      1165,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1174,
    "end": 1177,
    "range": [
      1174,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1178,
    "end": 1186,
    "range": [
      1178,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1194,
    "end": 1197,
    "range": [
      1194,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1198,
    "end": 1206,
    "range": [
      1198,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1215,
    "end": 1218,
    "range": [
      1215,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1219,
    "end": 1227,
    "range": [
      1219,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1231,
    "end": 1233,
    "range": [
      1231,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  }
]
```
