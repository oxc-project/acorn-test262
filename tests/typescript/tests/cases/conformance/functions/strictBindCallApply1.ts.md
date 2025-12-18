__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            },
            "start": 33,
            "end": 41
          },
          "start": 32,
          "end": 41
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 44,
          "end": 50
        },
        "start": 42,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 84,
              "end": 90
            },
            "start": 82,
            "end": 90
          },
          "start": 81,
          "end": 90
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 93,
          "end": 99
        },
        "start": 91,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 132,
              "end": 138
            },
            "start": 130,
            "end": 138
          },
          "start": 129,
          "end": 138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 141,
          "end": 147
        },
        "start": 139,
        "end": 147
      },
      "body": null,
      "expression": false,
      "start": 101,
      "end": 148
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 174
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          }
        ],
        "start": 174,
        "end": 177
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 182
              },
              "typeArguments": null,
              "start": 181,
              "end": 182
            },
            "start": 179,
            "end": 182
          },
          "start": 178,
          "end": 182
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "typeArguments": null,
          "start": 185,
          "end": 186
        },
        "start": 183,
        "end": 186
      },
      "body": null,
      "expression": false,
      "start": 150,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f00",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 199,
              "end": 207
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 217
              }
            ],
            "optional": false,
            "start": 199,
            "end": 218
          },
          "definite": false,
          "start": 193,
          "end": 218
        }
      ],
      "declare": false,
      "start": 189,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f01",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 238
              },
              "optional": false,
              "computed": false,
              "start": 230,
              "end": 238
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 248
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 250,
                "end": 252
              }
            ],
            "optional": false,
            "start": 230,
            "end": 253
          },
          "definite": false,
          "start": 224,
          "end": 253
        }
      ],
      "declare": false,
      "start": 220,
      "end": 254
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f02",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 265,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 283
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 285,
                "end": 287
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 289,
                "end": 296
              }
            ],
            "optional": false,
            "start": 265,
            "end": 297
          },
          "definite": false,
          "start": 259,
          "end": 297
        }
      ],
      "declare": false,
      "start": 255,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f03",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 312
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 309,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 327
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 329,
                "end": 331
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 333,
                "end": 335
              }
            ],
            "optional": false,
            "start": 309,
            "end": 336
          },
          "definite": false,
          "start": 303,
          "end": 336
        }
      ],
      "declare": false,
      "start": 299,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f04",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "overloaded",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 369
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 374
              },
              "optional": false,
              "computed": false,
              "start": 359,
              "end": 374
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 384
              }
            ],
            "optional": false,
            "start": 359,
            "end": 385
          },
          "definite": false,
          "start": 353,
          "end": 385
        }
      ],
      "declare": false,
      "start": 349,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f05",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 416
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 426
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 431
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 441
              }
            ],
            "optional": false,
            "start": 419,
            "end": 442
          },
          "definite": false,
          "start": 413,
          "end": 442
        }
      ],
      "declare": false,
      "start": 409,
      "end": 443
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c00",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 471
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 482
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 482
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 492
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 494,
                "end": 496
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 498,
                "end": 505
              }
            ],
            "optional": false,
            "start": 474,
            "end": 506
          },
          "definite": false,
          "start": 468,
          "end": 506
        }
      ],
      "declare": false,
      "start": 464,
      "end": 507
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c01",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 515
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 526
              },
              "optional": false,
              "computed": false,
              "start": 518,
              "end": 526
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 536
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 538,
                "end": 540
              }
            ],
            "optional": false,
            "start": 518,
            "end": 541
          },
          "definite": false,
          "start": 512,
          "end": 541
        }
      ],
      "declare": false,
      "start": 508,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c02",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 560
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 566
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 571
              },
              "optional": false,
              "computed": false,
              "start": 563,
              "end": 571
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 581
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 583,
                "end": 585
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 587,
                "end": 589
              }
            ],
            "optional": false,
            "start": 563,
            "end": 590
          },
          "definite": false,
          "start": 557,
          "end": 590
        }
      ],
      "declare": false,
      "start": 553,
      "end": 591
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c03",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 615
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 620
              },
              "optional": false,
              "computed": false,
              "start": 612,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 630
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 632,
                "end": 634
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 636,
                "end": 643
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 645,
                "end": 647
              }
            ],
            "optional": false,
            "start": 612,
            "end": 648
          },
          "definite": false,
          "start": 606,
          "end": 648
        }
      ],
      "declare": false,
      "start": 602,
      "end": 649
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a00",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 680
              },
              "optional": false,
              "computed": false,
              "start": 671,
              "end": 680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 690
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 693,
                    "end": 695
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 697,
                    "end": 704
                  }
                ],
                "start": 692,
                "end": 705
              }
            ],
            "optional": false,
            "start": 671,
            "end": 706
          },
          "definite": false,
          "start": 665,
          "end": 706
        }
      ],
      "declare": false,
      "start": 661,
      "end": 707
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a01",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 715
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 727
              },
              "optional": false,
              "computed": false,
              "start": 718,
              "end": 727
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 737
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 740,
                    "end": 742
                  }
                ],
                "start": 739,
                "end": 743
              }
            ],
            "optional": false,
            "start": 718,
            "end": 744
          },
          "definite": false,
          "start": 712,
          "end": 744
        }
      ],
      "declare": false,
      "start": 708,
      "end": 745
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a02",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 763
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 769
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 775
              },
              "optional": false,
              "computed": false,
              "start": 766,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 785
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 788,
                    "end": 790
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 792,
                    "end": 794
                  }
                ],
                "start": 787,
                "end": 795
              }
            ],
            "optional": false,
            "start": 766,
            "end": 796
          },
          "definite": false,
          "start": 760,
          "end": 796
        }
      ],
      "declare": false,
      "start": 756,
      "end": 797
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a03",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 821
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 827
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 827
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 837
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 840,
                    "end": 842
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 844,
                    "end": 851
                  },
                  {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 853,
                    "end": 855
                  }
                ],
                "start": 839,
                "end": 856
              }
            ],
            "optional": false,
            "start": 818,
            "end": 857
          },
          "definite": false,
          "start": 812,
          "end": 857
        }
      ],
      "declare": false,
      "start": 808,
      "end": 858
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 877
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 895
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    },
                    "start": 897,
                    "end": 905
                  },
                  "start": 896,
                  "end": 905
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 910,
                      "end": 916
                    },
                    "start": 908,
                    "end": 916
                  },
                  "start": 907,
                  "end": 916
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 918,
                "end": 920
              },
              "expression": false,
              "start": 895,
              "end": 920
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 884,
            "end": 920
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 928
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 935,
                      "end": 939
                    },
                    "start": 933,
                    "end": 939
                  },
                  "start": 929,
                  "end": 939
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 944,
                      "end": 950
                    },
                    "start": 942,
                    "end": 950
                  },
                  "start": 941,
                  "end": 950
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 955,
                      "end": 961
                    },
                    "start": 953,
                    "end": 961
                  },
                  "start": 952,
                  "end": 961
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 964,
                  "end": 970
                },
                "start": 962,
                "end": 970
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 980,
                      "end": 982
                    },
                    "start": 973,
                    "end": 982
                  }
                ],
                "start": 971,
                "end": 984
              },
              "expression": false,
              "start": 928,
              "end": 984
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 925,
            "end": 984
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 999
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1003,
                      "end": 1009
                    },
                    "start": 1001,
                    "end": 1009
                  },
                  "start": 1000,
                  "end": 1009
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1012,
                  "end": 1018
                },
                "start": 1010,
                "end": 1018
              },
              "body": null,
              "expression": false,
              "start": 999,
              "end": 1019
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 989,
            "end": 1019
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1034
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1038,
                      "end": 1044
                    },
                    "start": 1036,
                    "end": 1044
                  },
                  "start": 1035,
                  "end": 1044
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1047,
                  "end": 1053
                },
                "start": 1045,
                "end": 1053
              },
              "body": null,
              "expression": false,
              "start": 1034,
              "end": 1054
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1024,
            "end": 1054
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1069
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1073,
                      "end": 1076
                    },
                    "start": 1071,
                    "end": 1076
                  },
                  "start": 1070,
                  "end": 1076
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1079,
                  "end": 1082
                },
                "start": 1077,
                "end": 1082
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1093,
                        "end": 1096
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1106
                      },
                      "start": 1092,
                      "end": 1106
                    },
                    "start": 1085,
                    "end": 1106
                  }
                ],
                "start": 1083,
                "end": 1108
              },
              "expression": false,
              "start": 1069,
              "end": 1108
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1059,
            "end": 1108
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1120
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1122
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1121,
                    "end": 1122
                  }
                ],
                "start": 1120,
                "end": 1123
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1128
                      },
                      "typeArguments": null,
                      "start": 1127,
                      "end": 1128
                    },
                    "start": 1125,
                    "end": 1128
                  },
                  "start": 1124,
                  "end": 1128
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1131,
                    "end": 1132
                  },
                  "typeArguments": null,
                  "start": 1131,
                  "end": 1132
                },
                "start": 1129,
                "end": 1132
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1143
                    },
                    "start": 1135,
                    "end": 1143
                  }
                ],
                "start": 1133,
                "end": 1145
              },
              "expression": false,
              "start": 1120,
              "end": 1145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1113,
            "end": 1145
          }
        ],
        "start": 878,
        "end": 1147
      },
      "abstract": false,
      "declare": false,
      "start": 870,
      "end": 1147
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1164,
                "end": 1165
              },
              "start": 1162,
              "end": 1165
            },
            "start": 1161,
            "end": 1165
          },
          "init": null,
          "definite": false,
          "start": 1161,
          "end": 1165
        }
      ],
      "declare": true,
      "start": 1149,
      "end": 1166
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1184,
                "end": 1186
              },
              "start": 1182,
              "end": 1186
            },
            "start": 1179,
            "end": 1186
          },
          "init": null,
          "definite": false,
          "start": 1179,
          "end": 1186
        }
      ],
      "declare": true,
      "start": 1167,
      "end": 1187
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1204
                },
                "optional": false,
                "computed": false,
                "start": 1199,
                "end": 1204
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1209
              },
              "optional": false,
              "computed": false,
              "start": 1199,
              "end": 1209
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1210,
                "end": 1211
              }
            ],
            "optional": false,
            "start": 1199,
            "end": 1212
          },
          "definite": false,
          "start": 1193,
          "end": 1212
        }
      ],
      "declare": false,
      "start": 1189,
      "end": 1213
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1225
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1229
                },
                "optional": false,
                "computed": false,
                "start": 1224,
                "end": 1229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1234
              },
              "optional": false,
              "computed": false,
              "start": 1224,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1236
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1238,
                "end": 1240
              }
            ],
            "optional": false,
            "start": 1224,
            "end": 1241
          },
          "definite": false,
          "start": 1218,
          "end": 1241
        }
      ],
      "declare": false,
      "start": 1214,
      "end": 1242
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1247,
            "end": 1250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1253,
                  "end": 1254
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1258
                },
                "optional": false,
                "computed": false,
                "start": 1253,
                "end": 1258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1259,
                "end": 1263
              },
              "optional": false,
              "computed": false,
              "start": 1253,
              "end": 1263
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1265
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1267,
                "end": 1269
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1271,
                "end": 1278
              }
            ],
            "optional": false,
            "start": 1253,
            "end": 1279
          },
          "definite": false,
          "start": 1247,
          "end": 1279
        }
      ],
      "declare": false,
      "start": 1243,
      "end": 1280
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1285,
            "end": 1288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1292
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1293,
                  "end": 1296
                },
                "optional": false,
                "computed": false,
                "start": 1291,
                "end": 1296
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1301
              },
              "optional": false,
              "computed": false,
              "start": 1291,
              "end": 1301
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1303
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1305,
                "end": 1307
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1309,
                "end": 1311
              }
            ],
            "optional": false,
            "start": 1291,
            "end": 1312
          },
          "definite": false,
          "start": 1285,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1281,
      "end": 1313
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1334,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1334,
                "end": 1339
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1344
              },
              "optional": false,
              "computed": false,
              "start": 1334,
              "end": 1344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1354
              }
            ],
            "optional": false,
            "start": 1334,
            "end": 1355
          },
          "definite": false,
          "start": 1328,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1324,
      "end": 1356
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "overloaded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1390
                },
                "optional": false,
                "computed": false,
                "start": 1378,
                "end": 1390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1395
              },
              "optional": false,
              "computed": false,
              "start": 1378,
              "end": 1395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1397
              }
            ],
            "optional": false,
            "start": 1378,
            "end": 1398
          },
          "definite": false,
          "start": 1372,
          "end": 1398
        }
      ],
      "declare": false,
      "start": 1368,
      "end": 1399
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1438,
            "end": 1441
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1453
                },
                "optional": false,
                "computed": false,
                "start": 1444,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1458
              },
              "optional": false,
              "computed": false,
              "start": 1444,
              "end": 1458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1460
              }
            ],
            "optional": false,
            "start": 1444,
            "end": 1461
          },
          "definite": false,
          "start": 1438,
          "end": 1461
        }
      ],
      "declare": false,
      "start": 1434,
      "end": 1462
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1502
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1505,
                  "end": 1506
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1510
                },
                "optional": false,
                "computed": false,
                "start": 1505,
                "end": 1510
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1511,
                "end": 1515
              },
              "optional": false,
              "computed": false,
              "start": 1505,
              "end": 1515
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1516,
                "end": 1517
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1519,
                "end": 1521
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1523,
                "end": 1530
              }
            ],
            "optional": false,
            "start": 1505,
            "end": 1531
          },
          "definite": false,
          "start": 1499,
          "end": 1531
        }
      ],
      "declare": false,
      "start": 1495,
      "end": 1532
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1537,
            "end": 1540
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1544
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1548
                },
                "optional": false,
                "computed": false,
                "start": 1543,
                "end": 1548
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1549,
                "end": 1553
              },
              "optional": false,
              "computed": false,
              "start": 1543,
              "end": 1553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1557,
                "end": 1559
              }
            ],
            "optional": false,
            "start": 1543,
            "end": 1560
          },
          "definite": false,
          "start": 1537,
          "end": 1560
        }
      ],
      "declare": false,
      "start": 1533,
      "end": 1561
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1576,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1587
                },
                "optional": false,
                "computed": false,
                "start": 1582,
                "end": 1587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1592
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1592
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1596,
                "end": 1598
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1600,
                "end": 1602
              }
            ],
            "optional": false,
            "start": 1582,
            "end": 1603
          },
          "definite": false,
          "start": 1576,
          "end": 1603
        }
      ],
      "declare": false,
      "start": 1572,
      "end": 1604
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1619,
            "end": 1622
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1625,
                  "end": 1626
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1627,
                  "end": 1630
                },
                "optional": false,
                "computed": false,
                "start": 1625,
                "end": 1630
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1635
              },
              "optional": false,
              "computed": false,
              "start": 1625,
              "end": 1635
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1637
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1639,
                "end": 1641
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1643,
                "end": 1650
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 1652,
                "end": 1654
              }
            ],
            "optional": false,
            "start": 1625,
            "end": 1655
          },
          "definite": false,
          "start": 1619,
          "end": 1655
        }
      ],
      "declare": false,
      "start": 1615,
      "end": 1656
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1674
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1678
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1679,
                  "end": 1682
                },
                "optional": false,
                "computed": false,
                "start": 1677,
                "end": 1682
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1683,
                "end": 1687
              },
              "optional": false,
              "computed": false,
              "start": 1677,
              "end": 1687
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1688,
                "end": 1697
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1699,
                "end": 1701
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1703,
                "end": 1710
              }
            ],
            "optional": false,
            "start": 1677,
            "end": 1711
          },
          "definite": false,
          "start": 1671,
          "end": 1711
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1712
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1728,
            "end": 1731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1734,
                  "end": 1735
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1739
                },
                "optional": false,
                "computed": false,
                "start": 1734,
                "end": 1739
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1745
              },
              "optional": false,
              "computed": false,
              "start": 1734,
              "end": 1745
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1746,
                "end": 1747
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1750,
                    "end": 1752
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1754,
                    "end": 1761
                  }
                ],
                "start": 1749,
                "end": 1762
              }
            ],
            "optional": false,
            "start": 1734,
            "end": 1763
          },
          "definite": false,
          "start": 1728,
          "end": 1763
        }
      ],
      "declare": false,
      "start": 1724,
      "end": 1764
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1772
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1776
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1780
                },
                "optional": false,
                "computed": false,
                "start": 1775,
                "end": 1780
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1786
              },
              "optional": false,
              "computed": false,
              "start": 1775,
              "end": 1786
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1791,
                    "end": 1793
                  }
                ],
                "start": 1790,
                "end": 1794
              }
            ],
            "optional": false,
            "start": 1775,
            "end": 1795
          },
          "definite": false,
          "start": 1769,
          "end": 1795
        }
      ],
      "declare": false,
      "start": 1765,
      "end": 1796
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1814
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1817,
                  "end": 1818
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1822
                },
                "optional": false,
                "computed": false,
                "start": 1817,
                "end": 1822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1823,
                "end": 1828
              },
              "optional": false,
              "computed": false,
              "start": 1817,
              "end": 1828
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1833,
                    "end": 1835
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 1837,
                    "end": 1839
                  }
                ],
                "start": 1832,
                "end": 1840
              }
            ],
            "optional": false,
            "start": 1817,
            "end": 1841
          },
          "definite": false,
          "start": 1811,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1807,
      "end": 1842
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1857,
            "end": 1860
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1863,
                  "end": 1864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1865,
                  "end": 1868
                },
                "optional": false,
                "computed": false,
                "start": 1863,
                "end": 1868
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1869,
                "end": 1874
              },
              "optional": false,
              "computed": false,
              "start": 1863,
              "end": 1874
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1876
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1879,
                    "end": 1881
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1883,
                    "end": 1890
                  },
                  {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 1892,
                    "end": 1894
                  }
                ],
                "start": 1878,
                "end": 1895
              }
            ],
            "optional": false,
            "start": 1863,
            "end": 1896
          },
          "definite": false,
          "start": 1857,
          "end": 1896
        }
      ],
      "declare": false,
      "start": 1853,
      "end": 1897
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1912,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1919
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1920,
                  "end": 1923
                },
                "optional": false,
                "computed": false,
                "start": 1918,
                "end": 1923
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1929
              },
              "optional": false,
              "computed": false,
              "start": 1918,
              "end": 1929
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1930,
                "end": 1939
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1942,
                    "end": 1944
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1946,
                    "end": 1953
                  }
                ],
                "start": 1941,
                "end": 1954
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 1955
          },
          "definite": false,
          "start": 1912,
          "end": 1955
        }
      ],
      "declare": false,
      "start": 1908,
      "end": 1956
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1972,
            "end": 1975
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1979
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1980,
                "end": 1984
              },
              "optional": false,
              "computed": false,
              "start": 1978,
              "end": 1984
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1985,
                "end": 1994
              }
            ],
            "optional": false,
            "start": 1978,
            "end": 1995
          },
          "definite": false,
          "start": 1972,
          "end": 1995
        }
      ],
      "declare": false,
      "start": 1968,
      "end": 1996
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2001,
            "end": 2004
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2007,
                "end": 2008
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2009,
                "end": 2013
              },
              "optional": false,
              "computed": false,
              "start": 2007,
              "end": 2013
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2014,
                "end": 2023
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2025,
                "end": 2027
              }
            ],
            "optional": false,
            "start": 2007,
            "end": 2028
          },
          "definite": false,
          "start": 2001,
          "end": 2028
        }
      ],
      "declare": false,
      "start": 1997,
      "end": 2029
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2034,
            "end": 2037
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2041
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2042,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2040,
              "end": 2046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2047,
                "end": 2056
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2058,
                "end": 2060
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2062,
                "end": 2069
              }
            ],
            "optional": false,
            "start": 2040,
            "end": 2070
          },
          "definite": false,
          "start": 2034,
          "end": 2070
        }
      ],
      "declare": false,
      "start": 2030,
      "end": 2071
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2076,
            "end": 2079
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2083
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2084,
                "end": 2088
              },
              "optional": false,
              "computed": false,
              "start": 2082,
              "end": 2088
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2089,
                "end": 2098
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2100,
                "end": 2102
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2104,
                "end": 2106
              }
            ],
            "optional": false,
            "start": 2082,
            "end": 2107
          },
          "definite": false,
          "start": 2076,
          "end": 2107
        }
      ],
      "declare": false,
      "start": 2072,
      "end": 2108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2120,
            "end": 2121
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2122,
            "end": 2126
          },
          "optional": false,
          "computed": false,
          "start": 2120,
          "end": 2126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2127,
            "end": 2128
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2130,
            "end": 2132
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2134,
            "end": 2141
          }
        ],
        "optional": false,
        "start": 2120,
        "end": 2142
      },
      "directive": null,
      "start": 2120,
      "end": 2143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2144,
            "end": 2145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2150
          },
          "optional": false,
          "computed": false,
          "start": 2144,
          "end": 2150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2151,
            "end": 2152
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2154,
            "end": 2156
          }
        ],
        "optional": false,
        "start": 2144,
        "end": 2157
      },
      "directive": null,
      "start": 2144,
      "end": 2158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2169,
            "end": 2170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2171,
            "end": 2175
          },
          "optional": false,
          "computed": false,
          "start": 2169,
          "end": 2175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2176,
            "end": 2177
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2179,
            "end": 2181
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 2183,
            "end": 2185
          }
        ],
        "optional": false,
        "start": 2169,
        "end": 2186
      },
      "directive": null,
      "start": 2169,
      "end": 2187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2198,
            "end": 2199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2200,
            "end": 2204
          },
          "optional": false,
          "computed": false,
          "start": 2198,
          "end": 2204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2205,
            "end": 2206
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2208,
            "end": 2210
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2212,
            "end": 2219
          },
          {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 2221,
            "end": 2223
          }
        ],
        "optional": false,
        "start": 2198,
        "end": 2224
      },
      "directive": null,
      "start": 2198,
      "end": 2225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2237,
            "end": 2238
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2239,
            "end": 2244
          },
          "optional": false,
          "computed": false,
          "start": 2237,
          "end": 2244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2245,
            "end": 2246
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2249,
                "end": 2251
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2253,
                "end": 2260
              }
            ],
            "start": 2248,
            "end": 2261
          }
        ],
        "optional": false,
        "start": 2237,
        "end": 2262
      },
      "directive": null,
      "start": 2237,
      "end": 2263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2264,
            "end": 2265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2266,
            "end": 2271
          },
          "optional": false,
          "computed": false,
          "start": 2264,
          "end": 2271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2272,
            "end": 2273
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2276,
                "end": 2278
              }
            ],
            "start": 2275,
            "end": 2279
          }
        ],
        "optional": false,
        "start": 2264,
        "end": 2280
      },
      "directive": null,
      "start": 2264,
      "end": 2281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2292,
            "end": 2293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2294,
            "end": 2299
          },
          "optional": false,
          "computed": false,
          "start": 2292,
          "end": 2299
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2301
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2304,
                "end": 2306
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2308,
                "end": 2310
              }
            ],
            "start": 2303,
            "end": 2311
          }
        ],
        "optional": false,
        "start": 2292,
        "end": 2312
      },
      "directive": null,
      "start": 2292,
      "end": 2313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2324,
            "end": 2325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2331
          },
          "optional": false,
          "computed": false,
          "start": 2324,
          "end": 2331
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2332,
            "end": 2333
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2336,
                "end": 2338
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2340,
                "end": 2347
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 2349,
                "end": 2351
              }
            ],
            "start": 2335,
            "end": 2352
          }
        ],
        "optional": false,
        "start": 2324,
        "end": 2353
      },
      "directive": null,
      "start": 2324,
      "end": 2354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2375,
        "end": 2378
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2379,
              "end": 2380
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2389,
                "end": 2396
              },
              "start": 2389,
              "end": 2398
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2379,
            "end": 2398
          }
        ],
        "start": 2378,
        "end": 2399
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2417,
                        "end": 2418
                      },
                      "start": 2417,
                      "end": 2418
                    },
                    "start": 2415,
                    "end": 2418
                  },
                  "start": 2411,
                  "end": 2418
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2423,
                    "end": 2427
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2429,
                        "end": 2430
                      },
                      "typeArguments": null,
                      "start": 2429,
                      "end": 2430
                    },
                    "start": 2427,
                    "end": 2430
                  },
                  "value": null,
                  "start": 2420,
                  "end": 2430
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2435,
                  "end": 2439
                },
                "start": 2432,
                "end": 2439
              },
              "start": 2410,
              "end": 2439
            },
            "start": 2408,
            "end": 2439
          },
          "start": 2400,
          "end": 2439
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2455
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2456,
                  "end": 2460
                },
                "optional": false,
                "computed": false,
                "start": 2447,
                "end": 2460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2461,
                  "end": 2462
                }
              ],
              "optional": false,
              "start": 2447,
              "end": 2463
            },
            "directive": null,
            "start": 2447,
            "end": 2464
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2477
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2482
                },
                "optional": false,
                "computed": false,
                "start": 2469,
                "end": 2482
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2483,
                  "end": 2484
                }
              ],
              "optional": false,
              "start": 2469,
              "end": 2485
            },
            "directive": null,
            "start": 2469,
            "end": 2486
          }
        ],
        "start": 2441,
        "end": 2497
      },
      "expression": false,
      "start": 2366,
      "end": 2497
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2508,
        "end": 2511
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2512,
              "end": 2513
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2522,
                    "end": 2523
                  },
                  "start": 2522,
                  "end": 2523
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2526,
                    "end": 2527
                  },
                  "start": 2526,
                  "end": 2527
                }
              ],
              "start": 2522,
              "end": 2527
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2512,
            "end": 2527
          }
        ],
        "start": 2511,
        "end": 2528
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2546,
                        "end": 2547
                      },
                      "start": 2546,
                      "end": 2547
                    },
                    "start": 2544,
                    "end": 2547
                  },
                  "start": 2540,
                  "end": 2547
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2556
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2558,
                          "end": 2559
                        },
                        "typeArguments": null,
                        "start": 2558,
                        "end": 2559
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2568,
                          "end": 2569
                        },
                        "start": 2568,
                        "end": 2569
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2573,
                            "end": 2580
                          }
                        ],
                        "start": 2572,
                        "end": 2581
                      },
                      "falseType": {
                        "type": "TSTupleType",
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
                        ],
                        "start": 2584,
                        "end": 2602
                      },
                      "start": 2558,
                      "end": 2602
                    },
                    "start": 2556,
                    "end": 2602
                  },
                  "value": null,
                  "start": 2549,
                  "end": 2602
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2607,
                  "end": 2611
                },
                "start": 2604,
                "end": 2611
              },
              "start": 2539,
              "end": 2611
            },
            "start": 2537,
            "end": 2611
          },
          "start": 2529,
          "end": 2611
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2619,
                  "end": 2627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2628,
                  "end": 2632
                },
                "optional": false,
                "computed": false,
                "start": 2619,
                "end": 2632
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2633,
                  "end": 2634
                }
              ],
              "optional": false,
              "start": 2619,
              "end": 2635
            },
            "directive": null,
            "start": 2619,
            "end": 2636
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2641,
                  "end": 2649
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2650,
                  "end": 2654
                },
                "optional": false,
                "computed": false,
                "start": 2641,
                "end": 2654
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2655,
                  "end": 2656
                }
              ],
              "optional": false,
              "start": 2641,
              "end": 2657
            },
            "directive": null,
            "start": 2641,
            "end": 2658
          }
        ],
        "start": 2613,
        "end": 2669
      },
      "expression": false,
      "start": 2499,
      "end": 2669
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2698,
        "end": 2701
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2702,
              "end": 2703
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2712,
                "end": 2719
              },
              "start": 2712,
              "end": 2721
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2702,
            "end": 2721
          }
        ],
        "start": 2701,
        "end": 2722
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2729,
              "end": 2740
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2753,
                            "end": 2757
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2758,
                            "end": 2760
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2753,
                          "end": 2760
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2761,
                          "end": 2765
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2753,
                        "end": 2765
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2766,
                          "end": 2770
                        }
                      ],
                      "optional": false,
                      "start": 2753,
                      "end": 2771
                    },
                    "directive": null,
                    "start": 2753,
                    "end": 2772
                  }
                ],
                "start": 2743,
                "end": 2778
              },
              "expression": false,
              "start": 2740,
              "end": 2778
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2729,
            "end": 2778
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2784,
              "end": 2786
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2790,
                    "end": 2794
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2796,
                        "end": 2797
                      },
                      "typeArguments": null,
                      "start": 2796,
                      "end": 2797
                    },
                    "start": 2794,
                    "end": 2797
                  },
                  "value": null,
                  "start": 2787,
                  "end": 2797
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2800,
                  "end": 2804
                },
                "start": 2798,
                "end": 2804
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2805,
                "end": 2807
              },
              "expression": false,
              "start": 2786,
              "end": 2807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2784,
            "end": 2807
          }
        ],
        "start": 2723,
        "end": 2809
      },
      "abstract": false,
      "declare": false,
      "start": 2692,
      "end": 2809
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2817,
        "end": 2820
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2821,
              "end": 2822
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2831,
                    "end": 2832
                  },
                  "start": 2831,
                  "end": 2832
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2835,
                    "end": 2836
                  },
                  "start": 2835,
                  "end": 2836
                }
              ],
              "start": 2831,
              "end": 2836
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2821,
            "end": 2836
          }
        ],
        "start": 2820,
        "end": 2837
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2855
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2868,
                            "end": 2872
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2873,
                            "end": 2875
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2868,
                          "end": 2875
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2876,
                          "end": 2880
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2868,
                        "end": 2880
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2881,
                          "end": 2885
                        }
                      ],
                      "optional": false,
                      "start": 2868,
                      "end": 2886
                    },
                    "directive": null,
                    "start": 2868,
                    "end": 2887
                  }
                ],
                "start": 2858,
                "end": 2893
              },
              "expression": false,
              "start": 2855,
              "end": 2893
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2844,
            "end": 2893
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2899,
              "end": 2901
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2905,
                    "end": 2909
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2911,
                          "end": 2912
                        },
                        "typeArguments": null,
                        "start": 2911,
                        "end": 2912
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2921,
                          "end": 2922
                        },
                        "start": 2921,
                        "end": 2922
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2926,
                            "end": 2933
                          }
                        ],
                        "start": 2925,
                        "end": 2934
                      },
                      "falseType": {
                        "type": "TSTupleType",
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
                        ],
                        "start": 2937,
                        "end": 2955
                      },
                      "start": 2911,
                      "end": 2955
                    },
                    "start": 2909,
                    "end": 2955
                  },
                  "value": null,
                  "start": 2902,
                  "end": 2955
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2957,
                "end": 2959
              },
              "expression": false,
              "start": 2901,
              "end": 2959
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2899,
            "end": 2959
          }
        ],
        "start": 2838,
        "end": 2961
      },
      "abstract": false,
      "declare": false,
      "start": 2811,
      "end": 2961
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2961
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69,
    "range": [
      61,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 70,
    "end": 80,
    "range": [
      70,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117,
    "range": [
      109,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 118,
    "end": 128,
    "range": [
      118,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 150,
    "end": 157,
    "range": [
      150,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166,
    "range": [
      158,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 167,
    "end": 174,
    "range": [
      167,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "f00",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 208,
    "end": 217,
    "range": [
      208,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 239,
    "end": 248,
    "range": [
      239,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 250,
    "end": 252,
    "range": [
      250,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 259,
    "end": 262,
    "range": [
      259,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 269,
    "end": 273,
    "range": [
      269,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 274,
    "end": 283,
    "range": [
      274,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 285,
    "end": 287,
    "range": [
      285,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 299,
    "end": 302,
    "range": [
      299,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 309,
    "end": 312,
    "range": [
      309,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 318,
    "end": 327,
    "range": [
      318,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 329,
    "end": 331,
    "range": [
      329,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 333,
    "end": 335,
    "range": [
      333,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352,
    "range": [
      349,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 359,
    "end": 369,
    "range": [
      359,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 370,
    "end": 374,
    "range": [
      370,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 375,
    "end": 384,
    "range": [
      375,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 409,
    "end": 412,
    "range": [
      409,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "f05",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 419,
    "end": 426,
    "range": [
      419,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 432,
    "end": 441,
    "range": [
      432,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 464,
    "end": 467,
    "range": [
      464,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "c00",
    "start": 468,
    "end": 471,
    "range": [
      468,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 478,
    "end": 482,
    "range": [
      478,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 483,
    "end": 492,
    "range": [
      483,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 508,
    "end": 511,
    "range": [
      508,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "c01",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 522,
    "end": 526,
    "range": [
      522,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 527,
    "end": 536,
    "range": [
      527,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 538,
    "end": 540,
    "range": [
      538,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 553,
    "end": 556,
    "range": [
      553,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "c02",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 567,
    "end": 571,
    "range": [
      567,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 572,
    "end": 581,
    "range": [
      572,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 583,
    "end": 585,
    "range": [
      583,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 587,
    "end": 589,
    "range": [
      587,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "c03",
    "start": 606,
    "end": 609,
    "range": [
      606,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 616,
    "end": 620,
    "range": [
      616,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 621,
    "end": 630,
    "range": [
      621,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 632,
    "end": 634,
    "range": [
      632,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 636,
    "end": 643,
    "range": [
      636,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "a00",
    "start": 665,
    "end": 668,
    "range": [
      665,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 675,
    "end": 680,
    "range": [
      675,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 681,
    "end": 690,
    "range": [
      681,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 693,
    "end": 695,
    "range": [
      693,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 697,
    "end": 704,
    "range": [
      697,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "a01",
    "start": 712,
    "end": 715,
    "range": [
      712,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 718,
    "end": 721,
    "range": [
      718,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 722,
    "end": 727,
    "range": [
      722,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 728,
    "end": 737,
    "range": [
      728,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 740,
    "end": 742,
    "range": [
      740,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 756,
    "end": 759,
    "range": [
      756,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "a02",
    "start": 760,
    "end": 763,
    "range": [
      760,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 766,
    "end": 769,
    "range": [
      766,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 770,
    "end": 775,
    "range": [
      770,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 776,
    "end": 785,
    "range": [
      776,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 808,
    "end": 811,
    "range": [
      808,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "a03",
    "start": 812,
    "end": 815,
    "range": [
      812,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 822,
    "end": 827,
    "range": [
      822,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 828,
    "end": 837,
    "range": [
      828,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 840,
    "end": 842,
    "range": [
      840,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 844,
    "end": 851,
    "range": [
      844,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 853,
    "end": 855,
    "range": [
      853,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 870,
    "end": 875,
    "range": [
      870,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 884,
    "end": 895,
    "range": [
      884,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 899,
    "end": 905,
    "range": [
      899,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 925,
    "end": 928,
    "range": [
      925,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 929,
    "end": 933,
    "range": [
      929,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 935,
    "end": 939,
    "range": [
      935,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 944,
    "end": 950,
    "range": [
      944,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961,
    "range": [
      955,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 964,
    "end": 970,
    "range": [
      964,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 973,
    "end": 979,
    "range": [
      973,
      979
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 980,
    "end": 982,
    "range": [
      980,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 989,
    "end": 999,
    "range": [
      989,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1012,
    "end": 1018,
    "range": [
      1012,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1024,
    "end": 1034,
    "range": [
      1024,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1059,
    "end": 1069,
    "range": [
      1059,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1073,
    "end": 1076,
    "range": [
      1073,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1079,
    "end": 1082,
    "range": [
      1079,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1085,
    "end": 1091,
    "range": [
      1085,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1093,
    "end": 1096,
    "range": [
      1093,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1097,
    "end": 1106,
    "range": [
      1097,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 1113,
    "end": 1120,
    "range": [
      1113,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1135,
    "end": 1141,
    "range": [
      1135,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1149,
    "end": 1156,
    "range": [
      1149,
      1156
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1157,
    "end": 1160,
    "range": [
      1157,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1167,
    "end": 1174,
    "range": [
      1167,
      1174
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1175,
    "end": 1178,
    "range": [
      1175,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1179,
    "end": 1182,
    "range": [
      1179,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1189,
    "end": 1192,
    "range": [
      1189,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1193,
    "end": 1196,
    "range": [
      1193,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1201,
    "end": 1204,
    "range": [
      1201,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1205,
    "end": 1209,
    "range": [
      1205,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1214,
    "end": 1217,
    "range": [
      1214,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1218,
    "end": 1221,
    "range": [
      1218,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1226,
    "end": 1229,
    "range": [
      1226,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1230,
    "end": 1234,
    "range": [
      1230,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1238,
    "end": 1240,
    "range": [
      1238,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1243,
    "end": 1246,
    "range": [
      1243,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1247,
    "end": 1250,
    "range": [
      1247,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1255,
    "end": 1258,
    "range": [
      1255,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1259,
    "end": 1263,
    "range": [
      1259,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1267,
    "end": 1269,
    "range": [
      1267,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1271,
    "end": 1278,
    "range": [
      1271,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1281,
    "end": 1284,
    "range": [
      1281,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1285,
    "end": 1288,
    "range": [
      1285,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1293,
    "end": 1296,
    "range": [
      1293,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1297,
    "end": 1301,
    "range": [
      1297,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1305,
    "end": 1307,
    "range": [
      1305,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1309,
    "end": 1311,
    "range": [
      1309,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1324,
    "end": 1327,
    "range": [
      1324,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 1328,
    "end": 1331,
    "range": [
      1328,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1336,
    "end": 1339,
    "range": [
      1336,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1340,
    "end": 1344,
    "range": [
      1340,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1345,
    "end": 1354,
    "range": [
      1345,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1368,
    "end": 1371,
    "range": [
      1368,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 1372,
    "end": 1375,
    "range": [
      1372,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1380,
    "end": 1390,
    "range": [
      1380,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1391,
    "end": 1395,
    "range": [
      1391,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1434,
    "end": 1437,
    "range": [
      1434,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 1438,
    "end": 1441,
    "range": [
      1438,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 1446,
    "end": 1453,
    "range": [
      1446,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1454,
    "end": 1458,
    "range": [
      1454,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1495,
    "end": 1498,
    "range": [
      1495,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 1499,
    "end": 1502,
    "range": [
      1499,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1507,
    "end": 1510,
    "range": [
      1507,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1511,
    "end": 1515,
    "range": [
      1511,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1519,
    "end": 1521,
    "range": [
      1519,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1523,
    "end": 1530,
    "range": [
      1523,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 1537,
    "end": 1540,
    "range": [
      1537,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1545,
    "end": 1548,
    "range": [
      1545,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1549,
    "end": 1553,
    "range": [
      1549,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1557,
    "end": 1559,
    "range": [
      1557,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1572,
    "end": 1575,
    "range": [
      1572,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 1576,
    "end": 1579,
    "range": [
      1576,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1584,
    "end": 1587,
    "range": [
      1584,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1588,
    "end": 1592,
    "range": [
      1588,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1596,
    "end": 1598,
    "range": [
      1596,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1600,
    "end": 1602,
    "range": [
      1600,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1615,
    "end": 1618,
    "range": [
      1615,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "c13",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1627,
    "end": 1630,
    "range": [
      1627,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1631,
    "end": 1635,
    "range": [
      1631,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1639,
    "end": 1641,
    "range": [
      1639,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1643,
    "end": 1650,
    "range": [
      1643,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1652,
    "end": 1654,
    "range": [
      1652,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1667,
    "end": 1670,
    "range": [
      1667,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "c14",
    "start": 1671,
    "end": 1674,
    "range": [
      1671,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1679,
    "end": 1682,
    "range": [
      1679,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1683,
    "end": 1687,
    "range": [
      1683,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1688,
    "end": 1697,
    "range": [
      1688,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1699,
    "end": 1701,
    "range": [
      1699,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1703,
    "end": 1710,
    "range": [
      1703,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1724,
    "end": 1727,
    "range": [
      1724,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 1728,
    "end": 1731,
    "range": [
      1728,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1736,
    "end": 1739,
    "range": [
      1736,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1740,
    "end": 1745,
    "range": [
      1740,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1750,
    "end": 1752,
    "range": [
      1750,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1754,
    "end": 1761,
    "range": [
      1754,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1765,
    "end": 1768,
    "range": [
      1765,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1769,
    "end": 1772,
    "range": [
      1769,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1777,
    "end": 1780,
    "range": [
      1777,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1781,
    "end": 1786,
    "range": [
      1781,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1791,
    "end": 1793,
    "range": [
      1791,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1807,
    "end": 1810,
    "range": [
      1807,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1811,
    "end": 1814,
    "range": [
      1811,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1823,
    "end": 1828,
    "range": [
      1823,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1833,
    "end": 1835,
    "range": [
      1833,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1837,
    "end": 1839,
    "range": [
      1837,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1853,
    "end": 1856,
    "range": [
      1853,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1857,
    "end": 1860,
    "range": [
      1857,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1865,
    "end": 1868,
    "range": [
      1865,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1869,
    "end": 1874,
    "range": [
      1869,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1879,
    "end": 1881,
    "range": [
      1879,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1883,
    "end": 1890,
    "range": [
      1883,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1892,
    "end": 1894,
    "range": [
      1892,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1908,
    "end": 1911,
    "range": [
      1908,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1912,
    "end": 1915,
    "range": [
      1912,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1920,
    "end": 1923,
    "range": [
      1920,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1924,
    "end": 1929,
    "range": [
      1924,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1930,
    "end": 1939,
    "range": [
      1930,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1942,
    "end": 1944,
    "range": [
      1942,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1946,
    "end": 1953,
    "range": [
      1946,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1968,
    "end": 1971,
    "range": [
      1968,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1972,
    "end": 1975,
    "range": [
      1972,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1980,
    "end": 1984,
    "range": [
      1980,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1985,
    "end": 1994,
    "range": [
      1985,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 2001,
    "end": 2004,
    "range": [
      2001,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2009,
    "end": 2013,
    "range": [
      2009,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2014,
    "end": 2023,
    "range": [
      2014,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2025,
    "end": 2027,
    "range": [
      2025,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2030,
    "end": 2033,
    "range": [
      2030,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 2034,
    "end": 2037,
    "range": [
      2034,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2042,
    "end": 2046,
    "range": [
      2042,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2047,
    "end": 2056,
    "range": [
      2047,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2058,
    "end": 2060,
    "range": [
      2058,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2062,
    "end": 2069,
    "range": [
      2062,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2072,
    "end": 2075,
    "range": [
      2072,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 2076,
    "end": 2079,
    "range": [
      2076,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2084,
    "end": 2088,
    "range": [
      2084,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2089,
    "end": 2098,
    "range": [
      2089,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2100,
    "end": 2102,
    "range": [
      2100,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2104,
    "end": 2106,
    "range": [
      2104,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2122,
    "end": 2126,
    "range": [
      2122,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2130,
    "end": 2132,
    "range": [
      2130,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2134,
    "end": 2141,
    "range": [
      2134,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2146,
    "end": 2150,
    "range": [
      2146,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2154,
    "end": 2156,
    "range": [
      2154,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2171,
    "end": 2175,
    "range": [
      2171,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2179,
    "end": 2181,
    "range": [
      2179,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2183,
    "end": 2185,
    "range": [
      2183,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2200,
    "end": 2204,
    "range": [
      2200,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2208,
    "end": 2210,
    "range": [
      2208,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2212,
    "end": 2219,
    "range": [
      2212,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2221,
    "end": 2223,
    "range": [
      2221,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2239,
    "end": 2244,
    "range": [
      2239,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2249,
    "end": 2251,
    "range": [
      2249,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2253,
    "end": 2260,
    "range": [
      2253,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2266,
    "end": 2271,
    "range": [
      2266,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2276,
    "end": 2278,
    "range": [
      2276,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2294,
    "end": 2299,
    "range": [
      2294,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2304,
    "end": 2306,
    "range": [
      2304,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2308,
    "end": 2310,
    "range": [
      2308,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2326,
    "end": 2331,
    "range": [
      2326,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2336,
    "end": 2338,
    "range": [
      2336,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2340,
    "end": 2347,
    "range": [
      2340,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2349,
    "end": 2351,
    "range": [
      2349,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2366,
    "end": 2374,
    "range": [
      2366,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2375,
    "end": 2378,
    "range": [
      2375,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2381,
    "end": 2388,
    "range": [
      2381,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2389,
    "end": 2396,
    "range": [
      2389,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2400,
    "end": 2408,
    "range": [
      2400,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2411,
    "end": 2415,
    "range": [
      2411,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2420,
    "end": 2423,
    "range": [
      2420,
      2423
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2423,
    "end": 2427,
    "range": [
      2423,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2432,
    "end": 2434,
    "range": [
      2432,
      2434
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2435,
    "end": 2439,
    "range": [
      2435,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2447,
    "end": 2455,
    "range": [
      2447,
      2455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2456,
    "end": 2460,
    "range": [
      2456,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2469,
    "end": 2477,
    "range": [
      2469,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2478,
    "end": 2482,
    "range": [
      2478,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2499,
    "end": 2507,
    "range": [
      2499,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2508,
    "end": 2511,
    "range": [
      2508,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2514,
    "end": 2521,
    "range": [
      2514,
      2521
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2529,
    "end": 2537,
    "range": [
      2529,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2540,
    "end": 2544,
    "range": [
      2540,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2549,
    "end": 2552,
    "range": [
      2549,
      2552
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2552,
    "end": 2556,
    "range": [
      2552,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2560,
    "end": 2567,
    "range": [
      2560,
      2567
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2573,
    "end": 2580,
    "range": [
      2573,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2585,
    "end": 2592,
    "range": [
      2585,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2594,
    "end": 2601,
    "range": [
      2594,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2604,
    "end": 2606,
    "range": [
      2604,
      2606
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2607,
    "end": 2611,
    "range": [
      2607,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2619,
    "end": 2627,
    "range": [
      2619,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2628,
    "end": 2632,
    "range": [
      2628,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636,
    "range": [
      2635,
      2636
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2641,
    "end": 2649,
    "range": [
      2641,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2650,
    "end": 2654,
    "range": [
      2650,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2692,
    "end": 2697,
    "range": [
      2692,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2698,
    "end": 2701,
    "range": [
      2698,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2704,
    "end": 2711,
    "range": [
      2704,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2712,
    "end": 2719,
    "range": [
      2712,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2729,
    "end": 2740,
    "range": [
      2729,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2753,
    "end": 2757,
    "range": [
      2753,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2758,
    "end": 2760,
    "range": [
      2758,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2761,
    "end": 2765,
    "range": [
      2761,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2766,
    "end": 2770,
    "range": [
      2766,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2784,
    "end": 2786,
    "range": [
      2784,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2787,
    "end": 2790,
    "range": [
      2787,
      2790
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2790,
    "end": 2794,
    "range": [
      2790,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2800,
    "end": 2804,
    "range": [
      2800,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2811,
    "end": 2816,
    "range": [
      2811,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2817,
    "end": 2820,
    "range": [
      2817,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2823,
    "end": 2830,
    "range": [
      2823,
      2830
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2844,
    "end": 2855,
    "range": [
      2844,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2868,
    "end": 2872,
    "range": [
      2868,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2873,
    "end": 2875,
    "range": [
      2873,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2876,
    "end": 2880,
    "range": [
      2876,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2881,
    "end": 2885,
    "range": [
      2881,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2899,
    "end": 2901,
    "range": [
      2899,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2902,
    "end": 2905,
    "range": [
      2902,
      2905
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2905,
    "end": 2909,
    "range": [
      2905,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2913,
    "end": 2920,
    "range": [
      2913,
      2920
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2926,
    "end": 2933,
    "range": [
      2926,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2938,
    "end": 2945,
    "range": [
      2938,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2947,
    "end": 2954,
    "range": [
      2947,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  }
]
```
