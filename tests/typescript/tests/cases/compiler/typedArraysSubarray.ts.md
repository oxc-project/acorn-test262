__ESTREE_TEST__:PASS:
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
