__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 308,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 61,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 52,
              "decorators": [],
              "name": "createdAt",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 83,
        "decorators": [],
        "name": "ModelAttributes",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
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
        "type": "TSTypeReference",
        "start": 89,
        "end": 109,
        "typeName": {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Model",
                  "optional": false,
                  "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 127,
        "decorators": [],
        "name": "AutoModel",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
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
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 144,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "ModelAttributes",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 167,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 169,
      "end": 308,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 186,
        "decorators": [],
        "name": "PersonModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 195,
        "end": 204,
        "decorators": [],
        "name": "AutoModel",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "PersonModel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 308,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 224,
            "end": 243,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 306,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 255,
              "decorators": [],
              "name": "toJson",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 306,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 306,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 268,
                    "end": 300,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 272,
                        "end": 299,
                        "id": {
                          "type": "Identifier",
                          "start": 272,
                          "end": 285,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                          }
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
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
