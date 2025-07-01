__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 54
          }
        ],
        "start": 16,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 87
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 88,
                        "end": 99
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 84,
                    "end": 107
                  }
                ],
                "start": 78,
                "end": 109
              },
              "start": 76,
              "end": 109
            },
            "start": 69,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 69,
          "end": 109
        }
      ],
      "declare": true,
      "start": 57,
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
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 119
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 122,
            "end": 129
          },
          "definite": false,
          "start": 114,
          "end": 129
        }
      ],
      "declare": false,
      "start": 110,
      "end": 130
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 148
                },
                "typeArguments": null,
                "start": 143,
                "end": 148
              },
              "start": 141,
              "end": 148
            },
            "start": 135,
            "end": 148
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 157
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 159,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 166
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 173
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 175,
                  "end": 183
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 183
              }
            ],
            "start": 151,
            "end": 185
          },
          "definite": false,
          "start": 135,
          "end": 185
        }
      ],
      "declare": false,
      "start": 131,
      "end": 186
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 204
                },
                "typeArguments": null,
                "start": 199,
                "end": 204
              },
              "start": 197,
              "end": 204
            },
            "start": 191,
            "end": 204
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 215,
                  "end": 224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 224
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 231
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 233,
                  "end": 243
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 243
              }
            ],
            "start": 207,
            "end": 245
          },
          "definite": false,
          "start": 191,
          "end": 245
        }
      ],
      "declare": false,
      "start": 187,
      "end": 246
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
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              },
              "start": 252,
              "end": 260
            },
            "start": 251,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 260
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 268
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 275
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 264,
                "end": 275
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 277
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 286
          },
          "definite": false,
          "start": 262,
          "end": 286
        }
      ],
      "declare": false,
      "start": 247,
      "end": 287
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
                "type": "TSStringKeyword",
                "start": 295,
                "end": 301
              },
              "start": 293,
              "end": 301
            },
            "start": 292,
            "end": 301
          },
          "init": null,
          "definite": false,
          "start": 292,
          "end": 301
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 309
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 316
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 316
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 323
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 331
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 331
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 333
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 342
          },
          "definite": false,
          "start": 303,
          "end": 342
        }
      ],
      "declare": false,
      "start": 288,
      "end": 343
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              },
              "start": 349,
              "end": 357
            },
            "start": 348,
            "end": 357
          },
          "init": null,
          "definite": false,
          "start": 348,
          "end": 357
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 372
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 379
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 387
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 374,
                "end": 387
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 389
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 398
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 400,
                  "end": 407
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 394,
                "end": 407
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 414
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 416,
                  "end": 431
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 409,
                "end": 431
              }
            ],
            "start": 392,
            "end": 433
          },
          "definite": false,
          "start": 359,
          "end": 433
        }
      ],
      "declare": false,
      "start": 344,
      "end": 434
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 446
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 453
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 442,
                "end": 453
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 455
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 464
          },
          "definite": false,
          "start": 440,
          "end": 464
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 467
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 475
          },
          "definite": false,
          "start": 466,
          "end": 475
        }
      ],
      "declare": false,
      "start": 436,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 487
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 494
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 483,
                "end": 494
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 501
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 509
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 496,
                "end": 509
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 511
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 520
          },
          "definite": false,
          "start": 481,
          "end": 520
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 523
          },
          "init": {
            "type": "Literal",
            "value": " hello",
            "raw": "\" hello\"",
            "start": 526,
            "end": 534
          },
          "definite": false,
          "start": 522,
          "end": 534
        }
      ],
      "declare": false,
      "start": 477,
      "end": 535
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 546
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 553
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 542,
                "end": 553
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 560
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 568
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 555,
                "end": 568
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 570
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 579
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 581,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 575,
                "end": 588
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 595
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 597,
                  "end": 612
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 590,
                "end": 612
              }
            ],
            "start": 573,
            "end": 614
          },
          "definite": false,
          "start": 540,
          "end": 614
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 617
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 625
          },
          "definite": false,
          "start": 616,
          "end": 625
        }
      ],
      "declare": false,
      "start": 536,
      "end": 626
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
            "start": 632,
            "end": 633
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 641
          },
          "definite": false,
          "start": 632,
          "end": 641
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 649
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 656
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 645,
                "end": 656
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 643,
            "end": 658
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 667
          },
          "definite": false,
          "start": 643,
          "end": 667
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 671
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 673,
            "end": 680
          },
          "definite": false,
          "start": 669,
          "end": 680
        }
      ],
      "declare": false,
      "start": 628,
      "end": 681
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
            "typeAnnotation": null,
            "start": 686,
            "end": 687
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 695
          },
          "definite": false,
          "start": 686,
          "end": 695
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 703
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 710
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 699,
                "end": 710
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 717
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 725
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 712,
                "end": 725
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 727
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 736
          },
          "definite": false,
          "start": 697,
          "end": 736
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 738,
            "end": 740
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 743,
            "end": 750
          },
          "definite": false,
          "start": 738,
          "end": 750
        }
      ],
      "declare": false,
      "start": 682,
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 757
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 765
          },
          "definite": false,
          "start": 756,
          "end": 765
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 773
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 780
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 769,
                "end": 780
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 787
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 795
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 782,
                "end": 795
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 797
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 806
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 808,
                  "end": 815
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 802,
                "end": 815
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 822
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 824,
                  "end": 839
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 817,
                "end": 839
              }
            ],
            "start": 800,
            "end": 841
          },
          "definite": false,
          "start": 767,
          "end": 841
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 845
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 853
          },
          "definite": false,
          "start": 843,
          "end": 853
        }
      ],
      "declare": false,
      "start": 752,
      "end": 854
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 859,
          "end": 864
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 868,
          "end": 873
        },
        "start": 859,
        "end": 873
      },
      "consequent": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 881,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 899
                }
              ],
              "optional": false,
              "start": 881,
              "end": 900
            },
            "directive": null,
            "start": 881,
            "end": 901
          }
        ],
        "start": 875,
        "end": 903
      },
      "alternate": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 922
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 926
                },
                "optional": false,
                "computed": false,
                "start": 915,
                "end": 926
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 932
                }
              ],
              "optional": false,
              "start": 915,
              "end": 933
            },
            "directive": null,
            "start": 915,
            "end": 934
          }
        ],
        "start": 909,
        "end": 936
      },
      "start": 855,
      "end": 936
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 936
}
```
