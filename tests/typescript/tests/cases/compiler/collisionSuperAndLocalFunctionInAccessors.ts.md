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
        "decorators": [],
        "name": "_super",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 33,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 233,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 146,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 146,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                }
              },
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 98,
                      "end": 121,
                      "body": []
                    },
                    "expression": false
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 231,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 160,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 231,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 202,
                      "end": 225,
                      "body": []
                    },
                    "expression": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "ClassDeclaration",
      "start": 234,
      "end": 457,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 457,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 260,
            "end": 363,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 269,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 363,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 271,
                "end": 279,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 273,
                  "end": 279
                }
              },
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 308,
                      "end": 338,
                      "body": []
                    },
                    "expression": false
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 368,
            "end": 455,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 377,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 455,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 378,
                  "end": 389,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 383,
                      "end": 389
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 419,
                      "end": 449,
                      "body": []
                    },
                    "expression": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
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
      "type": "ClassDeclaration",
      "start": 458,
      "end": 765,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 465,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 474,
        "end": 477,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 478,
        "end": 765,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 484,
            "end": 629,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 488,
              "end": 493,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 493,
              "end": 629,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 495,
                "end": 503,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 497,
                  "end": 503
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 504,
                "end": 629,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 514,
                    "end": 604,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 518,
                        "end": 604,
                        "id": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 522,
                          "end": 604,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "decorators": [],
                                  "name": "_super",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 560,
                                  "end": 594,
                                  "body": []
                                },
                                "expression": false
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 634,
            "end": 763,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 638,
              "end": 643,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 763,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 655,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 655,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 649,
                      "end": 655
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 657,
                "end": 763,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 667,
                    "end": 757,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 671,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 671,
                          "end": 672,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 675,
                          "end": 757,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "decorators": [],
                                  "name": "_super",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 713,
                                  "end": 747,
                                  "body": []
                                },
                                "expression": false
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
