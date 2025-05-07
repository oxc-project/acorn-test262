__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 774,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 385,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 385,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 220,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 220,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 42,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 61,
                  "end": 102,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 102,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 69,
                      "end": 102,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 83,
                          "end": 92,
                          "argument": {
                            "type": "Literal",
                            "start": 90,
                            "end": 91,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 111,
                  "end": 123,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 116,
                    "end": 123,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 123,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 132,
                  "end": 153,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 134,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 153,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 137,
                      "end": 153,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 139,
                          "end": 151,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 162,
                  "end": 214,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 173,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 173,
                    "end": 214,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 211,
                      "end": 214,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 174,
                        "end": 190,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 182,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 192,
                        "end": 209,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 209,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 203,
                              "end": 209
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "C",
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
            "start": 226,
            "end": 258,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 244,
              "end": 258,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 246,
                  "end": 256,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 255,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
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
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 264,
            "end": 284,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 283,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 272,
                  "end": 283,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 278,
                      "end": 279,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 281,
                      "end": 282,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 289,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 293,
                "end": 303,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 297,
                  "end": 303,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 297,
                    "end": 301,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 301,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            "start": 309,
            "end": 322,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 321,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 315,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 318,
                  "end": 321,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 339,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 336,
                  "end": 339,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 345,
            "end": 353,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 345,
              "end": 352,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 345,
                "end": 348,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 351,
                "end": 352,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 358,
            "end": 373,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 362,
                "end": 372,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 364,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 372,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 370,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 387,
      "end": 774,
      "body": {
        "type": "TSModuleBlock",
        "start": 402,
        "end": 774,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 408,
            "end": 601,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 422,
              "end": 601,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 432,
                  "end": 437,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 433,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 435,
                      "end": 436,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 446,
                  "end": 490,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 451,
                    "end": 490,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 454,
                      "end": 490,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 468,
                          "end": 480,
                          "argument": {
                            "type": "Literal",
                            "start": 475,
                            "end": 479,
                            "raw": "null",
                            "value": null,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 499,
                  "end": 514,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 504,
                    "end": 514,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 511,
                      "end": 514,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 505,
                        "end": 509,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 506,
                          "end": 509,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 508,
                            "end": 509,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 508,
                              "end": 509,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 523,
                  "end": 544,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 525,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 525,
                    "end": 544,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 528,
                      "end": 544,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 530,
                          "end": 542,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 537,
                            "end": 541
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 553,
                  "end": 595,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 564,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 564,
                    "end": 595,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 592,
                      "end": 595,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 565,
                        "end": 576,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 576,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 573,
                            "end": 576,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 575,
                              "end": 576,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 575,
                                "end": 576,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 578,
                        "end": 590,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 590,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 587,
                            "end": 590,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 589,
                              "end": 590,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 589,
                                "end": 590,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 415,
              "end": 421,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 416,
                  "end": 417,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 419,
                  "end": 420,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 607,
            "end": 646,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 637,
              "end": 646,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 639,
                  "end": 644,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 643,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 642,
                      "end": 643,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 643,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 630,
              "end": 636,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 631,
                  "end": 632,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 634,
                  "end": 635,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 614,
              "end": 620,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 615,
                  "end": 616,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 618,
                  "end": 619,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 619,
                    "decorators": [],
                    "name": "U",
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
            "start": 652,
            "end": 673,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 656,
                "end": 672,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 660,
                  "end": 672,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 666,
                      "end": 667,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 669,
                      "end": 671,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 665,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 678,
            "end": 693,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 692,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 686,
                  "end": 692,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 686,
                    "end": 690,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 687,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 688,
                      "end": 690,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            "start": 698,
            "end": 711,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 710,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 707,
                  "end": 710,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 710,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 716,
            "end": 729,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 720,
                "end": 728,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 722,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 725,
                  "end": 728,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 726,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 728,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 734,
            "end": 743,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 734,
              "end": 742,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 734,
                "end": 737,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 740,
                "end": 742,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 748,
            "end": 763,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 752,
                "end": 762,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 757,
                  "end": 762,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 757,
                    "end": 760,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 757,
                      "end": 758,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 760,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 401,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
