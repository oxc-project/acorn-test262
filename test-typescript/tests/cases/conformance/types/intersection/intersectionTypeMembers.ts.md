__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 182,
  "end": 1398,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 207,
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 207,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 208,
      "end": 233,
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 233,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 231,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 219,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 234,
      "end": 259,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 257,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 257,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 251,
                "end": 257
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 245,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 279,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 279,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 270,
                "end": 279,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 271,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 274,
                    "end": 275,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 275,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 279,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 281,
      "end": 297,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 296,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 281,
          "end": 286,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 281,
            "end": 284,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 289,
          "end": 296,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 314,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 298,
          "end": 303,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 306,
          "end": 313,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 331,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 315,
          "end": 320,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 330,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 333,
      "end": 353,
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 353,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 351,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 351,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 344,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 354,
      "end": 374,
      "body": {
        "type": "TSInterfaceBody",
        "start": 366,
        "end": 374,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 368,
            "end": 372,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 371,
                "end": 372,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 375,
      "end": 395,
      "body": {
        "type": "TSInterfaceBody",
        "start": 387,
        "end": 395,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 389,
            "end": 393,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 393,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 393,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 415,
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 415,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 406,
                "end": 415,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 406,
                    "end": 407,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 407,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 411,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 417,
      "end": 435,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 417,
        "end": 434,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 417,
          "end": 424,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 417,
            "end": 422,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 417,
              "end": 420,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 427,
          "end": 434,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 454,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 436,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 436,
          "end": 443,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 436,
            "end": 441,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 436,
              "end": 439,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 446,
          "end": 453,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 473,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 472,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 455,
          "end": 462,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 455,
            "end": 460,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 455,
              "end": 458,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 465,
          "end": 472,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 475,
      "end": 507,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 482,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 485,
        "end": 506,
        "params": [
          {
            "type": "Identifier",
            "start": 486,
            "end": 495,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 495,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 489,
                "end": 495
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 497,
          "end": 506,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 500,
            "end": 506
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 508,
      "end": 540,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 515,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 518,
        "end": 539,
        "params": [
          {
            "type": "Identifier",
            "start": 519,
            "end": 528,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 522,
                "end": 528
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 530,
          "end": 539,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 533,
            "end": 539
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 542,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 556,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 556,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 549,
                "end": 556,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 549,
                    "end": 551,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 551,
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 554,
                    "end": 556,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 556,
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null
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
      "start": 558,
      "end": 577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 576,
            "arguments": [
              {
                "type": "Literal",
                "start": 568,
                "end": 575,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 591,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 586,
            "end": 591,
            "arguments": [
              {
                "type": "Literal",
                "start": 588,
                "end": 590,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 594,
      "end": 681,
      "body": {
        "type": "TSInterfaceBody",
        "start": 606,
        "end": 681,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 612,
            "end": 679,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 618,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 678,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 620,
                "end": 678,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 622,
                    "end": 651,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 634,
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 634,
                      "end": 650,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 636,
                        "end": 650,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 638,
                            "end": 648,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 638,
                              "end": 639,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 639,
                              "end": 647,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 641,
                                "end": 647
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 652,
                    "end": 676,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 661,
                      "decorators": [],
                      "name": "different",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 661,
                      "end": 676,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 663,
                        "end": 676,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 665,
                            "end": 674,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 665,
                              "end": 666,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 666,
                              "end": 674,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 668,
                                "end": 674
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 605,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 682,
      "end": 764,
      "body": {
        "type": "TSInterfaceBody",
        "start": 694,
        "end": 764,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 700,
            "end": 762,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 706,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 706,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 708,
                "end": 761,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 710,
                    "end": 739,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 710,
                      "end": 722,
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 722,
                      "end": 738,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 724,
                        "end": 738,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 726,
                            "end": 736,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 726,
                              "end": 727,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 727,
                              "end": 735,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 729,
                                "end": 735
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 740,
                    "end": 759,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 745,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 745,
                      "end": 759,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 747,
                        "end": 759,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 748,
                            "end": 757,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 749,
                              "end": 757,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 751,
                                "end": 757
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 693,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 765,
      "end": 939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 939,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 780,
            "decorators": [],
            "name": "de",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 780,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 775,
                "end": 780,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 775,
                    "end": 776,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 775,
                      "end": 776,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 779,
                    "end": 780,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 780,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 783,
            "end": 939,
            "properties": [
              {
                "type": "Property",
                "start": 789,
                "end": 937,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 795,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 797,
                  "end": 937,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 807,
                      "end": 874,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 807,
                        "end": 819,
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 821,
                        "end": 874,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 835,
                            "end": 843,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 838,
                              "end": 843,
                              "raw": "'yes'",
                              "value": "yes"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 857,
                            "end": 864,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 857,
                              "end": 858,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 860,
                              "end": 864,
                              "raw": "'no'",
                              "value": "no"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 884,
                      "end": 904,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 893,
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 895,
                        "end": 904,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 897,
                            "end": 902,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 897,
                              "end": 898,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 900,
                              "end": 902,
                              "raw": "12",
                              "value": 12
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 914,
                      "end": 931,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 914,
                        "end": 919,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 921,
                        "end": 931,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 923,
                            "end": 929,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 923,
                              "end": 924,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 926,
                              "end": 929,
                              "raw": "101",
                              "value": 101
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1039,
      "end": 1099,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1051,
        "end": 1099,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1057,
            "end": 1097,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1057,
              "end": 1063,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1097,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1065,
                "end": 1097,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1067,
                    "end": 1095,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1067,
                      "end": 1079,
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1079,
                      "end": 1095,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1081,
                        "end": 1095,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1083,
                            "end": 1093,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1083,
                              "end": 1084,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1084,
                              "end": 1092,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1086,
                                "end": 1092
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1049,
        "end": 1050,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1101,
      "end": 1161,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1113,
        "end": 1161,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1119,
            "end": 1159,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1119,
              "end": 1125,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1159,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1127,
                "end": 1159,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1129,
                    "end": 1157,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1129,
                      "end": 1141,
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1141,
                      "end": 1157,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1143,
                        "end": 1157,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1145,
                            "end": 1155,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1146,
                              "decorators": [],
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1146,
                              "end": 1154,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1148,
                                "end": 1154
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1112,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1163,
      "end": 1398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1169,
          "end": 1398,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1169,
            "end": 1188,
            "decorators": [],
            "name": "defg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1173,
              "end": 1188,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1175,
                "end": 1188,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1175,
                    "end": 1176,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1179,
                    "end": 1180,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1183,
                    "end": 1184,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1183,
                      "end": 1184,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1187,
                    "end": 1188,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1187,
                      "end": 1188,
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1191,
            "end": 1398,
            "properties": [
              {
                "type": "Property",
                "start": 1197,
                "end": 1396,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1203,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1205,
                  "end": 1396,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1215,
                      "end": 1333,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1215,
                        "end": 1227,
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1229,
                        "end": 1333,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1243,
                            "end": 1251,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1243,
                              "end": 1244,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1246,
                              "end": 1251,
                              "raw": "'yes'",
                              "value": "yes"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1265,
                            "end": 1272,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1265,
                              "end": 1266,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1268,
                              "end": 1272,
                              "raw": "'no'",
                              "value": "no"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1286,
                            "end": 1293,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1286,
                              "end": 1287,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1289,
                              "end": 1293,
                              "raw": "'ok'",
                              "value": "ok"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1307,
                            "end": 1323,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1307,
                              "end": 1308,
                              "decorators": [],
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1310,
                              "end": 1323,
                              "raw": "'affirmative'",
                              "value": "affirmative"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1343,
                      "end": 1363,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1343,
                        "end": 1352,
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1354,
                        "end": 1363,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1356,
                            "end": 1361,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1356,
                              "end": 1357,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1359,
                              "end": 1361,
                              "raw": "12",
                              "value": 12
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1373,
                      "end": 1390,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1373,
                        "end": 1378,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1380,
                        "end": 1390,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1382,
                            "end": 1388,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1382,
                              "end": 1383,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1385,
                              "end": 1388,
                              "raw": "101",
                              "value": 101
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
