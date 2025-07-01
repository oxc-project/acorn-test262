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
        "name": "IsNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
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
            "start": 76,
            "end": 77
          },
          "typeArguments": null,
          "start": 76,
          "end": 77
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 86,
          "end": 92
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 95,
            "end": 99
          },
          "start": 95,
          "end": 99
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 102,
            "end": 107
          },
          "start": 102,
          "end": 107
        },
        "start": 76,
        "end": 107
      },
      "declare": false,
      "start": 57,
      "end": 108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conflicted",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 125
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 133,
                      "end": 137
                    },
                    "start": 133,
                    "end": 137
                  },
                  "start": 131,
                  "end": 137
                },
                "accessibility": null,
                "static": false,
                "start": 130,
                "end": 137
              }
            ],
            "start": 128,
            "end": 139
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 145
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 147,
                      "end": 152
                    },
                    "start": 147,
                    "end": 152
                  },
                  "start": 145,
                  "end": 152
                },
                "accessibility": null,
                "static": false,
                "start": 144,
                "end": 152
              }
            ],
            "start": 142,
            "end": 154
          }
        ],
        "start": 128,
        "end": 154
      },
      "declare": false,
      "start": 110,
      "end": 155
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ex1",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 165
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 176
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Conflicted",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 187
              },
              "typeArguments": null,
              "start": 177,
              "end": 187
            }
          ],
          "start": 176,
          "end": 188
        },
        "start": 168,
        "end": 188
      },
      "declare": false,
      "start": 157,
      "end": 189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ex2",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 207
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 218
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "OEEE",
                    "raw": "\"OEEE\"",
                    "start": 219,
                    "end": 225
                  },
                  "start": 219,
                  "end": 225
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Conflicted",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 238
                  },
                  "typeArguments": null,
                  "start": 228,
                  "end": 238
                }
              ],
              "start": 219,
              "end": 238
            }
          ],
          "start": 218,
          "end": 239
        },
        "start": 210,
        "end": 239
      },
      "declare": false,
      "start": 199,
      "end": 240
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ex3",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 258
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 269
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 270,
                    "end": 271
                  },
                  "start": 270,
                  "end": 271
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Conflicted",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 284
                  },
                  "typeArguments": null,
                  "start": 274,
                  "end": 284
                }
              ],
              "start": 270,
              "end": 284
            }
          ],
          "start": 269,
          "end": 285
        },
        "start": 261,
        "end": 285
      },
      "declare": false,
      "start": 250,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 294
}
```
