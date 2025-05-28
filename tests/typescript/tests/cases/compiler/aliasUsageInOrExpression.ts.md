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
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 97,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 106,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
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
          "start": 121,
          "end": 154,
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
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 210,
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
      "type": "VariableDeclaration",
      "start": 214,
      "end": 244,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 243,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 251,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 254,
            "end": 266,
            "left": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 266,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 314,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 298,
            "decorators": [],
            "name": "d2",
            "optional": false,
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
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 301,
            "end": 313,
            "left": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 306,
              "end": 313,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 361,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 345,
            "decorators": [],
            "name": "d2",
            "optional": false,
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
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 348,
            "end": 360,
            "left": {
              "type": "Identifier",
              "start": 348,
              "end": 355,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 398,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 401,
            "end": 454,
            "left": {
              "type": "TSTypeAssertion",
              "start": 401,
              "end": 436,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "expression": {
                "type": "Literal",
                "start": 432,
                "end": 436,
                "value": null,
                "raw": "null"
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 452,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 492,
            "decorators": [],
            "name": "f",
            "optional": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 495,
            "end": 554,
            "test": {
              "type": "TSTypeAssertion",
              "start": 495,
              "end": 530,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "expression": {
                "type": "Literal",
                "start": 526,
                "end": 530,
                "value": null,
                "raw": "null"
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 545,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
