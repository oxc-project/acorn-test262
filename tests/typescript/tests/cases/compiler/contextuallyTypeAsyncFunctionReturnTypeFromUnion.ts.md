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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 43,
        "decorators": [],
        "name": "StateMachine",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 76,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "decorators": [],
              "name": "onDone",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 108,
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
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
          "start": 112,
          "end": 196,
          "decorators": [],
          "name": "implementations",
          "optional": false,
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
                    "decorators": [],
                    "name": "services",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "Promise",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "StateMachine",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 197,
        "end": 203,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        }
      },
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
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
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 251,
                  "decorators": [],
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 263,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 265,
                        "end": 303,
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 291,
                              "decorators": [],
                              "name": "reject",
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
                              "start": 292,
                              "end": 302,
                              "value": "some err",
                              "raw": "\"some err\""
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 309,
                      "end": 371,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 320,
                        "decorators": [],
                        "name": "test2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 320,
                        "end": 371,
                        "id": null,
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 346,
                                    "end": 352,
                                    "decorators": [],
                                    "name": "reject",
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
                                    "start": 353,
                                    "end": 363,
                                    "value": "some err",
                                    "raw": "\"some err\""
                                  }
                                ],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "FunctionDeclaration",
      "start": 383,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "StateMachine",
                    "optional": false,
                    "typeAnnotation": null
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
                              "decorators": [],
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null
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
      },
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
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 503,
                    "decorators": [],
                    "name": "reject",
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
                    "start": 504,
                    "end": 514,
                    "value": "some err",
                    "raw": "'some err'"
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 560,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 581,
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 604,
      "end": 656,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 621,
        "decorators": [],
        "name": "LoadCallback",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 778,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 744,
            "decorators": [],
            "name": "cb1",
            "optional": false,
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
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 747,
            "end": 778,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 770,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 771,
                  "end": 777,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 771,
                      "end": 772,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 776,
                    "end": 777,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
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
      "type": "VariableDeclaration",
      "start": 780,
      "end": 825,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 824,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 803,
            "decorators": [],
            "name": "cb2",
            "optional": false,
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
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 806,
            "end": 824,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 818,
              "end": 824,
              "callee": {
                "type": "Identifier",
                "start": 818,
                "end": 822,
                "decorators": [],
                "name": "load",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "type": "VariableDeclaration",
      "start": 826,
      "end": 878,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 832,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 832,
            "end": 849,
            "decorators": [],
            "name": "cb3",
            "optional": false,
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
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 852,
            "end": 877,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 869,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 870,
                  "end": 876,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 870,
                      "end": 871,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 876,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
