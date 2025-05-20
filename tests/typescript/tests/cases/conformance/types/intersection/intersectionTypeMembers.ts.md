__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 181,
  "end": 1397,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 181,
      "end": 206,
      "body": {
        "type": "TSInterfaceBody",
        "start": 193,
        "end": 206,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 195,
            "end": 204,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
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
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 192,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 207,
      "end": 232,
      "body": {
        "type": "TSInterfaceBody",
        "start": 219,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 221,
            "end": 230,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 233,
      "end": 258,
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 258,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 247,
            "end": 256,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
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
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 278,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 278,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 269,
                "end": 278,
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 278,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
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
      "start": 280,
      "end": 296,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 285,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 288,
          "end": 295,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 313,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 312,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 297,
          "end": 302,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 305,
          "end": 312,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 330,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 329,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 314,
          "end": 319,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 317,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 318,
            "end": 319,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 329,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 332,
      "end": 352,
      "body": {
        "type": "TSInterfaceBody",
        "start": 344,
        "end": 352,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 346,
            "end": 350,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
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
              "start": 347,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 350,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
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
        "start": 342,
        "end": 343,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 353,
      "end": 373,
      "body": {
        "type": "TSInterfaceBody",
        "start": 365,
        "end": 373,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 367,
            "end": 371,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
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
              "start": 368,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 371,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
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
        "start": 363,
        "end": 364,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 374,
      "end": 394,
      "body": {
        "type": "TSInterfaceBody",
        "start": 386,
        "end": 394,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 388,
            "end": 392,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
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
              "start": 389,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 392,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
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
        "start": 384,
        "end": 385,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 414,
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 414,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 405,
                "end": 414,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 406,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 410,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 410,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 414,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
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
      "start": 416,
      "end": 434,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 416,
        "end": 433,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 416,
          "end": 423,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 416,
            "end": 421,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 416,
              "end": 419,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 426,
          "end": 433,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 435,
      "end": 453,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 435,
        "end": 452,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 435,
          "end": 442,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 435,
            "end": 440,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 435,
              "end": 438,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 445,
          "end": 452,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 472,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 454,
        "end": 471,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 454,
          "end": 461,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 454,
            "end": 459,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 464,
          "end": 471,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 474,
      "end": 506,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 481,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 484,
        "end": 505,
        "params": [
          {
            "type": "Identifier",
            "start": 485,
            "end": 494,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 486,
              "end": 494,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 488,
                "end": 494
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 496,
          "end": 505,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 499,
            "end": 505
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 539,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 514,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 517,
        "end": 538,
        "params": [
          {
            "type": "Identifier",
            "start": 518,
            "end": 527,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 519,
              "end": 527,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 529,
          "end": 538,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 532,
            "end": 538
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 541,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 555,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 555,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 548,
                "end": 555,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 548,
                    "end": 550,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 550,
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 553,
                    "end": 555,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 553,
                      "end": 555,
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
      "start": 557,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 575,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 562,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 565,
            "end": 575,
            "arguments": [
              {
                "type": "Literal",
                "start": 567,
                "end": 574,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 565,
              "end": 566,
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
      "start": 577,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 585,
            "end": 590,
            "arguments": [
              {
                "type": "Literal",
                "start": 587,
                "end": 589,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
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
      "start": 593,
      "end": 680,
      "body": {
        "type": "TSInterfaceBody",
        "start": 605,
        "end": 680,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 611,
            "end": 678,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 611,
              "end": 617,
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
              "start": 617,
              "end": 677,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 619,
                "end": 677,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 621,
                    "end": 650,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 633,
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
                      "start": 633,
                      "end": 649,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 635,
                        "end": 649,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 637,
                            "end": 647,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 637,
                              "end": 638,
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
                              "start": 638,
                              "end": 646,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 640,
                                "end": 646
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 651,
                    "end": 675,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 651,
                      "end": 660,
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
                      "start": 660,
                      "end": 675,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 662,
                        "end": 675,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 664,
                            "end": 673,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 665,
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
                              "start": 665,
                              "end": 673,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 667,
                                "end": 673
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
        "start": 603,
        "end": 604,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 681,
      "end": 763,
      "body": {
        "type": "TSInterfaceBody",
        "start": 693,
        "end": 763,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 699,
            "end": 761,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 705,
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
              "start": 705,
              "end": 760,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 707,
                "end": 760,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 709,
                    "end": 738,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 709,
                      "end": 721,
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
                      "start": 721,
                      "end": 737,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 723,
                        "end": 737,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 725,
                            "end": 735,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 726,
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
                              "start": 726,
                              "end": 734,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 728,
                                "end": 734
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 739,
                    "end": 758,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 744,
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
                      "start": 744,
                      "end": 758,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 746,
                        "end": 758,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 747,
                            "end": 756,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 748,
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
                              "start": 748,
                              "end": 756,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
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
        "start": 691,
        "end": 692,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 764,
      "end": 938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 770,
          "end": 938,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 770,
            "end": 779,
            "decorators": [],
            "name": "de",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 779,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 774,
                "end": 779,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 774,
                    "end": 775,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 774,
                      "end": 775,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 778,
                    "end": 779,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 778,
                      "end": 779,
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
            "start": 782,
            "end": 938,
            "properties": [
              {
                "type": "Property",
                "start": 788,
                "end": 936,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 794,
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
                  "start": 796,
                  "end": 936,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 806,
                      "end": 873,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 806,
                        "end": 818,
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
                        "start": 820,
                        "end": 873,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 834,
                            "end": 842,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 835,
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
                              "start": 837,
                              "end": 842,
                              "raw": "'yes'",
                              "value": "yes"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 856,
                            "end": 863,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 856,
                              "end": 857,
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
                              "start": 859,
                              "end": 863,
                              "raw": "'no'",
                              "value": "no"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 883,
                      "end": 903,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 883,
                        "end": 892,
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
                        "start": 894,
                        "end": 903,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 896,
                            "end": 901,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 896,
                              "end": 897,
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
                              "start": 899,
                              "end": 901,
                              "raw": "12",
                              "value": 12
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 913,
                      "end": 930,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 918,
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
                        "start": 920,
                        "end": 930,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 922,
                            "end": 928,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 922,
                              "end": 923,
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
                              "start": 925,
                              "end": 928,
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
      "start": 1038,
      "end": 1098,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1050,
        "end": 1098,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1056,
            "end": 1096,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1056,
              "end": 1062,
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
              "start": 1062,
              "end": 1096,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1064,
                "end": 1096,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1066,
                    "end": 1094,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1078,
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
                      "start": 1078,
                      "end": 1094,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1080,
                        "end": 1094,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1082,
                            "end": 1092,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1082,
                              "end": 1083,
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
                              "start": 1083,
                              "end": 1091,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
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
        "start": 1048,
        "end": 1049,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1100,
      "end": 1160,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1112,
        "end": 1160,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1118,
            "end": 1158,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1118,
              "end": 1124,
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
              "start": 1124,
              "end": 1158,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1126,
                "end": 1158,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1128,
                    "end": 1156,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1128,
                      "end": 1140,
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
                      "start": 1140,
                      "end": 1156,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1142,
                        "end": 1156,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1144,
                            "end": 1154,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1144,
                              "end": 1145,
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
                              "start": 1145,
                              "end": 1153,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1147,
                                "end": 1153
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
        "start": 1110,
        "end": 1111,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1162,
      "end": 1397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1168,
          "end": 1397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1168,
            "end": 1187,
            "decorators": [],
            "name": "defg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1172,
              "end": 1187,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1174,
                "end": 1187,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1174,
                    "end": 1175,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1174,
                      "end": 1175,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1178,
                    "end": 1179,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1178,
                      "end": 1179,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1182,
                    "end": 1183,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1182,
                      "end": 1183,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1186,
                    "end": 1187,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1186,
                      "end": 1187,
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
            "start": 1190,
            "end": 1397,
            "properties": [
              {
                "type": "Property",
                "start": 1196,
                "end": 1395,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1202,
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
                  "start": 1204,
                  "end": 1395,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1214,
                      "end": 1332,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1214,
                        "end": 1226,
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
                        "start": 1228,
                        "end": 1332,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1242,
                            "end": 1250,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1242,
                              "end": 1243,
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
                              "start": 1245,
                              "end": 1250,
                              "raw": "'yes'",
                              "value": "yes"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1264,
                            "end": 1271,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1264,
                              "end": 1265,
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
                              "start": 1267,
                              "end": 1271,
                              "raw": "'no'",
                              "value": "no"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1285,
                            "end": 1292,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1285,
                              "end": 1286,
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
                              "start": 1288,
                              "end": 1292,
                              "raw": "'ok'",
                              "value": "ok"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1306,
                            "end": 1322,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1306,
                              "end": 1307,
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
                              "start": 1309,
                              "end": 1322,
                              "raw": "'affirmative'",
                              "value": "affirmative"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1342,
                      "end": 1362,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1351,
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
                        "start": 1353,
                        "end": 1362,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1355,
                            "end": 1360,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1355,
                              "end": 1356,
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
                              "start": 1358,
                              "end": 1360,
                              "raw": "12",
                              "value": 12
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1372,
                      "end": 1389,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1372,
                        "end": 1377,
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
                        "start": 1379,
                        "end": 1389,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1381,
                            "end": 1387,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1381,
                              "end": 1382,
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
                              "start": 1384,
                              "end": 1387,
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
