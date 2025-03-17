__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 309,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 61,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 52,
              "name": "createdAt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 58,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 22,
              "name": "Attributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 25,
              "end": 28
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 83,
        "name": "ModelAttributes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
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
        "type": "TSTypeReference",
        "start": 89,
        "end": 109,
        "typeName": {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "name": "Omit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 93,
          "end": 109,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 97,
              "end": 108,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "name": "Model",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 127,
        "name": "AutoModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 144,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 167,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 144,
        "end": 164,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 145,
            "end": 163,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 160,
              "name": "ModelAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 160,
              "end": 163,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 161,
                  "end": 162,
                  "typeName": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 169,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 186,
        "name": "PersonModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 195,
        "end": 204,
        "name": "AutoModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 308,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 224,
            "end": 243,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "name": "age",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 236,
                "end": 242
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 306,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 255,
              "name": "toJson",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 306,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 306,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 268,
                    "end": 300,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 272,
                        "end": 299,
                        "id": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 285,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 273,
                            "end": 285,
                            "typeAnnotation": {
                              "type": "TSTypeOperator",
                              "start": 275,
                              "end": 285,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSThisType",
                                "start": 281,
                                "end": 285
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 288,
                          "end": 299,
                          "value": "createdAt",
                          "raw": "'createdAt'"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 204,
        "end": 217,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 216,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 216,
              "name": "PersonModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
