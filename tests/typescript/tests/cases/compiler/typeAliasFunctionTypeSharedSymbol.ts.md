__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 75
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 77,
                            "end": 80
                          },
                          "start": 77,
                          "end": 82
                        },
                        "start": 75,
                        "end": 82
                      },
                      "value": null,
                      "start": 68,
                      "end": 82
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 85,
                      "end": 87
                    },
                    "start": 83,
                    "end": 87
                  },
                  "start": 63,
                  "end": 87
                }
              ],
              "start": 62,
              "end": 88
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 88
          }
        ],
        "start": 47,
        "end": 89
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 101
              },
              "typeArguments": null,
              "start": 96,
              "end": 101
            },
            "start": 94,
            "end": 101
          },
          "start": 90,
          "end": 101
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 135,
                "end": 142
              },
              "abstract": false,
              "declare": false,
              "start": 116,
              "end": 142
            },
            "start": 109,
            "end": 143
          }
        ],
        "start": 103,
        "end": 145
      },
      "expression": false,
      "start": 33,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnTypeOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 172
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 185
              },
              "typeArguments": null,
              "start": 173,
              "end": 185
            }
          ],
          "start": 172,
          "end": 186
        },
        "start": 160,
        "end": 186
      },
      "declare": false,
      "start": 147,
      "end": 186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnTypeOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 207
          }
        ],
        "start": 205,
        "end": 208
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "typeArguments": null,
          "start": 211,
          "end": 212
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 229
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 231,
                    "end": 234
                  },
                  "start": 231,
                  "end": 236
                },
                "start": 229,
                "end": 236
              },
              "value": null,
              "start": 222,
              "end": 236
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 245,
                "end": 246
              },
              "start": 239,
              "end": 246
            },
            "start": 237,
            "end": 246
          },
          "start": 221,
          "end": 246
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "typeArguments": null,
          "start": 249,
          "end": 250
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 253,
          "end": 258
        },
        "start": 211,
        "end": 258
      },
      "declare": false,
      "start": 188,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crashes",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 273
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 276,
            "end": 282
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "start": 285,
            "end": 290
          }
        ],
        "start": 276,
        "end": 290
      },
      "declare": false,
      "start": 261,
      "end": 291
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 291
}
```
