__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1311,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 64,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 64,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 76,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 86,
          "end": 89,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 93,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 112,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 105,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 112,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 689,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 689,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 157,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 151,
                "end": 157
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 176,
              "end": 177,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 183,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 201,
                    "argument": {
                      "type": "Literal",
                      "start": 200,
                      "end": 201,
                      "raw": "1",
                      "value": 1
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
            "start": 208,
            "end": 579,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 219,
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
              "start": 219,
              "end": 579,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 222,
                "end": 579,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 243,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 232,
                      "end": 242,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 238,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 232,
                          "end": 236
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 241,
                        "end": 242,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 259,
                    "end": 270,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 259,
                      "end": 269,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 259,
                        "end": 265,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 259,
                          "end": 263
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 268,
                        "end": 269,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 286,
                    "end": 297,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 286,
                      "end": 296,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 286,
                        "end": 292,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 292,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 295,
                        "end": 296,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 316,
                    "end": 446,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 322,
                        "end": 445,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 323,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 326,
                          "end": 445,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 332,
                            "end": 445,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 346,
                                "end": 357,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 346,
                                  "end": 356,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 346,
                                    "end": 352,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 346,
                                      "end": 350
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 351,
                                      "end": 352,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 355,
                                    "end": 356,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 380,
                                "end": 391,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 380,
                                  "end": 390,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 380,
                                    "end": 386,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 380,
                                      "end": 384
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 385,
                                      "end": 386,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 389,
                                    "end": 390,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 414,
                                "end": 425,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 414,
                                  "end": 424,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 414,
                                    "end": 420,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 414,
                                      "end": 418
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 419,
                                      "end": 420,
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 423,
                                    "end": 424,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 573,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 455,
                      "end": 572,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 456,
                        "end": 569,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 462,
                          "end": 569,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 476,
                              "end": 487,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 476,
                                "end": 486,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 476,
                                  "end": 482,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 476,
                                    "end": 480
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 481,
                                    "end": 482,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 485,
                                  "end": 486,
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 507,
                              "end": 518,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 507,
                                "end": 517,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 507,
                                  "end": 513,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 507,
                                    "end": 511
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 512,
                                    "end": 513,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 516,
                                  "end": 517,
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 538,
                              "end": 549,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 538,
                                "end": 548,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 538,
                                  "end": 544,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 538,
                                    "end": 542
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 543,
                                    "end": 544,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 547,
                                  "end": 548,
                                  "raw": "1",
                                  "value": 1
                                }
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      },
                      "optional": false,
                      "typeArguments": null
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
            "start": 584,
            "end": 687,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 584,
              "end": 587,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 587,
              "end": 687,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 590,
                "end": 687,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 600,
                    "end": 611,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 600,
                      "end": 610,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 600,
                        "end": 606,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 600,
                          "end": 604
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 606,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 609,
                        "end": 610,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 630,
                    "end": 641,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 630,
                      "end": 640,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 630,
                        "end": 636,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 630,
                          "end": 634
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 635,
                          "end": 636,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 639,
                        "end": 640,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 660,
                    "end": 671,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 660,
                      "end": 670,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 660,
                        "end": 666,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 660,
                          "end": 664
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 666,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 669,
                        "end": 670,
                        "raw": "1",
                        "value": 1
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
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
      "type": "VariableDeclaration",
      "start": 691,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 775,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 696,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 699,
            "end": 775,
            "properties": [
              {
                "type": "Property",
                "start": 705,
                "end": 725,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 710,
                  "end": 725,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 713,
                    "end": 725,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 715,
                        "end": 723,
                        "argument": {
                          "type": "Literal",
                          "start": 722,
                          "end": 723,
                          "raw": "1",
                          "value": 1
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
                "type": "Property",
                "start": 731,
                "end": 751,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 736,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 736,
                  "end": 751,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 739,
                    "end": 751,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 741,
                        "end": 749,
                        "argument": {
                          "type": "Literal",
                          "start": 748,
                          "end": 749,
                          "raw": "1",
                          "value": 1
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
                "type": "Property",
                "start": 757,
                "end": 773,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 762,
                  "end": 773,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 770,
                    "end": 773,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 768,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 777,
      "end": 785,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 777,
        "end": 784,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 777,
          "end": 780,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 779,
            "end": 780,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 783,
          "end": 784,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 796,
      "end": 804,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 796,
        "end": 803,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 796,
          "end": 799,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 796,
            "end": 797,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 798,
            "end": 799,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 802,
          "end": 803,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 806,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 810,
          "end": 863,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 810,
            "end": 846,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 846,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 813,
                "end": 846,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 815,
                    "end": 834,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 824,
                      "end": 825,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 825,
                      "end": 833,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 827,
                        "end": 833
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 835,
                    "end": 844,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 836,
                      "end": 844,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 838,
                        "end": 844
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 849,
            "end": 863,
            "properties": [
              {
                "type": "Property",
                "start": 851,
                "end": 855,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 852,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 854,
                  "end": 855,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 857,
                "end": 861,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 860,
                  "end": 861,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 865,
      "end": 873,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 865,
        "end": 872,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 865,
          "end": 868,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 865,
            "end": 866,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 867,
            "end": 868,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 871,
          "end": 872,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 892,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 884,
        "end": 891,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 884,
          "end": 887,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 884,
            "end": 885,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 886,
            "end": 887,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 890,
          "end": 891,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 893,
      "end": 929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 928,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 924,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 898,
              "end": 924,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 900,
                "end": 924,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 902,
                    "end": 912,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 903,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 903,
                      "end": 911,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 905,
                        "end": 911
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 913,
                    "end": 922,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 914,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 914,
                      "end": 922,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 916,
                        "end": 922
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 927,
            "end": 928,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 938,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 930,
        "end": 937,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 930,
          "end": 933,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 930,
            "end": 931,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 932,
            "end": 933,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 936,
          "end": 937,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 939,
      "end": 947,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 939,
        "end": 946,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 939,
          "end": 942,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 939,
            "end": 940,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 941,
            "end": 942,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 945,
          "end": 946,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 949,
      "end": 971,
      "body": {
        "type": "TSEnumBody",
        "start": 956,
        "end": 971,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 962,
            "end": 963,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 962,
              "end": 963,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 965,
            "end": 966,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 965,
              "end": 966,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 968,
            "end": 969,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 968,
              "end": 969,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 955,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 972,
      "end": 980,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 972,
        "end": 979,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 972,
          "end": 975,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 972,
            "end": 973,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 974,
            "end": 975,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 978,
          "end": 979,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 992,
      "end": 1075,
      "body": {
        "type": "TSModuleBlock",
        "start": 1004,
        "end": 1075,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1010,
            "end": 1029,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1017,
              "end": 1029,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1023,
                  "end": 1028,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1023,
                    "end": 1024,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1027,
                    "end": 1028,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1034,
            "end": 1051,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1041,
              "end": 1051,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1045,
                  "end": 1050,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1045,
                    "end": 1046,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1049,
                    "end": 1050,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1056,
            "end": 1073,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1063,
              "end": 1073,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1067,
                  "end": 1072,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1067,
                    "end": 1068,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1071,
                    "end": 1072,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1002,
        "end": 1003,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 1076,
      "end": 1084,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1076,
        "end": 1083,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1076,
          "end": 1079,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1076,
            "end": 1077,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1078,
            "end": 1079,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1082,
          "end": 1083,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1095,
      "end": 1103,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1095,
        "end": 1102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1095,
          "end": 1098,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1095,
            "end": 1096,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1097,
            "end": 1098,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1101,
          "end": 1102,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1104,
      "end": 1112,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1104,
        "end": 1111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1104,
          "end": 1107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1104,
            "end": 1105,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1106,
            "end": 1107,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1110,
          "end": 1111,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1114,
      "end": 1155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1118,
          "end": 1154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1118,
            "end": 1154,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1120,
              "end": 1154,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1122,
                "end": 1154,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1124,
                    "end": 1152,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1134,
                        "end": 1143,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1135,
                          "end": 1143,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1137,
                            "end": 1143
                          }
                        }
                      }
                    ],
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1144,
                      "end": 1152,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1146,
                        "end": 1152
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1156,
      "end": 1174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1160,
          "end": 1173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1160,
            "end": 1161,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1164,
            "end": 1173,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1164,
              "end": 1166,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1167,
              "end": 1172,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1175,
      "end": 1193,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1175,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1175,
          "end": 1184,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1175,
            "end": 1177,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1178,
            "end": 1183,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 1187,
          "end": 1192,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1205,
      "end": 1267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1266,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1211,
              "end": 1266,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1213,
                "end": 1266,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1215,
                    "end": 1244,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1225,
                        "end": 1234,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1226,
                          "end": 1234,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1228,
                            "end": 1234
                          }
                        }
                      }
                    ],
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1235,
                      "end": 1243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1237,
                        "end": 1243
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 1245,
                    "end": 1264,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1255,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1247,
                          "end": 1255,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1249,
                            "end": 1255
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1256,
                      "end": 1264,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1258,
                        "end": 1264
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1268,
      "end": 1282,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1268,
        "end": 1281,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1268,
          "end": 1273,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1268,
            "end": 1270,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1271,
            "end": 1272,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 1276,
          "end": 1281,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1293,
      "end": 1311,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1293,
        "end": 1310,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1293,
          "end": 1302,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1293,
            "end": 1295,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1296,
            "end": 1301,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 1305,
          "end": 1310,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
