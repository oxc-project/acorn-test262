__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 295,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "name": "IsNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
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
        "start": 76,
        "end": 107,
        "checkType": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 86,
          "end": 92
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 95,
          "end": 99,
          "literal": {
            "type": "Literal",
            "start": 95,
            "end": 99,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 102,
          "end": 107,
          "literal": {
            "type": "Literal",
            "start": 102,
            "end": 107,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 125,
        "name": "Conflicted",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 157,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "name": "Ex1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 168,
        "end": 188,
        "typeName": {
          "type": "Identifier",
          "start": 168,
          "end": 176,
          "name": "IsNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 176,
          "end": 188,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 177,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 187,
                "name": "Conflicted",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 199,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "name": "Ex2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 210,
        "end": 239,
        "typeName": {
          "type": "Identifier",
          "start": 210,
          "end": 218,
          "name": "IsNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "value": "OEEE",
                    "raw": "\"OEEE\""
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 238,
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 238,
                    "name": "Conflicted",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 250,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 258,
        "name": "Ex3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 261,
        "end": 285,
        "typeName": {
          "type": "Identifier",
          "start": 261,
          "end": 269,
          "name": "IsNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 274,
                  "end": 284,
                  "typeName": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 284,
                    "name": "Conflicted",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
