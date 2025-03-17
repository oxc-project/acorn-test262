__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1034,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 155,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 44,
          "name": "Event",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 44,
          "end": 47,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 45,
              "end": 46,
              "name": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 48,
          "end": 155,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 86,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 62,
                "name": "callback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 64,
                  "end": 85,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 65,
                      "end": 76,
                      "name": "response",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 73,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 75,
                          "end": 76,
                          "typeName": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 76,
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 81,
                      "end": 85
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 91,
              "end": 153,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 97,
                "end": 153,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 99,
                  "end": 153,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 109,
                      "end": 147,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 123,
                        "name": "nestedCallback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 123,
                        "end": 146,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 125,
                          "end": 146,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 126,
                              "end": 137,
                              "name": "response",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 134,
                                "end": 137,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 136,
                                  "end": 137,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 136,
                                    "end": 137,
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
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 139,
                            "end": 146,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 142,
                              "end": 146
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
      "start": 157,
      "end": 230,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 164,
        "end": 230,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 181,
          "name": "CustomEvents",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 184,
          "end": 229,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 190,
              "end": 206,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 206,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 206,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 198,
                    "name": "Event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 198,
                    "end": 206,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 199,
                        "end": 205
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 211,
              "end": 227,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 227,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 219,
                    "name": "Event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 219,
                    "end": 227,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      }
                    ]
                  }
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
      "type": "TSDeclareFunction",
      "start": 232,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "emit",
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
          "start": 284,
          "end": 291,
          "name": "type",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 291,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
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
        },
        {
          "type": "Identifier",
          "start": 293,
          "end": 314,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 314,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 299,
              "end": 314,
              "objectType": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 311,
                  "name": "CustomEvents",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 282,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 264,
              "end": 282,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 282,
                  "name": "CustomEvents",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        "start": 315,
        "end": 321,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 317,
          "end": 321
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 419,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 418,
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 327,
          "name": "emit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 328,
            "end": 331,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "ObjectExpression",
            "start": 333,
            "end": 417,
            "properties": [
              {
                "type": "Property",
                "start": 339,
                "end": 358,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 349,
                  "end": 358,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 356,
                    "end": 358,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 364,
                "end": 414,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 370,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 372,
                  "end": 414,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 382,
                      "end": 407,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 396,
                        "name": "nestedCallback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 398,
                        "end": 407,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 399,
                            "end": 400,
                            "name": "r",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 405,
                          "end": 407,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 476,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 500,
        "name": "MyCompiler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 501,
        "end": 523,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 521,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 512,
              "name": "compile",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 512,
              "end": 521,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 514,
                "end": 520,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 516,
                  "end": 520
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 524,
      "end": 600,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 555,
        "name": "WebpackPluginInstance",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 556,
        "end": 600,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 560,
            "end": 598,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 565,
              "name": "apply",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 597,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 567,
                "end": 597,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 568,
                    "end": 588,
                    "name": "compiler",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 576,
                      "end": 588,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 578,
                        "end": 588,
                        "typeName": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 588,
                          "name": "MyCompiler",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 590,
                  "end": 597,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 593,
                    "end": 597
                  }
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 601,
      "end": 679,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 627,
        "name": "WebpackPluginFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 630,
        "end": 678,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "name": "this",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 647,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 637,
                "end": 647,
                "typeName": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 647,
                  "name": "MyCompiler",
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
          {
            "type": "Identifier",
            "start": 649,
            "end": 669,
            "name": "compiler",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 659,
                "end": 669,
                "typeName": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 669,
                  "name": "MyCompiler",
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 671,
          "end": 678,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 674,
            "end": 678
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 680,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 702,
        "name": "Optimization",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 703,
        "end": 771,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 707,
            "end": 769,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 707,
              "end": 716,
              "name": "minimizer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 768,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 719,
                "end": 768,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 720,
                  "end": 765,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 720,
                      "end": 741,
                      "typeName": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 741,
                        "name": "WebpackPluginInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 744,
                      "end": 765,
                      "typeName": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 765,
                        "name": "WebpackPluginFunction",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 772,
      "end": 866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 865,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 865,
            "name": "A",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 787,
              "end": 865,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 789,
                "end": 865,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 789,
                  "end": 811,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 790,
                      "end": 791,
                      "name": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 791,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 793,
                      "end": 810,
                      "name": {
                        "type": "Identifier",
                        "start": 793,
                        "end": 794,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 803,
                        "end": 810,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 809,
                          "end": 810,
                          "typeName": {
                            "type": "Identifier",
                            "start": 809,
                            "end": 810,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
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
                    "start": 815,
                    "end": 821,
                    "name": "obj",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 818,
                      "end": 821,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 820,
                        "end": 821,
                        "typeName": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 821,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 825,
                    "end": 832,
                    "name": "prop",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 829,
                      "end": 832,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 831,
                        "end": 832,
                        "typeName": {
                          "type": "Identifier",
                          "start": 831,
                          "end": 832,
                          "name": "P",
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
                  {
                    "type": "Identifier",
                    "start": 836,
                    "end": 855,
                    "name": "factory",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 843,
                      "end": 855,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 845,
                        "end": 855,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 848,
                          "end": 855,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 851,
                            "end": 855,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 851,
                              "end": 852,
                              "typeName": {
                                "type": "Identifier",
                                "start": 851,
                                "end": 852,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 853,
                              "end": 854,
                              "typeName": {
                                "type": "Identifier",
                                "start": 853,
                                "end": 854,
                                "name": "P",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 858,
                  "end": 865,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 861,
                    "end": 865
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 867,
      "end": 1033,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 874,
        "end": 1033,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 880,
            "end": 1032,
            "id": {
              "type": "Identifier",
              "start": 880,
              "end": 905,
              "name": "applyOptimizationDefaults",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 908,
              "end": 1032,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 909,
                  "end": 935,
                  "name": "optimization",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 921,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 923,
                      "end": 935,
                      "typeName": {
                        "type": "Identifier",
                        "start": 923,
                        "end": 935,
                        "name": "Optimization",
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
                "start": 940,
                "end": 1032,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 944,
                    "end": 1030,
                    "expression": {
                      "type": "CallExpression",
                      "start": 944,
                      "end": 1029,
                      "callee": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 946,
                          "end": 958,
                          "name": "optimization",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 960,
                          "end": 971,
                          "value": "minimizer",
                          "raw": "\"minimizer\""
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 973,
                          "end": 1028,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ArrayExpression",
                            "start": 979,
                            "end": 1028,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 985,
                                "end": 1023,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 993,
                                    "end": 1016,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 993,
                                      "end": 998,
                                      "name": "apply",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 1000,
                                      "end": 1016,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 1001,
                                          "end": 1009,
                                          "name": "compiler",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 1014,
                                        "end": 1016,
                                        "body": []
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
