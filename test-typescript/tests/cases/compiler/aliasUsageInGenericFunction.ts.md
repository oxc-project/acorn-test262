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
  "end": 158,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 68,
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
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 66,
          "raw": "\"./aliasUsageInGenericFunction_backbone\"",
          "value": "./aliasUsageInGenericFunction_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 76,
        "end": 157,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 157,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 100,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 109,
          "end": 123,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 117,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
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
  "end": 377,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 68,
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
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 66,
          "raw": "\"./aliasUsageInGenericFunction_backbone\"",
          "value": "./aliasUsageInGenericFunction_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 69,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 83,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 86,
        "end": 134,
        "expression": {
          "type": "Literal",
          "start": 94,
          "end": 133,
          "raw": "\"./aliasUsageInGenericFunction_moduleA\"",
          "value": "./aliasUsageInGenericFunction_moduleA",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 219,
      "body": {
        "type": "TSInterfaceBody",
        "start": 169,
        "end": 219,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 175,
            "end": 217,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 193,
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
              "start": 193,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 195,
                "end": 216,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 202,
                  "end": 216,
                  "left": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 210,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 216,
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
        "start": 146,
        "end": 168,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 297,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 297,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 286,
            "end": 295,
            "argument": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 232,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 274,
          "end": 278,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 278,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 277,
              "end": 278,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 272,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 243,
              "end": 272,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 245,
                  "end": 270,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 270,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 270,
                        "decorators": [],
                        "name": "IHasVisualizationModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 325,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 310,
                "end": 324,
                "properties": [
                  {
                    "type": "Property",
                    "start": 312,
                    "end": 322,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 322,
                      "decorators": [],
                      "name": "moduleA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 306,
              "end": 309,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 336,
            "end": 376,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 340,
                "end": 375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 342,
                    "end": 373,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSTypeAssertion",
                      "start": 345,
                      "end": 373,
                      "expression": {
                        "type": "Literal",
                        "start": 369,
                        "end": 373,
                        "raw": "null",
                        "value": null,
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 368,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 368,
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
