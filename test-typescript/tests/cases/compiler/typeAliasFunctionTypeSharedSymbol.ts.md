__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 292,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "name": "Mixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 101,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 101,
                "name": "TBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 103,
        "end": 145,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 109,
            "end": 143,
            "argument": {
              "type": "ClassExpression",
              "start": 116,
              "end": 142,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 135,
                "end": 142,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 47,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "name": "TBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 62,
              "end": 88,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 63,
                  "end": 87,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 68,
                      "end": 82,
                      "argument": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 75,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 77,
                          "end": 82,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 77,
                            "end": 80
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 85,
                      "end": 87,
                      "members": []
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 147,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 157,
        "name": "Mixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 160,
        "end": 186,
        "typeName": {
          "type": "Identifier",
          "start": 160,
          "end": 172,
          "name": "ReturnTypeOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 172,
          "end": 186,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 173,
              "end": 185,
              "exprName": {
                "type": "Identifier",
                "start": 180,
                "end": 185,
                "name": "Mixin",
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
      "start": 188,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 205,
        "name": "ReturnTypeOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "V",
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
        "start": 211,
        "end": 258,
        "checkType": {
          "type": "TSTypeReference",
          "start": 211,
          "end": 212,
          "typeName": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 221,
          "end": 246,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 222,
              "end": 236,
              "argument": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 231,
                  "end": 236,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 231,
                    "end": 234
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 246,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 239,
              "end": 246,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 245,
                "end": 246,
                "name": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "name": "R",
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
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 249,
          "end": 250,
          "typeName": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 253,
          "end": 258
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 273,
        "name": "Crashes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 276,
        "end": 290,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 276,
            "end": 282
          },
          {
            "type": "TSTypeReference",
            "start": 285,
            "end": 290,
            "typeName": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "name": "Mixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
