__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 65
          }
        ],
        "start": 42,
        "end": 67
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 79,
            "end": 82
          },
          "definite": false,
          "start": 75,
          "end": 82
        }
      ],
      "declare": false,
      "start": 69,
      "end": 83
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 85,
          "end": 89
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 111
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 129,
                "end": 134
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "optional": false,
              "computed": false,
              "start": 129,
              "end": 136
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 118,
            "end": 137
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 153,
                  "end": 158
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 160
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 163,
                "end": 164
              },
              "start": 153,
              "end": 164
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 142,
            "end": 165
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 181,
                  "end": 186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "optional": false,
                "computed": false,
                "start": 181,
                "end": 188
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 192,
                "end": 193
              },
              "start": 181,
              "end": 193
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 170,
            "end": 194
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 210,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "optional": false,
                "computed": false,
                "start": 210,
                "end": 217
              },
              "start": 210,
              "end": 219
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 199,
            "end": 220
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 236,
                  "end": 241
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 243
                },
                "optional": false,
                "computed": false,
                "start": 236,
                "end": 243
              },
              "start": 236,
              "end": 245
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 225,
            "end": 246
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 264,
                  "end": 269
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "optional": false,
                "computed": false,
                "start": 264,
                "end": 271
              },
              "start": 262,
              "end": 271
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 251,
            "end": 272
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 290,
                  "end": 295
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "optional": false,
                "computed": false,
                "start": 290,
                "end": 297
              },
              "start": 288,
              "end": 297
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 277,
            "end": 298
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 318
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 320,
                        "end": 325
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "optional": false,
                      "computed": false,
                      "start": 320,
                      "end": 327
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 317,
                    "end": 327
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 329
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 337,
                      "end": 338
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 334,
                    "end": 338
                  }
                ],
                "start": 332,
                "end": 340
              },
              "start": 315,
              "end": 340
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 303,
            "end": 342
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 359,
                      "end": 364
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 366
                    },
                    "optional": false,
                    "computed": false,
                    "start": 359,
                    "end": 366
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 367
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 371,
                    "end": 372
                  }
                ],
                "start": 370,
                "end": 373
              },
              "start": 358,
              "end": 373
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 347,
            "end": 374
          }
        ],
        "start": 112,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 376
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 382
          },
          "start": 378,
          "end": 382
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 404
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 422,
                "end": 427
              },
              "property": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 428,
                "end": 431
              },
              "optional": false,
              "computed": true,
              "start": 422,
              "end": 432
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 411,
            "end": 433
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 449,
                  "end": 454
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 455,
                  "end": 458
                },
                "optional": false,
                "computed": true,
                "start": 449,
                "end": 459
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 462,
                "end": 463
              },
              "start": 449,
              "end": 463
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 438,
            "end": 464
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 480,
                  "end": 485
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 486,
                  "end": 489
                },
                "optional": false,
                "computed": true,
                "start": 480,
                "end": 490
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 494,
                "end": 495
              },
              "start": 480,
              "end": 495
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 469,
            "end": 496
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 509
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 512,
                  "end": 517
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 518,
                  "end": 521
                },
                "optional": false,
                "computed": true,
                "start": 512,
                "end": 522
              },
              "start": 512,
              "end": 524
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 501,
            "end": 525
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 541,
                  "end": 546
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 547,
                  "end": 550
                },
                "optional": false,
                "computed": true,
                "start": 541,
                "end": 551
              },
              "start": 541,
              "end": 553
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 530,
            "end": 554
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 567
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 572,
                  "end": 577
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 578,
                  "end": 581
                },
                "optional": false,
                "computed": true,
                "start": 572,
                "end": 582
              },
              "start": 570,
              "end": 582
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 559,
            "end": 583
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 596
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 601,
                  "end": 606
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 607,
                  "end": 610
                },
                "optional": false,
                "computed": true,
                "start": 601,
                "end": 611
              },
              "start": 599,
              "end": 611
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 588,
            "end": 612
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 625
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 632
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 634,
                        "end": 639
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 640,
                        "end": 643
                      },
                      "optional": false,
                      "computed": true,
                      "start": 634,
                      "end": 644
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 631,
                    "end": 644
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 646
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 651,
                      "end": 652
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 654,
                      "end": 655
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 651,
                    "end": 655
                  }
                ],
                "start": 649,
                "end": 657
              },
              "start": 629,
              "end": 657
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 617,
            "end": 659
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 672
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 676,
                      "end": 681
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 682,
                      "end": 685
                    },
                    "optional": false,
                    "computed": true,
                    "start": 676,
                    "end": 686
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 687
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 691,
                    "end": 692
                  }
                ],
                "start": 690,
                "end": 693
              },
              "start": 675,
              "end": 693
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 664,
            "end": 694
          }
        ],
        "start": 405,
        "end": 696
      },
      "abstract": false,
      "declare": false,
      "start": 378,
      "end": 696
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 702
          },
          "start": 698,
          "end": 702
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 711
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 724
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 742,
                "end": 747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "optional": false,
              "computed": true,
              "start": 742,
              "end": 750
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 731,
            "end": 751
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 764
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 767,
                  "end": 772
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "optional": false,
                "computed": true,
                "start": 767,
                "end": 775
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 778,
                "end": 779
              },
              "start": 767,
              "end": 779
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 756,
            "end": 780
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 793
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 796,
                  "end": 801
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 803
                },
                "optional": false,
                "computed": true,
                "start": 796,
                "end": 804
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 808,
                "end": 809
              },
              "start": 796,
              "end": 809
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 785,
            "end": 810
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 823
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 826,
                  "end": 831
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 833
                },
                "optional": false,
                "computed": true,
                "start": 826,
                "end": 834
              },
              "start": 826,
              "end": 836
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 815,
            "end": 837
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 853,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "optional": false,
                "computed": true,
                "start": 853,
                "end": 861
              },
              "start": 853,
              "end": 863
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 842,
            "end": 864
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 877
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 882,
                  "end": 887
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 888,
                  "end": 889
                },
                "optional": false,
                "computed": true,
                "start": 882,
                "end": 890
              },
              "start": 880,
              "end": 890
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 869,
            "end": 891
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 904
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 916
                },
                "optional": false,
                "computed": true,
                "start": 909,
                "end": 917
              },
              "start": 907,
              "end": 917
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 896,
            "end": 918
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 931
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 938
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 940,
                        "end": 945
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 946,
                        "end": 947
                      },
                      "optional": false,
                      "computed": true,
                      "start": 940,
                      "end": 948
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 937,
                    "end": 948
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 950
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 956
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 958,
                      "end": 959
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 955,
                    "end": 959
                  }
                ],
                "start": 953,
                "end": 961
              },
              "start": 935,
              "end": 961
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 923,
            "end": 963
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 975,
              "end": 976
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 980,
                      "end": 985
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 987
                    },
                    "optional": false,
                    "computed": true,
                    "start": 980,
                    "end": 988
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 989
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 993,
                    "end": 994
                  }
                ],
                "start": 992,
                "end": 995
              },
              "start": 979,
              "end": 995
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 968,
            "end": 996
          }
        ],
        "start": 725,
        "end": 998
      },
      "abstract": false,
      "declare": false,
      "start": 698,
      "end": 998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 998
}
```
