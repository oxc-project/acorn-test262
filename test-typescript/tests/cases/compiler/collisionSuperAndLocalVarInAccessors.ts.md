collisionSuperAndLocalVarInAccessors.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 128,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 85,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 88,
                          "end": 90,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 112,
                    "end": 122,
                    "argument": {
                      "type": "Literal",
                      "start": 119,
                      "end": 121,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 200,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 200,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 176,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 179,
                          "end": 181,
                          "raw": "10",
                          "value": 10
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 154,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 400,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 400,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 319,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 238,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 319,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 269,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 272,
                          "end": 274,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 313,
                    "argument": {
                      "type": "Literal",
                      "start": 310,
                      "end": 312,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 398,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 333,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 333,
              "end": 398,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 367,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 370,
                          "end": 372,
                          "raw": "10",
                          "value": 10
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 334,
                  "end": 345,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 219,
        "end": 222,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 401,
      "end": 674,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 674,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 555,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 436,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 436,
              "end": 555,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 462,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 465,
                          "end": 530,
                          "async": false,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 489,
                                      "end": 495,
                                      "decorators": [],
                                      "name": "_super",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 498,
                                      "end": 500,
                                      "raw": "10",
                                      "value": 10
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 539,
                    "end": 549,
                    "argument": {
                      "type": "Literal",
                      "start": 546,
                      "end": 548,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 560,
            "end": 672,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 569,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 569,
              "end": 672,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 598,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 601,
                          "end": 666,
                          "async": false,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 625,
                                      "end": 631,
                                      "decorators": [],
                                      "name": "_super",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 634,
                                      "end": 636,
                                      "raw": "10",
                                      "value": 10
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 570,
                  "end": 581,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 573,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 408,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 417,
        "end": 420,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
