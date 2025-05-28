__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 1057,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 132,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 85,
            "end": 130,
            "key": {
              "type": "MemberExpression",
              "start": 86,
              "end": 101,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 92,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 93,
                "end": 101,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 115,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 115,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 122,
                      "end": 129
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 143,
        "decorators": [],
        "name": "Book",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 146,
        "end": 193,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 159,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 150,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 158,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 152,
                "end": 158
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 160,
            "end": 174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 165,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 173,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 175,
            "end": 191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 183,
              "decorators": [],
              "name": "authorId",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 191,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 185,
                "end": 191
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
      "type": "TSTypeAliasDeclaration",
      "start": 195,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 206,
        "decorators": [],
        "name": "Author",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 209,
        "end": 237,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 222,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 213,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 221,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 223,
            "end": 235,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 227,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 229,
                "end": 235
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
      "type": "TSTypeAliasDeclaration",
      "start": 239,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 258,
        "decorators": [],
        "name": "BookWithAuthor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 261,
        "end": 286,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 261,
            "end": 265,
            "typeName": {
              "type": "Identifier",
              "start": 261,
              "end": 265,
              "decorators": [],
              "name": "Book",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 268,
            "end": 286,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 270,
                "end": 284,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "decorators": [],
                  "name": "author",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 276,
                  "end": 284,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 284,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 284,
                      "decorators": [],
                      "name": "Author",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 289,
      "end": 362,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 361,
            "decorators": [],
            "name": "authorPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 325,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 325,
                  "end": 361,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 332,
                        "decorators": [],
                        "name": "Result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 332,
                        "end": 360,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 333,
                            "end": 339,
                            "typeName": {
                              "type": "Identifier",
                              "start": 333,
                              "end": 339,
                              "decorators": [],
                              "name": "Author",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 341,
                            "end": 359,
                            "literal": {
                              "type": "Literal",
                              "start": 341,
                              "end": 359,
                              "value": "NOT_FOUND_AUTHOR",
                              "raw": "\"NOT_FOUND_AUTHOR\""
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 461,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 460,
            "decorators": [],
            "name": "mapper",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 460,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 385,
                "end": 460,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 385,
                  "end": 388,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 386,
                      "end": 387,
                      "name": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 389,
                    "end": 426,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 395,
                      "end": 426,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 397,
                        "end": 426,
                        "typeName": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 403,
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 403,
                          "end": 426,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 404,
                              "end": 405,
                              "typeName": {
                                "type": "Identifier",
                                "start": 404,
                                "end": 405,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 407,
                              "end": 425,
                              "literal": {
                                "type": "Literal",
                                "start": 407,
                                "end": 425,
                                "value": "NOT_FOUND_AUTHOR",
                                "raw": "\"NOT_FOUND_AUTHOR\""
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 431,
                    "end": 460,
                    "typeName": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 437,
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 437,
                      "end": 460,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 438,
                          "end": 439,
                          "typeName": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 439,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 441,
                          "end": 459,
                          "literal": {
                            "type": "Literal",
                            "start": 441,
                            "end": 459,
                            "value": "NOT_FOUND_AUTHOR",
                            "raw": "\"NOT_FOUND_AUTHOR\""
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 518,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 517,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 517,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 479,
                "end": 517,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 479,
                  "end": 488,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 480,
                      "end": 481,
                      "name": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 481,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 483,
                      "end": 484,
                      "name": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 486,
                      "end": 487,
                      "name": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 491,
                  "end": 517,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 494,
                    "end": 517,
                    "typeName": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 508,
                      "decorators": [],
                      "name": "AsyncGenerator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 508,
                      "end": 517,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 509,
                          "end": 510,
                          "typeName": {
                            "type": "Identifier",
                            "start": 509,
                            "end": 510,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 512,
                          "end": 513,
                          "typeName": {
                            "type": "Identifier",
                            "start": 512,
                            "end": 513,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 515,
                          "end": 516,
                          "typeName": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 520,
      "end": 1057,
      "id": {
        "type": "Identifier",
        "start": 536,
        "end": 537,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 539,
        "end": 619,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 541,
          "end": 619,
          "typeName": {
            "type": "Identifier",
            "start": 541,
            "end": 555,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 555,
            "end": 619,
            "params": [
              {
                "type": "TSUnionType",
                "start": 556,
                "end": 593,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 556,
                    "end": 574,
                    "literal": {
                      "type": "Literal",
                      "start": 556,
                      "end": 574,
                      "value": "NOT_FOUND_AUTHOR",
                      "raw": "\"NOT_FOUND_AUTHOR\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 577,
                    "end": 593,
                    "literal": {
                      "type": "Literal",
                      "start": 577,
                      "end": 593,
                      "value": "NOT_FOUND_BOOK",
                      "raw": "\"NOT_FOUND_BOOK\""
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 595,
                "end": 609,
                "typeName": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 609,
                  "decorators": [],
                  "name": "BookWithAuthor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSUnknownKeyword",
                "start": 611,
                "end": 618
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 620,
        "end": 1057,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 713,
            "end": 759,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 719,
                "end": 759,
                "id": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 724,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 727,
                  "end": 759,
                  "argument": {
                    "type": "CallExpression",
                    "start": 733,
                    "end": 759,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 733,
                      "end": 751,
                      "object": {
                        "type": "Identifier",
                        "start": 733,
                        "end": 746,
                        "decorators": [],
                        "name": "authorPromise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 747,
                        "end": 751,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 752,
                        "end": 758,
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 902,
            "end": 955,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 908,
                "end": 955,
                "id": {
                  "type": "Identifier",
                  "start": 908,
                  "end": 913,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 916,
                  "end": 955,
                  "delegate": true,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 923,
                    "end": 955,
                    "argument": {
                      "type": "CallExpression",
                      "start": 929,
                      "end": 955,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 929,
                        "end": 947,
                        "object": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 942,
                          "decorators": [],
                          "name": "authorPromise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 943,
                          "end": 947,
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 948,
                          "end": 954,
                          "decorators": [],
                          "name": "mapper",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 961,
            "end": 983,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 967,
                "end": 982,
                "id": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 969,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 972,
                  "end": 982,
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 979,
                    "end": 982,
                    "callee": {
                      "type": "Identifier",
                      "start": 979,
                      "end": 980,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 988,
            "end": 1018,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 994,
                "end": 1017,
                "id": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 1004,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 996,
                    "end": 1004,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 998,
                      "end": 1004
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1007,
                  "end": 1017,
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1014,
                    "end": 1017,
                    "callee": {
                      "type": "Identifier",
                      "start": 1014,
                      "end": 1015,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1024,
            "end": 1055,
            "argument": {
              "type": "TSAsExpression",
              "start": 1031,
              "end": 1054,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 1031,
                "end": 1036,
                "expression": {
                  "type": "Literal",
                  "start": 1031,
                  "end": 1035,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1040,
                "end": 1054,
                "typeName": {
                  "type": "Identifier",
                  "start": 1040,
                  "end": 1054,
                  "decorators": [],
                  "name": "BookWithAuthor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
