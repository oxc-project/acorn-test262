__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 582,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 82,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 24,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 49,
          "decorators": [],
          "name": "TypegenDisabled",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 50,
          "end": 82,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 80,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 54,
                "end": 72,
                "value": "@@xstate/typegen",
                "raw": "\"@@xstate/typegen\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 74,
                  "end": 79,
                  "literal": {
                    "type": "Literal",
                    "start": 74,
                    "end": 79,
                    "value": false,
                    "raw": "false"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 146,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 90,
        "end": 146,
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 114,
          "decorators": [],
          "name": "TypegenEnabled",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 146,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 119,
              "end": 144,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 119,
                "end": 137,
                "value": "@@xstate/typegen",
                "raw": "\"@@xstate/typegen\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 137,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 139,
                  "end": 143,
                  "literal": {
                    "type": "Literal",
                    "start": 139,
                    "end": 143,
                    "value": true,
                    "raw": "true"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 200,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 199,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 183,
              "end": 199,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 185,
                  "end": 197,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 189,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 203,
        "end": 226,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 204,
            "end": 217,
            "decorators": [],
            "name": "event",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 217,
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 219,
          "end": 226,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 222,
            "end": 226
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 259,
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 259,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 332,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 273,
              "decorators": [],
              "name": "TTypesMeta",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 282,
              "end": 314,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 296,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 296,
                    "decorators": [],
                    "name": "TypegenEnabled",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 299,
                  "end": 314,
                  "typeName": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 314,
                    "decorators": [],
                    "name": "TypegenDisabled",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": {
              "type": "TSTypeReference",
              "start": 317,
              "end": 332,
              "typeName": {
                "type": "Identifier",
                "start": 317,
                "end": 332,
                "decorators": [],
                "name": "TypegenDisabled",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 375,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 344,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 346,
              "end": 375,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 352,
                  "end": 371,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 357,
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 358,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 360,
                      "end": 370,
                      "typeName": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 370,
                        "decorators": [],
                        "name": "TTypesMeta",
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
        {
          "type": "Identifier",
          "start": 379,
          "end": 507,
          "decorators": [],
          "name": "implementations",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 394,
            "end": 507,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 396,
              "end": 507,
              "checkType": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 406,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 406,
                  "decorators": [],
                  "name": "TTypesMeta",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 415,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 429,
                  "decorators": [],
                  "name": "TypegenEnabled",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 468,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 450,
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 450,
                  "end": 468,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 451,
                      "end": 467,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 453,
                          "end": 465,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 457,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 459,
                              "end": 465,
                              "literal": {
                                "type": "Literal",
                                "start": 459,
                                "end": 465,
                                "value": "test",
                                "raw": "\"test\""
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 475,
                "end": 507,
                "typeName": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 489,
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 489,
                  "end": 507,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 490,
                      "end": 506,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 492,
                          "end": 504,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 496,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 496,
                            "end": 504,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 498,
                              "end": 504
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 509,
        "end": 515,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 511,
          "end": 515
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 518,
      "end": 582,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 581,
        "callee": {
          "type": "Identifier",
          "start": 518,
          "end": 531,
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 532,
            "end": 534,
            "properties": []
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 536,
            "end": 580,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 537,
                "end": 539,
                "decorators": [],
                "name": "ev",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 544,
              "end": 580,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 548,
                  "end": 556,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 548,
                    "end": 555,
                    "object": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 550,
                      "decorators": [],
                      "name": "ev",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 555,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
