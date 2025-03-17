__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1238,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 26,
        "name": "int8ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 131,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 45,
                  "end": 62,
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 58,
                    "name": "Int8Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 59,
                      "end": 61,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 83,
            "expression": {
              "type": "CallExpression",
              "start": 68,
              "end": 82,
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 80,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 71,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 80,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 88,
            "end": 104,
            "expression": {
              "type": "CallExpression",
              "start": 88,
              "end": 103,
              "callee": {
                "type": "MemberExpression",
                "start": 88,
                "end": 100,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 100,
                  "name": "subarray",
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
                  "start": 101,
                  "end": 102,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 129,
            "expression": {
              "type": "CallExpression",
              "start": 109,
              "end": 128,
              "callee": {
                "type": "MemberExpression",
                "start": 109,
                "end": 121,
                "object": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 112,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 121,
                  "name": "subarray",
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
                  "start": 122,
                  "end": 123,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 125,
                  "end": 127,
                  "value": 10,
                  "raw": "10"
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
      "start": 133,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 160,
        "name": "uint8ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 266,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 198,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 197,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 179,
                  "end": 197,
                  "callee": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 193,
                    "name": "Uint8Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 194,
                      "end": 196,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 218,
            "expression": {
              "type": "CallExpression",
              "start": 203,
              "end": 217,
              "callee": {
                "type": "MemberExpression",
                "start": 203,
                "end": 215,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 223,
            "end": 239,
            "expression": {
              "type": "CallExpression",
              "start": 223,
              "end": 238,
              "callee": {
                "type": "MemberExpression",
                "start": 223,
                "end": 235,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 226,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 235,
                  "name": "subarray",
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
                  "start": 236,
                  "end": 237,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 244,
            "end": 264,
            "expression": {
              "type": "CallExpression",
              "start": 244,
              "end": 263,
              "callee": {
                "type": "MemberExpression",
                "start": 244,
                "end": 256,
                "object": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 247,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 256,
                  "name": "subarray",
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
                  "start": 257,
                  "end": 258,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 260,
                  "end": 262,
                  "value": 10,
                  "raw": "10"
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
      "start": 268,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 302,
        "name": "uint8ClampedArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 415,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 311,
            "end": 347,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 315,
                "end": 346,
                "id": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 318,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 321,
                  "end": 346,
                  "callee": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 342,
                    "name": "Uint8ClampedArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 343,
                      "end": 345,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 352,
            "end": 367,
            "expression": {
              "type": "CallExpression",
              "start": 352,
              "end": 366,
              "callee": {
                "type": "MemberExpression",
                "start": 352,
                "end": 364,
                "object": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 364,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 388,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 387,
              "callee": {
                "type": "MemberExpression",
                "start": 372,
                "end": 384,
                "object": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 384,
                  "name": "subarray",
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
                  "start": 385,
                  "end": 386,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 413,
            "expression": {
              "type": "CallExpression",
              "start": 393,
              "end": 412,
              "callee": {
                "type": "MemberExpression",
                "start": 393,
                "end": 405,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 396,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 405,
                  "name": "subarray",
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
                  "start": 406,
                  "end": 407,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 409,
                  "end": 411,
                  "value": 10,
                  "raw": "10"
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
      "start": 417,
      "end": 550,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 444,
        "name": "int16ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 550,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 453,
            "end": 482,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 457,
                "end": 481,
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 460,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 463,
                  "end": 481,
                  "callee": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 477,
                    "name": "Int16Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 478,
                      "end": 480,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 502,
            "expression": {
              "type": "CallExpression",
              "start": 487,
              "end": 501,
              "callee": {
                "type": "MemberExpression",
                "start": 487,
                "end": 499,
                "object": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 490,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 499,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 507,
            "end": 523,
            "expression": {
              "type": "CallExpression",
              "start": 507,
              "end": 522,
              "callee": {
                "type": "MemberExpression",
                "start": 507,
                "end": 519,
                "object": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 510,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 519,
                  "name": "subarray",
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
                  "start": 520,
                  "end": 521,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 548,
            "expression": {
              "type": "CallExpression",
              "start": 528,
              "end": 547,
              "callee": {
                "type": "MemberExpression",
                "start": 528,
                "end": 540,
                "object": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 531,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 540,
                  "name": "subarray",
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
                  "start": 541,
                  "end": 542,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 544,
                  "end": 546,
                  "value": 10,
                  "raw": "10"
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
      "start": 552,
      "end": 687,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 580,
        "name": "uint16ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 583,
        "end": 687,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 589,
            "end": 619,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 593,
                "end": 618,
                "id": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 599,
                  "end": 618,
                  "callee": {
                    "type": "Identifier",
                    "start": 603,
                    "end": 614,
                    "name": "Uint16Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 615,
                      "end": 617,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 624,
            "end": 639,
            "expression": {
              "type": "CallExpression",
              "start": 624,
              "end": 638,
              "callee": {
                "type": "MemberExpression",
                "start": 624,
                "end": 636,
                "object": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 627,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 636,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 660,
            "expression": {
              "type": "CallExpression",
              "start": 644,
              "end": 659,
              "callee": {
                "type": "MemberExpression",
                "start": 644,
                "end": 656,
                "object": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 647,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 656,
                  "name": "subarray",
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
                  "start": 657,
                  "end": 658,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 665,
            "end": 685,
            "expression": {
              "type": "CallExpression",
              "start": 665,
              "end": 684,
              "callee": {
                "type": "MemberExpression",
                "start": 665,
                "end": 677,
                "object": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 668,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 677,
                  "name": "subarray",
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
                  "start": 678,
                  "end": 679,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 681,
                  "end": 683,
                  "value": 10,
                  "raw": "10"
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
      "start": 689,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 698,
        "end": 716,
        "name": "int32ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 719,
        "end": 822,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 725,
            "end": 754,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 729,
                "end": 753,
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 732,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 735,
                  "end": 753,
                  "callee": {
                    "type": "Identifier",
                    "start": 739,
                    "end": 749,
                    "name": "Int32Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 750,
                      "end": 752,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 774,
            "expression": {
              "type": "CallExpression",
              "start": 759,
              "end": 773,
              "callee": {
                "type": "MemberExpression",
                "start": 759,
                "end": 771,
                "object": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 762,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 771,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 779,
            "end": 795,
            "expression": {
              "type": "CallExpression",
              "start": 779,
              "end": 794,
              "callee": {
                "type": "MemberExpression",
                "start": 779,
                "end": 791,
                "object": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 782,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 791,
                  "name": "subarray",
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
                  "start": 792,
                  "end": 793,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 800,
            "end": 820,
            "expression": {
              "type": "CallExpression",
              "start": 800,
              "end": 819,
              "callee": {
                "type": "MemberExpression",
                "start": 800,
                "end": 812,
                "object": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 803,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 812,
                  "name": "subarray",
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
                  "start": 813,
                  "end": 814,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 816,
                  "end": 818,
                  "value": 10,
                  "raw": "10"
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
      "start": 824,
      "end": 959,
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 852,
        "name": "uint32ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 855,
        "end": 959,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 861,
            "end": 891,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 865,
                "end": 890,
                "id": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 868,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 871,
                  "end": 890,
                  "callee": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 886,
                    "name": "Uint32Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 887,
                      "end": 889,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 896,
            "end": 911,
            "expression": {
              "type": "CallExpression",
              "start": 896,
              "end": 910,
              "callee": {
                "type": "MemberExpression",
                "start": 896,
                "end": 908,
                "object": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 899,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 908,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 916,
            "end": 932,
            "expression": {
              "type": "CallExpression",
              "start": 916,
              "end": 931,
              "callee": {
                "type": "MemberExpression",
                "start": 916,
                "end": 928,
                "object": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 919,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 928,
                  "name": "subarray",
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
                  "start": 929,
                  "end": 930,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 937,
            "end": 957,
            "expression": {
              "type": "CallExpression",
              "start": 937,
              "end": 956,
              "callee": {
                "type": "MemberExpression",
                "start": 937,
                "end": 949,
                "object": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 940,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 949,
                  "name": "subarray",
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
                  "start": 950,
                  "end": 951,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 953,
                  "end": 955,
                  "value": 10,
                  "raw": "10"
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
      "start": 961,
      "end": 1098,
      "id": {
        "type": "Identifier",
        "start": 970,
        "end": 990,
        "name": "float32ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 993,
        "end": 1098,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 999,
            "end": 1030,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1003,
                "end": 1029,
                "id": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1006,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1009,
                  "end": 1029,
                  "callee": {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1025,
                    "name": "Float32Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1026,
                      "end": 1028,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1035,
            "end": 1050,
            "expression": {
              "type": "CallExpression",
              "start": 1035,
              "end": 1049,
              "callee": {
                "type": "MemberExpression",
                "start": 1035,
                "end": 1047,
                "object": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1038,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1047,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1071,
            "expression": {
              "type": "CallExpression",
              "start": 1055,
              "end": 1070,
              "callee": {
                "type": "MemberExpression",
                "start": 1055,
                "end": 1067,
                "object": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1058,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1067,
                  "name": "subarray",
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
                  "start": 1068,
                  "end": 1069,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1096,
            "expression": {
              "type": "CallExpression",
              "start": 1076,
              "end": 1095,
              "callee": {
                "type": "MemberExpression",
                "start": 1076,
                "end": 1088,
                "object": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1079,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1088,
                  "name": "subarray",
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
                  "start": 1089,
                  "end": 1090,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 1092,
                  "end": 1094,
                  "value": 10,
                  "raw": "10"
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
      "start": 1100,
      "end": 1237,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1129,
        "name": "float64ArraySubarray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1132,
        "end": 1237,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1138,
            "end": 1169,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1142,
                "end": 1168,
                "id": {
                  "type": "Identifier",
                  "start": 1142,
                  "end": 1145,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1148,
                  "end": 1168,
                  "callee": {
                    "type": "Identifier",
                    "start": 1152,
                    "end": 1164,
                    "name": "Float64Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1165,
                      "end": 1167,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1174,
            "end": 1189,
            "expression": {
              "type": "CallExpression",
              "start": 1174,
              "end": 1188,
              "callee": {
                "type": "MemberExpression",
                "start": 1174,
                "end": 1186,
                "object": {
                  "type": "Identifier",
                  "start": 1174,
                  "end": 1177,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1186,
                  "name": "subarray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1194,
            "end": 1210,
            "expression": {
              "type": "CallExpression",
              "start": 1194,
              "end": 1209,
              "callee": {
                "type": "MemberExpression",
                "start": 1194,
                "end": 1206,
                "object": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1197,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1198,
                  "end": 1206,
                  "name": "subarray",
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
                  "start": 1207,
                  "end": 1208,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1215,
            "end": 1235,
            "expression": {
              "type": "CallExpression",
              "start": 1215,
              "end": 1234,
              "callee": {
                "type": "MemberExpression",
                "start": 1215,
                "end": 1227,
                "object": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1218,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1227,
                  "name": "subarray",
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
                  "start": 1228,
                  "end": 1229,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 1231,
                  "end": 1233,
                  "value": 10,
                  "raw": "10"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
