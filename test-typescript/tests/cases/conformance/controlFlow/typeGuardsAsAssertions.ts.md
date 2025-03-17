__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 2579,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 38,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 38,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 82,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 48,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 61,
          "name": "Optional",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 61,
          "end": 64,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 62,
              "end": 63,
              "name": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "name": "a",
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
          "type": "TSUnionType",
          "start": 67,
          "end": 81,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 67,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 71,
                "name": "Some",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 71,
                "end": 74,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 73,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 77,
              "end": 81,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "name": "None",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
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
      "start": 84,
      "end": 132,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 91,
        "end": 132,
        "id": {
          "type": "Identifier",
          "start": 101,
          "end": 105,
          "name": "None",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 106,
          "end": 132,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 108,
              "end": 130,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 121,
                "name": "none",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 121,
                "end": 129,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 123,
                  "end": 129
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
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
      "start": 133,
      "end": 179,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 140,
        "end": 179,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 154,
          "name": "Some",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 154,
          "end": 157,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 155,
              "end": 156,
              "name": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "a",
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 158,
          "end": 179,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 160,
              "end": 177,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 173,
                "name": "some",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
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
      "start": 181,
      "end": 221,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 188,
        "end": 221,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 194,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 205,
              "name": "none",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 205,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 205,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "name": "None",
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
            "init": {
              "type": "ObjectExpression",
              "start": 208,
              "end": 220,
              "properties": [
                {
                  "type": "Property",
                  "start": 210,
                  "end": 218,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 214,
                    "name": "none",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 216,
                    "end": 218,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 318,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 230,
        "end": 318,
        "id": {
          "type": "Identifier",
          "start": 239,
          "end": 245,
          "name": "isSome",
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
            "start": 249,
            "end": 267,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 264,
                  "name": "Optional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 264,
                  "end": 267,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 287,
          "end": 318,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 293,
              "end": 316,
              "argument": {
                "type": "BinaryExpression",
                "start": 300,
                "end": 315,
                "left": {
                  "type": "Literal",
                  "start": 300,
                  "end": 306,
                  "value": "some",
                  "raw": "'some'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 315,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 245,
          "end": 248,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 246,
              "end": 247,
              "name": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "name": "a",
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 268,
          "end": 286,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 270,
            "end": 286,
            "parameterName": {
              "type": "Identifier",
              "start": 270,
              "end": 275,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 283,
                  "name": "Some",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 283,
                  "end": 286,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 284,
                      "end": 285,
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 337,
        "name": "someFrom",
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
          "start": 341,
          "end": 348,
          "name": "some",
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
                "name": "a",
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
        "start": 350,
        "end": 374,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 356,
            "end": 372,
            "argument": {
              "type": "ObjectExpression",
              "start": 363,
              "end": 371,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 369,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 369,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 369,
                    "name": "some",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 337,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "a",
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
      "type": "ExportNamedDeclaration",
      "start": 376,
      "end": 641,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 383,
        "end": 641,
        "id": {
          "type": "Identifier",
          "start": 392,
          "end": 394,
          "name": "fn",
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
            "start": 398,
            "end": 415,
            "name": "makeSome",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 415,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 408,
                "end": 415,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 415,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 423,
          "end": 641,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 429,
              "end": 460,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 433,
                  "end": 459,
                  "id": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 452,
                    "name": "result",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 439,
                      "end": 452,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 441,
                        "end": 452,
                        "typeName": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 449,
                          "name": "Optional",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 449,
                          "end": 452,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 450,
                              "end": 451,
                              "typeName": {
                                "type": "Identifier",
                                "start": 450,
                                "end": 451,
                                "name": "r",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 459,
                    "name": "none",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 465,
              "end": 472,
              "expression": {
                "type": "Identifier",
                "start": 465,
                "end": 471,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "WhileStatement",
              "start": 486,
              "end": 639,
              "test": {
                "type": "Identifier",
                "start": 493,
                "end": 497,
                "name": "cond",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 499,
                "end": 639,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 509,
                    "end": 516,
                    "expression": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 515,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 544,
                    "end": 605,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 544,
                      "end": 604,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 550,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 553,
                        "end": 604,
                        "callee": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 561,
                          "name": "someFrom",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ConditionalExpression",
                            "start": 562,
                            "end": 603,
                            "test": {
                              "type": "CallExpression",
                              "start": 562,
                              "end": 576,
                              "callee": {
                                "type": "Identifier",
                                "start": 562,
                                "end": 568,
                                "name": "isSome",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 569,
                                  "end": 575,
                                  "name": "result",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "consequent": {
                              "type": "MemberExpression",
                              "start": 579,
                              "end": 590,
                              "object": {
                                "type": "Identifier",
                                "start": 579,
                                "end": 585,
                                "name": "result",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 586,
                                "end": 590,
                                "name": "some",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "start": 593,
                              "end": 603,
                              "callee": {
                                "type": "Identifier",
                                "start": 593,
                                "end": 601,
                                "name": "makeSome",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 614,
                    "end": 621,
                    "expression": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 620,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 394,
          "end": 397,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 395,
              "end": 396,
              "name": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "name": "r",
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 416,
          "end": 422,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 418,
            "end": 422
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 643,
      "end": 875,
      "id": {
        "type": "Identifier",
        "start": 652,
        "end": 656,
        "name": "foo1",
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
        "start": 659,
        "end": 875,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 665,
            "end": 702,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 669,
                "end": 701,
                "id": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 697,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 670,
                    "end": 697,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 672,
                      "end": 697,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 672,
                          "end": 678
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 681,
                          "end": 687
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 690,
                          "end": 697
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 700,
                  "end": 701,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 707,
            "end": 709,
            "expression": {
              "type": "Identifier",
              "start": 707,
              "end": 708,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 725,
            "end": 866,
            "test": {
              "type": "Identifier",
              "start": 732,
              "end": 736,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 738,
              "end": 866,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 748,
                  "end": 750,
                  "expression": {
                    "type": "Identifier",
                    "start": 748,
                    "end": 749,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 792,
                  "end": 838,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 792,
                    "end": 837,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 792,
                      "end": 793,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "start": 796,
                      "end": 837,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 796,
                        "end": 817,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 796,
                          "end": 804,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 803,
                            "end": 804,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 809,
                          "end": 817,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 820,
                        "end": 829,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 820,
                          "end": 827,
                          "object": {
                            "type": "Identifier",
                            "start": 820,
                            "end": 821,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 822,
                            "end": 827,
                            "name": "slice",
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
                      "alternate": {
                        "type": "Literal",
                        "start": 832,
                        "end": 837,
                        "value": "abc",
                        "raw": "\"abc\""
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 847,
                  "end": 849,
                  "expression": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 848,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 871,
            "end": 873,
            "expression": {
              "type": "Identifier",
              "start": 871,
              "end": 872,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 877,
      "end": 1176,
      "id": {
        "type": "Identifier",
        "start": 886,
        "end": 890,
        "name": "foo2",
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
        "start": 893,
        "end": 1176,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 899,
            "end": 936,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 903,
                "end": 935,
                "id": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 931,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 904,
                    "end": 931,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 906,
                      "end": 931,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 915,
                          "end": 921
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 924,
                          "end": 931
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 934,
                  "end": 935,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 941,
            "end": 943,
            "expression": {
              "type": "Identifier",
              "start": 941,
              "end": 942,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 959,
            "end": 1167,
            "test": {
              "type": "Identifier",
              "start": 966,
              "end": 970,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 972,
              "end": 1167,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 982,
                  "end": 984,
                  "expression": {
                    "type": "Identifier",
                    "start": 982,
                    "end": 983,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1026,
                  "end": 1139,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1030,
                    "end": 1051,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1030,
                      "end": 1038,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1037,
                        "end": 1038,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1043,
                      "end": 1051,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1053,
                    "end": 1091,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1067,
                        "end": 1081,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1067,
                          "end": 1080,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1067,
                            "end": 1068,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 1071,
                            "end": 1080,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1071,
                              "end": 1078,
                              "object": {
                                "type": "Identifier",
                                "start": 1071,
                                "end": 1072,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1073,
                                "end": 1078,
                                "name": "slice",
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
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1105,
                    "end": 1139,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1119,
                        "end": 1129,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1119,
                          "end": 1128,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1120,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1123,
                            "end": 1128,
                            "value": "abc",
                            "raw": "\"abc\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1148,
                  "end": 1150,
                  "expression": {
                    "type": "Identifier",
                    "start": 1148,
                    "end": 1149,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1172,
            "end": 1174,
            "expression": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1208,
      "end": 1408,
      "id": {
        "type": "Identifier",
        "start": 1217,
        "end": 1219,
        "name": "f1",
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
        "start": 1222,
        "end": 1408,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1228,
            "end": 1275,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1232,
                "end": 1274,
                "id": {
                  "type": "Identifier",
                  "start": 1232,
                  "end": 1262,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1233,
                    "end": 1262,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1235,
                      "end": 1262,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1235,
                          "end": 1241
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1244,
                          "end": 1250
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1253,
                          "end": 1262
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1274,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1280,
            "end": 1282,
            "expression": {
              "type": "Identifier",
              "start": 1280,
              "end": 1281,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1301,
            "end": 1367,
            "test": {
              "type": "Identifier",
              "start": 1305,
              "end": 1306,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1308,
              "end": 1367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1318,
                  "end": 1320,
                  "expression": {
                    "type": "Identifier",
                    "start": 1318,
                    "end": 1319,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1372,
            "end": 1374,
            "expression": {
              "type": "Identifier",
              "start": 1372,
              "end": 1373,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1410,
      "end": 1612,
      "id": {
        "type": "Identifier",
        "start": 1419,
        "end": 1421,
        "name": "f2",
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
        "start": 1424,
        "end": 1612,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1430,
            "end": 1477,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1434,
                "end": 1476,
                "id": {
                  "type": "Identifier",
                  "start": 1434,
                  "end": 1464,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1435,
                    "end": 1464,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1437,
                      "end": 1464,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1437,
                          "end": 1443
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1446,
                          "end": 1452
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1455,
                          "end": 1464
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1476,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1482,
            "end": 1484,
            "expression": {
              "type": "Identifier",
              "start": 1482,
              "end": 1483,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1503,
            "end": 1580,
            "test": {
              "type": "BinaryExpression",
              "start": 1507,
              "end": 1528,
              "left": {
                "type": "UnaryExpression",
                "start": 1507,
                "end": 1515,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1515,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1520,
                "end": 1528,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1530,
              "end": 1580,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1540,
                  "end": 1542,
                  "expression": {
                    "type": "Identifier",
                    "start": 1540,
                    "end": 1541,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1585,
            "end": 1587,
            "expression": {
              "type": "Identifier",
              "start": 1585,
              "end": 1586,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1614,
      "end": 1788,
      "id": {
        "type": "Identifier",
        "start": 1623,
        "end": 1625,
        "name": "f3",
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
        "start": 1628,
        "end": 1788,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1634,
            "end": 1681,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1638,
                "end": 1680,
                "id": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1668,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1639,
                    "end": 1668,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1641,
                      "end": 1668,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1641,
                          "end": 1647
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1650,
                          "end": 1656
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1659,
                          "end": 1668
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1680,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1686,
            "end": 1688,
            "expression": {
              "type": "Identifier",
              "start": 1686,
              "end": 1687,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1707,
            "end": 1738,
            "test": {
              "type": "UnaryExpression",
              "start": 1711,
              "end": 1713,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1712,
                "end": 1713,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1715,
              "end": 1738,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1725,
                  "end": 1732,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1743,
            "end": 1745,
            "expression": {
              "type": "Identifier",
              "start": 1743,
              "end": 1744,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1790,
      "end": 1995,
      "id": {
        "type": "Identifier",
        "start": 1799,
        "end": 1801,
        "name": "f4",
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
        "start": 1804,
        "end": 1995,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1810,
            "end": 1857,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1814,
                "end": 1856,
                "id": {
                  "type": "Identifier",
                  "start": 1814,
                  "end": 1844,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1815,
                    "end": 1844,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1817,
                      "end": 1844,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1817,
                          "end": 1823
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1826,
                          "end": 1832
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1835,
                          "end": 1844
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1847,
                  "end": 1856,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1862,
            "end": 1864,
            "expression": {
              "type": "Identifier",
              "start": 1862,
              "end": 1863,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1883,
            "end": 1972,
            "test": {
              "type": "BinaryExpression",
              "start": 1887,
              "end": 1909,
              "left": {
                "type": "UnaryExpression",
                "start": 1887,
                "end": 1895,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1894,
                  "end": 1895,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1900,
                "end": 1909,
                "value": "boolean",
                "raw": "\"boolean\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1911,
              "end": 1972,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1921,
                  "end": 1923,
                  "expression": {
                    "type": "Identifier",
                    "start": 1921,
                    "end": 1922,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1977,
            "end": 1979,
            "expression": {
              "type": "Identifier",
              "start": 1977,
              "end": 1978,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1997,
      "end": 2214,
      "id": {
        "type": "Identifier",
        "start": 2006,
        "end": 2008,
        "name": "f5",
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
          "start": 2009,
          "end": 2027,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2010,
            "end": 2027,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2012,
              "end": 2027,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2012,
                  "end": 2018
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2021,
                  "end": 2027
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
        "start": 2029,
        "end": 2214,
        "body": [
          {
            "type": "IfStatement",
            "start": 2035,
            "end": 2185,
            "test": {
              "type": "LogicalExpression",
              "start": 2039,
              "end": 2085,
              "left": {
                "type": "BinaryExpression",
                "start": 2039,
                "end": 2060,
                "left": {
                  "type": "UnaryExpression",
                  "start": 2039,
                  "end": 2047,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 2046,
                    "end": 2047,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2052,
                  "end": 2060,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 2064,
                "end": 2085,
                "left": {
                  "type": "UnaryExpression",
                  "start": 2064,
                  "end": 2072,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 2071,
                    "end": 2072,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2077,
                  "end": 2085,
                  "value": "number",
                  "raw": "\"number\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2087,
              "end": 2137,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2097,
                  "end": 2099,
                  "expression": {
                    "type": "Identifier",
                    "start": 2097,
                    "end": 2098,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2147,
              "end": 2185,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2157,
                  "end": 2159,
                  "expression": {
                    "type": "Identifier",
                    "start": 2157,
                    "end": 2158,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2190,
            "end": 2192,
            "expression": {
              "type": "Identifier",
              "start": 2190,
              "end": 2191,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2216,
      "end": 2524,
      "id": {
        "type": "Identifier",
        "start": 2225,
        "end": 2227,
        "name": "f6",
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
        "start": 2230,
        "end": 2524,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2236,
            "end": 2269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2240,
                "end": 2268,
                "id": {
                  "type": "Identifier",
                  "start": 2240,
                  "end": 2268,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2241,
                    "end": 2268,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2243,
                      "end": 2268,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2243,
                          "end": 2249
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2252,
                          "end": 2261
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 2264,
                          "end": 2268
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2274,
            "end": 2285,
            "expression": {
              "type": "CallExpression",
              "start": 2274,
              "end": 2284,
              "callee": {
                "type": "MemberExpression",
                "start": 2274,
                "end": 2282,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2274,
                  "end": 2276,
                  "expression": {
                    "type": "Identifier",
                    "start": 2274,
                    "end": 2275,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2277,
                  "end": 2282,
                  "name": "slice",
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
            "start": 2290,
            "end": 2297,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2290,
              "end": 2296,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2290,
                "end": 2291,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2294,
                "end": 2296,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2302,
            "end": 2313,
            "expression": {
              "type": "CallExpression",
              "start": 2302,
              "end": 2312,
              "callee": {
                "type": "MemberExpression",
                "start": 2302,
                "end": 2310,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2302,
                  "end": 2304,
                  "expression": {
                    "type": "Identifier",
                    "start": 2302,
                    "end": 2303,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2305,
                  "end": 2310,
                  "name": "slice",
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
            "start": 2318,
            "end": 2332,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2318,
              "end": 2331,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2318,
                "end": 2319,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2322,
                "end": 2331,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2337,
            "end": 2348,
            "expression": {
              "type": "CallExpression",
              "start": 2337,
              "end": 2347,
              "callee": {
                "type": "MemberExpression",
                "start": 2337,
                "end": 2345,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2337,
                  "end": 2339,
                  "expression": {
                    "type": "Identifier",
                    "start": 2337,
                    "end": 2338,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2340,
                  "end": 2345,
                  "name": "slice",
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
            "start": 2353,
            "end": 2362,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2353,
              "end": 2361,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2353,
                "end": 2354,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2357,
                "end": 2361,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2367,
            "end": 2378,
            "expression": {
              "type": "CallExpression",
              "start": 2367,
              "end": 2377,
              "callee": {
                "type": "MemberExpression",
                "start": 2367,
                "end": 2375,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2367,
                  "end": 2369,
                  "expression": {
                    "type": "Identifier",
                    "start": 2367,
                    "end": 2368,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2370,
                  "end": 2375,
                  "name": "slice",
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
            "start": 2383,
            "end": 2415,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2383,
              "end": 2414,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2383,
                "end": 2384,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 2387,
                "end": 2414,
                "expression": {
                  "type": "Identifier",
                  "start": 2405,
                  "end": 2414,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2388,
                  "end": 2404,
                  "types": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2388,
                      "end": 2397
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2400,
                      "end": 2404
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2420,
            "end": 2431,
            "expression": {
              "type": "CallExpression",
              "start": 2420,
              "end": 2430,
              "callee": {
                "type": "MemberExpression",
                "start": 2420,
                "end": 2428,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2420,
                  "end": 2422,
                  "expression": {
                    "type": "Identifier",
                    "start": 2420,
                    "end": 2421,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2423,
                  "end": 2428,
                  "name": "slice",
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
            "start": 2436,
            "end": 2463,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2436,
              "end": 2462,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2436,
                "end": 2437,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 2440,
                "end": 2462,
                "expression": {
                  "type": "Literal",
                  "start": 2460,
                  "end": 2462,
                  "value": "",
                  "raw": "\"\""
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2441,
                  "end": 2459,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2441,
                      "end": 2447
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2450,
                      "end": 2459
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2468,
            "end": 2479,
            "expression": {
              "type": "CallExpression",
              "start": 2468,
              "end": 2478,
              "callee": {
                "type": "MemberExpression",
                "start": 2468,
                "end": 2476,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2468,
                  "end": 2470,
                  "expression": {
                    "type": "Identifier",
                    "start": 2468,
                    "end": 2469,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2471,
                  "end": 2476,
                  "name": "slice",
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
            "start": 2484,
            "end": 2506,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2484,
              "end": 2505,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2484,
                "end": 2485,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "TSTypeAssertion",
                "start": 2488,
                "end": 2505,
                "expression": {
                  "type": "Literal",
                  "start": 2503,
                  "end": 2505,
                  "value": "",
                  "raw": "\"\""
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 2489,
                  "end": 2502,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2489,
                      "end": 2495
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 2498,
                      "end": 2502
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2511,
            "end": 2522,
            "expression": {
              "type": "CallExpression",
              "start": 2511,
              "end": 2521,
              "callee": {
                "type": "MemberExpression",
                "start": 2511,
                "end": 2519,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2511,
                  "end": 2513,
                  "expression": {
                    "type": "Identifier",
                    "start": 2511,
                    "end": 2512,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2514,
                  "end": 2519,
                  "name": "slice",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2526,
      "end": 2578,
      "id": {
        "type": "Identifier",
        "start": 2535,
        "end": 2537,
        "name": "f7",
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
        "start": 2540,
        "end": 2578,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2546,
            "end": 2560,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2550,
                "end": 2559,
                "id": {
                  "type": "Identifier",
                  "start": 2550,
                  "end": 2559,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2551,
                    "end": 2559,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2553,
                      "end": 2559
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2565,
            "end": 2576,
            "expression": {
              "type": "CallExpression",
              "start": 2565,
              "end": 2575,
              "callee": {
                "type": "MemberExpression",
                "start": 2565,
                "end": 2573,
                "object": {
                  "type": "TSNonNullExpression",
                  "start": 2565,
                  "end": 2567,
                  "expression": {
                    "type": "Identifier",
                    "start": 2565,
                    "end": 2566,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 2568,
                  "end": 2573,
                  "name": "slice",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
