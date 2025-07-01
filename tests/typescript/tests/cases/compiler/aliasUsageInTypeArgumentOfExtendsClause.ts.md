__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 40
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 25,
              "end": 49
            }
          ],
          "start": 19,
          "end": 51
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\"",
          "start": 26,
          "end": 78
        },
        "start": 18,
        "end": 79
      },
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 112
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 121,
          "end": 135
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 136,
          "end": 169
        },
        "abstract": false,
        "declare": false,
        "start": 88,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\"",
          "start": 26,
          "end": 78
        },
        "start": 18,
        "end": 79
      },
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 95
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_moduleA",
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_moduleA\"",
          "start": 106,
          "end": 157
        },
        "start": 98,
        "end": 158
      },
      "importKind": "value",
      "start": 81,
      "end": 159
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 192
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 234
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 240
                  },
                  "start": 226,
                  "end": 240
                },
                "typeArguments": null,
                "start": 219,
                "end": 240
              },
              "start": 217,
              "end": 240
            },
            "accessibility": null,
            "static": false,
            "start": 199,
            "end": 241
          }
        ],
        "start": 193,
        "end": 243
      },
      "declare": false,
      "start": 160,
      "end": 243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
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
              "start": 252,
              "end": 253
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IHasVisualizationModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 284
              },
              "typeArguments": null,
              "start": 262,
              "end": 284
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 252,
            "end": 284
          }
        ],
        "start": 251,
        "end": 285
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "typeArguments": null,
                "start": 295,
                "end": 296
              },
              "start": 293,
              "end": 296
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 292,
            "end": 297
          }
        ],
        "start": 286,
        "end": 299
      },
      "abstract": false,
      "declare": false,
      "start": 244,
      "end": 299
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 307
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 317
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHasVisualizationModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 340
            },
            "typeArguments": null,
            "start": 318,
            "end": 340
          }
        ],
        "start": 317,
        "end": 341
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 359
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 348,
            "end": 360
          }
        ],
        "start": 342,
        "end": 362
      },
      "abstract": false,
      "declare": false,
      "start": 300,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 362
}
```
