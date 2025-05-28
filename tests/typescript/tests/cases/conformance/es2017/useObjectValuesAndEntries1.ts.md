__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 22,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 16,
                "end": 20,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 75,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 35,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 39,
        "end": 55,
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 52,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "values",
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
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 73,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 72,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 108,
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 105,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "decorators": [],
                "name": "entries",
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
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "o",
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
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 164,
            "end": 180,
            "callee": {
              "type": "MemberExpression",
              "start": 164,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 164,
                "end": 170,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "decorators": [],
                "name": "values",
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
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "o",
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
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 228,
            "decorators": [],
            "name": "entries1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 231,
            "end": 248,
            "callee": {
              "type": "MemberExpression",
              "start": 231,
              "end": 245,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 237,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 245,
                "decorators": [],
                "name": "entries",
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
                "start": 246,
                "end": 247,
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
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 298,
            "decorators": [],
            "name": "values1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 301,
            "end": 317,
            "callee": {
              "type": "MemberExpression",
              "start": 301,
              "end": 314,
              "object": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 314,
                "decorators": [],
                "name": "values",
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
                "start": 315,
                "end": 316,
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
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 398,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 361,
            "decorators": [],
            "name": "entries2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 397,
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 378,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 370,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 371,
                "end": 378,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 379,
                "end": 396,
                "properties": [
                  {
                    "type": "Property",
                    "start": 381,
                    "end": 388,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 384,
                      "end": 388,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 390,
                    "end": 394,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 391,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 393,
                      "end": 394,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 478,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 442,
            "decorators": [],
            "name": "values2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 445,
            "end": 477,
            "callee": {
              "type": "MemberExpression",
              "start": 445,
              "end": 458,
              "object": {
                "type": "Identifier",
                "start": 445,
                "end": 451,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 452,
                "end": 458,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 476,
                "properties": [
                  {
                    "type": "Property",
                    "start": 461,
                    "end": 468,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 464,
                      "end": 468,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 470,
                    "end": 474,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 473,
                      "end": 474,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 506,
      "end": 540,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 539,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 518,
            "decorators": [],
            "name": "entries3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 521,
            "end": 539,
            "callee": {
              "type": "MemberExpression",
              "start": 521,
              "end": 535,
              "object": {
                "type": "Identifier",
                "start": 521,
                "end": 527,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 528,
                "end": 535,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 536,
                "end": 538,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 576,
      "end": 608,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 587,
            "decorators": [],
            "name": "values3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 607,
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 603,
              "object": {
                "type": "Identifier",
                "start": 590,
                "end": 596,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 597,
                "end": 603,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 604,
                "end": 606,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 637,
      "end": 661,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 660,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 642,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 645,
            "end": 660,
            "elements": [
              {
                "type": "Literal",
                "start": 646,
                "end": 649,
                "value": "a",
                "raw": "\"a\""
              },
              {
                "type": "Literal",
                "start": 651,
                "end": 654,
                "value": "b",
                "raw": "\"b\""
              },
              {
                "type": "Literal",
                "start": 656,
                "end": 659,
                "value": "c",
                "raw": "\"c\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 662,
      "end": 695,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 674,
            "decorators": [],
            "name": "entries4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 677,
            "end": 694,
            "callee": {
              "type": "MemberExpression",
              "start": 677,
              "end": 691,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 683,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 684,
                "end": 691,
                "decorators": [],
                "name": "entries",
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
                "start": 692,
                "end": 693,
                "decorators": [],
                "name": "a",
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
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 767,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 747,
            "decorators": [],
            "name": "values4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 750,
            "end": 766,
            "callee": {
              "type": "MemberExpression",
              "start": 750,
              "end": 763,
              "object": {
                "type": "Identifier",
                "start": 750,
                "end": 756,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 757,
                "end": 763,
                "decorators": [],
                "name": "values",
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
                "start": 764,
                "end": 765,
                "decorators": [],
                "name": "a",
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
    {
      "type": "TSEnumDeclaration",
      "start": 801,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 807,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 808,
        "end": 816,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 810,
            "end": 811,
            "id": {
              "type": "Identifier",
              "start": 810,
              "end": 811,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 813,
            "end": 814,
            "id": {
              "type": "Identifier",
              "start": 813,
              "end": 814,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 850,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 849,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 829,
            "decorators": [],
            "name": "entries5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 832,
            "end": 849,
            "callee": {
              "type": "MemberExpression",
              "start": 832,
              "end": 846,
              "object": {
                "type": "Identifier",
                "start": 832,
                "end": 838,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 839,
                "end": 846,
                "decorators": [],
                "name": "entries",
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
                "start": 847,
                "end": 848,
                "decorators": [],
                "name": "E",
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
    {
      "type": "VariableDeclaration",
      "start": 888,
      "end": 919,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 899,
            "decorators": [],
            "name": "values5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 902,
            "end": 918,
            "callee": {
              "type": "MemberExpression",
              "start": 902,
              "end": 915,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 908,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 909,
                "end": 915,
                "decorators": [],
                "name": "values",
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
                "start": 916,
                "end": 917,
                "decorators": [],
                "name": "E",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 950,
      "end": 965,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 961,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 962,
        "end": 965,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 966,
      "end": 980,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 979,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 974,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 971,
              "end": 974,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 973,
                "end": 974,
                "typeName": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 974,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 977,
            "end": 979,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 981,
      "end": 1014,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 985,
          "end": 1013,
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 993,
            "decorators": [],
            "name": "entries6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 996,
            "end": 1013,
            "callee": {
              "type": "MemberExpression",
              "start": 996,
              "end": 1010,
              "object": {
                "type": "Identifier",
                "start": 996,
                "end": 1002,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1003,
                "end": 1010,
                "decorators": [],
                "name": "entries",
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
                "start": 1011,
                "end": 1012,
                "decorators": [],
                "name": "i",
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
    {
      "type": "VariableDeclaration",
      "start": 1052,
      "end": 1083,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1056,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1063,
            "decorators": [],
            "name": "values6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1066,
            "end": 1082,
            "callee": {
              "type": "MemberExpression",
              "start": 1066,
              "end": 1079,
              "object": {
                "type": "Identifier",
                "start": 1066,
                "end": 1072,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1073,
                "end": 1079,
                "decorators": [],
                "name": "values",
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
                "start": 1080,
                "end": 1081,
                "decorators": [],
                "name": "i",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
