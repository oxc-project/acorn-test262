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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 24,
        "end": 82,
        "body": {
          "type": "TSInterfaceBody",
          "start": 50,
          "end": 82,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 80,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 54,
                "end": 72,
                "raw": "\"@@xstate/typegen\"",
                "value": "@@xstate/typegen",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "false",
                    "value": false,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 49,
          "decorators": [],
          "name": "TypegenDisabled",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 90,
        "end": 146,
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 146,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 119,
              "end": 144,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 119,
                "end": 137,
                "raw": "\"@@xstate/typegen\"",
                "value": "@@xstate/typegen",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 114,
          "decorators": [],
          "name": "TypegenEnabled",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 227,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 203,
        "end": 226,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 217,
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        },
        "typeParameters": null
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
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 183,
              "end": 199,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 185,
                  "end": 197,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 189,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 516,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 259,
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 357,
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 358,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 360,
                      "end": 370,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 370,
                        "decorators": [],
                        "name": "TTypesMeta",
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 406,
                  "decorators": [],
                  "name": "TTypesMeta",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 415,
                "end": 429,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 429,
                  "decorators": [],
                  "name": "TypegenEnabled",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 475,
                "end": 507,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 496,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 496,
                            "end": 504,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 498,
                              "end": 504
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 489,
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 468,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "raw": "\"test\"",
                                "value": "test",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 450,
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 259,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 332,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 282,
              "end": 314,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 296,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 296,
                    "decorators": [],
                    "name": "TypegenEnabled",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 299,
                  "end": 314,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 314,
                    "decorators": [],
                    "name": "TypegenDisabled",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": {
              "type": "TSTypeReference",
              "start": 317,
              "end": 332,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 317,
                "end": 332,
                "decorators": [],
                "name": "TypegenDisabled",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 273,
              "decorators": [],
              "name": "TTypesMeta",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 518,
      "end": 582,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 581,
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
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 544,
              "end": 580,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 548,
                  "end": 556,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 548,
                    "end": 555,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 550,
                      "decorators": [],
                      "name": "ev",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 555,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 518,
          "end": 531,
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
