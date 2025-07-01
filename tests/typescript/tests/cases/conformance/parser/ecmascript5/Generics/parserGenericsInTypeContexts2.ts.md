__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 17
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 20,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 20,
                  "end": 21
                }
              ],
              "start": 19,
              "end": 22
            },
            "start": 18,
            "end": 22
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 28,
                          "end": 29
                        },
                        "typeArguments": null,
                        "start": 28,
                        "end": 29
                      }
                    ],
                    "start": 27,
                    "end": 30
                  },
                  "start": 26,
                  "end": 30
                }
              ],
              "start": 25,
              "end": 31
            },
            "start": 24,
            "end": 31
          }
        ],
        "start": 17,
        "end": 32
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 47
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "typeArguments": null,
                      "start": 48,
                      "end": 49
                    }
                  ],
                  "start": 47,
                  "end": 50
                },
                "start": 46,
                "end": 50
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 55
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 56,
                              "end": 57
                            },
                            "typeArguments": null,
                            "start": 56,
                            "end": 57
                          }
                        ],
                        "start": 55,
                        "end": 58
                      },
                      "start": 54,
                      "end": 58
                    }
                  ],
                  "start": 53,
                  "end": 59
                },
                "start": 52,
                "end": 59
              }
            ],
            "start": 45,
            "end": 60
          },
          "start": 44,
          "end": 60
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 61,
        "end": 64
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 77
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 78,
                            "end": 79
                          }
                        ],
                        "start": 77,
                        "end": 80
                      },
                      "start": 76,
                      "end": 80
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 85
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 86,
                                    "end": 87
                                  },
                                  "typeArguments": null,
                                  "start": 86,
                                  "end": 87
                                }
                              ],
                              "start": 85,
                              "end": 88
                            },
                            "start": 84,
                            "end": 88
                          }
                        ],
                        "start": 83,
                        "end": 89
                      },
                      "start": 82,
                      "end": 89
                    }
                  ],
                  "start": 75,
                  "end": 90
                },
                "start": 74,
                "end": 90
              },
              "start": 72,
              "end": 90
            },
            "start": 70,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 90
        }
      ],
      "declare": false,
      "start": 66,
      "end": 91
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 103
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 104,
                            "end": 105
                          }
                        ],
                        "start": 103,
                        "end": 106
                      },
                      "start": 102,
                      "end": 106
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 110,
                              "end": 111
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 112,
                                    "end": 113
                                  },
                                  "typeArguments": null,
                                  "start": 112,
                                  "end": 113
                                }
                              ],
                              "start": 111,
                              "end": 114
                            },
                            "start": 110,
                            "end": 114
                          }
                        ],
                        "start": 109,
                        "end": 115
                      },
                      "start": 108,
                      "end": 115
                    }
                  ],
                  "start": 101,
                  "end": 116
                },
                "start": 100,
                "end": 116
              },
              "start": 98,
              "end": 116
            },
            "start": 96,
            "end": 116
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 119,
            "end": 123
          },
          "definite": false,
          "start": 96,
          "end": 123
        }
      ],
      "declare": false,
      "start": 92,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "start": 133,
                  "end": 136
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 139,
                              "end": 140
                            },
                            "typeArguments": null,
                            "start": 139,
                            "end": 140
                          }
                        ],
                        "start": 138,
                        "end": 141
                      },
                      "start": 137,
                      "end": 141
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 144
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 146
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 147,
                                    "end": 148
                                  },
                                  "typeArguments": null,
                                  "start": 147,
                                  "end": 148
                                }
                              ],
                              "start": 146,
                              "end": 149
                            },
                            "start": 145,
                            "end": 149
                          }
                        ],
                        "start": 144,
                        "end": 150
                      },
                      "start": 143,
                      "end": 150
                    }
                  ],
                  "start": 136,
                  "end": 151
                },
                "start": 133,
                "end": 151
              },
              "start": 131,
              "end": 151
            },
            "start": 129,
            "end": 151
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 151
        }
      ],
      "declare": false,
      "start": 125,
      "end": 152
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "start": 161,
                    "end": 164
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "start": 161,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 168
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 170
                            },
                            "typeArguments": null,
                            "start": 169,
                            "end": 170
                          }
                        ],
                        "start": 168,
                        "end": 171
                      },
                      "start": 167,
                      "end": 171
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 177,
                                    "end": 178
                                  },
                                  "typeArguments": null,
                                  "start": 177,
                                  "end": 178
                                }
                              ],
                              "start": 176,
                              "end": 179
                            },
                            "start": 175,
                            "end": 179
                          }
                        ],
                        "start": 174,
                        "end": 180
                      },
                      "start": 173,
                      "end": 180
                    }
                  ],
                  "start": 166,
                  "end": 181
                },
                "start": 161,
                "end": 181
              },
              "start": 159,
              "end": 181
            },
            "start": 157,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 181
        }
      ],
      "declare": false,
      "start": 153,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 194
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 195,
                                "end": 196
                              },
                              "typeArguments": null,
                              "start": 195,
                              "end": 196
                            }
                          ],
                          "start": 194,
                          "end": 197
                        },
                        "start": 193,
                        "end": 197
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 200
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 202
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 203,
                                      "end": 204
                                    },
                                    "typeArguments": null,
                                    "start": 203,
                                    "end": 204
                                  }
                                ],
                                "start": 202,
                                "end": 205
                              },
                              "start": 201,
                              "end": 205
                            }
                          ],
                          "start": 200,
                          "end": 206
                        },
                        "start": 199,
                        "end": 206
                      }
                    ],
                    "start": 192,
                    "end": 207
                  },
                  "start": 191,
                  "end": 207
                },
                "start": 191,
                "end": 209
              },
              "start": 189,
              "end": 209
            },
            "start": 187,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 187,
          "end": 209
        }
      ],
      "declare": false,
      "start": 183,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 233
                          },
                          "typeArguments": null,
                          "start": 232,
                          "end": 233
                        }
                      ],
                      "start": 231,
                      "end": 234
                    },
                    "start": 230,
                    "end": 234
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 237
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 239
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 240,
                                  "end": 241
                                },
                                "typeArguments": null,
                                "start": 240,
                                "end": 241
                              }
                            ],
                            "start": 239,
                            "end": 242
                          },
                          "start": 238,
                          "end": 242
                        }
                      ],
                      "start": 237,
                      "end": 243
                    },
                    "start": 236,
                    "end": 243
                  }
                ],
                "start": 229,
                "end": 244
              },
              "start": 228,
              "end": 244
            },
            "start": 226,
            "end": 244
          },
          "start": 225,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 246,
        "end": 249
      },
      "expression": false,
      "start": 213,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 262
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 271
                      },
                      "typeArguments": null,
                      "start": 270,
                      "end": 271
                    }
                  ],
                  "start": 269,
                  "end": 272
                },
                "start": 268,
                "end": 272
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 277
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 279
                            },
                            "typeArguments": null,
                            "start": 278,
                            "end": 279
                          }
                        ],
                        "start": 277,
                        "end": 280
                      },
                      "start": 276,
                      "end": 280
                    }
                  ],
                  "start": 275,
                  "end": 281
                },
                "start": 274,
                "end": 281
              }
            ],
            "start": 267,
            "end": 282
          },
          "start": 266,
          "end": 282
        },
        "start": 264,
        "end": 282
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 283,
        "end": 286
      },
      "expression": false,
      "start": 251,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
