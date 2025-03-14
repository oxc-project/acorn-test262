genericsWithoutTypeParameters1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 41,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 35,
                      "end": 39,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 24,
                  "end": 25,
                  "typeName": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 77,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 66,
            "end": 75,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "c1",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 99,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 113,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 110,
                  "end": 113,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 111,
                      "end": 112,
                      "typeName": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 127,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 127,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 127,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 147,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 147,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 149,
          "end": 153,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 152,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 194,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 194,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 180,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 180,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 177,
                "end": 180,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 182,
          "end": 189,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 189,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 186,
                "end": 189,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 187,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 211,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 203,
                "end": 211,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 205,
                    "end": 209,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 209,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 208,
                        "end": 209,
                        "typeName": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 214,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 219,
                  "end": 234,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 224,
                    "end": 232,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 225,
                        "end": 231
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 246,
                "end": 254,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 248,
                    "end": 252,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 249,
                      "end": 252,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 251,
                        "end": 252,
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 257,
            "end": 286,
            "properties": [
              {
                "type": "Property",
                "start": 259,
                "end": 284,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 262,
                  "end": 284,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 264,
                      "end": 282,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 267,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 267,
                        "end": 282,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 270,
                          "end": 282,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 272,
                              "end": 280,
                              "argument": {
                                "type": "Literal",
                                "start": 279,
                                "end": 280,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 323,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 306,
            "end": 311,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 316,
            "end": 321,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
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
        "start": 295,
        "end": 296,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 296,
        "end": 299,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 298,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 325,
      "end": 363,
      "body": {
        "type": "TSInterfaceBody",
        "start": 340,
        "end": 363,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 346,
            "end": 351,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 356,
            "end": 361,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "J",
                  "optional": false
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
        "start": 335,
        "end": 336,
        "decorators": [],
        "name": "J",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 336,
        "end": 339,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 337,
            "end": 338,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 365,
      "end": 379,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 376,
        "end": 379,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 372,
        "end": 375,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 373,
            "end": 374,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 423,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 403,
        "end": 423,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 409,
            "end": 421,
            "argument": {
              "type": "Literal",
              "start": 416,
              "end": 420,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 394,
          "end": 398,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 395,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 397,
              "end": 398,
              "typeName": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 399,
        "end": 402,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 401,
          "end": 402,
          "typeName": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 390,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 391,
            "end": 392,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
