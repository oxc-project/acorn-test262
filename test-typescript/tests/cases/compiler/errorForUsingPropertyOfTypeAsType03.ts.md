__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 570,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 570,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 22,
            "end": 81,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 43,
                "end": 46,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 46,
                  "name": "Red",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 56,
                "end": 61,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 61,
                  "name": "Green",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 71,
                "end": 75,
                "id": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "name": "Blue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 33,
              "end": 81,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 43,
                  "end": 46,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 56,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 61,
                    "name": "Green",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 71,
                  "end": 75,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 75,
                    "name": "Blue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 87,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 97,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 108,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 118,
              "end": 130,
              "exprName": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 163,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 163,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 145,
                        "end": 163,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 145,
                          "end": 154,
                          "left": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 150,
                            "name": "Color",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 154,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 163,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 198,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 198,
                  "name": "a2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 177,
                      "end": 198,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 186,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 177,
                          "end": 186,
                          "left": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 182,
                            "name": "Color",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 186,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 187,
                        "end": 197,
                        "literal": {
                          "type": "Literal",
                          "start": 187,
                          "end": 197,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 237,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 236,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 236,
                  "name": "a3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 212,
                      "end": 236,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 212,
                        "end": 224,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 212,
                          "end": 217,
                          "typeName": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "name": "Color",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 218,
                          "end": 223,
                          "literal": {
                            "type": "Literal",
                            "start": 218,
                            "end": 223,
                            "value": "Red",
                            "raw": "\"Red\""
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 225,
                        "end": 235,
                        "literal": {
                          "type": "Literal",
                          "start": 225,
                          "end": 235,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 332,
            "end": 374,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 336,
                "end": 373,
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 373,
                  "name": "b3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 340,
                      "end": 373,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 340,
                        "end": 361,
                        "objectType": {
                          "type": "TSTypeQuery",
                          "start": 341,
                          "end": 353,
                          "exprName": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 353,
                            "name": "Color",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 355,
                          "end": 360,
                          "literal": {
                            "type": "Literal",
                            "start": 355,
                            "end": 360,
                            "value": "Red",
                            "raw": "\"Red\""
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 362,
                        "end": 372,
                        "literal": {
                          "type": "Literal",
                          "start": 362,
                          "end": 372,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 380,
            "end": 404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 403,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 386,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 403,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 388,
                        "end": 403,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 388,
                          "end": 394,
                          "left": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 390,
                            "name": "C1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 391,
                            "end": 394,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 403,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 409,
            "end": 436,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 435,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 417,
                      "end": 435,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 417,
                        "end": 423,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 417,
                          "end": 423,
                          "left": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 419,
                            "name": "C1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 423,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 424,
                        "end": 434,
                        "literal": {
                          "type": "Literal",
                          "start": 424,
                          "end": 434,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 471,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 470,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 470,
                  "name": "c3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 449,
                      "end": 470,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 449,
                        "end": 458,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 449,
                          "end": 451,
                          "typeName": {
                            "type": "Identifier",
                            "start": 449,
                            "end": 451,
                            "name": "C1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 452,
                          "end": 457,
                          "literal": {
                            "type": "Literal",
                            "start": 452,
                            "end": 457,
                            "value": "Red",
                            "raw": "\"Red\""
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 459,
                        "end": 469,
                        "literal": {
                          "type": "Literal",
                          "start": 459,
                          "end": 469,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 477,
            "end": 501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 481,
                "end": 500,
                "id": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 500,
                  "name": "d1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 483,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 500,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 485,
                        "end": 500,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 485,
                          "end": 491,
                          "left": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 487,
                            "name": "C2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 488,
                            "end": 491,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 492,
                          "end": 500,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 506,
            "end": 533,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 532,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 532,
                  "name": "d2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 514,
                      "end": 532,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 514,
                        "end": 520,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 514,
                          "end": 520,
                          "left": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 516,
                            "name": "C2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 517,
                            "end": 520,
                            "name": "Red",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 521,
                        "end": 531,
                        "literal": {
                          "type": "Literal",
                          "start": 521,
                          "end": 531,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 538,
            "end": 568,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 542,
                "end": 567,
                "id": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 567,
                  "name": "d3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 544,
                    "end": 567,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 546,
                      "end": 567,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 546,
                        "end": 555,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 546,
                          "end": 548,
                          "typeName": {
                            "type": "Identifier",
                            "start": 546,
                            "end": 548,
                            "name": "C2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 549,
                          "end": 554,
                          "literal": {
                            "type": "Literal",
                            "start": 549,
                            "end": 554,
                            "value": "Red",
                            "raw": "\"Red\""
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 556,
                        "end": 566,
                        "literal": {
                          "type": "Literal",
                          "start": 556,
                          "end": 566,
                          "value": "toString",
                          "raw": "\"toString\""
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
