__ESTREE_TEST__:PASS:
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
