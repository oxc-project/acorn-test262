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
  "end": 142,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 52,
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
        "end": 51,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 50,
          "raw": "\"./aliasUsage1_backbone\"",
          "value": "./aliasUsage1_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 60,
        "end": 141,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 108,
          "end": 141,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 84,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 93,
          "end": 107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 93,
            "end": 101,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 102,
            "end": 107,
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
  "end": 316,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 52,
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
        "end": 51,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 50,
          "raw": "\"./aliasUsage1_backbone\"",
          "value": "./aliasUsage1_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 53,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 70,
        "end": 102,
        "expression": {
          "type": "Literal",
          "start": 78,
          "end": 101,
          "raw": "\"./aliasUsage1_moduleA\"",
          "value": "./aliasUsage1_moduleA",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 187,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 143,
            "end": 185,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 161,
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
              "start": 161,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 163,
                "end": 184,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 170,
                  "end": 184,
                  "left": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 178,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 184,
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
        "start": 114,
        "end": 136,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 316,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 316,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 229,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 228,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 228,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 272,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 272,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 272,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 252,
                    "end": 266,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 259,
                      "end": 265,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 259,
                        "end": 263
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 314,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 314,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 314,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 308,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 307,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 307,
                        "decorators": [],
                        "name": "moduleA",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 196,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
