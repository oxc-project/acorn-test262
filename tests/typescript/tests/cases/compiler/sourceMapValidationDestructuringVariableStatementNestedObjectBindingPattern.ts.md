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
                      "start": 27,
                      "end": 30
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
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
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
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 88
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      },
                      "start": 118,
                      "end": 126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 127
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 145
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 136,
                    "end": 154
                  }
                ],
                "start": 101,
                "end": 160
              },
              "start": 99,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 161
          }
        ],
        "start": 69,
        "end": 163
      },
      "declare": false,
      "start": 53,
      "end": 163
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
                  "start": 176,
                  "end": 181
                },
                "typeArguments": null,
                "start": 176,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "start": 168,
            "end": 181
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
                  "start": 186,
                  "end": 190
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 192,
                  "end": 199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 186,
                "end": 199
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 218
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 220,
                        "end": 228
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 211,
                      "end": 228
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 239
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 241,
                        "end": 247
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 230,
                      "end": 247
                    }
                  ],
                  "start": 209,
                  "end": 249
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 201,
                "end": 249
              }
            ],
            "start": 184,
            "end": 251
          },
          "definite": false,
          "start": 168,
          "end": 251
        }
      ],
      "declare": false,
      "start": 164,
      "end": 252
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
                  "start": 265,
                  "end": 270
                },
                "typeArguments": null,
                "start": 265,
                "end": 270
              },
              "start": 263,
              "end": 270
            },
            "start": 257,
            "end": 270
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
                  "start": 275,
                  "end": 279
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 281,
                  "end": 290
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 290
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 298
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 309
                      },
                      "value": {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 311,
                        "end": 321
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 302,
                      "end": 321
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 332
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 334,
                        "end": 342
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 323,
                      "end": 342
                    }
                  ],
                  "start": 300,
                  "end": 344
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 292,
                "end": 344
              }
            ],
            "start": 273,
            "end": 346
          },
          "definite": false,
          "start": 257,
          "end": 346
        }
      ],
      "declare": false,
      "start": 253,
      "end": 347
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
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 361
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 372
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 382
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 365,
                      "end": 382
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 393
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 405
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 384,
                      "end": 405
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 407
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 355,
                "end": 407
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 409
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 418
          },
          "definite": false,
          "start": 353,
          "end": 418
        }
      ],
      "declare": false,
      "start": 349,
      "end": 419
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
                  "start": 426,
                  "end": 430
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 437
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 426,
                "end": 437
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 445
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 456
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primaryB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 466
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 449,
                      "end": 466
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 468,
                        "end": 477
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondaryB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 489
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 468,
                      "end": 489
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 491
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 439,
                "end": 491
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 493
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 502
          },
          "definite": false,
          "start": 424,
          "end": 502
        }
      ],
      "declare": false,
      "start": 420,
      "end": 503
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
                  "start": 510,
                  "end": 514
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 510,
                "end": 521
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 529
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 540
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primaryB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 550
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 533,
                      "end": 550
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 561
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondaryB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 573
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 552,
                      "end": 573
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 575
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 523,
                "end": 575
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 577
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
                  "start": 582,
                  "end": 586
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 588,
                  "end": 595
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 582,
                "end": 595
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 603
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 614
                      },
                      "value": {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 616,
                        "end": 624
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 607,
                      "end": 624
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 635
                      },
                      "value": {
                        "type": "Literal",
                        "value": "branch trimming",
                        "raw": "\"branch trimming\"",
                        "start": 637,
                        "end": 654
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 626,
                      "end": 654
                    }
                  ],
                  "start": 605,
                  "end": 656
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 597,
                "end": 656
              }
            ],
            "start": 580,
            "end": 658
          },
          "definite": false,
          "start": 508,
          "end": 658
        }
      ],
      "declare": false,
      "start": 504,
      "end": 659
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 670
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 674,
          "end": 679
        },
        "start": 665,
        "end": 679
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
                  "start": 687,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 698
                },
                "optional": false,
                "computed": false,
                "start": 687,
                "end": 698
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 704
                }
              ],
              "optional": false,
              "start": 687,
              "end": 705
            },
            "directive": null,
            "start": 687,
            "end": 706
          }
        ],
        "start": 681,
        "end": 708
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
                  "start": 720,
                  "end": 727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 731
                },
                "optional": false,
                "computed": false,
                "start": 720,
                "end": 731
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 737
                }
              ],
              "optional": false,
              "start": 720,
              "end": 738
            },
            "directive": null,
            "start": 720,
            "end": 739
          }
        ],
        "start": 714,
        "end": 741
      },
      "start": 661,
      "end": 741
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 741
}
```
