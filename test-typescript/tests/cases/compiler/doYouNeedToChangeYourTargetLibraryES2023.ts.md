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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 26,
                  "end": 27,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "value": 4,
                  "raw": "4"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 56,
        "name": "somePredicate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 63,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 63,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 4,
                "raw": "4"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 73,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 66,
          "end": 73
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 157,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 106,
        "end": 157,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 110,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 120,
              "name": "lastIndex1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 123,
              "end": 156,
              "callee": {
                "type": "MemberExpression",
                "start": 123,
                "end": 142,
                "object": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 142,
                  "name": "findLastIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 143,
                  "end": 155,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 148,
                    "end": 155,
                    "left": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 154,
                      "end": 155,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 217,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 169,
            "end": 216,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 179,
              "name": "lastIndex2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 182,
              "end": 216,
              "callee": {
                "type": "MemberExpression",
                "start": 182,
                "end": 201,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 201,
                  "name": "findLastIndex",
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
                  "start": 202,
                  "end": 215,
                  "name": "somePredicate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 268,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 268,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 230,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 230,
              "end": 235,
              "name": "last1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 238,
              "end": 267,
              "callee": {
                "type": "MemberExpression",
                "start": 238,
                "end": 252,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 243,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "name": "findLast",
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
                  "start": 253,
                  "end": 266,
                  "name": "somePredicate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 269,
      "end": 318,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 276,
        "end": 318,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 280,
            "end": 317,
            "id": {
              "type": "Identifier",
              "start": 280,
              "end": 285,
              "name": "last2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 288,
              "end": 317,
              "callee": {
                "type": "MemberExpression",
                "start": 288,
                "end": 302,
                "object": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 293,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "name": "findLast",
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
                  "start": 303,
                  "end": 316,
                  "name": "somePredicate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 320,
      "end": 357,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 327,
        "end": 357,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 331,
            "end": 356,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 337,
              "name": "sorted",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 340,
              "end": 356,
              "callee": {
                "type": "MemberExpression",
                "start": 340,
                "end": 354,
                "object": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 345,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 354,
                  "name": "toSorted",
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
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 400,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 366,
        "end": 400,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 370,
            "end": 399,
            "id": {
              "type": "Identifier",
              "start": 370,
              "end": 378,
              "name": "spliced1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 381,
              "end": 399,
              "callee": {
                "type": "MemberExpression",
                "start": 381,
                "end": 396,
                "object": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 386,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 396,
                  "name": "toSpliced",
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
                  "start": 397,
                  "end": 398,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 401,
      "end": 445,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 408,
        "end": 445,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 412,
            "end": 444,
            "id": {
              "type": "Identifier",
              "start": 412,
              "end": 420,
              "name": "spliced2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 423,
              "end": 444,
              "callee": {
                "type": "MemberExpression",
                "start": 423,
                "end": 438,
                "object": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 438,
                  "name": "toSpliced",
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
                  "start": 439,
                  "end": 440,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 442,
                  "end": 443,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 446,
      "end": 502,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 453,
        "end": 502,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 457,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 457,
              "end": 465,
              "name": "spliced3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 468,
              "end": 501,
              "callee": {
                "type": "MemberExpression",
                "start": 468,
                "end": 483,
                "object": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "name": "toSpliced",
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
                  "start": 484,
                  "end": 485,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 487,
                  "end": 488,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 490,
                  "end": 491,
                  "value": 4,
                  "raw": "4"
                },
                {
                  "type": "Literal",
                  "start": 493,
                  "end": 494,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 496,
                  "end": 497,
                  "value": 6,
                  "raw": "6"
                },
                {
                  "type": "Literal",
                  "start": 499,
                  "end": 500,
                  "value": 7,
                  "raw": "7"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 503,
      "end": 555,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 510,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 514,
            "end": 554,
            "id": {
              "type": "Identifier",
              "start": 514,
              "end": 522,
              "name": "spliced4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 525,
              "end": 554,
              "callee": {
                "type": "MemberExpression",
                "start": 525,
                "end": 540,
                "object": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 530,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 540,
                  "name": "toSpliced",
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
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Identifier",
                  "start": 544,
                  "end": 553,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 556,
      "end": 620,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 563,
        "end": 620,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 567,
            "end": 619,
            "id": {
              "type": "Identifier",
              "start": 567,
              "end": 575,
              "name": "spliced5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 578,
              "end": 619,
              "callee": {
                "type": "MemberExpression",
                "start": 578,
                "end": 593,
                "object": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 583,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 593,
                  "name": "toSpliced",
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
                  "start": 594,
                  "end": 595,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Identifier",
                  "start": 597,
                  "end": 606,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 608,
                  "end": 609,
                  "value": 4,
                  "raw": "4"
                },
                {
                  "type": "Literal",
                  "start": 611,
                  "end": 612,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 614,
                  "end": 615,
                  "value": 6,
                  "raw": "6"
                },
                {
                  "type": "Literal",
                  "start": 617,
                  "end": 618,
                  "value": 7,
                  "raw": "7"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 622,
      "end": 666,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 629,
        "end": 666,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 633,
            "end": 665,
            "id": {
              "type": "Identifier",
              "start": 633,
              "end": 646,
              "name": "startsWithOne",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 649,
              "end": 665,
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 659,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 654,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 659,
                  "name": "with",
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
                  "start": 660,
                  "end": 661,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 663,
                  "end": 664,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 667,
      "end": 707,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 674,
        "end": 707,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 678,
            "end": 706,
            "id": {
              "type": "Identifier",
              "start": 678,
              "end": 686,
              "name": "inTheEnd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 689,
              "end": 706,
              "callee": {
                "type": "MemberExpression",
                "start": 689,
                "end": 699,
                "object": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 694,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 699,
                  "name": "with",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "start": 700,
                  "end": 702,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 701,
                    "end": 702,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "Literal",
                  "start": 704,
                  "end": 705,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
