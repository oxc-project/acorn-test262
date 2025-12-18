__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
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
              "start": 122,
              "end": 123
            },
            "initializer": null,
            "computed": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": null,
            "computed": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "const": false,
      "declare": false,
      "start": 109,
      "end": 132
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 138,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 144
        }
      ],
      "declare": false,
      "start": 134,
      "end": 145
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
            },
            "start": 150,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 159
        }
      ],
      "declare": false,
      "start": 146,
      "end": 160
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
            "start": 180,
            "end": 183
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 186,
              "end": 190
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "start": 186,
            "end": 194
          },
          "definite": false,
          "start": 180,
          "end": 194
        }
      ],
      "declare": false,
      "start": 176,
      "end": 195
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
            "start": 200,
            "end": 203
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 206,
              "end": 210
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "start": 206,
            "end": 214
          },
          "definite": false,
          "start": 200,
          "end": 214
        }
      ],
      "declare": false,
      "start": 196,
      "end": 215
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
            "start": 220,
            "end": 223
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 226,
              "end": 230
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 233,
              "end": 234
            },
            "start": 226,
            "end": 234
          },
          "definite": false,
          "start": 220,
          "end": 234
        }
      ],
      "declare": false,
      "start": 216,
      "end": 235
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
            "start": 240,
            "end": 243
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 246,
              "end": 250
            },
            "operator": "*",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "optional": false,
              "computed": false,
              "start": 253,
              "end": 256
            },
            "start": 246,
            "end": 256
          },
          "definite": false,
          "start": 240,
          "end": 256
        }
      ],
      "declare": false,
      "start": 236,
      "end": 257
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
            "start": 262,
            "end": 265
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 272,
              "end": 276
            },
            "start": 268,
            "end": 276
          },
          "definite": false,
          "start": 262,
          "end": 276
        }
      ],
      "declare": false,
      "start": 258,
      "end": 277
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
            "start": 282,
            "end": 285
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 292,
              "end": 296
            },
            "start": 288,
            "end": 296
          },
          "definite": false,
          "start": 282,
          "end": 296
        }
      ],
      "declare": false,
      "start": 278,
      "end": 297
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
            "start": 302,
            "end": 305
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 308,
              "end": 309
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 312,
              "end": 316
            },
            "start": 308,
            "end": 316
          },
          "definite": false,
          "start": 302,
          "end": 316
        }
      ],
      "declare": false,
      "start": 298,
      "end": 317
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
            "start": 322,
            "end": 325
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
                "start": 328,
                "end": 329
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "optional": false,
              "computed": false,
              "start": 328,
              "end": 331
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 334,
              "end": 338
            },
            "start": 328,
            "end": 338
          },
          "definite": false,
          "start": 322,
          "end": 338
        }
      ],
      "declare": false,
      "start": 318,
      "end": 339
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
            "start": 359,
            "end": 362
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 365,
              "end": 369
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "start": 365,
            "end": 373
          },
          "definite": false,
          "start": 359,
          "end": 373
        }
      ],
      "declare": false,
      "start": 355,
      "end": 374
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
            "start": 379,
            "end": 382
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 385,
              "end": 389
            },
            "operator": "/",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "start": 385,
            "end": 393
          },
          "definite": false,
          "start": 379,
          "end": 393
        }
      ],
      "declare": false,
      "start": 375,
      "end": 394
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
            "start": 399,
            "end": 402
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 405,
              "end": 409
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 412,
              "end": 413
            },
            "start": 405,
            "end": 413
          },
          "definite": false,
          "start": 399,
          "end": 413
        }
      ],
      "declare": false,
      "start": 395,
      "end": 414
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
            "start": 419,
            "end": 422
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 425,
              "end": 429
            },
            "operator": "/",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 435
              },
              "optional": false,
              "computed": false,
              "start": 432,
              "end": 435
            },
            "start": 425,
            "end": 435
          },
          "definite": false,
          "start": 419,
          "end": 435
        }
      ],
      "declare": false,
      "start": 415,
      "end": 436
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
            "start": 441,
            "end": 444
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 448
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 451,
              "end": 455
            },
            "start": 447,
            "end": 455
          },
          "definite": false,
          "start": 441,
          "end": 455
        }
      ],
      "declare": false,
      "start": 437,
      "end": 456
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
            "start": 461,
            "end": 464
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 471,
              "end": 475
            },
            "start": 467,
            "end": 475
          },
          "definite": false,
          "start": 461,
          "end": 475
        }
      ],
      "declare": false,
      "start": 457,
      "end": 476
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
            "start": 481,
            "end": 484
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 487,
              "end": 488
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 491,
              "end": 495
            },
            "start": 487,
            "end": 495
          },
          "definite": false,
          "start": 481,
          "end": 495
        }
      ],
      "declare": false,
      "start": 477,
      "end": 496
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
            "start": 501,
            "end": 504
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
                "start": 507,
                "end": 508
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 510
              },
              "optional": false,
              "computed": false,
              "start": 507,
              "end": 510
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 513,
              "end": 517
            },
            "start": 507,
            "end": 517
          },
          "definite": false,
          "start": 501,
          "end": 517
        }
      ],
      "declare": false,
      "start": 497,
      "end": 518
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
            "start": 538,
            "end": 541
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 544,
              "end": 548
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "start": 544,
            "end": 552
          },
          "definite": false,
          "start": 538,
          "end": 552
        }
      ],
      "declare": false,
      "start": 534,
      "end": 553
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
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 561
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 564,
              "end": 568
            },
            "operator": "%",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 572
            },
            "start": 564,
            "end": 572
          },
          "definite": false,
          "start": 558,
          "end": 572
        }
      ],
      "declare": false,
      "start": 554,
      "end": 573
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
            "name": "rc3",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 581
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 584,
              "end": 588
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 591,
              "end": 592
            },
            "start": 584,
            "end": 592
          },
          "definite": false,
          "start": 578,
          "end": 592
        }
      ],
      "declare": false,
      "start": 574,
      "end": 593
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
            "name": "rc4",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 601
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 604,
              "end": 608
            },
            "operator": "%",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 614
              },
              "optional": false,
              "computed": false,
              "start": 611,
              "end": 614
            },
            "start": 604,
            "end": 614
          },
          "definite": false,
          "start": 598,
          "end": 614
        }
      ],
      "declare": false,
      "start": 594,
      "end": 615
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
            "name": "rc5",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 623
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 627
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 630,
              "end": 634
            },
            "start": 626,
            "end": 634
          },
          "definite": false,
          "start": 620,
          "end": 634
        }
      ],
      "declare": false,
      "start": 616,
      "end": 635
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
            "name": "rc6",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 643
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 650,
              "end": 654
            },
            "start": 646,
            "end": 654
          },
          "definite": false,
          "start": 640,
          "end": 654
        }
      ],
      "declare": false,
      "start": 636,
      "end": 655
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
            "name": "rc7",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 663
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 666,
              "end": 667
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 670,
              "end": 674
            },
            "start": 666,
            "end": 674
          },
          "definite": false,
          "start": 660,
          "end": 674
        }
      ],
      "declare": false,
      "start": 656,
      "end": 675
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
            "name": "rc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 683
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
                "start": 686,
                "end": 687
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              },
              "optional": false,
              "computed": false,
              "start": 686,
              "end": 689
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 692,
              "end": 696
            },
            "start": 686,
            "end": 696
          },
          "definite": false,
          "start": 680,
          "end": 696
        }
      ],
      "declare": false,
      "start": 676,
      "end": 697
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
            "name": "rd1",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 720
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 723,
              "end": 727
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            "start": 723,
            "end": 731
          },
          "definite": false,
          "start": 717,
          "end": 731
        }
      ],
      "declare": false,
      "start": 713,
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
            "name": "rd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 740
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 743,
              "end": 747
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 751
            },
            "start": 743,
            "end": 751
          },
          "definite": false,
          "start": 737,
          "end": 751
        }
      ],
      "declare": false,
      "start": 733,
      "end": 752
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
            "name": "rd3",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 760
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 763,
              "end": 767
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 770,
              "end": 771
            },
            "start": 763,
            "end": 771
          },
          "definite": false,
          "start": 757,
          "end": 771
        }
      ],
      "declare": false,
      "start": 753,
      "end": 772
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
            "name": "rd4",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 780
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 783,
              "end": 787
            },
            "operator": "-",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 793
              },
              "optional": false,
              "computed": false,
              "start": 790,
              "end": 793
            },
            "start": 783,
            "end": 793
          },
          "definite": false,
          "start": 777,
          "end": 793
        }
      ],
      "declare": false,
      "start": 773,
      "end": 794
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
            "name": "rd5",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 802
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 809,
              "end": 813
            },
            "start": 805,
            "end": 813
          },
          "definite": false,
          "start": 799,
          "end": 813
        }
      ],
      "declare": false,
      "start": 795,
      "end": 814
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
            "name": "rd6",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 822
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 829,
              "end": 833
            },
            "start": 825,
            "end": 833
          },
          "definite": false,
          "start": 819,
          "end": 833
        }
      ],
      "declare": false,
      "start": 815,
      "end": 834
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
            "name": "rd7",
            "optional": false,
            "typeAnnotation": null,
            "start": 839,
            "end": 842
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 845,
              "end": 846
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 849,
              "end": 853
            },
            "start": 845,
            "end": 853
          },
          "definite": false,
          "start": 839,
          "end": 853
        }
      ],
      "declare": false,
      "start": 835,
      "end": 854
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
            "name": "rd8",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 862
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
                "start": 865,
                "end": 866
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 868
              },
              "optional": false,
              "computed": false,
              "start": 865,
              "end": 868
            },
            "operator": "-",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 871,
              "end": 875
            },
            "start": 865,
            "end": 875
          },
          "definite": false,
          "start": 859,
          "end": 875
        }
      ],
      "declare": false,
      "start": 855,
      "end": 876
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
            "name": "re1",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 900
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 903,
              "end": 907
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 912
            },
            "start": 903,
            "end": 912
          },
          "definite": false,
          "start": 897,
          "end": 912
        }
      ],
      "declare": false,
      "start": 893,
      "end": 913
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
            "name": "re2",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 921
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 924,
              "end": 928
            },
            "operator": "<<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "start": 924,
            "end": 933
          },
          "definite": false,
          "start": 918,
          "end": 933
        }
      ],
      "declare": false,
      "start": 914,
      "end": 934
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
            "name": "re3",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 942
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 945,
              "end": 949
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 953,
              "end": 954
            },
            "start": 945,
            "end": 954
          },
          "definite": false,
          "start": 939,
          "end": 954
        }
      ],
      "declare": false,
      "start": 935,
      "end": 955
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
            "name": "re4",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 963
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 966,
              "end": 970
            },
            "operator": "<<",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 975
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 976,
                "end": 977
              },
              "optional": false,
              "computed": false,
              "start": 974,
              "end": 977
            },
            "start": 966,
            "end": 977
          },
          "definite": false,
          "start": 960,
          "end": 977
        }
      ],
      "declare": false,
      "start": 956,
      "end": 978
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
            "name": "re5",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 986
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 990
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 994,
              "end": 998
            },
            "start": 989,
            "end": 998
          },
          "definite": false,
          "start": 983,
          "end": 998
        }
      ],
      "declare": false,
      "start": 979,
      "end": 999
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
            "name": "re6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1007
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1011
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1015,
              "end": 1019
            },
            "start": 1010,
            "end": 1019
          },
          "definite": false,
          "start": 1004,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 1000,
      "end": 1020
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
            "name": "re7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1028
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1031,
              "end": 1032
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1036,
              "end": 1040
            },
            "start": 1031,
            "end": 1040
          },
          "definite": false,
          "start": 1025,
          "end": 1040
        }
      ],
      "declare": false,
      "start": 1021,
      "end": 1041
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
            "name": "re8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1046,
            "end": 1049
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
                "start": 1052,
                "end": 1053
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1055
              },
              "optional": false,
              "computed": false,
              "start": 1052,
              "end": 1055
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1059,
              "end": 1063
            },
            "start": 1052,
            "end": 1063
          },
          "definite": false,
          "start": 1046,
          "end": 1063
        }
      ],
      "declare": false,
      "start": 1042,
      "end": 1064
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
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1085,
            "end": 1088
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1091,
              "end": 1095
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1100
            },
            "start": 1091,
            "end": 1100
          },
          "definite": false,
          "start": 1085,
          "end": 1100
        }
      ],
      "declare": false,
      "start": 1081,
      "end": 1101
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
            "name": "rf2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1109
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1112,
              "end": 1116
            },
            "operator": ">>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1121
            },
            "start": 1112,
            "end": 1121
          },
          "definite": false,
          "start": 1106,
          "end": 1121
        }
      ],
      "declare": false,
      "start": 1102,
      "end": 1122
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
            "name": "rf3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1130
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1133,
              "end": 1137
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1141,
              "end": 1142
            },
            "start": 1133,
            "end": 1142
          },
          "definite": false,
          "start": 1127,
          "end": 1142
        }
      ],
      "declare": false,
      "start": 1123,
      "end": 1143
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
            "name": "rf4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1151
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1154,
              "end": 1158
            },
            "operator": ">>",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1165
              },
              "optional": false,
              "computed": false,
              "start": 1162,
              "end": 1165
            },
            "start": 1154,
            "end": 1165
          },
          "definite": false,
          "start": 1148,
          "end": 1165
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1166
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
            "name": "rf5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1171,
            "end": 1174
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1178
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1182,
              "end": 1186
            },
            "start": 1177,
            "end": 1186
          },
          "definite": false,
          "start": 1171,
          "end": 1186
        }
      ],
      "declare": false,
      "start": 1167,
      "end": 1187
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
            "name": "rf6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1192,
            "end": 1195
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1199
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1203,
              "end": 1207
            },
            "start": 1198,
            "end": 1207
          },
          "definite": false,
          "start": 1192,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1188,
      "end": 1208
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
            "name": "rf7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1213,
            "end": 1216
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1219,
              "end": 1220
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1224,
              "end": 1228
            },
            "start": 1219,
            "end": 1228
          },
          "definite": false,
          "start": 1213,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 1209,
      "end": 1229
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
            "name": "rf8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1237
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
                "start": 1240,
                "end": 1241
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1240,
              "end": 1243
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1247,
              "end": 1251
            },
            "start": 1240,
            "end": 1251
          },
          "definite": false,
          "start": 1234,
          "end": 1251
        }
      ],
      "declare": false,
      "start": 1230,
      "end": 1252
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
            "name": "rg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1274,
            "end": 1277
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1280,
              "end": 1284
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1290
            },
            "start": 1280,
            "end": 1290
          },
          "definite": false,
          "start": 1274,
          "end": 1290
        }
      ],
      "declare": false,
      "start": 1270,
      "end": 1291
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
            "name": "rg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1299
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1302,
              "end": 1306
            },
            "operator": ">>>",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1312
            },
            "start": 1302,
            "end": 1312
          },
          "definite": false,
          "start": 1296,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1292,
      "end": 1313
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
            "name": "rg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1321
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1324,
              "end": 1328
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1333,
              "end": 1334
            },
            "start": 1324,
            "end": 1334
          },
          "definite": false,
          "start": 1318,
          "end": 1334
        }
      ],
      "declare": false,
      "start": 1314,
      "end": 1335
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
            "name": "rg4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1343
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1346,
              "end": 1350
            },
            "operator": ">>>",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1356
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "optional": false,
              "computed": false,
              "start": 1355,
              "end": 1358
            },
            "start": 1346,
            "end": 1358
          },
          "definite": false,
          "start": 1340,
          "end": 1358
        }
      ],
      "declare": false,
      "start": 1336,
      "end": 1359
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
            "name": "rg5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1364,
            "end": 1367
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1370,
              "end": 1371
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1376,
              "end": 1380
            },
            "start": 1370,
            "end": 1380
          },
          "definite": false,
          "start": 1364,
          "end": 1380
        }
      ],
      "declare": false,
      "start": 1360,
      "end": 1381
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
            "name": "rg6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1389
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1393
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1398,
              "end": 1402
            },
            "start": 1392,
            "end": 1402
          },
          "definite": false,
          "start": 1386,
          "end": 1402
        }
      ],
      "declare": false,
      "start": 1382,
      "end": 1403
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
            "name": "rg7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1408,
            "end": 1411
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1414,
              "end": 1415
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1420,
              "end": 1424
            },
            "start": 1414,
            "end": 1424
          },
          "definite": false,
          "start": 1408,
          "end": 1424
        }
      ],
      "declare": false,
      "start": 1404,
      "end": 1425
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
            "name": "rg8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1430,
            "end": 1433
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
                "start": 1436,
                "end": 1437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1439
              },
              "optional": false,
              "computed": false,
              "start": 1436,
              "end": 1439
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1444,
              "end": 1448
            },
            "start": 1436,
            "end": 1448
          },
          "definite": false,
          "start": 1430,
          "end": 1448
        }
      ],
      "declare": false,
      "start": 1426,
      "end": 1449
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
            "name": "rh1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1469,
            "end": 1472
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1475,
              "end": 1479
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1482,
              "end": 1483
            },
            "start": 1475,
            "end": 1483
          },
          "definite": false,
          "start": 1469,
          "end": 1483
        }
      ],
      "declare": false,
      "start": 1465,
      "end": 1484
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
            "name": "rh2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1489,
            "end": 1492
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1495,
              "end": 1499
            },
            "operator": "&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1502,
              "end": 1503
            },
            "start": 1495,
            "end": 1503
          },
          "definite": false,
          "start": 1489,
          "end": 1503
        }
      ],
      "declare": false,
      "start": 1485,
      "end": 1504
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
            "name": "rh3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1509,
            "end": 1512
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1515,
              "end": 1519
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1522,
              "end": 1523
            },
            "start": 1515,
            "end": 1523
          },
          "definite": false,
          "start": 1509,
          "end": 1523
        }
      ],
      "declare": false,
      "start": 1505,
      "end": 1524
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
            "name": "rh4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1532
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1535,
              "end": 1539
            },
            "operator": "&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1545
              },
              "optional": false,
              "computed": false,
              "start": 1542,
              "end": 1545
            },
            "start": 1535,
            "end": 1545
          },
          "definite": false,
          "start": 1529,
          "end": 1545
        }
      ],
      "declare": false,
      "start": 1525,
      "end": 1546
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
            "name": "rh5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1551,
            "end": 1554
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1557,
              "end": 1558
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1561,
              "end": 1565
            },
            "start": 1557,
            "end": 1565
          },
          "definite": false,
          "start": 1551,
          "end": 1565
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1566
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
            "name": "rh6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1571,
            "end": 1574
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1577,
              "end": 1578
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1581,
              "end": 1585
            },
            "start": 1577,
            "end": 1585
          },
          "definite": false,
          "start": 1571,
          "end": 1585
        }
      ],
      "declare": false,
      "start": 1567,
      "end": 1586
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
            "name": "rh7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1591,
            "end": 1594
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1597,
              "end": 1598
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1601,
              "end": 1605
            },
            "start": 1597,
            "end": 1605
          },
          "definite": false,
          "start": 1591,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1587,
      "end": 1606
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
            "name": "rh8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1614
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
                "start": 1617,
                "end": 1618
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1620
              },
              "optional": false,
              "computed": false,
              "start": 1617,
              "end": 1620
            },
            "operator": "&",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1623,
              "end": 1627
            },
            "start": 1617,
            "end": 1627
          },
          "definite": false,
          "start": 1611,
          "end": 1627
        }
      ],
      "declare": false,
      "start": 1607,
      "end": 1628
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
            "name": "ri1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1648,
            "end": 1651
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1654,
              "end": 1658
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1661,
              "end": 1662
            },
            "start": 1654,
            "end": 1662
          },
          "definite": false,
          "start": 1648,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1644,
      "end": 1663
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
            "name": "ri2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1668,
            "end": 1671
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1674,
              "end": 1678
            },
            "operator": "^",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1681,
              "end": 1682
            },
            "start": 1674,
            "end": 1682
          },
          "definite": false,
          "start": 1668,
          "end": 1682
        }
      ],
      "declare": false,
      "start": 1664,
      "end": 1683
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
            "name": "ri3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1688,
            "end": 1691
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1694,
              "end": 1698
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1701,
              "end": 1702
            },
            "start": 1694,
            "end": 1702
          },
          "definite": false,
          "start": 1688,
          "end": 1702
        }
      ],
      "declare": false,
      "start": 1684,
      "end": 1703
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
            "name": "ri4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1708,
            "end": 1711
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1714,
              "end": 1718
            },
            "operator": "^",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1721,
                "end": 1722
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1724
              },
              "optional": false,
              "computed": false,
              "start": 1721,
              "end": 1724
            },
            "start": 1714,
            "end": 1724
          },
          "definite": false,
          "start": 1708,
          "end": 1724
        }
      ],
      "declare": false,
      "start": 1704,
      "end": 1725
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
            "name": "ri5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1730,
            "end": 1733
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1736,
              "end": 1737
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1740,
              "end": 1744
            },
            "start": 1736,
            "end": 1744
          },
          "definite": false,
          "start": 1730,
          "end": 1744
        }
      ],
      "declare": false,
      "start": 1726,
      "end": 1745
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
            "name": "ri6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1753
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1757
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1760,
              "end": 1764
            },
            "start": 1756,
            "end": 1764
          },
          "definite": false,
          "start": 1750,
          "end": 1764
        }
      ],
      "declare": false,
      "start": 1746,
      "end": 1765
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
            "name": "ri7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1770,
            "end": 1773
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1776,
              "end": 1777
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1780,
              "end": 1784
            },
            "start": 1776,
            "end": 1784
          },
          "definite": false,
          "start": 1770,
          "end": 1784
        }
      ],
      "declare": false,
      "start": 1766,
      "end": 1785
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
            "name": "ri8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1790,
            "end": 1793
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
                "start": 1796,
                "end": 1797
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1799
              },
              "optional": false,
              "computed": false,
              "start": 1796,
              "end": 1799
            },
            "operator": "^",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1802,
              "end": 1806
            },
            "start": 1796,
            "end": 1806
          },
          "definite": false,
          "start": 1790,
          "end": 1806
        }
      ],
      "declare": false,
      "start": 1786,
      "end": 1807
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
            "name": "rj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1830
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1833,
              "end": 1837
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1840,
              "end": 1841
            },
            "start": 1833,
            "end": 1841
          },
          "definite": false,
          "start": 1827,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1823,
      "end": 1842
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
            "name": "rj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1847,
            "end": 1850
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1853,
              "end": 1857
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1861
            },
            "start": 1853,
            "end": 1861
          },
          "definite": false,
          "start": 1847,
          "end": 1861
        }
      ],
      "declare": false,
      "start": 1843,
      "end": 1862
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
            "name": "rj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1870
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1873,
              "end": 1877
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1880,
              "end": 1881
            },
            "start": 1873,
            "end": 1881
          },
          "definite": false,
          "start": 1867,
          "end": 1881
        }
      ],
      "declare": false,
      "start": 1863,
      "end": 1882
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
            "name": "rj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1887,
            "end": 1890
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1893,
              "end": 1897
            },
            "operator": "|",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1900,
                "end": 1901
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1902,
                "end": 1903
              },
              "optional": false,
              "computed": false,
              "start": 1900,
              "end": 1903
            },
            "start": 1893,
            "end": 1903
          },
          "definite": false,
          "start": 1887,
          "end": 1903
        }
      ],
      "declare": false,
      "start": 1883,
      "end": 1904
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
            "name": "rj5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1909,
            "end": 1912
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1916
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1919,
              "end": 1923
            },
            "start": 1915,
            "end": 1923
          },
          "definite": false,
          "start": 1909,
          "end": 1923
        }
      ],
      "declare": false,
      "start": 1905,
      "end": 1924
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
            "name": "rj6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1929,
            "end": 1932
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1935,
              "end": 1936
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1939,
              "end": 1943
            },
            "start": 1935,
            "end": 1943
          },
          "definite": false,
          "start": 1929,
          "end": 1943
        }
      ],
      "declare": false,
      "start": 1925,
      "end": 1944
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
            "name": "rj7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1952
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1955,
              "end": 1956
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1959,
              "end": 1963
            },
            "start": 1955,
            "end": 1963
          },
          "definite": false,
          "start": 1949,
          "end": 1963
        }
      ],
      "declare": false,
      "start": 1945,
      "end": 1964
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
            "name": "rj8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1969,
            "end": 1972
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
                "start": 1975,
                "end": 1976
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1977,
                "end": 1978
              },
              "optional": false,
              "computed": false,
              "start": 1975,
              "end": 1978
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1981,
              "end": 1985
            },
            "start": 1975,
            "end": 1985
          },
          "definite": false,
          "start": 1969,
          "end": 1985
        }
      ],
      "declare": false,
      "start": 1965,
      "end": 1986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 109,
  "end": 1986
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Null",
    "value": "null",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Null",
    "value": "null",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Null",
    "value": "null",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Null",
    "value": "null",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 270,
    "end": 271
  },
  {
    "type": "Null",
    "value": "null",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 290,
    "end": 291
  },
  {
    "type": "Null",
    "value": "null",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 310,
    "end": 311
  },
  {
    "type": "Null",
    "value": "null",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 332,
    "end": 333
  },
  {
    "type": "Null",
    "value": "null",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Null",
    "value": "null",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Null",
    "value": "null",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 395,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Null",
    "value": "null",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 410,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Null",
    "value": "null",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 449,
    "end": 450
  },
  {
    "type": "Null",
    "value": "null",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 469,
    "end": 470
  },
  {
    "type": "Null",
    "value": "null",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 489,
    "end": 490
  },
  {
    "type": "Null",
    "value": "null",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 511,
    "end": 512
  },
  {
    "type": "Null",
    "value": "null",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Null",
    "value": "null",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Null",
    "value": "null",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Null",
    "value": "null",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 589,
    "end": 590
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Null",
    "value": "null",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 628,
    "end": 629
  },
  {
    "type": "Null",
    "value": "null",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 648,
    "end": 649
  },
  {
    "type": "Null",
    "value": "null",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "rc7",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 668,
    "end": 669
  },
  {
    "type": "Null",
    "value": "null",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "rc8",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 690,
    "end": 691
  },
  {
    "type": "Null",
    "value": "null",
    "start": 692,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Null",
    "value": "null",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 730,
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
    "value": "rd2",
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
    "type": "Null",
    "value": "null",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Null",
    "value": "null",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 768,
    "end": 769
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 773,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Null",
    "value": "null",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 807,
    "end": 808
  },
  {
    "type": "Null",
    "value": "null",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 827,
    "end": 828
  },
  {
    "type": "Null",
    "value": "null",
    "start": 829,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 835,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "rd7",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 847,
    "end": 848
  },
  {
    "type": "Null",
    "value": "null",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "rd8",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 869,
    "end": 870
  },
  {
    "type": "Null",
    "value": "null",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902
  },
  {
    "type": "Null",
    "value": "null",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 908,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 918,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 922,
    "end": 923
  },
  {
    "type": "Null",
    "value": "null",
    "start": 924,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 929,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 939,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Null",
    "value": "null",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 950,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Null",
    "value": "null",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 971,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 979,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 991,
    "end": 993
  },
  {
    "type": "Null",
    "value": "null",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1012,
    "end": 1014
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "re7",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "re8",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1059,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1179,
    "end": 1181
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1182,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "rf7",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1224,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "rf8",
    "start": 1234,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1247,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1302,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1324,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1351,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "rg6",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "rg7",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1420,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "rg8",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1475,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1495,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1529,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1535,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1561,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1581,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "rh7",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "rh8",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "ri1",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1654,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "ri2",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "ri3",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1694,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "ri4",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1714,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1726,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "ri5",
    "start": 1730,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1740,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1746,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "ri6",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1760,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "ri7",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1780,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "ri8",
    "start": 1790,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1802,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "rj1",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1833,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1843,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "rj2",
    "start": 1847,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1853,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "rj3",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "rj4",
    "start": 1887,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1893,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1905,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "rj5",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1919,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "rj6",
    "start": 1929,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "rj7",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1959,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "rj8",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1981,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986
  }
]
```
