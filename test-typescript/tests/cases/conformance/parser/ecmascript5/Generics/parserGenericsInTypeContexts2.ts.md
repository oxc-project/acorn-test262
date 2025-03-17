__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 64,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 44,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 45,
            "end": 60,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 46,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 52,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 59,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 58,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 55,
                        "end": 58,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 56,
                            "end": 57,
                            "typeName": {
                              "type": "Identifier",
                              "start": 56,
                              "end": 57,
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
                  ]
                }
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 17,
        "end": 32,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 18,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 19,
              "end": 22,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 20,
                  "end": 21,
                  "typeName": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 24,
            "end": 31,
            "typeName": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 25,
              "end": 31,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 26,
                  "end": 30,
                  "typeName": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 27,
                    "end": 30,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 28,
                        "end": 29,
                        "typeName": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 29,
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
              ]
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 90,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 75,
                  "end": 90,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 76,
                      "end": 80,
                      "typeName": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 77,
                        "end": 80,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 78,
                            "end": 79,
                            "typeName": {
                              "type": "Identifier",
                              "start": 78,
                              "end": 79,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 89,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 83,
                        "end": 89,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 84,
                            "end": 88,
                            "typeName": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 85,
                              "name": "Z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 85,
                              "end": 88,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 86,
                                  "end": 87,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 86,
                                    "end": 87,
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
                        ]
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 116,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 101,
                  "end": 116,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 106,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 103,
                        "end": 106,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 104,
                            "end": 105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 115,
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 109,
                        "end": 115,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 110,
                            "end": 114,
                            "typeName": {
                              "type": "Identifier",
                              "start": 110,
                              "end": 111,
                              "name": "Z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        ]
                      }
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
            "start": 119,
            "end": 123,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 151,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 151,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 133,
                  "end": 136,
                  "left": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 136,
                  "end": 151,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 141,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 138,
                        "end": 141,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 139,
                            "end": 140,
                            "typeName": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 143,
                      "end": 150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 144,
                        "end": 150,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 145,
                            "end": 149,
                            "typeName": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 146,
                              "name": "Z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 146,
                              "end": 149,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 147,
                                  "end": 148,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 147,
                                    "end": 148,
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
                        ]
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 181,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 181,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 161,
                  "end": 166,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 161,
                    "end": 164,
                    "left": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "name": "G",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "H",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 166,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 171,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 168,
                        "end": 171,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 169,
                            "end": 170,
                            "typeName": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 174,
                        "end": 180,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "Z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 176,
                              "end": 179,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 177,
                                  "end": 178,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 177,
                                    "end": 178,
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
                        ]
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 209,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 209,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 191,
                "end": 209,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 191,
                  "end": 207,
                  "typeName": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 192,
                    "end": 207,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 197,
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 194,
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 194,
                          "end": 197,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 195,
                              "end": 196,
                              "typeName": {
                                "type": "Identifier",
                                "start": 195,
                                "end": 196,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 206,
                        "typeName": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 200,
                          "name": "Y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 200,
                          "end": 206,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 201,
                              "end": 205,
                              "typeName": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 202,
                                "name": "Z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 202,
                                "end": 205,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 203,
                                    "end": 204,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 203,
                                      "end": 204,
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
                          ]
                        }
                      }
                    ]
                  }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 224,
        "name": "f1",
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
          "start": 225,
          "end": 244,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 226,
            "end": 244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 228,
              "end": 244,
              "typeName": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 229,
                "end": 244,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 234,
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 231,
                      "end": 234,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 232,
                          "end": 233,
                          "typeName": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 233,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 236,
                    "end": 243,
                    "typeName": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 237,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 237,
                      "end": 243,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 238,
                          "end": 242,
                          "typeName": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 239,
                            "name": "Z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 239,
                            "end": 242,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 240,
                                "end": 241,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 240,
                                  "end": 241,
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
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 249,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 251,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 262,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 283,
        "end": 286,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 264,
        "end": 282,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 266,
          "end": 282,
          "typeName": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 267,
            "end": 282,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 268,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 269,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 271,
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 271,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 274,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 275,
                  "end": 281,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 276,
                      "end": 280,
                      "typeName": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 277,
                        "end": 280,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 278,
                            "end": 279,
                            "typeName": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 279,
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
                  ]
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
