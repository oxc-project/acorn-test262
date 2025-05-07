__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 707,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 19,
              "end": 31,
              "elements": [
                {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 26,
                  "end": 27,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 80,
            "end": 95,
            "argument": {
              "type": "BinaryExpression",
              "start": 87,
              "end": 94,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 56,
        "decorators": [],
        "name": "somePredicate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 63,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 63,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 73,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 66,
          "end": 73
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 106,
        "end": 157,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 110,
            "end": 156,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 120,
              "decorators": [],
              "name": "lastIndex1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 123,
              "end": 156,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 143,
                  "end": 155,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 148,
                    "end": 155,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 154,
                      "end": 155,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 123,
                "end": 142,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 142,
                  "decorators": [],
                  "name": "findLastIndex",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 217,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 169,
            "end": 216,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 179,
              "decorators": [],
              "name": "lastIndex2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 182,
              "end": 216,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 215,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 182,
                "end": 201,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 201,
                  "decorators": [],
                  "name": "findLastIndex",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 268,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 226,
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
              "end": 235,
              "decorators": [],
              "name": "last1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 238,
              "end": 267,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 253,
                  "end": 266,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 238,
                "end": 252,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 243,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "findLast",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 269,
      "end": 318,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 276,
        "end": 318,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 280,
            "end": 317,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 280,
              "end": 285,
              "decorators": [],
              "name": "last2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 288,
              "end": 317,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 316,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 288,
                "end": 302,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 293,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "decorators": [],
                  "name": "findLast",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 320,
      "end": 357,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 327,
        "end": 357,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 331,
            "end": 356,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 337,
              "decorators": [],
              "name": "sorted",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 340,
              "end": 356,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 340,
                "end": 354,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 345,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 354,
                  "decorators": [],
                  "name": "toSorted",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 400,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 366,
        "end": 400,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 370,
            "end": 399,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 370,
              "end": 378,
              "decorators": [],
              "name": "spliced1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 381,
              "end": 399,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 397,
                  "end": 398,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 381,
                "end": 396,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 386,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 396,
                  "decorators": [],
                  "name": "toSpliced",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 401,
      "end": 445,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 408,
        "end": 445,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 412,
            "end": 444,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 412,
              "end": 420,
              "decorators": [],
              "name": "spliced2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 423,
              "end": 444,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 439,
                  "end": 440,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 442,
                  "end": 443,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 423,
                "end": 438,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 438,
                  "decorators": [],
                  "name": "toSpliced",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 446,
      "end": 502,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 453,
        "end": 502,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 457,
            "end": 501,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 457,
              "end": 465,
              "decorators": [],
              "name": "spliced3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 468,
              "end": 501,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 484,
                  "end": 485,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 487,
                  "end": 488,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 490,
                  "end": 491,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 493,
                  "end": 494,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 496,
                  "end": 497,
                  "raw": "6",
                  "value": 6,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 499,
                  "end": 500,
                  "raw": "7",
                  "value": 7,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 468,
                "end": 483,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "decorators": [],
                  "name": "toSpliced",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 503,
      "end": 555,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 510,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 514,
            "end": 554,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 514,
              "end": 522,
              "decorators": [],
              "name": "spliced4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 525,
              "end": 554,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 541,
                  "end": 542,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Identifier",
                  "start": 544,
                  "end": 553,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 525,
                "end": 540,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 530,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 540,
                  "decorators": [],
                  "name": "toSpliced",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 556,
      "end": 620,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 563,
        "end": 620,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 567,
            "end": 619,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 567,
              "end": 575,
              "decorators": [],
              "name": "spliced5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 578,
              "end": 619,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 594,
                  "end": 595,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Identifier",
                  "start": 597,
                  "end": 606,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 608,
                  "end": 609,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 611,
                  "end": 612,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 614,
                  "end": 615,
                  "raw": "6",
                  "value": 6,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 617,
                  "end": 618,
                  "raw": "7",
                  "value": 7,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 578,
                "end": 593,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 583,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 593,
                  "decorators": [],
                  "name": "toSpliced",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 622,
      "end": 666,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 629,
        "end": 666,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 633,
            "end": 665,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 633,
              "end": 646,
              "decorators": [],
              "name": "startsWithOne",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 649,
              "end": 665,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 660,
                  "end": 661,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 663,
                  "end": 664,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 659,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 654,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 659,
                  "decorators": [],
                  "name": "with",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 667,
      "end": 707,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 674,
        "end": 707,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 678,
            "end": 706,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 678,
              "end": 686,
              "decorators": [],
              "name": "inTheEnd",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 689,
              "end": 706,
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "start": 700,
                  "end": 702,
                  "argument": {
                    "type": "Literal",
                    "start": 701,
                    "end": 702,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                },
                {
                  "type": "Literal",
                  "start": 704,
                  "end": 705,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 689,
                "end": 699,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 694,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 699,
                  "decorators": [],
                  "name": "with",
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
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
