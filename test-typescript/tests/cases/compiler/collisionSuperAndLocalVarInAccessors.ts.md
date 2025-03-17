__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "_super",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 128,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 75,
                    "end": 91,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 79,
                        "end": 90,
                        "id": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 85,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 88,
                          "end": 90,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 112,
                    "end": 122,
                    "argument": {
                      "type": "Literal",
                      "start": 119,
                      "end": 121,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 154,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 200,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 166,
                    "end": 182,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 170,
                        "end": 181,
                        "id": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 176,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 179,
                          "end": 181,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 219,
        "end": 222,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 400,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 319,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 238,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 319,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 249,
                "end": 319,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 259,
                    "end": 275,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 263,
                        "end": 274,
                        "id": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 269,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 272,
                          "end": 274,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 313,
                    "argument": {
                      "type": "Literal",
                      "start": 310,
                      "end": 312,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 240,
                "end": 248,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 242,
                  "end": 248
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 333,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 333,
              "end": 398,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 334,
                  "end": 345,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 398,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 357,
                    "end": 373,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 361,
                        "end": 372,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 367,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 370,
                          "end": 372,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 401,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 408,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 417,
        "end": 420,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 674,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 555,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 436,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 436,
              "end": 555,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 555,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 457,
                    "end": 530,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 461,
                        "end": 530,
                        "id": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 462,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 465,
                          "end": 530,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 471,
                            "end": 530,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 485,
                                "end": 501,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 489,
                                    "end": 500,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 489,
                                      "end": 495,
                                      "name": "_super",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 498,
                                      "end": 500,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 539,
                    "end": 549,
                    "argument": {
                      "type": "Literal",
                      "start": 546,
                      "end": 548,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 438,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 440,
                  "end": 446
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 560,
            "end": 672,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 569,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 569,
              "end": 672,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 570,
                  "end": 581,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 573,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 583,
                "end": 672,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 593,
                    "end": 666,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 597,
                        "end": 666,
                        "id": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 598,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 601,
                          "end": 666,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 607,
                            "end": 666,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 621,
                                "end": 637,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 625,
                                    "end": 636,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 625,
                                      "end": 631,
                                      "name": "_super",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 634,
                                      "end": 636,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
