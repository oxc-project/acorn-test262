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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 56,
        "decorators": [],
        "name": "somePredicate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 157,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 106,
        "end": 157,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 110,
            "end": 156,
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
              "callee": {
                "type": "MemberExpression",
                "start": 123,
                "end": 142,
                "object": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 142,
                  "decorators": [],
                  "name": "findLastIndex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 143,
                  "end": 155,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BinaryExpression",
                    "start": 148,
                    "end": 155,
                    "left": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
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
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 217,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 217,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 169,
            "end": 216,
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
              "callee": {
                "type": "MemberExpression",
                "start": 182,
                "end": 201,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 187,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 201,
                  "decorators": [],
                  "name": "findLastIndex",
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
                  "start": 202,
                  "end": 215,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 268,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 268,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 230,
            "end": 267,
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
              "callee": {
                "type": "MemberExpression",
                "start": 238,
                "end": 252,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 243,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "findLast",
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
                  "start": 253,
                  "end": 266,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 269,
      "end": 318,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 276,
        "end": 318,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 280,
            "end": 317,
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
              "callee": {
                "type": "MemberExpression",
                "start": 288,
                "end": 302,
                "object": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 293,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "decorators": [],
                  "name": "findLast",
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
                  "start": 303,
                  "end": 316,
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 320,
      "end": 357,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 327,
        "end": 357,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 331,
            "end": 356,
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
              "callee": {
                "type": "MemberExpression",
                "start": 340,
                "end": 354,
                "object": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 345,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 354,
                  "decorators": [],
                  "name": "toSorted",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 400,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 366,
        "end": 400,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 370,
            "end": 399,
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
              "callee": {
                "type": "MemberExpression",
                "start": 381,
                "end": 396,
                "object": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 386,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 396,
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 397,
                  "end": 398,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 401,
      "end": 445,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 408,
        "end": 445,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 412,
            "end": 444,
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
              "callee": {
                "type": "MemberExpression",
                "start": 423,
                "end": 438,
                "object": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 438,
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 446,
      "end": 502,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 453,
        "end": 502,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 457,
            "end": 501,
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
              "callee": {
                "type": "MemberExpression",
                "start": 468,
                "end": 483,
                "object": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 473,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 503,
      "end": 555,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 510,
        "end": 555,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 514,
            "end": 554,
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
              "callee": {
                "type": "MemberExpression",
                "start": 525,
                "end": 540,
                "object": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 530,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 540,
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 556,
      "end": 620,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 563,
        "end": 620,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 567,
            "end": 619,
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
              "callee": {
                "type": "MemberExpression",
                "start": 578,
                "end": 593,
                "object": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 583,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 593,
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 622,
      "end": 666,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 629,
        "end": 666,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 633,
            "end": 665,
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
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 659,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 654,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 659,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 667,
      "end": 707,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 674,
        "end": 707,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 678,
            "end": 706,
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
              "callee": {
                "type": "MemberExpression",
                "start": 689,
                "end": 699,
                "object": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 694,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 699,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "start": 700,
                  "end": 702,
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "start": 701,
                    "end": 702,
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                },
                {
                  "type": "Literal",
                  "start": 704,
                  "end": 705,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
