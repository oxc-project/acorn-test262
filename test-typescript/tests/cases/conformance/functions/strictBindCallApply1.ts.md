__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2962,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
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
          "start": 21,
          "end": 30,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 50,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 44,
          "end": 50
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 80,
        "name": "overloaded",
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
          "start": 81,
          "end": 90,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 90,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 84,
              "end": 90
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 91,
        "end": 99,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 93,
          "end": 99
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 101,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "name": "overloaded",
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
          "start": 129,
          "end": 138,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 132,
              "end": 138
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 147,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 141,
          "end": 147
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 174,
        "name": "generic",
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
          "start": 178,
          "end": 182,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 196,
            "name": "f00",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "name": "bind",
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
                "start": 208,
                "end": 217,
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
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "name": "f01",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 234,
                "end": 238,
                "name": "bind",
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
                "start": 239,
                "end": 248,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 250,
                "end": 252,
                "value": 10,
                "raw": "10"
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
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "name": "f02",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "name": "bind",
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
                "start": 274,
                "end": 283,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 306,
            "name": "f03",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "name": "bind",
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
                "start": 318,
                "end": 327,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 356,
            "name": "f04",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "overloaded",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 370,
                "end": 374,
                "name": "bind",
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
                "start": 375,
                "end": 384,
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
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 416,
            "name": "f05",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "generic",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 427,
                "end": 431,
                "name": "bind",
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
                "start": 432,
                "end": 441,
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
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 471,
            "name": "c00",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 482,
                "name": "call",
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
                "start": 483,
                "end": 492,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 515,
            "name": "c01",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 526,
                "name": "call",
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
                "start": 527,
                "end": 536,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 538,
                "end": 540,
                "value": 10,
                "raw": "10"
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
    {
      "type": "VariableDeclaration",
      "start": 553,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 560,
            "name": "c02",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 567,
                "end": 571,
                "name": "call",
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
                "start": 572,
                "end": 581,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 602,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 609,
            "name": "c03",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 620,
                "name": "call",
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
                "start": 621,
                "end": 630,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 661,
      "end": 707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 668,
            "name": "a00",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 675,
                "end": 680,
                "name": "apply",
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
                "start": 681,
                "end": 690,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 715,
            "name": "a01",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 722,
                "end": 727,
                "name": "apply",
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
                "start": 728,
                "end": 737,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 756,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 796,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 763,
            "name": "a02",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 770,
                "end": 775,
                "name": "apply",
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
                "start": 776,
                "end": 785,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 808,
      "end": 858,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 857,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 815,
            "name": "a03",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 822,
                "end": 827,
                "name": "apply",
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
                "start": 828,
                "end": 837,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 870,
      "end": 1147,
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 877,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 878,
        "end": 1147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 884,
            "end": 920,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 895,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 895,
              "end": 920,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 896,
                  "end": 905,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 897,
                    "end": 905,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 907,
                  "end": 916,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 908,
                    "end": 916,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 910,
                      "end": 916
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 918,
                "end": 920,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 984,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 928,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 928,
              "end": 984,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 929,
                  "end": 939,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 939,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 935,
                      "end": 939
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 941,
                  "end": 950,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 942,
                    "end": 950,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 944,
                      "end": 950
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 952,
                  "end": 961,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 953,
                    "end": 961,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 955,
                      "end": 961
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 962,
                "end": 970,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 964,
                  "end": 970
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 989,
            "end": 1019,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 999,
              "name": "overloaded",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 999,
              "end": 1019,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1009,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1001,
                    "end": 1009,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1003,
                      "end": 1009
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1010,
                "end": 1018,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1012,
                  "end": 1018
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1024,
            "end": 1054,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1024,
              "end": 1034,
              "name": "overloaded",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1034,
              "end": 1054,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1044,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1036,
                    "end": 1044,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1038,
                      "end": 1044
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1045,
                "end": 1053,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1047,
                  "end": 1053
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1059,
            "end": 1108,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1059,
              "end": 1069,
              "name": "overloaded",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1069,
              "end": 1108,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1076,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1071,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1073,
                      "end": 1076
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "expression": {
                        "type": "Identifier",
                        "start": 1097,
                        "end": 1106,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1093,
                        "end": 1096
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1077,
                "end": 1082,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1079,
                  "end": 1082
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1113,
            "end": 1145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1113,
              "end": 1120,
              "name": "generic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1120,
              "end": 1145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1128,
                  "name": "x",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1149,
      "end": 1166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1161,
          "end": 1165,
          "id": {
            "type": "Identifier",
            "start": 1161,
            "end": 1165,
            "name": "c",
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1167,
      "end": 1187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1179,
          "end": 1186,
          "id": {
            "type": "Identifier",
            "start": 1179,
            "end": 1186,
            "name": "obj",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1189,
      "end": 1213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1193,
          "end": 1212,
          "id": {
            "type": "Identifier",
            "start": 1193,
            "end": 1196,
            "name": "f10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1204,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1205,
                "end": 1209,
                "name": "bind",
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
                "start": 1210,
                "end": 1211,
                "name": "c",
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
    {
      "type": "VariableDeclaration",
      "start": 1214,
      "end": 1242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1218,
          "end": 1241,
          "id": {
            "type": "Identifier",
            "start": 1218,
            "end": 1221,
            "name": "f11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1229,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1230,
                "end": 1234,
                "name": "bind",
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
                "start": 1235,
                "end": 1236,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1238,
                "end": 1240,
                "value": 10,
                "raw": "10"
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
    {
      "type": "VariableDeclaration",
      "start": 1243,
      "end": 1280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1247,
          "end": 1279,
          "id": {
            "type": "Identifier",
            "start": 1247,
            "end": 1250,
            "name": "f12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1258,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1259,
                "end": 1263,
                "name": "bind",
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
                "start": 1264,
                "end": 1265,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1281,
      "end": 1313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1285,
          "end": 1312,
          "id": {
            "type": "Identifier",
            "start": 1285,
            "end": 1288,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1293,
                  "end": 1296,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1297,
                "end": 1301,
                "name": "bind",
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
                "start": 1302,
                "end": 1303,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1324,
      "end": 1356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1328,
          "end": 1355,
          "id": {
            "type": "Identifier",
            "start": 1328,
            "end": 1331,
            "name": "f14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1339,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1340,
                "end": 1344,
                "name": "bind",
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
                "start": 1345,
                "end": 1354,
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
    {
      "type": "VariableDeclaration",
      "start": 1368,
      "end": 1399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1372,
          "end": 1398,
          "id": {
            "type": "Identifier",
            "start": 1372,
            "end": 1375,
            "name": "f15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1390,
                  "name": "overloaded",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1391,
                "end": 1395,
                "name": "bind",
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
                "start": 1396,
                "end": 1397,
                "name": "c",
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
    {
      "type": "VariableDeclaration",
      "start": 1434,
      "end": 1462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1438,
          "end": 1461,
          "id": {
            "type": "Identifier",
            "start": 1438,
            "end": 1441,
            "name": "f16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1453,
                  "name": "generic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1454,
                "end": 1458,
                "name": "bind",
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
                "start": 1459,
                "end": 1460,
                "name": "c",
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
    {
      "type": "VariableDeclaration",
      "start": 1495,
      "end": 1532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1499,
          "end": 1531,
          "id": {
            "type": "Identifier",
            "start": 1499,
            "end": 1502,
            "name": "c10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1510,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1511,
                "end": 1515,
                "name": "call",
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
                "start": 1516,
                "end": 1517,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1533,
      "end": 1561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1537,
          "end": 1560,
          "id": {
            "type": "Identifier",
            "start": 1537,
            "end": 1540,
            "name": "c11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1548,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1549,
                "end": 1553,
                "name": "call",
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
                "start": 1554,
                "end": 1555,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1557,
                "end": 1559,
                "value": 10,
                "raw": "10"
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
    {
      "type": "VariableDeclaration",
      "start": 1572,
      "end": 1604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1576,
          "end": 1603,
          "id": {
            "type": "Identifier",
            "start": 1576,
            "end": 1579,
            "name": "c12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1587,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1588,
                "end": 1592,
                "name": "call",
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
                "start": 1593,
                "end": 1594,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1615,
      "end": 1656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1619,
          "end": 1655,
          "id": {
            "type": "Identifier",
            "start": 1619,
            "end": 1622,
            "name": "c13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1627,
                  "end": 1630,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1631,
                "end": 1635,
                "name": "call",
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
                "start": 1636,
                "end": 1637,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1667,
      "end": 1712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1671,
          "end": 1711,
          "id": {
            "type": "Identifier",
            "start": 1671,
            "end": 1674,
            "name": "c14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1682,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1683,
                "end": 1687,
                "name": "call",
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
                "start": 1688,
                "end": 1697,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1724,
      "end": 1764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1728,
          "end": 1763,
          "id": {
            "type": "Identifier",
            "start": 1728,
            "end": 1731,
            "name": "a10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1739,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1740,
                "end": 1745,
                "name": "apply",
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
                "start": 1746,
                "end": 1747,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1765,
      "end": 1796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1769,
          "end": 1795,
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1772,
            "name": "a11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1780,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1781,
                "end": 1786,
                "name": "apply",
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
                "start": 1787,
                "end": 1788,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1807,
      "end": 1842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1811,
          "end": 1841,
          "id": {
            "type": "Identifier",
            "start": 1811,
            "end": 1814,
            "name": "a12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1822,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1823,
                "end": 1828,
                "name": "apply",
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
                "start": 1829,
                "end": 1830,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1853,
      "end": 1897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1857,
          "end": 1896,
          "id": {
            "type": "Identifier",
            "start": 1857,
            "end": 1860,
            "name": "a13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1865,
                  "end": 1868,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1869,
                "end": 1874,
                "name": "apply",
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
                "start": 1875,
                "end": 1876,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1908,
      "end": 1956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1912,
          "end": 1955,
          "id": {
            "type": "Identifier",
            "start": 1912,
            "end": 1915,
            "name": "a14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1920,
                  "end": 1923,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1924,
                "end": 1929,
                "name": "apply",
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
                "start": 1930,
                "end": 1939,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1968,
      "end": 1996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1972,
          "end": 1995,
          "id": {
            "type": "Identifier",
            "start": 1972,
            "end": 1975,
            "name": "f20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1980,
                "end": 1984,
                "name": "bind",
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
                "start": 1985,
                "end": 1994,
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
    {
      "type": "VariableDeclaration",
      "start": 1997,
      "end": 2029,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2001,
          "end": 2028,
          "id": {
            "type": "Identifier",
            "start": 2001,
            "end": 2004,
            "name": "f21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2009,
                "end": 2013,
                "name": "bind",
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
                "start": 2014,
                "end": 2023,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2025,
                "end": 2027,
                "value": 10,
                "raw": "10"
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
    {
      "type": "VariableDeclaration",
      "start": 2030,
      "end": 2071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2034,
          "end": 2070,
          "id": {
            "type": "Identifier",
            "start": 2034,
            "end": 2037,
            "name": "f22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2042,
                "end": 2046,
                "name": "bind",
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
                "start": 2047,
                "end": 2056,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2072,
      "end": 2108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2076,
          "end": 2107,
          "id": {
            "type": "Identifier",
            "start": 2076,
            "end": 2079,
            "name": "f23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2084,
                "end": 2088,
                "name": "bind",
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
                "start": 2089,
                "end": 2098,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2122,
            "end": 2126,
            "name": "call",
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
            "start": 2127,
            "end": 2128,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2146,
            "end": 2150,
            "name": "call",
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
            "start": 2151,
            "end": 2152,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 2154,
            "end": 2156,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2171,
            "end": 2175,
            "name": "call",
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
            "start": 2176,
            "end": 2177,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2200,
            "end": 2204,
            "name": "call",
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
            "start": 2205,
            "end": 2206,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2239,
            "end": 2244,
            "name": "apply",
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
            "start": 2245,
            "end": 2246,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2266,
            "end": 2271,
            "name": "apply",
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
            "start": 2272,
            "end": 2273,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2294,
            "end": 2299,
            "name": "apply",
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
            "start": 2300,
            "end": 2301,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2326,
            "end": 2331,
            "name": "apply",
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
            "start": 2332,
            "end": 2333,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "optional": false,
        "typeArguments": null
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
        "name": "bar",
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
          "start": 2400,
          "end": 2439,
          "name": "callback",
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
                  "name": "this",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2420,
                  "end": 2430,
                  "argument": {
                    "type": "Identifier",
                    "start": 2423,
                    "end": 2427,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2456,
                  "end": 2460,
                  "name": "bind",
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
                  "start": 2461,
                  "end": 2462,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2478,
                  "end": 2482,
                  "name": "bind",
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
                  "start": 2483,
                  "end": 2484,
                  "value": 2,
                  "raw": "2"
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2499,
      "end": 2669,
      "id": {
        "type": "Identifier",
        "start": 2508,
        "end": 2511,
        "name": "baz",
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
          "start": 2529,
          "end": 2611,
          "name": "callback",
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
                  "name": "this",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2549,
                  "end": 2602,
                  "argument": {
                    "type": "Identifier",
                    "start": 2552,
                    "end": 2556,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2628,
                  "end": 2632,
                  "name": "bind",
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
                  "start": 2633,
                  "end": 2634,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2650,
                  "end": 2654,
                  "name": "bind",
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
                  "start": 2655,
                  "end": 2656,
                  "value": 2,
                  "raw": "2"
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2692,
      "end": 2809,
      "id": {
        "type": "Identifier",
        "start": 2698,
        "end": 2701,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2723,
        "end": 2809,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2729,
            "end": 2778,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2729,
              "end": 2740,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2740,
              "end": 2778,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "fn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2761,
                          "end": 2765,
                          "name": "bind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2766,
                          "end": 2770
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2784,
            "end": 2807,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2786,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2786,
              "end": 2807,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2787,
                  "end": 2797,
                  "argument": {
                    "type": "Identifier",
                    "start": 2790,
                    "end": 2794,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2805,
                "end": 2807,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2798,
                "end": 2804,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2800,
                  "end": 2804
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2811,
      "end": 2961,
      "id": {
        "type": "Identifier",
        "start": 2817,
        "end": 2820,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2838,
        "end": 2961,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2844,
            "end": 2893,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2844,
              "end": 2855,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2855,
              "end": 2893,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "fn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2876,
                          "end": 2880,
                          "name": "bind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2881,
                          "end": 2885
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2899,
            "end": 2959,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2899,
              "end": 2901,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2901,
              "end": 2959,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2902,
                  "end": 2955,
                  "argument": {
                    "type": "Identifier",
                    "start": 2905,
                    "end": 2909,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              "body": {
                "type": "BlockStatement",
                "start": 2957,
                "end": 2959,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
