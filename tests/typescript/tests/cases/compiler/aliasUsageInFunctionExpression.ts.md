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
  "end": 161,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 71,
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
        "end": 70,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 69,
          "raw": "\"./aliasUsageInFunctionExpression_backbone\"",
          "value": "./aliasUsageInFunctionExpression_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 79,
        "end": 160,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 127,
          "end": 160,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 103,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 112,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 120,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 126,
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
  "end": 287,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 71,
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
        "end": 70,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 69,
          "raw": "\"./aliasUsageInFunctionExpression_backbone\"",
          "value": "./aliasUsageInFunctionExpression_backbone"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 72,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 86,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 89,
        "end": 140,
        "expression": {
          "type": "Literal",
          "start": 97,
          "end": 139,
          "raw": "\"./aliasUsageInFunctionExpression_moduleA\"",
          "value": "./aliasUsageInFunctionExpression_moduleA"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 225,
      "body": {
        "type": "TSInterfaceBody",
        "start": 175,
        "end": 225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 199,
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
              "start": 199,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 201,
                "end": 222,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 208,
                  "end": 222,
                  "left": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 216,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 222,
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
        "start": 152,
        "end": 174,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 234,
            "end": 266,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 260,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 260,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 260,
                      "decorators": [],
                      "name": "IHasVisualizationModel",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 287,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 286,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 272,
          "end": 286,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 279,
            "end": 286,
            "decorators": [],
            "name": "moduleA",
            "optional": false,
            "typeAnnotation": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
