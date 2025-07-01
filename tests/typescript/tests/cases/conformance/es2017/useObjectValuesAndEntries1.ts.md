__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 19,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 20
              }
            ],
            "start": 8,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "init": null,
            "definite": false,
            "start": 34,
            "end": 35
          }
        ],
        "declare": false,
        "start": 30,
        "end": 35
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 52
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 52
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          }
        ],
        "optional": false,
        "start": 39,
        "end": 55
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "definite": false,
                "start": 67,
                "end": 72
              }
            ],
            "declare": false,
            "start": 63,
            "end": 73
          }
        ],
        "start": 57,
        "end": 75
      },
      "start": 25,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 105
              },
              "optional": false,
              "computed": false,
              "start": 91,
              "end": 105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              }
            ],
            "optional": false,
            "start": 91,
            "end": 108
          },
          "definite": false,
          "start": 81,
          "end": 108
        }
      ],
      "declare": false,
      "start": 77,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 161
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 164,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 179
              }
            ],
            "optional": false,
            "start": 164,
            "end": 180
          },
          "definite": false,
          "start": 155,
          "end": 180
        }
      ],
      "declare": false,
      "start": 151,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries1",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 228
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 237
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 245
              },
              "optional": false,
              "computed": false,
              "start": 231,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 246,
                "end": 247
              }
            ],
            "optional": false,
            "start": 231,
            "end": 248
          },
          "definite": false,
          "start": 220,
          "end": 248
        }
      ],
      "declare": false,
      "start": 216,
      "end": 249
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values1",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 298
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 314
              },
              "optional": false,
              "computed": false,
              "start": 301,
              "end": 314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 315,
                "end": 316
              }
            ],
            "optional": false,
            "start": 301,
            "end": 317
          },
          "definite": false,
          "start": 291,
          "end": 317
        }
      ],
      "declare": false,
      "start": 287,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries2",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 361
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 378
              },
              "optional": false,
              "computed": false,
              "start": 364,
              "end": 378
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 384,
                      "end": 388
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 381,
                    "end": 388
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 391
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 393,
                      "end": 394
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 390,
                    "end": 394
                  }
                ],
                "start": 379,
                "end": 396
              }
            ],
            "optional": false,
            "start": 364,
            "end": 397
          },
          "definite": false,
          "start": 353,
          "end": 397
        }
      ],
      "declare": false,
      "start": 349,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values2",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 442
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 451
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 445,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 462
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 464,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 461,
                    "end": 468
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 471
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 473,
                      "end": 474
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 470,
                    "end": 474
                  }
                ],
                "start": 459,
                "end": 476
              }
            ],
            "optional": false,
            "start": 445,
            "end": 477
          },
          "definite": false,
          "start": 435,
          "end": 477
        }
      ],
      "declare": false,
      "start": 431,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries3",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 518
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 527
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 535
              },
              "optional": false,
              "computed": false,
              "start": 521,
              "end": 535
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 536,
                "end": 538
              }
            ],
            "optional": false,
            "start": 521,
            "end": 539
          },
          "definite": false,
          "start": 510,
          "end": 539
        }
      ],
      "declare": false,
      "start": 506,
      "end": 540
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values3",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 596
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 603
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 604,
                "end": 606
              }
            ],
            "optional": false,
            "start": 590,
            "end": 607
          },
          "definite": false,
          "start": 580,
          "end": 607
        }
      ],
      "declare": false,
      "start": 576,
      "end": 608
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 642
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 646,
                "end": 649
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 651,
                "end": 654
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 656,
                "end": 659
              }
            ],
            "start": 645,
            "end": 660
          },
          "definite": false,
          "start": 641,
          "end": 660
        }
      ],
      "declare": false,
      "start": 637,
      "end": 661
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries4",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 674
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 683
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 691
              },
              "optional": false,
              "computed": false,
              "start": 677,
              "end": 691
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              }
            ],
            "optional": false,
            "start": 677,
            "end": 694
          },
          "definite": false,
          "start": 666,
          "end": 694
        }
      ],
      "declare": false,
      "start": 662,
      "end": 695
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values4",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 756
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 763
              },
              "optional": false,
              "computed": false,
              "start": 750,
              "end": 763
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 765
              }
            ],
            "optional": false,
            "start": 750,
            "end": 766
          },
          "definite": false,
          "start": 740,
          "end": 766
        }
      ],
      "declare": false,
      "start": 736,
      "end": 767
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 807
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 811
            },
            "initializer": null,
            "computed": false,
            "start": 810,
            "end": 811
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 814
            },
            "initializer": null,
            "computed": false,
            "start": 813,
            "end": 814
          }
        ],
        "start": 808,
        "end": 816
      },
      "const": false,
      "declare": false,
      "start": 801,
      "end": 816
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries5",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 829
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 832,
                "end": 838
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 846
              },
              "optional": false,
              "computed": false,
              "start": 832,
              "end": 846
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 848
              }
            ],
            "optional": false,
            "start": 832,
            "end": 849
          },
          "definite": false,
          "start": 821,
          "end": 849
        }
      ],
      "declare": false,
      "start": 817,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values5",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 899
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 908
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 915
              },
              "optional": false,
              "computed": false,
              "start": 902,
              "end": 915
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 917
              }
            ],
            "optional": false,
            "start": 902,
            "end": 918
          },
          "definite": false,
          "start": 892,
          "end": 918
        }
      ],
      "declare": false,
      "start": 888,
      "end": 919
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 961
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 962,
        "end": 965
      },
      "declare": false,
      "start": 950,
      "end": 965
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 974
                },
                "typeArguments": null,
                "start": 973,
                "end": 974
              },
              "start": 971,
              "end": 974
            },
            "start": 970,
            "end": 974
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 977,
            "end": 979
          },
          "definite": false,
          "start": 970,
          "end": 979
        }
      ],
      "declare": false,
      "start": 966,
      "end": 980
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries6",
            "optional": false,
            "typeAnnotation": null,
            "start": 985,
            "end": 993
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 996,
                "end": 1002
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1010
              },
              "optional": false,
              "computed": false,
              "start": 996,
              "end": 1010
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1012
              }
            ],
            "optional": false,
            "start": 996,
            "end": 1013
          },
          "definite": false,
          "start": 985,
          "end": 1013
        }
      ],
      "declare": false,
      "start": 981,
      "end": 1014
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1063
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1072
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1079
              },
              "optional": false,
              "computed": false,
              "start": 1066,
              "end": 1079
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1081
              }
            ],
            "optional": false,
            "start": 1066,
            "end": 1082
          },
          "definite": false,
          "start": 1056,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1052,
      "end": 1083
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1112
}
```
