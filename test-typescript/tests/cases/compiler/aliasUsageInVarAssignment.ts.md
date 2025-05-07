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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 64,
          "raw": "\"./aliasUsageInVarAssignment_backbone\"",
          "value": "./aliasUsageInVarAssignment_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 74,
        "end": 155,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 122,
          "end": 155,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 98,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 107,
          "end": 121,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 115,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 64,
          "raw": "\"./aliasUsageInVarAssignment_backbone\"",
          "value": "./aliasUsageInVarAssignment_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 81,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 84,
        "end": 130,
        "expression": {
          "type": "Literal",
          "start": 92,
          "end": 129,
          "raw": "\"./aliasUsageInVarAssignment_moduleA\"",
          "value": "./aliasUsageInVarAssignment_moduleA",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 215,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 215,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 213,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 189,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 212,
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 164,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 245,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 245,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 245,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 268,
            "decorators": [],
            "name": "m",
            "optional": false,
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
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
