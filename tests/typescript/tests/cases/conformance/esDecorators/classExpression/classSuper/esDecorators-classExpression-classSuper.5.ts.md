__ESTREE_TEST__:AST:
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
            },
            "start": 86,
            "end": 90
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 99
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 112
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
                "start": 126,
                "end": 127
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 130,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 130,
                "end": 137
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 119,
              "end": 138
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
                "start": 150,
                "end": 151
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 154,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "optional": false,
                  "computed": false,
                  "start": 154,
                  "end": 161
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 164,
                  "end": 165
                },
                "start": 154,
                "end": 165
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 143,
              "end": 166
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
                "start": 178,
                "end": 179
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 182,
                    "end": 187
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "optional": false,
                  "computed": false,
                  "start": 182,
                  "end": 189
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 193,
                  "end": 194
                },
                "start": 182,
                "end": 194
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 171,
              "end": 195
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
                "start": 207,
                "end": 208
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
                    "start": 211,
                    "end": 216
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "optional": false,
                  "computed": false,
                  "start": 211,
                  "end": 218
                },
                "start": 211,
                "end": 220
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 200,
              "end": 221
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
                "start": 233,
                "end": 234
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
                    "start": 237,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "optional": false,
                  "computed": false,
                  "start": 237,
                  "end": 244
                },
                "start": 237,
                "end": 246
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 226,
              "end": 247
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
                "start": 259,
                "end": 260
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
                    "start": 265,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 265,
                  "end": 272
                },
                "start": 263,
                "end": 272
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 252,
              "end": 273
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
                "start": 285,
                "end": 286
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
                    "start": 291,
                    "end": 296
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "optional": false,
                  "computed": false,
                  "start": 291,
                  "end": 298
                },
                "start": 289,
                "end": 298
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 278,
              "end": 299
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
                "start": 311,
                "end": 312
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
                        "start": 318,
                        "end": 319
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 321,
                          "end": 326
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 321,
                        "end": 328
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 318,
                      "end": 328
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 330
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
                        "start": 335,
                        "end": 336
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 338,
                        "end": 339
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 335,
                      "end": 339
                    }
                  ],
                  "start": 333,
                  "end": 341
                },
                "start": 316,
                "end": 341
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 304,
              "end": 343
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
                "start": 355,
                "end": 356
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
                        "start": 360,
                        "end": 365
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "optional": false,
                      "computed": false,
                      "start": 360,
                      "end": 367
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 368
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 372,
                      "end": 373
                    }
                  ],
                  "start": 371,
                  "end": 374
                },
                "start": 359,
                "end": 374
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 348,
              "end": 375
            }
          ],
          "start": 113,
          "end": 377
        },
        "abstract": false,
        "declare": false,
        "start": 86,
        "end": 377
      },
      "directive": null,
      "start": 85,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 386
            },
            "start": 382,
            "end": 386
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 395
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 408
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
                "start": 422,
                "end": 423
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 426,
                  "end": 431
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 432,
                  "end": 435
                },
                "optional": false,
                "computed": true,
                "start": 426,
                "end": 436
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 415,
              "end": 437
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
                "start": 449,
                "end": 450
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 453,
                    "end": 458
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 459,
                    "end": 462
                  },
                  "optional": false,
                  "computed": true,
                  "start": 453,
                  "end": 463
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 466,
                  "end": 467
                },
                "start": 453,
                "end": 467
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 442,
              "end": 468
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
                "start": 480,
                "end": 481
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 484,
                    "end": 489
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 490,
                    "end": 493
                  },
                  "optional": false,
                  "computed": true,
                  "start": 484,
                  "end": 494
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 498,
                  "end": 499
                },
                "start": 484,
                "end": 499
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 473,
              "end": 500
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
                "start": 512,
                "end": 513
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
                    "start": 516,
                    "end": 521
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 522,
                    "end": 525
                  },
                  "optional": false,
                  "computed": true,
                  "start": 516,
                  "end": 526
                },
                "start": 516,
                "end": 528
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 505,
              "end": 529
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
                "start": 541,
                "end": 542
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
                    "start": 545,
                    "end": 550
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 551,
                    "end": 554
                  },
                  "optional": false,
                  "computed": true,
                  "start": 545,
                  "end": 555
                },
                "start": 545,
                "end": 557
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 534,
              "end": 558
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
                "start": 570,
                "end": 571
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
                    "start": 576,
                    "end": 581
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 582,
                    "end": 585
                  },
                  "optional": false,
                  "computed": true,
                  "start": 576,
                  "end": 586
                },
                "start": 574,
                "end": 586
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 563,
              "end": 587
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
                "start": 599,
                "end": 600
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
                    "start": 605,
                    "end": 610
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 611,
                    "end": 614
                  },
                  "optional": false,
                  "computed": true,
                  "start": 605,
                  "end": 615
                },
                "start": 603,
                "end": 615
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 592,
              "end": 616
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
                "start": 628,
                "end": 629
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
                        "start": 635,
                        "end": 636
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 638,
                          "end": 643
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 644,
                          "end": 647
                        },
                        "optional": false,
                        "computed": true,
                        "start": 638,
                        "end": 648
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 635,
                      "end": 648
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 650
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
                        "start": 655,
                        "end": 656
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 658,
                        "end": 659
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 655,
                      "end": 659
                    }
                  ],
                  "start": 653,
                  "end": 661
                },
                "start": 633,
                "end": 661
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 621,
              "end": 663
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
                "start": 675,
                "end": 676
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
                        "start": 680,
                        "end": 685
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 686,
                        "end": 689
                      },
                      "optional": false,
                      "computed": true,
                      "start": 680,
                      "end": 690
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 691
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 695,
                      "end": 696
                    }
                  ],
                  "start": 694,
                  "end": 697
                },
                "start": 679,
                "end": 697
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 668,
              "end": 698
            }
          ],
          "start": 409,
          "end": 700
        },
        "abstract": false,
        "declare": false,
        "start": 382,
        "end": 700
      },
      "directive": null,
      "start": 381,
      "end": 702
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 709
            },
            "start": 705,
            "end": 709
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 718
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 731
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
                "start": 745,
                "end": 746
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 749,
                  "end": 754
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 756
                },
                "optional": false,
                "computed": true,
                "start": 749,
                "end": 757
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 738,
              "end": 758
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
                "start": 770,
                "end": 771
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 774,
                    "end": 779
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 781
                  },
                  "optional": false,
                  "computed": true,
                  "start": 774,
                  "end": 782
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 785,
                  "end": 786
                },
                "start": 774,
                "end": 786
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 763,
              "end": 787
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
                "start": 799,
                "end": 800
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 803,
                    "end": 808
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "optional": false,
                  "computed": true,
                  "start": 803,
                  "end": 811
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 815,
                  "end": 816
                },
                "start": 803,
                "end": 816
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 792,
              "end": 817
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
                "start": 829,
                "end": 830
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
                    "start": 833,
                    "end": 838
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 839,
                    "end": 840
                  },
                  "optional": false,
                  "computed": true,
                  "start": 833,
                  "end": 841
                },
                "start": 833,
                "end": 843
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 822,
              "end": 844
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
                "start": 856,
                "end": 857
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
                    "start": 860,
                    "end": 865
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "optional": false,
                  "computed": true,
                  "start": 860,
                  "end": 868
                },
                "start": 860,
                "end": 870
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 849,
              "end": 871
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
                "start": 883,
                "end": 884
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
                    "start": 889,
                    "end": 894
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 896
                  },
                  "optional": false,
                  "computed": true,
                  "start": 889,
                  "end": 897
                },
                "start": 887,
                "end": 897
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 876,
              "end": 898
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
                "start": 910,
                "end": 911
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
                    "start": 916,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 923
                  },
                  "optional": false,
                  "computed": true,
                  "start": 916,
                  "end": 924
                },
                "start": 914,
                "end": 924
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 903,
              "end": 925
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
                "start": 937,
                "end": 938
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
                        "start": 944,
                        "end": 945
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 947,
                          "end": 952
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 953,
                          "end": 954
                        },
                        "optional": false,
                        "computed": true,
                        "start": 947,
                        "end": 955
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 944,
                      "end": 955
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 957
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
                        "start": 962,
                        "end": 963
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 965,
                        "end": 966
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 962,
                      "end": 966
                    }
                  ],
                  "start": 960,
                  "end": 968
                },
                "start": 942,
                "end": 968
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 930,
              "end": 970
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
                "start": 982,
                "end": 983
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
                        "start": 987,
                        "end": 992
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "optional": false,
                      "computed": true,
                      "start": 987,
                      "end": 995
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 996
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1000,
                      "end": 1001
                    }
                  ],
                  "start": 999,
                  "end": 1002
                },
                "start": 986,
                "end": 1002
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 975,
              "end": 1003
            }
          ],
          "start": 732,
          "end": 1005
        },
        "abstract": false,
        "declare": false,
        "start": 705,
        "end": 1005
      },
      "directive": null,
      "start": 704,
      "end": 1007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1007
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
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74,
    "range": [
      69,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 143,
    "end": 149,
    "range": [
      143,
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
    "value": "=",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 154,
    "end": 159,
    "range": [
      154,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 182,
    "end": 187,
    "range": [
      182,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "static",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 252,
    "end": 258,
    "range": [
      252,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 263,
    "end": 265,
    "range": [
      263,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 278,
    "end": 284,
    "range": [
      278,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 291,
    "end": 296,
    "range": [
      291,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 321,
    "end": 326,
    "range": [
      321,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 348,
    "end": 354,
    "range": [
      348,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 355,
    "end": 356,
    "range": [
      355,
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
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 360,
    "end": 365,
    "range": [
      360,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 383,
    "end": 386,
    "range": [
      383,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 387,
    "end": 392,
    "range": [
      387,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403,
    "range": [
      396,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 404,
    "end": 408,
    "range": [
      404,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 415,
    "end": 421,
    "range": [
      415,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 426,
    "end": 431,
    "range": [
      426,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 432,
    "end": 435,
    "range": [
      432,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 453,
    "end": 458,
    "range": [
      453,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 459,
    "end": 462,
    "range": [
      459,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 473,
    "end": 479,
    "range": [
      473,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 484,
    "end": 489,
    "range": [
      484,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 495,
    "end": 497,
    "range": [
      495,
      497
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 516,
    "end": 521,
    "range": [
      516,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 522,
    "end": 525,
    "range": [
      522,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 526,
    "end": 528,
    "range": [
      526,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 534,
    "end": 540,
    "range": [
      534,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 545,
    "end": 550,
    "range": [
      545,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 551,
    "end": 554,
    "range": [
      551,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 563,
    "end": 569,
    "range": [
      563,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 574,
    "end": 576,
    "range": [
      574,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 576,
    "end": 581,
    "range": [
      576,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 582,
    "end": 585,
    "range": [
      582,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 592,
    "end": 598,
    "range": [
      592,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 611,
    "end": 614,
    "range": [
      611,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 621,
    "end": 627,
    "range": [
      621,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 668,
    "end": 674,
    "range": [
      668,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 680,
    "end": 685,
    "range": [
      680,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 686,
    "end": 689,
    "range": [
      686,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 710,
    "end": 715,
    "range": [
      710,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 716,
    "end": 718,
    "range": [
      716,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 719,
    "end": 726,
    "range": [
      719,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 727,
    "end": 731,
    "range": [
      727,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 749,
    "end": 754,
    "range": [
      749,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 763,
    "end": 769,
    "range": [
      763,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 792,
    "end": 798,
    "range": [
      792,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 803,
    "end": 808,
    "range": [
      803,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 822,
    "end": 828,
    "range": [
      822,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 849,
    "end": 855,
    "range": [
      849,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 860,
    "end": 865,
    "range": [
      860,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 868,
    "end": 870,
    "range": [
      868,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 876,
    "end": 882,
    "range": [
      876,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 887,
    "end": 889,
    "range": [
      887,
      889
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 889,
    "end": 894,
    "range": [
      889,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 903,
    "end": 909,
    "range": [
      903,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 914,
    "end": 916,
    "range": [
      914,
      916
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 916,
    "end": 921,
    "range": [
      916,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 930,
    "end": 936,
    "range": [
      930,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 947,
    "end": 952,
    "range": [
      947,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 975,
    "end": 981,
    "range": [
      975,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 987,
    "end": 992,
    "range": [
      987,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  }
]
```
