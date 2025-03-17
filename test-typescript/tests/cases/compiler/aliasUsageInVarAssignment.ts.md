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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Model",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "name": "someData",
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
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                }
              },
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 156,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 64,
          "value": "./aliasUsageInVarAssignment_backbone",
          "raw": "\"./aliasUsageInVarAssignment_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 155,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 74,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 98,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 107,
          "end": 121,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 115,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 122,
          "end": 155,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 273,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 64,
          "value": "./aliasUsageInVarAssignment_backbone",
          "raw": "\"./aliasUsageInVarAssignment_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 81,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 84,
        "end": 130,
        "expression": {
          "type": "Literal",
          "start": 92,
          "end": 129,
          "value": "./aliasUsageInVarAssignment_moduleA",
          "raw": "\"./aliasUsageInVarAssignment_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 164,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 215,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 213,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 189,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 191,
                "end": 212,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 198,
                  "end": 212,
                  "left": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 206,
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 212,
                    "name": "Model",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "type": "VariableDeclaration",
      "start": 216,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 245,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 245,
                  "name": "IHasVisualizationModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 268,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 254,
                "end": 268,
                "exprName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 268,
                  "name": "moduleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
