__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 59
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 60,
              "end": 64
            }
          ],
          "start": 59,
          "end": 65
        },
        "start": 48,
        "end": 65
      },
      "declare": false,
      "start": 38,
      "end": 66
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 88
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 89,
              "end": 98
            }
          ],
          "start": 88,
          "end": 99
        },
        "start": 77,
        "end": 99
      },
      "declare": false,
      "start": 67,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 111,
            "end": 115
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 118,
            "end": 120
          }
        ],
        "start": 111,
        "end": 120
      },
      "declare": false,
      "start": 101,
      "end": 121
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 129
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUndefinedKeyword",
            "start": 132,
            "end": 141
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 144,
            "end": 146
          }
        ],
        "start": 132,
        "end": 146
      },
      "declare": false,
      "start": 122,
      "end": 147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 158,
            "end": 162
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 165,
            "end": 174
          }
        ],
        "start": 158,
        "end": 174
      },
      "declare": false,
      "start": 148,
      "end": 175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 186,
            "end": 190
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  },
                  "start": 196,
                  "end": 204
                },
                "accessibility": null,
                "static": false,
                "start": 195,
                "end": 204
              }
            ],
            "start": 193,
            "end": 206
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 209,
            "end": 211
          }
        ],
        "start": 186,
        "end": 211
      },
      "declare": false,
      "start": 176,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonNullableNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 255
      },
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
              "start": 256,
              "end": 257
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 257
          }
        ],
        "start": 255,
        "end": 258
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeArguments": null,
            "start": 261,
            "end": 262
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 265,
            "end": 267
          }
        ],
        "start": 261,
        "end": 267
      },
      "declare": false,
      "start": 236,
      "end": 268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonNullableOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 288
      },
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
              "start": 289,
              "end": 290
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 289,
            "end": 290
          }
        ],
        "start": 288,
        "end": 291
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          },
          "typeArguments": null,
          "start": 294,
          "end": 295
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNullKeyword",
              "start": 304,
              "end": 308
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 311,
              "end": 320
            }
          ],
          "start": 304,
          "end": 320
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 323,
          "end": 328
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 332
          },
          "typeArguments": null,
          "start": 331,
          "end": 332
        },
        "start": 294,
        "end": 332
      },
      "declare": false,
      "start": 269,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 347
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullableNew",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 364
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 365,
              "end": 369
            }
          ],
          "start": 364,
          "end": 370
        },
        "start": 350,
        "end": 370
      },
      "declare": false,
      "start": 335,
      "end": 371
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 384
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonNullableOld",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 401
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 402,
              "end": 406
            }
          ],
          "start": 401,
          "end": 407
        },
        "start": 387,
        "end": 407
      },
      "declare": false,
      "start": 372,
      "end": 408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 408
}
```
