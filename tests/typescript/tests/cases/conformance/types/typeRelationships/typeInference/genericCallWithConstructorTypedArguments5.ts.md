__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 770,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 168,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 168,
        "end": 174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 169,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
            "start": 172,
            "end": 173,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 175,
          "end": 202,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 202,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 180,
              "end": 202,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 182,
                  "end": 200,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 186,
                      "end": 200,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 190,
                          "end": 194,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 191,
                            "end": 194,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 193,
                              "end": 194,
                              "typeName": {
                                "type": "Identifier",
                                "start": 193,
                                "end": 194,
                                "decorators": [],
                                "name": "T",
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
                        "start": 196,
                        "end": 200,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 199,
                          "end": 200,
                          "typeName": {
                            "type": "Identifier",
                            "start": 199,
                            "end": 200,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 236,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 210,
            "end": 234,
            "argument": {
              "type": "NewExpression",
              "start": 217,
              "end": 233,
              "callee": {
                "type": "MemberExpression",
                "start": 221,
                "end": 227,
                "object": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 224,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 228,
                  "end": 232,
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 277,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 247,
                "end": 277,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 249,
                    "end": 275,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 251,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 251,
                      "end": 275,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 253,
                        "end": 275,
                        "abstract": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 256,
                          "end": 259,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 257,
                              "end": 258,
                              "name": {
                                "type": "Identifier",
                                "start": 257,
                                "end": 258,
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
                            "start": 260,
                            "end": 264,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 261,
                              "end": 264,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 263,
                                "end": 264,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 264,
                                  "decorators": [],
                                  "name": "T",
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
                          "start": 266,
                          "end": 275,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 269,
                            "end": 275
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 279,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 287,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 294,
                "decorators": [],
                "name": "arg",
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
      "start": 328,
      "end": 376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 375,
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 338,
                "end": 375,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 340,
                    "end": 373,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 342,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 373,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 344,
                        "end": 373,
                        "abstract": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 348,
                          "end": 351,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 349,
                              "end": 350,
                              "name": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 350,
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
                            "start": 352,
                            "end": 356,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 353,
                              "end": 356,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 355,
                                "end": 356,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 355,
                                  "end": 356,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 358,
                            "end": 362,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 359,
                              "end": 362,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 361,
                                "end": 362,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 362,
                                  "decorators": [],
                                  "name": "T",
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
                          "start": 364,
                          "end": 373,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 367,
                            "end": 373
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 377,
      "end": 396,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 395,
            "callee": {
              "type": "Identifier",
              "start": 386,
              "end": 389,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 394,
                "decorators": [],
                "name": "arg2",
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
      "start": 406,
      "end": 461,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 460,
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 460,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 416,
                "end": 460,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 418,
                    "end": 458,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 420,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 420,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 422,
                        "end": 458,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 427,
                            "end": 436,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 428,
                              "end": 436,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 430,
                                "end": 436
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 438,
                            "end": 447,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 439,
                              "end": 447,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 441,
                                "end": 447
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 449,
                          "end": 458,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 452,
                            "end": 458
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 462,
      "end": 481,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 468,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 471,
            "end": 480,
            "callee": {
              "type": "Identifier",
              "start": 471,
              "end": 474,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 475,
                "end": 479,
                "decorators": [],
                "name": "arg3",
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
      "type": "FunctionDeclaration",
      "start": 492,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 505,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 505,
        "end": 511,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 506,
            "end": 507,
            "name": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
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
            "start": 509,
            "end": 510,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 512,
          "end": 546,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 515,
            "end": 546,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 517,
              "end": 546,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 519,
                  "end": 544,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 521,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 521,
                    "end": 544,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 523,
                      "end": 544,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 527,
                          "end": 531,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 528,
                            "end": 531,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 530,
                              "end": 531,
                              "typeName": {
                                "type": "Identifier",
                                "start": 530,
                                "end": 531,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 533,
                          "end": 538,
                          "decorators": [],
                          "name": "t2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 535,
                            "end": 538,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 537,
                              "end": 538,
                              "typeName": {
                                "type": "Identifier",
                                "start": 537,
                                "end": 538,
                                "decorators": [],
                                "name": "T",
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
                        "start": 540,
                        "end": 544,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 543,
                          "end": 544,
                          "typeName": {
                            "type": "Identifier",
                            "start": 543,
                            "end": 544,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 548,
        "end": 586,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 554,
            "end": 584,
            "argument": {
              "type": "NewExpression",
              "start": 561,
              "end": 583,
              "callee": {
                "type": "MemberExpression",
                "start": 565,
                "end": 571,
                "object": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 568,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 571,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 572,
                  "end": 576,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Literal",
                  "start": 578,
                  "end": 582,
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 623,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 622,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 611,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 614,
            "end": 622,
            "callee": {
              "type": "Identifier",
              "start": 614,
              "end": 617,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 618,
                "end": 621,
                "decorators": [],
                "name": "arg",
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
      "start": 630,
      "end": 674,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 673,
            "decorators": [],
            "name": "arg4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 640,
                "end": 673,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 642,
                    "end": 671,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 642,
                      "end": 644,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 644,
                      "end": 671,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 646,
                        "end": 671,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 651,
                            "end": 660,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 652,
                              "end": 660,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 654,
                                "end": 660
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 662,
                          "end": 671,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 665,
                            "end": 671
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 675,
      "end": 694,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 681,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 693,
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 687,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 688,
                "end": 692,
                "decorators": [],
                "name": "arg4",
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
      "start": 705,
      "end": 740,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 709,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 709,
            "end": 739,
            "decorators": [],
            "name": "arg5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 713,
              "end": 739,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 715,
                "end": 739,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 717,
                    "end": 737,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 717,
                      "end": 719,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 719,
                      "end": 737,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 721,
                        "end": 737,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 728,
                          "end": 737,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 731,
                            "end": 737
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 741,
      "end": 760,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 747,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 750,
            "end": 759,
            "callee": {
              "type": "Identifier",
              "start": 750,
              "end": 753,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 754,
                "end": 758,
                "decorators": [],
                "name": "arg5",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
