__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 930,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 55,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "T",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 43,
                  "end": 52,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 48,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 48,
                        "end": 51,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 49,
                            "end": 50,
                            "typeName": {
                              "type": "Identifier",
                              "start": 49,
                              "end": 50,
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
      "start": 57,
      "end": 118,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 69,
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 118,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "T",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 116,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 104,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 104,
                  "end": 115,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 105,
                      "end": 114,
                      "typeName": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 111,
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 111,
                        "end": 114,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 112,
                            "end": 113,
                            "typeName": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 113,
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
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
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
          "start": 136,
          "end": 146,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 146,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 143,
                "end": 146,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 144,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
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
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 149,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "U",
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
          "start": 165,
          "end": 175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 175,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 172,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 172,
                "end": 175,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "U",
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 210,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 210,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
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
          "start": 214,
          "end": 224,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 221,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 221,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 229,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 231,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 244,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 244,
        "end": 247,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 245,
            "end": 246,
            "name": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
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
          "start": 248,
          "end": 258,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 249,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 251,
              "end": 258,
              "typeName": {
                "type": "Identifier",
                "start": 251,
                "end": 255,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 255,
                "end": 258,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
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
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 261,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 274,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 274,
        "end": 277,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 275,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "U",
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
          "start": 278,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 290,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 290,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "decorators": [],
                "name": "MyList",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 287,
                "end": 290,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 288,
                    "end": 289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
                      "decorators": [],
                      "name": "U",
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 339,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 352,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 352,
        "end": 355,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 353,
            "end": 354,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
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
          "start": 356,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 362,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 359,
              "end": 362
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 367,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 930,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 383,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 383,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 384,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 394,
              "end": 401,
              "typeName": {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 398,
                "end": 401,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 399,
                    "end": 400,
                    "typeName": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 404,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "U",
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 408,
        "end": 930,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 461,
            "end": 484,
            "id": {
              "type": "Identifier",
              "start": 470,
              "end": 474,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 474,
              "end": 477,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 475,
                  "end": 476,
                  "name": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 476,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 478,
                "end": 482,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 479,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 481,
                    "end": 482,
                    "typeName": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 482,
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
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 489,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 498,
              "end": 502,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 502,
              "end": 505,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 503,
                  "end": 504,
                  "name": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 518,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 507,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 509,
                    "end": 518,
                    "typeName": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 515,
                      "decorators": [],
                      "name": "MyList",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 515,
                      "end": 518,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 516,
                          "end": 517,
                          "typeName": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 517,
                            "decorators": [],
                            "name": "V",
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
              "start": 520,
              "end": 523,
              "body": []
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 570,
            "end": 593,
            "id": {
              "type": "Identifier",
              "start": 579,
              "end": 583,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 583,
              "end": 586,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 584,
                  "end": 585,
                  "name": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 585,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 587,
                "end": 591,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 588,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 591,
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 591,
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
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 598,
            "end": 630,
            "id": {
              "type": "Identifier",
              "start": 607,
              "end": 611,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 611,
              "end": 614,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 612,
                  "end": 613,
                  "name": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 613,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 615,
                "end": 625,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 616,
                  "end": 625,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 618,
                    "end": 625,
                    "typeName": {
                      "type": "Identifier",
                      "start": 618,
                      "end": 622,
                      "decorators": [],
                      "name": "List",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 622,
                      "end": 625,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 623,
                          "end": 624,
                          "typeName": {
                            "type": "Identifier",
                            "start": 623,
                            "end": 624,
                            "decorators": [],
                            "name": "V",
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
              "start": 627,
              "end": 630,
              "body": []
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 646,
            "end": 677,
            "id": {
              "type": "Identifier",
              "start": 655,
              "end": 659,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 659,
              "end": 662,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 660,
                  "end": 661,
                  "name": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 661,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 663,
                "end": 667,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 664,
                  "end": 667,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 666,
                    "end": 667,
                    "typeName": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 667,
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
              "start": 668,
              "end": 676,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 670,
                "end": 676
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 682,
            "end": 719,
            "id": {
              "type": "Identifier",
              "start": 691,
              "end": 695,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 695,
              "end": 698,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 696,
                  "end": 697,
                  "name": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 699,
                "end": 709,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 700,
                  "end": 709,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 702,
                    "end": 709,
                    "typeName": {
                      "type": "Identifier",
                      "start": 702,
                      "end": 706,
                      "decorators": [],
                      "name": "List",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 706,
                      "end": 709,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 707,
                          "end": 708,
                          "typeName": {
                            "type": "Identifier",
                            "start": 707,
                            "end": 708,
                            "decorators": [],
                            "name": "V",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 718,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 712,
                "end": 718
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 724,
            "end": 764,
            "id": {
              "type": "Identifier",
              "start": 733,
              "end": 737,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 737,
              "end": 740,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 738,
                  "end": 739,
                  "name": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 741,
                "end": 753,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 742,
                  "end": 753,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 744,
                    "end": 753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 744,
                      "end": 750,
                      "decorators": [],
                      "name": "MyList",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 750,
                      "end": 753,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 751,
                          "end": 752,
                          "typeName": {
                            "type": "Identifier",
                            "start": 751,
                            "end": 752,
                            "decorators": [],
                            "name": "V",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 754,
              "end": 763,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 756,
                "end": 763
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 769,
            "end": 815,
            "id": {
              "type": "Identifier",
              "start": 778,
              "end": 782,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 782,
              "end": 785,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 783,
                  "end": 784,
                  "name": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 784,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 786,
                "end": 792,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 787,
                  "end": 792,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 789,
                    "end": 792
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 793,
              "end": 798,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 795,
                "end": 798
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 799,
              "end": 815,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 801,
                  "end": 813,
                  "argument": {
                    "type": "Literal",
                    "start": 808,
                    "end": 812,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 821,
            "end": 844,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 825,
                "end": 843,
                "id": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 843,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 829,
                    "end": 843,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 831,
                      "end": 843,
                      "typeName": {
                        "type": "Identifier",
                        "start": 831,
                        "end": 835,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 835,
                        "end": 843,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 836,
                            "end": 842
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 849,
            "end": 876,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 853,
                "end": 875,
                "id": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 875,
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 859,
                    "end": 875,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 861,
                      "end": 875,
                      "typeName": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 867,
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 867,
                        "end": 875,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 868,
                            "end": 874
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 882,
            "end": 901,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 886,
                "end": 900,
                "id": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 887,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 890,
                  "end": 900,
                  "callee": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 894,
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 895,
                      "end": 899,
                      "decorators": [],
                      "name": "list",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 906,
            "end": 928,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 910,
                "end": 927,
                "id": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 912,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 915,
                  "end": 927,
                  "callee": {
                    "type": "Identifier",
                    "start": 915,
                    "end": 919,
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 920,
                      "end": 926,
                      "decorators": [],
                      "name": "myList",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
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
