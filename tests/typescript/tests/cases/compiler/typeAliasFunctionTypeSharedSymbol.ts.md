__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 291,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 75,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 101,
          "decorators": [],
          "name": "Base",
          "optional": false,
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
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 135,
                "end": 142,
                "body": []
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 147,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 157,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "ReturnTypeOf",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "Mixin",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "ReturnTypeOf",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
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
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
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
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "Crashes",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": null
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
