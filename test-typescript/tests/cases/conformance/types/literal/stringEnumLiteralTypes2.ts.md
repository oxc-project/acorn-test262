__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1882,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 58,
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
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "name": "Unknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 30,
            "end": 32,
            "value": "",
            "raw": "\"\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 34,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 37,
            "name": "Yes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 40,
            "end": 45,
            "value": "yes",
            "raw": "\"yes\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 47,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "name": "No",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 52,
            "end": 56,
            "value": "no",
            "raw": "\"no\""
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 58,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "Unknown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "value": "",
              "raw": "\"\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "Yes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "value": "yes",
              "raw": "\"yes\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "name": "No",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 52,
              "end": 56,
              "value": "no",
              "raw": "\"no\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 71,
        "name": "YesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 74,
        "end": 96,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 74,
            "end": 84,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 74,
              "end": 84,
              "left": {
                "type": "Identifier",
                "start": 74,
                "end": 80,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
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
            "start": 87,
            "end": 96,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 87,
              "end": 96,
              "left": {
                "type": "Identifier",
                "start": 87,
                "end": 93,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
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
      "start": 98,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 108,
        "name": "NoYes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 111,
        "end": 133,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 111,
            "end": 120,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 111,
              "end": 120,
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 117,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 118,
                "end": 120,
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
            "start": 123,
            "end": 133,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 123,
              "end": 133,
              "left": {
                "type": "Identifier",
                "start": 123,
                "end": 129,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 130,
                "end": 133,
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
      "start": 135,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 152,
        "name": "UnknownYesNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 155,
        "end": 194,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 155,
            "end": 169,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 155,
              "end": 169,
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 161,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 162,
                "end": 169,
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
            "start": 172,
            "end": 182,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 172,
              "end": 182,
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 178,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 179,
                "end": 182,
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
            "start": 185,
            "end": 194,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 185,
              "end": 194,
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 191,
                "name": "Choice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 192,
                "end": 194,
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
      "start": 197,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
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
        "start": 211,
        "end": 320,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 217,
            "end": 230,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 229,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 229,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 229,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 229,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 229,
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
            "start": 235,
            "end": 248,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 239,
                "end": 247,
                "id": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 247,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 242,
                      "end": 247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 247,
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
            "start": 253,
            "end": 283,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 282,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 282,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 260,
                      "end": 282,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 260,
                          "end": 270,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 260,
                            "end": 270,
                            "left": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 266,
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 270,
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
                          "start": 273,
                          "end": 282,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 273,
                            "end": 282,
                            "left": {
                              "type": "Identifier",
                              "start": 273,
                              "end": 279,
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 282,
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
            "start": 288,
            "end": 318,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 292,
                "end": 317,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 317,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 317,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 295,
                      "end": 317,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 295,
                          "end": 304,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 295,
                            "end": 304,
                            "left": {
                              "type": "Identifier",
                              "start": 295,
                              "end": 301,
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 304,
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
                          "start": 307,
                          "end": 317,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 307,
                            "end": 317,
                            "left": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 313,
                              "name": "Choice",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 314,
                              "end": 317,
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
      "start": 322,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 333,
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
          "start": 334,
          "end": 342,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 342,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 337,
              "end": 342,
              "typeName": {
                "type": "Identifier",
                "start": 337,
                "end": 342,
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
          "start": 344,
          "end": 359,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 359,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 347,
              "end": 359,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 359,
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
          "start": 361,
          "end": 370,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 362,
            "end": 370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 364,
              "end": 370,
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 370,
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
        "start": 372,
        "end": 408,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 384,
            "expression": {
              "type": "AssignmentExpression",
              "start": 378,
              "end": 383,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
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
            "start": 389,
            "end": 395,
            "expression": {
              "type": "AssignmentExpression",
              "start": 389,
              "end": 394,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
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
            "start": 400,
            "end": 406,
            "expression": {
              "type": "AssignmentExpression",
              "start": 400,
              "end": 405,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
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
      "start": 410,
      "end": 645,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 421,
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
          "start": 422,
          "end": 435,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 423,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 435,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 425,
                "end": 435,
                "left": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 431,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 435,
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
          "start": 437,
          "end": 445,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 445,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 445,
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
        "start": 447,
        "end": 645,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 453,
            "end": 467,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 457,
                "end": 466,
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 461,
                  "end": 466,
                  "left": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 466,
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
            "start": 472,
            "end": 487,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 476,
                "end": 486,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 480,
                  "end": 486,
                  "left": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
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
            "start": 492,
            "end": 507,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 506,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 500,
                  "end": 506,
                  "left": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 505,
                    "end": 506,
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
            "start": 512,
            "end": 528,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 516,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 517,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 520,
                  "end": 527,
                  "left": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 521,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
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
            "start": 533,
            "end": 549,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 548,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 541,
                  "end": 548,
                  "left": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 542,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
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
            "start": 554,
            "end": 568,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 558,
                "end": 567,
                "id": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 559,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 562,
                  "end": 567,
                  "left": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 567,
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
            "start": 573,
            "end": 587,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 577,
                "end": 586,
                "id": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 578,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 581,
                  "end": 586,
                  "left": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
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
            "start": 592,
            "end": 607,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 596,
                "end": 606,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 597,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 600,
                  "end": 606,
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
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
            "start": 612,
            "end": 627,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 616,
                "end": 626,
                "id": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 620,
                  "end": 626,
                  "left": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 621,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
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
            "start": 632,
            "end": 643,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 636,
                "end": 642,
                "id": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 640,
                  "end": 642,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 642,
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
      "type": "TSDeclareFunction",
      "start": 647,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 665,
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
          "start": 666,
          "end": 679,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 667,
            "end": 679,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 669,
              "end": 679,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 669,
                "end": 679,
                "left": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 675,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 679,
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
        "start": 680,
        "end": 688,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 682,
          "end": 688
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 690,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 708,
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
          "start": 709,
          "end": 721,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 710,
            "end": 721,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 712,
              "end": 721,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 712,
                "end": 721,
                "left": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 718,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 721,
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
        "start": 722,
        "end": 731,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 724,
          "end": 731
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 733,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 751,
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
          "start": 752,
          "end": 761,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 753,
            "end": 761,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 755,
              "end": 761,
              "typeName": {
                "type": "Identifier",
                "start": 755,
                "end": 761,
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
        "start": 762,
        "end": 770,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 764,
          "end": 770
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 773,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 784,
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
          "start": 785,
          "end": 793,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 786,
            "end": 793,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 788,
              "end": 793,
              "typeName": {
                "type": "Identifier",
                "start": 788,
                "end": 793,
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
          "start": 795,
          "end": 810,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 796,
            "end": 810,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 798,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 798,
                "end": 810,
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
          "start": 812,
          "end": 821,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 813,
            "end": 821,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 815,
              "end": 821,
              "typeName": {
                "type": "Identifier",
                "start": 815,
                "end": 821,
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
        "start": 823,
        "end": 938,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 829,
            "end": 852,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 833,
                "end": 851,
                "id": {
                  "type": "Identifier",
                  "start": 833,
                  "end": 835,
                  "name": "z1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 838,
                  "end": 851,
                  "callee": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 839,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 840,
                      "end": 850,
                      "object": {
                        "type": "Identifier",
                        "start": 840,
                        "end": 846,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 847,
                        "end": 850,
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
            "start": 857,
            "end": 879,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 861,
                "end": 878,
                "id": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 863,
                  "name": "z2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 866,
                  "end": 878,
                  "callee": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 867,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 868,
                      "end": 877,
                      "object": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 874,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 875,
                        "end": 877,
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
            "start": 884,
            "end": 898,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 888,
                "end": 897,
                "id": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 890,
                  "name": "z3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 893,
                  "end": 897,
                  "callee": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 894,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 895,
                      "end": 896,
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
            "start": 903,
            "end": 917,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 907,
                "end": 916,
                "id": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 909,
                  "name": "z4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 912,
                  "end": 916,
                  "callee": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 913,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 914,
                      "end": 915,
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
            "start": 922,
            "end": 936,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 926,
                "end": 935,
                "id": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 928,
                  "name": "z5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 931,
                  "end": 935,
                  "callee": {
                    "type": "Identifier",
                    "start": 931,
                    "end": 932,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 933,
                      "end": 934,
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
      "start": 940,
      "end": 1022,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 960,
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
          "start": 961,
          "end": 969,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 962,
            "end": 969,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 964,
              "end": 969
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 978,
        "end": 1022,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 984,
            "end": 1020,
            "argument": {
              "type": "NewExpression",
              "start": 990,
              "end": 1019,
              "callee": {
                "type": "Identifier",
                "start": 994,
                "end": 999,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1000,
                  "end": 1018,
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
        "start": 970,
        "end": 977,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 972,
          "end": 977
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1024,
      "end": 1153,
      "id": {
        "type": "Identifier",
        "start": 1033,
        "end": 1036,
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
          "start": 1037,
          "end": 1045,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1038,
            "end": 1045,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1040,
              "end": 1045,
              "typeName": {
                "type": "Identifier",
                "start": 1040,
                "end": 1045,
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
        "start": 1047,
        "end": 1153,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1053,
            "end": 1151,
            "discriminant": {
              "type": "Identifier",
              "start": 1061,
              "end": 1062,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1074,
                "end": 1105,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1091,
                    "end": 1105,
                    "argument": {
                      "type": "Literal",
                      "start": 1098,
                      "end": 1104,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1079,
                  "end": 1089,
                  "object": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1085,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1086,
                    "end": 1089,
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
                "start": 1114,
                "end": 1145,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1130,
                    "end": 1145,
                    "argument": {
                      "type": "Literal",
                      "start": 1137,
                      "end": 1144,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1119,
                  "end": 1128,
                  "object": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1125,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1126,
                    "end": 1128,
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
      "start": 1155,
      "end": 1311,
      "id": {
        "type": "Identifier",
        "start": 1164,
        "end": 1167,
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
          "start": 1168,
          "end": 1176,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1169,
            "end": 1176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1171,
              "end": 1176,
              "typeName": {
                "type": "Identifier",
                "start": 1171,
                "end": 1176,
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
        "start": 1178,
        "end": 1311,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1184,
            "end": 1282,
            "discriminant": {
              "type": "Identifier",
              "start": 1192,
              "end": 1193,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1205,
                "end": 1236,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1222,
                    "end": 1236,
                    "argument": {
                      "type": "Literal",
                      "start": 1229,
                      "end": 1235,
                      "value": "true",
                      "raw": "\"true\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1210,
                  "end": 1220,
                  "object": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1216,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1220,
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
                "start": 1245,
                "end": 1276,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1261,
                    "end": 1276,
                    "argument": {
                      "type": "Literal",
                      "start": 1268,
                      "end": 1275,
                      "value": "false",
                      "raw": "\"false\""
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 1250,
                  "end": 1259,
                  "object": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1256,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1257,
                    "end": 1259,
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
            "start": 1287,
            "end": 1309,
            "argument": {
              "type": "CallExpression",
              "start": 1294,
              "end": 1308,
              "callee": {
                "type": "Identifier",
                "start": 1294,
                "end": 1305,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1306,
                  "end": 1307,
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
      "start": 1313,
      "end": 1404,
      "id": {
        "type": "Identifier",
        "start": 1322,
        "end": 1325,
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
          "start": 1326,
          "end": 1341,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1327,
            "end": 1341,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1329,
              "end": 1341,
              "typeName": {
                "type": "Identifier",
                "start": 1329,
                "end": 1341,
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
        "start": 1343,
        "end": 1404,
        "body": [
          {
            "type": "IfStatement",
            "start": 1349,
            "end": 1402,
            "test": {
              "type": "Identifier",
              "start": 1353,
              "end": 1354,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1356,
              "end": 1374,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1366,
                  "end": 1368,
                  "expression": {
                    "type": "Identifier",
                    "start": 1366,
                    "end": 1367,
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
              "start": 1384,
              "end": 1402,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1394,
                  "end": 1396,
                  "expression": {
                    "type": "Identifier",
                    "start": 1394,
                    "end": 1395,
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
      "start": 1406,
      "end": 1512,
      "id": {
        "type": "Identifier",
        "start": 1415,
        "end": 1418,
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
          "start": 1419,
          "end": 1434,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1420,
            "end": 1434,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1422,
              "end": 1434,
              "typeName": {
                "type": "Identifier",
                "start": 1422,
                "end": 1434,
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
        "start": 1436,
        "end": 1512,
        "body": [
          {
            "type": "IfStatement",
            "start": 1442,
            "end": 1510,
            "test": {
              "type": "BinaryExpression",
              "start": 1446,
              "end": 1462,
              "left": {
                "type": "Identifier",
                "start": 1446,
                "end": 1447,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 1452,
                "end": 1462,
                "object": {
                  "type": "Identifier",
                  "start": 1452,
                  "end": 1458,
                  "name": "Choice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1462,
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
              "start": 1464,
              "end": 1482,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1474,
                  "end": 1476,
                  "expression": {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1475,
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
              "start": 1492,
              "end": 1510,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1502,
                  "end": 1504,
                  "expression": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1503,
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
      "start": 1514,
      "end": 1599,
      "id": {
        "type": "Identifier",
        "start": 1519,
        "end": 1523,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1530,
        "end": 1598,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1530,
            "end": 1561,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1532,
                "end": 1549,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1536,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1536,
                  "end": 1548,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1538,
                    "end": 1548,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1538,
                      "end": 1548,
                      "left": {
                        "type": "Identifier",
                        "start": 1538,
                        "end": 1544,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1545,
                        "end": 1548,
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
                "start": 1550,
                "end": 1559,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1550,
                  "end": 1551,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1551,
                  "end": 1559,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1553,
                    "end": 1559
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1568,
            "end": 1598,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1570,
                "end": 1586,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1570,
                  "end": 1574,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1574,
                  "end": 1585,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1576,
                    "end": 1585,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 1576,
                      "end": 1585,
                      "left": {
                        "type": "Identifier",
                        "start": 1576,
                        "end": 1582,
                        "name": "Choice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1583,
                        "end": 1585,
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
                "start": 1587,
                "end": 1596,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1587,
                  "end": 1588,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1588,
                  "end": 1596,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1590,
                    "end": 1596
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
      "start": 1601,
      "end": 1727,
      "id": {
        "type": "Identifier",
        "start": 1610,
        "end": 1613,
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
          "start": 1614,
          "end": 1621,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1615,
            "end": 1621,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1617,
              "end": 1621,
              "typeName": {
                "type": "Identifier",
                "start": 1617,
                "end": 1621,
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
        "start": 1623,
        "end": 1727,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1629,
            "end": 1725,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1637,
              "end": 1643,
              "object": {
                "type": "Identifier",
                "start": 1637,
                "end": 1638,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1639,
                "end": 1643,
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
                "start": 1655,
                "end": 1683,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1672,
                    "end": 1683,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1679,
                      "end": 1682,
                      "object": {
                        "type": "Identifier",
                        "start": 1679,
                        "end": 1680,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1681,
                        "end": 1682,
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
                  "start": 1660,
                  "end": 1670,
                  "object": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1666,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1670,
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
                "start": 1692,
                "end": 1719,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1708,
                    "end": 1719,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1715,
                      "end": 1718,
                      "object": {
                        "type": "Identifier",
                        "start": 1715,
                        "end": 1716,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1717,
                        "end": 1718,
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
                  "start": 1697,
                  "end": 1706,
                  "object": {
                    "type": "Identifier",
                    "start": 1697,
                    "end": 1703,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1704,
                    "end": 1706,
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
      "start": 1729,
      "end": 1882,
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1741,
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
          "start": 1742,
          "end": 1749,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1743,
            "end": 1749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1745,
              "end": 1749,
              "typeName": {
                "type": "Identifier",
                "start": 1745,
                "end": 1749,
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
        "start": 1751,
        "end": 1882,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1757,
            "end": 1853,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1765,
              "end": 1771,
              "object": {
                "type": "Identifier",
                "start": 1765,
                "end": 1766,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1767,
                "end": 1771,
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
                "start": 1783,
                "end": 1811,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1800,
                    "end": 1811,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1807,
                      "end": 1810,
                      "object": {
                        "type": "Identifier",
                        "start": 1807,
                        "end": 1808,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1809,
                        "end": 1810,
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
                  "start": 1788,
                  "end": 1798,
                  "object": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1794,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1798,
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
                "start": 1820,
                "end": 1847,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1836,
                    "end": 1847,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1843,
                      "end": 1846,
                      "object": {
                        "type": "Identifier",
                        "start": 1843,
                        "end": 1844,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1845,
                        "end": 1846,
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
                  "start": 1825,
                  "end": 1834,
                  "object": {
                    "type": "Identifier",
                    "start": 1825,
                    "end": 1831,
                    "name": "Choice",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1832,
                    "end": 1834,
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
            "start": 1858,
            "end": 1880,
            "argument": {
              "type": "CallExpression",
              "start": 1865,
              "end": 1879,
              "callee": {
                "type": "Identifier",
                "start": 1865,
                "end": 1876,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1878,
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
