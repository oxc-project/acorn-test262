__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 3720,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 10,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 17,
        "end": 49,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 49,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 38,
              "end": 47,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 43,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 43,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 45,
                  "end": 46,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 28,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "a",
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
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 100,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 78,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 78,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 75,
                "end": 78,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 80,
          "end": 88,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 88,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 96,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 150,
            "decorators": [],
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 150,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 125,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 126,
                      "end": 149,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 127,
                          "end": 140,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 140,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 134,
                              "end": 140
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 149,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 145,
                          "end": 149
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 187,
        "arguments": [
          {
            "type": "Identifier",
            "start": 155,
            "end": 163,
            "decorators": [],
            "name": "handlers",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 186,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 174,
              "end": 186,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 165,
                "end": 170,
                "decorators": [],
                "name": "value",
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
          "start": 152,
          "end": 154,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 201,
      "end": 276,
      "body": {
        "type": "TSInterfaceBody",
        "start": 224,
        "end": 276,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 245,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 241,
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 274,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 258,
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 273,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 260,
                "end": 273,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "decorators": [],
                    "name": "cur",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 264,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 266,
                        "end": 267,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
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
                  "start": 269,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 272,
                    "end": 273,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 220,
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 220,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
    {
      "type": "ClassDeclaration",
      "start": 277,
      "end": 340,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 340,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 328,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 317,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 317,
              "end": 328,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 318,
                  "end": 326,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 326,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 325,
                      "end": 326,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "P",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 338,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 334,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 337,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 300,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 302,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 467,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 450,
        "end": 467,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 465,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "decorators": [],
              "name": "iv",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 464,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 458,
                "end": 464,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 464,
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 371,
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 413,
        "end": 422,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 422,
        "end": 449,
        "params": [
          {
            "type": "TSIntersectionType",
            "start": 423,
            "end": 448,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 423,
                "end": 428,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 431,
                "end": 448,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 440,
                  "end": 448,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 441,
                      "end": 447,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 400,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 382,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 380,
              "end": 382,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 384,
            "end": 399,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 393,
              "end": 399
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "decorators": [],
              "name": "Values",
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
      "start": 469,
      "end": 536,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 469,
        "end": 535,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 490,
            "end": 534,
            "properties": [
              {
                "type": "Property",
                "start": 492,
                "end": 509,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 505,
                  "decorators": [],
                  "name": "initialValues",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 507,
                  "end": 509,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 511,
                "end": 532,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 521,
                  "decorators": [],
                  "name": "nextValues",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 523,
                  "end": 532,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 530,
                    "end": 532,
                    "raw": "12",
                    "value": 12
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 523,
                      "end": 526,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 473,
          "end": 489,
          "decorators": [],
          "name": "GenericComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 696,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 583,
        "decorators": [],
        "name": "useStringOrNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 611,
          "end": 615,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 615,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 614,
              "end": 615,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 617,
          "end": 688,
          "decorators": [],
          "name": "useIt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 622,
            "end": 688,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 624,
              "end": 688,
              "checkType": {
                "type": "TSTypeReference",
                "start": 624,
                "end": 625,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 634,
                "end": 640
              },
              "falseType": {
                "type": "TSFunctionType",
                "start": 668,
                "end": 687,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 669,
                    "end": 678,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 670,
                      "end": 678,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 672,
                        "end": 678
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 680,
                  "end": 687,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 683,
                    "end": 687
                  }
                },
                "typeParameters": null
              },
              "trueType": {
                "type": "TSFunctionType",
                "start": 644,
                "end": 663,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 645,
                    "end": 654,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 646,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 648,
                        "end": 654
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 656,
                  "end": 663,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 659,
                    "end": 663
                  }
                },
                "typeParameters": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 689,
        "end": 695,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 691,
          "end": 695
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 583,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 584,
            "end": 609,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 594,
              "end": 609,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 594,
                  "end": 600
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 603,
                  "end": 609
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 584,
              "end": 585,
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
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 730,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 697,
        "end": 729,
        "arguments": [
          {
            "type": "Literal",
            "start": 715,
            "end": 717,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 719,
            "end": 728,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 726,
              "end": 728,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 719,
                "end": 722,
                "decorators": [],
                "name": "foo",
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
          "start": 697,
          "end": 714,
          "decorators": [],
          "name": "useStringOrNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 743,
      "end": 810,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 758,
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 764,
        "end": 810,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 764,
            "end": 770
          },
          {
            "type": "TSTypeLiteral",
            "start": 773,
            "end": 810,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 775,
                "end": 808,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 796,
                  "decorators": [],
                  "name": "attachPayloadTypeHack",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 797,
                  "end": 808,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 799,
                    "end": 808,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 799,
                        "end": 800,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 800,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 803,
                        "end": 808
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 758,
        "end": 761,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 759,
            "end": 760,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 812,
      "end": 903,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 824,
        "decorators": [],
        "name": "Handler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 833,
        "end": 903,
        "checkType": {
          "type": "TSTypeReference",
          "start": 833,
          "end": 834,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 833,
            "end": 834,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "falseType": {
          "type": "TSFunctionType",
          "start": 876,
          "end": 903,
          "params": [
            {
              "type": "Identifier",
              "start": 877,
              "end": 885,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 882,
                "end": 885,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 884,
                  "end": 885,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 887,
              "end": 897,
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 894,
                "end": 897,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 903,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 902,
              "end": 903,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 854,
          "end": 869,
          "params": [
            {
              "type": "Identifier",
              "start": 855,
              "end": 863,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 860,
                "end": 863,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 862,
                  "end": 863,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 863,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 865,
            "end": 869,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 868,
              "end": 869,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 868,
                "end": 869,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 824,
        "end": 830,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 825,
            "end": 826,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 828,
            "end": 829,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 905,
      "end": 995,
      "body": {
        "type": "TSInterfaceBody",
        "start": 935,
        "end": 995,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 941,
            "end": 966,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 941,
              "end": 951,
              "decorators": [],
              "name": "actionType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 951,
              "end": 966,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 953,
                "end": 966,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 963,
                  "end": 966,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 964,
                      "end": 965,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 964,
                        "end": 965,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 963,
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 971,
            "end": 993,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 971,
              "end": 978,
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 978,
              "end": 993,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 980,
                "end": 993,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 987,
                  "end": 993,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 988,
                      "end": 989,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 988,
                        "end": 989,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 992,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 992,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 987,
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 915,
        "end": 928,
        "decorators": [],
        "name": "ActionHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 928,
        "end": 934,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 929,
            "end": 930,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 932,
            "end": 933,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 932,
              "end": 933,
              "decorators": [],
              "name": "P",
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
      "start": 997,
      "end": 1099,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1021,
        "decorators": [],
        "name": "handler",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1028,
          "end": 1053,
          "decorators": [],
          "name": "actionType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1038,
            "end": 1053,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1040,
              "end": 1053,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1050,
                "end": 1053,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1051,
                    "end": 1052,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1052,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1040,
                "end": 1050,
                "decorators": [],
                "name": "ActionType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1055,
          "end": 1077,
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1062,
            "end": 1077,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1064,
              "end": 1077,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1071,
                "end": 1077,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1072,
                    "end": 1073,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1072,
                      "end": 1073,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1075,
                    "end": 1076,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1075,
                      "end": 1076,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1064,
                "end": 1071,
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1078,
        "end": 1099,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1080,
          "end": 1099,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1093,
            "end": 1099,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1094,
                "end": 1095,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1095,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1097,
                "end": 1098,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1098,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1080,
            "end": 1093,
            "decorators": [],
            "name": "ActionHandler",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1021,
        "end": 1027,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1022,
            "end": 1023,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1022,
              "end": 1023,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1025,
            "end": 1026,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1025,
              "end": 1026,
              "decorators": [],
              "name": "P",
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
      "start": 1101,
      "end": 1222,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1131,
        "decorators": [],
        "name": "createReducer",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1144,
          "end": 1159,
          "decorators": [],
          "name": "defaultState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1156,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1159,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1169,
          "end": 1211,
          "argument": {
            "type": "Identifier",
            "start": 1172,
            "end": 1186,
            "decorators": [],
            "name": "actionHandlers",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1186,
            "end": 1211,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1188,
              "end": 1211,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1188,
                "end": 1209,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1201,
                  "end": 1209,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1202,
                      "end": 1203,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1203,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1205,
                      "end": 1208
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1201,
                  "decorators": [],
                  "name": "ActionHandler",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1217,
        "end": 1222,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1219,
          "end": 1222
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1131,
        "end": 1134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1132,
            "end": 1133,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1132,
              "end": 1133,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1224,
      "end": 1264,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1243,
        "end": 1264,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1249,
            "end": 1262,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1249,
              "end": 1254,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1254,
              "end": 1262,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1256,
                "end": 1262
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1242,
        "decorators": [],
        "name": "AppState",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1266,
      "end": 1314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1314,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1294,
            "decorators": [],
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1284,
              "end": 1294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1286,
                "end": 1294,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1294,
                  "decorators": [],
                  "name": "AppState",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1297,
            "end": 1314,
            "properties": [
              {
                "type": "Property",
                "start": 1303,
                "end": 1312,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1308,
                  "decorators": [],
                  "name": "dummy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1310,
                  "end": 1312,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1316,
      "end": 1429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1322,
          "end": 1377,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1322,
            "end": 1357,
            "decorators": [],
            "name": "NON_VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1337,
              "end": 1357,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1339,
                "end": 1357,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1349,
                  "end": 1357,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1350,
                      "end": 1356
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1349,
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1360,
            "end": 1377,
            "raw": "'NON_VOID_ACTION'",
            "value": "NON_VOID_ACTION"
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 1384,
          "end": 1429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1384,
            "end": 1413,
            "decorators": [],
            "name": "VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1395,
              "end": 1413,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1397,
                "end": 1413,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1407,
                  "end": 1413,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 1408,
                      "end": 1412
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1397,
                  "end": 1407,
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1416,
            "end": 1429,
            "raw": "'VOID_ACTION'",
            "value": "VOID_ACTION"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1431,
      "end": 1564,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1431,
        "end": 1564,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1450,
            "end": 1462,
            "decorators": [],
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "CallExpression",
            "start": 1468,
            "end": 1520,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1476,
                "end": 1491,
                "decorators": [],
                "name": "NON_VOID_ACTION",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1493,
                "end": 1519,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1519,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1499,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1501,
                    "end": 1509,
                    "decorators": [],
                    "name": "_payload",
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
              "start": 1468,
              "end": 1475,
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "CallExpression",
            "start": 1526,
            "end": 1562,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1534,
                "end": 1545,
                "decorators": [],
                "name": "VOID_ACTION",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1547,
                "end": 1561,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1556,
                  "end": 1561,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1552,
                    "decorators": [],
                    "name": "state",
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
              "start": 1526,
              "end": 1533,
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1431,
          "end": 1444,
          "decorators": [],
          "name": "createReducer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1577,
      "end": 1642,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1582,
        "end": 1583,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1586,
        "end": 1641,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1590,
            "end": 1613,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1590,
              "end": 1591,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1591,
              "end": 1612,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1593,
                "end": 1612,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1594,
                    "end": 1603,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1595,
                      "end": 1603,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1597,
                        "end": 1603
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1605,
                  "end": 1612,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1608,
                    "end": 1612
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1616,
            "end": 1639,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1616,
              "end": 1617,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1617,
              "end": 1638,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1619,
                "end": 1638,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1629,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1621,
                      "end": 1629,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1623,
                        "end": 1629
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1631,
                  "end": 1638,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1634,
                    "end": 1638
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1644,
      "end": 1710,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1649,
        "end": 1650,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1653,
        "end": 1709,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1657,
            "end": 1707,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1657,
              "end": 1659,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1679,
                "end": 1683,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1680,
                  "end": 1683,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1682,
                    "end": 1683,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1683,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1685,
                "end": 1699,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1693,
                  "end": 1699,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 1695,
                    "end": 1699,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1697,
                      "end": 1698,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1697,
                        "end": 1698,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1695,
                      "end": 1696,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1695,
                        "end": 1696,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1700,
              "end": 1706,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1702,
                "end": 1706
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1659,
              "end": 1678,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1660,
                  "end": 1677,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1670,
                    "end": 1677,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1676,
                      "end": 1677,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1676,
                        "end": 1677,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1661,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1712,
      "end": 1729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1724,
          "end": 1728,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1724,
            "end": 1728,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1725,
              "end": 1728,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1727,
                "end": 1728,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1727,
                  "end": 1728,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1730,
      "end": 1749,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1730,
        "end": 1748,
        "arguments": [
          {
            "type": "Literal",
            "start": 1735,
            "end": 1738,
            "raw": "'a'",
            "value": "a"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1740,
            "end": 1747,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1745,
              "end": 1747,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1730,
          "end": 1734,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1730,
            "end": 1731,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1732,
            "end": 1734,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1762,
      "end": 2466,
      "body": {
        "type": "TSModuleBlock",
        "start": 1775,
        "end": 2466,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1778,
            "end": 1834,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1805,
              "end": 1834,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1810,
                  "end": 1832,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1821,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1821,
                    "end": 1832,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1822,
                        "end": 1830,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1827,
                          "end": 1830,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1829,
                            "end": 1830,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1829,
                              "end": 1830,
                              "decorators": [],
                              "name": "P",
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
                }
              ]
            },
            "declare": true,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1792,
              "end": 1801,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1801,
              "end": 1804,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1802,
                  "end": 1803,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1802,
                    "end": 1803,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1840,
            "end": 1908,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1873,
              "end": 1908,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1877,
                  "end": 1906,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1882,
                      "end": 1890,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1887,
                        "end": 1890,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1889,
                          "end": 1890,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1889,
                            "end": 1890,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1891,
                    "end": 1905,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1893,
                      "end": 1905,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1902,
                        "end": 1905,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1903,
                            "end": 1904,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1903,
                              "end": 1904,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1893,
                        "end": 1902,
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1850,
              "end": 1864,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1864,
              "end": 1872,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1865,
                  "end": 1871,
                  "const": false,
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 1869,
                    "end": 1871,
                    "members": []
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1866,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1910,
            "end": 2027,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1915,
              "end": 1936,
              "decorators": [],
              "name": "CreateElementChildren",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1944,
              "end": 2026,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1944,
                "end": 1945,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1944,
                  "end": 1945,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "start": 1954,
                "end": 1976,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1956,
                    "end": 1974,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1956,
                      "end": 1964,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1965,
                      "end": 1974,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 1967,
                        "end": 1974,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1973,
                          "end": 1974,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1973,
                            "end": 1974,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      }
                    }
                  }
                ]
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 2019,
                "end": 2026
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 1981,
                "end": 2014,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1981,
                  "end": 1982,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1981,
                    "end": 1982,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "extendsType": {
                  "type": "TSArrayType",
                  "start": 1991,
                  "end": 1996,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1991,
                    "end": 1994
                  }
                },
                "falseType": {
                  "type": "TSArrayType",
                  "start": 2011,
                  "end": 2014,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 2011,
                    "end": 2012,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2011,
                      "end": 2012,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 2003,
                  "end": 2004,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2003,
                    "end": 2004,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1936,
              "end": 1939,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1937,
                  "end": 1938,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1937,
                    "end": 1938,
                    "decorators": [],
                    "name": "P",
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
            "start": 2029,
            "end": 2149,
            "async": false,
            "body": null,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2046,
              "end": 2059,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2077,
                "end": 2100,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2081,
                  "end": 2100,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2083,
                    "end": 2100,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2097,
                      "end": 2100,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2098,
                          "end": 2099,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2098,
                            "end": 2099,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2083,
                      "end": 2097,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 2104,
                "end": 2141,
                "argument": {
                  "type": "Identifier",
                  "start": 2107,
                  "end": 2115,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2115,
                  "end": 2141,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2117,
                    "end": 2141,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2138,
                      "end": 2141,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2139,
                          "end": 2140,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2139,
                            "end": 2140,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2117,
                      "end": 2138,
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2143,
              "end": 2148,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2059,
              "end": 2073,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2060,
                  "end": 2072,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 2070,
                    "end": 2072,
                    "members": []
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2060,
                    "end": 2061,
                    "decorators": [],
                    "name": "P",
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
            "start": 2151,
            "end": 2266,
            "async": false,
            "body": null,
            "declare": true,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2168,
              "end": 2182,
              "decorators": [],
              "name": "createElement2",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2200,
                "end": 2223,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2204,
                  "end": 2223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2206,
                    "end": 2223,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2220,
                      "end": 2223,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2221,
                          "end": 2222,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2221,
                            "end": 2222,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2206,
                      "end": 2220,
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2227,
                "end": 2258,
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2232,
                  "end": 2258,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2234,
                    "end": 2258,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2255,
                      "end": 2258,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2256,
                          "end": 2257,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2256,
                            "end": 2257,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2234,
                      "end": 2255,
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2260,
              "end": 2265,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2262,
                "end": 2265
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2182,
              "end": 2196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2183,
                  "end": 2195,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 2193,
                    "end": 2195,
                    "members": []
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2183,
                    "end": 2184,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2268,
            "end": 2350,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2348,
              "end": 2350,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2274,
              "end": 2292,
              "decorators": [],
              "name": "InferFunctionTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2301,
              "end": 2310,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2310,
              "end": 2347,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2311,
                  "end": 2346,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2312,
                      "end": 2345,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2312,
                        "end": 2320,
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2320,
                        "end": 2345,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2322,
                          "end": 2345,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2334,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2326,
                                "end": 2334,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2328,
                                  "end": 2334
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 2336,
                            "end": 2345,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2339,
                              "end": 2345
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2352,
            "end": 2405,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2352,
              "end": 2404,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2366,
                  "end": 2384,
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2386,
                  "end": 2403,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 2395,
                    "end": 2403,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 2395,
                      "end": 2397,
                      "raw": "\"\"",
                      "value": ""
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2400,
                      "end": 2403,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2387,
                      "end": 2390,
                      "decorators": [],
                      "name": "foo",
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
                "start": 2352,
                "end": 2365,
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2407,
            "end": 2463,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2407,
              "end": 2462,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2422,
                  "end": 2440,
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrayExpression",
                  "start": 2442,
                  "end": 2461,
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2443,
                      "end": 2460,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 2452,
                        "end": 2460,
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 2452,
                          "end": 2454,
                          "raw": "\"\"",
                          "value": ""
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2457,
                          "end": 2460,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2444,
                          "end": 2447,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2407,
                "end": 2421,
                "decorators": [],
                "name": "createElement2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1774,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2479,
      "end": 2513,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2484,
        "end": 2492,
        "decorators": [],
        "name": "InnerBox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2498,
        "end": 2513,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2502,
            "end": 2511,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2502,
              "end": 2507,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2507,
              "end": 2510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2509,
                "end": 2510,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2509,
                  "end": 2510,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2492,
        "end": 2495,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2493,
            "end": 2494,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2493,
              "end": 2494,
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2515,
      "end": 2559,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2520,
        "end": 2528,
        "decorators": [],
        "name": "OuterBox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2534,
        "end": 2558,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2538,
            "end": 2556,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2538,
              "end": 2543,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2543,
              "end": 2556,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2545,
                "end": 2556,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2553,
                  "end": 2556,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2554,
                      "end": 2555,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2554,
                        "end": 2555,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2545,
                  "end": 2553,
                  "decorators": [],
                  "name": "InnerBox",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2528,
        "end": 2531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2529,
            "end": 2530,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2529,
              "end": 2530,
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2561,
      "end": 2674,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2566,
        "end": 2589,
        "decorators": [],
        "name": "BoxConsumerFromOuterBox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2597,
        "end": 2673,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2597,
          "end": 2598,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2597,
            "end": 2598,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2607,
          "end": 2624,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2615,
            "end": 2624,
            "params": [
              {
                "type": "TSInferType",
                "start": 2616,
                "end": 2623,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2622,
                  "end": 2623,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2622,
                    "end": 2623,
                    "decorators": [],
                    "name": "U",
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
            "start": 2607,
            "end": 2615,
            "decorators": [],
            "name": "OuterBox",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2668,
          "end": 2673
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 2633,
          "end": 2659,
          "params": [
            {
              "type": "Identifier",
              "start": 2634,
              "end": 2650,
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2637,
                "end": 2650,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2639,
                  "end": 2650,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2647,
                    "end": 2650,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2648,
                        "end": 2649,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2648,
                          "end": 2649,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2639,
                    "end": 2647,
                    "decorators": [],
                    "name": "InnerBox",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2652,
            "end": 2659,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2655,
              "end": 2659
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2589,
        "end": 2592,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2590,
            "end": 2591,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2590,
              "end": 2591,
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
    {
      "type": "TSDeclareFunction",
      "start": 2676,
      "end": 2772,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2711,
        "decorators": [],
        "name": "passContentsToFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2715,
          "end": 2726,
          "decorators": [],
          "name": "outerBox",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2723,
            "end": 2726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2725,
              "end": 2726,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2725,
                "end": 2726,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2728,
          "end": 2764,
          "decorators": [],
          "name": "consumer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2736,
            "end": 2764,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2738,
              "end": 2764,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2761,
                "end": 2764,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2762,
                    "end": 2763,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2762,
                      "end": 2763,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2738,
                "end": 2761,
                "decorators": [],
                "name": "BoxConsumerFromOuterBox",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2765,
        "end": 2771,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2767,
          "end": 2771
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2711,
        "end": 2714,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2712,
            "end": 2713,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2712,
              "end": 2713,
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
    {
      "type": "VariableDeclaration",
      "start": 2774,
      "end": 2823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2788,
          "end": 2822,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2788,
            "end": 2822,
            "decorators": [],
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2804,
              "end": 2822,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2806,
                "end": 2822,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2814,
                  "end": 2822,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2815,
                      "end": 2821
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2806,
                  "end": 2814,
                  "decorators": [],
                  "name": "OuterBox",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2825,
      "end": 2880,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2825,
        "end": 2879,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2844,
            "end": 2860,
            "decorators": [],
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 2862,
            "end": 2878,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 2869,
              "end": 2878,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2869,
                "end": 2872,
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2873,
                "end": 2878,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2862,
                "end": 2865,
                "decorators": [],
                "name": "box",
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
          "start": 2825,
          "end": 2843,
          "decorators": [],
          "name": "passContentsToFunc",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2904,
      "end": 2940,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2909,
        "end": 2915,
        "decorators": [],
        "name": "DooDad",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2918,
        "end": 2938,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2918,
            "end": 2929,
            "literal": {
              "type": "Literal",
              "start": 2918,
              "end": 2929,
              "raw": "'SOMETHING'",
              "value": "SOMETHING"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2932,
            "end": 2938,
            "literal": {
              "type": "Literal",
              "start": 2932,
              "end": 2938,
              "raw": "'ELSE'",
              "value": "ELSE"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2942,
      "end": 3416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2960,
        "end": 3416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2963,
            "end": 3119,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2970,
              "end": 2978,
              "decorators": [],
              "name": "compiles",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2981,
              "end": 3118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3005,
                "end": 3118,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3009,
                    "end": 3115,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3016,
                      "end": 3114,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3039,
                          "end": 3113,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3045,
                            "end": 3113,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 3050,
                                "end": 3091,
                                "alternate": null,
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 3061,
                                  "end": 3091,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3067,
                                      "end": 3086,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 3074,
                                        "end": 3085,
                                        "raw": "'SOMETHING'",
                                        "value": "SOMETHING"
                                      }
                                    }
                                  ]
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 3054,
                                  "end": 3059,
                                  "operator": "<",
                                  "left": {
                                    "type": "Literal",
                                    "start": 3054,
                                    "end": 3055,
                                    "raw": "1",
                                    "value": 1
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 3058,
                                    "end": 3059,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 3095,
                                "end": 3109,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3102,
                                  "end": 3108,
                                  "raw": "'ELSE'",
                                  "value": "ELSE"
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3016,
                        "end": 3038,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 3016,
                          "end": 3033,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3016,
                            "end": 3031,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3016,
                              "end": 3023,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3024,
                              "end": 3031,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3034,
                          "end": 3038,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2984,
                "end": 3001,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2986,
                  "end": 3001,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2993,
                    "end": 3001,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2994,
                        "end": 3000,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2994,
                          "end": 3000,
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2986,
                    "end": 2993,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3121,
            "end": 3230,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3128,
              "end": 3134,
              "decorators": [],
              "name": "doesnt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 3137,
              "end": 3229,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3161,
                "end": 3229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3165,
                    "end": 3226,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3172,
                      "end": 3225,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3195,
                          "end": 3224,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3201,
                            "end": 3224,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3206,
                                "end": 3220,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3213,
                                  "end": 3219,
                                  "raw": "'ELSE'",
                                  "value": "ELSE"
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3172,
                        "end": 3194,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 3172,
                          "end": 3189,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3172,
                            "end": 3187,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3172,
                              "end": 3179,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3180,
                              "end": 3187,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3190,
                          "end": 3194,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3140,
                "end": 3157,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3142,
                  "end": 3157,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3149,
                    "end": 3157,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3150,
                        "end": 3156,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3150,
                          "end": 3156,
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3142,
                    "end": 3149,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3232,
            "end": 3414,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3239,
              "end": 3268,
              "decorators": [],
              "name": "slightlyDifferentErrorMessage",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 3271,
              "end": 3413,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3295,
                "end": 3413,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3299,
                    "end": 3410,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3306,
                      "end": 3409,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3329,
                          "end": 3408,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3335,
                            "end": 3408,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 3340,
                                "end": 3381,
                                "alternate": null,
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 3351,
                                  "end": 3381,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3357,
                                      "end": 3376,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 3364,
                                        "end": 3375,
                                        "raw": "'SOMETHING'",
                                        "value": "SOMETHING"
                                      }
                                    }
                                  ]
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 3344,
                                  "end": 3349,
                                  "operator": "<",
                                  "left": {
                                    "type": "Literal",
                                    "start": 3344,
                                    "end": 3345,
                                    "raw": "1",
                                    "value": 1
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 3348,
                                    "end": 3349,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 3385,
                                "end": 3404,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3392,
                                  "end": 3403,
                                  "raw": "'SOMETHING'",
                                  "value": "SOMETHING"
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3306,
                        "end": 3328,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 3306,
                          "end": 3323,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3306,
                            "end": 3321,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3306,
                              "end": 3313,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3314,
                              "end": 3321,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3324,
                          "end": 3328,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3274,
                "end": 3291,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3276,
                  "end": 3291,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3283,
                    "end": 3291,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3284,
                        "end": 3290,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3284,
                          "end": 3290,
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2948,
        "end": 2959,
        "decorators": [],
        "name": "Interesting",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3440,
      "end": 3482,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3457,
        "end": 3463,
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3467,
          "end": 3477,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3468,
            "end": 3477,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3470,
              "end": 3477,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3473,
                "end": 3477,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3476,
                  "end": 3477,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3476,
                    "end": 3477,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3478,
        "end": 3481,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3480,
          "end": 3481,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3480,
            "end": 3481,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3463,
        "end": 3466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3464,
            "end": 3465,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3464,
              "end": 3465,
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
    {
      "type": "VariableDeclaration",
      "start": 3484,
      "end": 3520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3488,
          "end": 3519,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3488,
            "end": 3501,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3490,
              "end": 3501,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3492,
                "end": 3501,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3492,
                    "end": 3493,
                    "literal": {
                      "type": "Literal",
                      "start": 3492,
                      "end": 3493,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3496,
                    "end": 3497,
                    "literal": {
                      "type": "Literal",
                      "start": 3496,
                      "end": 3497,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3500,
                    "end": 3501,
                    "literal": {
                      "type": "Literal",
                      "start": 3500,
                      "end": 3501,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3504,
            "end": 3519,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3511,
                "end": 3518,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 3517,
                  "end": 3518,
                  "raw": "1",
                  "value": 1
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3504,
              "end": 3510,
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 3544,
      "end": 3613,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3561,
        "end": 3574,
        "decorators": [],
        "name": "assignPartial",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3578,
          "end": 3587,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3584,
            "end": 3587,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3586,
              "end": 3587,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3586,
                "end": 3587,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3589,
          "end": 3608,
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3596,
            "end": 3608,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3598,
              "end": 3608,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3605,
                "end": 3608,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3606,
                    "end": 3607,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3606,
                      "end": 3607,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3598,
                "end": 3605,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3609,
        "end": 3612,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3611,
          "end": 3612,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3611,
            "end": 3612,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3574,
        "end": 3577,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3575,
            "end": 3576,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3575,
              "end": 3576,
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
    {
      "type": "VariableDeclaration",
      "start": 3615,
      "end": 3650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3619,
          "end": 3650,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3619,
            "end": 3622,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3625,
            "end": 3650,
            "properties": [
              {
                "type": "Property",
                "start": 3629,
                "end": 3648,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3629,
                  "end": 3632,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 3632,
                  "end": 3648,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3646,
                    "end": 3648,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3633,
                      "end": 3644,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3636,
                        "end": 3644,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3638,
                          "end": 3644
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3652,
      "end": 3692,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3652,
        "end": 3691,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3666,
            "end": 3669,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 3671,
            "end": 3690,
            "properties": [
              {
                "type": "Property",
                "start": 3673,
                "end": 3688,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3673,
                  "end": 3676,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 3676,
                  "end": 3688,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3686,
                    "end": 3688,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 3677,
                      "end": 3684,
                      "argument": {
                        "type": "Identifier",
                        "start": 3680,
                        "end": 3684,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3652,
          "end": 3665,
          "decorators": [],
          "name": "assignPartial",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
