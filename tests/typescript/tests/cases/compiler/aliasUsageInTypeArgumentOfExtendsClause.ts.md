__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 78,
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 169,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 88,
        "end": 169,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 112,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 121,
          "end": 135,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 129,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 136,
          "end": 169,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 78,
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 81,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 98,
        "end": 158,
        "expression": {
          "type": "Literal",
          "start": 106,
          "end": 157,
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_moduleA",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 160,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 192,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 193,
        "end": 243,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 241,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 217,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 240,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 219,
                "end": 240,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 226,
                  "end": 240,
                  "left": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 234,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 240,
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 244,
      "end": 299,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 251,
        "end": 285,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 284,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 284,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 284,
                "decorators": [],
                "name": "IHasVisualizationModel",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
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
        "start": 286,
        "end": 299,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 292,
            "end": 297,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 295,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "T",
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 300,
      "end": 362,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 307,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 316,
        "end": 317,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 317,
        "end": 341,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 318,
            "end": 340,
            "typeName": {
              "type": "Identifier",
              "start": 318,
              "end": 340,
              "decorators": [],
              "name": "IHasVisualizationModel",
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
        "start": 342,
        "end": 362,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 348,
            "end": 360,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 352,
              "end": 359,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
