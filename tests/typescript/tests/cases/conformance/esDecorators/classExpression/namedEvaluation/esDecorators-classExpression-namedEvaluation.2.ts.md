__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
      "type": "VariableDeclaration",
      "kind": "let",
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
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 27,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 33
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 35,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 41
        }
      ],
      "declare": false,
      "start": 23,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 156,
              "end": 157
            },
            "value": {
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
                    "start": 160,
                    "end": 163
                  },
                  "start": 159,
                  "end": 163
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 170,
                "end": 173
              },
              "abstract": false,
              "declare": false,
              "start": 159,
              "end": 173
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 156,
            "end": 173
          }
        ],
        "start": 154,
        "end": 175
      },
      "directive": null,
      "start": 153,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 181,
              "end": 182
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 196
                        },
                        "start": 192,
                        "end": 196
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      },
                      "start": 198,
                      "end": 203
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 192,
                    "end": 204
                  }
                ],
                "start": 190,
                "end": 206
              },
              "abstract": false,
              "declare": false,
              "start": 184,
              "end": 206
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 181,
            "end": 206
          }
        ],
        "start": 179,
        "end": 208
      },
      "directive": null,
      "start": 178,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 215,
              "end": 218
            },
            "value": {
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
                    "start": 221,
                    "end": 224
                  },
                  "start": 220,
                  "end": 224
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 231,
                "end": 234
              },
              "abstract": false,
              "declare": false,
              "start": 220,
              "end": 234
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 215,
            "end": 234
          }
        ],
        "start": 213,
        "end": 236
      },
      "directive": null,
      "start": 212,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 242,
              "end": 245
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 259
                        },
                        "start": 255,
                        "end": 259
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 263,
                        "end": 266
                      },
                      "start": 261,
                      "end": 266
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 255,
                    "end": 267
                  }
                ],
                "start": 253,
                "end": 269
              },
              "abstract": false,
              "declare": false,
              "start": 247,
              "end": 269
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 242,
            "end": 269
          }
        ],
        "start": 240,
        "end": 271
      },
      "directive": null,
      "start": 239,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 278,
              "end": 279
            },
            "value": {
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
                    "start": 282,
                    "end": 285
                  },
                  "start": 281,
                  "end": 285
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 292,
                "end": 295
              },
              "abstract": false,
              "declare": false,
              "start": 281,
              "end": 295
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 278,
            "end": 295
          }
        ],
        "start": 276,
        "end": 297
      },
      "directive": null,
      "start": 275,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 303,
              "end": 304
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 318
                        },
                        "start": 314,
                        "end": 318
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 322,
                        "end": 325
                      },
                      "start": 320,
                      "end": 325
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 314,
                    "end": 326
                  }
                ],
                "start": 312,
                "end": 328
              },
              "abstract": false,
              "declare": false,
              "start": 306,
              "end": 328
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 303,
            "end": 328
          }
        ],
        "start": 301,
        "end": 330
      },
      "directive": null,
      "start": 300,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 338,
              "end": 341
            },
            "value": {
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
                    "start": 345,
                    "end": 348
                  },
                  "start": 344,
                  "end": 348
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 355,
                "end": 358
              },
              "abstract": false,
              "declare": false,
              "start": 344,
              "end": 358
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 337,
            "end": 358
          }
        ],
        "start": 335,
        "end": 360
      },
      "directive": null,
      "start": 334,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 367,
              "end": 370
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 385
                        },
                        "start": 381,
                        "end": 385
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 389,
                        "end": 392
                      },
                      "start": 387,
                      "end": 392
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 379,
                "end": 395
              },
              "abstract": false,
              "declare": false,
              "start": 373,
              "end": 395
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 366,
            "end": 395
          }
        ],
        "start": 364,
        "end": 397
      },
      "directive": null,
      "start": 363,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 405,
              "end": 406
            },
            "value": {
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
                    "start": 410,
                    "end": 413
                  },
                  "start": 409,
                  "end": 413
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 420,
                "end": 423
              },
              "abstract": false,
              "declare": false,
              "start": 409,
              "end": 423
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 404,
            "end": 423
          }
        ],
        "start": 402,
        "end": 425
      },
      "directive": null,
      "start": 401,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 432,
              "end": 433
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 448
                        },
                        "start": 444,
                        "end": 448
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 452,
                        "end": 455
                      },
                      "start": 450,
                      "end": 455
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 444,
                    "end": 456
                  }
                ],
                "start": 442,
                "end": 458
              },
              "abstract": false,
              "declare": false,
              "start": 436,
              "end": 458
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 431,
            "end": 458
          }
        ],
        "start": 429,
        "end": 460
      },
      "directive": null,
      "start": 428,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 468,
              "end": 471
            },
            "value": {
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
                    "start": 475,
                    "end": 478
                  },
                  "start": 474,
                  "end": 478
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 485,
                "end": 488
              },
              "abstract": false,
              "declare": false,
              "start": 474,
              "end": 488
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 467,
            "end": 488
          }
        ],
        "start": 465,
        "end": 490
      },
      "directive": null,
      "start": 464,
      "end": 492
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 497,
              "end": 500
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 512,
                          "end": 515
                        },
                        "start": 511,
                        "end": 515
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 519,
                        "end": 522
                      },
                      "start": 517,
                      "end": 522
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 511,
                    "end": 523
                  }
                ],
                "start": 509,
                "end": 525
              },
              "abstract": false,
              "declare": false,
              "start": 503,
              "end": 525
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 496,
            "end": 525
          }
        ],
        "start": 494,
        "end": 527
      },
      "directive": null,
      "start": 493,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__proto__",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 595
            },
            "value": {
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
                    "start": 598,
                    "end": 601
                  },
                  "start": 597,
                  "end": 601
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 608,
                "end": 611
              },
              "abstract": false,
              "declare": false,
              "start": 597,
              "end": 611
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 586,
            "end": 611
          }
        ],
        "start": 584,
        "end": 613
      },
      "directive": null,
      "start": 583,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "__proto__",
              "raw": "\"__proto__\"",
              "start": 619,
              "end": 630
            },
            "value": {
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
                    "start": 633,
                    "end": 636
                  },
                  "start": 632,
                  "end": 636
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 643,
                "end": 646
              },
              "abstract": false,
              "declare": false,
              "start": 632,
              "end": 646
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 619,
            "end": 646
          }
        ],
        "start": 617,
        "end": 648
      },
      "directive": null,
      "start": 616,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "__proto__",
              "raw": "\"__proto__\"",
              "start": 730,
              "end": 741
            },
            "value": {
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
                    "start": 745,
                    "end": 748
                  },
                  "start": 744,
                  "end": 748
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 755,
                "end": 758
              },
              "abstract": false,
              "declare": false,
              "start": 744,
              "end": 758
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 729,
            "end": 758
          }
        ],
        "start": 727,
        "end": 760
      },
      "directive": null,
      "start": 726,
      "end": 762
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 762
}
```
