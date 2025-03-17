__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 700,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 97,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "x",
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
              "start": 16,
              "end": 22,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 18,
                "end": 22
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 66,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 33,
                      "end": 37
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 40,
                  "end": 44
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 71,
            "end": 95,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 95,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 90,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 86,
                      "end": 90
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 95,
                "body": []
              },
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 118,
                    "end": 124
                  }
                },
                "decorators": [],
                "optional": false
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 149,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "start": 169,
            "end": 177,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 189,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 425,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 196,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "a",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "b",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "c",
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 252,
            "end": 267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "name": "d",
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 272,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "e",
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
              "start": 273,
              "end": 285,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 278,
                "end": 282
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 291,
            "end": 312,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "f",
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 296,
                      "end": 302,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 298,
                        "end": 302
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 342,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "g",
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 326,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 328,
                        "end": 332
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 360,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "h",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 393,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 366,
              "name": "i",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 398,
            "end": 423,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "name": "j",
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 403,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 405,
                        "end": 408
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
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
      "type": "ClassDeclaration",
      "start": 427,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 435,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 699,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 442,
            "end": 459,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 447,
              "end": 458,
              "properties": [
                {
                  "type": "Property",
                  "start": 449,
                  "end": 456,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 450,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ThisExpression",
                    "start": 452,
                    "end": 456
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 464,
            "end": 476,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 464,
              "end": 466,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 481,
            "end": 500,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
              "name": "x3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ThisExpression",
                        "start": 492,
                        "end": 496
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 505,
            "end": 521,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "name": "x4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 510,
              "end": 520,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 516,
                "end": 520
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 566,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 528,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 528,
              "end": 566,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ThisExpression",
                            "start": 553,
                            "end": 557
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
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
            "type": "MethodDefinition",
            "start": 571,
            "end": 606,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 573,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 573,
              "end": 606,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "type": "MethodDefinition",
            "start": 611,
            "end": 653,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 611,
              "end": 613,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 613,
              "end": 653,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 636,
                                "end": 637,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ThisExpression",
                                "start": 639,
                                "end": 643
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },
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
            "type": "MethodDefinition",
            "start": 658,
            "end": 697,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 658,
              "end": 660,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 660,
              "end": 697,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ThisExpression",
                        "start": 686,
                        "end": 690
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
