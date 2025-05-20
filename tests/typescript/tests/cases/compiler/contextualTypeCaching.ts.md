__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1033,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 155,
        "body": {
          "type": "TSInterfaceBody",
          "start": 48,
          "end": 155,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 86,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 62,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 64,
                  "end": 85,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 65,
                      "end": 76,
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 73,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 75,
                          "end": 76,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 76,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 91,
              "end": 153,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 123,
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 123,
                        "end": 146,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 125,
                          "end": 146,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 126,
                              "end": 137,
                              "decorators": [],
                              "name": "response",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 134,
                                "end": 137,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 136,
                                  "end": 137,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 136,
                                    "end": 137,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
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
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 44,
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 44,
          "end": 47,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 45,
              "end": 46,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
      "start": 157,
      "end": 230,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 164,
        "end": 230,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 181,
          "decorators": [],
          "name": "CustomEvents",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 184,
          "end": 229,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 190,
              "end": 206,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
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
                "start": 191,
                "end": 206,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 206,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 198,
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 211,
              "end": 227,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
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
                "start": 212,
                "end": 227,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 227,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 219,
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 232,
      "end": 321,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "emit",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 291,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 291,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 293,
          "end": 314,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 314,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 299,
              "end": 314,
              "indexType": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 311,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 311,
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 315,
        "end": 321,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 317,
          "end": 321
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 282,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 264,
              "end": 282,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 282,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 282,
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
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
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 419,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 418,
        "arguments": [
          {
            "type": "Literal",
            "start": 328,
            "end": 331,
            "raw": "'a'",
            "value": "a"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 349,
                  "end": 358,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 356,
                    "end": 358,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 364,
                "end": 414,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 370,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 372,
                  "end": 414,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 382,
                      "end": 407,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 396,
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 398,
                        "end": 407,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 405,
                          "end": 407,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 399,
                            "end": 400,
                            "decorators": [],
                            "name": "r",
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
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 327,
          "decorators": [],
          "name": "emit",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 476,
      "end": 523,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 501,
        "end": 523,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 521,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 512,
              "decorators": [],
              "name": "compile",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 512,
              "end": 521,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 514,
                "end": 520,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 516,
                  "end": 520
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 500,
        "decorators": [],
        "name": "MyCompiler",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 524,
      "end": 600,
      "body": {
        "type": "TSInterfaceBody",
        "start": 556,
        "end": 600,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 560,
            "end": 598,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 565,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 597,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 567,
                "end": 597,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 568,
                    "end": 588,
                    "decorators": [],
                    "name": "compiler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 576,
                      "end": 588,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 578,
                        "end": 588,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 588,
                          "decorators": [],
                          "name": "MyCompiler",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 555,
        "decorators": [],
        "name": "WebpackPluginInstance",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 601,
      "end": 679,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 627,
        "decorators": [],
        "name": "WebpackPluginFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 630,
        "end": 678,
        "params": [
          {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 647,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 637,
                "end": 647,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 647,
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 649,
            "end": 669,
            "decorators": [],
            "name": "compiler",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 669,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 659,
                "end": 669,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 669,
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 680,
      "end": 771,
      "body": {
        "type": "TSInterfaceBody",
        "start": 703,
        "end": 771,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 707,
            "end": 769,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 707,
              "end": 716,
              "decorators": [],
              "name": "minimizer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 741,
                        "decorators": [],
                        "name": "WebpackPluginInstance",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 744,
                      "end": 765,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 765,
                        "decorators": [],
                        "name": "WebpackPluginFunction",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 702,
        "decorators": [],
        "name": "Optimization",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 865,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 787,
              "end": 865,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 789,
                "end": 865,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 815,
                    "end": 821,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 818,
                      "end": 821,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 820,
                        "end": 821,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 821,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 825,
                    "end": 832,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 829,
                      "end": 832,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 831,
                        "end": 832,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 831,
                          "end": 832,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 836,
                    "end": 855,
                    "decorators": [],
                    "name": "factory",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 843,
                      "end": 855,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 845,
                        "end": 855,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 848,
                          "end": 855,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 851,
                            "end": 855,
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 853,
                              "end": 854,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 853,
                                "end": 854,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 851,
                              "end": 852,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 851,
                                "end": 852,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 789,
                  "end": 811,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 790,
                      "end": 791,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 791,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 793,
                      "end": 810,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 803,
                        "end": 810,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 809,
                          "end": 810,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 809,
                            "end": 810,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 793,
                        "end": 794,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 867,
      "end": 1033,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 874,
        "end": 1033,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 880,
            "end": 1032,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 880,
              "end": 905,
              "decorators": [],
              "name": "applyOptimizationDefaults",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 908,
              "end": 1032,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 940,
                "end": 1032,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 944,
                    "end": 1030,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 944,
                      "end": 1029,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 946,
                          "end": 958,
                          "decorators": [],
                          "name": "optimization",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 960,
                          "end": 971,
                          "raw": "\"minimizer\"",
                          "value": "minimizer"
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 973,
                          "end": 1028,
                          "async": false,
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
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 993,
                                      "end": 998,
                                      "decorators": [],
                                      "name": "apply",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 1000,
                                      "end": 1016,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 1014,
                                        "end": 1016,
                                        "body": []
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 1001,
                                          "end": 1009,
                                          "decorators": [],
                                          "name": "compiler",
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
                            ]
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 909,
                  "end": 935,
                  "decorators": [],
                  "name": "optimization",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 921,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 923,
                      "end": 935,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 923,
                        "end": 935,
                        "decorators": [],
                        "name": "Optimization",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
