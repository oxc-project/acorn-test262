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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 64,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 63,
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "value": "./aliasUsageInOrExpression_backbone",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 154,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 73,
        "end": 154,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 121,
          "end": 154,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 106,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 64,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 63,
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "value": "./aliasUsageInOrExpression_backbone",
          "regex": null,
          "bigint": null
        }
      }
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 83,
        "end": 128,
        "expression": {
          "type": "Literal",
          "start": 91,
          "end": 127,
          "raw": "\"./aliasUsageInOrExpression_moduleA\"",
          "value": "./aliasUsageInOrExpression_moduleA",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 213,
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 213,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 211,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 187,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 162,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 243,
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
      "start": 245,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 266,
          "definite": false,
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
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 266,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 298,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 301,
            "end": 313,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 306,
              "end": 313,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 345,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 348,
            "end": 360,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 348,
              "end": 355,
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
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
                      "start": 372,
                      "end": 396,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 374,
                        "end": 396,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 396,
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
            "type": "LogicalExpression",
            "start": 401,
            "end": 454,
            "operator": "||",
            "left": {
              "type": "TSTypeAssertion",
              "start": 401,
              "end": 436,
              "expression": {
                "type": "Literal",
                "start": 432,
                "end": 436,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
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
                      "start": 405,
                      "end": 429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 407,
                        "end": 429,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 429,
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
            },
            "right": {
              "type": "ObjectExpression",
              "start": 440,
              "end": 454,
              "properties": [
                {
                  "type": "Property",
                  "start": 442,
                  "end": 452,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
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
                    "start": 445,
                    "end": 452,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
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
                      "start": 466,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 468,
                        "end": 490,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 490,
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
            "type": "ConditionalExpression",
            "start": 495,
            "end": 554,
            "alternate": {
              "type": "Literal",
              "start": 550,
              "end": 554,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
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
                    "start": 538,
                    "end": 545,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "TSTypeAssertion",
              "start": 495,
              "end": 530,
              "expression": {
                "type": "Literal",
                "start": 526,
                "end": 530,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
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
                      "start": 499,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 501,
                        "end": 523,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 523,
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
