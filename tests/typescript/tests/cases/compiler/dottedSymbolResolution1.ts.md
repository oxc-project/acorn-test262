__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 766,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 56,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 54,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "find",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 28,
                "end": 44,
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 53,
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 80,
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 151,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 92,
            "end": 119,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 93,
                "end": 109,
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 101,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 103,
                    "end": 109
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 118,
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 124,
            "end": 149,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 139,
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 139,
                      "decorators": [],
                      "name": "JQuery",
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
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 177,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 175,
                "body": []
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
      "type": "TSDeclareFunction",
      "start": 179,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 192,
        "decorators": [],
        "name": "each",
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
          "start": 193,
          "end": 211,
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 211,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 205,
              "end": 211
            }
          }
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 270,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 270,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 223,
              "end": 270,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 224,
                  "end": 241,
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 238,
                      "end": 241
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 243,
                  "end": 262,
                  "decorators": [],
                  "name": "valueOfElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 259,
                      "end": 262
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 264,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 267,
                  "end": 270
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 271,
        "end": 276,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 273,
          "end": 276
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 278,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 291,
        "decorators": [],
        "name": "each",
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
          "start": 292,
          "end": 310,
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 310,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 310,
                "decorators": [],
                "name": "JQuery",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 312,
          "end": 373,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 373,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 322,
              "end": 373,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 323,
                  "end": 343,
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 337,
                      "end": 343
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 345,
                  "end": 365,
                  "decorators": [],
                  "name": "valueOfElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 365,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 361,
                      "end": 365,
                      "typeName": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 365,
                        "decorators": [],
                        "name": "Base",
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
                "start": 367,
                "end": 373,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 370,
                  "end": 373
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 374,
        "end": 379,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 376,
          "end": 379
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 381,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 394,
        "decorators": [],
        "name": "each",
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
          "start": 395,
          "end": 410,
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 410,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 407,
              "end": 410
            }
          }
        },
        {
          "type": "Identifier",
          "start": 412,
          "end": 469,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 469,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 422,
              "end": 469,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 440,
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 435,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 437,
                      "end": 440
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 461,
                  "decorators": [],
                  "name": "valueOfElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 461,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 458,
                      "end": 461
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 463,
                "end": 469,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 466,
                  "end": 469
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 470,
        "end": 475,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 472,
          "end": 475
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 476,
        "end": 496,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 482,
            "end": 494,
            "argument": {
              "type": "Literal",
              "start": 489,
              "end": 493,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 498,
      "end": 766,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 521,
        "decorators": [],
        "name": "_setBarAndText",
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
        "start": 523,
        "end": 529,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 525,
          "end": 529
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 530,
        "end": 766,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 536,
            "end": 566,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 540,
                "end": 549,
                "id": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 549,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 541,
                    "end": 549,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 543,
                      "end": 549,
                      "typeName": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 549,
                        "decorators": [],
                        "name": "JQuery",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 551,
                "end": 566,
                "id": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 566,
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 552,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 554,
                      "end": 566,
                      "typeName": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 566,
                        "decorators": [],
                        "name": "JQueryStatic",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 571,
            "end": 764,
            "expression": {
              "type": "CallExpression",
              "start": 571,
              "end": 763,
              "callee": {
                "type": "Identifier",
                "start": 571,
                "end": 575,
                "decorators": [],
                "name": "each",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 576,
                  "end": 587,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 576,
                    "end": 582,
                    "object": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 577,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 582,
                      "decorators": [],
                      "name": "find",
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
                      "start": 583,
                      "end": 586,
                      "value": " ",
                      "raw": "\" \""
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "FunctionExpression",
                  "start": 589,
                  "end": 761,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 601,
                    "end": 761,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 611,
                        "end": 704,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 615,
                            "end": 636,
                            "id": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 628,
                              "decorators": [],
                              "name": "$this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 620,
                                "end": 628,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 622,
                                  "end": 628,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 622,
                                    "end": 628,
                                    "decorators": [],
                                    "name": "JQuery",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 631,
                              "end": 636,
                              "callee": {
                                "type": "Identifier",
                                "start": 631,
                                "end": 632,
                                "decorators": [],
                                "name": "$",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 633,
                                  "end": 635,
                                  "value": "",
                                  "raw": "''"
                                }
                              ],
                              "optional": false
                            },
                            "definite": false
                          },
                          {
                            "type": "VariableDeclarator",
                            "start": 650,
                            "end": 703,
                            "id": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 657,
                              "decorators": [],
                              "name": "thisBar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 660,
                              "end": 703,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 660,
                                "end": 670,
                                "object": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 665,
                                  "decorators": [],
                                  "name": "$this",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 666,
                                  "end": 670,
                                  "decorators": [],
                                  "name": "find",
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
                                  "start": 671,
                                  "end": 702,
                                  "value": ".fx-usagebars-calloutbar-this",
                                  "raw": "\".fx-usagebars-calloutbar-this\""
                                }
                              ],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
