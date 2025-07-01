__ESTREE_TEST__:PASS:
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
