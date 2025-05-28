__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 1144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 61,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 29,
        "decorators": [],
        "name": "Write",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 61,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "Write",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 130,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "Col",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 82,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "s",
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
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "a",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 128,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 108,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 110,
                "end": 127,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "decorators": [],
                      "name": "Col",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 114,
                      "end": 120,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 115,
                          "end": 116,
                          "typeName": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 116,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 118,
                          "end": 119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 125,
                    "end": 126,
                    "typeName": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "a",
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
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 132,
      "end": 215,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 151,
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "Req",
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
            "start": 157,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "Def",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 215,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 213,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 183,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 185,
                "end": 212,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 186,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 191,
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 191,
                      "end": 201,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 195,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 195,
                            "decorators": [],
                            "name": "Req",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 197,
                          "end": 200,
                          "typeName": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 200,
                            "decorators": [],
                            "name": "Def",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 203,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 206,
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 211,
                      "decorators": [],
                      "name": "Def",
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
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 217,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "decorators": [],
        "name": "MakeTable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 231,
        "end": 269,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 232,
            "end": 249,
            "name": {
              "type": "Identifier",
              "start": 232,
              "end": 234,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 243,
              "end": 249
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 251,
            "end": 268,
            "name": {
              "type": "Identifier",
              "start": 251,
              "end": 253,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 262,
              "end": 268
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 272,
        "end": 369,
        "types": [
          {
            "type": "TSMappedType",
            "start": 272,
            "end": 315,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 284,
              "end": 292,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 292,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 295,
              "end": 312,
              "typeName": {
                "type": "Identifier",
                "start": 295,
                "end": 298,
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 298,
                "end": 312,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 304,
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "start": 306,
                    "end": 311,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 306,
                      "end": 308,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 308,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 309,
                      "end": 310,
                      "typeName": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
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
          },
          {
            "type": "TSMappedType",
            "start": 318,
            "end": 369,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 334,
              "end": 342,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 345,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 345,
                "end": 348,
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 348,
                "end": 362,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 349,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 354,
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "start": 356,
                    "end": 361,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 356,
                      "end": 358,
                      "typeName": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 358,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 359,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
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
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 372,
      "end": 543,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 400,
        "decorators": [],
        "name": "ConflictTarget",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 400,
        "end": 406,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 401,
            "end": 405,
            "name": {
              "type": "Identifier",
              "start": 401,
              "end": 405,
              "decorators": [],
              "name": "Cols",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 407,
        "end": 543,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 413,
            "end": 490,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 439,
              "decorators": [],
              "name": "tableColumns",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 439,
              "end": 490,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 439,
                "end": 445,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 440,
                    "end": 444,
                    "name": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 444,
                      "decorators": [],
                      "name": "Cols",
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
                  "start": 446,
                  "end": 466,
                  "decorators": [],
                  "name": "cols",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 450,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 452,
                      "end": 466,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 453,
                        "end": 463,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 459,
                          "end": 463,
                          "typeName": {
                            "type": "Identifier",
                            "start": 459,
                            "end": 463,
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 467,
                "end": 489,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 469,
                  "end": 489,
                  "typeName": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 483,
                    "decorators": [],
                    "name": "ConflictTarget",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 483,
                    "end": 489,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 484,
                        "end": 488,
                        "typeName": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 488,
                          "decorators": [],
                          "name": "Cols",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 495,
            "end": 541,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 510,
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 510,
              "end": 540,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 512,
                "end": 540,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 513,
                    "end": 533,
                    "typeName": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 527,
                      "decorators": [],
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 527,
                      "end": 533,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 528,
                          "end": 532,
                          "typeName": {
                            "type": "Identifier",
                            "start": 528,
                            "end": 532,
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 535,
                    "end": 539,
                    "typeName": {
                      "type": "Identifier",
                      "start": 535,
                      "end": 539,
                      "decorators": [],
                      "name": "Cols",
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
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 601,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 601,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 587,
            "decorators": [],
            "name": "bookTable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 587,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 564,
                "end": 587,
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 569,
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 569,
                  "end": 587,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 570,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 577,
                        "decorators": [],
                        "name": "BookReq",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 579,
                      "end": 586,
                      "typeName": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 586,
                        "decorators": [],
                        "name": "BookDef",
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
            "type": "TSAsExpression",
            "start": 590,
            "end": 601,
            "expression": {
              "type": "Literal",
              "start": 590,
              "end": 594,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 598,
              "end": 601
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 603,
      "end": 681,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 620,
        "decorators": [],
        "name": "BookReq",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 621,
        "end": 681,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 627,
            "end": 650,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 641,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 649,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 655,
            "end": 679,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 670,
              "decorators": [],
              "name": "serial",
              "optional": false,
              "typeAnnotation": null
            },
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 683,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 700,
        "decorators": [],
        "name": "BookDef",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 701,
        "end": 771,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 707,
            "end": 731,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 716,
              "end": 722,
              "decorators": [],
              "name": "author",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 722,
              "end": 730,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 736,
            "end": 769,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 753,
              "decorators": [],
              "name": "numPages",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 768,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 755,
                "end": 768,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 755,
                    "end": 761
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 764,
                    "end": 768
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
      "type": "FunctionDeclaration",
      "start": 774,
      "end": 953,
      "id": {
        "type": "Identifier",
        "start": 783,
        "end": 808,
        "decorators": [],
        "name": "insertOnConflictDoNothing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 808,
        "end": 848,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 809,
            "end": 827,
            "name": {
              "type": "Identifier",
              "start": 809,
              "end": 812,
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 821,
              "end": 827
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 829,
            "end": 847,
            "name": {
              "type": "Identifier",
              "start": 829,
              "end": 832,
              "decorators": [],
              "name": "Def",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 841,
              "end": 847
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
          "start": 849,
          "end": 872,
          "decorators": [],
          "name": "_table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 855,
            "end": 872,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 857,
              "end": 872,
              "typeName": {
                "type": "Identifier",
                "start": 857,
                "end": 862,
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 862,
                "end": 872,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 866,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 866,
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 868,
                    "end": 871,
                    "typeName": {
                      "type": "Identifier",
                      "start": 868,
                      "end": 871,
                      "decorators": [],
                      "name": "Def",
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
        {
          "type": "Identifier",
          "start": 874,
          "end": 916,
          "decorators": [],
          "name": "_conflictTarget",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 889,
            "end": 916,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 891,
              "end": 916,
              "typeName": {
                "type": "Identifier",
                "start": 891,
                "end": 905,
                "decorators": [],
                "name": "ConflictTarget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 905,
                "end": 916,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 906,
                    "end": 915,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 906,
                        "end": 909,
                        "typeName": {
                          "type": "Identifier",
                          "start": 906,
                          "end": 909,
                          "decorators": [],
                          "name": "Req",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 912,
                        "end": 915,
                        "typeName": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 915,
                          "decorators": [],
                          "name": "Def",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 917,
        "end": 926,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 919,
          "end": 926
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 927,
        "end": 953,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 933,
            "end": 951,
            "argument": {
              "type": "NewExpression",
              "start": 939,
              "end": 950,
              "callee": {
                "type": "Identifier",
                "start": 943,
                "end": 948,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 955,
      "end": 1144,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 965,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 968,
        "end": 1144,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 974,
            "end": 1052,
            "expression": {
              "type": "CallExpression",
              "start": 974,
              "end": 1051,
              "callee": {
                "type": "Identifier",
                "start": 974,
                "end": 999,
                "decorators": [],
                "name": "insertOnConflictDoNothing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1009,
                  "decorators": [],
                  "name": "bookTable",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "CallExpression",
                  "start": 1011,
                  "end": 1050,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1011,
                    "end": 1038,
                    "object": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1025,
                      "decorators": [],
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1038,
                      "decorators": [],
                      "name": "tableColumns",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "start": 1039,
                      "end": 1049,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1040,
                          "end": 1048,
                          "value": "serial",
                          "raw": "\"serial\""
                        }
                      ]
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
