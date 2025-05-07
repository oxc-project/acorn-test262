__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 294,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 108,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "decorators": [],
        "name": "IsNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 76,
        "end": 107,
        "checkType": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 86,
          "end": 92
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 102,
          "end": 107,
          "literal": {
            "type": "Literal",
            "start": 102,
            "end": 107,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 95,
          "end": 99,
          "literal": {
            "type": "Literal",
            "start": 95,
            "end": 99,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
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
      "start": 110,
      "end": 155,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 125,
        "decorators": [],
        "name": "Conflicted",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 128,
        "end": 154,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 128,
            "end": 139,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 130,
                "end": 137,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 133,
                    "end": 137,
                    "literal": {
                      "type": "Literal",
                      "start": 133,
                      "end": 137,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 142,
            "end": 154,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 144,
                "end": 152,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 147,
                    "end": 152,
                    "literal": {
                      "type": "Literal",
                      "start": 147,
                      "end": 152,
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 157,
      "end": 189,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "decorators": [],
        "name": "Ex1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 168,
        "end": 188,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 176,
          "end": 188,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 177,
              "end": 187,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 187,
                "decorators": [],
                "name": "Conflicted",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 168,
          "end": 176,
          "decorators": [],
          "name": "IsNumber",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 199,
      "end": 240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "decorators": [],
        "name": "Ex2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 210,
        "end": 239,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 218,
          "end": 239,
          "params": [
            {
              "type": "TSUnionType",
              "start": 219,
              "end": 238,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 219,
                  "end": 225,
                  "literal": {
                    "type": "Literal",
                    "start": 219,
                    "end": 225,
                    "raw": "\"OEEE\"",
                    "value": "OEEE",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 238,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 238,
                    "decorators": [],
                    "name": "Conflicted",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 210,
          "end": 218,
          "decorators": [],
          "name": "IsNumber",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 250,
      "end": 286,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 258,
        "decorators": [],
        "name": "Ex3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 261,
        "end": 285,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 269,
          "end": 285,
          "params": [
            {
              "type": "TSUnionType",
              "start": 270,
              "end": 284,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 270,
                  "end": 271,
                  "literal": {
                    "type": "Literal",
                    "start": 270,
                    "end": 271,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 274,
                  "end": 284,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 284,
                    "decorators": [],
                    "name": "Conflicted",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 261,
          "end": 269,
          "decorators": [],
          "name": "IsNumber",
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
