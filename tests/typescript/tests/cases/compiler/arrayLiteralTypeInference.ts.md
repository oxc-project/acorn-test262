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
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
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
            "start": 19,
            "end": 30
          }
        ],
        "start": 13,
        "end": 32
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionA",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 47
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 62
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
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
            "start": 69,
            "end": 83
          }
        ],
        "start": 63,
        "end": 85
      },
      "abstract": false,
      "declare": false,
      "start": 34,
      "end": 85
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionB",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 100
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 115
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
              "name": "trueNess",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 132,
                "end": 139
              },
              "start": 130,
              "end": 139
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
            "start": 122,
            "end": 140
          }
        ],
        "start": 116,
        "end": 142
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 142
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 152,
                  "end": 158
                },
                "start": 152,
                "end": 160
              },
              "start": 150,
              "end": 160
            },
            "start": 148,
            "end": 160
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 173
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 175,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 171,
                    "end": 176
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 186
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 188,
                      "end": 193
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 178,
                    "end": 193
                  }
                ],
                "start": 169,
                "end": 195
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 205
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 207,
                      "end": 208
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 203,
                    "end": 208
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 214
                    },
                    "value": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 216,
                      "end": 223
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 210,
                    "end": 223
                  }
                ],
                "start": 201,
                "end": 225
              }
            ],
            "start": 163,
            "end": 227
          },
          "definite": false,
          "start": 148,
          "end": 227
        }
      ],
      "declare": false,
      "start": 144,
      "end": 227
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 243
                },
                "start": 237,
                "end": 245
              },
              "start": 235,
              "end": 245
            },
            "start": 233,
            "end": 245
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "typeArguments": null,
                "arguments": [],
                "start": 254,
                "end": 267
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "start": 273,
                "end": 286
              }
            ],
            "start": 248,
            "end": 288
          },
          "definite": false,
          "start": 233,
          "end": 288
        }
      ],
      "declare": false,
      "start": 229,
      "end": 288
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 304
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 304
                },
                "start": 298,
                "end": 306
              },
              "start": 296,
              "end": 306
            },
            "start": 294,
            "end": 306
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 325
                },
                "typeArguments": null,
                "arguments": [],
                "start": 315,
                "end": 327
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 344
                },
                "typeArguments": null,
                "arguments": [],
                "start": 333,
                "end": 346
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 363
                },
                "typeArguments": null,
                "arguments": [],
                "start": 352,
                "end": 365
              }
            ],
            "start": 309,
            "end": 367
          },
          "definite": false,
          "start": 294,
          "end": 367
        }
      ],
      "declare": false,
      "start": 290,
      "end": 367
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 381
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 379,
                      "end": 389
                    }
                  ],
                  "start": 377,
                  "end": 391
                },
                "start": 377,
                "end": 393
              },
              "start": 375,
              "end": 393
            },
            "start": 373,
            "end": 393
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 414
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 416,
                      "end": 417
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 417
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 427
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 429,
                      "end": 434
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 419,
                    "end": 434
                  }
                ],
                "start": 410,
                "end": 436
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 450
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 452,
                      "end": 453
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 448,
                    "end": 453
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 459
                    },
                    "value": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 461,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 455,
                    "end": 468
                  }
                ],
                "start": 446,
                "end": 470
              }
            ],
            "start": 400,
            "end": 476
          },
          "definite": false,
          "start": 373,
          "end": 476
        }
      ],
      "declare": false,
      "start": 369,
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 490
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 492,
                          "end": 498
                        },
                        "start": 490,
                        "end": 498
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 488,
                      "end": 498
                    }
                  ],
                  "start": 486,
                  "end": 500
                },
                "start": 486,
                "end": 502
              },
              "start": 484,
              "end": 502
            },
            "start": 482,
            "end": 502
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 530
                },
                "typeArguments": null,
                "arguments": [],
                "start": 519,
                "end": 532
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 553
                },
                "typeArguments": null,
                "arguments": [],
                "start": 542,
                "end": 555
              }
            ],
            "start": 509,
            "end": 561
          },
          "definite": false,
          "start": 482,
          "end": 561
        }
      ],
      "declare": false,
      "start": 478,
      "end": 561
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
            "name": "z3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 573,
                        "end": 575
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 577,
                          "end": 583
                        },
                        "start": 575,
                        "end": 583
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 573,
                      "end": 583
                    }
                  ],
                  "start": 571,
                  "end": 585
                },
                "start": 571,
                "end": 587
              },
              "start": 569,
              "end": 587
            },
            "start": 567,
            "end": 587
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 614
                },
                "typeArguments": null,
                "arguments": [],
                "start": 604,
                "end": 616
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 637
                },
                "typeArguments": null,
                "arguments": [],
                "start": 626,
                "end": 639
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 660
                },
                "typeArguments": null,
                "arguments": [],
                "start": 649,
                "end": 662
              }
            ],
            "start": 594,
            "end": 668
          },
          "definite": false,
          "start": 567,
          "end": 668
        }
      ],
      "declare": false,
      "start": 563,
      "end": 668
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
}
```
