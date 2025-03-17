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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 17,
        "end": 49,
        "id": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 28,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "a",
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 49,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 38,
              "end": 47,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 43,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 43,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 45,
                  "end": 46,
                  "typeName": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "a",
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
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "name": "fn",
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
          "start": 66,
          "end": 78,
          "name": "values",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 75,
                "end": 78,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "a",
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
        {
          "type": "Identifier",
          "start": 80,
          "end": 88,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 88,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "a",
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
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 100,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "a",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 96,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        }
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
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 150,
            "name": "handlers",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 125,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 126,
                      "end": 149,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 127,
                          "end": 140,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 140,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 134,
                              "end": 140
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 154,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 155,
            "end": 163,
            "name": "handlers",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 186,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 165,
                "end": 170,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 174,
              "end": 186,
              "callee": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "name": "alert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 201,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 220,
        "name": "BaseProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 220,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 224,
        "end": 276,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 245,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 241,
              "name": "initialValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
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
            "start": 248,
            "end": 274,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 258,
              "name": "nextValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 273,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 260,
                "end": 273,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "name": "cur",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 264,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 266,
                        "end": 267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "name": "T",
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
                  "start": 269,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 272,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
    {
      "type": "ClassDeclaration",
      "start": 277,
      "end": 340,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 300,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 340,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 328,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 317,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 317,
              "end": 328,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 318,
                  "end": 326,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 326,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 325,
                      "end": 326,
                      "typeName": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "name": "P",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 338,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 334,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 302,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "P",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 371,
        "name": "GenericComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 413,
        "end": 422,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 450,
        "end": 467,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "name": "iv",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 464,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 458,
                "end": 464,
                "typeName": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 464,
                  "name": "Values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 400,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 382,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "name": "Props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 380,
              "end": 382,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 384,
            "end": 399,
            "name": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "name": "Values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 393,
              "end": 399
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "name": "Props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 431,
                "end": 448,
                "typeName": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "name": "BaseProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 440,
                  "end": 448,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 441,
                      "end": 447,
                      "typeName": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "name": "Values",
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
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 536,
      "expression": {
        "type": "NewExpression",
        "start": 469,
        "end": 535,
        "callee": {
          "type": "Identifier",
          "start": 473,
          "end": 489,
          "name": "GenericComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 505,
                  "name": "initialValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 507,
                  "end": 509,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 511,
                "end": 532,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 521,
                  "name": "nextValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 523,
                  "end": 532,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 523,
                      "end": 526,
                      "name": "val",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 530,
                    "end": 532,
                    "value": 12,
                    "raw": "12"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 696,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 583,
        "name": "useStringOrNumber",
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
          "start": 611,
          "end": 615,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 615,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 614,
              "end": 615,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "name": "T",
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
          "type": "Identifier",
          "start": 617,
          "end": 688,
          "name": "useIt",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 634,
                "end": 640
              },
              "trueType": {
                "type": "TSFunctionType",
                "start": 644,
                "end": 663,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 645,
                    "end": 654,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 646,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 648,
                        "end": 654
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              },
              "falseType": {
                "type": "TSFunctionType",
                "start": 668,
                "end": 687,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 669,
                    "end": 678,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 670,
                      "end": 678,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 672,
                        "end": 678
                      }
                    },
                    "decorators": [],
                    "optional": false
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
        "start": 583,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 584,
            "end": 609,
            "name": {
              "type": "Identifier",
              "start": 584,
              "end": 585,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 689,
        "end": 695,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 691,
          "end": 695
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 730,
      "expression": {
        "type": "CallExpression",
        "start": 697,
        "end": 729,
        "callee": {
          "type": "Identifier",
          "start": 697,
          "end": 714,
          "name": "useStringOrNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 715,
            "end": 717,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 719,
            "end": 728,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 719,
                "end": 722,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 726,
              "end": 728,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 743,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 758,
        "name": "ActionType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "name": "P",
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
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 796,
                  "name": "attachPayloadTypeHack",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 803,
                        "end": 808
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 812,
      "end": 903,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 824,
        "name": "Handler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "name": "S",
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
            "start": 828,
            "end": 829,
            "name": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "name": "P",
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
        "start": 833,
        "end": 903,
        "checkType": {
          "type": "TSTypeReference",
          "start": 833,
          "end": 834,
          "typeName": {
            "type": "Identifier",
            "start": 833,
            "end": 834,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 854,
          "end": 869,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 855,
              "end": 863,
              "name": "state",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 860,
                "end": 863,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 862,
                  "end": 863,
                  "typeName": {
                    "type": "Identifier",
                    "start": 862,
                    "end": 863,
                    "name": "S",
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
            "start": 865,
            "end": 869,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 868,
              "end": 869,
              "typeName": {
                "type": "Identifier",
                "start": 868,
                "end": 869,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "falseType": {
          "type": "TSFunctionType",
          "start": 876,
          "end": 903,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 877,
              "end": 885,
              "name": "state",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 882,
                "end": 885,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 884,
                  "end": 885,
                  "typeName": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "name": "S",
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
              "type": "Identifier",
              "start": 887,
              "end": 897,
              "name": "payload",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 894,
                "end": 897,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "name": "P",
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
            "start": 899,
            "end": 903,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 902,
              "end": 903,
              "typeName": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 905,
      "end": 995,
      "id": {
        "type": "Identifier",
        "start": 915,
        "end": 928,
        "name": "ActionHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 928,
        "end": 934,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 929,
            "end": 930,
            "name": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "name": "S",
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
            "start": 932,
            "end": 933,
            "name": {
              "type": "Identifier",
              "start": 932,
              "end": 933,
              "name": "P",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 935,
        "end": 995,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 941,
            "end": 966,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 941,
              "end": 951,
              "name": "actionType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 951,
              "end": 966,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 953,
                "end": 966,
                "typeName": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 963,
                  "name": "ActionType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 963,
                  "end": 966,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 964,
                      "end": 965,
                      "typeName": {
                        "type": "Identifier",
                        "start": 964,
                        "end": 965,
                        "name": "P",
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 971,
            "end": 993,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 971,
              "end": 978,
              "name": "handler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 978,
              "end": 993,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 980,
                "end": 993,
                "typeName": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 987,
                  "name": "Handler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 987,
                  "end": 993,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 988,
                      "end": 989,
                      "typeName": {
                        "type": "Identifier",
                        "start": 988,
                        "end": 989,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 991,
                      "end": 992,
                      "typeName": {
                        "type": "Identifier",
                        "start": 991,
                        "end": 992,
                        "name": "P",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 997,
      "end": 1099,
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1021,
        "name": "handler",
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
          "start": 1028,
          "end": 1053,
          "name": "actionType",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1038,
            "end": 1053,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1040,
              "end": 1053,
              "typeName": {
                "type": "Identifier",
                "start": 1040,
                "end": 1050,
                "name": "ActionType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1050,
                "end": 1053,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1051,
                    "end": 1052,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1052,
                      "name": "P",
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
        {
          "type": "Identifier",
          "start": 1055,
          "end": 1077,
          "name": "handler",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1062,
            "end": 1077,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1064,
              "end": 1077,
              "typeName": {
                "type": "Identifier",
                "start": 1064,
                "end": 1071,
                "name": "Handler",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1071,
                "end": 1077,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1072,
                    "end": 1073,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1072,
                      "end": 1073,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1075,
                    "end": 1076,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1075,
                      "end": 1076,
                      "name": "P",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1021,
        "end": 1027,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1022,
            "end": 1023,
            "name": {
              "type": "Identifier",
              "start": 1022,
              "end": 1023,
              "name": "S",
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
            "start": 1025,
            "end": 1026,
            "name": {
              "type": "Identifier",
              "start": 1025,
              "end": 1026,
              "name": "P",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1078,
        "end": 1099,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1080,
          "end": 1099,
          "typeName": {
            "type": "Identifier",
            "start": 1080,
            "end": 1093,
            "name": "ActionHandler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1093,
            "end": 1099,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1094,
                "end": 1095,
                "typeName": {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1095,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1097,
                "end": 1098,
                "typeName": {
                  "type": "Identifier",
                  "start": 1097,
                  "end": 1098,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1101,
      "end": 1222,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1131,
        "name": "createReducer",
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
          "start": 1144,
          "end": 1159,
          "name": "defaultState",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1156,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1159,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "name": "S",
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
          "start": 1169,
          "end": 1211,
          "argument": {
            "type": "Identifier",
            "start": 1172,
            "end": 1186,
            "name": "actionHandlers",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1201,
                  "name": "ActionHandler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1201,
                  "end": 1209,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1202,
                      "end": 1203,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1203,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1205,
                      "end": 1208
                    }
                  ]
                }
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1131,
        "end": 1134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1132,
            "end": 1133,
            "name": {
              "type": "Identifier",
              "start": 1132,
              "end": 1133,
              "name": "S",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1217,
        "end": 1222,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1219,
          "end": 1222
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1224,
      "end": 1264,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1242,
        "name": "AppState",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1243,
        "end": 1264,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1249,
            "end": 1262,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1249,
              "end": 1254,
              "name": "dummy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1254,
              "end": 1262,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1256,
                "end": 1262
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
      "type": "VariableDeclaration",
      "start": 1266,
      "end": 1314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1314,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1294,
            "name": "defaultState",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1284,
              "end": 1294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1286,
                "end": 1294,
                "typeName": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1294,
                  "name": "AppState",
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
            "start": 1297,
            "end": 1314,
            "properties": [
              {
                "type": "Property",
                "start": 1303,
                "end": 1312,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1308,
                  "name": "dummy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1310,
                  "end": 1312,
                  "value": "",
                  "raw": "''"
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
      "type": "VariableDeclaration",
      "start": 1316,
      "end": 1429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1322,
          "end": 1377,
          "id": {
            "type": "Identifier",
            "start": 1322,
            "end": 1357,
            "name": "NON_VOID_ACTION",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1337,
              "end": 1357,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1339,
                "end": 1357,
                "typeName": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1349,
                  "name": "ActionType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1360,
            "end": 1377,
            "value": "NON_VOID_ACTION",
            "raw": "'NON_VOID_ACTION'"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1384,
          "end": 1429,
          "id": {
            "type": "Identifier",
            "start": 1384,
            "end": 1413,
            "name": "VOID_ACTION",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1395,
              "end": 1413,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1397,
                "end": 1413,
                "typeName": {
                  "type": "Identifier",
                  "start": 1397,
                  "end": 1407,
                  "name": "ActionType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1416,
            "end": 1429,
            "value": "VOID_ACTION",
            "raw": "'VOID_ACTION'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1431,
      "end": 1564,
      "expression": {
        "type": "CallExpression",
        "start": 1431,
        "end": 1564,
        "callee": {
          "type": "Identifier",
          "start": 1431,
          "end": 1444,
          "name": "createReducer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1450,
            "end": 1462,
            "name": "defaultState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "CallExpression",
            "start": 1468,
            "end": 1520,
            "callee": {
              "type": "Identifier",
              "start": 1468,
              "end": 1475,
              "name": "handler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1476,
                "end": 1491,
                "name": "NON_VOID_ACTION",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1493,
                "end": 1519,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1499,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1501,
                    "end": 1509,
                    "name": "_payload",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1519,
                  "name": "state",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          {
            "type": "CallExpression",
            "start": 1526,
            "end": 1562,
            "callee": {
              "type": "Identifier",
              "start": 1526,
              "end": 1533,
              "name": "handler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1534,
                "end": 1545,
                "name": "VOID_ACTION",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1547,
                "end": 1561,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1552,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 1556,
                  "end": 1561,
                  "name": "state",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1577,
      "end": 1642,
      "id": {
        "type": "Identifier",
        "start": 1582,
        "end": 1583,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1586,
        "end": 1641,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1590,
            "end": 1613,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1590,
              "end": 1591,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1591,
              "end": 1612,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1593,
                "end": 1612,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1594,
                    "end": 1603,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1595,
                      "end": 1603,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1597,
                        "end": 1603
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1616,
            "end": 1639,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1616,
              "end": 1617,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1617,
              "end": 1638,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1619,
                "end": 1638,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1629,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1621,
                      "end": 1629,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1623,
                        "end": 1629
                      }
                    },
                    "decorators": [],
                    "optional": false
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1644,
      "end": 1710,
      "id": {
        "type": "Identifier",
        "start": 1649,
        "end": 1650,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1653,
        "end": 1709,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1657,
            "end": 1707,
            "key": {
              "type": "Identifier",
              "start": 1657,
              "end": 1659,
              "name": "on",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1659,
              "end": 1678,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1660,
                  "end": 1677,
                  "name": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1661,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1670,
                    "end": 1677,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1676,
                      "end": 1677,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1676,
                        "end": 1677,
                        "name": "R",
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1679,
                "end": 1683,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1680,
                  "end": 1683,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1682,
                    "end": 1683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1683,
                      "name": "P",
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
                "type": "Identifier",
                "start": 1685,
                "end": 1699,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1693,
                  "end": 1699,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 1695,
                    "end": 1699,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1695,
                      "end": 1696,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1695,
                        "end": 1696,
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1697,
                      "end": 1698,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1697,
                        "end": 1698,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1724,
            "end": 1728,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1725,
              "end": 1728,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1727,
                "end": 1728,
                "typeName": {
                  "type": "Identifier",
                  "start": 1727,
                  "end": 1728,
                  "name": "O",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1730,
      "end": 1749,
      "expression": {
        "type": "CallExpression",
        "start": 1730,
        "end": 1748,
        "callee": {
          "type": "MemberExpression",
          "start": 1730,
          "end": 1734,
          "object": {
            "type": "Identifier",
            "start": 1730,
            "end": 1731,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1732,
            "end": 1734,
            "name": "on",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1735,
            "end": 1738,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1740,
            "end": 1747,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 1745,
              "end": 1747,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1762,
      "end": 2466,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1774,
        "name": "N1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1775,
        "end": 2466,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1778,
            "end": 1834,
            "id": {
              "type": "Identifier",
              "start": 1792,
              "end": 1801,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1805,
              "end": 1834,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1810,
                  "end": 1832,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1810,
                    "end": 1821,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1821,
                    "end": 1832,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1822,
                        "end": 1830,
                        "name": "props",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1827,
                          "end": 1830,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1829,
                            "end": 1830,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1829,
                              "end": 1830,
                              "name": "P",
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
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1801,
              "end": 1804,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1802,
                  "end": 1803,
                  "name": {
                    "type": "Identifier",
                    "start": 1802,
                    "end": 1803,
                    "name": "P",
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
            "implements": [],
            "abstract": false,
            "declare": true,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1840,
            "end": 1908,
            "id": {
              "type": "Identifier",
              "start": 1850,
              "end": 1864,
              "name": "ComponentClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1864,
              "end": 1872,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1865,
                  "end": 1871,
                  "name": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1866,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 1869,
                    "end": 1871,
                    "members": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 1873,
              "end": 1908,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1877,
                  "end": 1906,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1882,
                      "end": 1890,
                      "name": "props",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1887,
                        "end": 1890,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1889,
                          "end": 1890,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1889,
                            "end": 1890,
                            "name": "P",
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
                    "start": 1891,
                    "end": 1905,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1893,
                      "end": 1905,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1893,
                        "end": 1902,
                        "name": "Component",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1902,
                        "end": 1905,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1903,
                            "end": 1904,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1903,
                              "end": 1904,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1910,
            "end": 2027,
            "id": {
              "type": "Identifier",
              "start": 1915,
              "end": 1936,
              "name": "CreateElementChildren",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 1937,
                    "end": 1938,
                    "name": "P",
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
              "start": 1944,
              "end": 2026,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1944,
                "end": 1945,
                "typeName": {
                  "type": "Identifier",
                  "start": 1944,
                  "end": 1945,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1956,
                      "end": 1964,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": {
                            "type": "Identifier",
                            "start": 1973,
                            "end": 1974,
                            "name": "C",
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
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 1981,
                "end": 2014,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1981,
                  "end": 1982,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1981,
                    "end": 1982,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 2003,
                  "end": 2004,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2003,
                    "end": 2004,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSArrayType",
                  "start": 2011,
                  "end": 2014,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 2011,
                    "end": 2012,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2011,
                      "end": 2012,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 2019,
                "end": 2026
              }
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 2029,
            "end": 2149,
            "id": {
              "type": "Identifier",
              "start": 2046,
              "end": 2059,
              "name": "createElement",
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
                "start": 2077,
                "end": 2100,
                "name": "type",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2081,
                  "end": 2100,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2083,
                    "end": 2100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2083,
                      "end": 2097,
                      "name": "ComponentClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2097,
                      "end": 2100,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2098,
                          "end": 2099,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2098,
                            "end": 2099,
                            "name": "P",
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
              {
                "type": "RestElement",
                "start": 2104,
                "end": 2141,
                "argument": {
                  "type": "Identifier",
                  "start": 2107,
                  "end": 2115,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2117,
                      "end": 2138,
                      "name": "CreateElementChildren",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2138,
                      "end": 2141,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2139,
                          "end": 2140,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2139,
                            "end": 2140,
                            "name": "P",
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
                "value": null
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2059,
              "end": 2073,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2060,
                  "end": 2072,
                  "name": {
                    "type": "Identifier",
                    "start": 2060,
                    "end": 2061,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 2070,
                    "end": 2072,
                    "members": []
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2143,
              "end": 2148,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 2151,
            "end": 2266,
            "id": {
              "type": "Identifier",
              "start": 2168,
              "end": 2182,
              "name": "createElement2",
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
                "start": 2200,
                "end": 2223,
                "name": "type",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2204,
                  "end": 2223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2206,
                    "end": 2223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2206,
                      "end": 2220,
                      "name": "ComponentClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2220,
                      "end": 2223,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2221,
                          "end": 2222,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2221,
                            "end": 2222,
                            "name": "P",
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
              {
                "type": "Identifier",
                "start": 2227,
                "end": 2258,
                "name": "child",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2232,
                  "end": 2258,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2234,
                    "end": 2258,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2234,
                      "end": 2255,
                      "name": "CreateElementChildren",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2255,
                      "end": 2258,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2256,
                          "end": 2257,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2256,
                            "end": 2257,
                            "name": "P",
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
              }
            ],
            "body": null,
            "declare": true,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2182,
              "end": 2196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2183,
                  "end": 2195,
                  "name": {
                    "type": "Identifier",
                    "start": 2183,
                    "end": 2184,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 2193,
                    "end": 2195,
                    "members": []
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2260,
              "end": 2265,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2262,
                "end": 2265
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2268,
            "end": 2350,
            "id": {
              "type": "Identifier",
              "start": 2274,
              "end": 2292,
              "name": "InferFunctionTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 2301,
              "end": 2310,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 2348,
              "end": 2350,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2312,
                        "end": 2320,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2320,
                        "end": 2345,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 2322,
                          "end": 2345,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2334,
                              "name": "foo",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2326,
                                "end": 2334,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2328,
                                  "end": 2334
                                }
                              },
                              "decorators": [],
                              "optional": false
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
          {
            "type": "ExpressionStatement",
            "start": 2352,
            "end": 2405,
            "expression": {
              "type": "CallExpression",
              "start": 2352,
              "end": 2404,
              "callee": {
                "type": "Identifier",
                "start": 2352,
                "end": 2365,
                "name": "createElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2366,
                  "end": 2384,
                  "name": "InferFunctionTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2386,
                  "end": 2403,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2387,
                      "end": 2390,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 2395,
                    "end": 2403,
                    "left": {
                      "type": "Literal",
                      "start": 2395,
                      "end": 2397,
                      "value": "",
                      "raw": "\"\""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 2400,
                      "end": 2403,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2407,
            "end": 2463,
            "expression": {
              "type": "CallExpression",
              "start": 2407,
              "end": 2462,
              "callee": {
                "type": "Identifier",
                "start": 2407,
                "end": 2421,
                "name": "createElement2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2422,
                  "end": 2440,
                  "name": "InferFunctionTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2444,
                          "end": 2447,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 2452,
                        "end": 2460,
                        "left": {
                          "type": "Literal",
                          "start": 2452,
                          "end": 2454,
                          "value": "",
                          "raw": "\"\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 2457,
                          "end": 2460,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2479,
      "end": 2513,
      "id": {
        "type": "Identifier",
        "start": 2484,
        "end": 2492,
        "name": "InnerBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2493,
              "end": 2494,
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
        "start": 2498,
        "end": 2513,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2502,
            "end": 2511,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2502,
              "end": 2507,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2507,
              "end": 2510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2509,
                "end": 2510,
                "typeName": {
                  "type": "Identifier",
                  "start": 2509,
                  "end": 2510,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2515,
      "end": 2559,
      "id": {
        "type": "Identifier",
        "start": 2520,
        "end": 2528,
        "name": "OuterBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2529,
              "end": 2530,
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
        "start": 2534,
        "end": 2558,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2538,
            "end": 2556,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2538,
              "end": 2543,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2543,
              "end": 2556,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2545,
                "end": 2556,
                "typeName": {
                  "type": "Identifier",
                  "start": 2545,
                  "end": 2553,
                  "name": "InnerBox",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2553,
                  "end": 2556,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2554,
                      "end": 2555,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2554,
                        "end": 2555,
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
      "start": 2561,
      "end": 2674,
      "id": {
        "type": "Identifier",
        "start": 2566,
        "end": 2589,
        "name": "BoxConsumerFromOuterBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2590,
              "end": 2591,
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
        "start": 2597,
        "end": 2673,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2597,
          "end": 2598,
          "typeName": {
            "type": "Identifier",
            "start": 2597,
            "end": 2598,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2607,
          "end": 2624,
          "typeName": {
            "type": "Identifier",
            "start": 2607,
            "end": 2615,
            "name": "OuterBox",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 2622,
                    "end": 2623,
                    "name": "U",
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
            ]
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 2633,
          "end": 2659,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2634,
              "end": 2650,
              "name": "box",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2637,
                "end": 2650,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2639,
                  "end": 2650,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2639,
                    "end": 2647,
                    "name": "InnerBox",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2647,
                    "end": 2650,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2648,
                        "end": 2649,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2648,
                          "end": 2649,
                          "name": "U",
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
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2668,
          "end": 2673
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2676,
      "end": 2772,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2711,
        "name": "passContentsToFunc",
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
          "start": 2715,
          "end": 2726,
          "name": "outerBox",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2723,
            "end": 2726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2725,
              "end": 2726,
              "typeName": {
                "type": "Identifier",
                "start": 2725,
                "end": 2726,
                "name": "T",
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
          "type": "Identifier",
          "start": 2728,
          "end": 2764,
          "name": "consumer",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2736,
            "end": 2764,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2738,
              "end": 2764,
              "typeName": {
                "type": "Identifier",
                "start": 2738,
                "end": 2761,
                "name": "BoxConsumerFromOuterBox",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2761,
                "end": 2764,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2762,
                    "end": 2763,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2762,
                      "end": 2763,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2711,
        "end": 2714,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2712,
            "end": 2713,
            "name": {
              "type": "Identifier",
              "start": 2712,
              "end": 2713,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2765,
        "end": 2771,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2767,
          "end": 2771
        }
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
          "id": {
            "type": "Identifier",
            "start": 2788,
            "end": 2822,
            "name": "outerBoxOfString",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2804,
              "end": 2822,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2806,
                "end": 2822,
                "typeName": {
                  "type": "Identifier",
                  "start": 2806,
                  "end": 2814,
                  "name": "OuterBox",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2825,
      "end": 2880,
      "expression": {
        "type": "CallExpression",
        "start": 2825,
        "end": 2879,
        "callee": {
          "type": "Identifier",
          "start": 2825,
          "end": 2843,
          "name": "passContentsToFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2844,
            "end": 2860,
            "name": "outerBoxOfString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 2862,
            "end": 2878,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2862,
                "end": 2865,
                "name": "box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 2869,
              "end": 2878,
              "object": {
                "type": "Identifier",
                "start": 2869,
                "end": 2872,
                "name": "box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2873,
                "end": 2878,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2904,
      "end": 2940,
      "id": {
        "type": "Identifier",
        "start": 2909,
        "end": 2915,
        "name": "DooDad",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "SOMETHING",
              "raw": "'SOMETHING'"
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
              "value": "ELSE",
              "raw": "'ELSE'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2942,
      "end": 3416,
      "id": {
        "type": "Identifier",
        "start": 2948,
        "end": 2959,
        "name": "Interesting",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2960,
        "end": 3416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2963,
            "end": 3119,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2970,
              "end": 2978,
              "name": "compiles",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2981,
              "end": 3118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3016,
                        "end": 3038,
                        "object": {
                          "type": "CallExpression",
                          "start": 3016,
                          "end": 3033,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3016,
                            "end": 3031,
                            "object": {
                              "type": "Identifier",
                              "start": 3016,
                              "end": 3023,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3024,
                              "end": 3031,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3034,
                          "end": 3038,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3039,
                          "end": 3113,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3045,
                            "end": 3113,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 3050,
                                "end": 3091,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 3054,
                                  "end": 3059,
                                  "left": {
                                    "type": "Literal",
                                    "start": 3054,
                                    "end": 3055,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "start": 3058,
                                    "end": 3059,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
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
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'"
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 3095,
                                "end": 3109,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3102,
                                  "end": 3108,
                                  "value": "ELSE",
                                  "raw": "'ELSE'"
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2984,
                "end": 3001,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2986,
                  "end": 3001,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2986,
                    "end": 2993,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2993,
                    "end": 3001,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2994,
                        "end": 3000,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2994,
                          "end": 3000,
                          "name": "DooDad",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 3121,
            "end": 3230,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3128,
              "end": 3134,
              "name": "doesnt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 3137,
              "end": 3229,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3172,
                        "end": 3194,
                        "object": {
                          "type": "CallExpression",
                          "start": 3172,
                          "end": 3189,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3172,
                            "end": 3187,
                            "object": {
                              "type": "Identifier",
                              "start": 3172,
                              "end": 3179,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3180,
                              "end": 3187,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3190,
                          "end": 3194,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3195,
                          "end": 3224,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": "ELSE",
                                  "raw": "'ELSE'"
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3140,
                "end": 3157,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3142,
                  "end": 3157,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3142,
                    "end": 3149,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3149,
                    "end": 3157,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3150,
                        "end": 3156,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3150,
                          "end": 3156,
                          "name": "DooDad",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 3232,
            "end": 3414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3239,
              "end": 3268,
              "name": "slightlyDifferentErrorMessage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 3271,
              "end": 3413,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3306,
                        "end": 3328,
                        "object": {
                          "type": "CallExpression",
                          "start": 3306,
                          "end": 3323,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3306,
                            "end": 3321,
                            "object": {
                              "type": "Identifier",
                              "start": 3306,
                              "end": 3313,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3314,
                              "end": 3321,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3324,
                          "end": 3328,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 3329,
                          "end": 3408,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3335,
                            "end": 3408,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 3340,
                                "end": 3381,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 3344,
                                  "end": 3349,
                                  "left": {
                                    "type": "Literal",
                                    "start": 3344,
                                    "end": 3345,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "start": 3348,
                                    "end": 3349,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
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
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'"
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 3385,
                                "end": 3404,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3392,
                                  "end": 3403,
                                  "value": "SOMETHING",
                                  "raw": "'SOMETHING'"
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3274,
                "end": 3291,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3276,
                  "end": 3291,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3283,
                    "end": 3291,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3284,
                        "end": 3290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3284,
                          "end": 3290,
                          "name": "DooDad",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3440,
      "end": 3482,
      "id": {
        "type": "Identifier",
        "start": 3457,
        "end": 3463,
        "name": "invoke",
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
          "start": 3467,
          "end": 3477,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3468,
            "end": 3477,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3470,
              "end": 3477,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3473,
                "end": 3477,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3476,
                  "end": 3477,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3476,
                    "end": 3477,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 3463,
        "end": 3466,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3464,
            "end": 3465,
            "name": {
              "type": "Identifier",
              "start": 3464,
              "end": 3465,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3478,
        "end": 3481,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3480,
          "end": 3481,
          "typeName": {
            "type": "Identifier",
            "start": 3480,
            "end": 3481,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 3488,
            "end": 3501,
            "name": "xx",
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
                      "value": 0,
                      "raw": "0"
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
                      "value": 1,
                      "raw": "1"
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
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3504,
            "end": 3519,
            "callee": {
              "type": "Identifier",
              "start": 3504,
              "end": 3510,
              "name": "invoke",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 3511,
                "end": 3518,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Literal",
                  "start": 3517,
                  "end": 3518,
                  "value": 1,
                  "raw": "1"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3544,
      "end": 3613,
      "id": {
        "type": "Identifier",
        "start": 3561,
        "end": 3574,
        "name": "assignPartial",
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
          "start": 3578,
          "end": 3587,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3584,
            "end": 3587,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3586,
              "end": 3587,
              "typeName": {
                "type": "Identifier",
                "start": 3586,
                "end": 3587,
                "name": "T",
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
          "type": "Identifier",
          "start": 3589,
          "end": 3608,
          "name": "partial",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3596,
            "end": 3608,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3598,
              "end": 3608,
              "typeName": {
                "type": "Identifier",
                "start": 3598,
                "end": 3605,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3605,
                "end": 3608,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3606,
                    "end": 3607,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3606,
                      "end": 3607,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3574,
        "end": 3577,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3575,
            "end": 3576,
            "name": {
              "type": "Identifier",
              "start": 3575,
              "end": 3576,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3609,
        "end": 3612,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3611,
          "end": 3612,
          "typeName": {
            "type": "Identifier",
            "start": 3611,
            "end": 3612,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 3619,
            "end": 3622,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3629,
                  "end": 3632,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 3632,
                  "end": 3648,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3633,
                      "end": 3644,
                      "name": "bar",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3636,
                        "end": 3644,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3638,
                          "end": 3644
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3646,
                    "end": 3648,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3652,
      "end": 3692,
      "expression": {
        "type": "CallExpression",
        "start": 3652,
        "end": 3691,
        "callee": {
          "type": "Identifier",
          "start": 3652,
          "end": 3665,
          "name": "assignPartial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3666,
            "end": 3669,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3673,
                  "end": 3676,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 3676,
                  "end": 3688,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 3677,
                      "end": 3684,
                      "argument": {
                        "type": "Identifier",
                        "start": 3680,
                        "end": 3684,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 3686,
                    "end": 3688,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
