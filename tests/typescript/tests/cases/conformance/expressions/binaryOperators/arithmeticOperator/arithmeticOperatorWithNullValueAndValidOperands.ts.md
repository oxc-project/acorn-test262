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
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149,
    "range": [
      146,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 186,
    "end": 190,
    "range": [
      186,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 200,
    "end": 203,
    "range": [
      200,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 206,
    "end": 210,
    "range": [
      206,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 246,
    "end": 250,
    "range": [
      246,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "ra6",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 292,
    "end": 296,
    "range": [
      292,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 312,
    "end": 316,
    "range": [
      312,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 318,
    "end": 321,
    "range": [
      318,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 334,
    "end": 338,
    "range": [
      334,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358,
    "range": [
      355,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 365,
    "end": 369,
    "range": [
      365,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 379,
    "end": 382,
    "range": [
      379,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 385,
    "end": 389,
    "range": [
      385,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 395,
    "end": 398,
    "range": [
      395,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 405,
    "end": 409,
    "range": [
      405,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418,
    "range": [
      415,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 419,
    "end": 422,
    "range": [
      419,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 425,
    "end": 429,
    "range": [
      425,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440,
    "range": [
      437,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 441,
    "end": 444,
    "range": [
      441,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 451,
    "end": 455,
    "range": [
      451,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 481,
    "end": 484,
    "range": [
      481,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 491,
    "end": 495,
    "range": [
      491,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 513,
    "end": 517,
    "range": [
      513,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 534,
    "end": 537,
    "range": [
      534,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 538,
    "end": 541,
    "range": [
      538,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "rc2",
    "start": 558,
    "end": 561,
    "range": [
      558,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 564,
    "end": 568,
    "range": [
      564,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "rc3",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "rc4",
    "start": 598,
    "end": 601,
    "range": [
      598,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 604,
    "end": 608,
    "range": [
      604,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619,
    "range": [
      616,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "rc5",
    "start": 620,
    "end": 623,
    "range": [
      620,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 630,
    "end": 634,
    "range": [
      630,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 636,
    "end": 639,
    "range": [
      636,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "rc6",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 650,
    "end": 654,
    "range": [
      650,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659,
    "range": [
      656,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "rc7",
    "start": 660,
    "end": 663,
    "range": [
      660,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 670,
    "end": 674,
    "range": [
      670,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 676,
    "end": 679,
    "range": [
      676,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "rc8",
    "start": 680,
    "end": 683,
    "range": [
      680,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 692,
    "end": 696,
    "range": [
      692,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716,
    "range": [
      713,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "rd1",
    "start": 717,
    "end": 720,
    "range": [
      717,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 723,
    "end": 727,
    "range": [
      723,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 733,
    "end": 736,
    "range": [
      733,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "rd2",
    "start": 737,
    "end": 740,
    "range": [
      737,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 743,
    "end": 747,
    "range": [
      743,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 753,
    "end": 756,
    "range": [
      753,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "rd3",
    "start": 757,
    "end": 760,
    "range": [
      757,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 763,
    "end": 767,
    "range": [
      763,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 773,
    "end": 776,
    "range": [
      773,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "rd4",
    "start": 777,
    "end": 780,
    "range": [
      777,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 783,
    "end": 787,
    "range": [
      783,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 795,
    "end": 798,
    "range": [
      795,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "rd5",
    "start": 799,
    "end": 802,
    "range": [
      799,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 809,
    "end": 813,
    "range": [
      809,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "rd6",
    "start": 819,
    "end": 822,
    "range": [
      819,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 829,
    "end": 833,
    "range": [
      829,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 835,
    "end": 838,
    "range": [
      835,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "rd7",
    "start": 839,
    "end": 842,
    "range": [
      839,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 849,
    "end": 853,
    "range": [
      849,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "rd8",
    "start": 859,
    "end": 862,
    "range": [
      859,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 871,
    "end": 875,
    "range": [
      871,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "re1",
    "start": 897,
    "end": 900,
    "range": [
      897,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 914,
    "end": 917,
    "range": [
      914,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "re2",
    "start": 918,
    "end": 921,
    "range": [
      918,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 924,
    "end": 928,
    "range": [
      924,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "re3",
    "start": 939,
    "end": 942,
    "range": [
      939,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 945,
    "end": 949,
    "range": [
      945,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 950,
    "end": 952,
    "range": [
      950,
      952
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "re4",
    "start": 960,
    "end": 963,
    "range": [
      960,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 966,
    "end": 970,
    "range": [
      966,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 971,
    "end": 973,
    "range": [
      971,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 979,
    "end": 982,
    "range": [
      979,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "re5",
    "start": 983,
    "end": 986,
    "range": [
      983,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 991,
    "end": 993,
    "range": [
      991,
      993
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "re6",
    "start": 1004,
    "end": 1007,
    "range": [
      1004,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1012,
    "end": 1014,
    "range": [
      1012,
      1014
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1015,
    "end": 1019,
    "range": [
      1015,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024,
    "range": [
      1021,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "re7",
    "start": 1025,
    "end": 1028,
    "range": [
      1025,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1033,
    "end": 1035,
    "range": [
      1033,
      1035
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1036,
    "end": 1040,
    "range": [
      1036,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1042,
    "end": 1045,
    "range": [
      1042,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "re8",
    "start": 1046,
    "end": 1049,
    "range": [
      1046,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1056,
    "end": 1058,
    "range": [
      1056,
      1058
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1059,
    "end": 1063,
    "range": [
      1059,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1081,
    "end": 1084,
    "range": [
      1081,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "rf1",
    "start": 1085,
    "end": 1088,
    "range": [
      1085,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1091,
    "end": 1095,
    "range": [
      1091,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1096,
    "end": 1098,
    "range": [
      1096,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "rf2",
    "start": 1106,
    "end": 1109,
    "range": [
      1106,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1112,
    "end": 1116,
    "range": [
      1112,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1117,
    "end": 1119,
    "range": [
      1117,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1123,
    "end": 1126,
    "range": [
      1123,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "rf3",
    "start": 1127,
    "end": 1130,
    "range": [
      1127,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1138,
    "end": 1140,
    "range": [
      1138,
      1140
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "rf4",
    "start": 1148,
    "end": 1151,
    "range": [
      1148,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1154,
    "end": 1158,
    "range": [
      1154,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1159,
    "end": 1161,
    "range": [
      1159,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 1167,
    "end": 1170,
    "range": [
      1167,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "rf5",
    "start": 1171,
    "end": 1174,
    "range": [
      1171,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1179,
    "end": 1181,
    "range": [
      1179,
      1181
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1182,
    "end": 1186,
    "range": [
      1182,
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
    "value": "var",
    "start": 1188,
    "end": 1191,
    "range": [
      1188,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "rf6",
    "start": 1192,
    "end": 1195,
    "range": [
      1192,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1200,
    "end": 1202,
    "range": [
      1200,
      1202
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1203,
    "end": 1207,
    "range": [
      1203,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1209,
    "end": 1212,
    "range": [
      1209,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "rf7",
    "start": 1213,
    "end": 1216,
    "range": [
      1213,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1221,
    "end": 1223,
    "range": [
      1221,
      1223
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1224,
    "end": 1228,
    "range": [
      1224,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1230,
    "end": 1233,
    "range": [
      1230,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "rf8",
    "start": 1234,
    "end": 1237,
    "range": [
      1234,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1244,
    "end": 1246,
    "range": [
      1244,
      1246
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1247,
    "end": 1251,
    "range": [
      1247,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1270,
    "end": 1273,
    "range": [
      1270,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "rg1",
    "start": 1274,
    "end": 1277,
    "range": [
      1274,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1285,
    "end": 1288,
    "range": [
      1285,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1292,
    "end": 1295,
    "range": [
      1292,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "rg2",
    "start": 1296,
    "end": 1299,
    "range": [
      1296,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1302,
    "end": 1306,
    "range": [
      1302,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "var",
    "start": 1314,
    "end": 1317,
    "range": [
      1314,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "rg3",
    "start": 1318,
    "end": 1321,
    "range": [
      1318,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1324,
    "end": 1328,
    "range": [
      1324,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1329,
    "end": 1332,
    "range": [
      1329,
      1332
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1336,
    "end": 1339,
    "range": [
      1336,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "rg4",
    "start": 1340,
    "end": 1343,
    "range": [
      1340,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1346,
    "end": 1350,
    "range": [
      1346,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1360,
    "end": 1363,
    "range": [
      1360,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "rg5",
    "start": 1364,
    "end": 1367,
    "range": [
      1364,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1372,
    "end": 1375,
    "range": [
      1372,
      1375
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1376,
    "end": 1380,
    "range": [
      1376,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1382,
    "end": 1385,
    "range": [
      1382,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "rg6",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1394,
    "end": 1397,
    "range": [
      1394,
      1397
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1398,
    "end": 1402,
    "range": [
      1398,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1404,
    "end": 1407,
    "range": [
      1404,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "rg7",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1416,
    "end": 1419,
    "range": [
      1416,
      1419
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1420,
    "end": 1424,
    "range": [
      1420,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1426,
    "end": 1429,
    "range": [
      1426,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "rg8",
    "start": 1430,
    "end": 1433,
    "range": [
      1430,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1444,
    "end": 1448,
    "range": [
      1444,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1465,
    "end": 1468,
    "range": [
      1465,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "rh1",
    "start": 1469,
    "end": 1472,
    "range": [
      1469,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1475,
    "end": 1479,
    "range": [
      1475,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1485,
    "end": 1488,
    "range": [
      1485,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "rh2",
    "start": 1489,
    "end": 1492,
    "range": [
      1489,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1495,
    "end": 1499,
    "range": [
      1495,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1505,
    "end": 1508,
    "range": [
      1505,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "rh3",
    "start": 1509,
    "end": 1512,
    "range": [
      1509,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1515,
    "end": 1519,
    "range": [
      1515,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1525,
    "end": 1528,
    "range": [
      1525,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "rh4",
    "start": 1529,
    "end": 1532,
    "range": [
      1529,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1535,
    "end": 1539,
    "range": [
      1535,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "rh5",
    "start": 1551,
    "end": 1554,
    "range": [
      1551,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1561,
    "end": 1565,
    "range": [
      1561,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1567,
    "end": 1570,
    "range": [
      1567,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "rh6",
    "start": 1571,
    "end": 1574,
    "range": [
      1571,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1581,
    "end": 1585,
    "range": [
      1581,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1587,
    "end": 1590,
    "range": [
      1587,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "rh7",
    "start": 1591,
    "end": 1594,
    "range": [
      1591,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1601,
    "end": 1605,
    "range": [
      1601,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610,
    "range": [
      1607,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "rh8",
    "start": 1611,
    "end": 1614,
    "range": [
      1611,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1623,
    "end": 1627,
    "range": [
      1623,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647,
    "range": [
      1644,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "ri1",
    "start": 1648,
    "end": 1651,
    "range": [
      1648,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1654,
    "end": 1658,
    "range": [
      1654,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1664,
    "end": 1667,
    "range": [
      1664,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "ri2",
    "start": 1668,
    "end": 1671,
    "range": [
      1668,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1674,
    "end": 1678,
    "range": [
      1674,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1684,
    "end": 1687,
    "range": [
      1684,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "ri3",
    "start": 1688,
    "end": 1691,
    "range": [
      1688,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1694,
    "end": 1698,
    "range": [
      1694,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707,
    "range": [
      1704,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "ri4",
    "start": 1708,
    "end": 1711,
    "range": [
      1708,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1714,
    "end": 1718,
    "range": [
      1714,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1726,
    "end": 1729,
    "range": [
      1726,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "ri5",
    "start": 1730,
    "end": 1733,
    "range": [
      1730,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1740,
    "end": 1744,
    "range": [
      1740,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1746,
    "end": 1749,
    "range": [
      1746,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "ri6",
    "start": 1750,
    "end": 1753,
    "range": [
      1750,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1760,
    "end": 1764,
    "range": [
      1760,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1766,
    "end": 1769,
    "range": [
      1766,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "ri7",
    "start": 1770,
    "end": 1773,
    "range": [
      1770,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1780,
    "end": 1784,
    "range": [
      1780,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1786,
    "end": 1789,
    "range": [
      1786,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "ri8",
    "start": 1790,
    "end": 1793,
    "range": [
      1790,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1802,
    "end": 1806,
    "range": [
      1802,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1823,
    "end": 1826,
    "range": [
      1823,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "rj1",
    "start": 1827,
    "end": 1830,
    "range": [
      1827,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1833,
    "end": 1837,
    "range": [
      1833,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "var",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "rj2",
    "start": 1847,
    "end": 1850,
    "range": [
      1847,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1853,
    "end": 1857,
    "range": [
      1853,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1863,
    "end": 1866,
    "range": [
      1863,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "rj3",
    "start": 1867,
    "end": 1870,
    "range": [
      1867,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1873,
    "end": 1877,
    "range": [
      1873,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1883,
    "end": 1886,
    "range": [
      1883,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "rj4",
    "start": 1887,
    "end": 1890,
    "range": [
      1887,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1893,
    "end": 1897,
    "range": [
      1893,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1905,
    "end": 1908,
    "range": [
      1905,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "rj5",
    "start": 1909,
    "end": 1912,
    "range": [
      1909,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1919,
    "end": 1923,
    "range": [
      1919,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1925,
    "end": 1928,
    "range": [
      1925,
      1928
    ]
  },
  {
    "type": "Identifier",
    "value": "rj6",
    "start": 1929,
    "end": 1932,
    "range": [
      1929,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1939,
    "end": 1943,
    "range": [
      1939,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1945,
    "end": 1948,
    "range": [
      1945,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "rj7",
    "start": 1949,
    "end": 1952,
    "range": [
      1949,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1959,
    "end": 1963,
    "range": [
      1959,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1965,
    "end": 1968,
    "range": [
      1965,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "rj8",
    "start": 1969,
    "end": 1972,
    "range": [
      1969,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1981,
    "end": 1985,
    "range": [
      1981,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  }
]
```
