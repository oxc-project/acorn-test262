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
  "end": 155,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 65,
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
        "end": 64,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 63,
          "value": "./aliasUsageInOrExpression_backbone",
          "raw": "\"./aliasUsageInOrExpression_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 154,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 73,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 97,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 106,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
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
          "start": 121,
          "end": 154,
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
  "end": 555,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 65,
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
        "end": 64,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 63,
          "value": "./aliasUsageInOrExpression_backbone",
          "raw": "\"./aliasUsageInOrExpression_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 66,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 80,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 83,
        "end": 128,
        "expression": {
          "type": "Literal",
          "start": 91,
          "end": 127,
          "value": "./aliasUsageInOrExpression_moduleA",
          "raw": "\"./aliasUsageInOrExpression_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 162,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 213,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 187,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 189,
                "end": 210,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 196,
                  "end": 210,
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 204,
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 210,
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
      "start": 214,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 243,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 243,
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
      "start": 245,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 251,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 254,
            "end": 266,
            "left": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 266,
              "name": "moduleA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 298,
            "name": "d2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 298,
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
          "init": {
            "type": "LogicalExpression",
            "start": 301,
            "end": 313,
            "left": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 306,
              "end": 313,
              "name": "moduleA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 345,
            "name": "d2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 323,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 345,
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
          "init": {
            "type": "LogicalExpression",
            "start": 348,
            "end": 360,
            "left": {
              "type": "Identifier",
              "start": 348,
              "end": 355,
              "name": "moduleA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 398,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 369,
                "end": 398,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 371,
                    "end": 396,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 396,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 374,
                        "end": 396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 396,
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
            "type": "LogicalExpression",
            "start": 401,
            "end": 454,
            "left": {
              "type": "TSTypeAssertion",
              "start": 401,
              "end": 436,
              "expression": {
                "type": "Literal",
                "start": 432,
                "end": 436,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 402,
                "end": 431,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 404,
                    "end": 429,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 407,
                        "end": 429,
                        "typeName": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 429,
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
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 440,
              "end": 454,
              "properties": [
                {
                  "type": "Property",
                  "start": 442,
                  "end": 452,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 452,
                    "name": "moduleA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 492,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 461,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 463,
                "end": 492,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 465,
                    "end": 490,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 466,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 468,
                        "end": 490,
                        "typeName": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 490,
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
            "type": "ConditionalExpression",
            "start": 495,
            "end": 554,
            "test": {
              "type": "TSTypeAssertion",
              "start": 495,
              "end": 530,
              "expression": {
                "type": "Literal",
                "start": 526,
                "end": 530,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 496,
                "end": 525,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 498,
                    "end": 523,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 499,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 501,
                        "end": 523,
                        "typeName": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 523,
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
            "consequent": {
              "type": "ObjectExpression",
              "start": 533,
              "end": 547,
              "properties": [
                {
                  "type": "Property",
                  "start": 535,
                  "end": 545,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 545,
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
            "alternate": {
              "type": "Literal",
              "start": 550,
              "end": 554,
              "value": null,
              "raw": "null"
            }
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
