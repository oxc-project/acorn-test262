__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 171,
  "end": 665,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 209,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
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
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 190,
          "end": 192,
          "expression": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "S2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 234,
            "end": 246,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
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
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 229,
          "end": 231,
          "expression": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 257,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
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
      "start": 259,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 267,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 267,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
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
      "start": 270,
      "end": 312,
      "body": {
        "type": "TSInterfaceBody",
        "start": 283,
        "end": 312,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 297,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 288,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 298,
            "end": 310,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 301,
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
              "start": 302,
              "end": 310,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 304,
                "end": 310
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 313,
      "end": 355,
      "body": {
        "type": "TSInterfaceBody",
        "start": 326,
        "end": 355,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 328,
            "end": 340,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 331,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 339,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 341,
            "end": 353,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 344,
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
              "start": 345,
              "end": 353,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 347,
                "end": 353
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 325,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 366,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 366,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 366,
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
      "start": 368,
      "end": 379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 378,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 378,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 376,
                "end": 378,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 378,
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
      "start": 381,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 417,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 386,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 388,
                "end": 417,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 390,
                    "end": 402,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 393,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 415,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 406,
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
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
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
      "start": 418,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 454,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 425,
                "end": 454,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 427,
                    "end": 439,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 430,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 432,
                        "end": 438
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 440,
                    "end": 452,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 443,
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
                      "start": 444,
                      "end": 452,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 446,
                        "end": 452
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
      "start": 456,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 466,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 469,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 471,
                "end": 478,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 474,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 476,
                  "end": 478,
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
      "start": 482,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 506,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 492,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 490,
                "end": 492,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 492,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 495,
            "end": 506,
            "properties": [
              {
                "type": "Property",
                "start": 497,
                "end": 504,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 500,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 502,
                  "end": 504,
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
      "start": 509,
      "end": 515,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 509,
        "end": 514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 509,
          "end": 510,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 522,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 516,
        "end": 521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 516,
          "end": 517,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 520,
          "end": 521,
          "decorators": [],
          "name": "s",
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
          "end": 524,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 529,
          "decorators": [],
          "name": "s2",
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
          "end": 532,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 535,
          "end": 537,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 540,
      "end": 548,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 540,
        "end": 547,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 540,
          "end": 542,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 547,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 557,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 549,
        "end": 556,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 549,
          "end": 551,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 554,
          "end": 556,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 565,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 564,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 560,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 563,
          "end": 564,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 566,
      "end": 573,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 566,
        "end": 572,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 566,
          "end": 568,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 571,
          "end": 572,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 582,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 574,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 574,
          "end": 576,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 579,
          "end": 581,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 584,
      "end": 590,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 584,
        "end": 589,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 584,
          "end": 585,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 588,
          "end": 589,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 597,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 591,
        "end": 596,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 591,
          "end": 592,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 598,
      "end": 604,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 599,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 602,
          "end": 603,
          "decorators": [],
          "name": "s",
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
          "end": 606,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 611,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 613,
      "end": 620,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 613,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 613,
          "end": 614,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 617,
          "end": 619,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 622,
      "end": 630,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 622,
        "end": 629,
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
          "end": 629,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 639,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 631,
        "end": 638,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 631,
          "end": 633,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 636,
          "end": 638,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 640,
      "end": 647,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 640,
        "end": 646,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 640,
          "end": 642,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 645,
          "end": 646,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 656,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 648,
        "end": 655,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 650,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 653,
          "end": 655,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 657,
      "end": 664,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 657,
        "end": 663,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 657,
          "end": 659,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 662,
          "end": 663,
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
