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
        "decorators": [],
        "name": "f",
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
          "start": 124,
          "end": 133,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 133,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 127,
              "end": 133
            }
          }
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 173,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 172,
            "callee": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 215,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 194,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 186,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 188,
                    "end": 194
                  }
                }
              }
            ],
            "returnType": null,
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 239,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 222,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 238,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 227,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 270,
            "decorators": [],
            "name": "f3",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 253,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 255,
                            "end": 261
                          }
                        }
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
      "start": 271,
      "end": 294,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 282,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 353,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 351,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 311,
              "end": 351,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 321,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 313,
                    "end": 321,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 315,
                      "end": 321
                    }
                  }
                }
              ],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 386,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 360,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 409,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 411,
                    "end": 417
                  }
                }
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 435,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
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
      "start": 437,
      "end": 461,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 463,
      "end": 521,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 471,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 472,
        "end": 521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 478,
            "end": 519,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 479,
              "end": 519,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 489,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 483,
                      "end": 489
                    }
                  }
                }
              ],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 528,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 579,
                  "end": 587,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 581,
                    "end": 587
                  }
                }
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 602,
            "decorators": [],
            "name": "i2",
            "optional": false,
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
                  "decorators": [],
                  "name": "I2",
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
      "start": 604,
      "end": 629,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 631,
      "end": 637,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 659,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 644,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 647,
            "end": 658,
            "callee": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 661,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 672,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 672,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 669,
                "end": 672
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
      "start": 674,
      "end": 696,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 680,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 683,
            "end": 695,
            "callee": {
              "type": "Identifier",
              "start": 683,
              "end": 685,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [],
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
