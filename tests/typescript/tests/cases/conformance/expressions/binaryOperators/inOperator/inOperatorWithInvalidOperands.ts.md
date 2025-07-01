__ESTREE_TEST__:PASS:
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
