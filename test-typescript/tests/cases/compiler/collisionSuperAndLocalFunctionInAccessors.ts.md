__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 765,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "_super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 33,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 146,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 146,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 146,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 80,
                    "end": 121,
                    "id": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 95,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 98,
                      "end": 121,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 130,
                    "end": 140,
                    "argument": {
                      "type": "Literal",
                      "start": 137,
                      "end": 139,
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
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
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
            "start": 151,
            "end": 231,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 160,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 231,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 231,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 184,
                    "end": 225,
                    "id": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 199,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 202,
                      "end": 225,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
      "start": 234,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 457,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 260,
            "end": 363,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 269,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 363,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 280,
                "end": 363,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 290,
                    "end": 338,
                    "id": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 305,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 308,
                      "end": 338,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 347,
                    "end": 357,
                    "argument": {
                      "type": "Literal",
                      "start": 354,
                      "end": 356,
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
                "start": 271,
                "end": 279,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 273,
                  "end": 279
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
            "start": 368,
            "end": 455,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 455,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 378,
                  "end": 389,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 383,
                      "end": 389
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 455,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 401,
                    "end": 449,
                    "id": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 416,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 419,
                      "end": 449,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
      "start": 458,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 465,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 474,
        "end": 477,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 478,
        "end": 765,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 484,
            "end": 629,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 488,
              "end": 493,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 493,
              "end": 629,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 504,
                "end": 629,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 514,
                    "end": 604,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 518,
                        "end": 604,
                        "id": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 522,
                          "end": 604,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 528,
                            "end": 604,
                            "body": [
                              {
                                "type": "FunctionDeclaration",
                                "start": 542,
                                "end": 594,
                                "id": {
                                  "type": "Identifier",
                                  "start": 551,
                                  "end": 557,
                                  "name": "_super",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 560,
                                  "end": 594,
                                  "body": []
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
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
                    "start": 613,
                    "end": 623,
                    "argument": {
                      "type": "Literal",
                      "start": 620,
                      "end": 622,
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
                "start": 495,
                "end": 503,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 497,
                  "end": 503
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
            "start": 634,
            "end": 763,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 638,
              "end": 643,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 763,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 655,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 655,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 649,
                      "end": 655
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 657,
                "end": 763,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 667,
                    "end": 757,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 671,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 671,
                          "end": 672,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 675,
                          "end": 757,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 681,
                            "end": 757,
                            "body": [
                              {
                                "type": "FunctionDeclaration",
                                "start": 695,
                                "end": 747,
                                "id": {
                                  "type": "Identifier",
                                  "start": 704,
                                  "end": 710,
                                  "name": "_super",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 713,
                                  "end": 747,
                                  "body": []
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
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
