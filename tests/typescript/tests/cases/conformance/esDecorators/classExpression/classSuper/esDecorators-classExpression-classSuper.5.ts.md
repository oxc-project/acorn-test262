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
