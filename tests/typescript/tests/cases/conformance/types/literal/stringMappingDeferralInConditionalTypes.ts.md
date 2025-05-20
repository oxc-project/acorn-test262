__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 602,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 113,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 69,
        "end": 112,
        "checkType": {
          "type": "TSTypeReference",
          "start": 69,
          "end": 90,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 78,
            "end": 90,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 79,
                "end": 89,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 79,
                    "end": 80,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 69,
            "end": 78,
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 99,
          "end": 104,
          "literal": {
            "type": "Literal",
            "start": 99,
            "end": 104,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 111,
          "end": 112,
          "literal": {
            "type": "Literal",
            "start": 111,
            "end": 112,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 107,
          "end": 108,
          "literal": {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 65,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "S",
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
      "start": 114,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 130,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 130,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 123,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 124,
                      "end": 129,
                      "literal": {
                        "type": "Literal",
                        "start": 124,
                        "end": 129,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 133,
            "end": 134,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 143,
      "end": 206,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 155,
        "end": 205,
        "checkType": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 176,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 164,
            "end": 176,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 165,
                "end": 175,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 164,
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 185,
          "end": 197,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 185,
              "end": 189,
              "tail": false,
              "value": {
                "cooked": "f",
                "raw": "f"
              }
            },
            {
              "type": "TemplateElement",
              "start": 195,
              "end": 197,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 204,
          "end": 205,
          "literal": {
            "type": "Literal",
            "start": 204,
            "end": 205,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 200,
          "end": 201,
          "literal": {
            "type": "Literal",
            "start": 200,
            "end": 201,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "S",
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
      "start": 207,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 223,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 223,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 216,
                  "end": 223,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 217,
                      "end": 222,
                      "literal": {
                        "type": "Literal",
                        "start": 217,
                        "end": 222,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 226,
            "end": 227,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 236,
      "end": 304,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 242,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 248,
        "end": 303,
        "checkType": {
          "type": "TSTypeReference",
          "start": 248,
          "end": 281,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 258,
            "end": 281,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 259,
                "end": 280,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 268,
                  "end": 280,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 269,
                      "end": 279,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 269,
                          "end": 270,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 270,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 273,
                          "end": 279
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 268,
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 248,
            "end": 258,
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 290,
          "end": 295,
          "literal": {
            "type": "Literal",
            "start": 290,
            "end": 295,
            "raw": "\"Foo\"",
            "value": "Foo"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 302,
          "end": 303,
          "literal": {
            "type": "Literal",
            "start": 302,
            "end": 303,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 298,
          "end": 299,
          "literal": {
            "type": "Literal",
            "start": 298,
            "end": 299,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 242,
        "end": 245,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 244,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "S",
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
      "start": 305,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 321,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 321,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 314,
                  "end": 321,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 315,
                      "end": 320,
                      "literal": {
                        "type": "Literal",
                        "start": 315,
                        "end": 320,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 324,
            "end": 325,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 334,
      "end": 408,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 361,
        "end": 407,
        "checkType": {
          "type": "TSTypeReference",
          "start": 361,
          "end": 385,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 371,
            "end": 385,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 372,
                "end": 384,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 381,
                  "end": 384,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 382,
                      "end": 383,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 381,
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 394,
          "end": 399,
          "literal": {
            "type": "Literal",
            "start": 394,
            "end": 399,
            "raw": "\"Foo\"",
            "value": "Foo"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 406,
          "end": 407,
          "literal": {
            "type": "Literal",
            "start": 406,
            "end": 407,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 402,
          "end": 403,
          "literal": {
            "type": "Literal",
            "start": 402,
            "end": 403,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 340,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 341,
            "end": 357,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 351,
              "end": 357
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "S",
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
      "start": 409,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 425,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 425,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 418,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 419,
                      "end": 424,
                      "literal": {
                        "type": "Literal",
                        "start": 419,
                        "end": 424,
                        "raw": "\"foo\"",
                        "value": "foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 428,
            "end": 429,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 438,
      "end": 497,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 444,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 450,
        "end": 496,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 459,
          "end": 496,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 460,
              "end": 495,
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 460,
                  "end": 476,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 460,
                      "end": 464,
                      "tail": false,
                      "value": {
                        "cooked": "f",
                        "raw": "f"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 474,
                      "end": 476,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "start": 464,
                      "end": 474,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 464,
                          "end": 465,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 464,
                            "end": 465,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 468,
                          "end": 474
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "TSTemplateLiteralType",
                  "start": 479,
                  "end": 495,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 479,
                      "end": 482,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 492,
                      "end": 495,
                      "tail": true,
                      "value": {
                        "cooked": "f",
                        "raw": "f"
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "start": 482,
                      "end": 492,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 482,
                          "end": 483,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 482,
                            "end": 483,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 486,
                          "end": 492
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 450,
          "end": 459,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 444,
        "end": 447,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 445,
            "end": 446,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 498,
      "end": 533,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 504,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 507,
        "end": 532,
        "checkType": {
          "type": "TSTypeReference",
          "start": 507,
          "end": 512,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 508,
            "end": 512,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 509,
                "end": 511,
                "literal": {
                  "type": "Literal",
                  "start": 509,
                  "end": 511,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 521,
          "end": 524,
          "literal": {
            "type": "Literal",
            "start": 521,
            "end": 524,
            "raw": "\"f\"",
            "value": "f"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 531,
          "end": 532,
          "literal": {
            "type": "Literal",
            "start": 531,
            "end": 532,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 527,
          "end": 528,
          "literal": {
            "type": "Literal",
            "start": 527,
            "end": 528,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 539,
      "end": 576,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 545,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 551,
        "end": 575,
        "checkType": {
          "type": "TSTypeReference",
          "start": 551,
          "end": 555,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 552,
            "end": 555,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 553,
                "end": 554,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 554,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 551,
            "end": 552,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 564,
          "end": 567,
          "literal": {
            "type": "Literal",
            "start": 564,
            "end": 567,
            "raw": "\"f\"",
            "value": "f"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 574,
          "end": 575,
          "literal": {
            "type": "Literal",
            "start": 574,
            "end": 575,
            "raw": "0",
            "value": 0
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 570,
          "end": 571,
          "literal": {
            "type": "Literal",
            "start": 570,
            "end": 571,
            "raw": "1",
            "value": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 545,
        "end": 548,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 546,
            "end": 547,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "S",
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
      "start": 578,
      "end": 596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 595,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 591,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 591,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 586,
                "end": 591,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 587,
                  "end": 591,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 588,
                      "end": 590,
                      "literal": {
                        "type": "Literal",
                        "start": 588,
                        "end": 590,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 587,
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 594,
            "end": 595,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
