__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 700,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 168,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 175,
          "end": 199,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 199,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 180,
              "end": 199,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 182,
                  "end": 197,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 186,
                      "end": 197,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 187,
                          "end": 191,
                          "name": "t",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 188,
                            "end": 191,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 190,
                              "end": 191,
                              "typeName": {
                                "type": "Identifier",
                                "start": 190,
                                "end": 191,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 193,
                        "end": 197,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 196,
                          "end": 197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 197,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "type": "CallExpression",
              "start": 214,
              "end": 226,
              "callee": {
                "type": "MemberExpression",
                "start": 214,
                "end": 220,
                "object": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 217,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 220,
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 221,
                  "end": 225,
                  "value": null,
                  "raw": "null"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 168,
        "end": 174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 169,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 172,
            "end": 173,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 238,
            "name": "arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 241,
            "end": 264,
            "properties": [
              {
                "type": "Property",
                "start": 243,
                "end": 262,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 245,
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 247,
                  "end": 262,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 251,
                      "end": 255,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 252,
                        "end": 255,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 254,
                          "end": 255,
                          "typeName": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
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
                    "type": "Literal",
                    "start": 260,
                    "end": 262,
                    "value": "",
                    "raw": "''"
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 247,
                    "end": 250,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 248,
                        "end": 249,
                        "name": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
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
      "start": 266,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 274,
            "end": 282,
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 278,
                "end": 281,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 321,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 324,
            "end": 358,
            "callee": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 328,
                "end": 357,
                "properties": [
                  {
                    "type": "Property",
                    "start": 330,
                    "end": 355,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 332,
                      "name": "cb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 334,
                      "end": 355,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 338,
                          "end": 342,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 339,
                            "end": 342,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 341,
                              "end": 342,
                              "typeName": {
                                "type": "Identifier",
                                "start": 341,
                                "end": 342,
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
                        {
                          "type": "Identifier",
                          "start": 344,
                          "end": 348,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 345,
                            "end": 348,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 347,
                              "end": 348,
                              "typeName": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 348,
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
                        "type": "Literal",
                        "start": 353,
                        "end": 355,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 334,
                        "end": 337,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 335,
                            "end": 336,
                            "name": {
                              "type": "Identifier",
                              "start": 335,
                              "end": 336,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 419,
            "callee": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 382,
                "end": 418,
                "properties": [
                  {
                    "type": "Property",
                    "start": 384,
                    "end": 416,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 386,
                      "name": "cb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 388,
                      "end": 416,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 389,
                          "end": 398,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 390,
                            "end": 398,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 392,
                              "end": 398
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 400,
                          "end": 409,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 401,
                            "end": 409,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 403,
                              "end": 409
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 414,
                        "end": 416,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 431,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 444,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 451,
          "end": 482,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 454,
            "end": 482,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 456,
              "end": 482,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 458,
                  "end": 480,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 460,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 460,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 462,
                      "end": 480,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 463,
                          "end": 467,
                          "name": "t",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 464,
                            "end": 467,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 466,
                              "end": 467,
                              "typeName": {
                                "type": "Identifier",
                                "start": 466,
                                "end": 467,
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
                        {
                          "type": "Identifier",
                          "start": 469,
                          "end": 474,
                          "name": "t2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 471,
                            "end": 474,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 473,
                              "end": 474,
                              "typeName": {
                                "type": "Identifier",
                                "start": 473,
                                "end": 474,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 476,
                        "end": 480,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 479,
                          "end": 480,
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 480,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 484,
        "end": 518,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 490,
            "end": 516,
            "argument": {
              "type": "CallExpression",
              "start": 497,
              "end": 515,
              "callee": {
                "type": "MemberExpression",
                "start": 497,
                "end": 503,
                "object": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 500,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 503,
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 504,
                  "end": 508,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Literal",
                  "start": 510,
                  "end": 514,
                  "value": null,
                  "raw": "null"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 444,
        "end": 450,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 445,
            "end": 446,
            "name": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 448,
            "end": 449,
            "name": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 543,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 546,
            "end": 554,
            "callee": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 553,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 568,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 571,
            "end": 599,
            "callee": {
              "type": "Identifier",
              "start": 571,
              "end": 574,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 575,
                "end": 598,
                "properties": [
                  {
                    "type": "Property",
                    "start": 577,
                    "end": 596,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 579,
                      "name": "cb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 581,
                      "end": 596,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 585,
                          "end": 589,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 586,
                            "end": 589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 588,
                              "end": 589,
                              "typeName": {
                                "type": "Identifier",
                                "start": 588,
                                "end": 589,
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
                        "type": "Literal",
                        "start": 594,
                        "end": 596,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 581,
                        "end": 584,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 582,
                            "end": 583,
                            "name": {
                              "type": "Identifier",
                              "start": 582,
                              "end": 583,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 607,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 613,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 616,
            "end": 646,
            "callee": {
              "type": "Identifier",
              "start": 616,
              "end": 619,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 620,
                "end": 645,
                "properties": [
                  {
                    "type": "Property",
                    "start": 622,
                    "end": 643,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 624,
                      "name": "cb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 626,
                      "end": 643,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 627,
                          "end": 636,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 628,
                            "end": 636,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 630,
                              "end": 636
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 641,
                        "end": 643,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 689,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 664,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 688,
            "callee": {
              "type": "Identifier",
              "start": 667,
              "end": 670,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 671,
                "end": 687,
                "properties": [
                  {
                    "type": "Property",
                    "start": 673,
                    "end": 685,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 673,
                      "end": 675,
                      "name": "cb",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 677,
                      "end": 685,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Literal",
                        "start": 683,
                        "end": 685,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
