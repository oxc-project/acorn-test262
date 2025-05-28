__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 2149,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Request",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "l1",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "ex",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "Schema1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 171,
                      "end": 204,
                      "key": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 175,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                          "decorators": [],
                          "name": "Schema1",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "readonly": null
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
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 385,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 265,
              "decorators": [],
              "name": "schemaObj1",
              "optional": false,
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
                    "decorators": [],
                    "name": "Schema1",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 277,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 287,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 302,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 314,
                                      "end": 316,
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 320,
                                            "end": 324,
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 326,
                                            "end": 335,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 347,
                                    "end": 361,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 347,
                                      "end": 354,
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 356,
                                      "end": 361,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 387,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 399,
        "decorators": [],
        "name": "Schema2",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 471,
                      "end": 504,
                      "key": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 475,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                          "decorators": [],
                          "name": "Schema2",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "readonly": null
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
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 537,
            "end": 685,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 565,
              "decorators": [],
              "name": "schemaObj2",
              "optional": false,
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
                    "decorators": [],
                    "name": "Schema2",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 577,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 585,
                          "end": 587,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 597,
                                "end": 602,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 614,
                                      "end": 616,
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 620,
                                            "end": 624,
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 626,
                                            "end": 635,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 647,
                                    "end": 661,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 647,
                                      "end": 654,
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 656,
                                      "end": 661,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 687,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 699,
        "decorators": [],
        "name": "Schema3",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 769,
                    "end": 804,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 771,
                      "end": 804,
                      "key": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                          "decorators": [],
                          "name": "Schema3",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "readonly": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 824,
            "end": 972,
            "id": {
              "type": "Identifier",
              "start": 824,
              "end": 852,
              "decorators": [],
              "name": "schemaObj3",
              "optional": false,
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
                    "decorators": [],
                    "name": "Schema3",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 864,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 872,
                          "end": 874,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 884,
                                "end": 889,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 901,
                                      "end": 903,
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 907,
                                            "end": 911,
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 913,
                                            "end": 922,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 934,
                                    "end": 948,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 934,
                                      "end": 941,
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 943,
                                      "end": 948,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 974,
      "end": 1109,
      "id": {
        "type": "Identifier",
        "start": 979,
        "end": 986,
        "decorators": [],
        "name": "Schema4",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Example",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                      "key": {
                        "type": "Identifier",
                        "start": 1074,
                        "end": 1075,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                          "decorators": [],
                          "name": "Schema4",
                          "optional": false,
                          "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "optional": false,
                      "readonly": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1124,
            "end": 1272,
            "id": {
              "type": "Identifier",
              "start": 1124,
              "end": 1152,
              "decorators": [],
              "name": "schemaObj4",
              "optional": false,
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
                    "decorators": [],
                    "name": "Schema4",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1164,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1172,
                          "end": 1174,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1184,
                                "end": 1189,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1201,
                                      "end": 1203,
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1207,
                                            "end": 1211,
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "start": 1213,
                                            "end": 1222,
                                            "value": "boolean",
                                            "raw": "'boolean'"
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1234,
                                    "end": 1248,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1234,
                                      "end": 1241,
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1243,
                                      "end": 1248,
                                      "value": false,
                                      "raw": "false"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1296,
      "end": 1339,
      "id": {
        "type": "Identifier",
        "start": 1301,
        "end": 1307,
        "decorators": [],
        "name": "Length",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "Prepend",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "head",
              "optional": false,
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
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "RestElement",
              "start": 1386,
              "end": 1396,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1389,
                "end": 1393,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1422,
                "end": 1426,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
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
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "BuildTree",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
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
                "argument": {
                  "type": "Literal",
                  "start": 1500,
                  "end": 1501,
                  "value": 1,
                  "raw": "1"
                },
                "prefix": true
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
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "BuildTree",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "N",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "Prepend",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null
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
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "GrandUser",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "BuildTree",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "User",
                "optional": false,
                "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 2099,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1729,
            "decorators": [],
            "name": "grandUser",
            "optional": false,
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
                  "decorators": [],
                  "name": "GrandUser",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1736,
                  "end": 1740,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1742,
                  "end": 1754,
                  "value": "Grand User",
                  "raw": "\"Grand User\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1758,
                "end": 2096,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1758,
                  "end": 1766,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1782,
                            "end": 1786,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1788,
                            "end": 1793,
                            "value": "Son",
                            "raw": "\"Son\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1801,
                          "end": 2084,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1801,
                            "end": 1809,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1833,
                                      "end": 1837,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 1839,
                                      "end": 1850,
                                      "value": "Grand son",
                                      "raw": "\"Grand son\""
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 1862,
                                    "end": 2064,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1862,
                                      "end": 1870,
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 1902,
                                                "end": 1906,
                                                "decorators": [],
                                                "name": "name",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 1908,
                                                "end": 1913,
                                                "value": "123",
                                                "raw": "\"123\""
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 1929,
                                              "end": 2036,
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 1929,
                                                "end": 1937,
                                                "decorators": [],
                                                "name": "children",
                                                "optional": false,
                                                "typeAnnotation": null
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
                                                        "kind": "init",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "start": 1977,
                                                          "end": 1981,
                                                          "decorators": [],
                                                          "name": "name",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "start": 1983,
                                                          "end": 2000,
                                                          "value": "Some other name",
                                                          "raw": "\"Some other name\""
                                                        },
                                                        "method": false,
                                                        "shorthand": false,
                                                        "computed": false,
                                                        "optional": false
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
                    "decorators": [],
                    "name": "grandUser",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2112,
                    "end": 2120,
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Literal",
                  "start": 2121,
                  "end": 2122,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 2124,
                "end": 2132,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 2133,
              "end": 2134,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 2136,
            "end": 2144,
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Literal",
          "start": 2145,
          "end": 2146,
          "value": 0,
          "raw": "0"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
