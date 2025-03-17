__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 76,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 24,
              "name": "simpleExample",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ClassExpression",
              "start": 27,
              "end": 76,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 76,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 39,
                    "end": 59,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 53,
                      "name": "getTags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 53,
                      "end": 59,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 56,
                        "end": 59,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 64,
                    "end": 74,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "name": "tags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 68,
                      "end": 74,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 71,
                        "end": 74,
                        "body": []
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
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 191,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 105,
              "name": "circularReference",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ClassExpression",
              "start": 108,
              "end": 191,
              "id": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 116,
                "end": 191,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 122,
                    "end": 158,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 136,
                      "name": "getTags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 136,
                      "end": 158,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 137,
                          "end": 141,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 138,
                            "end": 141,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 140,
                              "end": 141,
                              "typeName": {
                                "type": "Identifier",
                                "start": 140,
                                "end": 141,
                                "name": "C",
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
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 163,
                    "end": 189,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "name": "tags",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 167,
                      "end": 189,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 168,
                          "end": 172,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 172,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 171,
                              "end": 172,
                              "typeName": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 172,
                                "name": "C",
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
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 173,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 175,
                          "end": 176,
                          "typeName": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
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
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 214,
      "end": 277,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 221,
        "end": 277,
        "id": {
          "type": "Identifier",
          "start": 227,
          "end": 234,
          "name": "FooItem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 235,
          "end": 277,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 241,
              "end": 256,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 244,
                "end": 256,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 253,
                  "end": 256,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 252,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 248,
                    "end": 252
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 261,
              "end": 275,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 265,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 333,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 286,
        "end": 333,
        "id": {
          "type": "Identifier",
          "start": 291,
          "end": 302,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
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
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 308,
          "end": 332,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 312,
              "end": 326,
              "argument": {
                "type": "Identifier",
                "start": 315,
                "end": 319,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 334,
      "end": 501,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 341,
        "end": 501,
        "id": {
          "type": "Identifier",
          "start": 350,
          "end": 358,
          "name": "WithTags",
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
            "start": 391,
            "end": 398,
            "name": "Base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 397,
                "end": 398,
                "typeName": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
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
                "id": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 431,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 432,
                  "end": 499,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 442,
                      "end": 468,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 456,
                        "name": "getTags",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 456,
                        "end": 468,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 465,
                          "end": 468,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 458,
                          "end": 464,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 460,
                            "end": 464
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
                      "start": 477,
                      "end": 493,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 481,
                        "name": "tags",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 481,
                        "end": 493,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 490,
                          "end": 493,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 483,
                          "end": 489,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 485,
                            "end": 489
                          }
                        }
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
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 358,
          "end": 390,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 359,
              "end": 389,
              "name": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 380,
                  "name": "Constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 380,
                  "end": 389,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 381,
                      "end": 388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 388,
                        "name": "FooItem",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 503,
      "end": 549,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 510,
        "end": 549,
        "id": {
          "type": "Identifier",
          "start": 516,
          "end": 520,
          "name": "Test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 529,
          "end": 546,
          "callee": {
            "type": "Identifier",
            "start": 529,
            "end": 537,
            "name": "WithTags",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 538,
              "end": 545,
              "name": "FooItem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 547,
          "end": 549,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 561,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 564,
            "end": 574,
            "callee": {
              "type": "Identifier",
              "start": 568,
              "end": 572,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 591,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 591,
        "callee": {
          "type": "MemberExpression",
          "start": 577,
          "end": 589,
          "object": {
            "type": "Identifier",
            "start": 577,
            "end": 581,
            "name": "Test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 582,
            "end": 589,
            "name": "getTags",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 592,
      "end": 604,
      "expression": {
        "type": "CallExpression",
        "start": 592,
        "end": 603,
        "callee": {
          "type": "MemberExpression",
          "start": 592,
          "end": 601,
          "object": {
            "type": "Identifier",
            "start": 592,
            "end": 596,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 597,
            "end": 601,
            "name": "tags",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
