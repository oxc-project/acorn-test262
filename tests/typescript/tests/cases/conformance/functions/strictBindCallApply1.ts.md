__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2961,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          }
        },
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 50,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 44,
          "end": 50
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 80,
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 90,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 90,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 84,
              "end": 90
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 91,
        "end": 99,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 93,
          "end": 99
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 101,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 129,
          "end": 138,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 132,
              "end": 138
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 147,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 141,
          "end": 147
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 174,
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 182,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 182,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 182,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 183,
        "end": 186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 185,
          "end": 186,
          "typeName": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 219,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 196,
            "decorators": [],
            "name": "f00",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 199,
            "end": 218,
            "callee": {
              "type": "MemberExpression",
              "start": 199,
              "end": 207,
              "object": {
                "type": "Identifier",
                "start": 199,
                "end": 202,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "bind",
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
                "start": 208,
                "end": 217,
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
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 254,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "f01",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 230,
            "end": 253,
            "callee": {
              "type": "MemberExpression",
              "start": 230,
              "end": 238,
              "object": {
                "type": "Identifier",
                "start": 230,
                "end": 233,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 234,
                "end": 238,
                "decorators": [],
                "name": "bind",
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
                "start": 239,
                "end": 248,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 250,
                "end": 252,
                "value": 10,
                "raw": "10"
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
      "start": 255,
      "end": 298,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "decorators": [],
            "name": "f02",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 265,
            "end": 297,
            "callee": {
              "type": "MemberExpression",
              "start": 265,
              "end": 273,
              "object": {
                "type": "Identifier",
                "start": 265,
                "end": 268,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "decorators": [],
                "name": "bind",
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
                "start": 274,
                "end": 283,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 285,
                "end": 287,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 289,
                "end": 296,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 299,
      "end": 337,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 306,
            "decorators": [],
            "name": "f03",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 309,
            "end": 336,
            "callee": {
              "type": "MemberExpression",
              "start": 309,
              "end": 317,
              "object": {
                "type": "Identifier",
                "start": 309,
                "end": 312,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "decorators": [],
                "name": "bind",
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
                "start": 318,
                "end": 327,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 329,
                "end": 331,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 333,
                "end": 335,
                "value": 20,
                "raw": "20"
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
      "end": 386,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 356,
            "decorators": [],
            "name": "f04",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 359,
            "end": 385,
            "callee": {
              "type": "MemberExpression",
              "start": 359,
              "end": 374,
              "object": {
                "type": "Identifier",
                "start": 359,
                "end": 369,
                "decorators": [],
                "name": "overloaded",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 370,
                "end": 374,
                "decorators": [],
                "name": "bind",
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
                "start": 375,
                "end": 384,
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
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 443,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 416,
            "decorators": [],
            "name": "f05",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 419,
            "end": 442,
            "callee": {
              "type": "MemberExpression",
              "start": 419,
              "end": 431,
              "object": {
                "type": "Identifier",
                "start": 419,
                "end": 426,
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 427,
                "end": 431,
                "decorators": [],
                "name": "bind",
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
                "start": 432,
                "end": 441,
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
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 507,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 471,
            "decorators": [],
            "name": "c00",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 474,
            "end": 506,
            "callee": {
              "type": "MemberExpression",
              "start": 474,
              "end": 482,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 482,
                "decorators": [],
                "name": "call",
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
                "start": 483,
                "end": 492,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 494,
                "end": 496,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 498,
                "end": 505,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 508,
      "end": 542,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 515,
            "decorators": [],
            "name": "c01",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 518,
            "end": 541,
            "callee": {
              "type": "MemberExpression",
              "start": 518,
              "end": 526,
              "object": {
                "type": "Identifier",
                "start": 518,
                "end": 521,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 526,
                "decorators": [],
                "name": "call",
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
                "start": 527,
                "end": 536,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 538,
                "end": 540,
                "value": 10,
                "raw": "10"
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
      "start": 553,
      "end": 591,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 560,
            "decorators": [],
            "name": "c02",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 563,
            "end": 590,
            "callee": {
              "type": "MemberExpression",
              "start": 563,
              "end": 571,
              "object": {
                "type": "Identifier",
                "start": 563,
                "end": 566,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 567,
                "end": 571,
                "decorators": [],
                "name": "call",
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
                "start": 572,
                "end": 581,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 583,
                "end": 585,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 587,
                "end": 589,
                "value": 20,
                "raw": "20"
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
      "start": 602,
      "end": 649,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 609,
            "decorators": [],
            "name": "c03",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 612,
            "end": 648,
            "callee": {
              "type": "MemberExpression",
              "start": 612,
              "end": 620,
              "object": {
                "type": "Identifier",
                "start": 612,
                "end": 615,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 620,
                "decorators": [],
                "name": "call",
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
                "start": 621,
                "end": 630,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 632,
                "end": 634,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 636,
                "end": 643,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 645,
                "end": 647,
                "value": 30,
                "raw": "30"
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
      "start": 661,
      "end": 707,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 668,
            "decorators": [],
            "name": "a00",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 671,
            "end": 706,
            "callee": {
              "type": "MemberExpression",
              "start": 671,
              "end": 680,
              "object": {
                "type": "Identifier",
                "start": 671,
                "end": 674,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 675,
                "end": 680,
                "decorators": [],
                "name": "apply",
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
                "start": 681,
                "end": 690,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 692,
                "end": 705,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 693,
                    "end": 695,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 697,
                    "end": 704,
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 708,
      "end": 745,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 715,
            "decorators": [],
            "name": "a01",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 718,
            "end": 744,
            "callee": {
              "type": "MemberExpression",
              "start": 718,
              "end": 727,
              "object": {
                "type": "Identifier",
                "start": 718,
                "end": 721,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 722,
                "end": 727,
                "decorators": [],
                "name": "apply",
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
                "start": 728,
                "end": 737,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 739,
                "end": 743,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 740,
                    "end": 742,
                    "value": 10,
                    "raw": "10"
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
      "start": 756,
      "end": 797,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 796,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 763,
            "decorators": [],
            "name": "a02",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 766,
            "end": 796,
            "callee": {
              "type": "MemberExpression",
              "start": 766,
              "end": 775,
              "object": {
                "type": "Identifier",
                "start": 766,
                "end": 769,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 770,
                "end": 775,
                "decorators": [],
                "name": "apply",
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
                "start": 776,
                "end": 785,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 787,
                "end": 795,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 788,
                    "end": 790,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 792,
                    "end": 794,
                    "value": 20,
                    "raw": "20"
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
      "start": 808,
      "end": 858,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 857,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 815,
            "decorators": [],
            "name": "a03",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 818,
            "end": 857,
            "callee": {
              "type": "MemberExpression",
              "start": 818,
              "end": 827,
              "object": {
                "type": "Identifier",
                "start": 818,
                "end": 821,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 822,
                "end": 827,
                "decorators": [],
                "name": "apply",
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
                "start": 828,
                "end": 837,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 839,
                "end": 856,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 840,
                    "end": 842,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 844,
                    "end": 851,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  {
                    "type": "Literal",
                    "start": 853,
                    "end": 855,
                    "value": 30,
                    "raw": "30"
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
      "type": "ClassDeclaration",
      "start": 870,
      "end": 1147,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 877,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 878,
        "end": 1147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 884,
            "end": 920,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 895,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 895,
              "end": 920,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 896,
                  "end": 905,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 897,
                    "end": 905,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 907,
                  "end": 916,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 908,
                    "end": 916,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 910,
                      "end": 916
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 918,
                "end": 920,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 984,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 928,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 928,
              "end": 984,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 929,
                  "end": 939,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 939,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 935,
                      "end": 939
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 941,
                  "end": 950,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 942,
                    "end": 950,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 944,
                      "end": 950
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 952,
                  "end": 961,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 953,
                    "end": 961,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 955,
                      "end": 961
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 962,
                "end": 970,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 964,
                  "end": 970
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 971,
                "end": 984,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 973,
                    "end": 982,
                    "argument": {
                      "type": "Literal",
                      "start": 980,
                      "end": 982,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 989,
            "end": 1019,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 999,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 999,
              "end": 1019,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1009,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1001,
                    "end": 1009,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1003,
                      "end": 1009
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1010,
                "end": 1018,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1012,
                  "end": 1018
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1024,
            "end": 1054,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1024,
              "end": 1034,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1034,
              "end": 1054,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1044,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1036,
                    "end": 1044,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1038,
                      "end": 1044
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1045,
                "end": 1053,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1047,
                  "end": 1053
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1059,
            "end": 1108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1059,
              "end": 1069,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1069,
              "end": 1108,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1076,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1071,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1073,
                      "end": 1076
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1077,
                "end": 1082,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1079,
                  "end": 1082
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1083,
                "end": 1108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1085,
                    "end": 1106,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 1092,
                      "end": 1106,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1093,
                        "end": 1096
                      },
                      "expression": {
                        "type": "Identifier",
                        "start": 1097,
                        "end": 1106,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1113,
            "end": 1145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1113,
              "end": 1120,
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1120,
              "end": 1145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1120,
                "end": 1123,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1121,
                    "end": 1122,
                    "name": {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1122,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1125,
                    "end": 1128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1127,
                      "end": 1128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1127,
                        "end": 1128,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1129,
                "end": 1132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1131,
                  "end": 1132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1131,
                    "end": 1132,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1133,
                "end": 1145,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1135,
                    "end": 1143,
                    "argument": {
                      "type": "Identifier",
                      "start": 1142,
                      "end": 1143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1149,
      "end": 1166,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1161,
          "end": 1165,
          "id": {
            "type": "Identifier",
            "start": 1161,
            "end": 1165,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1162,
              "end": 1165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1164,
                "end": 1165,
                "typeName": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1165,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1167,
      "end": 1187,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1179,
          "end": 1186,
          "id": {
            "type": "Identifier",
            "start": 1179,
            "end": 1186,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1182,
              "end": 1186,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1184,
                "end": 1186,
                "members": []
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1189,
      "end": 1213,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1193,
          "end": 1212,
          "id": {
            "type": "Identifier",
            "start": 1193,
            "end": 1196,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1199,
            "end": 1212,
            "callee": {
              "type": "MemberExpression",
              "start": 1199,
              "end": 1209,
              "object": {
                "type": "MemberExpression",
                "start": 1199,
                "end": 1204,
                "object": {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1200,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1204,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1205,
                "end": 1209,
                "decorators": [],
                "name": "bind",
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
                "start": 1210,
                "end": 1211,
                "decorators": [],
                "name": "c",
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
      "start": 1214,
      "end": 1242,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1218,
          "end": 1241,
          "id": {
            "type": "Identifier",
            "start": 1218,
            "end": 1221,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1224,
            "end": 1241,
            "callee": {
              "type": "MemberExpression",
              "start": 1224,
              "end": 1234,
              "object": {
                "type": "MemberExpression",
                "start": 1224,
                "end": 1229,
                "object": {
                  "type": "Identifier",
                  "start": 1224,
                  "end": 1225,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1229,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1230,
                "end": 1234,
                "decorators": [],
                "name": "bind",
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
                "start": 1235,
                "end": 1236,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1238,
                "end": 1240,
                "value": 10,
                "raw": "10"
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
      "start": 1243,
      "end": 1280,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1247,
          "end": 1279,
          "id": {
            "type": "Identifier",
            "start": 1247,
            "end": 1250,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1253,
            "end": 1279,
            "callee": {
              "type": "MemberExpression",
              "start": 1253,
              "end": 1263,
              "object": {
                "type": "MemberExpression",
                "start": 1253,
                "end": 1258,
                "object": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1254,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1258,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1259,
                "end": 1263,
                "decorators": [],
                "name": "bind",
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
                "start": 1264,
                "end": 1265,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1267,
                "end": 1269,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1271,
                "end": 1278,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 1281,
      "end": 1313,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1285,
          "end": 1312,
          "id": {
            "type": "Identifier",
            "start": 1285,
            "end": 1288,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1291,
            "end": 1312,
            "callee": {
              "type": "MemberExpression",
              "start": 1291,
              "end": 1301,
              "object": {
                "type": "MemberExpression",
                "start": 1291,
                "end": 1296,
                "object": {
                  "type": "Identifier",
                  "start": 1291,
                  "end": 1292,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1293,
                  "end": 1296,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1297,
                "end": 1301,
                "decorators": [],
                "name": "bind",
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
                "start": 1302,
                "end": 1303,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1305,
                "end": 1307,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1309,
                "end": 1311,
                "value": 20,
                "raw": "20"
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
      "start": 1324,
      "end": 1356,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1328,
          "end": 1355,
          "id": {
            "type": "Identifier",
            "start": 1328,
            "end": 1331,
            "decorators": [],
            "name": "f14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1334,
            "end": 1355,
            "callee": {
              "type": "MemberExpression",
              "start": 1334,
              "end": 1344,
              "object": {
                "type": "MemberExpression",
                "start": 1334,
                "end": 1339,
                "object": {
                  "type": "Identifier",
                  "start": 1334,
                  "end": 1335,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1339,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1340,
                "end": 1344,
                "decorators": [],
                "name": "bind",
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
                "start": 1345,
                "end": 1354,
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
    {
      "type": "VariableDeclaration",
      "start": 1368,
      "end": 1399,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1372,
          "end": 1398,
          "id": {
            "type": "Identifier",
            "start": 1372,
            "end": 1375,
            "decorators": [],
            "name": "f15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1378,
            "end": 1398,
            "callee": {
              "type": "MemberExpression",
              "start": 1378,
              "end": 1395,
              "object": {
                "type": "MemberExpression",
                "start": 1378,
                "end": 1390,
                "object": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1390,
                  "decorators": [],
                  "name": "overloaded",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1391,
                "end": 1395,
                "decorators": [],
                "name": "bind",
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
                "start": 1396,
                "end": 1397,
                "decorators": [],
                "name": "c",
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
      "start": 1434,
      "end": 1462,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1438,
          "end": 1461,
          "id": {
            "type": "Identifier",
            "start": 1438,
            "end": 1441,
            "decorators": [],
            "name": "f16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1444,
            "end": 1461,
            "callee": {
              "type": "MemberExpression",
              "start": 1444,
              "end": 1458,
              "object": {
                "type": "MemberExpression",
                "start": 1444,
                "end": 1453,
                "object": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1445,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1453,
                  "decorators": [],
                  "name": "generic",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1458,
                "decorators": [],
                "name": "bind",
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
                "start": 1459,
                "end": 1460,
                "decorators": [],
                "name": "c",
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
      "start": 1495,
      "end": 1532,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1499,
          "end": 1531,
          "id": {
            "type": "Identifier",
            "start": 1499,
            "end": 1502,
            "decorators": [],
            "name": "c10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1505,
            "end": 1531,
            "callee": {
              "type": "MemberExpression",
              "start": 1505,
              "end": 1515,
              "object": {
                "type": "MemberExpression",
                "start": 1505,
                "end": 1510,
                "object": {
                  "type": "Identifier",
                  "start": 1505,
                  "end": 1506,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1510,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1511,
                "end": 1515,
                "decorators": [],
                "name": "call",
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
                "start": 1516,
                "end": 1517,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1519,
                "end": 1521,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1523,
                "end": 1530,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 1533,
      "end": 1561,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1537,
          "end": 1560,
          "id": {
            "type": "Identifier",
            "start": 1537,
            "end": 1540,
            "decorators": [],
            "name": "c11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1543,
            "end": 1560,
            "callee": {
              "type": "MemberExpression",
              "start": 1543,
              "end": 1553,
              "object": {
                "type": "MemberExpression",
                "start": 1543,
                "end": 1548,
                "object": {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1544,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1548,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1549,
                "end": 1553,
                "decorators": [],
                "name": "call",
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
                "start": 1554,
                "end": 1555,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1557,
                "end": 1559,
                "value": 10,
                "raw": "10"
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
      "start": 1572,
      "end": 1604,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1576,
          "end": 1603,
          "id": {
            "type": "Identifier",
            "start": 1576,
            "end": 1579,
            "decorators": [],
            "name": "c12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1582,
            "end": 1603,
            "callee": {
              "type": "MemberExpression",
              "start": 1582,
              "end": 1592,
              "object": {
                "type": "MemberExpression",
                "start": 1582,
                "end": 1587,
                "object": {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1583,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1587,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1588,
                "end": 1592,
                "decorators": [],
                "name": "call",
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
                "start": 1593,
                "end": 1594,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1596,
                "end": 1598,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1600,
                "end": 1602,
                "value": 20,
                "raw": "20"
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
      "start": 1615,
      "end": 1656,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1619,
          "end": 1655,
          "id": {
            "type": "Identifier",
            "start": 1619,
            "end": 1622,
            "decorators": [],
            "name": "c13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1625,
            "end": 1655,
            "callee": {
              "type": "MemberExpression",
              "start": 1625,
              "end": 1635,
              "object": {
                "type": "MemberExpression",
                "start": 1625,
                "end": 1630,
                "object": {
                  "type": "Identifier",
                  "start": 1625,
                  "end": 1626,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1627,
                  "end": 1630,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1631,
                "end": 1635,
                "decorators": [],
                "name": "call",
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
                "start": 1636,
                "end": 1637,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1639,
                "end": 1641,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1643,
                "end": 1650,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 1652,
                "end": 1654,
                "value": 30,
                "raw": "30"
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
      "start": 1667,
      "end": 1712,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1671,
          "end": 1711,
          "id": {
            "type": "Identifier",
            "start": 1671,
            "end": 1674,
            "decorators": [],
            "name": "c14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1677,
            "end": 1711,
            "callee": {
              "type": "MemberExpression",
              "start": 1677,
              "end": 1687,
              "object": {
                "type": "MemberExpression",
                "start": 1677,
                "end": 1682,
                "object": {
                  "type": "Identifier",
                  "start": 1677,
                  "end": 1678,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1682,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1683,
                "end": 1687,
                "decorators": [],
                "name": "call",
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
                "start": 1688,
                "end": 1697,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1699,
                "end": 1701,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 1703,
                "end": 1710,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 1724,
      "end": 1764,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1728,
          "end": 1763,
          "id": {
            "type": "Identifier",
            "start": 1728,
            "end": 1731,
            "decorators": [],
            "name": "a10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1734,
            "end": 1763,
            "callee": {
              "type": "MemberExpression",
              "start": 1734,
              "end": 1745,
              "object": {
                "type": "MemberExpression",
                "start": 1734,
                "end": 1739,
                "object": {
                  "type": "Identifier",
                  "start": 1734,
                  "end": 1735,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1739,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1740,
                "end": 1745,
                "decorators": [],
                "name": "apply",
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
                "start": 1746,
                "end": 1747,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1749,
                "end": 1762,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1750,
                    "end": 1752,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 1754,
                    "end": 1761,
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 1765,
      "end": 1796,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1769,
          "end": 1795,
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1772,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1775,
            "end": 1795,
            "callee": {
              "type": "MemberExpression",
              "start": 1775,
              "end": 1786,
              "object": {
                "type": "MemberExpression",
                "start": 1775,
                "end": 1780,
                "object": {
                  "type": "Identifier",
                  "start": 1775,
                  "end": 1776,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1780,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1781,
                "end": 1786,
                "decorators": [],
                "name": "apply",
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
                "start": 1787,
                "end": 1788,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1790,
                "end": 1794,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1791,
                    "end": 1793,
                    "value": 10,
                    "raw": "10"
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
      "start": 1807,
      "end": 1842,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1811,
          "end": 1841,
          "id": {
            "type": "Identifier",
            "start": 1811,
            "end": 1814,
            "decorators": [],
            "name": "a12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1817,
            "end": 1841,
            "callee": {
              "type": "MemberExpression",
              "start": 1817,
              "end": 1828,
              "object": {
                "type": "MemberExpression",
                "start": 1817,
                "end": 1822,
                "object": {
                  "type": "Identifier",
                  "start": 1817,
                  "end": 1818,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1822,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1823,
                "end": 1828,
                "decorators": [],
                "name": "apply",
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
                "start": 1829,
                "end": 1830,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1832,
                "end": 1840,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1833,
                    "end": 1835,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 1837,
                    "end": 1839,
                    "value": 20,
                    "raw": "20"
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
      "start": 1853,
      "end": 1897,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1857,
          "end": 1896,
          "id": {
            "type": "Identifier",
            "start": 1857,
            "end": 1860,
            "decorators": [],
            "name": "a13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1863,
            "end": 1896,
            "callee": {
              "type": "MemberExpression",
              "start": 1863,
              "end": 1874,
              "object": {
                "type": "MemberExpression",
                "start": 1863,
                "end": 1868,
                "object": {
                  "type": "Identifier",
                  "start": 1863,
                  "end": 1864,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1865,
                  "end": 1868,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1869,
                "end": 1874,
                "decorators": [],
                "name": "apply",
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
                "start": 1875,
                "end": 1876,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1878,
                "end": 1895,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1879,
                    "end": 1881,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 1883,
                    "end": 1890,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  {
                    "type": "Literal",
                    "start": 1892,
                    "end": 1894,
                    "value": 30,
                    "raw": "30"
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
      "start": 1908,
      "end": 1956,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1912,
          "end": 1955,
          "id": {
            "type": "Identifier",
            "start": 1912,
            "end": 1915,
            "decorators": [],
            "name": "a14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1918,
            "end": 1955,
            "callee": {
              "type": "MemberExpression",
              "start": 1918,
              "end": 1929,
              "object": {
                "type": "MemberExpression",
                "start": 1918,
                "end": 1923,
                "object": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1919,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1920,
                  "end": 1923,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1924,
                "end": 1929,
                "decorators": [],
                "name": "apply",
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
                "start": 1930,
                "end": 1939,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1941,
                "end": 1954,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1942,
                    "end": 1944,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 1946,
                    "end": 1953,
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 1968,
      "end": 1996,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1972,
          "end": 1995,
          "id": {
            "type": "Identifier",
            "start": 1972,
            "end": 1975,
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1978,
            "end": 1995,
            "callee": {
              "type": "MemberExpression",
              "start": 1978,
              "end": 1984,
              "object": {
                "type": "Identifier",
                "start": 1978,
                "end": 1979,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1980,
                "end": 1984,
                "decorators": [],
                "name": "bind",
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
                "start": 1985,
                "end": 1994,
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
    {
      "type": "VariableDeclaration",
      "start": 1997,
      "end": 2029,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2001,
          "end": 2028,
          "id": {
            "type": "Identifier",
            "start": 2001,
            "end": 2004,
            "decorators": [],
            "name": "f21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2007,
            "end": 2028,
            "callee": {
              "type": "MemberExpression",
              "start": 2007,
              "end": 2013,
              "object": {
                "type": "Identifier",
                "start": 2007,
                "end": 2008,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2009,
                "end": 2013,
                "decorators": [],
                "name": "bind",
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
                "start": 2014,
                "end": 2023,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 2025,
                "end": 2027,
                "value": 10,
                "raw": "10"
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
      "start": 2030,
      "end": 2071,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2034,
          "end": 2070,
          "id": {
            "type": "Identifier",
            "start": 2034,
            "end": 2037,
            "decorators": [],
            "name": "f22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2040,
            "end": 2070,
            "callee": {
              "type": "MemberExpression",
              "start": 2040,
              "end": 2046,
              "object": {
                "type": "Identifier",
                "start": 2040,
                "end": 2041,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2042,
                "end": 2046,
                "decorators": [],
                "name": "bind",
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
                "start": 2047,
                "end": 2056,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 2058,
                "end": 2060,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2062,
                "end": 2069,
                "value": "hello",
                "raw": "\"hello\""
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
      "start": 2072,
      "end": 2108,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2076,
          "end": 2107,
          "id": {
            "type": "Identifier",
            "start": 2076,
            "end": 2079,
            "decorators": [],
            "name": "f23",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2082,
            "end": 2107,
            "callee": {
              "type": "MemberExpression",
              "start": 2082,
              "end": 2088,
              "object": {
                "type": "Identifier",
                "start": 2082,
                "end": 2083,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2084,
                "end": 2088,
                "decorators": [],
                "name": "bind",
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
                "start": 2089,
                "end": 2098,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 2100,
                "end": 2102,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2104,
                "end": 2106,
                "value": 20,
                "raw": "20"
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
      "type": "ExpressionStatement",
      "start": 2120,
      "end": 2143,
      "expression": {
        "type": "CallExpression",
        "start": 2120,
        "end": 2142,
        "callee": {
          "type": "MemberExpression",
          "start": 2120,
          "end": 2126,
          "object": {
            "type": "Identifier",
            "start": 2120,
            "end": 2121,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2122,
            "end": 2126,
            "decorators": [],
            "name": "call",
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
            "start": 2127,
            "end": 2128,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 2130,
            "end": 2132,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 2134,
            "end": 2141,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2144,
      "end": 2158,
      "expression": {
        "type": "CallExpression",
        "start": 2144,
        "end": 2157,
        "callee": {
          "type": "MemberExpression",
          "start": 2144,
          "end": 2150,
          "object": {
            "type": "Identifier",
            "start": 2144,
            "end": 2145,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2146,
            "end": 2150,
            "decorators": [],
            "name": "call",
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
            "start": 2151,
            "end": 2152,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 2154,
            "end": 2156,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2169,
      "end": 2187,
      "expression": {
        "type": "CallExpression",
        "start": 2169,
        "end": 2186,
        "callee": {
          "type": "MemberExpression",
          "start": 2169,
          "end": 2175,
          "object": {
            "type": "Identifier",
            "start": 2169,
            "end": 2170,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2171,
            "end": 2175,
            "decorators": [],
            "name": "call",
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
            "start": 2176,
            "end": 2177,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 2179,
            "end": 2181,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 2183,
            "end": 2185,
            "value": 20,
            "raw": "20"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2198,
      "end": 2225,
      "expression": {
        "type": "CallExpression",
        "start": 2198,
        "end": 2224,
        "callee": {
          "type": "MemberExpression",
          "start": 2198,
          "end": 2204,
          "object": {
            "type": "Identifier",
            "start": 2198,
            "end": 2199,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2200,
            "end": 2204,
            "decorators": [],
            "name": "call",
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
            "start": 2205,
            "end": 2206,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 2208,
            "end": 2210,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 2212,
            "end": 2219,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 2221,
            "end": 2223,
            "value": 30,
            "raw": "30"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2237,
      "end": 2263,
      "expression": {
        "type": "CallExpression",
        "start": 2237,
        "end": 2262,
        "callee": {
          "type": "MemberExpression",
          "start": 2237,
          "end": 2244,
          "object": {
            "type": "Identifier",
            "start": 2237,
            "end": 2238,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2239,
            "end": 2244,
            "decorators": [],
            "name": "apply",
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
            "start": 2245,
            "end": 2246,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrayExpression",
            "start": 2248,
            "end": 2261,
            "elements": [
              {
                "type": "Literal",
                "start": 2249,
                "end": 2251,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2253,
                "end": 2260,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2264,
      "end": 2281,
      "expression": {
        "type": "CallExpression",
        "start": 2264,
        "end": 2280,
        "callee": {
          "type": "MemberExpression",
          "start": 2264,
          "end": 2271,
          "object": {
            "type": "Identifier",
            "start": 2264,
            "end": 2265,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2266,
            "end": 2271,
            "decorators": [],
            "name": "apply",
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
            "start": 2272,
            "end": 2273,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrayExpression",
            "start": 2275,
            "end": 2279,
            "elements": [
              {
                "type": "Literal",
                "start": 2276,
                "end": 2278,
                "value": 10,
                "raw": "10"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2292,
      "end": 2313,
      "expression": {
        "type": "CallExpression",
        "start": 2292,
        "end": 2312,
        "callee": {
          "type": "MemberExpression",
          "start": 2292,
          "end": 2299,
          "object": {
            "type": "Identifier",
            "start": 2292,
            "end": 2293,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2294,
            "end": 2299,
            "decorators": [],
            "name": "apply",
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
            "start": 2300,
            "end": 2301,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrayExpression",
            "start": 2303,
            "end": 2311,
            "elements": [
              {
                "type": "Literal",
                "start": 2304,
                "end": 2306,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2308,
                "end": 2310,
                "value": 20,
                "raw": "20"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2324,
      "end": 2354,
      "expression": {
        "type": "CallExpression",
        "start": 2324,
        "end": 2353,
        "callee": {
          "type": "MemberExpression",
          "start": 2324,
          "end": 2331,
          "object": {
            "type": "Identifier",
            "start": 2324,
            "end": 2325,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2326,
            "end": 2331,
            "decorators": [],
            "name": "apply",
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
            "start": 2332,
            "end": 2333,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrayExpression",
            "start": 2335,
            "end": 2352,
            "elements": [
              {
                "type": "Literal",
                "start": 2336,
                "end": 2338,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2340,
                "end": 2347,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 2349,
                "end": 2351,
                "value": 30,
                "raw": "30"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2366,
      "end": 2497,
      "id": {
        "type": "Identifier",
        "start": 2375,
        "end": 2378,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2378,
        "end": 2399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2379,
            "end": 2398,
            "name": {
              "type": "Identifier",
              "start": 2379,
              "end": 2380,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2389,
              "end": 2398,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2389,
                "end": 2396
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2400,
          "end": 2439,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2408,
            "end": 2439,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2410,
              "end": 2439,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2411,
                  "end": 2418,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2415,
                    "end": 2418,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2417,
                      "end": 2418,
                      "literal": {
                        "type": "Literal",
                        "start": 2417,
                        "end": 2418,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 2420,
                  "end": 2430,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2423,
                    "end": 2427,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2427,
                    "end": 2430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2429,
                      "end": 2430,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2429,
                        "end": 2430,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2432,
                "end": 2439,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2435,
                  "end": 2439
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2441,
        "end": 2497,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2447,
            "end": 2464,
            "expression": {
              "type": "CallExpression",
              "start": 2447,
              "end": 2463,
              "callee": {
                "type": "MemberExpression",
                "start": 2447,
                "end": 2460,
                "object": {
                  "type": "Identifier",
                  "start": 2447,
                  "end": 2455,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2456,
                  "end": 2460,
                  "decorators": [],
                  "name": "bind",
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
                  "start": 2461,
                  "end": 2462,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2469,
            "end": 2486,
            "expression": {
              "type": "CallExpression",
              "start": 2469,
              "end": 2485,
              "callee": {
                "type": "MemberExpression",
                "start": 2469,
                "end": 2482,
                "object": {
                  "type": "Identifier",
                  "start": 2469,
                  "end": 2477,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2478,
                  "end": 2482,
                  "decorators": [],
                  "name": "bind",
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
                  "start": 2483,
                  "end": 2484,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2499,
      "end": 2669,
      "id": {
        "type": "Identifier",
        "start": 2508,
        "end": 2511,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2511,
        "end": 2528,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2512,
            "end": 2527,
            "name": {
              "type": "Identifier",
              "start": 2512,
              "end": 2513,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 2522,
              "end": 2527,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 2522,
                  "end": 2523,
                  "literal": {
                    "type": "Literal",
                    "start": 2522,
                    "end": 2523,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2526,
                  "end": 2527,
                  "literal": {
                    "type": "Literal",
                    "start": 2526,
                    "end": 2527,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2529,
          "end": 2611,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2537,
            "end": 2611,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2539,
              "end": 2611,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2540,
                  "end": 2547,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2544,
                    "end": 2547,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2546,
                      "end": 2547,
                      "literal": {
                        "type": "Literal",
                        "start": 2546,
                        "end": 2547,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 2549,
                  "end": 2602,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2552,
                    "end": 2556,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2556,
                    "end": 2602,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 2558,
                      "end": 2602,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 2558,
                        "end": 2559,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2558,
                          "end": 2559,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "start": 2568,
                        "end": 2569,
                        "literal": {
                          "type": "Literal",
                          "start": 2568,
                          "end": 2569,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "start": 2572,
                        "end": 2581,
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2573,
                            "end": 2580
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSTupleType",
                        "start": 2584,
                        "end": 2602,
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2585,
                            "end": 2592
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2594,
                            "end": 2601
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2604,
                "end": 2611,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2607,
                  "end": 2611
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2613,
        "end": 2669,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2619,
            "end": 2636,
            "expression": {
              "type": "CallExpression",
              "start": 2619,
              "end": 2635,
              "callee": {
                "type": "MemberExpression",
                "start": 2619,
                "end": 2632,
                "object": {
                  "type": "Identifier",
                  "start": 2619,
                  "end": 2627,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2628,
                  "end": 2632,
                  "decorators": [],
                  "name": "bind",
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
                  "start": 2633,
                  "end": 2634,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2641,
            "end": 2658,
            "expression": {
              "type": "CallExpression",
              "start": 2641,
              "end": 2657,
              "callee": {
                "type": "MemberExpression",
                "start": 2641,
                "end": 2654,
                "object": {
                  "type": "Identifier",
                  "start": 2641,
                  "end": 2649,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2650,
                  "end": 2654,
                  "decorators": [],
                  "name": "bind",
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
                  "start": 2655,
                  "end": 2656,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2692,
      "end": 2809,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2698,
        "end": 2701,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2701,
        "end": 2722,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2702,
            "end": 2721,
            "name": {
              "type": "Identifier",
              "start": 2702,
              "end": 2703,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2712,
              "end": 2721,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2712,
                "end": 2719
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2723,
        "end": 2809,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2729,
            "end": 2778,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2729,
              "end": 2740,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2740,
              "end": 2778,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2743,
                "end": 2778,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2753,
                    "end": 2772,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2753,
                      "end": 2771,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2753,
                        "end": 2765,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2753,
                          "end": 2760,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2753,
                            "end": 2757
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2758,
                            "end": 2760,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2761,
                          "end": 2765,
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2766,
                          "end": 2770
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2784,
            "end": 2807,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2786,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2786,
              "end": 2807,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2787,
                  "end": 2797,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2790,
                    "end": 2794,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2794,
                    "end": 2797,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2796,
                      "end": 2797,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2796,
                        "end": 2797,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2798,
                "end": 2804,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2800,
                  "end": 2804
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 2805,
                "end": 2807,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2811,
      "end": 2961,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2817,
        "end": 2820,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2820,
        "end": 2837,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2821,
            "end": 2836,
            "name": {
              "type": "Identifier",
              "start": 2821,
              "end": 2822,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 2831,
              "end": 2836,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 2831,
                  "end": 2832,
                  "literal": {
                    "type": "Literal",
                    "start": 2831,
                    "end": 2832,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2835,
                  "end": 2836,
                  "literal": {
                    "type": "Literal",
                    "start": 2835,
                    "end": 2836,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2838,
        "end": 2961,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2844,
            "end": 2893,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2844,
              "end": 2855,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2855,
              "end": 2893,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2858,
                "end": 2893,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2868,
                    "end": 2887,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2868,
                      "end": 2886,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2868,
                        "end": 2880,
                        "object": {
                          "type": "MemberExpression",
                          "start": 2868,
                          "end": 2875,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2868,
                            "end": 2872
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2873,
                            "end": 2875,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2876,
                          "end": 2880,
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2881,
                          "end": 2885
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2899,
            "end": 2959,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2899,
              "end": 2901,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2901,
              "end": 2959,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2902,
                  "end": 2955,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2905,
                    "end": 2909,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2909,
                    "end": 2955,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 2911,
                      "end": 2955,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 2911,
                        "end": 2912,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2911,
                          "end": 2912,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "start": 2921,
                        "end": 2922,
                        "literal": {
                          "type": "Literal",
                          "start": 2921,
                          "end": 2922,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "start": 2925,
                        "end": 2934,
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2926,
                            "end": 2933
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSTupleType",
                        "start": 2937,
                        "end": 2955,
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2938,
                            "end": 2945
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2947,
                            "end": 2954
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2957,
                "end": 2959,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
