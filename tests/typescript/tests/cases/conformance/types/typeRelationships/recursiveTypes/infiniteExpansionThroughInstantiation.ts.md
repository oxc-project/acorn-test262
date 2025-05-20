__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 98,
  "end": 509,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 176,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 176,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 126,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 148,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 145,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 147,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 174,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 159,
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 173,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 170,
                  "end": 173,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 172,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "decorators": [],
                  "name": "OwnerList",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 256,
      "end": 322,
      "body": {
        "type": "TSInterfaceBody",
        "start": 301,
        "end": 322,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 320,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 313,
                "end": 319
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 287,
          "end": 300,
          "expression": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 291,
            "end": 300,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 292,
                "end": 299,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 296,
                  "end": 299,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 297,
                      "end": 298,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 296,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 275,
        "decorators": [],
        "name": "OwnerList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 277,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 346,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 334,
                "end": 346,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 338,
                  "end": 346,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 339,
                      "end": 345
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 338,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 348,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 380,
            "decorators": [],
            "name": "ownerList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 380,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 380,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 373,
                      "end": 379
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 372,
                  "decorators": [],
                  "name": "OwnerList",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 382,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 382,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 382,
          "end": 386,
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 389,
          "end": 398,
          "decorators": [],
          "name": "ownerList",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 402,
      "end": 509,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 509,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 432,
            "end": 450,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 449,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 449,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 442,
                      "end": 449,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 446,
                        "end": 449,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 447,
                            "end": 448,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 447,
                              "end": 448,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 442,
                        "end": 446,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 455,
            "end": 483,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 459,
                "end": 482,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 482,
                  "decorators": [],
                  "name": "ownerList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 468,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 482,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 479,
                        "end": 482,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 480,
                            "end": 481,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 479,
                        "decorators": [],
                        "name": "OwnerList",
                        "optional": false,
                        "typeAnnotation": null
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
            "type": "ExpressionStatement",
            "start": 488,
            "end": 505,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 488,
              "end": 504,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 488,
                "end": 492,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 495,
                "end": 504,
                "decorators": [],
                "name": "ownerList",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 416,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 420,
          "end": 424,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 421,
            "end": 424,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 423,
              "end": 424,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 419,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 418,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
