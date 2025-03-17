__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2087,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 17,
        "name": "Choice",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 20,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "name": "Unknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Yes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "No",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
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
              "name": "Unknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Yes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "No",
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
        "name": "YesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "NoYes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 100,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 110,
                "end": 113,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "UnknownYesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 142,
                "end": 149,
                "name": "Unknown",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "name": "Yes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 172,
                "end": 174,
                "name": "No",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "f1",
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
        "start": 191,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 210,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 209,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 209,
                  "name": "a",
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
                        "name": "YesNo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 215,
            "end": 228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 219,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 227,
                  "name": "a",
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
                        "name": "NoYes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 233,
            "end": 263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 262,
                  "name": "a",
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
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 250,
                              "name": "Yes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 262,
                              "name": "No",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      ]
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
            "start": 268,
            "end": 298,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 272,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 297,
                  "name": "a",
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
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 284,
                              "name": "No",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 297,
                              "name": "Yes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      ]
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 302,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "name": "f2",
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
          "start": 314,
          "end": 322,
          "name": "a",
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
                "name": "YesNo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 324,
          "end": 339,
          "name": "b",
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
                "name": "UnknownYesNo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 341,
          "end": 350,
          "name": "c",
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
                "name": "Choice",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "name": "b",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 790,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "name": "f3",
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
          "start": 402,
          "end": 415,
          "name": "a",
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
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 415,
                  "name": "Yes",
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
        {
          "type": "Identifier",
          "start": 417,
          "end": 425,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 418,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 420,
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 420,
                "end": 425,
                "name": "YesNo",
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
        "start": 427,
        "end": 790,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 433,
            "end": 447,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 437,
                "end": 446,
                "id": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 441,
                  "end": 446,
                  "left": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 446,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 452,
            "end": 466,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 456,
                "end": 465,
                "id": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 460,
                  "end": 465,
                  "left": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 471,
            "end": 485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 475,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 476,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 479,
                  "end": 484,
                  "left": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 504,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 503,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 498,
                  "end": 503,
                  "left": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 503,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 509,
            "end": 523,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 513,
                "end": 522,
                "id": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 517,
                  "end": 522,
                  "left": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 528,
            "end": 542,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 541,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 533,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 536,
                  "end": 541,
                  "left": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 547,
            "end": 561,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 551,
                "end": 560,
                "id": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 555,
                  "end": 560,
                  "left": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 566,
            "end": 580,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 570,
                "end": 579,
                "id": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 571,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 574,
                  "end": 579,
                  "left": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 579,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 585,
            "end": 596,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 589,
                "end": 595,
                "id": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 593,
                  "end": 595,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 601,
            "end": 612,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 605,
                "end": 611,
                "id": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 606,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 609,
                  "end": 611,
                  "operator": "~",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 617,
            "end": 632,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 631,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 625,
                  "end": 631,
                  "left": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 630,
                    "end": 631,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 637,
            "end": 652,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 641,
                "end": 651,
                "id": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 645,
                  "end": 651,
                  "left": {
                    "type": "Identifier",
                    "start": 645,
                    "end": 646,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 657,
            "end": 673,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 661,
                "end": 672,
                "id": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 662,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 665,
                  "end": 672,
                  "left": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 666,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 672,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 678,
            "end": 694,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 693,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 686,
                  "end": 693,
                  "left": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 687,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 713,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 703,
                "end": 712,
                "id": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 704,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 707,
                  "end": 712,
                  "left": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 712,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 718,
            "end": 732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 722,
                "end": 731,
                "id": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 723,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 726,
                  "end": 731,
                  "left": {
                    "type": "Identifier",
                    "start": 726,
                    "end": 727,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 731,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 737,
            "end": 752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 751,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 742,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 745,
                  "end": 751,
                  "left": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 757,
            "end": 772,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 761,
                "end": 771,
                "id": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 765,
                  "end": 771,
                  "left": {
                    "type": "Identifier",
                    "start": 765,
                    "end": 766,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 777,
            "end": 788,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 781,
                "end": 787,
                "id": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 785,
                  "end": 787,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 792,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 801,
        "end": 803,
        "name": "f4",
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
          "start": 804,
          "end": 817,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 805,
            "end": 817,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 807,
              "end": 817,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 807,
                "end": 817,
                "left": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 813,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 817,
                  "name": "Yes",
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
        {
          "type": "Identifier",
          "start": 819,
          "end": 827,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 820,
            "end": 827,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 822,
              "end": 827,
              "typeName": {
                "type": "Identifier",
                "start": 822,
                "end": 827,
                "name": "YesNo",
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
        "start": 829,
        "end": 850,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 835,
            "end": 839,
            "expression": {
              "type": "UpdateExpression",
              "start": 835,
              "end": 838,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 844,
            "end": 848,
            "expression": {
              "type": "UpdateExpression",
              "start": 844,
              "end": 847,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 844,
                "end": 845,
                "name": "b",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 852,
      "end": 894,
      "id": {
        "type": "Identifier",
        "start": 869,
        "end": 870,
        "name": "g",
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
          "start": 871,
          "end": 884,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 872,
            "end": 884,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 874,
              "end": 884,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 874,
                "end": 884,
                "left": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 880,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 884,
                  "name": "Yes",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 885,
        "end": 893,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 887,
          "end": 893
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 895,
      "end": 937,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 913,
        "name": "g",
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
          "start": 914,
          "end": 926,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 915,
            "end": 926,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 917,
              "end": 926,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 917,
                "end": 926,
                "left": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 923,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 926,
                  "name": "No",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 927,
        "end": 936,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 929,
          "end": 936
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 938,
      "end": 976,
      "id": {
        "type": "Identifier",
        "start": 955,
        "end": 956,
        "name": "g",
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
          "start": 957,
          "end": 966,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 958,
            "end": 966,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 960,
              "end": 966,
              "typeName": {
                "type": "Identifier",
                "start": 960,
                "end": 966,
                "name": "Choice",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 967,
        "end": 975,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 969,
          "end": 975
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 978,
      "end": 1143,
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 989,
        "name": "f5",
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
          "start": 990,
          "end": 998,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 991,
            "end": 998,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 993,
              "end": 998,
              "typeName": {
                "type": "Identifier",
                "start": 993,
                "end": 998,
                "name": "YesNo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1000,
          "end": 1015,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1001,
            "end": 1015,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1003,
              "end": 1015,
              "typeName": {
                "type": "Identifier",
                "start": 1003,
                "end": 1015,
                "name": "UnknownYesNo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1017,
          "end": 1026,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1018,
            "end": 1026,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1020,
              "end": 1026,
              "typeName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1026,
                "name": "Choice",
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
        "start": 1028,
        "end": 1143,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1034,
            "end": 1057,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1038,
                "end": 1056,
                "id": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1040,
                  "name": "z1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1043,
                  "end": 1056,
                  "callee": {
                    "type": "Identifier",
                    "start": 1043,
                    "end": 1044,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1045,
                      "end": 1055,
                      "object": {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1051,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1055,
                        "name": "Yes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1062,
            "end": 1084,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1066,
                "end": 1083,
                "id": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1068,
                  "name": "z2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1071,
                  "end": 1083,
                  "callee": {
                    "type": "Identifier",
                    "start": 1071,
                    "end": 1072,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1073,
                      "end": 1082,
                      "object": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1079,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1080,
                        "end": 1082,
                        "name": "No",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1089,
            "end": 1103,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1093,
                "end": 1102,
                "id": {
                  "type": "Identifier",
                  "start": 1093,
                  "end": 1095,
                  "name": "z3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1098,
                  "end": 1102,
                  "callee": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1099,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1101,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1108,
            "end": 1122,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1112,
                "end": 1121,
                "id": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1114,
                  "name": "z4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1117,
                  "end": 1121,
                  "callee": {
                    "type": "Identifier",
                    "start": 1117,
                    "end": 1118,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1119,
                      "end": 1120,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1127,
            "end": 1141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1131,
                "end": 1140,
                "id": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1133,
                  "name": "z5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1136,
                  "end": 1140,
                  "callee": {
                    "type": "Identifier",
                    "start": 1136,
                    "end": 1137,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1138,
                      "end": 1139,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1145,
      "end": 1227,
      "id": {
        "type": "Identifier",
        "start": 1154,
        "end": 1165,
        "name": "assertNever",
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
          "start": 1166,
          "end": 1174,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1167,
            "end": 1174,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 1169,
              "end": 1174
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1183,
        "end": 1227,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 1189,
            "end": 1225,
            "argument": {
              "type": "NewExpression",
              "start": 1195,
              "end": 1224,
              "callee": {
                "type": "Identifier",
                "start": 1199,
                "end": 1204,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1205,
                  "end": 1223,
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\""
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1175,
        "end": 1182,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1177,
          "end": 1182
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1229,
      "end": 1358,
      "id": {
        "type": "Identifier",
        "start": 1238,
        "end": 1241,
        "name": "f10",
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
          "start": 1242,
          "end": 1250,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1243,
            "end": 1250,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1245,
              "end": 1250,
              "typeName": {
                "type": "Identifier",
                "start": 1245,
                "end": 1250,
                "name": "YesNo",
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
        "start": 1252,
        "end": 1358,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1258,
            "end": 1356,
            "discriminant": {
              "type": "Identifier",
              "start": 1266,
              "end": 1267,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1279,
                "end": 1310,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1296,
                    "end": 1310,
                    "argument": {
                      "type": "Literal",
                      "start": 1303,
                      "end": 1309,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1284,
                  "end": 1294,
                  "object": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1290,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1291,
                    "end": 1294,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1319,
                "end": 1350,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1335,
                    "end": 1350,
                    "argument": {
                      "type": "Literal",
                      "start": 1342,
                      "end": 1349,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1324,
                  "end": 1333,
                  "object": {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1330,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1331,
                    "end": 1333,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1360,
      "end": 1516,
      "id": {
        "type": "Identifier",
        "start": 1369,
        "end": 1372,
        "name": "f11",
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
          "start": 1373,
          "end": 1381,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1376,
              "end": 1381,
              "typeName": {
                "type": "Identifier",
                "start": 1376,
                "end": 1381,
                "name": "YesNo",
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
        "start": 1383,
        "end": 1516,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1389,
            "end": 1487,
            "discriminant": {
              "type": "Identifier",
              "start": 1397,
              "end": 1398,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1410,
                "end": 1441,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1427,
                    "end": 1441,
                    "argument": {
                      "type": "Literal",
                      "start": 1434,
                      "end": 1440,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1415,
                  "end": 1425,
                  "object": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1421,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1422,
                    "end": 1425,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1450,
                "end": 1481,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1466,
                    "end": 1481,
                    "argument": {
                      "type": "Literal",
                      "start": 1473,
                      "end": 1480,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1455,
                  "end": 1464,
                  "object": {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1461,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1464,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1492,
            "end": 1514,
            "argument": {
              "type": "CallExpression",
              "start": 1499,
              "end": 1513,
              "callee": {
                "type": "Identifier",
                "start": 1499,
                "end": 1510,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1512,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1518,
      "end": 1609,
      "id": {
        "type": "Identifier",
        "start": 1527,
        "end": 1530,
        "name": "f12",
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
          "start": 1531,
          "end": 1546,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1532,
            "end": 1546,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1534,
              "end": 1546,
              "typeName": {
                "type": "Identifier",
                "start": 1534,
                "end": 1546,
                "name": "UnknownYesNo",
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
        "start": 1548,
        "end": 1609,
        "body": [
          {
            "type": "IfStatement",
            "start": 1554,
            "end": 1607,
            "test": {
              "type": "Identifier",
              "start": 1558,
              "end": 1559,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1561,
              "end": 1579,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1571,
                  "end": 1573,
                  "expression": {
                    "type": "Identifier",
                    "start": 1571,
                    "end": 1572,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1589,
              "end": 1607,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1599,
                  "end": 1601,
                  "expression": {
                    "type": "Identifier",
                    "start": 1599,
                    "end": 1600,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1611,
      "end": 1717,
      "id": {
        "type": "Identifier",
        "start": 1620,
        "end": 1623,
        "name": "f13",
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
          "start": 1624,
          "end": 1639,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1625,
            "end": 1639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1627,
              "end": 1639,
              "typeName": {
                "type": "Identifier",
                "start": 1627,
                "end": 1639,
                "name": "UnknownYesNo",
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
        "start": 1641,
        "end": 1717,
        "body": [
          {
            "type": "IfStatement",
            "start": 1647,
            "end": 1715,
            "test": {
              "type": "BinaryExpression",
              "start": 1651,
              "end": 1667,
              "left": {
                "type": "Identifier",
                "start": 1651,
                "end": 1652,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1657,
                "end": 1667,
                "object": {
                  "type": "Identifier",
                  "start": 1657,
                  "end": 1663,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1667,
                  "name": "Yes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1669,
              "end": 1687,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1679,
                  "end": 1681,
                  "expression": {
                    "type": "Identifier",
                    "start": 1679,
                    "end": 1680,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1697,
              "end": 1715,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1707,
                  "end": 1709,
                  "expression": {
                    "type": "Identifier",
                    "start": 1707,
                    "end": 1708,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1719,
      "end": 1804,
      "id": {
        "type": "Identifier",
        "start": 1724,
        "end": 1728,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1735,
        "end": 1803,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1735,
            "end": 1766,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1737,
                "end": 1754,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1737,
                  "end": 1741,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1741,
                  "end": 1753,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1743,
                    "end": 1753,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1743,
                      "end": 1753,
                      "left": {
                        "type": "Identifier",
                        "start": 1743,
                        "end": 1749,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1750,
                        "end": 1753,
                        "name": "Yes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 1755,
                "end": 1764,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1756,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1756,
                  "end": 1764,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1758,
                    "end": 1764
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1773,
            "end": 1803,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1775,
                "end": 1791,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1775,
                  "end": 1779,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1779,
                  "end": 1790,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1781,
                    "end": 1790,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1781,
                      "end": 1790,
                      "left": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1787,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1788,
                        "end": 1790,
                        "name": "No",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 1792,
                "end": 1801,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1792,
                  "end": 1793,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1793,
                  "end": 1801,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1795,
                    "end": 1801
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
      "start": 1806,
      "end": 1932,
      "id": {
        "type": "Identifier",
        "start": 1815,
        "end": 1818,
        "name": "f20",
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
          "start": 1819,
          "end": 1826,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1820,
            "end": 1826,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1822,
              "end": 1826,
              "typeName": {
                "type": "Identifier",
                "start": 1822,
                "end": 1826,
                "name": "Item",
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
        "start": 1828,
        "end": 1932,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1834,
            "end": 1930,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1842,
              "end": 1848,
              "object": {
                "type": "Identifier",
                "start": 1842,
                "end": 1843,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1844,
                "end": 1848,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1860,
                "end": 1888,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1877,
                    "end": 1888,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1884,
                      "end": 1887,
                      "object": {
                        "type": "Identifier",
                        "start": 1884,
                        "end": 1885,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1886,
                        "end": 1887,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1865,
                  "end": 1875,
                  "object": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1871,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1875,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 1897,
                "end": 1924,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1913,
                    "end": 1924,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1920,
                      "end": 1923,
                      "object": {
                        "type": "Identifier",
                        "start": 1920,
                        "end": 1921,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1922,
                        "end": 1923,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1902,
                  "end": 1911,
                  "object": {
                    "type": "Identifier",
                    "start": 1902,
                    "end": 1908,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1909,
                    "end": 1911,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1934,
      "end": 2087,
      "id": {
        "type": "Identifier",
        "start": 1943,
        "end": 1946,
        "name": "f21",
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
          "start": 1947,
          "end": 1954,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1948,
            "end": 1954,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1950,
              "end": 1954,
              "typeName": {
                "type": "Identifier",
                "start": 1950,
                "end": 1954,
                "name": "Item",
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
        "start": 1956,
        "end": 2087,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1962,
            "end": 2058,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1970,
              "end": 1976,
              "object": {
                "type": "Identifier",
                "start": 1970,
                "end": 1971,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1972,
                "end": 1976,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1988,
                "end": 2016,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2005,
                    "end": 2016,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2012,
                      "end": 2015,
                      "object": {
                        "type": "Identifier",
                        "start": 2012,
                        "end": 2013,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2014,
                        "end": 2015,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1993,
                  "end": 2003,
                  "object": {
                    "type": "Identifier",
                    "start": 1993,
                    "end": 1999,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2000,
                    "end": 2003,
                    "name": "Yes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 2025,
                "end": 2052,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2041,
                    "end": 2052,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2048,
                      "end": 2051,
                      "object": {
                        "type": "Identifier",
                        "start": 2048,
                        "end": 2049,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2050,
                        "end": 2051,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2030,
                  "end": 2039,
                  "object": {
                    "type": "Identifier",
                    "start": 2030,
                    "end": 2036,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2037,
                    "end": 2039,
                    "name": "No",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2063,
            "end": 2085,
            "argument": {
              "type": "CallExpression",
              "start": 2070,
              "end": 2084,
              "callee": {
                "type": "Identifier",
                "start": 2070,
                "end": 2081,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2082,
                  "end": 2083,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
