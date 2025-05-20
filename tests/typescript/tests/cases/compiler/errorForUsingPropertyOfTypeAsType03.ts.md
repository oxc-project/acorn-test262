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
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 570,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 22,
            "end": 81,
            "body": {
              "type": "TSEnumBody",
              "start": 33,
              "end": 81,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 43,
                  "end": 46,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                },
                {
                  "type": "TSEnumMember",
                  "start": 56,
                  "end": 61,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 61,
                    "decorators": [],
                    "name": "Green",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                },
                {
                  "type": "TSEnumMember",
                  "start": 71,
                  "end": 75,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 75,
                    "decorators": [],
                    "name": "Blue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 87,
            "end": 103,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 97,
              "end": 102,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 108,
            "end": 131,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 118,
              "end": 130,
              "exprName": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeParameters": null
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 163,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 163,
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 154,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 163,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 198,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 198,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 177,
                      "end": 198,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 187,
                        "end": 197,
                        "literal": {
                          "type": "Literal",
                          "start": 187,
                          "end": 197,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 186,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 177,
                          "end": 186,
                          "left": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 182,
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 186,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 236,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 212,
                      "end": 236,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 225,
                        "end": 235,
                        "literal": {
                          "type": "Literal",
                          "start": 225,
                          "end": 235,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 212,
                        "end": 224,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 218,
                          "end": 223,
                          "literal": {
                            "type": "Literal",
                            "start": 218,
                            "end": 223,
                            "raw": "\"Red\"",
                            "value": "Red"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 212,
                          "end": 217,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 373,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 340,
                      "end": 373,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 362,
                        "end": 372,
                        "literal": {
                          "type": "Literal",
                          "start": 362,
                          "end": 372,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 340,
                        "end": 361,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 355,
                          "end": 360,
                          "literal": {
                            "type": "Literal",
                            "start": 355,
                            "end": 360,
                            "raw": "\"Red\"",
                            "value": "Red"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeQuery",
                          "start": 341,
                          "end": 353,
                          "exprName": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 353,
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 403,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 386,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 403,
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 391,
                            "end": 394,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 403,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 435,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 417,
                      "end": 435,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 424,
                        "end": 434,
                        "literal": {
                          "type": "Literal",
                          "start": 424,
                          "end": 434,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 417,
                        "end": 423,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 417,
                          "end": 423,
                          "left": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 419,
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 423,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 470,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 449,
                      "end": 470,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 459,
                        "end": 469,
                        "literal": {
                          "type": "Literal",
                          "start": 459,
                          "end": 469,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 449,
                        "end": 458,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 452,
                          "end": 457,
                          "literal": {
                            "type": "Literal",
                            "start": 452,
                            "end": 457,
                            "raw": "\"Red\"",
                            "value": "Red"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 449,
                          "end": 451,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 449,
                            "end": 451,
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 500,
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 483,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 500,
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 488,
                            "end": 491,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 492,
                          "end": 500,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 532,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 514,
                      "end": 532,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 521,
                        "end": 531,
                        "literal": {
                          "type": "Literal",
                          "start": 521,
                          "end": 531,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 514,
                        "end": 520,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 514,
                          "end": 520,
                          "left": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 516,
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 517,
                            "end": 520,
                            "decorators": [],
                            "name": "Red",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 567,
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 544,
                    "end": 567,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 546,
                      "end": 567,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 556,
                        "end": 566,
                        "literal": {
                          "type": "Literal",
                          "start": 556,
                          "end": 566,
                          "raw": "\"toString\"",
                          "value": "toString"
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 546,
                        "end": 555,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 549,
                          "end": 554,
                          "literal": {
                            "type": "Literal",
                            "start": 549,
                            "end": 554,
                            "raw": "\"Red\"",
                            "value": "Red"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 546,
                          "end": 548,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 546,
                            "end": 548,
                            "decorators": [],
                            "name": "C2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
