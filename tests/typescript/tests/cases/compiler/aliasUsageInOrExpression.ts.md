__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 40
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 25,
              "end": 49
            }
          ],
          "start": 19,
          "end": 51
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInOrExpression_backbone",
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "start": 26,
          "end": 63
        },
        "start": 18,
        "end": 64
      },
      "importKind": "value",
      "start": 0,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 97
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 106,
          "end": 120
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 121,
          "end": 154
        },
        "abstract": false,
        "declare": false,
        "start": 73,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInOrExpression_backbone",
          "raw": "\"./aliasUsageInOrExpression_backbone\"",
          "start": 26,
          "end": 63
        },
        "start": 18,
        "end": 64
      },
      "importKind": "value",
      "start": 0,
      "end": 65
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 80
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./aliasUsageInOrExpression_moduleA",
          "raw": "\"./aliasUsageInOrExpression_moduleA\"",
          "start": 91,
          "end": 127
        },
        "start": 83,
        "end": 128
      },
      "importKind": "value",
      "start": 66,
      "end": 129
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 162
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 187
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 204
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 210
                  },
                  "start": 196,
                  "end": 210
                },
                "typeArguments": null,
                "start": 189,
                "end": 210
              },
              "start": 187,
              "end": 210
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 211
          }
        ],
        "start": 163,
        "end": 213
      },
      "declare": false,
      "start": 130,
      "end": 213
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 243
                },
                "typeArguments": null,
                "start": 221,
                "end": 243
              },
              "start": 219,
              "end": 243
            },
            "start": 218,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 243
        }
      ],
      "declare": false,
      "start": 214,
      "end": 244
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 251
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 266
            },
            "start": 254,
            "end": 266
          },
          "definite": false,
          "start": 249,
          "end": 266
        }
      ],
      "declare": false,
      "start": 245,
      "end": 267
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 298
                },
                "typeArguments": null,
                "start": 276,
                "end": 298
              },
              "start": 274,
              "end": 298
            },
            "start": 272,
            "end": 298
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 302
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 313
            },
            "start": 301,
            "end": 313
          },
          "definite": false,
          "start": 272,
          "end": 313
        }
      ],
      "declare": false,
      "start": 268,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 345
                },
                "typeArguments": null,
                "start": 323,
                "end": 345
              },
              "start": 321,
              "end": 345
            },
            "start": 319,
            "end": 345
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleA",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 355
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 360
            },
            "start": 348,
            "end": 360
          },
          "definite": false,
          "start": 319,
          "end": 360
        }
      ],
      "declare": false,
      "start": 315,
      "end": 361
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 374,
                          "end": 396
                        },
                        "typeArguments": null,
                        "start": 374,
                        "end": 396
                      },
                      "start": 372,
                      "end": 396
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 371,
                    "end": 396
                  }
                ],
                "start": 369,
                "end": 398
              },
              "start": 367,
              "end": 398
            },
            "start": 366,
            "end": 398
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 429
                        },
                        "typeArguments": null,
                        "start": 407,
                        "end": 429
                      },
                      "start": 405,
                      "end": 429
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 404,
                    "end": 429
                  }
                ],
                "start": 402,
                "end": 431
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 432,
                "end": 436
              },
              "start": 401,
              "end": 436
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 452
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 442,
                  "end": 452
                }
              ],
              "start": 440,
              "end": 454
            },
            "start": 401,
            "end": 454
          },
          "definite": false,
          "start": 366,
          "end": 454
        }
      ],
      "declare": false,
      "start": 362,
      "end": 455
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 466
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 490
                        },
                        "typeArguments": null,
                        "start": 468,
                        "end": 490
                      },
                      "start": 466,
                      "end": 490
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 465,
                    "end": 490
                  }
                ],
                "start": 463,
                "end": 492
              },
              "start": 461,
              "end": 492
            },
            "start": 460,
            "end": 492
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 523
                        },
                        "typeArguments": null,
                        "start": 501,
                        "end": 523
                      },
                      "start": 499,
                      "end": 523
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 498,
                    "end": 523
                  }
                ],
                "start": 496,
                "end": 525
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 526,
                "end": 530
              },
              "start": 495,
              "end": 530
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 545
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 535,
                  "end": 545
                }
              ],
              "start": 533,
              "end": 547
            },
            "alternate": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 550,
              "end": 554
            },
            "start": 495,
            "end": 554
          },
          "definite": false,
          "start": 460,
          "end": 554
        }
      ],
      "declare": false,
      "start": 456,
      "end": 555
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 555
}
```
