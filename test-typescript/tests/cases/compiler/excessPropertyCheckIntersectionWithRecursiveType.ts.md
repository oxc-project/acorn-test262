__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 2150,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "Request",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 37,
        "end": 60,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "name": "l1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 43,
                "end": 58,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 45,
                    "end": 56,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 47,
                      "name": "l2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 49,
                        "end": 56
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
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "name": "Example",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 76,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 80,
        "end": 97,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 95,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 84,
              "name": "ex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 87,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 91,
                    "end": 95
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 100,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 112,
        "name": "Schema1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 118,
        "end": 221,
        "types": [
          {
            "type": "TSConditionalType",
            "start": 119,
            "end": 207,
            "checkType": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 129,
              "end": 136
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 139,
              "end": 159,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 141,
                  "end": 157,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 145,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 147,
                      "end": 156,
                      "literal": {
                        "type": "Literal",
                        "start": 147,
                        "end": 156,
                        "value": "boolean",
                        "raw": "'boolean'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "start": 162,
              "end": 207,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 164,
                  "end": 205,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 171,
                      "end": 204,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 174,
                        "end": 186,
                        "name": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 175,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 179,
                          "end": 186,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 185,
                            "end": 186,
                            "typeName": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 186,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 189,
                        "end": 202,
                        "typeName": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 196,
                          "name": "Schema1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 196,
                          "end": 202,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 197,
                              "end": 201,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 197,
                                "end": 198,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 197,
                                  "end": 198,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 199,
                                "end": 200,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 199,
                                  "end": 200,
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 179,
                        "end": 186,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 185,
                          "end": 186,
                          "typeName": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 175,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 211,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 211,
              "end": 218,
              "name": "Example",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 218,
              "end": 221,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 224,
      "end": 385,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 231,
        "end": 385,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 385,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 265,
              "name": "schemaObj1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
                    "name": "Schema1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 256,
                    "end": 265,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 257,
                        "end": 264,
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 264,
                          "name": "Request",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 268,
              "end": 385,
              "properties": [
                {
                  "type": "Property",
                  "start": 272,
                  "end": 382,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 277,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 279,
                    "end": 382,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 285,
                        "end": 377,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 287,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 289,
                          "end": 377,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 297,
                              "end": 370,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 302,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "start": 304,
                                "end": 370,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 314,
                                    "end": 337,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 314,
                                      "end": 316,
                                      "name": "l2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "start": 318,
                                      "end": 337,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 320,
                                          "end": 335,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 320,
                                            "end": 324,
                                            "name": "type",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 326,
                                            "end": 335,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 347,
                                    "end": 361,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 347,
                                      "end": 354,
                                      "name": "invalid",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 356,
                                      "end": 361,
                                      "value": false,
                                      "raw": "false"
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 387,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 399,
        "name": "Schema2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 406,
        "end": 520,
        "checkType": {
          "type": "TSTypeReference",
          "start": 406,
          "end": 407,
          "typeName": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 416,
          "end": 423
        },
        "trueType": {
          "type": "TSIntersectionType",
          "start": 426,
          "end": 459,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 426,
              "end": 446,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 428,
                  "end": 444,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 432,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 434,
                      "end": 443,
                      "literal": {
                        "type": "Literal",
                        "start": 434,
                        "end": 443,
                        "value": "boolean",
                        "raw": "'boolean'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 449,
              "end": 459,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 456,
                "name": "Example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 456,
                "end": 459,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 457,
                    "end": 458,
                    "typeName": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 458,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 462,
          "end": 520,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 462,
              "end": 507,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 464,
                  "end": 505,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 469,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 471,
                      "end": 504,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 474,
                        "end": 486,
                        "name": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 475,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 479,
                          "end": 486,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 485,
                            "end": 486,
                            "typeName": {
                              "type": "Identifier",
                              "start": 485,
                              "end": 486,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 489,
                        "end": 502,
                        "typeName": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 496,
                          "name": "Schema2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 496,
                          "end": 502,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 497,
                              "end": 501,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 497,
                                "end": 498,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 497,
                                  "end": 498,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 499,
                                "end": 500,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 479,
                        "end": 486,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 485,
                          "end": 486,
                          "typeName": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 486,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 475,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 510,
              "end": 520,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 517,
                "name": "Example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 517,
                "end": 520,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 519,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 519,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 524,
      "end": 685,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 531,
        "end": 685,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 537,
            "end": 685,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 565,
              "name": "schemaObj2",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 547,
                "end": 565,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 549,
                  "end": 565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 556,
                    "name": "Schema2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 556,
                    "end": 565,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 557,
                        "end": 564,
                        "typeName": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 564,
                          "name": "Request",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 568,
              "end": 685,
              "properties": [
                {
                  "type": "Property",
                  "start": 572,
                  "end": 682,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 577,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 579,
                    "end": 682,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 585,
                        "end": 677,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 587,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 589,
                          "end": 677,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 597,
                              "end": 670,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 597,
                                "end": 602,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "start": 604,
                                "end": 670,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 614,
                                    "end": 637,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 614,
                                      "end": 616,
                                      "name": "l2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "start": 618,
                                      "end": 637,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 620,
                                          "end": 635,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 620,
                                            "end": 624,
                                            "name": "type",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 626,
                                            "end": 635,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 647,
                                    "end": 661,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 647,
                                      "end": 654,
                                      "name": "invalid",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 656,
                                      "end": 661,
                                      "value": false,
                                      "raw": "false"
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 687,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 699,
        "name": "Schema3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 699,
        "end": 702,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 700,
            "end": 701,
            "name": {
              "type": "Identifier",
              "start": 700,
              "end": 701,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 705,
        "end": 808,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 705,
            "end": 715,
            "typeName": {
              "type": "Identifier",
              "start": 705,
              "end": 712,
              "name": "Example",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 712,
              "end": 715,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 713,
                  "end": 714,
                  "typeName": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSConditionalType",
            "start": 719,
            "end": 807,
            "checkType": {
              "type": "TSTypeReference",
              "start": 719,
              "end": 720,
              "typeName": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 729,
              "end": 736
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 739,
              "end": 759,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 741,
                  "end": 757,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 741,
                    "end": 745,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 745,
                    "end": 756,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 747,
                      "end": 756,
                      "literal": {
                        "type": "Literal",
                        "start": 747,
                        "end": 756,
                        "value": "boolean",
                        "raw": "'boolean'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "start": 762,
              "end": 807,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 764,
                  "end": 805,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 769,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 769,
                    "end": 804,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 771,
                      "end": 804,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 774,
                        "end": 786,
                        "name": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 775,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 779,
                          "end": 786,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 785,
                            "end": 786,
                            "typeName": {
                              "type": "Identifier",
                              "start": 785,
                              "end": 786,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 789,
                        "end": 802,
                        "typeName": {
                          "type": "Identifier",
                          "start": 789,
                          "end": 796,
                          "name": "Schema3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 796,
                          "end": 802,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 797,
                              "end": 801,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 797,
                                "end": 798,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 797,
                                  "end": 798,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 799,
                                "end": 800,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 799,
                                  "end": 800,
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 779,
                        "end": 786,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 785,
                          "end": 786,
                          "typeName": {
                            "type": "Identifier",
                            "start": 785,
                            "end": 786,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 811,
      "end": 972,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 818,
        "end": 972,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 824,
            "end": 972,
            "id": {
              "type": "Identifier",
              "start": 824,
              "end": 852,
              "name": "schemaObj3",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 834,
                "end": 852,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 836,
                  "end": 852,
                  "typeName": {
                    "type": "Identifier",
                    "start": 836,
                    "end": 843,
                    "name": "Schema3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 843,
                    "end": 852,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 844,
                        "end": 851,
                        "typeName": {
                          "type": "Identifier",
                          "start": 844,
                          "end": 851,
                          "name": "Request",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 855,
              "end": 972,
              "properties": [
                {
                  "type": "Property",
                  "start": 859,
                  "end": 969,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 864,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 866,
                    "end": 969,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 872,
                        "end": 964,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 872,
                          "end": 874,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 876,
                          "end": 964,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 884,
                              "end": 957,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 884,
                                "end": 889,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "start": 891,
                                "end": 957,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 901,
                                    "end": 924,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 901,
                                      "end": 903,
                                      "name": "l2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "start": 905,
                                      "end": 924,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 907,
                                          "end": 922,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 907,
                                            "end": 911,
                                            "name": "type",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 913,
                                            "end": 922,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 934,
                                    "end": 948,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 934,
                                      "end": 941,
                                      "name": "invalid",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 943,
                                      "end": 948,
                                      "value": false,
                                      "raw": "false"
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 974,
      "end": 1109,
      "id": {
        "type": "Identifier",
        "start": 979,
        "end": 986,
        "name": "Schema4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 986,
        "end": 989,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 987,
            "end": 988,
            "name": {
              "type": "Identifier",
              "start": 987,
              "end": 988,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 993,
        "end": 1107,
        "checkType": {
          "type": "TSTypeReference",
          "start": 993,
          "end": 994,
          "typeName": {
            "type": "Identifier",
            "start": 993,
            "end": 994,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 1003,
          "end": 1010
        },
        "trueType": {
          "type": "TSIntersectionType",
          "start": 1013,
          "end": 1046,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 1013,
              "end": 1033,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1015,
                  "end": 1031,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1015,
                    "end": 1019,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1030,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1021,
                      "end": 1030,
                      "literal": {
                        "type": "Literal",
                        "start": 1021,
                        "end": 1030,
                        "value": "boolean",
                        "raw": "'boolean'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 1036,
              "end": 1046,
              "typeName": {
                "type": "Identifier",
                "start": 1036,
                "end": 1043,
                "name": "Example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1043,
                "end": 1046,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1044,
                    "end": 1045,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1044,
                      "end": 1045,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 1049,
          "end": 1107,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1051,
              "end": 1105,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1051,
                "end": 1056,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1056,
                "end": 1104,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 1058,
                  "end": 1104,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1058,
                      "end": 1068,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1058,
                        "end": 1065,
                        "name": "Example",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1065,
                        "end": 1068,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1066,
                            "end": 1067,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1066,
                              "end": 1067,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSMappedType",
                      "start": 1071,
                      "end": 1104,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1074,
                        "end": 1086,
                        "name": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1075,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1079,
                          "end": 1086,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1085,
                            "end": 1086,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1085,
                              "end": 1086,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1089,
                        "end": 1102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1089,
                          "end": 1096,
                          "name": "Schema4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1096,
                          "end": 1102,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 1097,
                              "end": 1101,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 1097,
                                "end": 1098,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1097,
                                  "end": 1098,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 1099,
                                "end": 1100,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1099,
                                  "end": 1100,
                                  "name": "P",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1079,
                        "end": 1086,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1085,
                          "end": 1086,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1085,
                            "end": 1086,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1074,
                        "end": 1075,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1111,
      "end": 1272,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1118,
        "end": 1272,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1124,
            "end": 1272,
            "id": {
              "type": "Identifier",
              "start": 1124,
              "end": 1152,
              "name": "schemaObj4",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1134,
                "end": 1152,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1136,
                  "end": 1152,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1136,
                    "end": 1143,
                    "name": "Schema4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1143,
                    "end": 1152,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1144,
                        "end": 1151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1144,
                          "end": 1151,
                          "name": "Request",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 1155,
              "end": 1272,
              "properties": [
                {
                  "type": "Property",
                  "start": 1159,
                  "end": 1269,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1164,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1166,
                    "end": 1269,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1172,
                        "end": 1264,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1172,
                          "end": 1174,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 1176,
                          "end": 1264,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1184,
                              "end": 1257,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1184,
                                "end": 1189,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "start": 1191,
                                "end": 1257,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 1201,
                                    "end": 1224,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1201,
                                      "end": 1203,
                                      "name": "l2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "start": 1205,
                                      "end": 1224,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 1207,
                                          "end": 1222,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1207,
                                            "end": 1211,
                                            "name": "type",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 1213,
                                            "end": 1222,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1234,
                                    "end": 1248,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1234,
                                      "end": 1241,
                                      "name": "invalid",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1243,
                                      "end": 1248,
                                      "value": false,
                                      "raw": "false"
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1296,
      "end": 1339,
      "id": {
        "type": "Identifier",
        "start": 1301,
        "end": 1307,
        "name": "Length",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1307,
        "end": 1324,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1308,
            "end": 1323,
            "name": {
              "type": "Identifier",
              "start": 1308,
              "end": 1309,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1318,
              "end": 1323,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1318,
                "end": 1321
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1327,
        "end": 1338,
        "objectType": {
          "type": "TSTypeReference",
          "start": 1327,
          "end": 1328,
          "typeName": {
            "type": "Identifier",
            "start": 1327,
            "end": 1328,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1329,
          "end": 1337,
          "literal": {
            "type": "Literal",
            "start": 1329,
            "end": 1337,
            "value": "length",
            "raw": "\"length\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1340,
      "end": 1460,
      "id": {
        "type": "Identifier",
        "start": 1345,
        "end": 1352,
        "name": "Prepend",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1352,
        "end": 1372,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1353,
            "end": 1354,
            "name": {
              "type": "Identifier",
              "start": 1353,
              "end": 1354,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1356,
            "end": 1371,
            "name": {
              "type": "Identifier",
              "start": 1356,
              "end": 1357,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1366,
              "end": 1371,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1366,
                "end": 1369
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1375,
        "end": 1459,
        "checkType": {
          "type": "TSFunctionType",
          "start": 1376,
          "end": 1405,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1377,
              "end": 1384,
              "name": "head",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1381,
                "end": 1384,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1383,
                  "end": 1384,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1383,
                    "end": 1384,
                    "name": "V",
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
            {
              "type": "RestElement",
              "start": 1386,
              "end": 1396,
              "argument": {
                "type": "Identifier",
                "start": 1389,
                "end": 1393,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1393,
                "end": 1396,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1395,
                  "end": 1396,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1396,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1398,
            "end": 1405,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1401,
              "end": 1405
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 1415,
          "end": 1445,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1419,
              "end": 1435,
              "argument": {
                "type": "Identifier",
                "start": 1422,
                "end": 1426,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1426,
                "end": 1435,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1428,
                  "end": 1435,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1434,
                    "end": 1435,
                    "name": {
                      "type": "Identifier",
                      "start": 1434,
                      "end": 1435,
                      "name": "R",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1438,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1441,
              "end": 1445
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1450,
          "end": 1451,
          "typeName": {
            "type": "Identifier",
            "start": 1450,
            "end": 1451,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 1456,
          "end": 1459
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1462,
      "end": 1627,
      "id": {
        "type": "Identifier",
        "start": 1467,
        "end": 1476,
        "name": "BuildTree",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1476,
        "end": 1524,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1477,
            "end": 1478,
            "name": {
              "type": "Identifier",
              "start": 1477,
              "end": 1478,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1480,
            "end": 1501,
            "name": {
              "type": "Identifier",
              "start": 1480,
              "end": 1481,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1490,
              "end": 1496
            },
            "default": {
              "type": "TSLiteralType",
              "start": 1499,
              "end": 1501,
              "literal": {
                "type": "UnaryExpression",
                "start": 1499,
                "end": 1501,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1500,
                  "end": 1501,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1503,
            "end": 1523,
            "name": {
              "type": "Identifier",
              "start": 1503,
              "end": 1504,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1513,
              "end": 1518,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1513,
                "end": 1516
              }
            },
            "default": {
              "type": "TSTupleType",
              "start": 1521,
              "end": 1523,
              "elementTypes": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1527,
        "end": 1626,
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 1527,
          "end": 1597,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1531,
              "end": 1536,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1531,
                "end": 1532,
                "value": 1,
                "raw": "1"
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1532,
                "end": 1535,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1534,
                  "end": 1535,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1534,
                    "end": 1535,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1539,
              "end": 1595,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 1539,
                "end": 1540,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1540,
                "end": 1594,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 1542,
                  "end": 1594,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1542,
                      "end": 1543,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1543,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 1546,
                      "end": 1594,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1548,
                          "end": 1592,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1548,
                            "end": 1556,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1556,
                            "end": 1592,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1558,
                              "end": 1592,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1558,
                                "end": 1590,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1558,
                                  "end": 1567,
                                  "name": "BuildTree",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 1567,
                                  "end": 1590,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1568,
                                      "end": 1569,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1568,
                                        "end": 1569,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1571,
                                      "end": 1572,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1571,
                                        "end": 1572,
                                        "name": "N",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 1574,
                                      "end": 1589,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1574,
                                        "end": 1581,
                                        "name": "Prepend",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 1581,
                                        "end": 1589,
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 1582,
                                            "end": 1585
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 1587,
                                            "end": 1588,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1587,
                                              "end": 1588,
                                              "name": "I",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
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
              "accessibility": null,
              "static": false
            }
          ]
        },
        "indexType": {
          "type": "TSConditionalType",
          "start": 1598,
          "end": 1625,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1598,
            "end": 1607,
            "typeName": {
              "type": "Identifier",
              "start": 1598,
              "end": 1604,
              "name": "Length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1604,
              "end": 1607,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1605,
                  "end": 1606,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1605,
                    "end": 1606,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1616,
            "end": 1617,
            "typeName": {
              "type": "Identifier",
              "start": 1616,
              "end": 1617,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 1620,
            "end": 1621,
            "literal": {
              "type": "Literal",
              "start": 1620,
              "end": 1621,
              "value": 1,
              "raw": "1"
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 1624,
            "end": 1625,
            "literal": {
              "type": "Literal",
              "start": 1624,
              "end": 1625,
              "value": 0,
              "raw": "0"
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1629,
      "end": 1663,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1643,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1644,
        "end": 1663,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1648,
            "end": 1661,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1648,
              "end": 1652,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1652,
              "end": 1660,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1654,
                "end": 1660
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
      "type": "TSTypeAliasDeclaration",
      "start": 1665,
      "end": 1701,
      "id": {
        "type": "Identifier",
        "start": 1670,
        "end": 1679,
        "name": "GrandUser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1682,
        "end": 1700,
        "typeName": {
          "type": "Identifier",
          "start": 1682,
          "end": 1691,
          "name": "BuildTree",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1691,
          "end": 1700,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1692,
              "end": 1696,
              "typeName": {
                "type": "Identifier",
                "start": 1692,
                "end": 1696,
                "name": "User",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 1698,
              "end": 1699,
              "literal": {
                "type": "Literal",
                "start": 1698,
                "end": 1699,
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1703,
      "end": 2100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 2099,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1729,
            "name": "grandUser",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1718,
              "end": 1729,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1720,
                "end": 1729,
                "typeName": {
                  "type": "Identifier",
                  "start": 1720,
                  "end": 1729,
                  "name": "GrandUser",
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
            "type": "ObjectExpression",
            "start": 1732,
            "end": 2099,
            "properties": [
              {
                "type": "Property",
                "start": 1736,
                "end": 1754,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1740,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1742,
                  "end": 1754,
                  "value": "Grand User",
                  "raw": "\"Grand User\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1758,
                "end": 2096,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1758,
                  "end": 1766,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 1768,
                  "end": 2096,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 1774,
                      "end": 2091,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1782,
                          "end": 1793,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1782,
                            "end": 1786,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1788,
                            "end": 1793,
                            "value": "Son",
                            "raw": "\"Son\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1801,
                          "end": 2084,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1801,
                            "end": 1809,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1811,
                            "end": 2084,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 1821,
                                "end": 2075,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 1833,
                                    "end": 1850,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1833,
                                      "end": 1837,
                                      "name": "name",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1839,
                                      "end": 1850,
                                      "value": "Grand son",
                                      "raw": "\"Grand son\""
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1862,
                                    "end": 2064,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1862,
                                      "end": 1870,
                                      "name": "children",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "start": 1872,
                                      "end": 2064,
                                      "elements": [
                                        {
                                          "type": "ObjectExpression",
                                          "start": 1886,
                                          "end": 2051,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 1902,
                                              "end": 1913,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 1902,
                                                "end": 1906,
                                                "name": "name",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 1908,
                                                "end": 1913,
                                                "value": "123",
                                                "raw": "\"123\""
                                              },
                                              "kind": "init",
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 1929,
                                              "end": 2036,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 1929,
                                                "end": 1937,
                                                "name": "children",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "ArrayExpression",
                                                "start": 1939,
                                                "end": 2036,
                                                "elements": [
                                                  {
                                                    "type": "ObjectExpression",
                                                    "start": 1957,
                                                    "end": 2019,
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "start": 1977,
                                                        "end": 2000,
                                                        "method": false,
                                                        "shorthand": false,
                                                        "computed": false,
                                                        "key": {
                                                          "type": "Identifier",
                                                          "start": 1977,
                                                          "end": 1981,
                                                          "name": "name",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "start": 1983,
                                                          "end": 2000,
                                                          "value": "Some other name",
                                                          "raw": "\"Some other name\""
                                                        },
                                                        "kind": "init",
                                                        "optional": false
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              "kind": "init",
                                              "optional": false
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2102,
      "end": 2148,
      "expression": {
        "type": "MemberExpression",
        "start": 2102,
        "end": 2147,
        "object": {
          "type": "MemberExpression",
          "start": 2102,
          "end": 2144,
          "object": {
            "type": "MemberExpression",
            "start": 2102,
            "end": 2135,
            "object": {
              "type": "MemberExpression",
              "start": 2102,
              "end": 2132,
              "object": {
                "type": "MemberExpression",
                "start": 2102,
                "end": 2123,
                "object": {
                  "type": "MemberExpression",
                  "start": 2102,
                  "end": 2120,
                  "object": {
                    "type": "Identifier",
                    "start": 2102,
                    "end": 2111,
                    "name": "grandUser",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2112,
                    "end": 2120,
                    "name": "children",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 2121,
                  "end": 2122,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2124,
                "end": 2132,
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 2133,
              "end": 2134,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2136,
            "end": 2144,
            "name": "children",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 2145,
          "end": 2146,
          "value": 0,
          "raw": "0"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
