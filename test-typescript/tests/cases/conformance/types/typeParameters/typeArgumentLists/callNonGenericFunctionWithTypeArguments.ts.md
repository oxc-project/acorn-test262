__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 113,
  "end": 696,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "name": "f",
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
          "start": 124,
          "end": 133,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 133,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 127,
              "end": 133
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 151,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 149,
            "argument": {
              "type": "Literal",
              "start": 144,
              "end": 148,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 172,
            "callee": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 161,
              "end": 169,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 162,
                  "end": 168
                }
              ]
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
      "start": 175,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 215,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 194,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 186,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 188,
                    "end": 194
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 199,
              "end": 215,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 201,
                  "end": 213,
                  "argument": {
                    "type": "Literal",
                    "start": 208,
                    "end": 212,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 238,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 227,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 236,
                "end": 237,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 227,
              "end": 235,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 228,
                  "end": 234
                }
              ]
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
      "start": 241,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 270,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 249,
                "end": 270,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 251,
                    "end": 268,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 252,
                        "end": 261,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 253,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 255,
                            "end": 261
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 264,
                        "end": 267
                      }
                    }
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
      "start": 271,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 282,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 291,
                "end": 292,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 282,
              "end": 290,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 283,
                  "end": 289
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 311,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 321,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 313,
                    "end": 321,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 315,
                      "end": 321
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 323,
                "end": 351,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 333,
                    "end": 345,
                    "argument": {
                      "type": "Literal",
                      "start": 340,
                      "end": 344,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 360,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 363,
            "end": 385,
            "callee": {
              "type": "MemberExpression",
              "start": 363,
              "end": 374,
              "object": {
                "type": "NewExpression",
                "start": 364,
                "end": 371,
                "callee": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 383,
                "end": 384,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 374,
              "end": 382,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 375,
                  "end": 381
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 388,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 399,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 400,
        "end": 426,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 406,
            "end": 424,
            "key": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 408,
                "end": 417,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 409,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 411,
                    "end": 417
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 423,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 420,
                "end": 423
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
      "type": "VariableDeclaration",
      "start": 427,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 435,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 435,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 434,
                "end": 435,
                "typeName": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 435,
                  "name": "I",
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
      "start": 437,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 446,
            "end": 460,
            "callee": {
              "type": "MemberExpression",
              "start": 446,
              "end": 449,
              "object": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 458,
                "end": 459,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 449,
              "end": 457,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 450,
                  "end": 456
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 463,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 471,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 472,
        "end": 521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 478,
            "end": 519,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 479,
              "end": 519,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 489,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 483,
                      "end": 489
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 491,
                "end": 519,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 501,
                    "end": 513,
                    "argument": {
                      "type": "Literal",
                      "start": 508,
                      "end": 512,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 528,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 531,
            "end": 554,
            "callee": {
              "type": "MemberExpression",
              "start": 531,
              "end": 543,
              "object": {
                "type": "NewExpression",
                "start": 532,
                "end": 540,
                "callee": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 538,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 552,
                "end": 553,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 543,
              "end": 551,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 544,
                  "end": 550
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 557,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 569,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 570,
        "end": 591,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 576,
            "end": 589,
            "key": {
              "type": "Identifier",
              "start": 576,
              "end": 577,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 578,
                "end": 587,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 579,
                  "end": 587,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 581,
                    "end": 587
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 602,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 598,
              "end": 602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 600,
                "end": 602,
                "typeName": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 602,
                  "name": "I2",
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
      "start": 604,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 613,
            "end": 628,
            "callee": {
              "type": "MemberExpression",
              "start": 613,
              "end": 617,
              "object": {
                "type": "Identifier",
                "start": 613,
                "end": 615,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 617,
              "end": 625,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 618,
                  "end": 624
                }
              ]
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
      "start": 631,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "name": "a",
            "typeAnnotation": null,
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
      "start": 638,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 644,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 647,
            "end": 658,
            "callee": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 648,
              "end": 656,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 649,
                  "end": 655
                }
              ]
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
      "start": 661,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 672,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 672,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 669,
                "end": 672
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
      "start": 674,
      "end": 696,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 680,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 683,
            "end": 695,
            "callee": {
              "type": "Identifier",
              "start": 683,
              "end": 685,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 685,
              "end": 693,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 686,
                  "end": 692
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
