__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 914,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 193,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 101,
            "decorators": [
              {
                "type": "Decorator",
                "start": 14,
                "end": 57,
                "expression": {
                  "type": "CallExpression",
                  "start": 15,
                  "end": 57,
                  "callee": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 32,
                    "decorators": [],
                    "name": "boundMethodLogger",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 33,
                      "end": 40,
                      "value": "Yadda",
                      "raw": "\"Yadda\""
                    },
                    {
                      "type": "Literal",
                      "start": 52,
                      "end": 56,
                      "value": true,
                      "raw": "true"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 101,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 101,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 95,
                    "expression": {
                      "type": "CallExpression",
                      "start": 78,
                      "end": 94,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 78,
                        "end": 92,
                        "object": {
                          "type": "ThisExpression",
                          "start": 78,
                          "end": 82
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 92,
                          "decorators": [],
                          "name": "fooHelper",
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
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 116,
              "decorators": [],
              "name": "fooHelper",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 191,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 191,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 185,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 185,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 140,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 136,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 141,
                          "end": 184,
                          "value": "Behold! The actual method implementation!",
                          "raw": "\"Behold! The actual method implementation!\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
      "type": "EmptyStatement",
      "start": 193,
      "end": 194
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 195,
      "end": 208,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 204,
          "end": 205,
          "local": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 210,
      "end": 914,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 236,
        "decorators": [],
        "name": "boundMethodLogger",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 236,
        "end": 270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 237,
            "end": 241,
            "name": {
              "type": "Identifier",
              "start": 237,
              "end": 241,
              "decorators": [],
              "name": "This",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 261,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 247,
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 256,
              "end": 261,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 256,
                "end": 259
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 269,
              "decorators": [],
              "name": "Return",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 271,
          "end": 285,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 277,
            "end": 285,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 279,
              "end": 285
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 287,
          "end": 299,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 287,
            "end": 292,
            "decorators": [],
            "name": "bound",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 295,
            "end": 299,
            "value": true,
            "raw": "true"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 914,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 307,
            "end": 912,
            "argument": {
              "type": "FunctionExpression",
              "start": 314,
              "end": 912,
              "id": {
                "type": "Identifier",
                "start": 323,
                "end": 338,
                "decorators": [],
                "name": "loggedDecorator",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 348,
                  "end": 393,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 354,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 356,
                      "end": 393,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 357,
                          "end": 367,
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 361,
                            "end": 367,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 363,
                              "end": 367,
                              "typeName": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 367,
                                "decorators": [],
                                "name": "This",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 369,
                          "end": 382,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 376,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 376,
                            "end": 382,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 378,
                              "end": 382,
                              "typeName": {
                                "type": "Identifier",
                                "start": 378,
                                "end": 382,
                                "decorators": [],
                                "name": "Args",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 384,
                        "end": 393,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 387,
                          "end": 393,
                          "typeName": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 393,
                            "decorators": [],
                            "name": "Return",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 403,
                  "end": 484,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 410,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 484,
                      "typeName": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 439,
                        "decorators": [],
                        "name": "ClassMethodDecoratorContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 439,
                        "end": 484,
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
                              "name": "This",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSFunctionType",
                            "start": 446,
                            "end": 483,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 447,
                                "end": 457,
                                "decorators": [],
                                "name": "this",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 451,
                                  "end": 457,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 453,
                                    "end": 457,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 453,
                                      "end": 457,
                                      "decorators": [],
                                      "name": "This",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "RestElement",
                                "start": 459,
                                "end": 472,
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "start": 462,
                                  "end": 466,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 466,
                                  "end": 472,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 468,
                                    "end": 472,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 468,
                                      "end": 472,
                                      "decorators": [],
                                      "name": "Args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "value": null
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 474,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 477,
                                "end": 483,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 477,
                                  "end": 483,
                                  "decorators": [],
                                  "name": "Return",
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
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 490,
                "end": 531,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 493,
                  "end": 530,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 494,
                      "end": 504,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 498,
                        "end": 504,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 500,
                          "end": 504,
                          "typeName": {
                            "type": "Identifier",
                            "start": 500,
                            "end": 504,
                            "decorators": [],
                            "name": "This",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 506,
                      "end": 519,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 513,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 513,
                        "end": 519,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 515,
                          "end": 519,
                          "typeName": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 519,
                            "decorators": [],
                            "name": "Args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 521,
                    "end": 530,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 524,
                      "end": 530,
                      "typeName": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 530,
                        "decorators": [],
                        "name": "Return",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 532,
                "end": 912,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 543,
                    "end": 716,
                    "test": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 552,
                      "decorators": [],
                      "name": "bound",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 554,
                      "end": 716,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 568,
                          "end": 706,
                          "expression": {
                            "type": "CallExpression",
                            "start": 568,
                            "end": 705,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 568,
                              "end": 590,
                              "object": {
                                "type": "Identifier",
                                "start": 568,
                                "end": 575,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 576,
                                "end": 590,
                                "decorators": [],
                                "name": "addInitializer",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "FunctionExpression",
                                "start": 591,
                                "end": 704,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 603,
                                  "end": 704,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 621,
                                      "end": 690,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 621,
                                        "end": 689,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 621,
                                          "end": 648,
                                          "object": {
                                            "type": "TSAsExpression",
                                            "start": 622,
                                            "end": 633,
                                            "expression": {
                                              "type": "ThisExpression",
                                              "start": 622,
                                              "end": 626
                                            },
                                            "typeAnnotation": {
                                              "type": "TSAnyKeyword",
                                              "start": 630,
                                              "end": 633
                                            }
                                          },
                                          "property": {
                                            "type": "MemberExpression",
                                            "start": 635,
                                            "end": 647,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 635,
                                              "end": 642,
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 643,
                                              "end": 647,
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "optional": false,
                                          "computed": true
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "start": 651,
                                          "end": 689,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 651,
                                            "end": 683,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 651,
                                              "end": 678,
                                              "object": {
                                                "type": "TSAsExpression",
                                                "start": 652,
                                                "end": 663,
                                                "expression": {
                                                  "type": "ThisExpression",
                                                  "start": 652,
                                                  "end": 656
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "start": 660,
                                                  "end": 663
                                                }
                                              },
                                              "property": {
                                                "type": "MemberExpression",
                                                "start": 665,
                                                "end": 677,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 665,
                                                  "end": 672,
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 673,
                                                  "end": 677,
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "optional": false,
                                              "computed": true
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 679,
                                              "end": 683,
                                              "decorators": [],
                                              "name": "bind",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 684,
                                              "end": 688
                                            }
                                          ],
                                          "optional": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "expression": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 726,
                    "end": 906,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 733,
                      "end": 906,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 743,
                          "end": 747,
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "RestElement",
                          "start": 749,
                          "end": 756,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 752,
                            "end": 756,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 758,
                        "end": 906,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 772,
                            "end": 851,
                            "expression": {
                              "type": "CallExpression",
                              "start": 772,
                              "end": 850,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 772,
                                "end": 783,
                                "object": {
                                  "type": "Identifier",
                                  "start": 772,
                                  "end": 779,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 780,
                                  "end": 783,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "start": 784,
                                  "end": 849,
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "start": 784,
                                      "end": 788,
                                      "value": {
                                        "raw": "<",
                                        "cooked": "<"
                                      },
                                      "tail": false
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "start": 794,
                                      "end": 823,
                                      "value": {
                                        "raw": ">: I'm logging stuff from ",
                                        "cooked": ">: I'm logging stuff from "
                                      },
                                      "tail": false
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "start": 846,
                                      "end": 849,
                                      "value": {
                                        "raw": "!",
                                        "cooked": "!"
                                      },
                                      "tail": true
                                    }
                                  ],
                                  "expressions": [
                                    {
                                      "type": "Identifier",
                                      "start": 788,
                                      "end": 794,
                                      "decorators": [],
                                      "name": "source",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "CallExpression",
                                      "start": 823,
                                      "end": 846,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 823,
                                        "end": 844,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 823,
                                          "end": 835,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 823,
                                            "end": 830,
                                            "decorators": [],
                                            "name": "context",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 831,
                                            "end": 835,
                                            "decorators": [],
                                            "name": "name",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 836,
                                          "end": 844,
                                          "decorators": [],
                                          "name": "toString",
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
                                  ]
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 864,
                            "end": 896,
                            "argument": {
                              "type": "CallExpression",
                              "start": 871,
                              "end": 895,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 871,
                                "end": 883,
                                "object": {
                                  "type": "Identifier",
                                  "start": 871,
                                  "end": 877,
                                  "decorators": [],
                                  "name": "target",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 878,
                                  "end": 883,
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                {
                                  "type": "Identifier",
                                  "start": 890,
                                  "end": 894,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    }
                  }
                ]
              },
              "expression": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
