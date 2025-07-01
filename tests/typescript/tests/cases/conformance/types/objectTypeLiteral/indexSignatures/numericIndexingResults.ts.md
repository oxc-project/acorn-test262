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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  "start": 16,
                  "end": 24
                },
                "start": 15,
                "end": 24
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 14,
            "end": 34
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 39,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 43,
              "end": 45
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 39,
            "end": 46
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 51,
              "end": 54
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 57,
              "end": 59
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 59
          }
        ],
        "start": 8,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
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
                  "start": 70,
                  "end": 71
                },
                "typeArguments": null,
                "start": 70,
                "end": 71
              },
              "start": 68,
              "end": 71
            },
            "start": 67,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 71
        }
      ],
      "declare": false,
      "start": 63,
      "end": 72
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 84,
              "end": 87
            },
            "optional": false,
            "computed": true,
            "start": 82,
            "end": 88
          },
          "definite": false,
          "start": 77,
          "end": 88
        }
      ],
      "declare": false,
      "start": 73,
      "end": 89
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 101,
              "end": 104
            },
            "optional": false,
            "computed": true,
            "start": 99,
            "end": 105
          },
          "definite": false,
          "start": 94,
          "end": 105
        }
      ],
      "declare": false,
      "start": 90,
      "end": 106
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 113
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 118,
              "end": 121
            },
            "optional": false,
            "computed": true,
            "start": 116,
            "end": 122
          },
          "definite": false,
          "start": 111,
          "end": 122
        }
      ],
      "declare": false,
      "start": 107,
      "end": 123
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 135,
              "end": 136
            },
            "optional": false,
            "computed": true,
            "start": 133,
            "end": 137
          },
          "definite": false,
          "start": 128,
          "end": 137
        }
      ],
      "declare": false,
      "start": 124,
      "end": 138
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 145
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 150,
              "end": 151
            },
            "optional": false,
            "computed": true,
            "start": 148,
            "end": 152
          },
          "definite": false,
          "start": 143,
          "end": 152
        }
      ],
      "declare": false,
      "start": 139,
      "end": 153
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 165,
              "end": 166
            },
            "optional": false,
            "computed": true,
            "start": 163,
            "end": 167
          },
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": false,
      "start": 154,
      "end": 168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 181
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  },
                  "start": 190,
                  "end": 198
                },
                "start": 189,
                "end": 198
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "start": 199,
              "end": 207
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 188,
            "end": 208
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
              "start": 213,
              "end": 214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 213,
            "end": 223
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 228,
              "end": 231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 239
            },
            "accessibility": null,
            "static": false,
            "start": 228,
            "end": 240
          }
        ],
        "start": 182,
        "end": 242
      },
      "declare": false,
      "start": 170,
      "end": 242
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "typeArguments": null,
                "start": 251,
                "end": 252
              },
              "start": 249,
              "end": 252
            },
            "start": 248,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 248,
          "end": 252
        }
      ],
      "declare": false,
      "start": 244,
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 264,
              "end": 267
            },
            "optional": false,
            "computed": true,
            "start": 262,
            "end": 268
          },
          "definite": false,
          "start": 257,
          "end": 268
        }
      ],
      "declare": false,
      "start": 253,
      "end": 269
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 281,
              "end": 284
            },
            "optional": false,
            "computed": true,
            "start": 279,
            "end": 285
          },
          "definite": false,
          "start": 274,
          "end": 285
        }
      ],
      "declare": false,
      "start": 270,
      "end": 286
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 298,
              "end": 301
            },
            "optional": false,
            "computed": true,
            "start": 296,
            "end": 302
          },
          "definite": false,
          "start": 291,
          "end": 302
        }
      ],
      "declare": false,
      "start": 287,
      "end": 303
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 315,
              "end": 316
            },
            "optional": false,
            "computed": true,
            "start": 313,
            "end": 317
          },
          "definite": false,
          "start": 308,
          "end": 317
        }
      ],
      "declare": false,
      "start": 304,
      "end": 318
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 330,
              "end": 331
            },
            "optional": false,
            "computed": true,
            "start": 328,
            "end": 332
          },
          "definite": false,
          "start": 323,
          "end": 332
        }
      ],
      "declare": false,
      "start": 319,
      "end": 333
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 345,
              "end": 346
            },
            "optional": false,
            "computed": true,
            "start": 343,
            "end": 347
          },
          "definite": false,
          "start": 338,
          "end": 347
        }
      ],
      "declare": false,
      "start": 334,
      "end": 348
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 367,
                            "end": 373
                          },
                          "start": 365,
                          "end": 373
                        },
                        "start": 364,
                        "end": 373
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      },
                      "start": 374,
                      "end": 382
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 363,
                    "end": 383
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
                      "start": 388,
                      "end": 389
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      },
                      "start": 389,
                      "end": 397
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 388,
                    "end": 398
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 403,
                      "end": 406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 406,
                      "end": 414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 403,
                    "end": 415
                  }
                ],
                "start": 357,
                "end": 417
              },
              "start": 355,
              "end": 417
            },
            "start": 354,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 417
        }
      ],
      "declare": false,
      "start": 350,
      "end": 417
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 425
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 430,
              "end": 433
            },
            "optional": false,
            "computed": true,
            "start": 428,
            "end": 434
          },
          "definite": false,
          "start": 423,
          "end": 434
        }
      ],
      "declare": false,
      "start": 419,
      "end": 435
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 442
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 447,
              "end": 450
            },
            "optional": false,
            "computed": true,
            "start": 445,
            "end": 451
          },
          "definite": false,
          "start": 440,
          "end": 451
        }
      ],
      "declare": false,
      "start": 436,
      "end": 452
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 459
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 464,
              "end": 467
            },
            "optional": false,
            "computed": true,
            "start": 462,
            "end": 468
          },
          "definite": false,
          "start": 457,
          "end": 468
        }
      ],
      "declare": false,
      "start": 453,
      "end": 469
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 476
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 481,
              "end": 482
            },
            "optional": false,
            "computed": true,
            "start": 479,
            "end": 483
          },
          "definite": false,
          "start": 474,
          "end": 483
        }
      ],
      "declare": false,
      "start": 470,
      "end": 484
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 491
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 495
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 496,
              "end": 497
            },
            "optional": false,
            "computed": true,
            "start": 494,
            "end": 498
          },
          "definite": false,
          "start": 489,
          "end": 498
        }
      ],
      "declare": false,
      "start": 485,
      "end": 499
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 506
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 511,
              "end": 512
            },
            "optional": false,
            "computed": true,
            "start": 509,
            "end": 513
          },
          "definite": false,
          "start": 504,
          "end": 513
        }
      ],
      "declare": false,
      "start": 500,
      "end": 514
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          },
                          "start": 527,
                          "end": 535
                        },
                        "start": 526,
                        "end": 535
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 538,
                        "end": 544
                      },
                      "start": 536,
                      "end": 544
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 525,
                    "end": 544
                  }
                ],
                "start": 523,
                "end": 546
              },
              "start": 521,
              "end": 546
            },
            "start": 520,
            "end": 546
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 551,
                  "end": 552
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 554,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 551,
                "end": 556
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 558,
                  "end": 561
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 563,
                  "end": 565
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 558,
                "end": 565
              }
            ],
            "start": 549,
            "end": 567
          },
          "definite": false,
          "start": 520,
          "end": 567
        }
      ],
      "declare": false,
      "start": 516,
      "end": 567
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 575
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 580,
              "end": 583
            },
            "optional": false,
            "computed": true,
            "start": 578,
            "end": 584
          },
          "definite": false,
          "start": 572,
          "end": 584
        }
      ],
      "declare": false,
      "start": 568,
      "end": 585
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
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 593
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 598,
              "end": 601
            },
            "optional": false,
            "computed": true,
            "start": 596,
            "end": 602
          },
          "definite": false,
          "start": 590,
          "end": 602
        }
      ],
      "declare": false,
      "start": 586,
      "end": 603
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 610
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 614
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 615,
              "end": 618
            },
            "optional": false,
            "computed": true,
            "start": 613,
            "end": 619
          },
          "definite": false,
          "start": 608,
          "end": 619
        }
      ],
      "declare": false,
      "start": 604,
      "end": 620
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 627
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 632,
              "end": 633
            },
            "optional": false,
            "computed": true,
            "start": 630,
            "end": 634
          },
          "definite": false,
          "start": 625,
          "end": 634
        }
      ],
      "declare": false,
      "start": 621,
      "end": 635
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 642
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 647,
              "end": 648
            },
            "optional": false,
            "computed": true,
            "start": 645,
            "end": 649
          },
          "definite": false,
          "start": 640,
          "end": 649
        }
      ],
      "declare": false,
      "start": 636,
      "end": 650
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 657
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 662,
              "end": 663
            },
            "optional": false,
            "computed": true,
            "start": 660,
            "end": 664
          },
          "definite": false,
          "start": 655,
          "end": 664
        }
      ],
      "declare": false,
      "start": 651,
      "end": 665
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 681,
                            "end": 687
                          },
                          "start": 679,
                          "end": 687
                        },
                        "start": 678,
                        "end": 687
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 677,
                    "end": 697
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
                      "start": 698,
                      "end": 699
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 701,
                        "end": 707
                      },
                      "start": 699,
                      "end": 707
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 698,
                    "end": 708
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 709,
                      "end": 712
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      },
                      "start": 712,
                      "end": 720
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 709,
                    "end": 721
                  }
                ],
                "start": 675,
                "end": 723
              },
              "start": 673,
              "end": 723
            },
            "start": 671,
            "end": 723
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 728,
                  "end": 729
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 731,
                  "end": 733
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 728,
                "end": 733
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 735,
                  "end": 738
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 740,
                  "end": 742
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 735,
                "end": 742
              }
            ],
            "start": 726,
            "end": 744
          },
          "definite": false,
          "start": 671,
          "end": 744
        }
      ],
      "declare": false,
      "start": 667,
      "end": 744
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 752
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 757
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 758,
              "end": 761
            },
            "optional": false,
            "computed": true,
            "start": 755,
            "end": 762
          },
          "definite": false,
          "start": 749,
          "end": 762
        }
      ],
      "declare": false,
      "start": 745,
      "end": 763
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 768,
            "end": 771
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 776
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 777,
              "end": 780
            },
            "optional": false,
            "computed": true,
            "start": 774,
            "end": 781
          },
          "definite": false,
          "start": 768,
          "end": 781
        }
      ],
      "declare": false,
      "start": 764,
      "end": 782
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 789
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 794
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 795,
              "end": 798
            },
            "optional": false,
            "computed": true,
            "start": 792,
            "end": 799
          },
          "definite": false,
          "start": 787,
          "end": 799
        }
      ],
      "declare": false,
      "start": 783,
      "end": 800
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 807
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 812
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 813,
              "end": 814
            },
            "optional": false,
            "computed": true,
            "start": 810,
            "end": 815
          },
          "definite": false,
          "start": 805,
          "end": 815
        }
      ],
      "declare": false,
      "start": 801,
      "end": 816
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 823
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 828
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 829,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 826,
            "end": 831
          },
          "definite": false,
          "start": 821,
          "end": 831
        }
      ],
      "declare": false,
      "start": 817,
      "end": 832
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 844
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 845,
              "end": 846
            },
            "optional": false,
            "computed": true,
            "start": 842,
            "end": 847
          },
          "definite": false,
          "start": 837,
          "end": 847
        }
      ],
      "declare": false,
      "start": 833,
      "end": 848
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 848
}
```
