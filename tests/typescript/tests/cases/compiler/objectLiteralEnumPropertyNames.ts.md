__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 25
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 36,
              "end": 39
            },
            "computed": false,
            "start": 32,
            "end": 39
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 49,
              "end": 52
            },
            "computed": false,
            "start": 45,
            "end": 52
          }
        ],
        "start": 26,
        "end": 54
      },
      "const": false,
      "declare": false,
      "start": 16,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestStrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 68
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strs",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "typeArguments": null,
          "start": 81,
          "end": 85
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 88,
          "end": 94
        },
        "optional": false,
        "readonly": null,
        "start": 71,
        "end": 96
      },
      "declare": false,
      "start": 55,
      "end": 96
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 114
                },
                "typeArguments": null,
                "start": 106,
                "end": 114
              },
              "start": 104,
              "end": 114
            },
            "start": 103,
            "end": 114
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 128
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "optional": false,
                  "computed": false,
                  "start": 124,
                  "end": 130
                },
                "value": {
                  "type": "Literal",
                  "value": "xo",
                  "raw": "'xo'",
                  "start": 133,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 123,
                "end": 137
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 148
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "optional": false,
                  "computed": false,
                  "start": 144,
                  "end": 150
                },
                "value": {
                  "type": "Literal",
                  "value": "xe",
                  "raw": "'xe'",
                  "start": 153,
                  "end": 157
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 143,
                "end": 157
              }
            ],
            "start": 117,
            "end": 159
          },
          "definite": false,
          "start": 103,
          "end": 159
        }
      ],
      "declare": false,
      "start": 97,
      "end": 159
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
            "name": "ux",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 168
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "optional": false,
                  "computed": false,
                  "start": 178,
                  "end": 184
                },
                "value": {
                  "type": "Literal",
                  "value": "xo",
                  "raw": "'xo'",
                  "start": 187,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 177,
                "end": 191
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 204
                },
                "value": {
                  "type": "Literal",
                  "value": "xe",
                  "raw": "'xe'",
                  "start": 207,
                  "end": 211
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 197,
                "end": 211
              }
            ],
            "start": 171,
            "end": 213
          },
          "definite": false,
          "start": 166,
          "end": 213
        }
      ],
      "declare": false,
      "start": 160,
      "end": 213
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 231
                },
                "typeArguments": null,
                "start": 223,
                "end": 231
              },
              "start": 221,
              "end": 231
            },
            "start": 220,
            "end": 231
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 241,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": "yo",
                  "raw": "'yo'",
                  "start": 247,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 240,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 258,
                  "end": 261
                },
                "value": {
                  "type": "Literal",
                  "value": "ye",
                  "raw": "'ye'",
                  "start": 264,
                  "end": 268
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 257,
                "end": 268
              }
            ],
            "start": 234,
            "end": 270
          },
          "definite": false,
          "start": 220,
          "end": 270
        }
      ],
      "declare": false,
      "start": 214,
      "end": 270
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 281,
            "end": 284
          },
          "definite": false,
          "start": 277,
          "end": 284
        }
      ],
      "declare": false,
      "start": 271,
      "end": 285
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 293
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 296,
            "end": 299
          },
          "definite": false,
          "start": 292,
          "end": 299
        }
      ],
      "declare": false,
      "start": 286,
      "end": 300
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 318
                },
                "typeArguments": null,
                "start": 310,
                "end": 318
              },
              "start": 308,
              "end": 318
            },
            "start": 307,
            "end": 318
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
                  "start": 328,
                  "end": 329
                },
                "value": {
                  "type": "Literal",
                  "value": "zo",
                  "raw": "'zo'",
                  "start": 332,
                  "end": 336
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 327,
                "end": 336
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
                  "start": 343,
                  "end": 344
                },
                "value": {
                  "type": "Literal",
                  "value": "ze",
                  "raw": "'ze'",
                  "start": 347,
                  "end": 351
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 342,
                "end": 351
              }
            ],
            "start": 321,
            "end": 353
          },
          "definite": false,
          "start": 307,
          "end": 353
        }
      ],
      "declare": false,
      "start": 301,
      "end": 353
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
            "name": "uz",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 362
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
                  "start": 372,
                  "end": 373
                },
                "value": {
                  "type": "Literal",
                  "value": "zo",
                  "raw": "'zo'",
                  "start": 376,
                  "end": 380
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 371,
                "end": 380
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
                  "start": 387,
                  "end": 388
                },
                "value": {
                  "type": "Literal",
                  "value": "ze",
                  "raw": "'ze'",
                  "start": 391,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 386,
                "end": 395
              }
            ],
            "start": 365,
            "end": 397
          },
          "definite": false,
          "start": 360,
          "end": 397
        }
      ],
      "declare": false,
      "start": 354,
      "end": 397
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "initializer": null,
            "computed": false,
            "start": 415,
            "end": 416
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "initializer": null,
            "computed": false,
            "start": 422,
            "end": 423
          }
        ],
        "start": 409,
        "end": 425
      },
      "const": false,
      "declare": false,
      "start": 399,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNums",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 439
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 444,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              },
              "start": 445,
              "end": 453
            },
            "accessibility": null,
            "static": false,
            "start": 444,
            "end": 454
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 455,
              "end": 456
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 458,
                "end": 464
              },
              "start": 456,
              "end": 464
            },
            "accessibility": null,
            "static": false,
            "start": 455,
            "end": 464
          }
        ],
        "start": 442,
        "end": 466
      },
      "declare": false,
      "start": 426,
      "end": 466
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 484
                },
                "typeArguments": null,
                "start": 476,
                "end": 484
              },
              "start": 474,
              "end": 484
            },
            "start": 473,
            "end": 484
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 498
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 494,
                  "end": 500
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 503,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 493,
                "end": 504
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 515
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "optional": false,
                  "computed": false,
                  "start": 511,
                  "end": 517
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 520,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 510,
                "end": 521
              }
            ],
            "start": 487,
            "end": 523
          },
          "definite": false,
          "start": 473,
          "end": 523
        }
      ],
      "declare": false,
      "start": 467,
      "end": 523
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
            "name": "un",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 532
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 546
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "optional": false,
                  "computed": false,
                  "start": 542,
                  "end": 548
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 551,
                  "end": 552
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 541,
                "end": 552
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 563
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 565
                  },
                  "optional": false,
                  "computed": false,
                  "start": 559,
                  "end": 565
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 568,
                  "end": 569
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 558,
                "end": 569
              }
            ],
            "start": 535,
            "end": 571
          },
          "definite": false,
          "start": 530,
          "end": 571
        }
      ],
      "declare": false,
      "start": 524,
      "end": 571
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
            "name": "an",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 580
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 583,
            "end": 584
          },
          "definite": false,
          "start": 578,
          "end": 584
        }
      ],
      "declare": false,
      "start": 572,
      "end": 585
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
            "name": "bn",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 594
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 597,
            "end": 598
          },
          "definite": false,
          "start": 592,
          "end": 598
        }
      ],
      "declare": false,
      "start": 586,
      "end": 599
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 617
                },
                "typeArguments": null,
                "start": 609,
                "end": 617
              },
              "start": 607,
              "end": 617
            },
            "start": 606,
            "end": 617
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
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 629
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 632,
                  "end": 633
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 626,
                "end": 633
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "value": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 645,
                  "end": 646
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 639,
                "end": 646
              }
            ],
            "start": 620,
            "end": 648
          },
          "definite": false,
          "start": 606,
          "end": 648
        }
      ],
      "declare": false,
      "start": 600,
      "end": 648
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
            "name": "um",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 657
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
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 669
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 672,
                  "end": 673
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 666,
                "end": 673
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 682
                },
                "value": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 685,
                  "end": 686
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 679,
                "end": 686
              }
            ],
            "start": 660,
            "end": 688
          },
          "definite": false,
          "start": 655,
          "end": 688
        }
      ],
      "declare": false,
      "start": 649,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 688
}
```
