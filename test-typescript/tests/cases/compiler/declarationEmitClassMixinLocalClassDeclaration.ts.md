__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 634,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 67,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 67,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "AnyFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 40,
          "end": 67,
          "params": [
            {
              "type": "RestElement",
              "start": 41,
              "end": 56,
              "argument": {
                "type": "Identifier",
                "start": 44,
                "end": 49,
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 51,
                  "end": 56,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 51,
                    "end": 54
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 67,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 37,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 36,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 212,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 76,
        "end": 212,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 95,
          "decorators": [],
          "name": "AnyConstructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 168,
          "end": 212,
          "types": [
            {
              "type": "TSConstructorType",
              "start": 169,
              "end": 202,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 174,
                  "end": 189,
                  "argument": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 182,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 184,
                      "end": 189,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 184,
                        "end": 187
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 202,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 194,
                  "end": 202,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 202,
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSTypeReference",
              "start": 206,
              "end": 212,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 212,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 95,
          "end": 161,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 96,
              "end": 128,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 113,
                "end": 119
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 122,
                "end": 128
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 130,
              "end": 160,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 145,
                "end": 151
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 154,
                "end": 160
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 336,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 235,
        "decorators": [],
        "name": "MixinHelperFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 238,
        "end": 336,
        "params": [
          {
            "type": "Identifier",
            "start": 268,
            "end": 281,
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 278,
                "end": 281,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 279,
                    "end": 280,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 283,
            "end": 289,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 288,
                "end": 289,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 291,
          "end": 336,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 294,
            "end": 336,
            "checkType": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 295,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 324,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 315,
                "end": 324,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 316,
                    "end": 323,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 322,
                      "end": 323,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 315,
                "decorators": [],
                "name": "AnyFunction",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 331,
              "end": 336
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 328,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 238,
          "end": 267,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 239,
              "end": 263,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 249,
                "end": 263,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 263,
                  "decorators": [],
                  "name": "AnyConstructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 265,
              "end": 266,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 388,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 388,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 388,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 374,
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 357,
                "end": 374,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 359,
                  "end": 374,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 374,
                    "decorators": [],
                    "name": "MixinHelperFunc",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "start": 377,
              "end": 388,
              "expression": {
                "type": "Literal",
                "start": 377,
                "end": 381,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 385,
                "end": 388
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 391,
      "end": 411,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 398,
        "end": 411,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 409,
          "end": 411,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 404,
          "end": 408,
          "decorators": [],
          "name": "Base",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 414,
      "end": 634,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 421,
        "end": 634,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 631,
          "end": 634,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 427,
          "end": 438,
          "decorators": [],
          "name": "XmlElement2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 447,
          "end": 630,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 458,
              "end": 464,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 459,
                  "end": 463,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 470,
              "end": 629,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 629,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 525,
                    "end": 595,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 556,
                      "end": 595,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 570,
                          "end": 585,
                          "accessibility": null,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 573,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 573,
                            "end": 581,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 575,
                              "end": 581
                            }
                          },
                          "value": {
                            "type": "Literal",
                            "start": 584,
                            "end": 585,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 542,
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 555,
                      "decorators": [],
                      "name": "base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 604,
                    "end": 623,
                    "argument": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 622,
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 471,
                  "end": 510,
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 510,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 477,
                      "end": 510,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 491,
                        "end": 510,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 492,
                            "end": 496,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 496,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeQuery",
                            "start": 498,
                            "end": 509,
                            "exprName": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 509,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 491,
                        "decorators": [],
                        "name": "AnyConstructor",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 447,
            "end": 452,
            "decorators": [],
            "name": "Mixin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
