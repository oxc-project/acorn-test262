__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 878,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 43,
        "name": "StateMachine",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 76,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "name": "onDone",
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
              "start": 57,
              "end": 73,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 59,
                "end": 73,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 60,
                    "end": 64,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
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
                  "start": 66,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 69,
                    "end": 73
                  }
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 108,
        "name": "createMachine",
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
          "start": 112,
          "end": 196,
          "name": "implementations",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 129,
              "end": 196,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 194,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 141,
                    "name": "services",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 143,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 149,
                        "name": "Record",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 149,
                        "end": 193,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          {
                            "type": "TSFunctionType",
                            "start": 158,
                            "end": 192,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 161,
                              "end": 192,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 164,
                                "end": 192,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 164,
                                    "end": 174,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 164,
                                      "end": 171,
                                      "name": "Promise",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 171,
                                      "end": 174,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 172,
                                          "end": 173,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 172,
                                            "end": 173,
                                            "name": "T",
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
                                    "start": 177,
                                    "end": 192,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 177,
                                      "end": 189,
                                      "name": "StateMachine",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 189,
                                      "end": 192,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 190,
                                          "end": 191,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 190,
                                            "end": 191,
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
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
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
        "start": 108,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 197,
        "end": 203,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 381,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 380,
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 219,
          "name": "createMachine",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 239,
            "end": 379,
            "properties": [
              {
                "type": "Property",
                "start": 243,
                "end": 376,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 251,
                  "name": "services",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 253,
                  "end": 376,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 259,
                      "end": 303,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 263,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 265,
                        "end": 303,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "CallExpression",
                          "start": 277,
                          "end": 303,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 277,
                            "end": 291,
                            "object": {
                              "type": "Identifier",
                              "start": 277,
                              "end": 284,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 291,
                              "name": "reject",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 292,
                              "end": 302,
                              "value": "some err",
                              "raw": "\"some err\""
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 309,
                      "end": 371,
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 320,
                        "name": "test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 320,
                        "end": 371,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": true,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 323,
                          "end": 371,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 331,
                              "end": 365,
                              "argument": {
                                "type": "CallExpression",
                                "start": 338,
                                "end": 364,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 338,
                                  "end": 352,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 338,
                                    "end": 345,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 346,
                                    "end": 352,
                                    "name": "reject",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 353,
                                    "end": 363,
                                    "value": "some err",
                                    "raw": "\"some err\""
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "declare": false,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 219,
          "end": 238,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 220,
              "end": 237,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 222,
                  "end": 235,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 227,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 383,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "name": "fn1",
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
        "start": 466,
        "end": 517,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 470,
            "end": 515,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 477,
              "end": 515,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 489,
                "end": 515,
                "callee": {
                  "type": "MemberExpression",
                  "start": 489,
                  "end": 503,
                  "object": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 496,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 503,
                    "name": "reject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 504,
                    "end": 514,
                    "value": "some err",
                    "raw": "'some err'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 397,
        "end": 465,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 399,
          "end": 465,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 465,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 405,
              "end": 465,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 405,
                  "end": 431,
                  "typeName": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 412,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 412,
                    "end": 431,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 413,
                        "end": 430,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 415,
                            "end": 428,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 415,
                              "end": 420,
                              "name": "count",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 420,
                              "end": 428,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 422,
                                "end": 428
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 434,
                  "end": 465,
                  "typeName": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 446,
                    "name": "StateMachine",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 446,
                    "end": 465,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 447,
                        "end": 464,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 449,
                            "end": 462,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 454,
                              "name": "count",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 454,
                              "end": 462,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 456,
                                "end": 462
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 560,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 581,
        "name": "load",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 583,
        "end": 601,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 585,
          "end": 601,
          "typeName": {
            "type": "Identifier",
            "start": 585,
            "end": 592,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 592,
            "end": 601,
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 593,
                "end": 600
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 604,
      "end": 656,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 621,
        "name": "LoadCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 624,
        "end": 655,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 627,
          "end": 655,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 630,
            "end": 655,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 630,
                "end": 646,
                "typeName": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 637,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 637,
                  "end": 646,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 638,
                      "end": 645
                    }
                  ]
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 721,
      "end": 779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 778,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 744,
            "name": "cb1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 730,
              "end": 744,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 732,
                "end": 744,
                "typeName": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 744,
                  "name": "LoadCallback",
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
            "type": "ArrowFunctionExpression",
            "start": 747,
            "end": 778,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 759,
              "end": 778,
              "callee": {
                "type": "MemberExpression",
                "start": 759,
                "end": 770,
                "object": {
                  "type": "CallExpression",
                  "start": 759,
                  "end": 765,
                  "callee": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 763,
                    "name": "load",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 770,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 771,
                  "end": 777,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 771,
                      "end": 772,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 776,
                    "end": 777,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
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
    {
      "type": "VariableDeclaration",
      "start": 780,
      "end": 825,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 824,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 803,
            "name": "cb2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 789,
              "end": 803,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 791,
                "end": 803,
                "typeName": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 803,
                  "name": "LoadCallback",
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
            "type": "ArrowFunctionExpression",
            "start": 806,
            "end": 824,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 818,
              "end": 824,
              "callee": {
                "type": "Identifier",
                "start": 818,
                "end": 822,
                "name": "load",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
    {
      "type": "VariableDeclaration",
      "start": 826,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 832,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 849,
            "name": "cb3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 835,
              "end": 849,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 837,
                "end": 849,
                "typeName": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 849,
                  "name": "LoadCallback",
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
            "type": "ArrowFunctionExpression",
            "start": 852,
            "end": 877,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 858,
              "end": 877,
              "callee": {
                "type": "MemberExpression",
                "start": 858,
                "end": 869,
                "object": {
                  "type": "CallExpression",
                  "start": 858,
                  "end": 864,
                  "callee": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 862,
                    "name": "load",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 869,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 870,
                  "end": 876,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 870,
                      "end": 871,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 876,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
