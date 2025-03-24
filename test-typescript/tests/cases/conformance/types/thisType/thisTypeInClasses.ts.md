__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 854,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 22,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 18,
                "end": 22
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 66,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 66,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 64,
                    "argument": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 63,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 33,
                      "end": 37
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 40,
                  "end": 44
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
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 105,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 85,
            "end": 103,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 86,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 102,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 98,
                "end": 102
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 135,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 134,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
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
            "start": 140,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 147,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 143,
                "end": 147
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
      "start": 152,
      "end": 396,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 396,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 177,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 170,
                "end": 176,
                "elementType": {
                  "type": "TSThisType",
                  "start": 170,
                  "end": 174
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 198,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 185,
                "end": 197,
                "elementTypes": [
                  {
                    "type": "TSThisType",
                    "start": 186,
                    "end": 190
                  },
                  {
                    "type": "TSThisType",
                    "start": 192,
                    "end": 196
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 218,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 217,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 206,
                "end": 217,
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 206,
                    "end": 210
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 217,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 217,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 223,
            "end": 238,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 237,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 226,
                "end": 237,
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 226,
                    "end": 230
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 233,
                    "end": 237,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 237,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 257,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 256,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 249,
                "end": 253
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 283,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 282,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 265,
                "end": 282,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 273,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 273,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 269,
                        "end": 273
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 282,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 278,
                    "end": 282
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 288,
            "end": 313,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 312,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 291,
                "end": 312,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 296,
                    "end": 303,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 299,
                        "end": 303
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 305,
                  "end": 312,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 308,
                    "end": 312
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 331,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 330,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 324,
                  "end": 330,
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 325,
                      "end": 329
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 324,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 336,
            "end": 364,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 363,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 342,
                  "end": 363,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 343,
                      "end": 362,
                      "types": [
                        {
                          "type": "TSThisType",
                          "start": 343,
                          "end": 347
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 351,
                          "end": 361,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 354,
                            "end": 361,
                            "typeAnnotation": {
                              "type": "TSThisType",
                              "start": 357,
                              "end": 361
                            }
                          },
                          "typeParameters": null
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 342,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 369,
            "end": 394,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 393,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 372,
                "end": 393,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 373,
                    "end": 379,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 374,
                      "end": 379,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 376,
                        "end": 379
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 393,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 384,
                    "end": 393,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 385,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 389,
                        "end": 393
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 398,
      "end": 453,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 415,
        "end": 453,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 421,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 428,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 424,
                "end": 428
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 451,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 435,
              "end": 451,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 436,
                  "end": 443,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 439,
                      "end": 443
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 444,
                "end": 450,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 446,
                  "end": 450
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 414,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 854,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 464,
        "end": 854,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 470,
            "end": 764,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 473,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 764,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 476,
                "end": 764,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 486,
                    "end": 519,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 490,
                        "end": 518,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 490,
                          "end": 492,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 495,
                          "end": 518,
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "start": 514,
                            "end": 518
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 496,
                              "end": 503,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 497,
                                "end": 503,
                                "typeAnnotation": {
                                  "type": "TSThisType",
                                  "start": 499,
                                  "end": 503
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 504,
                            "end": 510,
                            "typeAnnotation": {
                              "type": "TSThisType",
                              "start": 506,
                              "end": 510
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 528,
                    "end": 555,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 532,
                        "end": 554,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 534,
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 537,
                          "end": 554,
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "start": 550,
                            "end": 554
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 538,
                              "end": 545,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 539,
                                "end": 545,
                                "typeAnnotation": {
                                  "type": "TSThisType",
                                  "start": 541,
                                  "end": 545
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 564,
                    "end": 604,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 568,
                        "end": 603,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 570,
                          "decorators": [],
                          "name": "f3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 573,
                          "end": 603,
                          "async": false,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 586,
                            "end": 603,
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "start": 599,
                              "end": 603
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 587,
                                "end": 594,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 588,
                                  "end": 594,
                                  "typeAnnotation": {
                                    "type": "TSThisType",
                                    "start": 590,
                                    "end": 594
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 574,
                              "end": 581,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 575,
                                "end": 581,
                                "typeAnnotation": {
                                  "type": "TSThisType",
                                  "start": 577,
                                  "end": 581
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 613,
                    "end": 758,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 617,
                        "end": 758,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 619,
                          "decorators": [],
                          "name": "f4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 622,
                          "end": 758,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 635,
                            "end": 758,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 649,
                                "end": 720,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 653,
                                    "end": 720,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 653,
                                      "end": 654,
                                      "decorators": [],
                                      "name": "g",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 657,
                                      "end": 720,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 670,
                                        "end": 720,
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "start": 688,
                                            "end": 706,
                                            "argument": {
                                              "type": "ArrowFunctionExpression",
                                              "start": 695,
                                              "end": 705,
                                              "async": false,
                                              "body": {
                                                "type": "ThisExpression",
                                                "start": 701,
                                                "end": 705
                                              },
                                              "expression": true,
                                              "generator": false,
                                              "id": null,
                                              "params": [],
                                              "returnType": null,
                                              "typeParameters": null
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
                                          "start": 658,
                                          "end": 665,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 659,
                                            "end": 665,
                                            "typeAnnotation": {
                                              "type": "TSThisType",
                                              "start": 661,
                                              "end": 665
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "let"
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 733,
                                "end": 748,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 740,
                                  "end": 747,
                                  "arguments": [
                                    {
                                      "type": "ThisExpression",
                                      "start": 742,
                                      "end": 746
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 740,
                                    "end": 741,
                                    "decorators": [],
                                    "name": "g",
                                    "optional": false,
                                    "typeAnnotation": null
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 623,
                              "end": 630,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 624,
                                "end": 630,
                                "typeAnnotation": {
                                  "type": "TSThisType",
                                  "start": 626,
                                  "end": 630
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 769,
            "end": 852,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 769,
              "end": 772,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 772,
              "end": 852,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 775,
                "end": 852,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 785,
                    "end": 810,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 789,
                        "end": 809,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 789,
                          "end": 791,
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 794,
                          "end": 809,
                          "expression": {
                            "type": "Identifier",
                            "start": 800,
                            "end": 809,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 795,
                            "end": 799
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 819,
                    "end": 846,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 823,
                        "end": 845,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 825,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 828,
                          "end": 845,
                          "expression": {
                            "type": "Identifier",
                            "start": 828,
                            "end": 837,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 841,
                            "end": 845
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 463,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
