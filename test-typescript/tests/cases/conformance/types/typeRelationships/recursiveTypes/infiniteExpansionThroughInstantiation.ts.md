__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 98,
  "end": 510,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 176,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 130,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 126,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 149,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 145,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 147,
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 159,
              "name": "owner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "name": "OwnerList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 170,
                  "end": 173,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
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
      "start": 256,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 275,
        "name": "OwnerList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 287,
          "end": 300,
          "expression": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "name": "List",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 296,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 296,
                  "end": 299,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 297,
                      "end": 298,
                      "typeName": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "name": "U",
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 277,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 301,
        "end": 322,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 320,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 319,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 313,
                "end": 319
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
      "type": "VariableDeclaration",
      "start": 324,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 346,
            "name": "list",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 334,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 338,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 348,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 380,
            "name": "ownerList",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 372,
                  "name": "OwnerList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "type": "ExpressionStatement",
      "start": 382,
      "end": 399,
      "expression": {
        "type": "AssignmentExpression",
        "start": 382,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 382,
          "end": 386,
          "name": "list",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 389,
          "end": 398,
          "name": "ownerList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 402,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 416,
        "name": "other",
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
          "start": 420,
          "end": 424,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 421,
            "end": 424,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 423,
              "end": 424,
              "typeName": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 449,
                  "name": "list",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 442,
                      "end": 449,
                      "typeName": {
                        "type": "Identifier",
                        "start": 442,
                        "end": 446,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 446,
                        "end": 449,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 447,
                            "end": 448,
                            "typeName": {
                              "type": "Identifier",
                              "start": 447,
                              "end": 448,
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
            "start": 455,
            "end": 483,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 459,
                "end": 482,
                "id": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 482,
                  "name": "ownerList",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 468,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 482,
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 479,
                        "name": "OwnerList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 479,
                        "end": 482,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 480,
                            "end": 481,
                            "typeName": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
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
            "type": "ExpressionStatement",
            "start": 488,
            "end": 505,
            "expression": {
              "type": "AssignmentExpression",
              "start": 488,
              "end": 504,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 488,
                "end": 492,
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 495,
                "end": 504,
                "name": "ownerList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 419,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 418,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
