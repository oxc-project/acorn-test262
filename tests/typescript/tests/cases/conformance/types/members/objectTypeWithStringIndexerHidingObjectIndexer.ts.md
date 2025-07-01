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
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 158
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
                    "start": 169,
                    "end": 175
                  },
                  "start": 167,
                  "end": 175
                },
                "start": 166,
                "end": 175
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "typeArguments": null,
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 165,
            "end": 185
          }
        ],
        "start": 159,
        "end": 187
      },
      "declare": false,
      "start": 142,
      "end": 187
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 196,
            "end": 198
          },
          "definite": false,
          "start": 192,
          "end": 198
        }
      ],
      "declare": false,
      "start": 188,
      "end": 199
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 210,
              "end": 212
            },
            "optional": false,
            "computed": true,
            "start": 208,
            "end": 213
          },
          "definite": false,
          "start": 204,
          "end": 213
        }
      ],
      "declare": false,
      "start": 200,
      "end": 214
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
        "start": 242,
        "end": 243
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 253
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 250,
            "end": 262
          },
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
                    "start": 271,
                    "end": 277
                  },
                  "start": 269,
                  "end": 277
                },
                "start": 268,
                "end": 277
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 267,
            "end": 287
          }
        ],
        "start": 244,
        "end": 289
      },
      "abstract": false,
      "declare": false,
      "start": 236,
      "end": 289
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
                  "start": 297,
                  "end": 298
                },
                "typeArguments": null,
                "start": 297,
                "end": 298
              },
              "start": 295,
              "end": 298
            },
            "start": 294,
            "end": 298
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 298
        }
      ],
      "declare": false,
      "start": 290,
      "end": 299
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "start": 306,
              "end": 314
            },
            "start": 304,
            "end": 314
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 319,
              "end": 321
            },
            "optional": false,
            "computed": true,
            "start": 317,
            "end": 322
          },
          "definite": false,
          "start": 304,
          "end": 322
        }
      ],
      "declare": false,
      "start": 300,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 336
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 348,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 355
          },
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
                    "start": 364,
                    "end": 370
                  },
                  "start": 362,
                  "end": 370
                },
                "start": 361,
                "end": 370
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 373,
                "end": 379
              },
              "start": 371,
              "end": 379
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 360,
            "end": 380
          }
        ],
        "start": 337,
        "end": 382
      },
      "declare": false,
      "start": 325,
      "end": 382
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
                  "start": 390,
                  "end": 391
                },
                "typeArguments": null,
                "start": 390,
                "end": 391
              },
              "start": 388,
              "end": 391
            },
            "start": 387,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 387,
          "end": 391
        }
      ],
      "declare": false,
      "start": 383,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 401,
                "end": 407
              },
              "start": 399,
              "end": 407
            },
            "start": 397,
            "end": 407
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 412,
              "end": 414
            },
            "optional": false,
            "computed": true,
            "start": 410,
            "end": 415
          },
          "definite": false,
          "start": 397,
          "end": 415
        }
      ],
      "declare": false,
      "start": 393,
      "end": 416
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
            "name": "o2",
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
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 435
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 437,
                        "end": 443
                      },
                      "start": 435,
                      "end": 443
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 432,
                    "end": 444
                  },
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
                            "start": 453,
                            "end": 459
                          },
                          "start": 451,
                          "end": 459
                        },
                        "start": 450,
                        "end": 459
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 462,
                        "end": 468
                      },
                      "start": 460,
                      "end": 468
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 449,
                    "end": 469
                  }
                ],
                "start": 426,
                "end": 471
              },
              "start": 424,
              "end": 471
            },
            "start": 422,
            "end": 471
          },
          "init": null,
          "definite": false,
          "start": 422,
          "end": 471
        }
      ],
      "declare": false,
      "start": 418,
      "end": 471
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              },
              "start": 478,
              "end": 486
            },
            "start": 476,
            "end": 486
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 491
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 492,
              "end": 494
            },
            "optional": false,
            "computed": true,
            "start": 489,
            "end": 495
          },
          "definite": false,
          "start": 476,
          "end": 495
        }
      ],
      "declare": false,
      "start": 472,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 142,
  "end": 498
}
```
