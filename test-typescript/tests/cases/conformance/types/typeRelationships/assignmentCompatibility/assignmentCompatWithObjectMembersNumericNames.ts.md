__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 180,
  "end": 629,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 188,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 200,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 190,
              "end": 191,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 199,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 224,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 213,
              "end": 215,
              "raw": "1.",
              "value": 1
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 235,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 234,
                "end": 235,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 248,
      "end": 288,
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 288,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 263,
            "end": 273,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 263,
              "end": 264,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 272,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 286,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 260,
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 289,
      "end": 331,
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 304,
              "end": 307,
              "raw": "1.0",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 315,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 309,
                "end": 315
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 317,
            "end": 329,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 329,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 323,
                "end": 329
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 301,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 342,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 342,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 354,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 354,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 354,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 364,
                "end": 392,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 366,
                    "end": 377,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 366,
                      "end": 368,
                      "raw": "1.",
                      "value": 1
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 368,
                      "end": 376,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 378,
                    "end": 390,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 381,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 384,
                        "end": 390
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 429,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 400,
                "end": 429,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 402,
                    "end": 414,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 402,
                      "end": 405,
                      "raw": "1.0",
                      "value": 1
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 407,
                        "end": 413
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 415,
                    "end": 427,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 418,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 419,
                      "end": 427,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 421,
                        "end": 427
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 451,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 440,
            "end": 451,
            "properties": [
              {
                "type": "Property",
                "start": 442,
                "end": 449,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 442,
                  "end": 445,
                  "raw": "1.0",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 447,
                  "end": 449,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 462,
            "end": 471,
            "properties": [
              {
                "type": "Property",
                "start": 464,
                "end": 469,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 464,
                  "end": 465,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 467,
                  "end": 469,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 474,
      "end": 480,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 474,
        "end": 479,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 474,
          "end": 475,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 478,
          "end": 479,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 481,
      "end": 487,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 481,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 495,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 488,
        "end": 494,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 488,
          "end": 489,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 492,
          "end": 494,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 503,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 496,
        "end": 502,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 496,
          "end": 497,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 502,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 505,
      "end": 513,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 505,
        "end": 512,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 505,
          "end": 507,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 510,
          "end": 512,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 514,
      "end": 522,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 514,
        "end": 521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 514,
          "end": 516,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 519,
          "end": 521,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 523,
      "end": 530,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 523,
        "end": 529,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 523,
          "end": 525,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 538,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 537,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 531,
          "end": 533,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 536,
          "end": 537,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 547,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 539,
        "end": 546,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 539,
          "end": 541,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 544,
          "end": 546,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 555,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 549,
        "end": 554,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 549,
          "end": 550,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 553,
          "end": 554,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 562,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 561,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 563,
      "end": 569,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 563,
        "end": 568,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 563,
          "end": 564,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 568,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 570,
      "end": 577,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 570,
        "end": 576,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 570,
          "end": 571,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 574,
          "end": 576,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 578,
      "end": 585,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 578,
        "end": 584,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 578,
          "end": 579,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 582,
          "end": 584,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 595,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 587,
        "end": 594,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 587,
          "end": 589,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 592,
          "end": 594,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 604,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 596,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 596,
          "end": 598,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 601,
          "end": 603,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 605,
      "end": 612,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 605,
        "end": 611,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 607,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 610,
          "end": 611,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 613,
      "end": 621,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 613,
        "end": 620,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 613,
          "end": 615,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 618,
          "end": 620,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 622,
      "end": 629,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 622,
        "end": 628,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 622,
          "end": 624,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 627,
          "end": 628,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
