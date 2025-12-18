__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 12
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 20,
        "end": 25
      },
      "const": false,
      "declare": false,
      "start": 13,
      "end": 25
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "start": 31,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 180,
                "end": 187
              },
              "start": 178,
              "end": 187
            },
            "start": 176,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 187
        }
      ],
      "declare": false,
      "start": 172,
      "end": 188
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 197,
                "end": 201
              },
              "start": 195,
              "end": 201
            },
            "start": 193,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 201
        }
      ],
      "declare": false,
      "start": 189,
      "end": 202
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 211,
                "end": 213
              },
              "start": 209,
              "end": 213
            },
            "start": 207,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 207,
          "end": 213
        }
      ],
      "declare": false,
      "start": 203,
      "end": 214
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              "start": 221,
              "end": 224
            },
            "start": 219,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 219,
          "end": 224
        }
      ],
      "declare": false,
      "start": 215,
      "end": 225
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 237
                    },
                    "typeArguments": null,
                    "start": 234,
                    "end": 237
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  }
                ],
                "start": 234,
                "end": 246
              },
              "start": 232,
              "end": 246
            },
            "start": 230,
            "end": 246
          },
          "init": null,
          "definite": false,
          "start": 230,
          "end": 246
        }
      ],
      "declare": false,
      "start": 226,
      "end": 247
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 259
                },
                "typeArguments": null,
                "start": 256,
                "end": 259
              },
              "start": 254,
              "end": 259
            },
            "start": 252,
            "end": 259
          },
          "init": null,
          "definite": false,
          "start": 252,
          "end": 259
        }
      ],
      "declare": false,
      "start": 248,
      "end": 260
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 274
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "start": 272,
            "end": 279
          },
          "definite": false,
          "start": 266,
          "end": 279
        }
      ],
      "declare": false,
      "start": 262,
      "end": 280
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 288
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 293
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "start": 291,
            "end": 298
          },
          "definite": false,
          "start": 285,
          "end": 298
        }
      ],
      "declare": false,
      "start": 281,
      "end": 299
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 312
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "start": 310,
            "end": 317
          },
          "definite": false,
          "start": 304,
          "end": 317
        }
      ],
      "declare": false,
      "start": 300,
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 326
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 331
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "start": 329,
            "end": 336
          },
          "definite": false,
          "start": 323,
          "end": 336
        }
      ],
      "declare": false,
      "start": 319,
      "end": 337
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 345
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 348,
              "end": 352
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "start": 348,
            "end": 357
          },
          "definite": false,
          "start": 342,
          "end": 357
        }
      ],
      "declare": false,
      "start": 338,
      "end": 358
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
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 366
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 378
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "start": 369,
            "end": 383
          },
          "definite": false,
          "start": 363,
          "end": 383
        }
      ],
      "declare": false,
      "start": 359,
      "end": 384
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 392
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 398
              },
              "optional": false,
              "computed": false,
              "start": 395,
              "end": 398
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "start": 395,
            "end": 403
          },
          "definite": false,
          "start": 389,
          "end": 403
        }
      ],
      "declare": false,
      "start": 385,
      "end": 404
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 412
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 415,
              "end": 420
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "start": 415,
            "end": 425
          },
          "definite": false,
          "start": 409,
          "end": 425
        }
      ],
      "declare": false,
      "start": 405,
      "end": 426
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
            "name": "ra9",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 434
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 437,
              "end": 439
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "start": 437,
            "end": 444
          },
          "definite": false,
          "start": 431,
          "end": 444
        }
      ],
      "declare": false,
      "start": 427,
      "end": 445
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
            "name": "ra10",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 454
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 459
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "start": 457,
            "end": 464
          },
          "definite": false,
          "start": 450,
          "end": 464
        }
      ],
      "declare": false,
      "start": 446,
      "end": 465
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
            "name": "ra11",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 474
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 479
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "start": 477,
            "end": 484
          },
          "definite": false,
          "start": 470,
          "end": 484
        }
      ],
      "declare": false,
      "start": 466,
      "end": 485
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 614,
                "end": 620
              },
              "start": 612,
              "end": 620
            },
            "start": 610,
            "end": 620
          },
          "init": null,
          "definite": false,
          "start": 610,
          "end": 620
        }
      ],
      "declare": false,
      "start": 606,
      "end": 621
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 630,
                "end": 637
              },
              "start": 628,
              "end": 637
            },
            "start": 626,
            "end": 637
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 637
        }
      ],
      "declare": false,
      "start": 622,
      "end": 638
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 647,
                "end": 653
              },
              "start": 645,
              "end": 653
            },
            "start": 643,
            "end": 653
          },
          "init": null,
          "definite": false,
          "start": 643,
          "end": 653
        }
      ],
      "declare": false,
      "start": 639,
      "end": 654
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 663,
                "end": 667
              },
              "start": 661,
              "end": 667
            },
            "start": 659,
            "end": 667
          },
          "init": null,
          "definite": false,
          "start": 659,
          "end": 667
        }
      ],
      "declare": false,
      "start": 655,
      "end": 668
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 677,
                    "end": 683
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 686,
                    "end": 692
                  }
                ],
                "start": 677,
                "end": 692
              },
              "start": 675,
              "end": 692
            },
            "start": 673,
            "end": 692
          },
          "init": null,
          "definite": false,
          "start": 673,
          "end": 692
        }
      ],
      "declare": false,
      "start": 669,
      "end": 693
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 702
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 706
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 712
            },
            "start": 705,
            "end": 712
          },
          "definite": false,
          "start": 699,
          "end": 712
        }
      ],
      "declare": false,
      "start": 695,
      "end": 713
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 721
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "start": 724,
            "end": 731
          },
          "definite": false,
          "start": 718,
          "end": 731
        }
      ],
      "declare": false,
      "start": 714,
      "end": 732
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 740
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 744
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 750
            },
            "start": 743,
            "end": 750
          },
          "definite": false,
          "start": 737,
          "end": 750
        }
      ],
      "declare": false,
      "start": 733,
      "end": 751
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
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 759
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 763
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 769
            },
            "start": 762,
            "end": 769
          },
          "definite": false,
          "start": 756,
          "end": 769
        }
      ],
      "declare": false,
      "start": 752,
      "end": 770
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
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 778
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 782
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 788
            },
            "start": 781,
            "end": 788
          },
          "definite": false,
          "start": 775,
          "end": 788
        }
      ],
      "declare": false,
      "start": 771,
      "end": 789
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
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 797
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 805,
              "end": 806
            },
            "start": 800,
            "end": 806
          },
          "definite": false,
          "start": 794,
          "end": 806
        }
      ],
      "declare": false,
      "start": 790,
      "end": 807
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
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 815
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 819
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 823,
              "end": 828
            },
            "start": 818,
            "end": 828
          },
          "definite": false,
          "start": 812,
          "end": 828
        }
      ],
      "declare": false,
      "start": 808,
      "end": 829
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
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 837
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 841
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 845,
              "end": 847
            },
            "start": 840,
            "end": 847
          },
          "definite": false,
          "start": 834,
          "end": 847
        }
      ],
      "declare": false,
      "start": 830,
      "end": 848
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
            "name": "rb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 856
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 860
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 864,
              "end": 868
            },
            "start": 859,
            "end": 868
          },
          "definite": false,
          "start": 853,
          "end": 868
        }
      ],
      "declare": false,
      "start": 849,
      "end": 869
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
            "name": "rb10",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 878
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 882
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 895
            },
            "start": 881,
            "end": 895
          },
          "definite": false,
          "start": 874,
          "end": 895
        }
      ],
      "declare": false,
      "start": 870,
      "end": 896
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 934
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 937,
              "end": 939
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 943,
              "end": 945
            },
            "start": 937,
            "end": 945
          },
          "definite": false,
          "start": 931,
          "end": 945
        }
      ],
      "declare": false,
      "start": 927,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 946
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 203,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 272,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 275,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 291,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 294,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 310,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 329,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 332,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Null",
    "value": "null",
    "start": 348,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 369,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 399,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 415,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ra9",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 446,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "ra10",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 457,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 460,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "ra11",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 477,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 480,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 630,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 655,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 686,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 707,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 726,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 745,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 764,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 771,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 794,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 802,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 808,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 820,
    "end": 822
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 823,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 842,
    "end": 844
  },
  {
    "type": "String",
    "value": "''",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "rb9",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 861,
    "end": 863
  },
  {
    "type": "Null",
    "value": "null",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 870,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "rb10",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 883,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 886,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 940,
    "end": 942
  },
  {
    "type": "String",
    "value": "''",
    "start": 943,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  }
]
```
