__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 583,
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
          "name": "TypegenDisabled",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "TypegenEnabled",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "name": "ActionFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TEvent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "name": "event",
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
                  "name": "TEvent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
        "name": "createMachine",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 375,
          "name": "config",
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
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "TTypesMeta",
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
        {
          "type": "Identifier",
          "start": 379,
          "end": 507,
          "name": "implementations",
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
                  "name": "TTypesMeta",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "TypegenEnabled",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "ActionFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "name": "ActionFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "TTypesMeta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "TypegenEnabled",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "TypegenDisabled",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "TypegenDisabled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 509,
        "end": 515,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 511,
          "end": 515
        }
      }
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
          "name": "createMachine",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 537,
                "end": 539,
                "name": "ev",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "ev",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 555,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
