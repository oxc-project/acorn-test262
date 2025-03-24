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
          "value": "./aliasUsageInObjectLiteral_backbone",
          "raw": "\"./aliasUsageInObjectLiteral_backbone\""
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
          "value": "./aliasUsageInObjectLiteral_backbone",
          "raw": "\"./aliasUsageInObjectLiteral_backbone\""
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
          "value": "./aliasUsageInObjectLiteral_moduleA",
          "raw": "\"./aliasUsageInObjectLiteral_moduleA\""
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
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 244,
            "name": "a",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "moduleA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "name": "moduleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 299,
            "name": "b",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 275,
                        "end": 297,
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 297,
                          "name": "IHasVisualizationModel",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 314,
                  "name": "moduleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 361,
            "name": "c",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 332,
                              "end": 333,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 357,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 357,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 357,
                                  "name": "IHasVisualizationModel",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 369,
                  "end": 383,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 371,
                      "end": 381,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 381,
                        "name": "moduleA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
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
