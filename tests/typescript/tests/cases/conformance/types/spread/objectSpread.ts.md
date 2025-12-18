__ESTREE_TEST__:AST:
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 19,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 23
              }
            ],
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 32
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 40,
                  "end": 45
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 37,
                "end": 45
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 50,
                  "end": 54
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 47,
                "end": 54
              }
            ],
            "start": 35,
            "end": 56
          },
          "definite": false,
          "start": 30,
          "end": 56
        }
      ],
      "declare": false,
      "start": 26,
      "end": 56
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
            "name": "swap",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 73,
                  "end": 78
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 70,
                "end": 78
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "value": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 84,
                    "end": 85
                  },
                  "prefix": true,
                  "start": 83,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 85
              }
            ],
            "start": 68,
            "end": 87
          },
          "definite": false,
          "start": 61,
          "end": 87
        }
      ],
      "declare": false,
      "start": 57,
      "end": 88
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
            "name": "addAfter",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      },
                      "start": 107,
                      "end": 115
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 116
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
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
                    "start": 117,
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 131,
                        "end": 138
                      },
                      "start": 129,
                      "end": 138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 128,
                    "end": 138
                  }
                ],
                "start": 104,
                "end": 140
              },
              "start": 102,
              "end": 140
            },
            "start": 94,
            "end": 140
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "start": 149,
                "end": 153
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 158,
                  "end": 163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 155,
                "end": 163
              }
            ],
            "start": 147,
            "end": 165
          },
          "definite": false,
          "start": 94,
          "end": 165
        }
      ],
      "declare": false,
      "start": 90,
      "end": 165
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
            "name": "addBefore",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      },
                      "start": 184,
                      "end": 192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 183,
                    "end": 193
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 195,
                      "end": 203
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 194,
                    "end": 204
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 208,
                        "end": 215
                      },
                      "start": 206,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 205,
                    "end": 215
                  }
                ],
                "start": 181,
                "end": 217
              },
              "start": 179,
              "end": 217
            },
            "start": 170,
            "end": 217
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 229,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 234
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "start": 236,
                "end": 240
              }
            ],
            "start": 224,
            "end": 242
          },
          "definite": false,
          "start": 170,
          "end": 242
        }
      ],
      "declare": false,
      "start": 166,
      "end": 242
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
            "name": "override",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 262,
                        "end": 268
                      },
                      "start": 260,
                      "end": 268
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 259,
                    "end": 269
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
                      },
                      "start": 271,
                      "end": 279
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 270,
                    "end": 279
                  }
                ],
                "start": 257,
                "end": 281
              },
              "start": 255,
              "end": 281
            },
            "start": 247,
            "end": 281
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 294
                },
                "start": 290,
                "end": 294
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "value": {
                  "type": "Literal",
                  "value": "override",
                  "raw": "'override'",
                  "start": 299,
                  "end": 309
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 309
              }
            ],
            "start": 288,
            "end": 311
          },
          "definite": false,
          "start": 247,
          "end": 311
        }
      ],
      "declare": false,
      "start": 243,
      "end": 311
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
            "name": "nested",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 329,
                        "end": 335
                      },
                      "start": 327,
                      "end": 335
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 326,
                    "end": 336
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      },
                      "start": 338,
                      "end": 347
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 337,
                    "end": 348
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 350
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 352,
                        "end": 358
                      },
                      "start": 350,
                      "end": 358
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 349,
                    "end": 358
                  }
                ],
                "start": 324,
                "end": 360
              },
              "start": 322,
              "end": 360
            },
            "start": 316,
            "end": 360
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 375
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 377,
                        "end": 378
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 374,
                      "end": 378
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 385,
                              "end": 386
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 388,
                              "end": 393
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 385,
                            "end": 393
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 395,
                              "end": 396
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 398,
                              "end": 409
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 395,
                            "end": 409
                          }
                        ],
                        "start": 383,
                        "end": 411
                      },
                      "start": 380,
                      "end": 411
                    }
                  ],
                  "start": 372,
                  "end": 413
                },
                "start": 369,
                "end": 413
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": "whatever",
                  "raw": "'whatever'",
                  "start": 418,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 428
              }
            ],
            "start": 367,
            "end": 430
          },
          "definite": false,
          "start": 316,
          "end": 430
        }
      ],
      "declare": false,
      "start": 312,
      "end": 430
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
            "name": "combined",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 448
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      },
                      "start": 448,
                      "end": 456
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 447,
                    "end": 457
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 459
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 461,
                        "end": 467
                      },
                      "start": 459,
                      "end": 467
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 458,
                    "end": 468
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 470
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 472,
                        "end": 479
                      },
                      "start": 470,
                      "end": 479
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 469,
                    "end": 479
                  }
                ],
                "start": 445,
                "end": 481
              },
              "start": 443,
              "end": 481
            },
            "start": 435,
            "end": 481
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "start": 490,
                "end": 494
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 501
                },
                "start": 496,
                "end": 501
              }
            ],
            "start": 488,
            "end": 503
          },
          "definite": false,
          "start": 435,
          "end": 503
        }
      ],
      "declare": false,
      "start": 431,
      "end": 503
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
            "name": "combinedAfter",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      },
                      "start": 526,
                      "end": 534
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 525,
                    "end": 535
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 539,
                        "end": 545
                      },
                      "start": 537,
                      "end": 545
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 536,
                    "end": 546
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 548
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 550,
                        "end": 557
                      },
                      "start": 548,
                      "end": 557
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 547,
                    "end": 557
                  }
                ],
                "start": 523,
                "end": 559
              },
              "start": 521,
              "end": 559
            },
            "start": 508,
            "end": 559
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "start": 568,
                "end": 572
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 579
                },
                "start": 574,
                "end": 579
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 582
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 584,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 581,
                "end": 588
              }
            ],
            "start": 566,
            "end": 590
          },
          "definite": false,
          "start": 508,
          "end": 590
        }
      ],
      "declare": false,
      "start": 504,
      "end": 590
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
            "name": "combinedNestedChangeType",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      },
                      "start": 624,
                      "end": 632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 623,
                    "end": 633
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 637,
                        "end": 644
                      },
                      "start": 635,
                      "end": 644
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 634,
                    "end": 645
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 647
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 649,
                        "end": 655
                      },
                      "start": 647,
                      "end": 655
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 646,
                    "end": 655
                  }
                ],
                "start": 621,
                "end": 657
              },
              "start": 619,
              "end": 657
            },
            "start": 595,
            "end": 657
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 671,
                        "end": 672
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 674,
                        "end": 675
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 671,
                      "end": 675
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 682,
                              "end": 683
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 685,
                              "end": 690
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 682,
                            "end": 690
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 692,
                              "end": 693
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 695,
                              "end": 706
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 692,
                            "end": 706
                          }
                        ],
                        "start": 680,
                        "end": 708
                      },
                      "start": 677,
                      "end": 708
                    }
                  ],
                  "start": 669,
                  "end": 710
                },
                "start": 666,
                "end": 710
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 713
                },
                "value": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 716,
                    "end": 717
                  },
                  "prefix": true,
                  "start": 715,
                  "end": 717
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 712,
                "end": 717
              }
            ],
            "start": 664,
            "end": 719
          },
          "definite": false,
          "start": 595,
          "end": 719
        }
      ],
      "declare": false,
      "start": 591,
      "end": 719
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
            "name": "propertyNested",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 742,
                      "end": 743
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 748
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              },
                              "start": 748,
                              "end": 756
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 747,
                            "end": 757
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 758,
                              "end": 759
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 761,
                                "end": 767
                              },
                              "start": 759,
                              "end": 767
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 758,
                            "end": 767
                          }
                        ],
                        "start": 745,
                        "end": 769
                      },
                      "start": 743,
                      "end": 769
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 742,
                    "end": 769
                  }
                ],
                "start": 740,
                "end": 771
              },
              "start": 738,
              "end": 771
            },
            "start": 724,
            "end": 771
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 781
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "start": 785,
                      "end": 790
                    }
                  ],
                  "start": 783,
                  "end": 792
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 780,
                "end": 792
              }
            ],
            "start": 778,
            "end": 794
          },
          "definite": false,
          "start": 724,
          "end": 794
        }
      ],
      "declare": false,
      "start": 720,
      "end": 794
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
            "name": "op",
            "optional": false,
            "typeAnnotation": null,
            "start": 906,
            "end": 908
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 917,
                  "end": 918
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 931,
                          "end": 932
                        },
                        "start": 924,
                        "end": 932
                      }
                    ],
                    "start": 922,
                    "end": 934
                  },
                  "expression": false,
                  "start": 919,
                  "end": 934
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 913,
                "end": 934
              }
            ],
            "start": 911,
            "end": 936
          },
          "definite": false,
          "start": 906,
          "end": 936
        }
      ],
      "declare": false,
      "start": 902,
      "end": 937
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
            "name": "getter",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 953
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 955,
                        "end": 961
                      },
                      "start": 953,
                      "end": 961
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 952,
                    "end": 962
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 964
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 966,
                        "end": 972
                      },
                      "start": 964,
                      "end": 972
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 963,
                    "end": 972
                  }
                ],
                "start": 950,
                "end": 974
              },
              "start": 948,
              "end": 974
            },
            "start": 942,
            "end": 974
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "op",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 988
                },
                "start": 983,
                "end": 988
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 993,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 990,
                "end": 994
              }
            ],
            "start": 981,
            "end": 996
          },
          "definite": false,
          "start": 942,
          "end": 996
        }
      ],
      "declare": false,
      "start": 938,
      "end": 996
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "getter",
            "optional": false,
            "typeAnnotation": null,
            "start": 997,
            "end": 1003
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1005
          },
          "optional": false,
          "computed": false,
          "start": 997,
          "end": 1005
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 1008,
          "end": 1010
        },
        "start": 997,
        "end": 1010
      },
      "directive": null,
      "start": 997,
      "end": 1011
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
            "name": "spreadFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1054
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1075,
                    "end": 1078
                  },
                  "expression": false,
                  "start": 1063,
                  "end": 1078
                },
                "start": 1059,
                "end": 1079
              }
            ],
            "start": 1057,
            "end": 1081
          },
          "definite": false,
          "start": 1044,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1082
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Header",
        "optional": false,
        "typeAnnotation": null,
        "start": 1089,
        "end": 1095
      },
      "typeParameters": null,
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
              "name": "head",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1106,
                "end": 1112
              },
              "start": 1104,
              "end": 1112
            },
            "accessibility": null,
            "static": false,
            "start": 1100,
            "end": 1113
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1120,
                "end": 1126
              },
              "start": 1118,
              "end": 1126
            },
            "accessibility": null,
            "static": false,
            "start": 1114,
            "end": 1127
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "authToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1139,
                "end": 1145
              },
              "start": 1137,
              "end": 1145
            },
            "accessibility": null,
            "static": false,
            "start": 1128,
            "end": 1145
          }
        ],
        "start": 1098,
        "end": 1147
      },
      "declare": false,
      "start": 1084,
      "end": 1147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from16326",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Header",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1189
                      },
                      "typeArguments": null,
                      "start": 1183,
                      "end": 1189
                    },
                    "start": 1181,
                    "end": 1189
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1175,
                  "end": 1189
                }
              ],
              "start": 1173,
              "end": 1191
            },
            "start": 1171,
            "end": 1191
          },
          "start": 1167,
          "end": 1191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "header",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Header",
                "optional": false,
                "typeAnnotation": null,
                "start": 1201,
                "end": 1207
              },
              "typeArguments": null,
              "start": 1201,
              "end": 1207
            },
            "start": 1199,
            "end": 1207
          },
          "start": 1193,
          "end": 1207
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "authToken",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1220,
              "end": 1226
            },
            "start": 1218,
            "end": 1226
          },
          "start": 1209,
          "end": 1226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Header",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1235
          },
          "typeArguments": null,
          "start": 1229,
          "end": 1235
        },
        "start": 1227,
        "end": 1235
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1262,
                      "end": 1266
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "header",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1267,
                      "end": 1273
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1262,
                    "end": 1273
                  },
                  "start": 1259,
                  "end": 1273
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1286,
                    "end": 1292
                  },
                  "start": 1283,
                  "end": 1292
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "authToken",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1314
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1320,
                            "end": 1329
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1320,
                            "end": 1329
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1320,
                          "end": 1329
                        }
                      ],
                      "start": 1318,
                      "end": 1331
                    },
                    "start": 1305,
                    "end": 1331
                  },
                  "start": 1302,
                  "end": 1331
                }
              ],
              "start": 1249,
              "end": 1337
            },
            "start": 1242,
            "end": 1337
          }
        ],
        "start": 1236,
        "end": 1339
      },
      "expression": false,
      "start": 1148,
      "end": 1339
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 1387,
        "end": 1411
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1415,
              "end": 1422
            },
            "start": 1413,
            "end": 1422
          },
          "start": 1412,
          "end": 1422
        }
      ],
      "returnType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1429
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1431,
                  "end": 1437
                },
                "start": 1429,
                "end": 1437
              },
              "accessibility": null,
              "static": false,
              "start": 1428,
              "end": 1438
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1442,
                  "end": 1448
                },
                "start": 1440,
                "end": 1448
              },
              "accessibility": null,
              "static": false,
              "start": 1439,
              "end": 1448
            }
          ],
          "start": 1426,
          "end": 1450
        },
        "start": 1424,
        "end": 1450
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1462
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1467,
                        "end": 1468
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1470,
                        "end": 1472
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1467,
                      "end": 1472
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1474,
                        "end": 1475
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1477,
                        "end": 1479
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1474,
                      "end": 1479
                    }
                  ],
                  "start": 1465,
                  "end": 1481
                },
                "definite": false,
                "start": 1461,
                "end": 1481
              }
            ],
            "declare": false,
            "start": 1457,
            "end": 1481
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1486,
                "end": 1487
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1504
                    },
                    "start": 1500,
                    "end": 1504
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1518
                      },
                      "operator": "&&",
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
                              "start": 1524,
                              "end": 1525
                            },
                            "value": {
                              "type": "Literal",
                              "value": 14,
                              "raw": "14",
                              "start": 1527,
                              "end": 1529
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1524,
                            "end": 1529
                          }
                        ],
                        "start": 1522,
                        "end": 1531
                      },
                      "start": 1517,
                      "end": 1531
                    },
                    "start": 1514,
                    "end": 1531
                  }
                ],
                "start": 1490,
                "end": 1537
              },
              "start": 1486,
              "end": 1537
            },
            "directive": null,
            "start": 1486,
            "end": 1537
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1546,
                  "end": 1548
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1556,
                          "end": 1557
                        },
                        "operator": "&&",
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
                                "start": 1563,
                                "end": 1564
                              },
                              "value": {
                                "type": "Literal",
                                "value": 21,
                                "raw": "21",
                                "start": 1566,
                                "end": 1568
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1563,
                              "end": 1568
                            }
                          ],
                          "start": 1561,
                          "end": 1570
                        },
                        "start": 1556,
                        "end": 1570
                      },
                      "start": 1553,
                      "end": 1570
                    }
                  ],
                  "start": 1551,
                  "end": 1571
                },
                "definite": false,
                "start": 1546,
                "end": 1571
              }
            ],
            "declare": false,
            "start": 1542,
            "end": 1571
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1584
            },
            "start": 1576,
            "end": 1585
          }
        ],
        "start": 1451,
        "end": 1587
      },
      "expression": false,
      "start": 1378,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1620
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1625,
              "end": 1631
            },
            "start": 1623,
            "end": 1631
          },
          "start": 1621,
          "end": 1631
        }
      ],
      "returnType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1637
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1639,
                  "end": 1645
                },
                "start": 1637,
                "end": 1645
              },
              "accessibility": null,
              "static": false,
              "start": 1636,
              "end": 1646
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1648
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1650,
                  "end": 1656
                },
                "start": 1648,
                "end": 1656
              },
              "accessibility": null,
              "static": false,
              "start": 1647,
              "end": 1656
            }
          ],
          "start": 1634,
          "end": 1658
        },
        "start": 1632,
        "end": 1658
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1669,
                  "end": 1670
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1675,
                        "end": 1676
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1678,
                        "end": 1680
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1675,
                      "end": 1680
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1682,
                        "end": 1683
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1685,
                        "end": 1687
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1682,
                      "end": 1687
                    }
                  ],
                  "start": 1673,
                  "end": 1689
                },
                "definite": false,
                "start": 1669,
                "end": 1689
              }
            ],
            "declare": false,
            "start": 1665,
            "end": 1689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1695
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1711,
                      "end": 1712
                    },
                    "start": 1708,
                    "end": 1712
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1725,
                        "end": 1727
                      },
                      "operator": "&&",
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
                              "start": 1733,
                              "end": 1734
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nt",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1736,
                              "end": 1738
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1733,
                            "end": 1738
                          }
                        ],
                        "start": 1731,
                        "end": 1740
                      },
                      "start": 1725,
                      "end": 1740
                    },
                    "start": 1722,
                    "end": 1740
                  }
                ],
                "start": 1698,
                "end": 1746
              },
              "start": 1694,
              "end": 1746
            },
            "directive": null,
            "start": 1694,
            "end": 1746
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1757
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1765,
                          "end": 1767
                        },
                        "operator": "&&",
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
                                "start": 1773,
                                "end": 1774
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nt",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1776,
                                "end": 1778
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1773,
                              "end": 1778
                            }
                          ],
                          "start": 1771,
                          "end": 1780
                        },
                        "start": 1765,
                        "end": 1780
                      },
                      "start": 1762,
                      "end": 1780
                    }
                  ],
                  "start": 1760,
                  "end": 1781
                },
                "definite": false,
                "start": 1755,
                "end": 1781
              }
            ],
            "declare": false,
            "start": 1751,
            "end": 1781
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 1793,
              "end": 1794
            },
            "start": 1786,
            "end": 1795
          }
        ],
        "start": 1659,
        "end": 1797
      },
      "expression": false,
      "start": 1588,
      "end": 1797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1807,
        "end": 1830
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "st",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1835,
              "end": 1841
            },
            "start": 1833,
            "end": 1841
          },
          "start": 1831,
          "end": 1841
        }
      ],
      "returnType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1846,
                "end": 1847
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1849,
                  "end": 1855
                },
                "start": 1847,
                "end": 1855
              },
              "accessibility": null,
              "static": false,
              "start": 1846,
              "end": 1856
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1857,
                "end": 1858
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1860,
                  "end": 1866
                },
                "start": 1858,
                "end": 1866
              },
              "accessibility": null,
              "static": false,
              "start": 1857,
              "end": 1866
            }
          ],
          "start": 1844,
          "end": 1868
        },
        "start": 1842,
        "end": 1868
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1880
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1885,
                        "end": 1886
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 1888,
                        "end": 1892
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1885,
                      "end": 1892
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1894,
                        "end": 1895
                      },
                      "value": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1897,
                        "end": 1899
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1894,
                      "end": 1899
                    }
                  ],
                  "start": 1883,
                  "end": 1901
                },
                "definite": false,
                "start": 1879,
                "end": 1901
              }
            ],
            "declare": false,
            "start": 1875,
            "end": 1901
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1906,
                "end": 1907
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1923,
                      "end": 1924
                    },
                    "start": 1920,
                    "end": 1924
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "st",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1937,
                        "end": 1939
                      },
                      "operator": "&&",
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
                              "start": 1945,
                              "end": 1946
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "st",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1948,
                              "end": 1950
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1945,
                            "end": 1950
                          }
                        ],
                        "start": 1943,
                        "end": 1952
                      },
                      "start": 1937,
                      "end": 1952
                    },
                    "start": 1934,
                    "end": 1952
                  }
                ],
                "start": 1910,
                "end": 1958
              },
              "start": 1906,
              "end": 1958
            },
            "directive": null,
            "start": 1906,
            "end": 1958
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1967,
                  "end": 1969
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "st",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1977,
                          "end": 1979
                        },
                        "operator": "&&",
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
                                "start": 1985,
                                "end": 1986
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "st",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1988,
                                "end": 1990
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1985,
                              "end": 1990
                            }
                          ],
                          "start": 1983,
                          "end": 1992
                        },
                        "start": 1977,
                        "end": 1992
                      },
                      "start": 1974,
                      "end": 1992
                    }
                  ],
                  "start": 1972,
                  "end": 1993
                },
                "definite": false,
                "start": 1967,
                "end": 1993
              }
            ],
            "declare": false,
            "start": 1963,
            "end": 1993
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2005,
              "end": 2006
            },
            "start": 1998,
            "end": 2007
          }
        ],
        "start": 1869,
        "end": 2009
      },
      "expression": false,
      "start": 1798,
      "end": 2009
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
            "name": "anything",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2047,
                "end": 2050
              },
              "start": 2045,
              "end": 2050
            },
            "start": 2037,
            "end": 2050
          },
          "init": null,
          "definite": false,
          "start": 2037,
          "end": 2050
        }
      ],
      "declare": false,
      "start": 2033,
      "end": 2051
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
            "name": "spreadAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 2056,
            "end": 2065
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2073,
                  "end": 2081
                },
                "start": 2070,
                "end": 2081
              }
            ],
            "start": 2068,
            "end": 2083
          },
          "definite": false,
          "start": 2056,
          "end": 2083
        }
      ],
      "declare": false,
      "start": 2052,
      "end": 2084
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2122,
        "end": 2123
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2127
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2130,
              "end": 2131
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2126,
            "end": 2132
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2134
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2137,
                "end": 2140
              },
              "expression": false,
              "start": 2134,
              "end": 2140
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2133,
            "end": 2140
          }
        ],
        "start": 2124,
        "end": 2142
      },
      "abstract": false,
      "declare": false,
      "start": 2116,
      "end": 2142
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2150,
                  "end": 2151
                },
                "typeArguments": null,
                "start": 2150,
                "end": 2151
              },
              "start": 2148,
              "end": 2151
            },
            "start": 2147,
            "end": 2151
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2159
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2154,
            "end": 2161
          },
          "definite": false,
          "start": 2147,
          "end": 2161
        }
      ],
      "declare": false,
      "start": 2143,
      "end": 2161
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
            "name": "spreadC",
            "optional": false,
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2177,
                      "end": 2178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      },
                      "start": 2178,
                      "end": 2186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2177,
                    "end": 2186
                  }
                ],
                "start": 2175,
                "end": 2188
              },
              "start": 2173,
              "end": 2188
            },
            "start": 2166,
            "end": 2188
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2197
                },
                "start": 2193,
                "end": 2197
              }
            ],
            "start": 2191,
            "end": 2199
          },
          "definite": false,
          "start": 2166,
          "end": 2199
        }
      ],
      "declare": false,
      "start": 2162,
      "end": 2199
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
            "name": "cplus",
            "optional": false,
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2245
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2247,
                        "end": 2253
                      },
                      "start": 2245,
                      "end": 2253
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2244,
                    "end": 2254
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "plus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2255,
                      "end": 2259
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2263,
                        "end": 2267
                      },
                      "start": 2261,
                      "end": 2267
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2255,
                    "end": 2267
                  }
                ],
                "start": 2242,
                "end": 2269
              },
              "start": 2240,
              "end": 2269
            },
            "start": 2235,
            "end": 2269
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2278
                },
                "start": 2274,
                "end": 2278
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "plus",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2280,
                  "end": 2284
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2296,
                              "end": 2300
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2301,
                              "end": 2302
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2296,
                            "end": 2302
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2305,
                            "end": 2306
                          },
                          "start": 2296,
                          "end": 2306
                        },
                        "start": 2289,
                        "end": 2307
                      }
                    ],
                    "start": 2287,
                    "end": 2309
                  },
                  "expression": false,
                  "start": 2284,
                  "end": 2309
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2280,
                "end": 2309
              }
            ],
            "start": 2272,
            "end": 2311
          },
          "definite": false,
          "start": 2235,
          "end": 2311
        }
      ],
      "declare": false,
      "start": 2231,
      "end": 2312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cplus",
            "optional": false,
            "typeAnnotation": null,
            "start": 2313,
            "end": 2318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "plus",
            "optional": false,
            "typeAnnotation": null,
            "start": 2319,
            "end": 2323
          },
          "optional": false,
          "computed": false,
          "start": 2313,
          "end": 2323
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2313,
        "end": 2325
      },
      "directive": null,
      "start": 2313,
      "end": 2326
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
            "name": "changeTypeAfter",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2409,
                      "end": 2410
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2412,
                        "end": 2418
                      },
                      "start": 2410,
                      "end": 2418
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2409,
                    "end": 2419
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2421
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2423,
                        "end": 2429
                      },
                      "start": 2421,
                      "end": 2429
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2420,
                    "end": 2429
                  }
                ],
                "start": 2407,
                "end": 2431
              },
              "start": 2405,
              "end": 2431
            },
            "start": 2390,
            "end": 2431
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2443,
                  "end": 2444
                },
                "start": 2440,
                "end": 2444
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2446,
                  "end": 2447
                },
                "value": {
                  "type": "Literal",
                  "value": "wrong type?",
                  "raw": "'wrong type?'",
                  "start": 2449,
                  "end": 2462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2446,
                "end": 2462
              }
            ],
            "start": 2438,
            "end": 2464
          },
          "definite": false,
          "start": 2390,
          "end": 2464
        }
      ],
      "declare": false,
      "start": 2386,
      "end": 2464
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
            "name": "changeTypeBoth",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2487,
                      "end": 2488
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2490,
                        "end": 2496
                      },
                      "start": 2488,
                      "end": 2496
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2487,
                    "end": 2497
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2498,
                      "end": 2499
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2501,
                        "end": 2507
                      },
                      "start": 2499,
                      "end": 2507
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2498,
                    "end": 2507
                  }
                ],
                "start": 2485,
                "end": 2509
              },
              "start": 2483,
              "end": 2509
            },
            "start": 2469,
            "end": 2509
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2521,
                  "end": 2522
                },
                "start": 2518,
                "end": 2522
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "swap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2527,
                  "end": 2531
                },
                "start": 2524,
                "end": 2531
              }
            ],
            "start": 2516,
            "end": 2533
          },
          "definite": false,
          "start": 2469,
          "end": 2533
        }
      ],
      "declare": false,
      "start": 2465,
      "end": 2534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2557,
        "end": 2566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteBoolean",
          "optional": false,
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2593
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2595,
                      "end": 2602
                    },
                    "start": 2593,
                    "end": 2602
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2591,
                  "end": 2602
                }
              ],
              "start": 2589,
              "end": 2604
            },
            "start": 2587,
            "end": 2604
          },
          "start": 2572,
          "end": 2604
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteString",
          "optional": false,
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2628,
                    "end": 2630
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2632,
                      "end": 2638
                    },
                    "start": 2630,
                    "end": 2638
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2628,
                  "end": 2638
                }
              ],
              "start": 2626,
              "end": 2640
            },
            "start": 2624,
            "end": 2640
          },
          "start": 2610,
          "end": 2640
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2664,
                    "end": 2666
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2669,
                      "end": 2675
                    },
                    "start": 2667,
                    "end": 2675
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2664,
                  "end": 2675
                }
              ],
              "start": 2662,
              "end": 2677
            },
            "start": 2660,
            "end": 2677
          },
          "start": 2646,
          "end": 2677
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2701,
                    "end": 2703
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2706,
                      "end": 2712
                    },
                    "start": 2704,
                    "end": 2712
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2701,
                  "end": 2712
                }
              ],
              "start": 2699,
              "end": 2714
            },
            "start": 2697,
            "end": 2714
          },
          "start": 2683,
          "end": 2714
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "optionalUnionStops",
                  "optional": false,
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2748,
                            "end": 2750
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2752,
                                  "end": 2758
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2761,
                                  "end": 2767
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 2770,
                                  "end": 2777
                                }
                              ],
                              "start": 2752,
                              "end": 2777
                            },
                            "start": 2750,
                            "end": 2777
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2748,
                          "end": 2777
                        }
                      ],
                      "start": 2746,
                      "end": 2779
                    },
                    "start": 2744,
                    "end": 2779
                  },
                  "start": 2726,
                  "end": 2779
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2802
                      },
                      "start": 2784,
                      "end": 2802
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2807,
                        "end": 2821
                      },
                      "start": 2804,
                      "end": 2821
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2826,
                        "end": 2840
                      },
                      "start": 2823,
                      "end": 2840
                    }
                  ],
                  "start": 2782,
                  "end": 2842
                },
                "definite": false,
                "start": 2726,
                "end": 2842
              }
            ],
            "declare": false,
            "start": 2722,
            "end": 2843
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
                  "name": "optionalUnionDuplicates",
                  "optional": false,
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2879,
                            "end": 2881
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2883,
                                  "end": 2889
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2892,
                                  "end": 2898
                                }
                              ],
                              "start": 2883,
                              "end": 2898
                            },
                            "start": 2881,
                            "end": 2898
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2879,
                          "end": 2898
                        }
                      ],
                      "start": 2877,
                      "end": 2900
                    },
                    "start": 2875,
                    "end": 2900
                  },
                  "start": 2852,
                  "end": 2900
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2908,
                        "end": 2923
                      },
                      "start": 2905,
                      "end": 2923
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2928,
                        "end": 2942
                      },
                      "start": 2925,
                      "end": 2942
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2947,
                        "end": 2961
                      },
                      "start": 2944,
                      "end": 2961
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2966,
                        "end": 2980
                      },
                      "start": 2963,
                      "end": 2980
                    }
                  ],
                  "start": 2903,
                  "end": 2982
                },
                "definite": false,
                "start": 2852,
                "end": 2982
              }
            ],
            "declare": false,
            "start": 2848,
            "end": 2983
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
                  "name": "allOptional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3007,
                            "end": 3009
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 3012,
                                  "end": 3018
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3021,
                                  "end": 3027
                                }
                              ],
                              "start": 3012,
                              "end": 3027
                            },
                            "start": 3010,
                            "end": 3027
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3007,
                          "end": 3027
                        }
                      ],
                      "start": 3005,
                      "end": 3029
                    },
                    "start": 3003,
                    "end": 3029
                  },
                  "start": 2992,
                  "end": 3029
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3037,
                        "end": 3051
                      },
                      "start": 3034,
                      "end": 3051
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3056,
                        "end": 3070
                      },
                      "start": 3053,
                      "end": 3070
                    }
                  ],
                  "start": 3032,
                  "end": 3072
                },
                "definite": false,
                "start": 2992,
                "end": 3072
              }
            ],
            "declare": false,
            "start": 2988,
            "end": 3073
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
                  "name": "computedFirst",
                  "optional": false,
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3125,
                            "end": 3126
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3128,
                              "end": 3134
                            },
                            "start": 3126,
                            "end": 3134
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3125,
                          "end": 3135
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3136,
                            "end": 3137
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3139,
                              "end": 3145
                            },
                            "start": 3137,
                            "end": 3145
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3136,
                          "end": 3146
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "before everything",
                            "raw": "\"before everything\"",
                            "start": 3147,
                            "end": 3166
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3168,
                              "end": 3174
                            },
                            "start": 3166,
                            "end": 3174
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3147,
                          "end": 3174
                        }
                      ],
                      "start": 3123,
                      "end": 3176
                    },
                    "start": 3121,
                    "end": 3176
                  },
                  "start": 3108,
                  "end": 3176
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "before everything",
                        "raw": "'before everything'",
                        "start": 3190,
                        "end": 3209
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 3212,
                        "end": 3214
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 3189,
                      "end": 3214
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3219,
                        "end": 3220
                      },
                      "start": 3216,
                      "end": 3220
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3222,
                        "end": 3223
                      },
                      "value": {
                        "type": "Literal",
                        "value": "yes",
                        "raw": "'yes'",
                        "start": 3225,
                        "end": 3230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3222,
                      "end": 3230
                    }
                  ],
                  "start": 3187,
                  "end": 3232
                },
                "definite": false,
                "start": 3108,
                "end": 3232
              }
            ],
            "declare": false,
            "start": 3104,
            "end": 3232
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
                  "name": "computedAfter",
                  "optional": false,
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3258,
                            "end": 3259
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3261,
                              "end": 3267
                            },
                            "start": 3259,
                            "end": 3267
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3258,
                          "end": 3268
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3269,
                            "end": 3270
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3272,
                              "end": 3278
                            },
                            "start": 3270,
                            "end": 3278
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3269,
                          "end": 3279
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "at the end",
                            "raw": "\"at the end\"",
                            "start": 3280,
                            "end": 3292
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3294,
                              "end": 3300
                            },
                            "start": 3292,
                            "end": 3300
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3280,
                          "end": 3300
                        }
                      ],
                      "start": 3256,
                      "end": 3302
                    },
                    "start": 3254,
                    "end": 3302
                  },
                  "start": 3241,
                  "end": 3302
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3318,
                        "end": 3319
                      },
                      "start": 3315,
                      "end": 3319
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3321,
                        "end": 3322
                      },
                      "value": {
                        "type": "Literal",
                        "value": "yeah",
                        "raw": "'yeah'",
                        "start": 3324,
                        "end": 3330
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3321,
                      "end": 3330
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "at the end",
                        "raw": "'at the end'",
                        "start": 3333,
                        "end": 3345
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 3348,
                        "end": 3350
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 3332,
                      "end": 3350
                    }
                  ],
                  "start": 3313,
                  "end": 3352
                },
                "definite": false,
                "start": 3241,
                "end": 3352
              }
            ],
            "declare": false,
            "start": 3237,
            "end": 3352
          }
        ],
        "start": 2716,
        "end": 3354
      },
      "expression": false,
      "start": 2548,
      "end": 3354
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3378,
            "end": 3379
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 3382,
            "end": 3384
          },
          "definite": false,
          "start": 3378,
          "end": 3384
        }
      ],
      "declare": false,
      "start": 3374,
      "end": 3385
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
            "name": "shortCutted",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3405,
                      "end": 3406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3408,
                        "end": 3414
                      },
                      "start": 3406,
                      "end": 3414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3405,
                    "end": 3415
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3416,
                      "end": 3417
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3419,
                        "end": 3425
                      },
                      "start": 3417,
                      "end": 3425
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3416,
                    "end": 3425
                  }
                ],
                "start": 3403,
                "end": 3427
              },
              "start": 3401,
              "end": 3427
            },
            "start": 3390,
            "end": 3427
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3435,
                  "end": 3436
                },
                "start": 3432,
                "end": 3436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3438,
                  "end": 3439
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3438,
                  "end": 3439
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3438,
                "end": 3439
              }
            ],
            "start": 3430,
            "end": 3441
          },
          "definite": false,
          "start": 3390,
          "end": 3441
        }
      ],
      "declare": false,
      "start": 3386,
      "end": 3441
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
            "name": "spreadNonPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 3463,
            "end": 3481
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 3490,
                    "end": 3496
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3497,
                    "end": 3499
                  },
                  "start": 3489,
                  "end": 3499
                },
                "start": 3486,
                "end": 3499
              }
            ],
            "start": 3484,
            "end": 3500
          },
          "definite": false,
          "start": 3463,
          "end": 3500
        }
      ],
      "declare": false,
      "start": 3459,
      "end": 3501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3532,
        "end": 3533
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3534,
              "end": 3535
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3534,
            "end": 3535
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3537,
              "end": 3538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3537,
            "end": 3538
          }
        ],
        "start": 3533,
        "end": 3539
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3543,
                "end": 3544
              },
              "typeArguments": null,
              "start": 3543,
              "end": 3544
            },
            "start": 3541,
            "end": 3544
          },
          "start": 3540,
          "end": 3544
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3549,
                "end": 3550
              },
              "typeArguments": null,
              "start": 3549,
              "end": 3550
            },
            "start": 3547,
            "end": 3550
          },
          "start": 3546,
          "end": 3550
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3570,
                    "end": 3571
                  },
                  "start": 3567,
                  "end": 3571
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3576,
                    "end": 3577
                  },
                  "start": 3573,
                  "end": 3577
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3579,
                    "end": 3581
                  },
                  "value": {
                    "type": "Literal",
                    "value": "id",
                    "raw": "'id'",
                    "start": 3583,
                    "end": 3587
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3579,
                  "end": 3587
                }
              ],
              "start": 3565,
              "end": 3589
            },
            "start": 3558,
            "end": 3590
          }
        ],
        "start": 3552,
        "end": 3592
      },
      "expression": false,
      "start": 3523,
      "end": 3592
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
            "name": "exclusive",
            "optional": false,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3611,
                      "end": 3613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3615,
                        "end": 3621
                      },
                      "start": 3613,
                      "end": 3621
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3611,
                    "end": 3622
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3623,
                      "end": 3624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3626,
                        "end": 3632
                      },
                      "start": 3624,
                      "end": 3632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3623,
                    "end": 3633
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3634,
                      "end": 3635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3637,
                        "end": 3643
                      },
                      "start": 3635,
                      "end": 3643
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3634,
                    "end": 3644
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3645,
                      "end": 3646
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3648,
                        "end": 3654
                      },
                      "start": 3646,
                      "end": 3654
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3645,
                    "end": 3655
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3656,
                      "end": 3657
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3659,
                        "end": 3666
                      },
                      "start": 3657,
                      "end": 3666
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3656,
                    "end": 3666
                  }
                ],
                "start": 3609,
                "end": 3668
              },
              "start": 3607,
              "end": 3668
            },
            "start": 3598,
            "end": 3668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3675,
              "end": 3676
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3679,
                      "end": 3680
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3682,
                      "end": 3683
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3679,
                    "end": 3683
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3685,
                      "end": 3686
                    },
                    "value": {
                      "type": "Literal",
                      "value": "yes",
                      "raw": "'yes'",
                      "start": 3688,
                      "end": 3693
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3685,
                    "end": 3693
                  }
                ],
                "start": 3677,
                "end": 3695
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3699,
                      "end": 3700
                    },
                    "value": {
                      "type": "Literal",
                      "value": "no",
                      "raw": "'no'",
                      "start": 3702,
                      "end": 3706
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3699,
                    "end": 3706
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3708,
                      "end": 3709
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 3711,
                      "end": 3716
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3708,
                    "end": 3716
                  }
                ],
                "start": 3697,
                "end": 3718
              }
            ],
            "optional": false,
            "start": 3675,
            "end": 3719
          },
          "definite": false,
          "start": 3598,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3594,
      "end": 3719
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
            "name": "overlap",
            "optional": false,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3735,
                      "end": 3737
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3739,
                        "end": 3745
                      },
                      "start": 3737,
                      "end": 3745
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3735,
                    "end": 3746
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3747,
                      "end": 3748
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3750,
                        "end": 3756
                      },
                      "start": 3748,
                      "end": 3756
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3747,
                    "end": 3757
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3758,
                      "end": 3759
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3761,
                        "end": 3767
                      },
                      "start": 3759,
                      "end": 3767
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3758,
                    "end": 3767
                  }
                ],
                "start": 3733,
                "end": 3769
              },
              "start": 3731,
              "end": 3769
            },
            "start": 3724,
            "end": 3769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3776,
              "end": 3777
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3780,
                      "end": 3781
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3783,
                      "end": 3784
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3780,
                    "end": 3784
                  }
                ],
                "start": 3778,
                "end": 3786
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3790,
                      "end": 3791
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3793,
                      "end": 3794
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3790,
                    "end": 3794
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3796,
                      "end": 3797
                    },
                    "value": {
                      "type": "Literal",
                      "value": "extra",
                      "raw": "'extra'",
                      "start": 3799,
                      "end": 3806
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3796,
                    "end": 3806
                  }
                ],
                "start": 3788,
                "end": 3808
              }
            ],
            "optional": false,
            "start": 3776,
            "end": 3809
          },
          "definite": false,
          "start": 3724,
          "end": 3809
        }
      ],
      "declare": false,
      "start": 3720,
      "end": 3809
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
            "name": "overlapConflict",
            "optional": false,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3833,
                      "end": 3835
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3836,
                        "end": 3842
                      },
                      "start": 3835,
                      "end": 3842
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3833,
                    "end": 3843
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3845
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3847,
                        "end": 3853
                      },
                      "start": 3845,
                      "end": 3853
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3844,
                    "end": 3853
                  }
                ],
                "start": 3831,
                "end": 3855
              },
              "start": 3829,
              "end": 3855
            },
            "start": 3814,
            "end": 3855
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3862,
              "end": 3863
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3866,
                      "end": 3867
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3869,
                      "end": 3870
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3866,
                    "end": 3870
                  }
                ],
                "start": 3864,
                "end": 3872
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3876,
                      "end": 3877
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mismatch",
                      "raw": "'mismatch'",
                      "start": 3879,
                      "end": 3889
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3876,
                    "end": 3889
                  }
                ],
                "start": 3874,
                "end": 3891
              }
            ],
            "optional": false,
            "start": 3862,
            "end": 3892
          },
          "definite": false,
          "start": 3814,
          "end": 3892
        }
      ],
      "declare": false,
      "start": 3810,
      "end": 3892
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
            "name": "overwriteId",
            "optional": false,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3912,
                      "end": 3914
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3916,
                        "end": 3922
                      },
                      "start": 3914,
                      "end": 3922
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3912,
                    "end": 3923
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3924,
                      "end": 3925
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3927,
                        "end": 3933
                      },
                      "start": 3925,
                      "end": 3933
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3924,
                    "end": 3934
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3935,
                      "end": 3936
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3938,
                        "end": 3944
                      },
                      "start": 3936,
                      "end": 3944
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3935,
                    "end": 3945
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3946,
                      "end": 3947
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3949,
                        "end": 3955
                      },
                      "start": 3947,
                      "end": 3955
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3946,
                    "end": 3955
                  }
                ],
                "start": 3910,
                "end": 3957
              },
              "start": 3908,
              "end": 3957
            },
            "start": 3897,
            "end": 3957
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3964,
              "end": 3965
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3968,
                      "end": 3969
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3971,
                      "end": 3972
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3968,
                    "end": 3972
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3974,
                      "end": 3976
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 3978,
                      "end": 3982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3974,
                    "end": 3982
                  }
                ],
                "start": 3966,
                "end": 3984
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3989
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3991,
                      "end": 3992
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3988,
                    "end": 3992
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3994,
                      "end": 3995
                    },
                    "value": {
                      "type": "Literal",
                      "value": "no",
                      "raw": "'no'",
                      "start": 3997,
                      "end": 4001
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3994,
                    "end": 4001
                  }
                ],
                "start": 3986,
                "end": 4003
              }
            ],
            "optional": false,
            "start": 3964,
            "end": 4004
          },
          "definite": false,
          "start": 3897,
          "end": 4004
        }
      ],
      "declare": false,
      "start": 3893,
      "end": 4004
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4015,
        "end": 4028
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4029,
              "end": 4030
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4029,
            "end": 4030
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4032,
              "end": 4033
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4032,
            "end": 4033
          }
        ],
        "start": 4028,
        "end": 4034
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4038,
                "end": 4039
              },
              "typeArguments": null,
              "start": 4038,
              "end": 4039
            },
            "start": 4036,
            "end": 4039
          },
          "start": 4035,
          "end": 4039
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4044,
                "end": 4045
              },
              "typeArguments": null,
              "start": 4044,
              "end": 4045
            },
            "start": 4042,
            "end": 4045
          },
          "start": 4041,
          "end": 4045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4050,
                    "end": 4051
                  },
                  "typeArguments": null,
                  "start": 4050,
                  "end": 4051
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4054,
                    "end": 4055
                  },
                  "typeArguments": null,
                  "start": 4054,
                  "end": 4055
                }
              ],
              "start": 4050,
              "end": 4055
            },
            "start": 4048,
            "end": 4055
          },
          "start": 4047,
          "end": 4055
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4060,
                    "end": 4061
                  },
                  "typeArguments": null,
                  "start": 4060,
                  "end": 4061
                },
                {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4066,
                        "end": 4067
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4069,
                          "end": 4075
                        },
                        "start": 4067,
                        "end": 4075
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4066,
                      "end": 4075
                    }
                  ],
                  "start": 4064,
                  "end": 4077
                }
              ],
              "start": 4060,
              "end": 4077
            },
            "start": 4058,
            "end": 4077
          },
          "start": 4057,
          "end": 4077
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4086,
                    "end": 4087
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4089,
                      "end": 4095
                    },
                    "start": 4087,
                    "end": 4095
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4086,
                  "end": 4095
                }
              ],
              "start": 4084,
              "end": 4097
            },
            "start": 4082,
            "end": 4097
          },
          "start": 4079,
          "end": 4097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x01",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4109,
                  "end": 4112
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4120,
                        "end": 4121
                      },
                      "start": 4117,
                      "end": 4121
                    }
                  ],
                  "start": 4115,
                  "end": 4123
                },
                "definite": false,
                "start": 4109,
                "end": 4123
              }
            ],
            "declare": false,
            "start": 4105,
            "end": 4124
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
                  "name": "x02",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4133,
                  "end": 4136
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4144,
                        "end": 4145
                      },
                      "start": 4141,
                      "end": 4145
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4150,
                        "end": 4151
                      },
                      "start": 4147,
                      "end": 4151
                    }
                  ],
                  "start": 4139,
                  "end": 4153
                },
                "definite": false,
                "start": 4133,
                "end": 4153
              }
            ],
            "declare": false,
            "start": 4129,
            "end": 4154
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
                  "name": "x03",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4163,
                  "end": 4166
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4174,
                        "end": 4175
                      },
                      "start": 4171,
                      "end": 4175
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4180,
                        "end": 4181
                      },
                      "start": 4177,
                      "end": 4181
                    }
                  ],
                  "start": 4169,
                  "end": 4183
                },
                "definite": false,
                "start": 4163,
                "end": 4183
              }
            ],
            "declare": false,
            "start": 4159,
            "end": 4184
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
                  "name": "x04",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4193,
                  "end": 4196
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4204,
                        "end": 4205
                      },
                      "start": 4201,
                      "end": 4205
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4210,
                        "end": 4211
                      },
                      "start": 4207,
                      "end": 4211
                    }
                  ],
                  "start": 4199,
                  "end": 4213
                },
                "definite": false,
                "start": 4193,
                "end": 4213
              }
            ],
            "declare": false,
            "start": 4189,
            "end": 4214
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
                  "name": "x05",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4223,
                  "end": 4226
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4231,
                        "end": 4232
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4234,
                        "end": 4235
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4231,
                      "end": 4235
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4237,
                        "end": 4238
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4240,
                        "end": 4244
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4237,
                      "end": 4244
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4249,
                        "end": 4250
                      },
                      "start": 4246,
                      "end": 4250
                    }
                  ],
                  "start": 4229,
                  "end": 4252
                },
                "definite": false,
                "start": 4223,
                "end": 4252
              }
            ],
            "declare": false,
            "start": 4219,
            "end": 4253
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
                  "name": "x06",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4262,
                  "end": 4265
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4273,
                        "end": 4274
                      },
                      "start": 4270,
                      "end": 4274
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4276,
                        "end": 4277
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4279,
                        "end": 4280
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4276,
                      "end": 4280
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4282,
                        "end": 4283
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4285,
                        "end": 4289
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4282,
                      "end": 4289
                    }
                  ],
                  "start": 4268,
                  "end": 4291
                },
                "definite": false,
                "start": 4262,
                "end": 4291
              }
            ],
            "declare": false,
            "start": 4258,
            "end": 4292
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
                  "name": "x07",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4301,
                  "end": 4304
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4309,
                        "end": 4310
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4312,
                        "end": 4313
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4309,
                      "end": 4313
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4315,
                        "end": 4316
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4318,
                        "end": 4322
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4315,
                      "end": 4322
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4327,
                        "end": 4328
                      },
                      "start": 4324,
                      "end": 4328
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4330,
                        "end": 4331
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4333,
                        "end": 4337
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4330,
                      "end": 4337
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4342,
                        "end": 4345
                      },
                      "start": 4339,
                      "end": 4345
                    }
                  ],
                  "start": 4307,
                  "end": 4347
                },
                "definite": false,
                "start": 4301,
                "end": 4347
              }
            ],
            "declare": false,
            "start": 4297,
            "end": 4348
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
                  "name": "x09",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4357,
                  "end": 4360
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4365,
                        "end": 4366
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4368,
                        "end": 4369
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4365,
                      "end": 4369
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4375
                      },
                      "start": 4371,
                      "end": 4375
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4377,
                        "end": 4378
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4380,
                        "end": 4384
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4377,
                      "end": 4384
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4386,
                        "end": 4387
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4389,
                        "end": 4393
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4386,
                      "end": 4393
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4398,
                        "end": 4401
                      },
                      "start": 4395,
                      "end": 4401
                    }
                  ],
                  "start": 4363,
                  "end": 4403
                },
                "definite": false,
                "start": 4357,
                "end": 4403
              }
            ],
            "declare": false,
            "start": 4353,
            "end": 4404
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
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4413,
                  "end": 4416
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4421,
                        "end": 4422
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4424,
                        "end": 4425
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4421,
                      "end": 4425
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4430,
                        "end": 4431
                      },
                      "start": 4427,
                      "end": 4431
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4433,
                        "end": 4434
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4436,
                        "end": 4440
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4433,
                      "end": 4440
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4445,
                        "end": 4446
                      },
                      "start": 4442,
                      "end": 4446
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4451,
                        "end": 4454
                      },
                      "start": 4448,
                      "end": 4454
                    }
                  ],
                  "start": 4419,
                  "end": 4456
                },
                "definite": false,
                "start": 4413,
                "end": 4456
              }
            ],
            "declare": false,
            "start": 4409,
            "end": 4457
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
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4466,
                  "end": 4469
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4477,
                        "end": 4478
                      },
                      "start": 4474,
                      "end": 4478
                    }
                  ],
                  "start": 4472,
                  "end": 4480
                },
                "definite": false,
                "start": 4466,
                "end": 4480
              }
            ],
            "declare": false,
            "start": 4462,
            "end": 4481
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
                  "name": "x12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4490,
                  "end": 4493
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4501,
                        "end": 4502
                      },
                      "start": 4498,
                      "end": 4502
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4507,
                        "end": 4510
                      },
                      "start": 4504,
                      "end": 4510
                    }
                  ],
                  "start": 4496,
                  "end": 4512
                },
                "definite": false,
                "start": 4490,
                "end": 4512
              }
            ],
            "declare": false,
            "start": 4486,
            "end": 4513
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
                  "name": "x13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4522,
                  "end": 4525
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4533,
                        "end": 4534
                      },
                      "start": 4530,
                      "end": 4534
                    }
                  ],
                  "start": 4528,
                  "end": 4536
                },
                "definite": false,
                "start": 4522,
                "end": 4536
              }
            ],
            "declare": false,
            "start": 4518,
            "end": 4537
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
                  "name": "x14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4546,
                  "end": 4549
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4557,
                        "end": 4558
                      },
                      "start": 4554,
                      "end": 4558
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4563,
                        "end": 4566
                      },
                      "start": 4560,
                      "end": 4566
                    }
                  ],
                  "start": 4552,
                  "end": 4568
                },
                "definite": false,
                "start": 4546,
                "end": 4568
              }
            ],
            "declare": false,
            "start": 4542,
            "end": 4569
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
                  "name": "x15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4578,
                  "end": 4581
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4589,
                        "end": 4590
                      },
                      "start": 4586,
                      "end": 4590
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4595,
                        "end": 4596
                      },
                      "start": 4592,
                      "end": 4596
                    }
                  ],
                  "start": 4584,
                  "end": 4598
                },
                "definite": false,
                "start": 4578,
                "end": 4598
              }
            ],
            "declare": false,
            "start": 4574,
            "end": 4599
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
                  "name": "x16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4608,
                  "end": 4611
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4619,
                        "end": 4620
                      },
                      "start": 4616,
                      "end": 4620
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4625,
                        "end": 4626
                      },
                      "start": 4622,
                      "end": 4626
                    }
                  ],
                  "start": 4614,
                  "end": 4628
                },
                "definite": false,
                "start": 4608,
                "end": 4628
              }
            ],
            "declare": false,
            "start": 4604,
            "end": 4629
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
                  "name": "x17",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4638,
                  "end": 4641
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4649,
                        "end": 4650
                      },
                      "start": 4646,
                      "end": 4650
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4655,
                        "end": 4656
                      },
                      "start": 4652,
                      "end": 4656
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4661,
                        "end": 4664
                      },
                      "start": 4658,
                      "end": 4664
                    }
                  ],
                  "start": 4644,
                  "end": 4666
                },
                "definite": false,
                "start": 4638,
                "end": 4666
              }
            ],
            "declare": false,
            "start": 4634,
            "end": 4667
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
                  "name": "x18",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4676,
                  "end": 4679
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4687,
                        "end": 4688
                      },
                      "start": 4684,
                      "end": 4688
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4693,
                        "end": 4694
                      },
                      "start": 4690,
                      "end": 4694
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4699,
                        "end": 4700
                      },
                      "start": 4696,
                      "end": 4700
                    }
                  ],
                  "start": 4682,
                  "end": 4702
                },
                "definite": false,
                "start": 4676,
                "end": 4702
              }
            ],
            "declare": false,
            "start": 4672,
            "end": 4703
          }
        ],
        "start": 4099,
        "end": 4705
      },
      "expression": false,
      "start": 4006,
      "end": 4705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4705
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29,
    "range": [
      26,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 30,
    "end": 32,
    "range": [
      30,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 50,
    "end": 54,
    "range": [
      50,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "swap",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "addAfter",
    "start": 94,
    "end": 102,
    "range": [
      94,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "addBefore",
    "start": 170,
    "end": 179,
    "range": [
      170,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 208,
    "end": 215,
    "range": [
      208,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 247,
    "end": 255,
    "range": [
      247,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279,
    "range": [
      273,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "String",
    "value": "'override'",
    "start": 299,
    "end": 309,
    "range": [
      299,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 316,
    "end": 322,
    "range": [
      316,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 329,
    "end": 335,
    "range": [
      329,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 380,
    "end": 383,
    "range": [
      380,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 388,
    "end": 393,
    "range": [
      388,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "String",
    "value": "'overriden'",
    "start": 398,
    "end": 409,
    "range": [
      398,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "String",
    "value": "'whatever'",
    "start": 418,
    "end": 428,
    "range": [
      418,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 431,
    "end": 434,
    "range": [
      431,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 435,
    "end": 443,
    "range": [
      435,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 472,
    "end": 479,
    "range": [
      472,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 499,
    "end": 501,
    "range": [
      499,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507,
    "range": [
      504,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "combinedAfter",
    "start": 508,
    "end": 521,
    "range": [
      508,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 539,
    "end": 545,
    "range": [
      539,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 550,
    "end": 557,
    "range": [
      550,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 577,
    "end": 579,
    "range": [
      577,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 591,
    "end": 594,
    "range": [
      591,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "combinedNestedChangeType",
    "start": 595,
    "end": 619,
    "range": [
      595,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632,
    "range": [
      626,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 637,
    "end": 644,
    "range": [
      637,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 649,
    "end": 655,
    "range": [
      649,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 666,
    "end": 669,
    "range": [
      666,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 677,
    "end": 680,
    "range": [
      677,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 685,
    "end": 690,
    "range": [
      685,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "String",
    "value": "'overriden'",
    "start": 695,
    "end": 706,
    "range": [
      695,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 720,
    "end": 723,
    "range": [
      720,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyNested",
    "start": 724,
    "end": 738,
    "range": [
      724,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 750,
    "end": 756,
    "range": [
      750,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767,
    "range": [
      761,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 785,
    "end": 788,
    "range": [
      785,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 902,
    "end": 905,
    "range": [
      902,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 906,
    "end": 908,
    "range": [
      906,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 913,
    "end": 916,
    "range": [
      913,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 924,
    "end": 930,
    "range": [
      924,
      930
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 938,
    "end": 941,
    "range": [
      938,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 955,
    "end": 961,
    "range": [
      955,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 966,
    "end": 972,
    "range": [
      966,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 983,
    "end": 986,
    "range": [
      983,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 986,
    "end": 988,
    "range": [
      986,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 997,
    "end": 1003,
    "range": [
      997,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1008,
    "end": 1010,
    "range": [
      1008,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1040,
    "end": 1043,
    "range": [
      1040,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 1044,
    "end": 1054,
    "range": [
      1044,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1063,
    "end": 1071,
    "range": [
      1063,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1089,
    "end": 1095,
    "range": [
      1089,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 1100,
    "end": 1104,
    "range": [
      1100,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1106,
    "end": 1112,
    "range": [
      1106,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1114,
    "end": 1118,
    "range": [
      1114,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1120,
    "end": 1126,
    "range": [
      1120,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1128,
    "end": 1137,
    "range": [
      1128,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145,
    "range": [
      1139,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1148,
    "end": 1156,
    "range": [
      1148,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "from16326",
    "start": 1157,
    "end": 1166,
    "range": [
      1157,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1167,
    "end": 1171,
    "range": [
      1167,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1175,
    "end": 1181,
    "range": [
      1175,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1183,
    "end": 1189,
    "range": [
      1183,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1193,
    "end": 1199,
    "range": [
      1193,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1201,
    "end": 1207,
    "range": [
      1201,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1209,
    "end": 1218,
    "range": [
      1209,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1229,
    "end": 1235,
    "range": [
      1229,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1242,
    "end": 1248,
    "range": [
      1242,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1259,
    "end": 1262,
    "range": [
      1259,
      1262
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1262,
    "end": 1266,
    "range": [
      1262,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1267,
    "end": 1273,
    "range": [
      1267,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1283,
    "end": 1286,
    "range": [
      1283,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1286,
    "end": 1292,
    "range": [
      1286,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1302,
    "end": 1305,
    "range": [
      1302,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1305,
    "end": 1314,
    "range": [
      1305,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1315,
    "end": 1317,
    "range": [
      1315,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1320,
    "end": 1329,
    "range": [
      1320,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1378,
    "end": 1386,
    "range": [
      1378,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadBoolean",
    "start": 1387,
    "end": 1411,
    "range": [
      1387,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1415,
    "end": 1422,
    "range": [
      1415,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1431,
    "end": 1437,
    "range": [
      1431,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1442,
    "end": 1448,
    "range": [
      1442,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1457,
    "end": 1460,
    "range": [
      1457,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1470,
    "end": 1472,
    "range": [
      1470,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1477,
    "end": 1479,
    "range": [
      1477,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1500,
    "end": 1503,
    "range": [
      1500,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1514,
    "end": 1517,
    "range": [
      1514,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1519,
    "end": 1521,
    "range": [
      1519,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 1527,
    "end": 1529,
    "range": [
      1527,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1542,
    "end": 1545,
    "range": [
      1542,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1546,
    "end": 1548,
    "range": [
      1546,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1553,
    "end": 1556,
    "range": [
      1553,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1558,
    "end": 1560,
    "range": [
      1558,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 1566,
    "end": 1568,
    "range": [
      1566,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1576,
    "end": 1582,
    "range": [
      1576,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1588,
    "end": 1596,
    "range": [
      1588,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadNumber",
    "start": 1597,
    "end": 1620,
    "range": [
      1597,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1621,
    "end": 1623,
    "range": [
      1621,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1625,
    "end": 1631,
    "range": [
      1625,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1639,
    "end": 1645,
    "range": [
      1639,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1650,
    "end": 1656,
    "range": [
      1650,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1665,
    "end": 1668,
    "range": [
      1665,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 1678,
    "end": 1680,
    "range": [
      1678,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 1685,
    "end": 1687,
    "range": [
      1685,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1708,
    "end": 1711,
    "range": [
      1708,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1722,
    "end": 1725,
    "range": [
      1722,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1725,
    "end": 1727,
    "range": [
      1725,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1728,
    "end": 1730,
    "range": [
      1728,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1736,
    "end": 1738,
    "range": [
      1736,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1751,
    "end": 1754,
    "range": [
      1751,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1755,
    "end": 1757,
    "range": [
      1755,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1762,
    "end": 1765,
    "range": [
      1762,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1768,
    "end": 1770,
    "range": [
      1768,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1776,
    "end": 1778,
    "range": [
      1776,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1786,
    "end": 1792,
    "range": [
      1786,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1798,
    "end": 1806,
    "range": [
      1798,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadString",
    "start": 1807,
    "end": 1830,
    "range": [
      1807,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1835,
    "end": 1841,
    "range": [
      1835,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1849,
    "end": 1855,
    "range": [
      1849,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1860,
    "end": 1866,
    "range": [
      1860,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1875,
    "end": 1878,
    "range": [
      1875,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 1888,
    "end": 1892,
    "range": [
      1888,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 1897,
    "end": 1899,
    "range": [
      1897,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1920,
    "end": 1923,
    "range": [
      1920,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1934,
    "end": 1937,
    "range": [
      1934,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1937,
    "end": 1939,
    "range": [
      1937,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1940,
    "end": 1942,
    "range": [
      1940,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1948,
    "end": 1950,
    "range": [
      1948,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1963,
    "end": 1966,
    "range": [
      1963,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1967,
    "end": 1969,
    "range": [
      1967,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1974,
    "end": 1977,
    "range": [
      1974,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1977,
    "end": 1979,
    "range": [
      1977,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1980,
    "end": 1982,
    "range": [
      1980,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1988,
    "end": 1990,
    "range": [
      1988,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1998,
    "end": 2004,
    "range": [
      1998,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2033,
    "end": 2036,
    "range": [
      2033,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 2037,
    "end": 2045,
    "range": [
      2037,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2047,
    "end": 2050,
    "range": [
      2047,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2052,
    "end": 2055,
    "range": [
      2052,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadAny",
    "start": 2056,
    "end": 2065,
    "range": [
      2056,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2070,
    "end": 2073,
    "range": [
      2070,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 2073,
    "end": 2081,
    "range": [
      2073,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2116,
    "end": 2121,
    "range": [
      2116,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2143,
    "end": 2146,
    "range": [
      2143,
      2146
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2154,
    "end": 2157,
    "range": [
      2154,
      2157
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2162,
    "end": 2165,
    "range": [
      2162,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2166,
    "end": 2173,
    "range": [
      2166,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2180,
    "end": 2186,
    "range": [
      2180,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2193,
    "end": 2196,
    "range": [
      2193,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2231,
    "end": 2234,
    "range": [
      2231,
      2234
    ]
  },
  {
    "type": "Identifier",
    "value": "cplus",
    "start": 2235,
    "end": 2240,
    "range": [
      2235,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2247,
    "end": 2253,
    "range": [
      2247,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2255,
    "end": 2259,
    "range": [
      2255,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2263,
    "end": 2267,
    "range": [
      2263,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2274,
    "end": 2277,
    "range": [
      2274,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2280,
    "end": 2284,
    "range": [
      2280,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2289,
    "end": 2295,
    "range": [
      2289,
      2295
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2296,
    "end": 2300,
    "range": [
      2296,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "cplus",
    "start": 2313,
    "end": 2318,
    "range": [
      2313,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2319,
    "end": 2323,
    "range": [
      2319,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2386,
    "end": 2389,
    "range": [
      2386,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "changeTypeAfter",
    "start": 2390,
    "end": 2405,
    "range": [
      2390,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2412,
    "end": 2418,
    "range": [
      2412,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2423,
    "end": 2429,
    "range": [
      2423,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2440,
    "end": 2443,
    "range": [
      2440,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "String",
    "value": "'wrong type?'",
    "start": 2449,
    "end": 2462,
    "range": [
      2449,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2465,
    "end": 2468,
    "range": [
      2465,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "changeTypeBoth",
    "start": 2469,
    "end": 2483,
    "range": [
      2469,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2490,
    "end": 2496,
    "range": [
      2490,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2501,
    "end": 2507,
    "range": [
      2501,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2518,
    "end": 2521,
    "range": [
      2518,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2524,
    "end": 2527,
    "range": [
      2524,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "swap",
    "start": 2527,
    "end": 2531,
    "range": [
      2527,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2548,
    "end": 2556,
    "range": [
      2548,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 2557,
    "end": 2566,
    "range": [
      2557,
      2566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2572,
    "end": 2587,
    "range": [
      2572,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2591,
    "end": 2593,
    "range": [
      2591,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2595,
    "end": 2602,
    "range": [
      2595,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2610,
    "end": 2624,
    "range": [
      2610,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2628,
    "end": 2630,
    "range": [
      2628,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2632,
    "end": 2638,
    "range": [
      2632,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 2646,
    "end": 2660,
    "range": [
      2646,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2664,
    "end": 2666,
    "range": [
      2664,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2669,
    "end": 2675,
    "range": [
      2669,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2683,
    "end": 2697,
    "range": [
      2683,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2701,
    "end": 2703,
    "range": [
      2701,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2706,
    "end": 2712,
    "range": [
      2706,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2722,
    "end": 2725,
    "range": [
      2722,
      2725
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalUnionStops",
    "start": 2726,
    "end": 2744,
    "range": [
      2726,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2748,
    "end": 2750,
    "range": [
      2748,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2752,
    "end": 2758,
    "range": [
      2752,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2761,
    "end": 2767,
    "range": [
      2761,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2770,
    "end": 2777,
    "range": [
      2770,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2784,
    "end": 2787,
    "range": [
      2784,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2787,
    "end": 2802,
    "range": [
      2787,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2804,
    "end": 2807,
    "range": [
      2804,
      2807
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2807,
    "end": 2821,
    "range": [
      2807,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2823,
    "end": 2826,
    "range": [
      2823,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2826,
    "end": 2840,
    "range": [
      2826,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2848,
    "end": 2851,
    "range": [
      2848,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalUnionDuplicates",
    "start": 2852,
    "end": 2875,
    "range": [
      2852,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2879,
    "end": 2881,
    "range": [
      2879,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2883,
    "end": 2889,
    "range": [
      2883,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2892,
    "end": 2898,
    "range": [
      2892,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2905,
    "end": 2908,
    "range": [
      2905,
      2908
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2908,
    "end": 2923,
    "range": [
      2908,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2925,
    "end": 2928,
    "range": [
      2925,
      2928
    ]
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2928,
    "end": 2942,
    "range": [
      2928,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2944,
    "end": 2947,
    "range": [
      2944,
      2947
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 2947,
    "end": 2961,
    "range": [
      2947,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2963,
    "end": 2966,
    "range": [
      2963,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2966,
    "end": 2980,
    "range": [
      2966,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2988,
    "end": 2991,
    "range": [
      2988,
      2991
    ]
  },
  {
    "type": "Identifier",
    "value": "allOptional",
    "start": 2992,
    "end": 3003,
    "range": [
      2992,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 3007,
    "end": 3009,
    "range": [
      3007,
      3009
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3009,
    "end": 3010,
    "range": [
      3009,
      3010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3012,
    "end": 3018,
    "range": [
      3012,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3021,
    "end": 3027,
    "range": [
      3021,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3034,
    "end": 3037,
    "range": [
      3034,
      3037
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 3037,
    "end": 3051,
    "range": [
      3037,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3053,
    "end": 3056,
    "range": [
      3053,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 3056,
    "end": 3070,
    "range": [
      3056,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3104,
    "end": 3107,
    "range": [
      3104,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "computedFirst",
    "start": 3108,
    "end": 3121,
    "range": [
      3108,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3128,
    "end": 3134,
    "range": [
      3128,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3139,
    "end": 3145,
    "range": [
      3139,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "String",
    "value": "\"before everything\"",
    "start": 3147,
    "end": 3166,
    "range": [
      3147,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3168,
    "end": 3174,
    "range": [
      3168,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "String",
    "value": "'before everything'",
    "start": 3190,
    "end": 3209,
    "range": [
      3190,
      3209
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3212,
    "end": 3214,
    "range": [
      3212,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3216,
    "end": 3219,
    "range": [
      3216,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 3225,
    "end": 3230,
    "range": [
      3225,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3237,
    "end": 3240,
    "range": [
      3237,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "computedAfter",
    "start": 3241,
    "end": 3254,
    "range": [
      3241,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3261,
    "end": 3267,
    "range": [
      3261,
      3267
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3267,
    "end": 3268,
    "range": [
      3267,
      3268
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3270,
    "end": 3271,
    "range": [
      3270,
      3271
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3272,
    "end": 3278,
    "range": [
      3272,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "String",
    "value": "\"at the end\"",
    "start": 3280,
    "end": 3292,
    "range": [
      3280,
      3292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3294,
    "end": 3300,
    "range": [
      3294,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3315,
    "end": 3318,
    "range": [
      3315,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "String",
    "value": "'yeah'",
    "start": 3324,
    "end": 3330,
    "range": [
      3324,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "String",
    "value": "'at the end'",
    "start": 3333,
    "end": 3345,
    "range": [
      3333,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 3348,
    "end": 3350,
    "range": [
      3348,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3374,
    "end": 3377,
    "range": [
      3374,
      3377
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3382,
    "end": 3384,
    "range": [
      3382,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3386,
    "end": 3389,
    "range": [
      3386,
      3389
    ]
  },
  {
    "type": "Identifier",
    "value": "shortCutted",
    "start": 3390,
    "end": 3401,
    "range": [
      3390,
      3401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3403,
    "end": 3404,
    "range": [
      3403,
      3404
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3408,
    "end": 3414,
    "range": [
      3408,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3419,
    "end": 3425,
    "range": [
      3419,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3432,
    "end": 3435,
    "range": [
      3432,
      3435
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3459,
    "end": 3462,
    "range": [
      3459,
      3462
    ]
  },
  {
    "type": "Identifier",
    "value": "spreadNonPrimitive",
    "start": 3463,
    "end": 3481,
    "range": [
      3463,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3482,
    "end": 3483,
    "range": [
      3482,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3486,
    "end": 3489,
    "range": [
      3486,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3490,
    "end": 3496,
    "range": [
      3490,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3523,
    "end": 3531,
    "range": [
      3523,
      3531
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3532,
    "end": 3533,
    "range": [
      3532,
      3533
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3533,
    "end": 3534,
    "range": [
      3533,
      3534
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3537,
    "end": 3538,
    "range": [
      3537,
      3538
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3546,
    "end": 3547,
    "range": [
      3546,
      3547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3550,
    "end": 3551,
    "range": [
      3550,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3558,
    "end": 3564,
    "range": [
      3558,
      3564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3567,
    "end": 3570,
    "range": [
      3567,
      3570
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3573,
    "end": 3576,
    "range": [
      3573,
      3576
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3579,
    "end": 3581,
    "range": [
      3579,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3581,
    "end": 3582,
    "range": [
      3581,
      3582
    ]
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 3583,
    "end": 3587,
    "range": [
      3583,
      3587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3588,
    "end": 3589,
    "range": [
      3588,
      3589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3594,
    "end": 3597,
    "range": [
      3594,
      3597
    ]
  },
  {
    "type": "Identifier",
    "value": "exclusive",
    "start": 3598,
    "end": 3607,
    "range": [
      3598,
      3607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3611,
    "end": 3613,
    "range": [
      3611,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3615,
    "end": 3621,
    "range": [
      3615,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3624,
    "end": 3625,
    "range": [
      3624,
      3625
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3626,
    "end": 3632,
    "range": [
      3626,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3634,
    "end": 3635,
    "range": [
      3634,
      3635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3635,
    "end": 3636,
    "range": [
      3635,
      3636
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3637,
    "end": 3643,
    "range": [
      3637,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3645,
    "end": 3646,
    "range": [
      3645,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3648,
    "end": 3654,
    "range": [
      3648,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3659,
    "end": 3666,
    "range": [
      3659,
      3666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 3688,
    "end": 3693,
    "range": [
      3688,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3697,
    "end": 3698,
    "range": [
      3697,
      3698
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3699,
    "end": 3700,
    "range": [
      3699,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3702,
    "end": 3706,
    "range": [
      3702,
      3706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3709,
    "end": 3710,
    "range": [
      3709,
      3710
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3711,
    "end": 3716,
    "range": [
      3711,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3718,
    "end": 3719,
    "range": [
      3718,
      3719
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3720,
    "end": 3723,
    "range": [
      3720,
      3723
    ]
  },
  {
    "type": "Identifier",
    "value": "overlap",
    "start": 3724,
    "end": 3731,
    "range": [
      3724,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3735,
    "end": 3737,
    "range": [
      3735,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3739,
    "end": 3745,
    "range": [
      3739,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3745,
    "end": 3746,
    "range": [
      3745,
      3746
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749,
    "range": [
      3748,
      3749
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3750,
    "end": 3756,
    "range": [
      3750,
      3756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3756,
    "end": 3757,
    "range": [
      3756,
      3757
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3759,
    "end": 3760,
    "range": [
      3759,
      3760
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3761,
    "end": 3767,
    "range": [
      3761,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3770,
    "end": 3771,
    "range": [
      3770,
      3771
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3777,
    "end": 3778,
    "range": [
      3777,
      3778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3778,
    "end": 3779,
    "range": [
      3778,
      3779
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3780,
    "end": 3781,
    "range": [
      3780,
      3781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3781,
    "end": 3782,
    "range": [
      3781,
      3782
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3786,
    "end": 3787,
    "range": [
      3786,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3790,
    "end": 3791,
    "range": [
      3790,
      3791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3796,
    "end": 3797,
    "range": [
      3796,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "String",
    "value": "'extra'",
    "start": 3799,
    "end": 3806,
    "range": [
      3799,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3810,
    "end": 3813,
    "range": [
      3810,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "overlapConflict",
    "start": 3814,
    "end": 3829,
    "range": [
      3814,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3833,
    "end": 3835,
    "range": [
      3833,
      3835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3836,
    "end": 3842,
    "range": [
      3836,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3847,
    "end": 3853,
    "range": [
      3847,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3867,
    "end": 3868,
    "range": [
      3867,
      3868
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3871,
    "end": 3872,
    "range": [
      3871,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3872,
    "end": 3873,
    "range": [
      3872,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3876,
    "end": 3877,
    "range": [
      3876,
      3877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3877,
    "end": 3878,
    "range": [
      3877,
      3878
    ]
  },
  {
    "type": "String",
    "value": "'mismatch'",
    "start": 3879,
    "end": 3889,
    "range": [
      3879,
      3889
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3893,
    "end": 3896,
    "range": [
      3893,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "overwriteId",
    "start": 3897,
    "end": 3908,
    "range": [
      3897,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3908,
    "end": 3909,
    "range": [
      3908,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3910,
    "end": 3911,
    "range": [
      3910,
      3911
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3912,
    "end": 3914,
    "range": [
      3912,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3916,
    "end": 3922,
    "range": [
      3916,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3927,
    "end": 3933,
    "range": [
      3927,
      3933
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3938,
    "end": 3944,
    "range": [
      3938,
      3944
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3947,
    "end": 3948,
    "range": [
      3947,
      3948
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3949,
    "end": 3955,
    "range": [
      3949,
      3955
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3966,
    "end": 3967,
    "range": [
      3966,
      3967
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3974,
    "end": 3976,
    "range": [
      3974,
      3976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3976,
    "end": 3977,
    "range": [
      3976,
      3977
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3978,
    "end": 3982,
    "range": [
      3978,
      3982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3983,
    "end": 3984,
    "range": [
      3983,
      3984
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3991,
    "end": 3992,
    "range": [
      3991,
      3992
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3994,
    "end": 3995,
    "range": [
      3994,
      3995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3995,
    "end": 3996,
    "range": [
      3995,
      3996
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3997,
    "end": 4001,
    "range": [
      3997,
      4001
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4002,
    "end": 4003,
    "range": [
      4002,
      4003
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4003,
    "end": 4004,
    "range": [
      4003,
      4004
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4006,
    "end": 4014,
    "range": [
      4006,
      4014
    ]
  },
  {
    "type": "Identifier",
    "value": "genericSpread",
    "start": 4015,
    "end": 4028,
    "range": [
      4015,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4032,
    "end": 4033,
    "range": [
      4032,
      4033
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4034,
    "end": 4035,
    "range": [
      4034,
      4035
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4038,
    "end": 4039,
    "range": [
      4038,
      4039
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4041,
    "end": 4042,
    "range": [
      4041,
      4042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4042,
    "end": 4043,
    "range": [
      4042,
      4043
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4050,
    "end": 4051,
    "range": [
      4050,
      4051
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4052,
    "end": 4053,
    "range": [
      4052,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4054,
    "end": 4055,
    "range": [
      4054,
      4055
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4055,
    "end": 4056,
    "range": [
      4055,
      4056
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4057,
    "end": 4058,
    "range": [
      4057,
      4058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059,
    "range": [
      4058,
      4059
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4062,
    "end": 4063,
    "range": [
      4062,
      4063
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4064,
    "end": 4065,
    "range": [
      4064,
      4065
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4066,
    "end": 4067,
    "range": [
      4066,
      4067
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4067,
    "end": 4068,
    "range": [
      4067,
      4068
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4069,
    "end": 4075,
    "range": [
      4069,
      4075
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4076,
    "end": 4077,
    "range": [
      4076,
      4077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4077,
    "end": 4078,
    "range": [
      4077,
      4078
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4079,
    "end": 4082,
    "range": [
      4079,
      4082
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4082,
    "end": 4083,
    "range": [
      4082,
      4083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4087,
    "end": 4088,
    "range": [
      4087,
      4088
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4089,
    "end": 4095,
    "range": [
      4089,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4099,
    "end": 4100,
    "range": [
      4099,
      4100
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4105,
    "end": 4108,
    "range": [
      4105,
      4108
    ]
  },
  {
    "type": "Identifier",
    "value": "x01",
    "start": 4109,
    "end": 4112,
    "range": [
      4109,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4115,
    "end": 4116,
    "range": [
      4115,
      4116
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4117,
    "end": 4120,
    "range": [
      4117,
      4120
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4129,
    "end": 4132,
    "range": [
      4129,
      4132
    ]
  },
  {
    "type": "Identifier",
    "value": "x02",
    "start": 4133,
    "end": 4136,
    "range": [
      4133,
      4136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4137,
    "end": 4138,
    "range": [
      4137,
      4138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4139,
    "end": 4140,
    "range": [
      4139,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4141,
    "end": 4144,
    "range": [
      4141,
      4144
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4144,
    "end": 4145,
    "range": [
      4144,
      4145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4147,
    "end": 4150,
    "range": [
      4147,
      4150
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4152,
    "end": 4153,
    "range": [
      4152,
      4153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4153,
    "end": 4154,
    "range": [
      4153,
      4154
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4159,
    "end": 4162,
    "range": [
      4159,
      4162
    ]
  },
  {
    "type": "Identifier",
    "value": "x03",
    "start": 4163,
    "end": 4166,
    "range": [
      4163,
      4166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4167,
    "end": 4168,
    "range": [
      4167,
      4168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4169,
    "end": 4170,
    "range": [
      4169,
      4170
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4171,
    "end": 4174,
    "range": [
      4171,
      4174
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4174,
    "end": 4175,
    "range": [
      4174,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4177,
    "end": 4180,
    "range": [
      4177,
      4180
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4180,
    "end": 4181,
    "range": [
      4180,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4182,
    "end": 4183,
    "range": [
      4182,
      4183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4183,
    "end": 4184,
    "range": [
      4183,
      4184
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4189,
    "end": 4192,
    "range": [
      4189,
      4192
    ]
  },
  {
    "type": "Identifier",
    "value": "x04",
    "start": 4193,
    "end": 4196,
    "range": [
      4193,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4197,
    "end": 4198,
    "range": [
      4197,
      4198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4199,
    "end": 4200,
    "range": [
      4199,
      4200
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4201,
    "end": 4204,
    "range": [
      4201,
      4204
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4205,
    "end": 4206,
    "range": [
      4205,
      4206
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4207,
    "end": 4210,
    "range": [
      4207,
      4210
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4210,
    "end": 4211,
    "range": [
      4210,
      4211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4219,
    "end": 4222,
    "range": [
      4219,
      4222
    ]
  },
  {
    "type": "Identifier",
    "value": "x05",
    "start": 4223,
    "end": 4226,
    "range": [
      4223,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4231,
    "end": 4232,
    "range": [
      4231,
      4232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4232,
    "end": 4233,
    "range": [
      4232,
      4233
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4240,
    "end": 4244,
    "range": [
      4240,
      4244
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4244,
    "end": 4245,
    "range": [
      4244,
      4245
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4246,
    "end": 4249,
    "range": [
      4246,
      4249
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4249,
    "end": 4250,
    "range": [
      4249,
      4250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4251,
    "end": 4252,
    "range": [
      4251,
      4252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4252,
    "end": 4253,
    "range": [
      4252,
      4253
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4258,
    "end": 4261,
    "range": [
      4258,
      4261
    ]
  },
  {
    "type": "Identifier",
    "value": "x06",
    "start": 4262,
    "end": 4265,
    "range": [
      4262,
      4265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4266,
    "end": 4267,
    "range": [
      4266,
      4267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4270,
    "end": 4273,
    "range": [
      4270,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4273,
    "end": 4274,
    "range": [
      4273,
      4274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4276,
    "end": 4277,
    "range": [
      4276,
      4277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4277,
    "end": 4278,
    "range": [
      4277,
      4278
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4280,
    "end": 4281,
    "range": [
      4280,
      4281
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4285,
    "end": 4289,
    "range": [
      4285,
      4289
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4290,
    "end": 4291,
    "range": [
      4290,
      4291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4291,
    "end": 4292,
    "range": [
      4291,
      4292
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4297,
    "end": 4300,
    "range": [
      4297,
      4300
    ]
  },
  {
    "type": "Identifier",
    "value": "x07",
    "start": 4301,
    "end": 4304,
    "range": [
      4301,
      4304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4312,
    "end": 4313,
    "range": [
      4312,
      4313
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4316,
    "end": 4317,
    "range": [
      4316,
      4317
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4318,
    "end": 4322,
    "range": [
      4318,
      4322
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4322,
    "end": 4323,
    "range": [
      4322,
      4323
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4324,
    "end": 4327,
    "range": [
      4324,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4330,
    "end": 4331,
    "range": [
      4330,
      4331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4331,
    "end": 4332,
    "range": [
      4331,
      4332
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4333,
    "end": 4337,
    "range": [
      4333,
      4337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4337,
    "end": 4338,
    "range": [
      4337,
      4338
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4339,
    "end": 4342,
    "range": [
      4339,
      4342
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4342,
    "end": 4345,
    "range": [
      4342,
      4345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4353,
    "end": 4356,
    "range": [
      4353,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "x09",
    "start": 4357,
    "end": 4360,
    "range": [
      4357,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362,
    "range": [
      4361,
      4362
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4363,
    "end": 4364,
    "range": [
      4363,
      4364
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4371,
    "end": 4374,
    "range": [
      4371,
      4374
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4374,
    "end": 4375,
    "range": [
      4374,
      4375
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4380,
    "end": 4384,
    "range": [
      4380,
      4384
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4384,
    "end": 4385,
    "range": [
      4384,
      4385
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4386,
    "end": 4387,
    "range": [
      4386,
      4387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4387,
    "end": 4388,
    "range": [
      4387,
      4388
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4389,
    "end": 4393,
    "range": [
      4389,
      4393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4393,
    "end": 4394,
    "range": [
      4393,
      4394
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4395,
    "end": 4398,
    "range": [
      4395,
      4398
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4398,
    "end": 4401,
    "range": [
      4398,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4402,
    "end": 4403,
    "range": [
      4402,
      4403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4403,
    "end": 4404,
    "range": [
      4403,
      4404
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4409,
    "end": 4412,
    "range": [
      4409,
      4412
    ]
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 4413,
    "end": 4416,
    "range": [
      4413,
      4416
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4417,
    "end": 4418,
    "range": [
      4417,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4422,
    "end": 4423,
    "range": [
      4422,
      4423
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4424,
    "end": 4425,
    "range": [
      4424,
      4425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4425,
    "end": 4426,
    "range": [
      4425,
      4426
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4427,
    "end": 4430,
    "range": [
      4427,
      4430
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4430,
    "end": 4431,
    "range": [
      4430,
      4431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4431,
    "end": 4432,
    "range": [
      4431,
      4432
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4434,
    "end": 4435,
    "range": [
      4434,
      4435
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4436,
    "end": 4440,
    "range": [
      4436,
      4440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4440,
    "end": 4441,
    "range": [
      4440,
      4441
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4442,
    "end": 4445,
    "range": [
      4442,
      4445
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4445,
    "end": 4446,
    "range": [
      4445,
      4446
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4446,
    "end": 4447,
    "range": [
      4446,
      4447
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4448,
    "end": 4451,
    "range": [
      4448,
      4451
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4451,
    "end": 4454,
    "range": [
      4451,
      4454
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4455,
    "end": 4456,
    "range": [
      4455,
      4456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4456,
    "end": 4457,
    "range": [
      4456,
      4457
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4462,
    "end": 4465,
    "range": [
      4462,
      4465
    ]
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 4466,
    "end": 4469,
    "range": [
      4466,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4470,
    "end": 4471,
    "range": [
      4470,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4472,
    "end": 4473,
    "range": [
      4472,
      4473
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4474,
    "end": 4477,
    "range": [
      4474,
      4477
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4479,
    "end": 4480,
    "range": [
      4479,
      4480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4480,
    "end": 4481,
    "range": [
      4480,
      4481
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4486,
    "end": 4489,
    "range": [
      4486,
      4489
    ]
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 4490,
    "end": 4493,
    "range": [
      4490,
      4493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4494,
    "end": 4495,
    "range": [
      4494,
      4495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4498,
    "end": 4501,
    "range": [
      4498,
      4501
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4501,
    "end": 4502,
    "range": [
      4501,
      4502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4502,
    "end": 4503,
    "range": [
      4502,
      4503
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4504,
    "end": 4507,
    "range": [
      4504,
      4507
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4507,
    "end": 4510,
    "range": [
      4507,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4512,
    "end": 4513,
    "range": [
      4512,
      4513
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4518,
    "end": 4521,
    "range": [
      4518,
      4521
    ]
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 4522,
    "end": 4525,
    "range": [
      4522,
      4525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4530,
    "end": 4533,
    "range": [
      4530,
      4533
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4536,
    "end": 4537,
    "range": [
      4536,
      4537
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4542,
    "end": 4545,
    "range": [
      4542,
      4545
    ]
  },
  {
    "type": "Identifier",
    "value": "x14",
    "start": 4546,
    "end": 4549,
    "range": [
      4546,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4552,
    "end": 4553,
    "range": [
      4552,
      4553
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4554,
    "end": 4557,
    "range": [
      4554,
      4557
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4560,
    "end": 4563,
    "range": [
      4560,
      4563
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4563,
    "end": 4566,
    "range": [
      4563,
      4566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4567,
    "end": 4568,
    "range": [
      4567,
      4568
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4568,
    "end": 4569,
    "range": [
      4568,
      4569
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4574,
    "end": 4577,
    "range": [
      4574,
      4577
    ]
  },
  {
    "type": "Identifier",
    "value": "x15",
    "start": 4578,
    "end": 4581,
    "range": [
      4578,
      4581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4582,
    "end": 4583,
    "range": [
      4582,
      4583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4586,
    "end": 4589,
    "range": [
      4586,
      4589
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4590,
    "end": 4591,
    "range": [
      4590,
      4591
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4592,
    "end": 4595,
    "range": [
      4592,
      4595
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4595,
    "end": 4596,
    "range": [
      4595,
      4596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4597,
    "end": 4598,
    "range": [
      4597,
      4598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4604,
    "end": 4607,
    "range": [
      4604,
      4607
    ]
  },
  {
    "type": "Identifier",
    "value": "x16",
    "start": 4608,
    "end": 4611,
    "range": [
      4608,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4612,
    "end": 4613,
    "range": [
      4612,
      4613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4616,
    "end": 4619,
    "range": [
      4616,
      4619
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4619,
    "end": 4620,
    "range": [
      4619,
      4620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4622,
    "end": 4625,
    "range": [
      4622,
      4625
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4627,
    "end": 4628,
    "range": [
      4627,
      4628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4628,
    "end": 4629,
    "range": [
      4628,
      4629
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4634,
    "end": 4637,
    "range": [
      4634,
      4637
    ]
  },
  {
    "type": "Identifier",
    "value": "x17",
    "start": 4638,
    "end": 4641,
    "range": [
      4638,
      4641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4642,
    "end": 4643,
    "range": [
      4642,
      4643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4644,
    "end": 4645,
    "range": [
      4644,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4646,
    "end": 4649,
    "range": [
      4646,
      4649
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4649,
    "end": 4650,
    "range": [
      4649,
      4650
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4650,
    "end": 4651,
    "range": [
      4650,
      4651
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4652,
    "end": 4655,
    "range": [
      4652,
      4655
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4655,
    "end": 4656,
    "range": [
      4655,
      4656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4658,
    "end": 4661,
    "range": [
      4658,
      4661
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4661,
    "end": 4664,
    "range": [
      4661,
      4664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4672,
    "end": 4675,
    "range": [
      4672,
      4675
    ]
  },
  {
    "type": "Identifier",
    "value": "x18",
    "start": 4676,
    "end": 4679,
    "range": [
      4676,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4684,
    "end": 4687,
    "range": [
      4684,
      4687
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4687,
    "end": 4688,
    "range": [
      4687,
      4688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4688,
    "end": 4689,
    "range": [
      4688,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4690,
    "end": 4693,
    "range": [
      4690,
      4693
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4693,
    "end": 4694,
    "range": [
      4693,
      4694
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4696,
    "end": 4699,
    "range": [
      4696,
      4699
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4699,
    "end": 4700,
    "range": [
      4699,
      4700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4701,
    "end": 4702,
    "range": [
      4701,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4702,
    "end": 4703,
    "range": [
      4702,
      4703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4704,
    "end": 4705,
    "range": [
      4704,
      4705
    ]
  }
]
```
