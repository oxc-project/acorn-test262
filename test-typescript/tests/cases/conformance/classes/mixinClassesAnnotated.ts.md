__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1306,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
        "start": 22,
        "end": 46,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 26,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 40,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 35,
                "end": 40,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 46,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 46,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 78,
                  "end": 94,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 94,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 96,
                  "end": 112,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 112,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 116,
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
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 142,
        "end": 146,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 164,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 233,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 174,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 185,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 187,
                  "end": 203,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 203,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 233,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 227,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 226,
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 221,
                          "end": 222,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
      "type": "TSInterfaceDeclaration",
      "start": 237,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 256,
        "name": "Printable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 257,
        "end": 279,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 263,
            "end": 277,
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 268,
              "name": "print",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 276,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 272,
                "end": 276
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 296,
            "name": "Printable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 299,
            "end": 545,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 329,
                "end": 342,
                "name": "superClass",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 339,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
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
              "type": "ClassExpression",
              "start": 401,
              "end": 545,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 415,
                "end": 425,
                "name": "superClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 426,
                "end": 545,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 436,
                    "end": 461,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 450,
                      "name": "message",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 453,
                      "end": 460,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 470,
                    "end": 539,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 475,
                      "name": "print",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 475,
                      "end": 539,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 478,
                        "end": 539,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 492,
                            "end": 529,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 498,
                                "end": 528,
                                "id": {
                                  "type": "Identifier",
                                  "start": 498,
                                  "end": 504,
                                  "name": "output",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "start": 507,
                                  "end": 528,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 507,
                                    "end": 519,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 507,
                                      "end": 513,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 507,
                                        "end": 511
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 512,
                                        "end": 513,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "start": 516,
                                      "end": 519,
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 522,
                                    "end": 528,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 522,
                                      "end": 526
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 527,
                                      "end": 528,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 299,
              "end": 328,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 300,
                  "end": 327,
                  "name": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 301,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 310,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 321,
                      "name": "Constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 321,
                      "end": 327,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 322,
                          "end": 326,
                          "typeName": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 326,
                            "name": "Base",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 393,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 345,
                "end": 393,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 356,
                      "name": "Constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 356,
                      "end": 367,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 357,
                          "end": 366,
                          "typeName": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 366,
                            "name": "Printable",
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
                    "type": "TSTypeLiteral",
                    "start": 370,
                    "end": 389,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 372,
                        "end": 387,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 379,
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 379,
                          "end": 387,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 381,
                            "end": 387
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 392,
                    "end": 393,
                    "typeName": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 393,
                      "name": "T",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 547,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 563,
        "name": "Tagged",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 564,
        "end": 585,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 570,
            "end": 583,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "name": "_tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 587,
      "end": 857,
      "id": {
        "type": "Identifier",
        "start": 596,
        "end": 602,
        "name": "Tagged",
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
          "start": 630,
          "end": 643,
          "name": "superClass",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 643,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 643,
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 643,
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
        "start": 670,
        "end": 857,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 676,
            "end": 841,
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 692,
              "end": 702,
              "name": "superClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 703,
              "end": 841,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 713,
                  "end": 726,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 717,
                    "name": "_tag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 717,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 735,
                  "end": 835,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 746,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 746,
                    "end": 835,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 747,
                        "end": 761,
                        "argument": {
                          "type": "Identifier",
                          "start": 750,
                          "end": 754,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 754,
                          "end": 761,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 756,
                            "end": 761,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 756,
                              "end": 759
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 763,
                      "end": 835,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 777,
                          "end": 792,
                          "expression": {
                            "type": "CallExpression",
                            "start": 777,
                            "end": 791,
                            "callee": {
                              "type": "Super",
                              "start": 777,
                              "end": 782
                            },
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 783,
                                "end": 790,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 786,
                                  "end": 790,
                                  "name": "args",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 805,
                          "end": 825,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 805,
                            "end": 824,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 805,
                              "end": 814,
                              "object": {
                                "type": "ThisExpression",
                                "start": 805,
                                "end": 809
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 810,
                                "end": 814,
                                "name": "_tag",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 817,
                              "end": 824,
                              "value": "hello",
                              "raw": "\"hello\""
                            }
                          },
                          "directive": null
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
            "type": "ReturnStatement",
            "start": 846,
            "end": 855,
            "argument": {
              "type": "Identifier",
              "start": 853,
              "end": 854,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 602,
        "end": 629,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 603,
            "end": 628,
            "name": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 613,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 613,
                "end": 624,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 624,
                "end": 628,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 625,
                    "end": 627,
                    "members": []
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 644,
        "end": 669,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 646,
          "end": 669,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 646,
              "end": 665,
              "typeName": {
                "type": "Identifier",
                "start": 646,
                "end": 657,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 657,
                "end": 665,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 658,
                    "end": 664,
                    "typeName": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 664,
                      "name": "Tagged",
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
              "start": 668,
              "end": 669,
              "typeName": {
                "type": "Identifier",
                "start": 668,
                "end": 669,
                "name": "T",
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
    {
      "type": "VariableDeclaration",
      "start": 859,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 865,
          "end": 889,
          "id": {
            "type": "Identifier",
            "start": 865,
            "end": 871,
            "name": "Thing1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 874,
            "end": 889,
            "callee": {
              "type": "Identifier",
              "start": 874,
              "end": 880,
              "name": "Tagged",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 881,
                "end": 888,
                "name": "Derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 932,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 903,
            "name": "Thing2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 906,
            "end": 932,
            "callee": {
              "type": "Identifier",
              "start": 906,
              "end": 912,
              "name": "Tagged",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 913,
                "end": 931,
                "callee": {
                  "type": "Identifier",
                  "start": 913,
                  "end": 922,
                  "name": "Printable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 923,
                    "end": 930,
                    "name": "Derived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
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
      "start": 934,
      "end": 949,
      "expression": {
        "type": "MemberExpression",
        "start": 934,
        "end": 948,
        "object": {
          "type": "Identifier",
          "start": 934,
          "end": 940,
          "name": "Thing2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 941,
          "end": 948,
          "name": "message",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 951,
      "end": 1036,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 962,
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
        "start": 965,
        "end": 1036,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 971,
            "end": 1005,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 977,
                "end": 1004,
                "id": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 982,
                  "name": "thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 985,
                  "end": 1004,
                  "callee": {
                    "type": "Identifier",
                    "start": 989,
                    "end": 995,
                    "name": "Thing1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 996,
                      "end": 997,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 999,
                      "end": 1000,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 1002,
                      "end": 1003,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
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
            "start": 1010,
            "end": 1018,
            "expression": {
              "type": "MemberExpression",
              "start": 1010,
              "end": 1017,
              "object": {
                "type": "Identifier",
                "start": 1010,
                "end": 1015,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1016,
                "end": 1017,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1023,
            "end": 1034,
            "expression": {
              "type": "MemberExpression",
              "start": 1023,
              "end": 1033,
              "object": {
                "type": "Identifier",
                "start": 1023,
                "end": 1028,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1029,
                "end": 1033,
                "name": "_tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 1038,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1047,
        "end": 1049,
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
        "start": 1052,
        "end": 1142,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1058,
            "end": 1092,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1064,
                "end": 1091,
                "id": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1069,
                  "name": "thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1072,
                  "end": 1091,
                  "callee": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1082,
                    "name": "Thing2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1083,
                      "end": 1084,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 1086,
                      "end": 1087,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 1089,
                      "end": 1090,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
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
            "start": 1097,
            "end": 1105,
            "expression": {
              "type": "MemberExpression",
              "start": 1097,
              "end": 1104,
              "object": {
                "type": "Identifier",
                "start": 1097,
                "end": 1102,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1103,
                "end": 1104,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1110,
            "end": 1121,
            "expression": {
              "type": "MemberExpression",
              "start": 1110,
              "end": 1120,
              "object": {
                "type": "Identifier",
                "start": 1110,
                "end": 1115,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1116,
                "end": 1120,
                "name": "_tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1126,
            "end": 1140,
            "expression": {
              "type": "CallExpression",
              "start": 1126,
              "end": 1139,
              "callee": {
                "type": "MemberExpression",
                "start": 1126,
                "end": 1137,
                "object": {
                  "type": "Identifier",
                  "start": 1126,
                  "end": 1131,
                  "name": "thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1137,
                  "name": "print",
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
      "type": "ClassDeclaration",
      "start": 1144,
      "end": 1305,
      "id": {
        "type": "Identifier",
        "start": 1150,
        "end": 1156,
        "name": "Thing3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1165,
        "end": 1171,
        "name": "Thing2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1172,
        "end": 1305,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1178,
            "end": 1262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1189,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1189,
              "end": 1262,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1201,
                  "name": "tag",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1193,
                    "end": 1201,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1195,
                      "end": 1201
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1203,
                "end": 1262,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1213,
                    "end": 1231,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1213,
                      "end": 1230,
                      "callee": {
                        "type": "Super",
                        "start": 1213,
                        "end": 1218
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1219,
                          "end": 1221,
                          "value": 10,
                          "raw": "10"
                        },
                        {
                          "type": "Literal",
                          "start": 1223,
                          "end": 1225,
                          "value": 20,
                          "raw": "20"
                        },
                        {
                          "type": "Literal",
                          "start": 1227,
                          "end": 1229,
                          "value": 30,
                          "raw": "30"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1240,
                    "end": 1256,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1240,
                      "end": 1255,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1240,
                        "end": 1249,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1240,
                          "end": 1244
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1245,
                          "end": 1249,
                          "name": "_tag",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1252,
                        "end": 1255,
                        "name": "tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 1267,
            "end": 1303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1271,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1271,
              "end": 1303,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1274,
                "end": 1303,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1284,
                    "end": 1297,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1284,
                      "end": 1296,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1284,
                        "end": 1294,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1284,
                          "end": 1288
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1289,
                          "end": 1294,
                          "name": "print",
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
