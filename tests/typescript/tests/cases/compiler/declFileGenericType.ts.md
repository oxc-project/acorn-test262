__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 855,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 511,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 511,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 511,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 42,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 42,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 36,
                  "end": 39,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 37,
                      "end": 38,
                      "name": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
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
                  "start": 39,
                  "end": 42,
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
              "start": 47,
              "end": 65,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 54,
                "end": 65,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 62,
                  "end": 65,
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
              "start": 75,
              "end": 124,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 82,
                "end": 124,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 92,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 93,
                      "end": 94,
                      "name": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
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
                    "start": 96,
                    "end": 100,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 97,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 100,
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
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
                  "start": 101,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 107,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 104,
                      "end": 107,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 108,
                  "end": 124,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 110,
                      "end": 122,
                      "argument": {
                        "type": "Literal",
                        "start": 117,
                        "end": 121,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 129,
              "end": 183,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 136,
                "end": 183,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 147,
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 147,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 148,
                      "end": 149,
                      "name": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
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
                    "start": 151,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 152,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 154,
                        "end": 155,
                        "typeName": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
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
                  "start": 156,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 166,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 158,
                      "end": 161,
                      "left": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 161,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 161,
                      "end": 166,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 162,
                          "end": 165,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 162,
                            "end": 165,
                            "left": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 163,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 167,
                  "end": 183,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 169,
                      "end": 181,
                      "argument": {
                        "type": "Literal",
                        "start": 176,
                        "end": 180,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 188,
              "end": 244,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 195,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "decorators": [],
                  "name": "F3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 206,
                  "end": 209,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 207,
                      "end": 208,
                      "name": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
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
                    "start": 210,
                    "end": 214,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 211,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 213,
                        "end": 214,
                        "typeName": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 214,
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
                  "start": 215,
                  "end": 227,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 217,
                    "end": 227,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 225,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 217,
                        "end": 220,
                        "left": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 218,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 220,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 220,
                        "end": 225,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 221,
                            "end": 224,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 221,
                              "end": 224,
                              "left": {
                                "type": "Identifier",
                                "start": 221,
                                "end": 222,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 223,
                                "end": 224,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 228,
                  "end": 244,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 230,
                      "end": 242,
                      "argument": {
                        "type": "Literal",
                        "start": 237,
                        "end": 241,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 249,
              "end": 323,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 256,
                "end": 323,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 267,
                  "decorators": [],
                  "name": "F4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 267,
                  "end": 283,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 268,
                      "end": 282,
                      "name": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 278,
                        "end": 282,
                        "typeName": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 279,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 279,
                          "end": 282,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 280,
                              "end": 281,
                              "typeName": {
                                "type": "Identifier",
                                "start": 280,
                                "end": 281,
                                "decorators": [],
                                "name": "B",
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
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 288,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 285,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 287,
                        "end": 288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 287,
                          "end": 288,
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
                  "start": 289,
                  "end": 306,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 291,
                    "end": 306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 296,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 296,
                      "end": 306,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 297,
                          "end": 305,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 297,
                            "end": 300,
                            "left": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 298,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 299,
                              "end": 300,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 300,
                            "end": 305,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 301,
                                "end": 304,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 301,
                                  "end": 304,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 302,
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 304,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                "body": {
                  "type": "BlockStatement",
                  "start": 307,
                  "end": 323,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 309,
                      "end": 321,
                      "argument": {
                        "type": "Literal",
                        "start": 316,
                        "end": 320,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 329,
              "end": 372,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 336,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 347,
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 347,
                  "end": 350,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 348,
                      "end": 349,
                      "name": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 349,
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 355,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 356,
                  "end": 372,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 358,
                      "end": 370,
                      "argument": {
                        "type": "Literal",
                        "start": 365,
                        "end": 369,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 378,
              "end": 438,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 385,
                "end": 438,
                "id": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 396,
                  "decorators": [],
                  "name": "F6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 396,
                  "end": 412,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 397,
                      "end": 411,
                      "name": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 407,
                        "end": 411,
                        "typeName": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 408,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 408,
                          "end": 411,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 409,
                              "end": 410,
                              "typeName": {
                                "type": "Identifier",
                                "start": 409,
                                "end": 410,
                                "decorators": [],
                                "name": "B",
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
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 413,
                    "end": 417,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 414,
                      "end": 417,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 416,
                        "end": 417,
                        "typeName": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 417,
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
                  "start": 418,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 421,
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 421,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 422,
                  "end": 438,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 424,
                      "end": 436,
                      "argument": {
                        "type": "Literal",
                        "start": 431,
                        "end": 435,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 444,
              "end": 509,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 451,
                "end": 509,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 458,
                  "end": 461,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 459,
                      "end": 460,
                      "name": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
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
                  "start": 461,
                  "end": 509,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 472,
                      "end": 502,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 483,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 483,
                        "end": 502,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "TSParameterProperty",
                            "start": 484,
                            "end": 497,
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 491,
                              "end": 497,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 494,
                                "end": 497,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 496,
                                  "end": 497,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 496,
                                    "end": 497,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "readonly": false,
                            "static": false
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 499,
                          "end": 502,
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
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 513,
      "end": 536,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 520,
        "end": 536,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 524,
            "end": 535,
            "id": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 525,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 527,
                  "end": 535,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 527,
                    "end": 530,
                    "left": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 530,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 530,
                    "end": 535,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 531,
                        "end": 534,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 531,
                          "end": 534,
                          "left": {
                            "type": "Identifier",
                            "start": 531,
                            "end": 532,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 533,
                            "end": 534,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 538,
      "end": 557,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 545,
        "end": 557,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 549,
            "end": 556,
            "id": {
              "type": "Identifier",
              "start": 549,
              "end": 550,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 553,
              "end": 556,
              "object": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 558,
      "end": 578,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 565,
        "end": 578,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 569,
            "end": 577,
            "id": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 573,
              "end": 577,
              "object": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 575,
                "end": 577,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 579,
      "end": 599,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 599,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 590,
            "end": 598,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 594,
              "end": 598,
              "object": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 596,
                "end": 598,
                "decorators": [],
                "name": "F3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 600,
      "end": 620,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 607,
        "end": 620,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 611,
            "end": 619,
            "id": {
              "type": "Identifier",
              "start": 611,
              "end": 612,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 615,
              "end": 619,
              "object": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 617,
                "end": 619,
                "decorators": [],
                "name": "F4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 622,
      "end": 677,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 629,
        "end": 677,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 633,
            "end": 676,
            "id": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 637,
              "end": 676,
              "object": {
                "type": "NewExpression",
                "start": 638,
                "end": 671,
                "callee": {
                  "type": "MemberExpression",
                  "start": 642,
                  "end": 645,
                  "object": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 645,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 645,
                  "end": 655,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 646,
                      "end": 654,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 646,
                        "end": 649,
                        "left": {
                          "type": "Identifier",
                          "start": 646,
                          "end": 647,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 648,
                          "end": 649,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 649,
                        "end": 654,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 650,
                            "end": 653,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 650,
                              "end": 653,
                              "left": {
                                "type": "Identifier",
                                "start": 650,
                                "end": 651,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 652,
                                "end": 653,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "start": 656,
                    "end": 670,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 660,
                      "end": 663,
                      "object": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 661,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 663,
                      "end": 668,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 664,
                          "end": 667,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 664,
                            "end": 667,
                            "left": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 665,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 666,
                              "end": 667,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    "arguments": []
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 673,
                "end": 676,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "start": 679,
      "end": 722,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 686,
        "end": 722,
        "id": {
          "type": "Identifier",
          "start": 695,
          "end": 696,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 696,
          "end": 716,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 697,
              "end": 715,
              "name": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 707,
                "end": 715,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 707,
                  "end": 710,
                  "left": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 710,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 710,
                  "end": 715,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 711,
                      "end": 714,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 711,
                        "end": 714,
                        "left": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 712,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 713,
                          "end": 714,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            }
          ]
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 719,
          "end": 722,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 724,
      "end": 756,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 731,
        "end": 756,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 735,
            "end": 755,
            "id": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 739,
              "end": 755,
              "callee": {
                "type": "MemberExpression",
                "start": 739,
                "end": 743,
                "object": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 743,
                  "decorators": [],
                  "name": "F5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 743,
                "end": 753,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 744,
                    "end": 752,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 744,
                      "end": 747,
                      "left": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 747,
                      "end": 752,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 748,
                          "end": 751,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 748,
                            "end": 751,
                            "left": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 751,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              },
              "arguments": [],
              "optional": false
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
      "start": 758,
      "end": 792,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 765,
        "end": 792,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 771,
          "end": 772,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 781,
          "end": 784,
          "object": {
            "type": "Identifier",
            "start": 781,
            "end": 782,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 783,
            "end": 784,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 784,
          "end": 789,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 785,
              "end": 788,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 785,
                "end": 788,
                "left": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 786,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 788,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 789,
          "end": 792,
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
      "start": 794,
      "end": 833,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 801,
        "end": 833,
        "id": {
          "type": "Identifier",
          "start": 811,
          "end": 812,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 821,
            "end": 829,
            "expression": {
              "type": "MemberExpression",
              "start": 821,
              "end": 824,
              "object": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 824,
              "end": 829,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 825,
                  "end": 828,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 825,
                    "end": 828,
                    "left": {
                      "type": "Identifier",
                      "start": 825,
                      "end": 826,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 827,
                      "end": 828,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 830,
          "end": 833,
          "body": []
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
      "start": 835,
      "end": 855,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 842,
        "end": 855,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 846,
            "end": 854,
            "id": {
              "type": "Identifier",
              "start": 846,
              "end": 847,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 850,
              "end": 854,
              "object": {
                "type": "Identifier",
                "start": 850,
                "end": 851,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 852,
                "end": 854,
                "decorators": [],
                "name": "F6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
