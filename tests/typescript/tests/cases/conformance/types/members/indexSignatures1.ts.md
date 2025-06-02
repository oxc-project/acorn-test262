__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 6779,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 57,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 48,
            "end": 56,
            "callee": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "gg3",
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
          "start": 72,
          "end": 100,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 100,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 75,
              "end": 100,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 98,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 89,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 81,
                        "end": 89,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 83,
                          "end": 89
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 102,
          "end": 130,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 130,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 105,
              "end": 130,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 107,
                  "end": 128,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 108,
                      "end": 119,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 113,
                          "end": 119
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 122,
                      "end": 128
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 132,
          "end": 152,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 133,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 135,
              "end": 152,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 137,
                  "end": 150,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 141,
                    "decorators": [],
                    "name": "sym",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
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
        "start": 154,
        "end": 189,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 160,
            "end": 166,
            "expression": {
              "type": "AssignmentExpression",
              "start": 160,
              "end": 165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 171,
            "end": 177,
            "expression": {
              "type": "AssignmentExpression",
              "start": 171,
              "end": 176,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "z",
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
      "start": 224,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 236,
        "decorators": [],
        "name": "gg1",
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
          "start": 237,
          "end": 300,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 238,
            "end": 300,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 240,
              "end": 300,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 242,
                  "end": 270,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 243,
                      "end": 260,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 246,
                        "end": 260,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 248,
                          "end": 260,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 248,
                              "end": 252,
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 258,
                              "end": 260,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 252,
                              "end": 258
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 261,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                },
                {
                  "type": "TSIndexSignature",
                  "start": 271,
                  "end": 298,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 272,
                      "end": 289,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 275,
                        "end": 289,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 277,
                          "end": 289,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 277,
                              "end": 280,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 286,
                              "end": 289,
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 280,
                              "end": 286
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 292,
                      "end": 298
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 302,
          "end": 337,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 303,
            "end": 337,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 305,
              "end": 337,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 307,
                  "end": 335,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 308,
                      "end": 326,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 311,
                        "end": 326,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 313,
                          "end": 326,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 313,
                              "end": 317,
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 323,
                              "end": 326,
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 317,
                              "end": 323
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 327,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 364,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 351,
            "expression": {
              "type": "AssignmentExpression",
              "start": 345,
              "end": 350,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 349,
                "end": 350,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 362,
            "expression": {
              "type": "AssignmentExpression",
              "start": 356,
              "end": 361,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "x",
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
      "type": "TSInterfaceDeclaration",
      "start": 366,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 378,
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 379,
        "end": 439,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 381,
            "end": 409,
            "parameters": [
              {
                "type": "Identifier",
                "start": 382,
                "end": 399,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 385,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 387,
                    "end": 399,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 387,
                        "end": 391,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 397,
                        "end": 399,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 408,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 402,
                "end": 408
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 410,
            "end": 437,
            "parameters": [
              {
                "type": "Identifier",
                "start": 411,
                "end": 428,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 414,
                  "end": 428,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 416,
                    "end": 428,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 416,
                        "end": 419,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 425,
                        "end": 428,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 429,
              "end": 437,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 431,
                "end": 437
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 440,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 452,
        "decorators": [],
        "name": "IY",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 453,
        "end": 485,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 455,
            "end": 483,
            "parameters": [
              {
                "type": "Identifier",
                "start": 456,
                "end": 474,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 459,
                  "end": 474,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 461,
                    "end": 474,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 461,
                        "end": 465,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 471,
                        "end": 474,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 465,
                        "end": 471
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 483,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 477,
                "end": 483
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 487,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 499,
        "decorators": [],
        "name": "gg2",
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
          "start": 500,
          "end": 505,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 501,
            "end": 505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 503,
              "end": 505,
              "typeName": {
                "type": "Identifier",
                "start": 503,
                "end": 505,
                "decorators": [],
                "name": "IX",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 507,
          "end": 512,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 512,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 512,
                "decorators": [],
                "name": "IY",
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
        "start": 514,
        "end": 549,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 526,
            "expression": {
              "type": "AssignmentExpression",
              "start": 520,
              "end": 525,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 524,
                "end": 525,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 547,
            "expression": {
              "type": "AssignmentExpression",
              "start": 541,
              "end": 546,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "x",
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
      "type": "VariableDeclaration",
      "start": 608,
      "end": 701,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 700,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 700,
            "decorators": [],
            "name": "combo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 700,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 627,
                "end": 700,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 627,
                    "end": 662,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 629,
                        "end": 660,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 630,
                            "end": 648,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 631,
                              "end": 648,
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "start": 633,
                                "end": 648,
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "start": 633,
                                    "end": 640,
                                    "value": {
                                      "raw": "foo-",
                                      "cooked": "foo-"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 646,
                                    "end": 648,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 640,
                                    "end": 646
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 649,
                          "end": 660,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 651,
                            "end": 660,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 651,
                                "end": 654,
                                "literal": {
                                  "type": "Literal",
                                  "start": 651,
                                  "end": 654,
                                  "value": "a",
                                  "raw": "'a'"
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 657,
                                "end": 660,
                                "literal": {
                                  "type": "Literal",
                                  "start": 657,
                                  "end": 660,
                                  "value": "b",
                                  "raw": "'b'"
                                }
                              }
                            ]
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 665,
                    "end": 700,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 667,
                        "end": 698,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 668,
                            "end": 686,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 669,
                              "end": 686,
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "start": 671,
                                "end": 686,
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "start": 671,
                                    "end": 674,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 680,
                                    "end": 686,
                                    "value": {
                                      "raw": "-bar",
                                      "cooked": "-bar"
                                    },
                                    "tail": true
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 674,
                                    "end": 680
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 687,
                          "end": 698,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 689,
                            "end": 698,
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "start": 689,
                                "end": 692,
                                "literal": {
                                  "type": "Literal",
                                  "start": 689,
                                  "end": 692,
                                  "value": "b",
                                  "raw": "'b'"
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 695,
                                "end": 698,
                                "literal": {
                                  "type": "Literal",
                                  "start": 695,
                                  "end": 698,
                                  "value": "c",
                                  "raw": "'c'"
                                }
                              }
                            ]
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
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
      "start": 702,
      "end": 731,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 730,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 710,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 713,
            "end": 730,
            "object": {
              "type": "Identifier",
              "start": 713,
              "end": 718,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 719,
              "end": 729,
              "value": "foo-test",
              "raw": "'foo-test'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 746,
      "end": 775,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 774,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 754,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 757,
            "end": 774,
            "object": {
              "type": "Identifier",
              "start": 757,
              "end": 762,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 763,
              "end": 773,
              "value": "test-bar",
              "raw": "'test-bar'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 790,
      "end": 823,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 796,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 796,
            "end": 798,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 801,
            "end": 822,
            "object": {
              "type": "Identifier",
              "start": 801,
              "end": 806,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 807,
              "end": 821,
              "value": "foo-test-bar",
              "raw": "'foo-test-bar'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 861,
      "end": 885,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 873,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 873,
            "end": 884,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 884,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 878,
                "end": 884
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
      "start": 887,
      "end": 918,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 893,
          "end": 917,
          "id": {
            "type": "Identifier",
            "start": 893,
            "end": 895,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 898,
            "end": 917,
            "object": {
              "type": "Identifier",
              "start": 898,
              "end": 903,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TemplateLiteral",
              "start": 904,
              "end": 916,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 904,
                  "end": 911,
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 914,
                  "end": 916,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 911,
                  "end": 914,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 919,
      "end": 950,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 925,
          "end": 949,
          "id": {
            "type": "Identifier",
            "start": 925,
            "end": 927,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 930,
            "end": 949,
            "object": {
              "type": "Identifier",
              "start": 930,
              "end": 935,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TemplateLiteral",
              "start": 936,
              "end": 948,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 936,
                  "end": 939,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 942,
                  "end": 948,
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 939,
                  "end": 942,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 951,
      "end": 986,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 957,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 957,
            "end": 959,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 962,
            "end": 985,
            "object": {
              "type": "Identifier",
              "start": 962,
              "end": 967,
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TemplateLiteral",
              "start": 968,
              "end": 984,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 968,
                  "end": 975,
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 978,
                  "end": 984,
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 975,
                  "end": 978,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1075,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1074,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1074,
            "decorators": [],
            "name": "combo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1006,
              "end": 1074,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1008,
                "end": 1074,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1010,
                    "end": 1072,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1063,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1012,
                          "end": 1063,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 1014,
                            "end": 1063,
                            "types": [
                              {
                                "type": "TSTemplateLiteralType",
                                "start": 1014,
                                "end": 1037,
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "start": 1014,
                                    "end": 1017,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1023,
                                    "end": 1029,
                                    "value": {
                                      "raw": "xxx",
                                      "cooked": "xxx"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1035,
                                    "end": 1037,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1017,
                                    "end": 1023
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  }
                                ]
                              },
                              {
                                "type": "TSTemplateLiteralType",
                                "start": 1040,
                                "end": 1063,
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "start": 1040,
                                    "end": 1043,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1049,
                                    "end": 1055,
                                    "value": {
                                      "raw": "yyy",
                                      "cooked": "yyy"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1061,
                                    "end": 1063,
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1043,
                                    "end": 1049
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1055,
                                    "end": 1061
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1064,
                      "end": 1072,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1066,
                        "end": 1072
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 1077,
      "end": 1108,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1083,
          "end": 1107,
          "id": {
            "type": "Identifier",
            "start": 1083,
            "end": 1085,
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1088,
            "end": 1107,
            "object": {
              "type": "Identifier",
              "start": 1088,
              "end": 1094,
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1095,
              "end": 1106,
              "value": "axxxbyyyc",
              "raw": "'axxxbyyyc'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1109,
      "end": 1140,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1115,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 1115,
            "end": 1117,
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1120,
            "end": 1139,
            "object": {
              "type": "Identifier",
              "start": 1120,
              "end": 1126,
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1127,
              "end": 1138,
              "value": "ayyyxxxbc",
              "raw": "'ayyyxxxbc'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1172,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1171,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1149,
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1152,
            "end": 1171,
            "object": {
              "type": "Identifier",
              "start": 1152,
              "end": 1158,
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1159,
              "end": 1170,
              "value": "axxxbbbyc",
              "raw": "'axxxbbbyc'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1240,
      "end": 1290,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1252,
          "end": 1289,
          "id": {
            "type": "Identifier",
            "start": 1252,
            "end": 1289,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1255,
              "end": 1289,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1257,
                "end": 1289,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1259,
                    "end": 1287,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1260,
                        "end": 1278,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1261,
                          "end": 1278,
                          "typeAnnotation": {
                            "type": "TSTemplateLiteralType",
                            "start": 1263,
                            "end": 1278,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 1263,
                                "end": 1270,
                                "value": {
                                  "raw": "data",
                                  "cooked": "data"
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 1276,
                                "end": 1278,
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true
                              }
                            ],
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1270,
                                "end": 1276
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1279,
                      "end": 1287,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1281,
                        "end": 1287
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 1291,
      "end": 1317,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1297,
          "end": 1316,
          "id": {
            "type": "Identifier",
            "start": 1297,
            "end": 1299,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1302,
            "end": 1316,
            "object": {
              "type": "Identifier",
              "start": 1302,
              "end": 1305,
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1306,
              "end": 1315,
              "value": "data123",
              "raw": "'data123'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1318,
      "end": 1341,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1324,
          "end": 1340,
          "id": {
            "type": "Identifier",
            "start": 1324,
            "end": 1326,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1329,
            "end": 1340,
            "object": {
              "type": "Identifier",
              "start": 1329,
              "end": 1332,
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1333,
              "end": 1340,
              "decorators": [],
              "name": "data123",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1409,
      "end": 1436,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1409,
        "end": 1435,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1409,
          "end": 1412,
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1415,
          "end": 1435,
          "properties": [
            {
              "type": "Property",
              "start": 1417,
              "end": 1433,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1417,
                "end": 1424,
                "decorators": [],
                "name": "data123",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1426,
                "end": 1433,
                "value": "hello",
                "raw": "'hello'"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1437,
      "end": 1464,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1437,
        "end": 1463,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1437,
          "end": 1440,
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1443,
          "end": 1463,
          "properties": [
            {
              "type": "Property",
              "start": 1445,
              "end": 1461,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1445,
                "end": 1452,
                "decorators": [],
                "name": "date123",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 1454,
                "end": 1461,
                "value": "hello",
                "raw": "'hello'"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1547,
      "end": 1655,
      "id": {
        "type": "Identifier",
        "start": 1552,
        "end": 1557,
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1560,
        "end": 1655,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 1566,
            "end": 1607,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1567,
                "end": 1584,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1570,
                  "end": 1584,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1572,
                    "end": 1584,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1572,
                        "end": 1576,
                        "value": {
                          "raw": "s",
                          "cooked": "s"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1582,
                        "end": 1584,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1576,
                        "end": 1582
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1585,
              "end": 1606,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1587,
                "end": 1606,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1588,
                    "end": 1597,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1589,
                      "end": 1597,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1591,
                        "end": 1597
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1599,
                  "end": 1606,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1602,
                    "end": 1606
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1612,
            "end": 1653,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1613,
                "end": 1630,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1616,
                  "end": 1630,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1618,
                    "end": 1630,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1618,
                        "end": 1622,
                        "value": {
                          "raw": "n",
                          "cooked": "n"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1628,
                        "end": 1630,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1622,
                        "end": 1628
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1631,
              "end": 1652,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1633,
                "end": 1652,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1634,
                    "end": 1643,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1635,
                      "end": 1643,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1637,
                        "end": 1643
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1645,
                  "end": 1652,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1648,
                    "end": 1652
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1657,
      "end": 1759,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1663,
          "end": 1759,
          "id": {
            "type": "Identifier",
            "start": 1663,
            "end": 1675,
            "decorators": [],
            "name": "funcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1668,
              "end": 1675,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1670,
                "end": 1675,
                "typeName": {
                  "type": "Identifier",
                  "start": 1670,
                  "end": 1675,
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1678,
            "end": 1759,
            "properties": [
              {
                "type": "Property",
                "start": 1684,
                "end": 1703,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1688,
                  "decorators": [],
                  "name": "sfoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1690,
                  "end": 1703,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1690,
                      "end": 1691,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 1695,
                    "end": 1703,
                    "object": {
                      "type": "Identifier",
                      "start": 1695,
                      "end": 1696,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1697,
                      "end": 1703,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1723,
                "end": 1739,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1723,
                  "end": 1727,
                  "decorators": [],
                  "name": "nfoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1729,
                  "end": 1739,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1729,
                      "end": 1730,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 1734,
                    "end": 1739,
                    "left": {
                      "type": "Identifier",
                      "start": 1734,
                      "end": 1735,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "start": 1738,
                      "end": 1739,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1800,
      "end": 2000,
      "id": {
        "type": "Identifier",
        "start": 1805,
        "end": 1815,
        "decorators": [],
        "name": "Duplicates",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1818,
        "end": 2000,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 1824,
            "end": 1852,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1825,
                "end": 1845,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1828,
                  "end": 1845,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1830,
                    "end": 1845,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1830,
                        "end": 1836
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1846,
              "end": 1851,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1848,
                "end": 1851
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1867,
            "end": 1895,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1868,
                "end": 1888,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1871,
                  "end": 1888,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1873,
                    "end": 1888,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1873,
                        "end": 1879
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1882,
                        "end": 1888
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1889,
              "end": 1894,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1891,
                "end": 1894
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1910,
            "end": 1946,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1911,
                "end": 1939,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1914,
                  "end": 1939,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1916,
                    "end": 1939,
                    "types": [
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1916,
                        "end": 1922
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "start": 1925,
                        "end": 1939,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 1925,
                            "end": 1931,
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 1937,
                            "end": 1939,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true
                          }
                        ],
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1931,
                            "end": 1937
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1940,
              "end": 1945,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1942,
                "end": 1945
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1961,
            "end": 1988,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1962,
                "end": 1981,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1965,
                  "end": 1981,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1967,
                    "end": 1981,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1967,
                        "end": 1973,
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1979,
                        "end": 1981,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1973,
                        "end": 1979
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1982,
              "end": 1987,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1984,
                "end": 1987
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2043,
      "end": 2166,
      "id": {
        "type": "Identifier",
        "start": 2048,
        "end": 2059,
        "decorators": [],
        "name": "Conflicting",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2062,
        "end": 2166,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 2068,
            "end": 2093,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2069,
                "end": 2086,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2072,
                  "end": 2086,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 2074,
                    "end": 2086,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2074,
                        "end": 2078,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2084,
                        "end": 2086,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2078,
                        "end": 2084
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2087,
              "end": 2092,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2089,
                "end": 2092,
                "literal": {
                  "type": "Literal",
                  "start": 2089,
                  "end": 2092,
                  "value": "a",
                  "raw": "'a'"
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 2098,
            "end": 2123,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2099,
                "end": 2116,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2102,
                  "end": 2116,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 2104,
                    "end": 2116,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2104,
                        "end": 2107,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2113,
                        "end": 2116,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2107,
                        "end": 2113
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2117,
              "end": 2122,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2119,
                "end": 2122,
                "literal": {
                  "type": "Literal",
                  "start": 2119,
                  "end": 2122,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 2128,
            "end": 2154,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2129,
                "end": 2147,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2132,
                  "end": 2147,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 2134,
                    "end": 2147,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2134,
                        "end": 2138,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2144,
                        "end": 2147,
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2138,
                        "end": 2144
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2148,
              "end": 2153,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2150,
                "end": 2153,
                "literal": {
                  "type": "Literal",
                  "start": 2150,
                  "end": 2153,
                  "value": "c",
                  "raw": "'c'"
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2197,
      "end": 2397,
      "id": {
        "type": "Identifier",
        "start": 2202,
        "end": 2209,
        "decorators": [],
        "name": "Invalid",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2209,
        "end": 2227,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2210,
            "end": 2226,
            "name": {
              "type": "Identifier",
              "start": 2210,
              "end": 2211,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2220,
              "end": 2226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2230,
        "end": 2397,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 2236,
            "end": 2267,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2237,
                "end": 2257,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2240,
                  "end": 2257,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2242,
                    "end": 2257,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 2242,
                        "end": 2245,
                        "literal": {
                          "type": "Literal",
                          "start": 2242,
                          "end": 2245,
                          "value": "a",
                          "raw": "'a'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 2248,
                        "end": 2251,
                        "literal": {
                          "type": "Literal",
                          "start": 2248,
                          "end": 2251,
                          "value": "b",
                          "raw": "'b'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 2254,
                        "end": 2257,
                        "literal": {
                          "type": "Literal",
                          "start": 2254,
                          "end": 2257,
                          "value": "c",
                          "raw": "'c'"
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2258,
              "end": 2266,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 2282,
            "end": 2308,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2283,
                "end": 2298,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2286,
                  "end": 2298,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2288,
                    "end": 2298,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2288,
                        "end": 2289,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2288,
                          "end": 2289,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2292,
                        "end": 2298
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2299,
              "end": 2307,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2301,
                "end": 2307
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 2323,
            "end": 2344,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2324,
                "end": 2334,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2327,
                  "end": 2334,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2329,
                    "end": 2334,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2329,
                      "end": 2334,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2335,
              "end": 2343,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2337,
                "end": 2343
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 2359,
            "end": 2385,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2360,
                "end": 2375,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2363,
                  "end": 2375,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 2365,
                    "end": 2375,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2365,
                        "end": 2366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2365,
                          "end": 2366,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 2369,
                        "end": 2375
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2376,
              "end": 2384,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2378,
                "end": 2384
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2437,
      "end": 2468,
      "id": {
        "type": "Identifier",
        "start": 2442,
        "end": 2446,
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2449,
        "end": 2467,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2451,
            "end": 2465,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2451,
              "end": 2459,
              "decorators": [],
              "name": "__tag1__",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2459,
              "end": 2465,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2461,
                "end": 2465
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
      "start": 2469,
      "end": 2500,
      "id": {
        "type": "Identifier",
        "start": 2474,
        "end": 2478,
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2481,
        "end": 2499,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2483,
            "end": 2497,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2483,
              "end": 2491,
              "decorators": [],
              "name": "__tag2__",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2491,
              "end": 2497,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2493,
                "end": 2497
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
      "start": 2502,
      "end": 2537,
      "id": {
        "type": "Identifier",
        "start": 2507,
        "end": 2520,
        "decorators": [],
        "name": "TaggedString1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2523,
        "end": 2536,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2523,
            "end": 2529
          },
          {
            "type": "TSTypeReference",
            "start": 2532,
            "end": 2536,
            "typeName": {
              "type": "Identifier",
              "start": 2532,
              "end": 2536,
              "decorators": [],
              "name": "Tag1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2538,
      "end": 2573,
      "id": {
        "type": "Identifier",
        "start": 2543,
        "end": 2556,
        "decorators": [],
        "name": "TaggedString2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2559,
        "end": 2572,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2559,
            "end": 2565
          },
          {
            "type": "TSTypeReference",
            "start": 2568,
            "end": 2572,
            "typeName": {
              "type": "Identifier",
              "start": 2568,
              "end": 2572,
              "decorators": [],
              "name": "Tag2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2575,
      "end": 2598,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2587,
          "end": 2597,
          "id": {
            "type": "Identifier",
            "start": 2587,
            "end": 2597,
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2589,
              "end": 2597,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2591,
                "end": 2597
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
      "start": 2599,
      "end": 2629,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2611,
          "end": 2628,
          "id": {
            "type": "Identifier",
            "start": 2611,
            "end": 2628,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2613,
              "end": 2628,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2615,
                "end": 2628,
                "typeName": {
                  "type": "Identifier",
                  "start": 2615,
                  "end": 2628,
                  "decorators": [],
                  "name": "TaggedString1",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2630,
      "end": 2660,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2642,
          "end": 2659,
          "id": {
            "type": "Identifier",
            "start": 2642,
            "end": 2659,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2644,
              "end": 2659,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2646,
                "end": 2659,
                "typeName": {
                  "type": "Identifier",
                  "start": 2646,
                  "end": 2659,
                  "decorators": [],
                  "name": "TaggedString2",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2661,
      "end": 2707,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2673,
          "end": 2706,
          "id": {
            "type": "Identifier",
            "start": 2673,
            "end": 2706,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2675,
              "end": 2706,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2677,
                "end": 2706,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2677,
                    "end": 2690,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2677,
                      "end": 2690,
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2693,
                    "end": 2706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2693,
                      "end": 2706,
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2708,
      "end": 2754,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2720,
          "end": 2753,
          "id": {
            "type": "Identifier",
            "start": 2720,
            "end": 2753,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2722,
              "end": 2753,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2724,
                "end": 2753,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2724,
                    "end": 2737,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2724,
                      "end": 2737,
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2740,
                    "end": 2753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2740,
                      "end": 2753,
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null
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
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2756,
      "end": 2801,
      "id": {
        "type": "Identifier",
        "start": 2766,
        "end": 2768,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2769,
        "end": 2801,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2771,
            "end": 2799,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2772,
                "end": 2790,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2775,
                  "end": 2790,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2777,
                    "end": 2790,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2777,
                      "end": 2790,
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2791,
              "end": 2799,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2793,
                "end": 2799
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2802,
      "end": 2847,
      "id": {
        "type": "Identifier",
        "start": 2812,
        "end": 2814,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2815,
        "end": 2847,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2817,
            "end": 2845,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2818,
                "end": 2836,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2821,
                  "end": 2836,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2823,
                    "end": 2836,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2823,
                      "end": 2836,
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2837,
              "end": 2845,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2839,
                "end": 2845
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2848,
      "end": 2909,
      "id": {
        "type": "Identifier",
        "start": 2858,
        "end": 2860,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2861,
        "end": 2909,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2863,
            "end": 2907,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2864,
                "end": 2898,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2867,
                  "end": 2898,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2869,
                    "end": 2898,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2869,
                        "end": 2882,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2869,
                          "end": 2882,
                          "decorators": [],
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2885,
                        "end": 2898,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2885,
                          "end": 2898,
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2899,
              "end": 2907,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2901,
                "end": 2907
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2910,
      "end": 2971,
      "id": {
        "type": "Identifier",
        "start": 2920,
        "end": 2922,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2923,
        "end": 2971,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2925,
            "end": 2969,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2926,
                "end": 2960,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2929,
                  "end": 2960,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 2931,
                    "end": 2960,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2931,
                        "end": 2944,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2931,
                          "end": 2944,
                          "decorators": [],
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2947,
                        "end": 2960,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2947,
                          "end": 2960,
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2961,
              "end": 2969,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2963,
                "end": 2969
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2973,
      "end": 2992,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2985,
          "end": 2991,
          "id": {
            "type": "Identifier",
            "start": 2985,
            "end": 2991,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2987,
              "end": 2991,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2989,
                "end": 2991,
                "typeName": {
                  "type": "Identifier",
                  "start": 2989,
                  "end": 2991,
                  "decorators": [],
                  "name": "I1",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2993,
      "end": 3012,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3005,
          "end": 3011,
          "id": {
            "type": "Identifier",
            "start": 3005,
            "end": 3011,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3007,
              "end": 3011,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3009,
                "end": 3011,
                "typeName": {
                  "type": "Identifier",
                  "start": 3009,
                  "end": 3011,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3013,
      "end": 3032,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3025,
          "end": 3031,
          "id": {
            "type": "Identifier",
            "start": 3025,
            "end": 3031,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3027,
              "end": 3031,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3029,
                "end": 3031,
                "typeName": {
                  "type": "Identifier",
                  "start": 3029,
                  "end": 3031,
                  "decorators": [],
                  "name": "I3",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3033,
      "end": 3052,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3045,
          "end": 3051,
          "id": {
            "type": "Identifier",
            "start": 3045,
            "end": 3051,
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3047,
              "end": 3051,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3049,
                "end": 3051,
                "typeName": {
                  "type": "Identifier",
                  "start": 3049,
                  "end": 3051,
                  "decorators": [],
                  "name": "I4",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 3054,
      "end": 3061,
      "expression": {
        "type": "MemberExpression",
        "start": 3054,
        "end": 3060,
        "object": {
          "type": "Identifier",
          "start": 3054,
          "end": 3056,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3057,
          "end": 3059,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3072,
      "end": 3079,
      "expression": {
        "type": "MemberExpression",
        "start": 3072,
        "end": 3078,
        "object": {
          "type": "Identifier",
          "start": 3072,
          "end": 3074,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3075,
          "end": 3077,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3080,
      "end": 3087,
      "expression": {
        "type": "MemberExpression",
        "start": 3080,
        "end": 3086,
        "object": {
          "type": "Identifier",
          "start": 3080,
          "end": 3082,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3083,
          "end": 3085,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3098,
      "end": 3105,
      "expression": {
        "type": "MemberExpression",
        "start": 3098,
        "end": 3104,
        "object": {
          "type": "Identifier",
          "start": 3098,
          "end": 3100,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3101,
          "end": 3103,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3116,
      "end": 3123,
      "expression": {
        "type": "MemberExpression",
        "start": 3116,
        "end": 3122,
        "object": {
          "type": "Identifier",
          "start": 3116,
          "end": 3118,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3119,
          "end": 3121,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3125,
      "end": 3132,
      "expression": {
        "type": "MemberExpression",
        "start": 3125,
        "end": 3131,
        "object": {
          "type": "Identifier",
          "start": 3125,
          "end": 3127,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3128,
          "end": 3130,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3143,
      "end": 3150,
      "expression": {
        "type": "MemberExpression",
        "start": 3143,
        "end": 3149,
        "object": {
          "type": "Identifier",
          "start": 3143,
          "end": 3145,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3146,
          "end": 3148,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3161,
      "end": 3168,
      "expression": {
        "type": "MemberExpression",
        "start": 3161,
        "end": 3167,
        "object": {
          "type": "Identifier",
          "start": 3161,
          "end": 3163,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3164,
          "end": 3166,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3169,
      "end": 3176,
      "expression": {
        "type": "MemberExpression",
        "start": 3169,
        "end": 3175,
        "object": {
          "type": "Identifier",
          "start": 3169,
          "end": 3171,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3172,
          "end": 3174,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3187,
      "end": 3194,
      "expression": {
        "type": "MemberExpression",
        "start": 3187,
        "end": 3193,
        "object": {
          "type": "Identifier",
          "start": 3187,
          "end": 3189,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3190,
          "end": 3192,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3196,
      "end": 3203,
      "expression": {
        "type": "MemberExpression",
        "start": 3196,
        "end": 3202,
        "object": {
          "type": "Identifier",
          "start": 3196,
          "end": 3198,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3199,
          "end": 3201,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3214,
      "end": 3221,
      "expression": {
        "type": "MemberExpression",
        "start": 3214,
        "end": 3220,
        "object": {
          "type": "Identifier",
          "start": 3214,
          "end": 3216,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3217,
          "end": 3219,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3222,
      "end": 3229,
      "expression": {
        "type": "MemberExpression",
        "start": 3222,
        "end": 3228,
        "object": {
          "type": "Identifier",
          "start": 3222,
          "end": 3224,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3225,
          "end": 3227,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3230,
      "end": 3237,
      "expression": {
        "type": "MemberExpression",
        "start": 3230,
        "end": 3236,
        "object": {
          "type": "Identifier",
          "start": 3230,
          "end": 3232,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3233,
          "end": 3235,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3238,
      "end": 3245,
      "expression": {
        "type": "MemberExpression",
        "start": 3238,
        "end": 3244,
        "object": {
          "type": "Identifier",
          "start": 3238,
          "end": 3240,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3241,
          "end": 3243,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3247,
      "end": 3254,
      "expression": {
        "type": "MemberExpression",
        "start": 3247,
        "end": 3253,
        "object": {
          "type": "Identifier",
          "start": 3247,
          "end": 3249,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3250,
          "end": 3252,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3265,
      "end": 3272,
      "expression": {
        "type": "MemberExpression",
        "start": 3265,
        "end": 3271,
        "object": {
          "type": "Identifier",
          "start": 3265,
          "end": 3267,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3268,
          "end": 3270,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3283,
      "end": 3290,
      "expression": {
        "type": "MemberExpression",
        "start": 3283,
        "end": 3289,
        "object": {
          "type": "Identifier",
          "start": 3283,
          "end": 3285,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3286,
          "end": 3288,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3301,
      "end": 3308,
      "expression": {
        "type": "MemberExpression",
        "start": 3301,
        "end": 3307,
        "object": {
          "type": "Identifier",
          "start": 3301,
          "end": 3303,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3304,
          "end": 3306,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3319,
      "end": 3326,
      "expression": {
        "type": "MemberExpression",
        "start": 3319,
        "end": 3325,
        "object": {
          "type": "Identifier",
          "start": 3319,
          "end": 3321,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3322,
          "end": 3324,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3328,
      "end": 3336,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3328,
        "end": 3335,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3328,
          "end": 3330,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3333,
          "end": 3335,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3347,
      "end": 3355,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3347,
        "end": 3354,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3347,
          "end": 3349,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3352,
          "end": 3354,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3356,
      "end": 3364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3356,
        "end": 3363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3356,
          "end": 3358,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3361,
          "end": 3363,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3376,
      "end": 3384,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3376,
        "end": 3383,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3376,
          "end": 3378,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3381,
          "end": 3383,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3395,
      "end": 3403,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3395,
        "end": 3402,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3395,
          "end": 3397,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3400,
          "end": 3402,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3404,
      "end": 3412,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3404,
        "end": 3411,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3404,
          "end": 3406,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3409,
          "end": 3411,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3424,
      "end": 3432,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3424,
        "end": 3431,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3424,
          "end": 3426,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3429,
          "end": 3431,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3443,
      "end": 3451,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3443,
        "end": 3450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3443,
          "end": 3445,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3448,
          "end": 3450,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3462,
      "end": 3470,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3462,
        "end": 3469,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3462,
          "end": 3464,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3467,
          "end": 3469,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3482,
      "end": 3490,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3482,
        "end": 3489,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3482,
          "end": 3484,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3487,
          "end": 3489,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3491,
      "end": 3499,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3491,
        "end": 3498,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3491,
          "end": 3493,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3496,
          "end": 3498,
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3500,
      "end": 3508,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3500,
        "end": 3507,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3500,
          "end": 3502,
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3505,
          "end": 3507,
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3510,
      "end": 3559,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3522,
          "end": 3558,
          "id": {
            "type": "Identifier",
            "start": 3522,
            "end": 3558,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3524,
              "end": 3558,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3526,
                "end": 3558,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 3528,
                    "end": 3556,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 3529,
                        "end": 3547,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3532,
                          "end": 3547,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3534,
                            "end": 3547,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3534,
                              "end": 3547,
                              "decorators": [],
                              "name": "TaggedString1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3548,
                      "end": 3556,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3550,
                        "end": 3556
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 3560,
      "end": 3609,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3572,
          "end": 3608,
          "id": {
            "type": "Identifier",
            "start": 3572,
            "end": 3608,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3574,
              "end": 3608,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3576,
                "end": 3608,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 3578,
                    "end": 3606,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 3579,
                        "end": 3597,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3582,
                          "end": 3597,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3584,
                            "end": 3597,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3584,
                              "end": 3597,
                              "decorators": [],
                              "name": "TaggedString2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3598,
                      "end": 3606,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3600,
                        "end": 3606
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 3610,
      "end": 3675,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3622,
          "end": 3674,
          "id": {
            "type": "Identifier",
            "start": 3622,
            "end": 3674,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3624,
              "end": 3674,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3626,
                "end": 3674,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 3628,
                    "end": 3672,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 3629,
                        "end": 3663,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3632,
                          "end": 3663,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3634,
                            "end": 3663,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3634,
                                "end": 3647,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3634,
                                  "end": 3647,
                                  "decorators": [],
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 3650,
                                "end": 3663,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3650,
                                  "end": 3663,
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3664,
                      "end": 3672,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3666,
                        "end": 3672
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 3676,
      "end": 3741,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3688,
          "end": 3740,
          "id": {
            "type": "Identifier",
            "start": 3688,
            "end": 3740,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3690,
              "end": 3740,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3692,
                "end": 3740,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 3694,
                    "end": 3738,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 3695,
                        "end": 3729,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3698,
                          "end": 3729,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 3700,
                            "end": 3729,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3700,
                                "end": 3713,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3700,
                                  "end": 3713,
                                  "decorators": [],
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 3716,
                                "end": 3729,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3716,
                                  "end": 3729,
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3730,
                      "end": 3738,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3732,
                        "end": 3738
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 3743,
      "end": 3750,
      "expression": {
        "type": "MemberExpression",
        "start": 3743,
        "end": 3749,
        "object": {
          "type": "Identifier",
          "start": 3743,
          "end": 3745,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3746,
          "end": 3748,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3761,
      "end": 3768,
      "expression": {
        "type": "MemberExpression",
        "start": 3761,
        "end": 3767,
        "object": {
          "type": "Identifier",
          "start": 3761,
          "end": 3763,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3764,
          "end": 3766,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3769,
      "end": 3776,
      "expression": {
        "type": "MemberExpression",
        "start": 3769,
        "end": 3775,
        "object": {
          "type": "Identifier",
          "start": 3769,
          "end": 3771,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3772,
          "end": 3774,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3787,
      "end": 3794,
      "expression": {
        "type": "MemberExpression",
        "start": 3787,
        "end": 3793,
        "object": {
          "type": "Identifier",
          "start": 3787,
          "end": 3789,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3790,
          "end": 3792,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3805,
      "end": 3812,
      "expression": {
        "type": "MemberExpression",
        "start": 3805,
        "end": 3811,
        "object": {
          "type": "Identifier",
          "start": 3805,
          "end": 3807,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3808,
          "end": 3810,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3814,
      "end": 3821,
      "expression": {
        "type": "MemberExpression",
        "start": 3814,
        "end": 3820,
        "object": {
          "type": "Identifier",
          "start": 3814,
          "end": 3816,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3817,
          "end": 3819,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3832,
      "end": 3839,
      "expression": {
        "type": "MemberExpression",
        "start": 3832,
        "end": 3838,
        "object": {
          "type": "Identifier",
          "start": 3832,
          "end": 3834,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3835,
          "end": 3837,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3850,
      "end": 3857,
      "expression": {
        "type": "MemberExpression",
        "start": 3850,
        "end": 3856,
        "object": {
          "type": "Identifier",
          "start": 3850,
          "end": 3852,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3853,
          "end": 3855,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3858,
      "end": 3865,
      "expression": {
        "type": "MemberExpression",
        "start": 3858,
        "end": 3864,
        "object": {
          "type": "Identifier",
          "start": 3858,
          "end": 3860,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3861,
          "end": 3863,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3876,
      "end": 3883,
      "expression": {
        "type": "MemberExpression",
        "start": 3876,
        "end": 3882,
        "object": {
          "type": "Identifier",
          "start": 3876,
          "end": 3878,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3879,
          "end": 3881,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3885,
      "end": 3892,
      "expression": {
        "type": "MemberExpression",
        "start": 3885,
        "end": 3891,
        "object": {
          "type": "Identifier",
          "start": 3885,
          "end": 3887,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3888,
          "end": 3890,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3903,
      "end": 3910,
      "expression": {
        "type": "MemberExpression",
        "start": 3903,
        "end": 3909,
        "object": {
          "type": "Identifier",
          "start": 3903,
          "end": 3905,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3906,
          "end": 3908,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3911,
      "end": 3918,
      "expression": {
        "type": "MemberExpression",
        "start": 3911,
        "end": 3917,
        "object": {
          "type": "Identifier",
          "start": 3911,
          "end": 3913,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3914,
          "end": 3916,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3919,
      "end": 3926,
      "expression": {
        "type": "MemberExpression",
        "start": 3919,
        "end": 3925,
        "object": {
          "type": "Identifier",
          "start": 3919,
          "end": 3921,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3922,
          "end": 3924,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3927,
      "end": 3934,
      "expression": {
        "type": "MemberExpression",
        "start": 3927,
        "end": 3933,
        "object": {
          "type": "Identifier",
          "start": 3927,
          "end": 3929,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3930,
          "end": 3932,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3936,
      "end": 3943,
      "expression": {
        "type": "MemberExpression",
        "start": 3936,
        "end": 3942,
        "object": {
          "type": "Identifier",
          "start": 3936,
          "end": 3938,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3939,
          "end": 3941,
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3954,
      "end": 3961,
      "expression": {
        "type": "MemberExpression",
        "start": 3954,
        "end": 3960,
        "object": {
          "type": "Identifier",
          "start": 3954,
          "end": 3956,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3957,
          "end": 3959,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3972,
      "end": 3979,
      "expression": {
        "type": "MemberExpression",
        "start": 3972,
        "end": 3978,
        "object": {
          "type": "Identifier",
          "start": 3972,
          "end": 3974,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3975,
          "end": 3977,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3990,
      "end": 3997,
      "expression": {
        "type": "MemberExpression",
        "start": 3990,
        "end": 3996,
        "object": {
          "type": "Identifier",
          "start": 3990,
          "end": 3992,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3993,
          "end": 3995,
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4008,
      "end": 4015,
      "expression": {
        "type": "MemberExpression",
        "start": 4008,
        "end": 4014,
        "object": {
          "type": "Identifier",
          "start": 4008,
          "end": 4010,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 4011,
          "end": 4013,
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4017,
      "end": 4025,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4017,
        "end": 4024,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4017,
          "end": 4019,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4022,
          "end": 4024,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4026,
      "end": 4034,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4026,
        "end": 4033,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4026,
          "end": 4028,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4031,
          "end": 4033,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4035,
      "end": 4043,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4035,
        "end": 4042,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4035,
          "end": 4037,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4040,
          "end": 4042,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4045,
      "end": 4053,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4045,
        "end": 4052,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4045,
          "end": 4047,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4050,
          "end": 4052,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4054,
      "end": 4062,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4054,
        "end": 4061,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4054,
          "end": 4056,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4059,
          "end": 4061,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4063,
      "end": 4071,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4063,
        "end": 4070,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4063,
          "end": 4065,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4068,
          "end": 4070,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4073,
      "end": 4081,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4073,
        "end": 4080,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4073,
          "end": 4075,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4078,
          "end": 4080,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4082,
      "end": 4090,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4082,
        "end": 4089,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4082,
          "end": 4084,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4087,
          "end": 4089,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4091,
      "end": 4099,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4091,
        "end": 4098,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4091,
          "end": 4093,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4096,
          "end": 4098,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4101,
      "end": 4109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4101,
        "end": 4108,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4101,
          "end": 4103,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4106,
          "end": 4108,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4110,
      "end": 4118,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4110,
        "end": 4117,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4110,
          "end": 4112,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4115,
          "end": 4117,
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4119,
      "end": 4127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4119,
        "end": 4126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4119,
          "end": 4121,
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 4124,
          "end": 4126,
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4188,
      "end": 4258,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4194,
          "end": 4257,
          "id": {
            "type": "Identifier",
            "start": 4194,
            "end": 4199,
            "decorators": [],
            "name": "obj10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4202,
            "end": 4257,
            "properties": [
              {
                "type": "Property",
                "start": 4208,
                "end": 4225,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 4209,
                  "end": 4212,
                  "value": "x",
                  "raw": "'x'"
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4215,
                  "end": 4225,
                  "expression": {
                    "type": "Literal",
                    "start": 4215,
                    "end": 4216,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4220,
                    "end": 4225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4220,
                      "end": 4225,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4231,
                "end": 4254,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 4232,
                  "end": 4241,
                  "left": {
                    "type": "Literal",
                    "start": 4232,
                    "end": 4235,
                    "value": "a",
                    "raw": "'a'"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4238,
                    "end": 4241,
                    "value": "b",
                    "raw": "'b'"
                  }
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4244,
                  "end": 4254,
                  "expression": {
                    "type": "Literal",
                    "start": 4244,
                    "end": 4245,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4249,
                    "end": 4254,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4249,
                      "end": 4254,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4260,
      "end": 4324,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4266,
          "end": 4323,
          "id": {
            "type": "Identifier",
            "start": 4266,
            "end": 4271,
            "decorators": [],
            "name": "obj11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4274,
            "end": 4323,
            "properties": [
              {
                "type": "Property",
                "start": 4280,
                "end": 4295,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 4281,
                  "end": 4282,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4285,
                  "end": 4295,
                  "expression": {
                    "type": "Literal",
                    "start": 4285,
                    "end": 4286,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4290,
                    "end": 4295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4290,
                      "end": 4295,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4301,
                "end": 4320,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 4302,
                  "end": 4307,
                  "left": {
                    "type": "Literal",
                    "start": 4302,
                    "end": 4303,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4306,
                    "end": 4307,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4310,
                  "end": 4320,
                  "expression": {
                    "type": "Literal",
                    "start": 4310,
                    "end": 4311,
                    "value": 3,
                    "raw": "3"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4315,
                    "end": 4320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4315,
                      "end": 4320,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4326,
      "end": 4395,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4332,
          "end": 4394,
          "id": {
            "type": "Identifier",
            "start": 4332,
            "end": 4337,
            "decorators": [],
            "name": "obj12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4340,
            "end": 4394,
            "properties": [
              {
                "type": "Property",
                "start": 4346,
                "end": 4363,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4347,
                  "end": 4350,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4353,
                  "end": 4363,
                  "expression": {
                    "type": "Literal",
                    "start": 4353,
                    "end": 4354,
                    "value": 4,
                    "raw": "4"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4358,
                    "end": 4363,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4358,
                      "end": 4363,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4369,
                "end": 4391,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 4370,
                  "end": 4378,
                  "callee": {
                    "type": "Identifier",
                    "start": 4370,
                    "end": 4376,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4381,
                  "end": 4391,
                  "expression": {
                    "type": "Literal",
                    "start": 4381,
                    "end": 4382,
                    "value": 5,
                    "raw": "5"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4386,
                    "end": 4391,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4386,
                      "end": 4391,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4397,
      "end": 4564,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4403,
          "end": 4563,
          "id": {
            "type": "Identifier",
            "start": 4403,
            "end": 4408,
            "decorators": [],
            "name": "obj13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4411,
            "end": 4563,
            "properties": [
              {
                "type": "Property",
                "start": 4417,
                "end": 4434,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 4418,
                  "end": 4421,
                  "value": "x",
                  "raw": "'x'"
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4424,
                  "end": 4434,
                  "expression": {
                    "type": "Literal",
                    "start": 4424,
                    "end": 4425,
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4429,
                    "end": 4434,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4429,
                      "end": 4434,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4440,
                "end": 4463,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 4441,
                  "end": 4450,
                  "left": {
                    "type": "Literal",
                    "start": 4441,
                    "end": 4444,
                    "value": "a",
                    "raw": "'a'"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4447,
                    "end": 4450,
                    "value": "b",
                    "raw": "'b'"
                  }
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4453,
                  "end": 4463,
                  "expression": {
                    "type": "Literal",
                    "start": 4453,
                    "end": 4454,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4458,
                    "end": 4463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4458,
                      "end": 4463,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4469,
                "end": 4484,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 4470,
                  "end": 4471,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4474,
                  "end": 4484,
                  "expression": {
                    "type": "Literal",
                    "start": 4474,
                    "end": 4475,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4479,
                    "end": 4484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4479,
                      "end": 4484,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4490,
                "end": 4509,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 4491,
                  "end": 4496,
                  "left": {
                    "type": "Literal",
                    "start": 4491,
                    "end": 4492,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4495,
                    "end": 4496,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4499,
                  "end": 4509,
                  "expression": {
                    "type": "Literal",
                    "start": 4499,
                    "end": 4500,
                    "value": 3,
                    "raw": "3"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4504,
                    "end": 4509,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4504,
                      "end": 4509,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4515,
                "end": 4532,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4516,
                  "end": 4519,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4522,
                  "end": 4532,
                  "expression": {
                    "type": "Literal",
                    "start": 4522,
                    "end": 4523,
                    "value": 4,
                    "raw": "4"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4527,
                    "end": 4532,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4527,
                      "end": 4532,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4538,
                "end": 4560,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 4539,
                  "end": 4547,
                  "callee": {
                    "type": "Identifier",
                    "start": 4539,
                    "end": 4545,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4550,
                  "end": 4560,
                  "expression": {
                    "type": "Literal",
                    "start": 4550,
                    "end": 4551,
                    "value": 5,
                    "raw": "5"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4555,
                    "end": 4560,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4555,
                      "end": 4560,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4588,
      "end": 4620,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4594,
          "end": 4619,
          "id": {
            "type": "Identifier",
            "start": 4594,
            "end": 4600,
            "decorators": [],
            "name": "system",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4603,
            "end": 4619,
            "callee": {
              "type": "Identifier",
              "start": 4603,
              "end": 4609,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 4610,
                "end": 4618,
                "value": "system",
                "raw": "'system'"
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
      "start": 4621,
      "end": 4669,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4627,
          "end": 4668,
          "id": {
            "type": "Identifier",
            "start": 4627,
            "end": 4641,
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4644,
            "end": 4668,
            "callee": {
              "type": "Identifier",
              "start": 4644,
              "end": 4650,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 4651,
                "end": 4667,
                "value": "SomeSytePlugin",
                "raw": "'SomeSytePlugin'"
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
      "start": 4671,
      "end": 4736,
      "id": {
        "type": "Identifier",
        "start": 4681,
        "end": 4686,
        "decorators": [],
        "name": "Plugs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 4687,
        "end": 4736,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 4693,
            "end": 4734,
            "parameters": [
              {
                "type": "Identifier",
                "start": 4694,
                "end": 4705,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4697,
                  "end": 4705,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 4699,
                    "end": 4705
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4706,
              "end": 4733,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4708,
                "end": 4733,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 4709,
                    "end": 4721,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 4712,
                      "end": 4716,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4716,
                      "end": 4721,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4718,
                        "end": 4721
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4723,
                  "end": 4733,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4726,
                    "end": 4733
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4738,
      "end": 4809,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4744,
          "end": 4808,
          "id": {
            "type": "Identifier",
            "start": 4744,
            "end": 4751,
            "decorators": [],
            "name": "plugins",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4754,
            "end": 4808,
            "properties": [
              {
                "type": "Property",
                "start": 4760,
                "end": 4779,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 4760,
                  "end": 4766,
                  "value": "user",
                  "raw": "\"user\""
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4768,
                  "end": 4779,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 4768,
                    "end": 4770,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4774,
                    "end": 4779,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4774,
                      "end": 4779,
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 4785,
                "end": 4806,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4786,
                  "end": 4792,
                  "decorators": [],
                  "name": "system",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 4795,
                  "end": 4806,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 4795,
                    "end": 4797,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4801,
                    "end": 4806,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4801,
                      "end": 4806,
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4811,
      "end": 4873,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4811,
        "end": 4872,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4811,
          "end": 4842,
          "object": {
            "type": "MemberExpression",
            "start": 4811,
            "end": 4826,
            "object": {
              "type": "Identifier",
              "start": 4811,
              "end": 4818,
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 4819,
              "end": 4825,
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 4827,
            "end": 4841,
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 4845,
          "end": 4872,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "CallExpression",
            "start": 4851,
            "end": 4872,
            "callee": {
              "type": "MemberExpression",
              "start": 4851,
              "end": 4862,
              "object": {
                "type": "Identifier",
                "start": 4851,
                "end": 4858,
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4859,
                "end": 4862,
                "decorators": [],
                "name": "log",
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
                "start": 4863,
                "end": 4871,
                "value": "awsome",
                "raw": "'awsome'"
              }
            ],
            "optional": false
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4874,
      "end": 4908,
      "expression": {
        "type": "CallExpression",
        "start": 4874,
        "end": 4907,
        "callee": {
          "type": "MemberExpression",
          "start": 4874,
          "end": 4905,
          "object": {
            "type": "MemberExpression",
            "start": 4874,
            "end": 4889,
            "object": {
              "type": "Identifier",
              "start": 4874,
              "end": 4881,
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 4882,
              "end": 4888,
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 4890,
            "end": 4904,
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4910,
      "end": 4951,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4914,
          "end": 4950,
          "id": {
            "type": "Identifier",
            "start": 4914,
            "end": 4931,
            "decorators": [],
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4923,
              "end": 4931,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 4925,
                "end": 4931
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 4934,
            "end": 4950,
            "callee": {
              "type": "Identifier",
              "start": 4934,
              "end": 4940,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 4941,
                "end": 4949,
                "value": "secret",
                "raw": "'secret'"
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
      "start": 4952,
      "end": 4991,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4956,
          "end": 4990,
          "id": {
            "type": "Identifier",
            "start": 4956,
            "end": 4959,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 4962,
            "end": 4990,
            "expression": {
              "type": "ObjectExpression",
              "start": 4962,
              "end": 4964,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4968,
              "end": 4990,
              "typeName": {
                "type": "Identifier",
                "start": 4968,
                "end": 4974,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4974,
                "end": 4990,
                "params": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 4975,
                    "end": 4981
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4983,
                    "end": 4989
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4992,
      "end": 5012,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4992,
        "end": 5011,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4992,
          "end": 5006,
          "object": {
            "type": "Identifier",
            "start": 4992,
            "end": 4995,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 4996,
            "end": 5005,
            "decorators": [],
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 5009,
          "end": 5011,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5036,
      "end": 5074,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5042,
          "end": 5073,
          "id": {
            "type": "Identifier",
            "start": 5042,
            "end": 5051,
            "decorators": [],
            "name": "directive",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5054,
            "end": 5073,
            "callee": {
              "type": "Identifier",
              "start": 5054,
              "end": 5060,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 5061,
                "end": 5072,
                "value": "directive",
                "raw": "'directive'"
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
      "type": "TSDeclareFunction",
      "start": 5075,
      "end": 5194,
      "id": {
        "type": "Identifier",
        "start": 5092,
        "end": 5095,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5095,
        "end": 5113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5096,
            "end": 5100,
            "name": {
              "type": "Identifier",
              "start": 5096,
              "end": 5100,
              "decorators": [],
              "name": "TArg",
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
            "start": 5102,
            "end": 5106,
            "name": {
              "type": "Identifier",
              "start": 5102,
              "end": 5106,
              "decorators": [],
              "name": "TRet",
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
            "start": 5108,
            "end": 5112,
            "name": {
              "type": "Identifier",
              "start": 5108,
              "end": 5112,
              "decorators": [],
              "name": "TDir",
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
          "start": 5114,
          "end": 5186,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5121,
            "end": 5186,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 5123,
              "end": 5186,
              "types": [
                {
                  "type": "TSMappedType",
                  "start": 5123,
                  "end": 5161,
                  "key": {
                    "type": "Identifier",
                    "start": 5126,
                    "end": 5127,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 5131,
                    "end": 5137
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 5140,
                    "end": 5159,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5141,
                        "end": 5150,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5144,
                          "end": 5150,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5146,
                            "end": 5150,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5146,
                              "end": 5150,
                              "decorators": [],
                              "name": "TArg",
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
                      "start": 5152,
                      "end": 5159,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5155,
                        "end": 5159,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5155,
                          "end": 5159,
                          "decorators": [],
                          "name": "TRet",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "optional": false,
                  "readonly": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 5164,
                  "end": 5186,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 5166,
                      "end": 5184,
                      "computed": true,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5167,
                        "end": 5176,
                        "decorators": [],
                        "name": "directive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5178,
                        "end": 5184,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5180,
                          "end": 5184,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5180,
                            "end": 5184,
                            "decorators": [],
                            "name": "TDir",
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5187,
        "end": 5193,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5189,
          "end": 5193
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5196,
      "end": 5324,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5200,
          "end": 5323,
          "id": {
            "type": "Identifier",
            "start": 5200,
            "end": 5205,
            "decorators": [],
            "name": "case1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5208,
            "end": 5323,
            "callee": {
              "type": "Identifier",
              "start": 5208,
              "end": 5211,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5212,
                "end": 5322,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5218,
                    "end": 5251,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5219,
                      "end": 5228,
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5231,
                      "end": 5251,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5232,
                          "end": 5241,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5233,
                            "end": 5241,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5235,
                              "end": 5241
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 5246,
                        "end": 5251,
                        "value": "str",
                        "raw": "'str'"
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5257,
                    "end": 5285,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5257,
                      "end": 5263,
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5265,
                      "end": 5285,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5266,
                          "end": 5275,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5267,
                            "end": 5275,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5269,
                              "end": 5275
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5280,
                        "end": 5285,
                        "left": {
                          "type": "Identifier",
                          "start": 5280,
                          "end": 5281,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 5284,
                          "end": 5285,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5291,
                    "end": 5319,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5291,
                      "end": 5297,
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5299,
                      "end": 5319,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5300,
                          "end": 5309,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5301,
                            "end": 5309,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5303,
                              "end": 5309
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5314,
                        "end": 5319,
                        "left": {
                          "type": "Identifier",
                          "start": 5314,
                          "end": 5315,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 5318,
                          "end": 5319,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
      "start": 5326,
      "end": 5454,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5330,
          "end": 5453,
          "id": {
            "type": "Identifier",
            "start": 5330,
            "end": 5335,
            "decorators": [],
            "name": "case2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5338,
            "end": 5453,
            "callee": {
              "type": "Identifier",
              "start": 5338,
              "end": 5341,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5342,
                "end": 5452,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5348,
                    "end": 5376,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5348,
                      "end": 5354,
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5356,
                      "end": 5376,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5357,
                          "end": 5366,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5358,
                            "end": 5366,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5360,
                              "end": 5366
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5371,
                        "end": 5376,
                        "left": {
                          "type": "Identifier",
                          "start": 5371,
                          "end": 5372,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 5375,
                          "end": 5376,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5382,
                    "end": 5410,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5382,
                      "end": 5388,
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5390,
                      "end": 5410,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5391,
                          "end": 5400,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5392,
                            "end": 5400,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5394,
                              "end": 5400
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5405,
                        "end": 5410,
                        "left": {
                          "type": "Identifier",
                          "start": 5405,
                          "end": 5406,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 5409,
                          "end": 5410,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5416,
                    "end": 5449,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5417,
                      "end": 5426,
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5429,
                      "end": 5449,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5430,
                          "end": 5439,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5431,
                            "end": 5439,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5433,
                              "end": 5439
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 5444,
                        "end": 5449,
                        "value": "str",
                        "raw": "'str'"
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
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
      "start": 5456,
      "end": 5569,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5460,
          "end": 5568,
          "id": {
            "type": "Identifier",
            "start": 5460,
            "end": 5465,
            "decorators": [],
            "name": "case3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5468,
            "end": 5568,
            "callee": {
              "type": "Identifier",
              "start": 5468,
              "end": 5471,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5472,
                "end": 5567,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5478,
                    "end": 5496,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5479,
                      "end": 5488,
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 5491,
                      "end": 5496,
                      "value": "str",
                      "raw": "'str'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5502,
                    "end": 5530,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5502,
                      "end": 5508,
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5510,
                      "end": 5530,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5511,
                          "end": 5520,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5512,
                            "end": 5520,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5514,
                              "end": 5520
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5525,
                        "end": 5530,
                        "left": {
                          "type": "Identifier",
                          "start": 5525,
                          "end": 5526,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 5529,
                          "end": 5530,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 5536,
                    "end": 5564,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 5536,
                      "end": 5542,
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 5544,
                      "end": 5564,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5545,
                          "end": 5554,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5546,
                            "end": 5554,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5548,
                              "end": 5554
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 5559,
                        "end": 5564,
                        "left": {
                          "type": "Identifier",
                          "start": 5559,
                          "end": 5560,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 5563,
                          "end": 5564,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 5594,
      "end": 5622,
      "id": {
        "type": "Identifier",
        "start": 5599,
        "end": 5605,
        "decorators": [],
        "name": "Pseudo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 5608,
        "end": 5621,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 5608,
            "end": 5613,
            "value": {
              "raw": "&:",
              "cooked": "&:"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 5619,
            "end": 5621,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5613,
            "end": 5619
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5624,
      "end": 5660,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5630,
          "end": 5659,
          "id": {
            "type": "Identifier",
            "start": 5630,
            "end": 5648,
            "decorators": [],
            "name": "AmIPseudo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5640,
              "end": 5648,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5642,
                "end": 5648,
                "typeName": {
                  "type": "Identifier",
                  "start": 5642,
                  "end": 5648,
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 5651,
            "end": 5659,
            "value": "&:test",
            "raw": "'&:test'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5661,
      "end": 5691,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5667,
          "end": 5690,
          "id": {
            "type": "Identifier",
            "start": 5667,
            "end": 5684,
            "decorators": [],
            "name": "AmIPseudo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5676,
              "end": 5684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5678,
                "end": 5684,
                "typeName": {
                  "type": "Identifier",
                  "start": 5678,
                  "end": 5684,
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 5687,
            "end": 5690,
            "value": "&",
            "raw": "'&'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5703,
      "end": 5756,
      "id": {
        "type": "Identifier",
        "start": 5708,
        "end": 5725,
        "decorators": [],
        "name": "PseudoDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 5728,
        "end": 5755,
        "key": {
          "type": "Identifier",
          "start": 5731,
          "end": 5734,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 5738,
          "end": 5744,
          "typeName": {
            "type": "Identifier",
            "start": 5738,
            "end": 5744,
            "decorators": [],
            "name": "Pseudo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 5747,
          "end": 5753
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5758,
      "end": 5818,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5764,
          "end": 5817,
          "id": {
            "type": "Identifier",
            "start": 5764,
            "end": 5787,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5768,
              "end": 5787,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5770,
                "end": 5787,
                "typeName": {
                  "type": "Identifier",
                  "start": 5770,
                  "end": 5787,
                  "decorators": [],
                  "name": "PseudoDeclaration",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5790,
            "end": 5817,
            "properties": [
              {
                "type": "Property",
                "start": 5792,
                "end": 5815,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 5792,
                  "end": 5801,
                  "value": "someKey",
                  "raw": "'someKey'"
                },
                "value": {
                  "type": "Literal",
                  "start": 5804,
                  "end": 5815,
                  "value": "someValue",
                  "raw": "'someValue'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5830,
      "end": 5863,
      "id": {
        "type": "Identifier",
        "start": 5835,
        "end": 5847,
        "decorators": [],
        "name": "FieldPattern",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 5850,
        "end": 5862,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 5850,
            "end": 5854,
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 5860,
            "end": 5862,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5854,
            "end": 5860
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5865,
      "end": 5900,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5871,
          "end": 5899,
          "id": {
            "type": "Identifier",
            "start": 5871,
            "end": 5890,
            "decorators": [],
            "name": "path1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5876,
              "end": 5890,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5878,
                "end": 5890,
                "typeName": {
                  "type": "Identifier",
                  "start": 5878,
                  "end": 5890,
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 5893,
            "end": 5899,
            "value": "/one",
            "raw": "'/one'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5901,
      "end": 5935,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5907,
          "end": 5934,
          "id": {
            "type": "Identifier",
            "start": 5907,
            "end": 5926,
            "decorators": [],
            "name": "path2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5912,
              "end": 5926,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5914,
                "end": 5926,
                "typeName": {
                  "type": "Identifier",
                  "start": 5914,
                  "end": 5926,
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 5929,
            "end": 5934,
            "value": "two",
            "raw": "'two'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5947,
      "end": 5999,
      "id": {
        "type": "Identifier",
        "start": 5952,
        "end": 5963,
        "decorators": [],
        "name": "PathsObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 5966,
        "end": 5998,
        "key": {
          "type": "Identifier",
          "start": 5969,
          "end": 5970,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 5974,
          "end": 5986,
          "typeName": {
            "type": "Identifier",
            "start": 5974,
            "end": 5986,
            "decorators": [],
            "name": "FieldPattern",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 5989,
          "end": 5995
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6000,
      "end": 6036,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6006,
          "end": 6035,
          "id": {
            "type": "Identifier",
            "start": 6006,
            "end": 6029,
            "decorators": [],
            "name": "pathObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6016,
              "end": 6029,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6018,
                "end": 6029,
                "typeName": {
                  "type": "Identifier",
                  "start": 6018,
                  "end": 6029,
                  "decorators": [],
                  "name": "PathsObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 6032,
            "end": 6035,
            "value": 123,
            "raw": "123"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6048,
      "end": 6103,
      "id": {
        "type": "Identifier",
        "start": 6053,
        "end": 6059,
        "decorators": [],
        "name": "IdType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 6062,
        "end": 6103,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 6062,
            "end": 6065,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6071,
            "end": 6075,
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6081,
            "end": 6085,
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6091,
            "end": 6095,
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 6101,
            "end": 6103,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 6065,
            "end": 6071
          },
          {
            "type": "TSNumberKeyword",
            "start": 6075,
            "end": 6081
          },
          {
            "type": "TSNumberKeyword",
            "start": 6085,
            "end": 6091
          },
          {
            "type": "TSNumberKeyword",
            "start": 6095,
            "end": 6101
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6104,
      "end": 6145,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6110,
          "end": 6144,
          "id": {
            "type": "Identifier",
            "start": 6110,
            "end": 6120,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6112,
              "end": 6120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6114,
                "end": 6120,
                "typeName": {
                  "type": "Identifier",
                  "start": 6114,
                  "end": 6120,
                  "decorators": [],
                  "name": "IdType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 6123,
            "end": 6144,
            "value": "0000-0000-0000-0001",
            "raw": "'0000-0000-0000-0001'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6147,
      "end": 6179,
      "id": {
        "type": "Identifier",
        "start": 6152,
        "end": 6153,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6156,
        "end": 6178,
        "typeName": {
          "type": "Identifier",
          "start": 6156,
          "end": 6162,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6162,
          "end": 6178,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 6163,
              "end": 6169,
              "typeName": {
                "type": "Identifier",
                "start": 6163,
                "end": 6169,
                "decorators": [],
                "name": "IdType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSStringKeyword",
              "start": 6171,
              "end": 6177
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6181,
      "end": 6210,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6187,
          "end": 6210,
          "id": {
            "type": "Identifier",
            "start": 6187,
            "end": 6191,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6188,
              "end": 6191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6190,
                "end": 6191,
                "typeName": {
                  "type": "Identifier",
                  "start": 6190,
                  "end": 6191,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6194,
            "end": 6210,
            "properties": [
              {
                "type": "Property",
                "start": 6196,
                "end": 6208,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6197,
                  "end": 6199,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 6202,
                  "end": 6208,
                  "value": "test",
                  "raw": "'test'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6212,
      "end": 6228,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6216,
          "end": 6227,
          "id": {
            "type": "Identifier",
            "start": 6216,
            "end": 6219,
            "decorators": [],
            "name": "aid",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 6222,
            "end": 6227,
            "object": {
              "type": "Identifier",
              "start": 6222,
              "end": 6223,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 6224,
              "end": 6226,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 6252,
      "end": 6327,
      "id": {
        "type": "Identifier",
        "start": 6262,
        "end": 6264,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 6265,
        "end": 6327,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 6271,
            "end": 6282,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6271,
              "end": 6272,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6273,
              "end": 6281,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6275,
                "end": 6281
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 6287,
            "end": 6298,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 6287,
              "end": 6288,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6289,
              "end": 6297,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6291,
                "end": 6297
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 6303,
            "end": 6325,
            "parameters": [
              {
                "type": "Identifier",
                "start": 6304,
                "end": 6315,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6307,
                  "end": 6315,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 6309,
                    "end": 6315
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6316,
              "end": 6324,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6318,
                "end": 6324
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6329,
      "end": 6361,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6335,
          "end": 6360,
          "id": {
            "type": "Identifier",
            "start": 6335,
            "end": 6341,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6337,
              "end": 6341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6339,
                "end": 6341,
                "typeName": {
                  "type": "Identifier",
                  "start": 6339,
                  "end": 6341,
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6344,
            "end": 6360,
            "properties": [
              {
                "type": "Property",
                "start": 6346,
                "end": 6358,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6347,
                  "end": 6350,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 6353,
                  "end": 6358,
                  "value": "123",
                  "raw": "'123'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6363,
      "end": 6422,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6369,
          "end": 6421,
          "id": {
            "type": "Identifier",
            "start": 6369,
            "end": 6400,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6373,
              "end": 6400,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 6375,
                "end": 6400,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 6377,
                    "end": 6398,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 6378,
                        "end": 6389,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6381,
                          "end": 6389,
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 6383,
                            "end": 6389
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6390,
                      "end": 6398,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6392,
                        "end": 6398
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6403,
            "end": 6421,
            "properties": [
              {
                "type": "Property",
                "start": 6405,
                "end": 6420,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6406,
                  "end": 6409,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 6412,
                  "end": 6420,
                  "value": "hello ",
                  "raw": "'hello '"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6423,
      "end": 6482,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6429,
          "end": 6481,
          "id": {
            "type": "Identifier",
            "start": 6429,
            "end": 6460,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6433,
              "end": 6460,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 6435,
                "end": 6460,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 6437,
                    "end": 6458,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 6438,
                        "end": 6449,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6441,
                          "end": 6449,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6443,
                            "end": 6449
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6450,
                      "end": 6458,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6452,
                        "end": 6458
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6463,
            "end": 6481,
            "properties": [
              {
                "type": "Property",
                "start": 6465,
                "end": 6480,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6466,
                  "end": 6469,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 6472,
                  "end": 6480,
                  "value": "hello ",
                  "raw": "'hello '"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6525,
      "end": 6584,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6531,
          "end": 6583,
          "id": {
            "type": "Identifier",
            "start": 6531,
            "end": 6562,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6535,
              "end": 6562,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 6537,
                "end": 6562,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 6539,
                    "end": 6560,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 6540,
                        "end": 6551,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6543,
                          "end": 6551,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6545,
                            "end": 6551
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6552,
                      "end": 6560,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6554,
                        "end": 6560
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6565,
            "end": 6583,
            "properties": [
              {
                "type": "Property",
                "start": 6567,
                "end": 6582,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6568,
                  "end": 6571,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 6574,
                  "end": 6582,
                  "value": "hello ",
                  "raw": "'hello '"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6618,
      "end": 6653,
      "id": {
        "type": "Identifier",
        "start": 6623,
        "end": 6625,
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 6628,
        "end": 6652,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 6628,
            "end": 6634
          },
          {
            "type": "TSTypeLiteral",
            "start": 6637,
            "end": 6652,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 6639,
                "end": 6651,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 6639,
                  "end": 6644,
                  "decorators": [],
                  "name": "__tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6644,
                  "end": 6651,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 6646,
                    "end": 6651,
                    "literal": {
                      "type": "Literal",
                      "start": 6646,
                      "end": 6651,
                      "value": "id ",
                      "raw": "'id '"
                    }
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
      "type": "TSTypeAliasDeclaration",
      "start": 6654,
      "end": 6688,
      "id": {
        "type": "Identifier",
        "start": 6659,
        "end": 6663,
        "decorators": [],
        "name": "Rec1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 6666,
        "end": 6687,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 6668,
            "end": 6685,
            "parameters": [
              {
                "type": "Identifier",
                "start": 6669,
                "end": 6676,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6672,
                  "end": 6676,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6674,
                    "end": 6676,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6674,
                      "end": 6676,
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6677,
              "end": 6685,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6679,
                "end": 6685
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6689,
      "end": 6720,
      "id": {
        "type": "Identifier",
        "start": 6694,
        "end": 6698,
        "decorators": [],
        "name": "Rec2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6701,
        "end": 6719,
        "typeName": {
          "type": "Identifier",
          "start": 6701,
          "end": 6707,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6707,
          "end": 6719,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 6708,
              "end": 6710,
              "typeName": {
                "type": "Identifier",
                "start": 6708,
                "end": 6710,
                "decorators": [],
                "name": "Id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSNumberKeyword",
              "start": 6712,
              "end": 6718
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6722,
      "end": 6743,
      "id": {
        "type": "Identifier",
        "start": 6727,
        "end": 6729,
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 6732,
        "end": 6742,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 6738,
          "end": 6742,
          "typeName": {
            "type": "Identifier",
            "start": 6738,
            "end": 6742,
            "decorators": [],
            "name": "Rec1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6751,
      "end": 6772,
      "id": {
        "type": "Identifier",
        "start": 6756,
        "end": 6758,
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 6761,
        "end": 6771,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 6767,
          "end": 6771,
          "typeName": {
            "type": "Identifier",
            "start": 6767,
            "end": 6771,
            "decorators": [],
            "name": "Rec2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
