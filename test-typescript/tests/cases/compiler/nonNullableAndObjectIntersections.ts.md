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
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 48,
        "end": 65,
        "typeName": {
          "type": "Identifier",
          "start": 48,
          "end": 59,
          "name": "NonNullable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 77,
        "end": 99,
        "typeName": {
          "type": "Identifier",
          "start": 77,
          "end": 88,
          "name": "NonNullable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 101,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 122,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 176,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 183,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  }
                },
                "accessibility": null,
                "static": false
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 236,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 255,
        "name": "NonNullableNew",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "typeName": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 265,
            "end": 267,
            "members": []
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 269,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 288,
        "name": "NonNullableOld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 294,
        "end": 332,
        "checkType": {
          "type": "TSTypeReference",
          "start": 294,
          "end": 295,
          "typeName": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 323,
          "end": 328
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 331,
          "end": 332,
          "typeName": {
            "type": "Identifier",
            "start": 331,
            "end": 332,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 347,
        "name": "TestNew",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 350,
        "end": 370,
        "typeName": {
          "type": "Identifier",
          "start": 350,
          "end": 364,
          "name": "NonNullableNew",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 372,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 384,
        "name": "TestOld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 387,
        "end": 407,
        "typeName": {
          "type": "Identifier",
          "start": 387,
          "end": 401,
          "name": "NonNullableOld",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
