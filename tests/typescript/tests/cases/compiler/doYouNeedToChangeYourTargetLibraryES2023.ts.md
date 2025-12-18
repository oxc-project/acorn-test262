__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 16
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 20,
                  "end": 21
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 23,
                  "end": 24
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 26,
                  "end": 27
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 19,
              "end": 31
            },
            "definite": false,
            "start": 11,
            "end": 31
          }
        ],
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "somePredicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 56
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            },
            "start": 58,
            "end": 63
          },
          "start": 57,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 66,
          "end": 73
        },
        "start": 64,
        "end": 73
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 93,
                "end": 94
              },
              "start": 87,
              "end": 94
            },
            "start": 80,
            "end": 95
          }
        ],
        "start": 74,
        "end": 97
      },
      "expression": false,
      "start": 34,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastIndex1",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 120
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 128
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLastIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 142
                },
                "optional": false,
                "computed": false,
                "start": 123,
                "end": 142
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 154,
                      "end": 155
                    },
                    "start": 148,
                    "end": 155
                  },
                  "id": null,
                  "generator": false,
                  "start": 143,
                  "end": 155
                }
              ],
              "optional": false,
              "start": 123,
              "end": 156
            },
            "definite": false,
            "start": 110,
            "end": 156
          }
        ],
        "declare": false,
        "start": 106,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 99,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lastIndex2",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 179
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 187
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLastIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 182,
                "end": 201
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 215
                }
              ],
              "optional": false,
              "start": 182,
              "end": 216
            },
            "definite": false,
            "start": 169,
            "end": 216
          }
        ],
        "declare": false,
        "start": 165,
        "end": 217
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 217
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "last1",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 235
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 243
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLast",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 252
                },
                "optional": false,
                "computed": false,
                "start": 238,
                "end": 252
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 266
                }
              ],
              "optional": false,
              "start": 238,
              "end": 267
            },
            "definite": false,
            "start": 230,
            "end": 267
          }
        ],
        "declare": false,
        "start": 226,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 219,
      "end": 268
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "last2",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 285
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 293
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLast",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 302
                },
                "optional": false,
                "computed": false,
                "start": 288,
                "end": 302
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 316
                }
              ],
              "optional": false,
              "start": 288,
              "end": 317
            },
            "definite": false,
            "start": 280,
            "end": 317
          }
        ],
        "declare": false,
        "start": 276,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 269,
      "end": 318
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "sorted",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 337
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 345
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSorted",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 354
                },
                "optional": false,
                "computed": false,
                "start": 340,
                "end": 354
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 340,
              "end": 356
            },
            "definite": false,
            "start": 331,
            "end": 356
          }
        ],
        "declare": false,
        "start": 327,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 320,
      "end": 357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spliced1",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 378
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 386
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 396
                },
                "optional": false,
                "computed": false,
                "start": 381,
                "end": 396
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 397,
                  "end": 398
                }
              ],
              "optional": false,
              "start": 381,
              "end": 399
            },
            "definite": false,
            "start": 370,
            "end": 399
          }
        ],
        "declare": false,
        "start": 366,
        "end": 400
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 359,
      "end": 400
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spliced2",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 420
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 428
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 438
                },
                "optional": false,
                "computed": false,
                "start": 423,
                "end": 438
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 439,
                  "end": 440
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 442,
                  "end": 443
                }
              ],
              "optional": false,
              "start": 423,
              "end": 444
            },
            "definite": false,
            "start": 412,
            "end": 444
          }
        ],
        "declare": false,
        "start": 408,
        "end": 445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 401,
      "end": 445
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spliced3",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 465
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 473
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 483
                },
                "optional": false,
                "computed": false,
                "start": 468,
                "end": 483
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 484,
                  "end": 485
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 487,
                  "end": 488
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 490,
                  "end": 491
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 493,
                  "end": 494
                },
                {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 496,
                  "end": 497
                },
                {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 499,
                  "end": 500
                }
              ],
              "optional": false,
              "start": 468,
              "end": 501
            },
            "definite": false,
            "start": 457,
            "end": 501
          }
        ],
        "declare": false,
        "start": 453,
        "end": 502
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 446,
      "end": 502
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spliced4",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 522
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 530
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 540
                },
                "optional": false,
                "computed": false,
                "start": 525,
                "end": 540
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 541,
                  "end": 542
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 553
                }
              ],
              "optional": false,
              "start": 525,
              "end": 554
            },
            "definite": false,
            "start": 514,
            "end": 554
          }
        ],
        "declare": false,
        "start": 510,
        "end": 555
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 503,
      "end": 555
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spliced5",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 575
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 593
                },
                "optional": false,
                "computed": false,
                "start": 578,
                "end": 593
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 594,
                  "end": 595
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 606
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 608,
                  "end": 609
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 611,
                  "end": 612
                },
                {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 614,
                  "end": 615
                },
                {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 617,
                  "end": 618
                }
              ],
              "optional": false,
              "start": 578,
              "end": 619
            },
            "definite": false,
            "start": 567,
            "end": 619
          }
        ],
        "declare": false,
        "start": 563,
        "end": 620
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 556,
      "end": 620
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "startsWithOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 646
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 654
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 659
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 659
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 660,
                  "end": 661
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 663,
                  "end": 664
                }
              ],
              "optional": false,
              "start": 649,
              "end": 665
            },
            "definite": false,
            "start": 633,
            "end": 665
          }
        ],
        "declare": false,
        "start": 629,
        "end": 666
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 622,
      "end": 666
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inTheEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 686
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 699
                },
                "optional": false,
                "computed": false,
                "start": 689,
                "end": 699
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 701,
                    "end": 702
                  },
                  "prefix": true,
                  "start": 700,
                  "end": 702
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 704,
                  "end": 705
                }
              ],
              "optional": false,
              "start": 689,
              "end": 706
            },
            "definite": false,
            "start": 678,
            "end": 706
          }
        ],
        "declare": false,
        "start": 674,
        "end": 707
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 667,
      "end": 707
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 707
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 11,
    "end": 16,
    "range": [
      11,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 34,
    "end": 42,
    "range": [
      34,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "somePredicate",
    "start": 43,
    "end": 56,
    "range": [
      43,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 66,
    "end": 73,
    "range": [
      66,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 106,
    "end": 109,
    "range": [
      106,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "lastIndex1",
    "start": 110,
    "end": 120,
    "range": [
      110,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 129,
    "end": 142,
    "range": [
      129,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "lastIndex2",
    "start": 169,
    "end": 179,
    "range": [
      169,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 182,
    "end": 187,
    "range": [
      182,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 188,
    "end": 201,
    "range": [
      188,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "somePredicate",
    "start": 202,
    "end": 215,
    "range": [
      202,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 226,
    "end": 229,
    "range": [
      226,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "last1",
    "start": 230,
    "end": 235,
    "range": [
      230,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 244,
    "end": 252,
    "range": [
      244,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "somePredicate",
    "start": 253,
    "end": 266,
    "range": [
      253,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "last2",
    "start": 280,
    "end": 285,
    "range": [
      280,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 294,
    "end": 302,
    "range": [
      294,
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
    "type": "Identifier",
    "value": "somePredicate",
    "start": 303,
    "end": 316,
    "range": [
      303,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 320,
    "end": 326,
    "range": [
      320,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "sorted",
    "start": 331,
    "end": 337,
    "range": [
      331,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 340,
    "end": 345,
    "range": [
      340,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "toSorted",
    "start": 346,
    "end": 354,
    "range": [
      346,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "spliced1",
    "start": 370,
    "end": 378,
    "range": [
      370,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "toSpliced",
    "start": 387,
    "end": 396,
    "range": [
      387,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "spliced2",
    "start": 412,
    "end": 420,
    "range": [
      412,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 423,
    "end": 428,
    "range": [
      423,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "toSpliced",
    "start": 429,
    "end": 438,
    "range": [
      429,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "spliced3",
    "start": 457,
    "end": 465,
    "range": [
      457,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 468,
    "end": 473,
    "range": [
      468,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "toSpliced",
    "start": 474,
    "end": 483,
    "range": [
      474,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
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
    "type": "Keyword",
    "value": "export",
    "start": 503,
    "end": 509,
    "range": [
      503,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 510,
    "end": 513,
    "range": [
      510,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "spliced4",
    "start": 514,
    "end": 522,
    "range": [
      514,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 525,
    "end": 530,
    "range": [
      525,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "toSpliced",
    "start": 531,
    "end": 540,
    "range": [
      531,
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
    "value": "2",
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
    "type": "Identifier",
    "value": "undefined",
    "start": 544,
    "end": 553,
    "range": [
      544,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 556,
    "end": 562,
    "range": [
      556,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "spliced5",
    "start": 567,
    "end": 575,
    "range": [
      567,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 578,
    "end": 583,
    "range": [
      578,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "toSpliced",
    "start": 584,
    "end": 593,
    "range": [
      584,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 597,
    "end": 606,
    "range": [
      597,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 622,
    "end": 628,
    "range": [
      622,
      628
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 629,
    "end": 632,
    "range": [
      629,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "startsWithOne",
    "start": 633,
    "end": 646,
    "range": [
      633,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 649,
    "end": 654,
    "range": [
      649,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 655,
    "end": 659,
    "range": [
      655,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "inTheEnd",
    "start": 678,
    "end": 686,
    "range": [
      678,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 689,
    "end": 694,
    "range": [
      689,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 695,
    "end": 699,
    "range": [
      695,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  }
]
```
