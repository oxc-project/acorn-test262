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
                    "type": "TSStringKeyword",
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
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
          }
        ],
        "start": 8,
        "end": 48
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 48
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
                  "start": 57,
                  "end": 58
                },
                "typeArguments": null,
                "start": 57,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "start": 54,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 58
        }
      ],
      "declare": false,
      "start": 50,
      "end": 59
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
            "start": 64,
            "end": 66
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 71,
              "end": 74
            },
            "optional": false,
            "computed": true,
            "start": 69,
            "end": 75
          },
          "definite": false,
          "start": 64,
          "end": 75
        }
      ],
      "declare": false,
      "start": 60,
      "end": 76
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
            "start": 82,
            "end": 84
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 89,
              "end": 92
            },
            "optional": false,
            "computed": true,
            "start": 87,
            "end": 93
          },
          "definite": false,
          "start": 82,
          "end": 93
        }
      ],
      "declare": false,
      "start": 78,
      "end": 94
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
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 106,
              "end": 107
            },
            "optional": false,
            "computed": true,
            "start": 104,
            "end": 108
          },
          "definite": false,
          "start": 99,
          "end": 108
        }
      ],
      "declare": false,
      "start": 95,
      "end": 109
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
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
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 130,
            "end": 150
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
              "start": 155,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 165
          }
        ],
        "start": 124,
        "end": 167
      },
      "declare": false,
      "start": 112,
      "end": 167
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
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              },
              "start": 174,
              "end": 177
            },
            "start": 173,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 177
        }
      ],
      "declare": false,
      "start": 169,
      "end": 177
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
            "start": 182,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 189,
              "end": 192
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 193
          },
          "definite": false,
          "start": 182,
          "end": 193
        }
      ],
      "declare": false,
      "start": 178,
      "end": 194
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
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 206,
              "end": 209
            },
            "optional": false,
            "computed": true,
            "start": 204,
            "end": 210
          },
          "definite": false,
          "start": 199,
          "end": 210
        }
      ],
      "declare": false,
      "start": 195,
      "end": 211
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
            "start": 216,
            "end": 218
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 223,
              "end": 224
            },
            "optional": false,
            "computed": true,
            "start": 221,
            "end": 225
          },
          "definite": false,
          "start": 216,
          "end": 225
        }
      ],
      "declare": false,
      "start": 212,
      "end": 226
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
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          },
                          "start": 244,
                          "end": 252
                        },
                        "start": 243,
                        "end": 252
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      },
                      "start": 253,
                      "end": 261
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 242,
                    "end": 262
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
                      "start": 267,
                      "end": 268
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      },
                      "start": 268,
                      "end": 276
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 267,
                    "end": 277
                  }
                ],
                "start": 236,
                "end": 279
              },
              "start": 234,
              "end": 279
            },
            "start": 233,
            "end": 279
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 279
        }
      ],
      "declare": false,
      "start": 229,
      "end": 279
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 292,
              "end": 295
            },
            "optional": false,
            "computed": true,
            "start": 290,
            "end": 296
          },
          "definite": false,
          "start": 285,
          "end": 296
        }
      ],
      "declare": false,
      "start": 281,
      "end": 297
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 309,
              "end": 312
            },
            "optional": false,
            "computed": true,
            "start": 307,
            "end": 313
          },
          "definite": false,
          "start": 302,
          "end": 313
        }
      ],
      "declare": false,
      "start": 298,
      "end": 314
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 326,
              "end": 327
            },
            "optional": false,
            "computed": true,
            "start": 324,
            "end": 328
          },
          "definite": false,
          "start": 319,
          "end": 328
        }
      ],
      "declare": false,
      "start": 315,
      "end": 329
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
                            "type": "TSStringKeyword",
                            "start": 344,
                            "end": 350
                          },
                          "start": 342,
                          "end": 350
                        },
                        "start": 341,
                        "end": 350
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      },
                      "start": 351,
                      "end": 359
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 340,
                    "end": 359
                  }
                ],
                "start": 338,
                "end": 361
              },
              "start": 336,
              "end": 361
            },
            "start": 335,
            "end": 361
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 369,
                  "end": 371
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 366,
                "end": 371
              }
            ],
            "start": 364,
            "end": 373
          },
          "definite": false,
          "start": 335,
          "end": 373
        }
      ],
      "declare": false,
      "start": 331,
      "end": 373
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 382
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 387,
              "end": 390
            },
            "optional": false,
            "computed": true,
            "start": 385,
            "end": 391
          },
          "definite": false,
          "start": 379,
          "end": 391
        }
      ],
      "declare": false,
      "start": 375,
      "end": 392
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 404
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 405,
              "end": 408
            },
            "optional": false,
            "computed": true,
            "start": 403,
            "end": 409
          },
          "definite": false,
          "start": 397,
          "end": 409
        }
      ],
      "declare": false,
      "start": 393,
      "end": 410
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 423,
              "end": 424
            },
            "optional": false,
            "computed": true,
            "start": 421,
            "end": 425
          },
          "definite": false,
          "start": 415,
          "end": 425
        }
      ],
      "declare": false,
      "start": 411,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 426
}
```
