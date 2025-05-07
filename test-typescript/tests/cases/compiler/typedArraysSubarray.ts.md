__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 131,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 45,
                  "end": 62,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 59,
                      "end": 61,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 58,
                    "decorators": [],
                    "name": "Int8Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 83,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 68,
              "end": 82,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 80,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 71,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 80,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 88,
            "end": 104,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 88,
              "end": 103,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 88,
                "end": 100,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 100,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 109,
            "end": 129,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 109,
              "end": 128,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 122,
                  "end": 123,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 125,
                  "end": 127,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 109,
                "end": 121,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 112,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 121,
                  "decorators": [],
                  "name": "subarray",
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
        "end": 26,
        "decorators": [],
        "name": "int8ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 266,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 179,
                  "end": 197,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 194,
                      "end": 196,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 193,
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 218,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 203,
              "end": 217,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 203,
                "end": 215,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 215,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 223,
            "end": 239,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 223,
              "end": 238,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 236,
                  "end": 237,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 223,
                "end": 235,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 226,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 235,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 244,
            "end": 264,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 244,
              "end": 263,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 257,
                  "end": 258,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 260,
                  "end": 262,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 244,
                "end": 256,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 247,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 256,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 142,
        "end": 160,
        "decorators": [],
        "name": "uint8ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 415,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 318,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 321,
                  "end": 346,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 343,
                      "end": 345,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 342,
                    "decorators": [],
                    "name": "Uint8ClampedArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 352,
            "end": 367,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 352,
              "end": 366,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 352,
                "end": 364,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 364,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 388,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 387,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 385,
                  "end": 386,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 372,
                "end": 384,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 384,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 393,
            "end": 413,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 393,
              "end": 412,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 406,
                  "end": 407,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 409,
                  "end": 411,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 393,
                "end": 405,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 396,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 405,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 277,
        "end": 302,
        "decorators": [],
        "name": "uint8ClampedArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 417,
      "end": 550,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 460,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 463,
                  "end": 481,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 478,
                      "end": 480,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 477,
                    "decorators": [],
                    "name": "Int16Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 502,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 487,
              "end": 501,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 487,
                "end": 499,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 490,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 499,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 507,
            "end": 523,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 507,
              "end": 522,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 520,
                  "end": 521,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 507,
                "end": 519,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 510,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 519,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 528,
            "end": 548,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 528,
              "end": 547,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 541,
                  "end": 542,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 544,
                  "end": 546,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 528,
                "end": 540,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 531,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 540,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 426,
        "end": 444,
        "decorators": [],
        "name": "int16ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 552,
      "end": 687,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 599,
                  "end": 618,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 615,
                      "end": 617,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 603,
                    "end": 614,
                    "decorators": [],
                    "name": "Uint16Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 624,
            "end": 639,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 624,
              "end": 638,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 624,
                "end": 636,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 627,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 636,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 660,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 644,
              "end": 659,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 657,
                  "end": 658,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 644,
                "end": 656,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 647,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 656,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 665,
            "end": 685,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 665,
              "end": 684,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 678,
                  "end": 679,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 681,
                  "end": 683,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 665,
                "end": 677,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 668,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 677,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 561,
        "end": 580,
        "decorators": [],
        "name": "uint16ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 689,
      "end": 822,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 732,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 735,
                  "end": 753,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 750,
                      "end": 752,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 739,
                    "end": 749,
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
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 774,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 759,
              "end": 773,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 759,
                "end": 771,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 762,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 771,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 779,
            "end": 795,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 779,
              "end": 794,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 792,
                  "end": 793,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 779,
                "end": 791,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 782,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 791,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 800,
            "end": 820,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 800,
              "end": 819,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 813,
                  "end": 814,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 816,
                  "end": 818,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 800,
                "end": 812,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 803,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 812,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 698,
        "end": 716,
        "decorators": [],
        "name": "int32ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 824,
      "end": 959,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 868,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 871,
                  "end": 890,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 887,
                      "end": 889,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 886,
                    "decorators": [],
                    "name": "Uint32Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 896,
            "end": 911,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 896,
              "end": 910,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 896,
                "end": 908,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 899,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 908,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 916,
            "end": 932,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 916,
              "end": 931,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 929,
                  "end": 930,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 916,
                "end": 928,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 919,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 920,
                  "end": 928,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 937,
            "end": 957,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 937,
              "end": 956,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 950,
                  "end": 951,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 953,
                  "end": 955,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 937,
                "end": 949,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 940,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 949,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 833,
        "end": 852,
        "decorators": [],
        "name": "uint32ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 961,
      "end": 1098,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1006,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1009,
                  "end": 1029,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1026,
                      "end": 1028,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1025,
                    "decorators": [],
                    "name": "Float32Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 1035,
            "end": 1050,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1035,
              "end": 1049,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1035,
                "end": 1047,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1038,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1047,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1071,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1055,
              "end": 1070,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1068,
                  "end": 1069,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1055,
                "end": 1067,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1058,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1067,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1076,
            "end": 1096,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1076,
              "end": 1095,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1089,
                  "end": 1090,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1092,
                  "end": 1094,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1076,
                "end": 1088,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1079,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1088,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 970,
        "end": 990,
        "decorators": [],
        "name": "float32ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1100,
      "end": 1237,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1142,
                  "end": 1145,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1148,
                  "end": 1168,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1165,
                      "end": 1167,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1152,
                    "end": 1164,
                    "decorators": [],
                    "name": "Float64Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 1174,
            "end": 1189,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1174,
              "end": 1188,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1174,
                "end": 1186,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1174,
                  "end": 1177,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1186,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1194,
            "end": 1210,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1194,
              "end": 1209,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1207,
                  "end": 1208,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1194,
                "end": 1206,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1197,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1198,
                  "end": 1206,
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1215,
            "end": 1235,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1215,
              "end": 1234,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1228,
                  "end": 1229,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 1231,
                  "end": 1233,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1215,
                "end": 1227,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1218,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1227,
                  "decorators": [],
                  "name": "subarray",
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
        "start": 1109,
        "end": 1129,
        "decorators": [],
        "name": "float64ArraySubarray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
