__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 604,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 76,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 24,
              "decorators": [],
              "name": "simpleExample",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ClassExpression",
              "start": 27,
              "end": 76,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 76,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 39,
                    "end": 59,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 53,
                      "decorators": [],
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 53,
                      "end": 59,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 56,
                        "end": 59,
                        "body": []
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
                    "start": 64,
                    "end": 74,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 68,
                      "end": 74,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 71,
                        "end": 74,
                        "body": []
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
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 191,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 191,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 105,
              "decorators": [],
              "name": "circularReference",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ClassExpression",
              "start": 108,
              "end": 191,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 116,
                "end": 191,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 122,
                    "end": 158,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 136,
                      "decorators": [],
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 136,
                      "end": 158,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 146,
                        "end": 158,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 148,
                            "end": 156,
                            "argument": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 156,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                          "start": 137,
                          "end": 141,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 138,
                            "end": 141,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 140,
                              "end": 141,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 140,
                                "end": 141,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 163,
                    "end": 189,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 167,
                      "end": 189,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 177,
                        "end": 189,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 179,
                            "end": 187,
                            "argument": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                          "start": 168,
                          "end": 172,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 172,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 171,
                              "end": 172,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 172,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 173,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 175,
                          "end": 176,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 214,
      "end": 277,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 221,
        "end": 277,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 235,
          "end": 277,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 241,
              "end": 256,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
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
                "start": 244,
                "end": 256,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 253,
                  "end": 256,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 252,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 248,
                    "end": 252
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 261,
              "end": 275,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 265,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 266,
                "end": 274,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 268,
                  "end": 274
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
          "start": 227,
          "end": 234,
          "decorators": [],
          "name": "FooItem",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 333,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 286,
        "end": 333,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 291,
          "end": 302,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 308,
          "end": 332,
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "start": 312,
              "end": 326,
              "argument": {
                "type": "Identifier",
                "start": 315,
                "end": 319,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 319,
                "end": 326,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 321,
                  "end": 326,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 321,
                    "end": 324
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 328,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 331,
              "end": 332,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 302,
          "end": 305,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 303,
              "end": 304,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 334,
      "end": 501,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 341,
        "end": 501,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 400,
          "end": 501,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 406,
              "end": 499,
              "argument": {
                "type": "ClassExpression",
                "start": 413,
                "end": 499,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 432,
                  "end": 499,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 442,
                      "end": 468,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 456,
                        "decorators": [],
                        "name": "getTags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 456,
                        "end": 468,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 465,
                          "end": 468,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 458,
                          "end": 464,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 460,
                            "end": 464
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 477,
                      "end": 493,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 481,
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 481,
                        "end": 493,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 490,
                          "end": 493,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 483,
                          "end": 489,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 485,
                            "end": 489
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 431,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 350,
          "end": 358,
          "decorators": [],
          "name": "WithTags",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 391,
            "end": 398,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 397,
                "end": 398,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 358,
          "end": 390,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 359,
              "end": 389,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 389,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 380,
                  "end": 389,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 381,
                      "end": 388,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 388,
                        "decorators": [],
                        "name": "FooItem",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 380,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 503,
      "end": 549,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 510,
        "end": 549,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 547,
          "end": 549,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 516,
          "end": 520,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 529,
          "end": 546,
          "arguments": [
            {
              "type": "Identifier",
              "start": 538,
              "end": 545,
              "decorators": [],
              "name": "FooItem",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 529,
            "end": 537,
            "decorators": [],
            "name": "WithTags",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 561,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 564,
            "end": 574,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 568,
              "end": 572,
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 591,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 591,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 577,
          "end": 589,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 577,
            "end": 581,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 582,
            "end": 589,
            "decorators": [],
            "name": "getTags",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 592,
      "end": 604,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 592,
        "end": 603,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 592,
          "end": 601,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 592,
            "end": 596,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 597,
            "end": 601,
            "decorators": [],
            "name": "tags",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
