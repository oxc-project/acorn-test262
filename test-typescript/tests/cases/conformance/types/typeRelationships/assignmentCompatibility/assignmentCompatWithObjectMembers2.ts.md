__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 171,
  "end": 628,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
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
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 220,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 206,
            "end": 218,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
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
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
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
        "start": 202,
        "end": 203,
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
      "start": 221,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 229,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 229,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
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
      "start": 231,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 239,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
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
      "start": 242,
      "end": 284,
      "body": {
        "type": "TSInterfaceBody",
        "start": 255,
        "end": 284,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 257,
            "end": 269,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 270,
            "end": 282,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
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
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 254,
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 285,
      "end": 327,
      "body": {
        "type": "TSInterfaceBody",
        "start": 298,
        "end": 327,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 300,
            "end": 312,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 303,
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
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 313,
            "end": 325,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
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
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 319,
                "end": 325
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 338,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 338,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 338,
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
      "start": 340,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 350,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 348,
                "end": 350,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 350,
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
      "start": 353,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 389,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 360,
                "end": 389,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 362,
                    "end": 374,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 365,
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
                      "start": 365,
                      "end": 373,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 367,
                        "end": 373
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 375,
                    "end": 387,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 378,
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
                      "start": 379,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 381,
                        "end": 387
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
      "start": 390,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 426,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 397,
                "end": 426,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 399,
                    "end": 411,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 402,
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
                      "start": 402,
                      "end": 410,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 404,
                        "end": 410
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 412,
                    "end": 424,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 415,
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
                      "start": 416,
                      "end": 424,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
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
      "start": 428,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 437,
            "end": 448,
            "properties": [
              {
                "type": "Property",
                "start": 439,
                "end": 446,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 442,
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
                  "start": 444,
                  "end": 446,
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
      "start": 450,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 470,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 459,
            "end": 470,
            "properties": [
              {
                "type": "Property",
                "start": 461,
                "end": 468,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 464,
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
                  "start": 466,
                  "end": 468,
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
      "start": 473,
      "end": 479,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 473,
        "end": 478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 473,
          "end": 474,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 478,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 486,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 485,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 484,
          "end": 485,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 487,
        "end": 493,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 493,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 502,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 495,
        "end": 501,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 499,
          "end": 501,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 504,
      "end": 512,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 504,
        "end": 511,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 506,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 509,
          "end": 511,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 521,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 520,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 515,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 518,
          "end": 520,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 529,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 522,
        "end": 528,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 522,
          "end": 524,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 528,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 537,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 530,
        "end": 536,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 530,
          "end": 532,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 535,
          "end": 536,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 546,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 538,
        "end": 545,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 538,
          "end": 540,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 543,
          "end": 545,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 554,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 553,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 555,
      "end": 561,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 555,
        "end": 560,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 555,
          "end": 556,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 559,
          "end": 560,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 562,
      "end": 568,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 562,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 562,
          "end": 563,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 566,
          "end": 567,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 576,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 569,
        "end": 575,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 569,
          "end": 570,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 584,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 577,
        "end": 583,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 577,
          "end": 578,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 581,
          "end": 583,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 594,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 586,
        "end": 593,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 586,
          "end": 588,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 591,
          "end": 593,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 603,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 602,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 595,
          "end": 597,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 600,
          "end": 602,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 604,
      "end": 611,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 604,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 604,
          "end": 606,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 610,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 620,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 612,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 612,
          "end": 614,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 617,
          "end": 619,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 621,
      "end": 628,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 621,
        "end": 627,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 621,
          "end": 623,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 626,
          "end": 627,
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
