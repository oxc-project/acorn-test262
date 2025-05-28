__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2101,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 17,
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 29,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 36,
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 38,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 51,
        "decorators": [],
        "name": "YesNo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 54,
        "end": 76,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 54,
            "end": 64,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 54,
              "end": 64,
              "left": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 67,
            "end": 76,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 67,
              "end": 76,
              "left": {
                "type": "Identifier",
                "start": 67,
                "end": 73,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 91,
        "end": 113,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 100,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 91,
              "end": 100,
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 100,
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 103,
            "end": 113,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 103,
              "end": 113,
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 109,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 110,
                "end": 113,
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 132,
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 135,
        "end": 174,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 135,
            "end": 149,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 135,
              "end": 149,
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 141,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 142,
                "end": 149,
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 152,
            "end": 162,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 152,
              "end": 162,
              "left": {
                "type": "Identifier",
                "start": 152,
                "end": 158,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 165,
            "end": 174,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 165,
              "end": 174,
              "left": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 210,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 209,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "decorators": [],
                        "name": "YesNo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 215,
            "end": 228,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 219,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 227,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 227,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 222,
                      "end": 227,
                      "typeName": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 227,
                        "decorators": [],
                        "name": "NoYes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 233,
            "end": 263,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 262,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 240,
                      "end": 262,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 240,
                          "end": 250,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 240,
                            "end": 250,
                            "left": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 246,
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 250,
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 253,
                          "end": 262,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 253,
                            "end": 262,
                            "left": {
                              "type": "Identifier",
                              "start": 253,
                              "end": 259,
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 262,
                              "decorators": [],
                              "name": "No",
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 268,
            "end": 298,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 272,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 297,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 273,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 275,
                      "end": 297,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 275,
                          "end": 284,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 275,
                            "end": 284,
                            "left": {
                              "type": "Identifier",
                              "start": 275,
                              "end": 281,
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 284,
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 287,
                          "end": 297,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 287,
                            "end": 297,
                            "left": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 293,
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 297,
                              "decorators": [],
                              "name": "Yes",
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 302,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 314,
          "end": 322,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 317,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 317,
                "end": 322,
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 324,
          "end": 339,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 325,
            "end": 339,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 339,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 339,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 341,
          "end": 350,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 344,
              "end": 350,
              "typeName": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 352,
        "end": 388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 364,
            "expression": {
              "type": "AssignmentExpression",
              "start": 358,
              "end": 363,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 369,
            "end": 375,
            "expression": {
              "type": "AssignmentExpression",
              "start": 369,
              "end": 374,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 380,
            "end": 386,
            "expression": {
              "type": "AssignmentExpression",
              "start": 380,
              "end": 385,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 380,
                "end": 381,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 797,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 402,
          "end": 415,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 403,
            "end": 415,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 405,
              "end": 415,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 405,
                "end": 415,
                "left": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 411,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 415,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 417,
          "end": 432,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 418,
            "end": 432,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 420,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 420,
                "end": 432,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 434,
        "end": 797,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 440,
            "end": 454,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 444,
                "end": 453,
                "id": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 448,
                  "end": 453,
                  "left": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 459,
            "end": 473,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 463,
                "end": 472,
                "id": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 464,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 467,
                  "end": 472,
                  "left": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 478,
            "end": 492,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 482,
                "end": 491,
                "id": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 483,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 486,
                  "end": 491,
                  "left": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 497,
            "end": 511,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 501,
                "end": 510,
                "id": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 505,
                  "end": 510,
                  "left": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 506,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 510,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 516,
            "end": 530,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 520,
                "end": 529,
                "id": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 524,
                  "end": 529,
                  "left": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 525,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 535,
            "end": 549,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 539,
                "end": 548,
                "id": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 543,
                  "end": 548,
                  "left": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 544,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 554,
            "end": 568,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 558,
                "end": 567,
                "id": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 559,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 562,
                  "end": 567,
                  "left": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 567,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 573,
            "end": 587,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 586,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 578,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 581,
                  "end": 586,
                  "left": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 592,
            "end": 603,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 596,
                "end": 602,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 597,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 600,
                  "end": 602,
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 602,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 608,
            "end": 619,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 612,
                "end": 618,
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 616,
                  "end": 618,
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 624,
            "end": 639,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 628,
                "end": 638,
                "id": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 629,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 632,
                  "end": 638,
                  "left": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 638,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 644,
            "end": 659,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 648,
                "end": 658,
                "id": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 649,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 652,
                  "end": 658,
                  "left": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 658,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 680,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 668,
                "end": 679,
                "id": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 669,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 672,
                  "end": 679,
                  "left": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 679,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 685,
            "end": 701,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 689,
                "end": 700,
                "id": {
                  "type": "Identifier",
                  "start": 689,
                  "end": 690,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 693,
                  "end": 700,
                  "left": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 694,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 706,
            "end": 720,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 710,
                "end": 719,
                "id": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 711,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 714,
                  "end": 719,
                  "left": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 715,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 719,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 725,
            "end": 739,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 729,
                "end": 738,
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 730,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 733,
                  "end": 738,
                  "left": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 734,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 737,
                    "end": 738,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 744,
            "end": 759,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 748,
                "end": 758,
                "id": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 749,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 752,
                  "end": 758,
                  "left": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 757,
                    "end": 758,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 764,
            "end": 779,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 768,
                "end": 778,
                "id": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 772,
                  "end": 778,
                  "left": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 778,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 784,
            "end": 795,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 788,
                "end": 794,
                "id": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 789,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 792,
                  "end": 794,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 799,
      "end": 864,
      "id": {
        "type": "Identifier",
        "start": 808,
        "end": 810,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 811,
          "end": 824,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 824,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 824,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 814,
                "end": 824,
                "left": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 820,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 824,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 826,
          "end": 841,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 827,
            "end": 841,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 829,
              "end": 841,
              "typeName": {
                "type": "Identifier",
                "start": 829,
                "end": 841,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 843,
        "end": 864,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 853,
            "expression": {
              "type": "UpdateExpression",
              "start": 849,
              "end": 852,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 849,
                "end": 850,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 858,
            "end": 862,
            "expression": {
              "type": "UpdateExpression",
              "start": 858,
              "end": 861,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 866,
      "end": 908,
      "id": {
        "type": "Identifier",
        "start": 883,
        "end": 884,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 885,
          "end": 898,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 886,
            "end": 898,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 888,
              "end": 898,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 888,
                "end": 898,
                "left": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 894,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 895,
                  "end": 898,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 899,
        "end": 907,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 901,
          "end": 907
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 909,
      "end": 951,
      "id": {
        "type": "Identifier",
        "start": 926,
        "end": 927,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 928,
          "end": 940,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 929,
            "end": 940,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 931,
              "end": 940,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 931,
                "end": 940,
                "left": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 937,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 940,
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 941,
        "end": 950,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 943,
          "end": 950
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 952,
      "end": 990,
      "id": {
        "type": "Identifier",
        "start": 969,
        "end": 970,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 971,
          "end": 980,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 972,
            "end": 980,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 974,
              "end": 980,
              "typeName": {
                "type": "Identifier",
                "start": 974,
                "end": 980,
                "decorators": [],
                "name": "Choice",
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
        "start": 981,
        "end": 989,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 983,
          "end": 989
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 992,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1001,
        "end": 1003,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1004,
          "end": 1012,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1005,
            "end": 1012,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1007,
              "end": 1012,
              "typeName": {
                "type": "Identifier",
                "start": 1007,
                "end": 1012,
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1014,
          "end": 1029,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1015,
            "end": 1029,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1017,
              "end": 1029,
              "typeName": {
                "type": "Identifier",
                "start": 1017,
                "end": 1029,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1031,
          "end": 1040,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1032,
            "end": 1040,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1034,
              "end": 1040,
              "typeName": {
                "type": "Identifier",
                "start": 1034,
                "end": 1040,
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1042,
        "end": 1157,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1048,
            "end": 1071,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1052,
                "end": 1070,
                "id": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1054,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1057,
                  "end": 1070,
                  "callee": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1059,
                      "end": 1069,
                      "object": {
                        "type": "Identifier",
                        "start": 1059,
                        "end": 1065,
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1069,
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "start": 1076,
            "end": 1098,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1080,
                "end": 1097,
                "id": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1082,
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1085,
                  "end": 1097,
                  "callee": {
                    "type": "Identifier",
                    "start": 1085,
                    "end": 1086,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1087,
                      "end": 1096,
                      "object": {
                        "type": "Identifier",
                        "start": 1087,
                        "end": 1093,
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1094,
                        "end": 1096,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "start": 1103,
            "end": 1117,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1107,
                "end": 1116,
                "id": {
                  "type": "Identifier",
                  "start": 1107,
                  "end": 1109,
                  "decorators": [],
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1112,
                  "end": 1116,
                  "callee": {
                    "type": "Identifier",
                    "start": 1112,
                    "end": 1113,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1114,
                      "end": 1115,
                      "decorators": [],
                      "name": "a",
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
            "start": 1122,
            "end": 1136,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1126,
                "end": 1135,
                "id": {
                  "type": "Identifier",
                  "start": 1126,
                  "end": 1128,
                  "decorators": [],
                  "name": "z4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1131,
                  "end": 1135,
                  "callee": {
                    "type": "Identifier",
                    "start": 1131,
                    "end": 1132,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1133,
                      "end": 1134,
                      "decorators": [],
                      "name": "b",
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
            "start": 1141,
            "end": 1155,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1145,
                "end": 1154,
                "id": {
                  "type": "Identifier",
                  "start": 1145,
                  "end": 1147,
                  "decorators": [],
                  "name": "z5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1150,
                  "end": 1154,
                  "callee": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1152,
                      "end": 1153,
                      "decorators": [],
                      "name": "c",
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 1159,
      "end": 1241,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1179,
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1180,
          "end": 1188,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1181,
            "end": 1188,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 1183,
              "end": 1188
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1189,
        "end": 1196,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1191,
          "end": 1196
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1197,
        "end": 1241,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 1203,
            "end": 1239,
            "argument": {
              "type": "NewExpression",
              "start": 1209,
              "end": 1238,
              "callee": {
                "type": "Identifier",
                "start": 1213,
                "end": 1218,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1219,
                  "end": 1237,
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\""
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1243,
      "end": 1372,
      "id": {
        "type": "Identifier",
        "start": 1252,
        "end": 1255,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1256,
          "end": 1264,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1257,
            "end": 1264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1259,
              "end": 1264,
              "typeName": {
                "type": "Identifier",
                "start": 1259,
                "end": 1264,
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1266,
        "end": 1372,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1272,
            "end": 1370,
            "discriminant": {
              "type": "Identifier",
              "start": 1280,
              "end": 1281,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1293,
                "end": 1324,
                "test": {
                  "type": "MemberExpression",
                  "start": 1298,
                  "end": 1308,
                  "object": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1304,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1305,
                    "end": 1308,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1310,
                    "end": 1324,
                    "argument": {
                      "type": "Literal",
                      "start": 1317,
                      "end": 1323,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1333,
                "end": 1364,
                "test": {
                  "type": "MemberExpression",
                  "start": 1338,
                  "end": 1347,
                  "object": {
                    "type": "Identifier",
                    "start": 1338,
                    "end": 1344,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1345,
                    "end": 1347,
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1349,
                    "end": 1364,
                    "argument": {
                      "type": "Literal",
                      "start": 1356,
                      "end": 1363,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1374,
      "end": 1530,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1386,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1387,
          "end": 1395,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1388,
            "end": 1395,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1390,
              "end": 1395,
              "typeName": {
                "type": "Identifier",
                "start": 1390,
                "end": 1395,
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1397,
        "end": 1530,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1403,
            "end": 1501,
            "discriminant": {
              "type": "Identifier",
              "start": 1411,
              "end": 1412,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1424,
                "end": 1455,
                "test": {
                  "type": "MemberExpression",
                  "start": 1429,
                  "end": 1439,
                  "object": {
                    "type": "Identifier",
                    "start": 1429,
                    "end": 1435,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1436,
                    "end": 1439,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1441,
                    "end": 1455,
                    "argument": {
                      "type": "Literal",
                      "start": 1448,
                      "end": 1454,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1464,
                "end": 1495,
                "test": {
                  "type": "MemberExpression",
                  "start": 1469,
                  "end": 1478,
                  "object": {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1475,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1476,
                    "end": 1478,
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1480,
                    "end": 1495,
                    "argument": {
                      "type": "Literal",
                      "start": 1487,
                      "end": 1494,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1506,
            "end": 1528,
            "argument": {
              "type": "CallExpression",
              "start": 1513,
              "end": 1527,
              "callee": {
                "type": "Identifier",
                "start": 1513,
                "end": 1524,
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1526,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1532,
      "end": 1623,
      "id": {
        "type": "Identifier",
        "start": 1541,
        "end": 1544,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1545,
          "end": 1560,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1546,
            "end": 1560,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1548,
              "end": 1560,
              "typeName": {
                "type": "Identifier",
                "start": 1548,
                "end": 1560,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1623,
        "body": [
          {
            "type": "IfStatement",
            "start": 1568,
            "end": 1621,
            "test": {
              "type": "Identifier",
              "start": 1572,
              "end": 1573,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1575,
              "end": 1593,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1585,
                  "end": 1587,
                  "expression": {
                    "type": "Identifier",
                    "start": 1585,
                    "end": 1586,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1603,
              "end": 1621,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1613,
                  "end": 1615,
                  "expression": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1614,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1731,
      "id": {
        "type": "Identifier",
        "start": 1634,
        "end": 1637,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1638,
          "end": 1653,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1639,
            "end": 1653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1641,
              "end": 1653,
              "typeName": {
                "type": "Identifier",
                "start": 1641,
                "end": 1653,
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1655,
        "end": 1731,
        "body": [
          {
            "type": "IfStatement",
            "start": 1661,
            "end": 1729,
            "test": {
              "type": "BinaryExpression",
              "start": 1665,
              "end": 1681,
              "left": {
                "type": "Identifier",
                "start": 1665,
                "end": 1666,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1671,
                "end": 1681,
                "object": {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1677,
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1681,
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1683,
              "end": 1701,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1693,
                  "end": 1695,
                  "expression": {
                    "type": "Identifier",
                    "start": 1693,
                    "end": 1694,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1711,
              "end": 1729,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1721,
                  "end": 1723,
                  "expression": {
                    "type": "Identifier",
                    "start": 1721,
                    "end": 1722,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1733,
      "end": 1818,
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1742,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1749,
        "end": 1817,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1749,
            "end": 1780,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1751,
                "end": 1768,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1755,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1755,
                  "end": 1767,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1757,
                    "end": 1767,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1757,
                      "end": 1767,
                      "left": {
                        "type": "Identifier",
                        "start": 1757,
                        "end": 1763,
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1764,
                        "end": 1767,
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1769,
                "end": 1778,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1769,
                  "end": 1770,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1770,
                  "end": 1778,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1772,
                    "end": 1778
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1787,
            "end": 1817,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1789,
                "end": 1805,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1789,
                  "end": 1793,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1793,
                  "end": 1804,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1795,
                    "end": 1804,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1795,
                      "end": 1804,
                      "left": {
                        "type": "Identifier",
                        "start": 1795,
                        "end": 1801,
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1802,
                        "end": 1804,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1806,
                "end": 1815,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1806,
                  "end": 1807,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1807,
                  "end": 1815,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1809,
                    "end": 1815
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1820,
      "end": 1946,
      "id": {
        "type": "Identifier",
        "start": 1829,
        "end": 1832,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1833,
          "end": 1840,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1834,
            "end": 1840,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1836,
              "end": 1840,
              "typeName": {
                "type": "Identifier",
                "start": 1836,
                "end": 1840,
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1842,
        "end": 1946,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1848,
            "end": 1944,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1856,
              "end": 1862,
              "object": {
                "type": "Identifier",
                "start": 1856,
                "end": 1857,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1858,
                "end": 1862,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1874,
                "end": 1902,
                "test": {
                  "type": "MemberExpression",
                  "start": 1879,
                  "end": 1889,
                  "object": {
                    "type": "Identifier",
                    "start": 1879,
                    "end": 1885,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1889,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1891,
                    "end": 1902,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1898,
                      "end": 1901,
                      "object": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1899,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1900,
                        "end": 1901,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1911,
                "end": 1938,
                "test": {
                  "type": "MemberExpression",
                  "start": 1916,
                  "end": 1925,
                  "object": {
                    "type": "Identifier",
                    "start": 1916,
                    "end": 1922,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1923,
                    "end": 1925,
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1927,
                    "end": 1938,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1934,
                      "end": 1937,
                      "object": {
                        "type": "Identifier",
                        "start": 1934,
                        "end": 1935,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1936,
                        "end": 1937,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1948,
      "end": 2101,
      "id": {
        "type": "Identifier",
        "start": 1957,
        "end": 1960,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1961,
          "end": 1968,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1962,
            "end": 1968,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1964,
              "end": 1968,
              "typeName": {
                "type": "Identifier",
                "start": 1964,
                "end": 1968,
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1970,
        "end": 2101,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1976,
            "end": 2072,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1984,
              "end": 1990,
              "object": {
                "type": "Identifier",
                "start": 1984,
                "end": 1985,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1986,
                "end": 1990,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2002,
                "end": 2030,
                "test": {
                  "type": "MemberExpression",
                  "start": 2007,
                  "end": 2017,
                  "object": {
                    "type": "Identifier",
                    "start": 2007,
                    "end": 2013,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2014,
                    "end": 2017,
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2019,
                    "end": 2030,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2026,
                      "end": 2029,
                      "object": {
                        "type": "Identifier",
                        "start": 2026,
                        "end": 2027,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2028,
                        "end": 2029,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2039,
                "end": 2066,
                "test": {
                  "type": "MemberExpression",
                  "start": 2044,
                  "end": 2053,
                  "object": {
                    "type": "Identifier",
                    "start": 2044,
                    "end": 2050,
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2051,
                    "end": 2053,
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2055,
                    "end": 2066,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2062,
                      "end": 2065,
                      "object": {
                        "type": "Identifier",
                        "start": 2062,
                        "end": 2063,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2064,
                        "end": 2065,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2077,
            "end": 2099,
            "argument": {
              "type": "CallExpression",
              "start": 2084,
              "end": 2098,
              "callee": {
                "type": "Identifier",
                "start": 2084,
                "end": 2095,
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2096,
                  "end": 2097,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
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
