__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 409,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 38,
      "end": 66,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 48,
        "end": 65,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 59,
          "end": 65,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 60,
              "end": 64
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 48,
          "end": 59,
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 100,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 77,
        "end": 99,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 88,
          "end": 99,
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 89,
              "end": 98
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 77,
          "end": 88,
          "decorators": [],
          "name": "NonNullable",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 101,
      "end": 121,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 111,
        "end": 120,
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 111,
            "end": 115
          },
          {
            "type": "TSTypeLiteral",
            "start": 118,
            "end": 120,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 122,
      "end": 147,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 132,
        "end": 146,
        "types": [
          {
            "type": "TSUndefinedKeyword",
            "start": 132,
            "end": 141
          },
          {
            "type": "TSTypeLiteral",
            "start": 144,
            "end": 146,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 175,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 158,
        "end": 174,
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
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 176,
      "end": 212,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 183,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 186,
        "end": 211,
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 186,
            "end": 190
          },
          {
            "type": "TSTypeLiteral",
            "start": 193,
            "end": 206,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 195,
                "end": 204,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 209,
            "end": 211,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 236,
      "end": 268,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 255,
        "decorators": [],
        "name": "NonNullableNew",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 261,
        "end": 267,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 261,
            "end": 262,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 265,
            "end": 267,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 255,
        "end": 258,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 256,
            "end": 257,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 269,
      "end": 333,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 288,
        "decorators": [],
        "name": "NonNullableOld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 294,
        "end": 332,
        "checkType": {
          "type": "TSTypeReference",
          "start": 294,
          "end": 295,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "start": 304,
          "end": 320,
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
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 331,
          "end": 332,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 331,
            "end": 332,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 323,
          "end": 328
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 371,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 347,
        "decorators": [],
        "name": "TestNew",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 350,
        "end": 370,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 364,
          "end": 370,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 365,
              "end": 369
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 350,
          "end": 364,
          "decorators": [],
          "name": "NonNullableNew",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 372,
      "end": 408,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 384,
        "decorators": [],
        "name": "TestOld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 387,
        "end": 407,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 401,
          "end": 407,
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 402,
              "end": 406
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 387,
          "end": 401,
          "decorators": [],
          "name": "NonNullableOld",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
