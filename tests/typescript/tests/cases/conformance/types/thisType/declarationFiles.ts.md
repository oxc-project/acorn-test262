__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 699,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 97,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 97,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 66,
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 66,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 95,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 95,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 90,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 86,
                      "end": 90
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 95,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 134,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 134,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 114,
            "end": 132,
            "parameters": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 118,
                    "end": 124
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 131,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 127,
                "end": 131
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 149,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 153,
        "end": 179,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 159,
            "end": 164,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
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
            "start": 169,
            "end": 177,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 176,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 172,
                "end": 176
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
      "start": 181,
      "end": 425,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 189,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 425,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 196,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 199,
                "end": 205,
                "elementType": {
                  "type": "TSThisType",
                  "start": 199,
                  "end": 203
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 214,
                "end": 226,
                "elementTypes": [
                  {
                    "type": "TSThisType",
                    "start": 215,
                    "end": 219
                  },
                  {
                    "type": "TSThisType",
                    "start": 221,
                    "end": 225
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 247,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 246,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 235,
                "end": 246,
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 235,
                    "end": 239
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 242,
                    "end": 246,
                    "typeName": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 246,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 252,
            "end": 267,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 266,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 255,
                "end": 266,
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 255,
                    "end": 259
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 262,
                    "end": 266,
                    "typeName": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 266,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 272,
            "end": 286,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 285,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 278,
                "end": 282
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 291,
            "end": 312,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 311,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 294,
                "end": 311,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 295,
                    "end": 302,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 296,
                      "end": 302,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 298,
                        "end": 302
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 304,
                  "end": 311,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 307,
                    "end": 311
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 342,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 341,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 320,
                "end": 341,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 325,
                    "end": 332,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 326,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 328,
                        "end": 332
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 337,
                    "end": 341
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 360,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 359,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 353,
                  "end": 359,
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 354,
                      "end": 358
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 393,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 371,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 371,
                  "end": 392,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 372,
                      "end": 391,
                      "types": [
                        {
                          "type": "TSThisType",
                          "start": 372,
                          "end": 376
                        },
                        {
                          "type": "TSFunctionType",
                          "start": 380,
                          "end": 390,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 383,
                            "end": 390,
                            "typeAnnotation": {
                              "type": "TSThisType",
                              "start": 386,
                              "end": 390
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 398,
            "end": 423,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 422,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 401,
                "end": 422,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 402,
                    "end": 408,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 403,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 405,
                        "end": 408
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 422,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 413,
                    "end": 422,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 418,
                      "end": 422,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 418,
                        "end": 422
                      }
                    }
                  }
                }
              }
            },
            "value": null,
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
      "type": "ClassDeclaration",
      "start": 427,
      "end": 699,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 435,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 699,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 442,
            "end": 459,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 447,
              "end": 458,
              "properties": [
                {
                  "type": "Property",
                  "start": 449,
                  "end": 456,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 450,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ThisExpression",
                    "start": 452,
                    "end": 456
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 464,
            "end": 476,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 464,
              "end": 466,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "start": 469,
              "end": 475,
              "elements": [
                {
                  "type": "ThisExpression",
                  "start": 470,
                  "end": 474
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 481,
            "end": 500,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "start": 486,
              "end": 499,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 487,
                  "end": 498,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 489,
                      "end": 496,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ThisExpression",
                        "start": 492,
                        "end": 496
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
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 505,
            "end": 521,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 510,
              "end": 520,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 516,
                "end": 520
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 566,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 528,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 528,
              "end": 566,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 531,
                "end": 566,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 541,
                    "end": 560,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 548,
                      "end": 559,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 550,
                          "end": 557,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ThisExpression",
                            "start": 553,
                            "end": 557
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 571,
            "end": 606,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 573,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 573,
              "end": 606,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 576,
                "end": 606,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 586,
                    "end": 600,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 593,
                      "end": 599,
                      "elements": [
                        {
                          "type": "ThisExpression",
                          "start": 594,
                          "end": 598
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 611,
            "end": 653,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 611,
              "end": 613,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 613,
              "end": 653,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 616,
                "end": 653,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 626,
                    "end": 647,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 633,
                      "end": 646,
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "start": 634,
                          "end": 645,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 636,
                              "end": 643,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 636,
                                "end": 637,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ThisExpression",
                                "start": 639,
                                "end": 643
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 658,
            "end": 697,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 660,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 660,
              "end": 697,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 663,
                "end": 697,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 673,
                    "end": 691,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 680,
                      "end": 690,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ThisExpression",
                        "start": 686,
                        "end": 690
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
