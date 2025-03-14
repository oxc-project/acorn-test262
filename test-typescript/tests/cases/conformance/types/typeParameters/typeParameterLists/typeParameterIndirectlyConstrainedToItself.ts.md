typeParameterIndirectlyConstrainedToItself.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 655,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 37,
        "body": []
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
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 19,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 32,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "start": 38,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 58,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 84,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 114,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 127,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 127,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
      "start": 133,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 185,
        "end": 188,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 145,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 157,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 170,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 172,
            "end": 183,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 183,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 232,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 229,
        "end": 232,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 200,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 212,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 211,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 225,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
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
      "start": 233,
      "end": 289,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 289,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 244,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 245,
            "end": 256,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 255,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 269,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 269,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 282,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 282,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 394,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 298,
                "end": 394,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 304,
                    "end": 339,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 332,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 334,
                        "end": 338
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 304,
                      "end": 330,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 305,
                          "end": 316,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 315,
                            "end": 316,
                            "typeName": {
                              "type": "Identifier",
                              "start": 315,
                              "end": 316,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 306,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 318,
                          "end": 329,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 328,
                            "end": 329,
                            "typeName": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 329,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
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
                    "type": "TSCallSignatureDeclaration",
                    "start": 344,
                    "end": 392,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 387,
                        "end": 391
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 344,
                      "end": 383,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 345,
                          "end": 356,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 355,
                            "end": 356,
                            "typeName": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 356,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 346,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 358,
                          "end": 369,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 368,
                            "end": 369,
                            "typeName": {
                              "type": "Identifier",
                              "start": 368,
                              "end": 369,
                              "decorators": [],
                              "name": "V",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 358,
                            "end": 359,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 371,
                          "end": 382,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 381,
                            "end": 382,
                            "typeName": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 382,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 372,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
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
      "start": 396,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 439,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 401,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 404,
            "end": 439,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 436,
              "end": 439,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 404,
              "end": 430,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 405,
                  "end": 416,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 415,
                    "end": 416,
                    "typeName": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 416,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 418,
                  "end": 429,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 428,
                    "end": 429,
                    "typeName": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 497,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 446,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 449,
            "end": 497,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 494,
              "end": 497,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 449,
              "end": 488,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 450,
                  "end": 461,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 460,
                    "end": 461,
                    "typeName": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 461,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 463,
                  "end": 474,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 476,
                  "end": 487,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 486,
                    "end": 487,
                    "typeName": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 487,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 477,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 499,
      "end": 549,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 546,
        "end": 549,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 506,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 506,
        "end": 545,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 507,
            "end": 518,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 517,
              "end": 518,
              "typeName": {
                "type": "Identifier",
                "start": 517,
                "end": 518,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 520,
            "end": 531,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 530,
              "end": 531,
              "typeName": {
                "type": "Identifier",
                "start": 530,
                "end": 531,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 533,
            "end": 544,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 543,
              "end": 544,
              "typeName": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 573,
      "end": 618,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 581,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 587,
        "end": 617,
        "checkType": {
          "type": "TSTupleType",
          "start": 587,
          "end": 590,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 588,
              "end": 589,
              "typeName": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 599,
          "end": 607,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 600,
              "end": 606
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 615,
          "end": 617,
          "members": []
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 610,
          "end": 612,
          "members": []
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 581,
        "end": 584,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 582,
            "end": 583,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
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
      "start": 619,
      "end": 654,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 652,
        "end": 654,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 631,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 631,
        "end": 649,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 648,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 648,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 645,
                "end": 648,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 646,
                    "end": 647,
                    "typeName": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 645,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "S",
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
