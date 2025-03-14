__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 631,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 114,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 112,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
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
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 140,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 155,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 148,
                "end": 154
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
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 229,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 229,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 227,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 214,
              "end": 226,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 224,
                "end": 226,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 215,
                  "end": 219,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 216,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 218,
                      "end": 219,
                      "typeName": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 171,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 192,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 192,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 194,
          "end": 199,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 196,
            "end": 199,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 198,
              "end": 199,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 171,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 172,
            "end": 173,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 186,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 186,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 241,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "D",
                  "optional": false
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
      "start": 251,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 259,
            "end": 268,
            "arguments": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 288,
            "arguments": [
              {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 282,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 336,
            "end": 361,
            "arguments": [
              {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 343,
                "end": 360,
                "properties": [
                  {
                    "type": "Property",
                    "start": 345,
                    "end": 350,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 348,
                      "end": 350,
                      "raw": "''",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 352,
                    "end": 358,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 355,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 369,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 372,
            "end": 387,
            "arguments": [
              {
                "type": "Literal",
                "start": 376,
                "end": 380,
                "raw": "null",
                "value": null
              },
              {
                "type": "Literal",
                "start": 382,
                "end": 386,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 372,
              "end": 375,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 395,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 398,
            "end": 411,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 402,
                "end": 404,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 406,
                "end": 410,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 398,
              "end": 401,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 419,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 422,
            "end": 435,
            "arguments": [
              {
                "type": "Literal",
                "start": 426,
                "end": 430,
                "raw": "null",
                "value": null
              },
              {
                "type": "ObjectExpression",
                "start": 432,
                "end": 434,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 422,
              "end": 425,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 457,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 446,
            "end": 457,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 450,
                "end": 452,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 454,
                "end": 456,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 446,
              "end": 449,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 493,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 468,
            "end": 493,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 472,
                "end": 481,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 478,
                  "end": 481,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 483,
                "end": 492,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 489,
                  "end": 492,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 471,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 527,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 501,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 504,
            "end": 527,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 508,
                "end": 517,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 514,
                  "end": 517,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 519,
                "end": 526,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 525,
                  "end": 526,
                  "raw": "1",
                  "value": 1
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 504,
              "end": 507,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 530,
      "end": 629,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 629,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 569,
            "end": 588,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 573,
                "end": 587,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 575,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 578,
                  "end": 587,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 585,
                      "end": 586,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 581,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 593,
            "end": 618,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 617,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 599,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 602,
                  "end": 617,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 612,
                      "end": 613,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 615,
                      "end": 616,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 605,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 605,
                    "end": 611,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 606,
                        "end": 607,
                        "typeName": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 607,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 609,
                        "end": 610,
                        "typeName": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 544,
        "decorators": [],
        "name": "other",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 544,
        "end": 560,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 545,
            "end": 546,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 548,
            "end": 559,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 558,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 548,
              "end": 549,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
