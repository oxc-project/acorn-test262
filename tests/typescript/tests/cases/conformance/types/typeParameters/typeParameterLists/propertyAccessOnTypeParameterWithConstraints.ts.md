__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 107,
  "end": 645,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 242,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 240,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 240,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 240,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 151,
                    "end": 160,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 155,
                        "end": 159,
                        "id": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 156,
                            "end": 159,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 158,
                              "end": 159,
                              "typeName": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 159,
                                "decorators": [],
                                "name": "T",
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
                    "start": 169,
                    "end": 192,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 177,
                          "end": 191,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 189,
                            "object": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Literal",
                              "start": 179,
                              "end": 188,
                              "value": "getDate",
                              "raw": "'getDate'"
                            },
                            "optional": false,
                            "computed": true
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
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 234,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 218,
                      "end": 233,
                      "left": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 222,
                        "end": 233,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 222,
                          "end": 231,
                          "object": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 223,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 231,
                            "decorators": [],
                            "name": "getDate",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
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
      "start": 244,
      "end": 272,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 271,
            "callee": {
              "type": "MemberExpression",
              "start": 252,
              "end": 269,
              "object": {
                "type": "NewExpression",
                "start": 253,
                "end": 266,
                "callee": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 258,
                  "end": 264,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 263,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 263,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "type": "TSInterfaceDeclaration",
      "start": 274,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 300,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 296,
              "end": 300,
              "typeName": {
                "type": "Identifier",
                "start": 296,
                "end": 300,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 317,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 308,
            "end": 315,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 311,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "T",
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 333,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 332,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 326,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 326,
                  "end": 332,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 327,
                      "end": 331,
                      "typeName": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 331,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 334,
      "end": 359,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 343,
            "end": 358,
            "callee": {
              "type": "MemberExpression",
              "start": 343,
              "end": 356,
              "object": {
                "type": "MemberExpression",
                "start": 343,
                "end": 348,
                "object": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 349,
                "end": 356,
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "type": "VariableDeclaration",
      "start": 360,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 370,
            "end": 388,
            "callee": {
              "type": "MemberExpression",
              "start": 370,
              "end": 386,
              "object": {
                "type": "MemberExpression",
                "start": 370,
                "end": 375,
                "object": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Literal",
                "start": 376,
                "end": 385,
                "value": "getDate",
                "raw": "'getDate'"
              },
              "optional": false,
              "computed": true
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
      "type": "VariableDeclaration",
      "start": 391,
      "end": 428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 428,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 398,
                "end": 428,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 404,
                    "end": 426,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 404,
                      "end": 420,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 405,
                          "end": 419,
                          "name": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 406,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 415,
                            "end": 419,
                            "typeName": {
                              "type": "Identifier",
                              "start": 415,
                              "end": 419,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 422,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 424,
                        "end": 425,
                        "typeName": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
      "start": 429,
      "end": 458,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 457,
            "callee": {
              "type": "MemberExpression",
              "start": 438,
              "end": 455,
              "object": {
                "type": "CallExpression",
                "start": 438,
                "end": 447,
                "callee": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 439,
                  "end": 445,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 440,
                      "end": 444,
                      "typeName": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 444,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 455,
                "decorators": [],
                "name": "getDate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "type": "VariableDeclaration",
      "start": 459,
      "end": 486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 466,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 485,
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 483,
              "object": {
                "type": "CallExpression",
                "start": 469,
                "end": 472,
                "callee": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 473,
                "end": 482,
                "value": "getDate",
                "raw": "'getDate'"
              },
              "optional": false,
              "computed": true
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
      "type": "VariableDeclaration",
      "start": 488,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 616,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 496,
            "end": 616,
            "properties": [
              {
                "type": "Property",
                "start": 502,
                "end": 614,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 505,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 507,
                  "end": 614,
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 507,
                    "end": 523,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 508,
                        "end": 522,
                        "name": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 509,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 518,
                          "end": 522,
                          "typeName": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 522,
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
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
                      "start": 524,
                      "end": 528,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 525,
                        "end": 528,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 527,
                          "end": 528,
                          "typeName": {
                            "type": "Identifier",
                            "start": 527,
                            "end": 528,
                            "decorators": [],
                            "name": "T",
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
                    "start": 533,
                    "end": 614,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 543,
                        "end": 566,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 547,
                            "end": 565,
                            "id": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 548,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 551,
                              "end": 565,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 551,
                                "end": 563,
                                "object": {
                                  "type": "Identifier",
                                  "start": 551,
                                  "end": 552,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 553,
                                  "end": 562,
                                  "value": "getDate",
                                  "raw": "'getDate'"
                                },
                                "optional": false,
                                "computed": true
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
                        "type": "ReturnStatement",
                        "start": 585,
                        "end": 608,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 592,
                          "end": 607,
                          "left": {
                            "type": "Identifier",
                            "start": 592,
                            "end": 593,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 596,
                            "end": 607,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 596,
                              "end": 605,
                              "object": {
                                "type": "Identifier",
                                "start": 596,
                                "end": 597,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 598,
                                "end": 605,
                                "decorators": [],
                                "name": "getDate",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      }
                    ]
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
      "type": "VariableDeclaration",
      "start": 618,
      "end": 645,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 624,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 627,
            "end": 644,
            "callee": {
              "type": "MemberExpression",
              "start": 627,
              "end": 632,
              "object": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 629,
                "end": 632,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 633,
                "end": 643,
                "callee": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 641,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ],
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
