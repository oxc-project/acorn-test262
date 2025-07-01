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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
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
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 63
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 80
          }
        ],
        "start": 64,
        "end": 82
      },
      "declare": false,
      "start": 50,
      "end": 82
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 99
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
              "name": "totallyUnrelatedProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 139
          }
        ],
        "start": 100,
        "end": 141
      },
      "declare": false,
      "start": 84,
      "end": 141
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 154,
              "end": 155
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
                    "start": 160,
                    "end": 161
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 163,
                    "end": 165
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 160,
                  "end": 165
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
                    "start": 167,
                    "end": 168
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 170,
                    "end": 172
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 167,
                  "end": 172
                }
              ],
              "start": 158,
              "end": 174
            },
            "definite": false,
            "start": 154,
            "end": 174
          }
        ],
        "declare": false,
        "start": 150,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 143,
      "end": 175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 202
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 202
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 210
                  },
                  "typeArguments": null,
                  "start": 205,
                  "end": 210
                }
              ],
              "start": 199,
              "end": 210
            },
            "start": 197,
            "end": 210
          },
          "start": 196,
          "end": 210
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 213,
          "end": 216
        },
        "start": 211,
        "end": 216
      },
      "body": null,
      "expression": false,
      "start": 177,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          }
        ],
        "optional": false,
        "start": 219,
        "end": 223
      },
      "directive": null,
      "start": 219,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
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
                  "start": 229,
                  "end": 230
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 232,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 229,
                "end": 234
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
                  "start": 236,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 239,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 236,
                "end": 241
              }
            ],
            "start": 227,
            "end": 243
          }
        ],
        "optional": false,
        "start": 225,
        "end": 244
      },
      "directive": null,
      "start": 225,
      "end": 244
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 271
                  },
                  "typeArguments": null,
                  "start": 268,
                  "end": 271
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 279
                  },
                  "typeArguments": null,
                  "start": 274,
                  "end": 279
                }
              ],
              "start": 268,
              "end": 279
            },
            "start": 266,
            "end": 279
          },
          "start": 265,
          "end": 279
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 282,
          "end": 285
        },
        "start": 280,
        "end": 285
      },
      "body": null,
      "expression": false,
      "start": 246,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 289
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          }
        ],
        "optional": false,
        "start": 288,
        "end": 292
      },
      "directive": null,
      "start": 288,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 295
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
                  "start": 298,
                  "end": 299
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 301,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 298,
                "end": 303
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
                  "start": 305,
                  "end": 306
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 308,
                  "end": 310
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 310
              }
            ],
            "start": 296,
            "end": 312
          }
        ],
        "optional": false,
        "start": 294,
        "end": 313
      },
      "directive": null,
      "start": 294,
      "end": 313
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 333
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 340
                  },
                  "typeArguments": null,
                  "start": 337,
                  "end": 340
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 343,
                  "end": 346
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 354
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 354
                }
              ],
              "start": 337,
              "end": 354
            },
            "start": 335,
            "end": 354
          },
          "start": 334,
          "end": 354
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 357,
          "end": 360
        },
        "start": 355,
        "end": 360
      },
      "body": null,
      "expression": false,
      "start": 315,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 364
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 366
          }
        ],
        "optional": false,
        "start": 363,
        "end": 367
      },
      "directive": null,
      "start": 363,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 370
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
                  "start": 373,
                  "end": 374
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 376,
                  "end": 378
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 373,
                "end": 378
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
                  "start": 380,
                  "end": 381
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 383,
                  "end": 385
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 380,
                "end": 385
              }
            ],
            "start": 371,
            "end": 387
          }
        ],
        "optional": false,
        "start": 369,
        "end": 388
      },
      "directive": null,
      "start": 369,
      "end": 388
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CatDog",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 406
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
              "name": "cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 414,
                "end": 417
              },
              "start": 412,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 409,
            "end": 418
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 422
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 424,
                "end": 427
              },
              "start": 422,
              "end": 427
            },
            "accessibility": null,
            "static": false,
            "start": 419,
            "end": 427
          }
        ],
        "start": 407,
        "end": 429
      },
      "declare": false,
      "start": 390,
      "end": 429
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ManBearPig",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 450
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
              "name": "man",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 456
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 458,
                "end": 461
              },
              "start": 456,
              "end": 461
            },
            "accessibility": null,
            "static": false,
            "start": 453,
            "end": 462
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bear",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 467
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 469,
                "end": 472
              },
              "start": 467,
              "end": 472
            },
            "accessibility": null,
            "static": false,
            "start": 463,
            "end": 473
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pig",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 477
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 479,
                "end": 482
              },
              "start": 477,
              "end": 482
            },
            "accessibility": null,
            "static": false,
            "start": 474,
            "end": 482
          }
        ],
        "start": 451,
        "end": 484
      },
      "declare": false,
      "start": 430,
      "end": 484
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Platypus",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 503
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
              "name": "platypus",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 514
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 516,
                "end": 519
              },
              "start": 514,
              "end": 519
            },
            "accessibility": null,
            "static": false,
            "start": 506,
            "end": 519
          }
        ],
        "start": 504,
        "end": 521
      },
      "declare": false,
      "start": 485,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExoticAnimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 540
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CatDog",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 555
            },
            "typeArguments": null,
            "start": 549,
            "end": 555
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ManBearPig",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 572
            },
            "typeArguments": null,
            "start": 562,
            "end": 572
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Platypus",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 587
            },
            "typeArguments": null,
            "start": 579,
            "end": 587
          }
        ],
        "start": 547,
        "end": 587
      },
      "declare": false,
      "start": 523,
      "end": 588
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "addToZoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 615
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExoticAnimal",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 636
              },
              "typeArguments": null,
              "start": 624,
              "end": 636
            },
            "start": 622,
            "end": 636
          },
          "start": 616,
          "end": 636
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 639,
          "end": 643
        },
        "start": 637,
        "end": 643
      },
      "body": null,
      "expression": false,
      "start": 590,
      "end": 644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 646,
          "end": 654
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
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 660
                },
                "value": {
                  "type": "Literal",
                  "value": "Barky McBarkface",
                  "raw": "\"Barky McBarkface\"",
                  "start": 662,
                  "end": 680
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 657,
                "end": 680
              }
            ],
            "start": 655,
            "end": 682
          }
        ],
        "optional": false,
        "start": 646,
        "end": 683
      },
      "directive": null,
      "start": 646,
      "end": 684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 693
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
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 699
                },
                "value": {
                  "type": "Literal",
                  "value": "Manny",
                  "raw": "\"Manny\"",
                  "start": 701,
                  "end": 708
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 696,
                "end": 708
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bear",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 714
                },
                "value": {
                  "type": "Literal",
                  "value": "Coffee",
                  "raw": "\"Coffee\"",
                  "start": 716,
                  "end": 724
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 710,
                "end": 724
              }
            ],
            "start": 694,
            "end": 726
          }
        ],
        "optional": false,
        "start": 685,
        "end": 727
      },
      "directive": null,
      "start": 685,
      "end": 728
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
            "name": "manBeer",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 743
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
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 751
                },
                "value": {
                  "type": "Literal",
                  "value": "Manny",
                  "raw": "\"Manny\"",
                  "start": 753,
                  "end": 760
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 748,
                "end": 760
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "beer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 766
                },
                "value": {
                  "type": "Literal",
                  "value": "Coffee",
                  "raw": "\"Coffee\"",
                  "start": 768,
                  "end": 776
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 762,
                "end": 776
              }
            ],
            "start": 746,
            "end": 778
          },
          "definite": false,
          "start": 736,
          "end": 778
        }
      ],
      "declare": false,
      "start": 730,
      "end": 779
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 788
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
                  "name": "man",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 794
                },
                "value": {
                  "type": "Literal",
                  "value": "Manny",
                  "raw": "\"Manny\"",
                  "start": 796,
                  "end": 803
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 791,
                "end": 803
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "beer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 809
                },
                "value": {
                  "type": "Literal",
                  "value": "Coffee",
                  "raw": "\"Coffee\"",
                  "start": 811,
                  "end": 819
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 805,
                "end": 819
              }
            ],
            "start": 789,
            "end": 821
          }
        ],
        "optional": false,
        "start": 780,
        "end": 822
      },
      "directive": null,
      "start": 780,
      "end": 823
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "addToZoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 832
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "manBeer",
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 840
          }
        ],
        "optional": false,
        "start": 824,
        "end": 841
      },
      "directive": null,
      "start": 824,
      "end": 842
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 842
}
```
