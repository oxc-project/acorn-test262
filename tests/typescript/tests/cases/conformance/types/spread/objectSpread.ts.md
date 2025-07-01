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
