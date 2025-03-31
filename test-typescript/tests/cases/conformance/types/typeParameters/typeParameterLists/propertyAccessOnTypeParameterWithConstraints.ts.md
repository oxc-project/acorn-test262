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
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 240,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 240,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 240,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 151,
                    "end": 160,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 155,
                        "end": 159,
                        "id": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "name": "x",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 169,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 179,
                              "end": 188,
                              "value": "getDate",
                              "raw": "'getDate'"
                            },
                            "computed": true,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 231,
                            "name": "getDate",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 296,
              "end": 300,
              "typeName": {
                "type": "Identifier",
                "start": 296,
                "end": 300,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 332,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 348,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 349,
                "end": 356,
                "name": "getDate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 376,
                "end": 385,
                "value": "getDate",
                "raw": "'getDate'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 428,
            "name": "a",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 415,
                            "end": 419,
                            "typeName": {
                              "type": "Identifier",
                              "start": 415,
                              "end": 419,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
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
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 455,
                "name": "getDate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 466,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Literal",
                "start": 473,
                "end": 482,
                "value": "getDate",
                "raw": "'getDate'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 616,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 505,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 507,
                  "end": 614,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 524,
                      "end": 528,
                      "name": "x",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 533,
                    "end": 614,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 543,
                        "end": 566,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 547,
                            "end": 565,
                            "id": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 548,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 553,
                                  "end": 562,
                                  "value": "getDate",
                                  "raw": "'getDate'"
                                },
                                "computed": true,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 598,
                                "end": 605,
                                "name": "getDate",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 518,
                          "end": 522,
                          "typeName": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 522,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 622,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 622,
            "end": 624,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 629,
                "end": 632,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 633,
                "end": 643,
                "callee": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 641,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
