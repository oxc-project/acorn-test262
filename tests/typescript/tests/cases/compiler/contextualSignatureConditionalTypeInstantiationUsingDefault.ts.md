__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypegenDisabled",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 49
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
                "type": "Literal",
                "value": "@@xstate/typegen",
                "raw": "\"@@xstate/typegen\"",
                "start": 54,
                "end": 72
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 74,
                    "end": 79
                  },
                  "start": 74,
                  "end": 79
                },
                "start": 72,
                "end": 79
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 80
            }
          ],
          "start": 50,
          "end": 82
        },
        "declare": false,
        "start": 24,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 17,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypegenEnabled",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 114
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
                "type": "Literal",
                "value": "@@xstate/typegen",
                "raw": "\"@@xstate/typegen\"",
                "start": 119,
                "end": 137
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 139,
                    "end": 143
                  },
                  "start": 139,
                  "end": 143
                },
                "start": 137,
                "end": 143
              },
              "accessibility": null,
              "static": false,
              "start": 119,
              "end": 144
            }
          ],
          "start": 115,
          "end": 146
        },
        "declare": false,
        "start": 90,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 83,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 167
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 174
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 189
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    },
                    "start": 189,
                    "end": 197
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 185,
                  "end": 197
                }
              ],
              "start": 183,
              "end": 199
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 199
          }
        ],
        "start": 167,
        "end": 200
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "event",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 217
                },
                "typeArguments": null,
                "start": 211,
                "end": 217
              },
              "start": 209,
              "end": 217
            },
            "start": 204,
            "end": 217
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 222,
            "end": 226
          },
          "start": 219,
          "end": 226
        },
        "start": 203,
        "end": 226
      },
      "declare": false,
      "start": 148,
      "end": 227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 259
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTypesMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 273
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypegenEnabled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 296
                  },
                  "typeArguments": null,
                  "start": 282,
                  "end": 296
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypegenDisabled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 314
                  },
                  "typeArguments": null,
                  "start": 299,
                  "end": 314
                }
              ],
              "start": 282,
              "end": 314
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypegenDisabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 332
              },
              "typeArguments": null,
              "start": 317,
              "end": 332
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 332
          }
        ],
        "start": 259,
        "end": 334
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 357
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TTypesMeta",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 360,
                      "end": 370
                    },
                    "start": 358,
                    "end": 370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 352,
                  "end": 371
                }
              ],
              "start": 346,
              "end": 375
            },
            "start": 344,
            "end": 375
          },
          "start": 338,
          "end": 375
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TTypesMeta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 406
                },
                "typeArguments": null,
                "start": 396,
                "end": 406
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypegenEnabled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 429
                },
                "typeArguments": null,
                "start": 415,
                "end": 429
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 450
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 453,
                            "end": 457
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "test",
                                "raw": "\"test\"",
                                "start": 459,
                                "end": 465
                              },
                              "start": 459,
                              "end": 465
                            },
                            "start": 457,
                            "end": 465
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 453,
                          "end": 465
                        }
                      ],
                      "start": 451,
                      "end": 467
                    }
                  ],
                  "start": 450,
                  "end": 468
                },
                "start": 436,
                "end": 468
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 489
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 496
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 498,
                              "end": 504
                            },
                            "start": 496,
                            "end": 504
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 492,
                          "end": 504
                        }
                      ],
                      "start": 490,
                      "end": 506
                    }
                  ],
                  "start": 489,
                  "end": 507
                },
                "start": 475,
                "end": 507
              },
              "start": 396,
              "end": 507
            },
            "start": 394,
            "end": 507
          },
          "start": 379,
          "end": 507
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 511,
          "end": 515
        },
        "start": 509,
        "end": 515
      },
      "body": null,
      "expression": false,
      "start": 229,
      "end": 516
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 531
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 532,
            "end": 534
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ev",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 539
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 550
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 555
                    },
                    "optional": false,
                    "computed": false,
                    "start": 548,
                    "end": 555
                  },
                  "directive": null,
                  "start": 548,
                  "end": 556
                }
              ],
              "start": 544,
              "end": 580
            },
            "id": null,
            "generator": false,
            "start": 536,
            "end": 580
          }
        ],
        "optional": false,
        "start": 518,
        "end": 581
      },
      "directive": null,
      "start": 518,
      "end": 582
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 17,
  "end": 582
}
```
