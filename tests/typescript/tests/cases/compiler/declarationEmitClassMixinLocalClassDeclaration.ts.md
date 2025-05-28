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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 67,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "AnyFunction",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 40,
          "end": 67,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 41,
              "end": 56,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 44,
                "end": 49,
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null
              },
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
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
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
      "start": 69,
      "end": 212,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 76,
        "end": 212,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 95,
          "decorators": [],
          "name": "AnyConstructor",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "typeAnnotation": null
              },
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
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 130,
              "end": 160,
              "name": {
                "type": "Identifier",
                "start": 130,
                "end": 136,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              },
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
              "out": false,
              "const": false
            }
          ]
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
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 174,
                  "end": 189,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 182,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 202,
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 206,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 212,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "start": 215,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 235,
        "decorators": [],
        "name": "MixinHelperFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 238,
        "end": 336,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 238,
          "end": 267,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 239,
              "end": 263,
              "name": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 249,
                "end": 263,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 263,
                  "decorators": [],
                  "name": "AnyConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 265,
              "end": 266,
              "name": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "T",
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
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 315,
                "decorators": [],
                "name": "AnyFunction",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "name": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "M",
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
                ]
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 328,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 331,
              "end": 336
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 388,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 388,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 388,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 374,
                    "decorators": [],
                    "name": "MixinHelperFunc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 385,
                "end": 388
              }
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
      "type": "ExportNamedDeclaration",
      "start": 391,
      "end": 411,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 398,
        "end": 411,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 409,
          "end": 411,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 414,
      "end": 634,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 421,
        "end": 634,
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
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 447,
          "end": 630,
          "callee": {
            "type": "Identifier",
            "start": 447,
            "end": 452,
            "decorators": [],
            "name": "Mixin",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 491,
                        "decorators": [],
                        "name": "AnyConstructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 491,
                        "end": 510,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 492,
                            "end": 496,
                            "typeName": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 496,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 629,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 525,
                    "end": 595,
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
                    "typeParameters": null,
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
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 556,
                      "end": 595,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 570,
                          "end": 585,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 573,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                            "value": 0,
                            "raw": "0"
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
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
              "id": null,
              "generator": false
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 631,
          "end": 634,
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
