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
          "raw": "\"./aliasUsageInObjectLiteral_backbone\"",
          "value": "./aliasUsageInObjectLiteral_backbone"
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
  "end": 386,
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
          "raw": "\"./aliasUsageInObjectLiteral_backbone\"",
          "value": "./aliasUsageInObjectLiteral_backbone"
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
          "raw": "\"./aliasUsageInObjectLiteral_moduleA\"",
          "value": "./aliasUsageInObjectLiteral_moduleA"
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
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 244,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 223,
                "end": 244,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 225,
                    "end": 242,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 242,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 228,
                        "end": 242,
                        "exprName": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 242,
                          "decorators": [],
                          "name": "moduleA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 247,
            "end": 261,
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 259,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 299,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 270,
                "end": 299,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 272,
                    "end": 297,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 275,
                        "end": 297,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 297,
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
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 302,
            "end": 316,
            "properties": [
              {
                "type": "Property",
                "start": 304,
                "end": 314,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 314,
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 361,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 325,
                "end": 361,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 327,
                    "end": 359,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 359,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 330,
                        "end": 359,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 332,
                            "end": 357,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 332,
                              "end": 333,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 357,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 357,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 357,
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
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 364,
            "end": 385,
            "properties": [
              {
                "type": "Property",
                "start": 366,
                "end": 383,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 369,
                  "end": 383,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 371,
                      "end": 381,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 381,
                        "decorators": [],
                        "name": "moduleA",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ]
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
