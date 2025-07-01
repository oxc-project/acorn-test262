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
        "name": "B",
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  },
                  "start": 32,
                  "end": 40
                },
                "start": 31,
                "end": 40
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 14,
            "end": 50
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 75,
                    "end": 81
                  },
                  "start": 73,
                  "end": 81
                },
                "start": 72,
                "end": 81
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 84,
                      "end": 86
                    },
                    "start": 84,
                    "end": 86
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 233,
                      "raw": "233",
                      "start": 89,
                      "end": 92
                    },
                    "start": 89,
                    "end": 92
                  }
                ],
                "start": 84,
                "end": 92
              },
              "start": 82,
              "end": 92
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 55,
            "end": 92
          }
        ],
        "start": 8,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  },
                  "start": 138,
                  "end": 146
                },
                "start": 137,
                "end": 146
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              },
              "start": 147,
              "end": 155
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 120,
            "end": 155
          }
        ],
        "start": 114,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ED",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 167
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 177
      },
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 204,
                    "end": 210
                  },
                  "start": 202,
                  "end": 210
                },
                "start": 201,
                "end": 210
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 213,
                "end": 220
              },
              "start": 211,
              "end": 220
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 184,
            "end": 220
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 243,
                  "end": 251
                },
                "start": 242,
                "end": 251
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 254,
                  "end": 255
                },
                "start": 254,
                "end": 255
              },
              "start": 252,
              "end": 255
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 225,
            "end": 255
          }
        ],
        "start": 178,
        "end": 258
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 258
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 268
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 305,
                    "end": 311
                  },
                  "start": 303,
                  "end": 311
                },
                "start": 302,
                "end": 311
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 421,
                  "raw": "421",
                  "start": 314,
                  "end": 317
                },
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 285,
            "end": 317
          }
        ],
        "start": 279,
        "end": 319
      },
      "abstract": false,
      "declare": false,
      "start": 260,
      "end": 319
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
            "start": 327,
            "end": 328
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 333,
              "end": 336
            },
            "optional": false,
            "computed": true,
            "start": 331,
            "end": 337
          },
          "definite": false,
          "start": 327,
          "end": 337
        }
      ],
      "declare": false,
      "start": 321,
      "end": 338
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
            "start": 345,
            "end": 346
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 352,
              "end": 354
            },
            "optional": false,
            "computed": true,
            "start": 350,
            "end": 355
          },
          "definite": false,
          "start": 345,
          "end": 355
        }
      ],
      "declare": false,
      "start": 339,
      "end": 356
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 369,
              "end": 372
            },
            "optional": false,
            "computed": true,
            "start": 367,
            "end": 373
          },
          "definite": false,
          "start": 363,
          "end": 373
        }
      ],
      "declare": false,
      "start": 357,
      "end": 373
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 386,
              "end": 388
            },
            "optional": false,
            "computed": true,
            "start": 384,
            "end": 389
          },
          "definite": false,
          "start": 380,
          "end": 389
        }
      ],
      "declare": false,
      "start": 374,
      "end": 389
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 402
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 403,
              "end": 406
            },
            "optional": false,
            "computed": true,
            "start": 400,
            "end": 407
          },
          "definite": false,
          "start": 396,
          "end": 407
        }
      ],
      "declare": false,
      "start": 390,
      "end": 407
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 421,
              "end": 423
            },
            "optional": false,
            "computed": true,
            "start": 418,
            "end": 424
          },
          "definite": false,
          "start": 414,
          "end": 424
        }
      ],
      "declare": false,
      "start": 408,
      "end": 424
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 432
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 437
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 438,
              "end": 441
            },
            "optional": false,
            "computed": true,
            "start": 435,
            "end": 442
          },
          "definite": false,
          "start": 431,
          "end": 442
        }
      ],
      "declare": false,
      "start": 425,
      "end": 442
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 450
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 455
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 456,
              "end": 458
            },
            "optional": false,
            "computed": true,
            "start": 453,
            "end": 459
          },
          "definite": false,
          "start": 449,
          "end": 459
        }
      ],
      "declare": false,
      "start": 443,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 459
}
```
