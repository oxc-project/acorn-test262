__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 661,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 110,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 88,
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 88,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 63,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 72,
                  "end": 82,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 75,
                      "end": 81
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSExportAssignment",
            "start": 93,
            "end": 108,
            "expression": {
              "type": "Identifier",
              "start": 102,
              "end": 107,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 133,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 133,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 120,
                "end": 133,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 127,
                  "end": 132,
                  "literal": {
                    "type": "Literal",
                    "start": 127,
                    "end": 132,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                "options": null,
                "qualifier": null,
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 136,
            "end": 150,
            "properties": [
              {
                "type": "Property",
                "start": 138,
                "end": 142,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 141,
                  "end": 142,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 144,
                "end": 148,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 147,
                  "end": 148,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 153,
      "end": 466,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 466,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 181,
            "end": 280,
            "body": {
              "type": "TSModuleBlock",
              "start": 195,
              "end": 280,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 205,
                  "end": 274,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 217,
                    "end": 274,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 231,
                        "end": 241,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
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
                          "start": 232,
                          "end": 240,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 234,
                            "end": 240
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 254,
                        "end": 264,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
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
                          "start": 255,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 257,
                            "end": 263
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 286,
            "end": 385,
            "body": {
              "type": "TSModuleBlock",
              "start": 300,
              "end": 385,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 310,
                  "end": 379,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 322,
                    "end": 379,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 336,
                        "end": 346,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 337,
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
                          "start": 337,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 339,
                            "end": 345
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 359,
                        "end": 369,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 360,
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
                          "start": 360,
                          "end": 368,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 362,
                            "end": 368
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 320,
                    "end": 321,
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "ClassDeclaration",
            "start": 391,
            "end": 464,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 401,
              "end": 464,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 411,
                  "end": 423,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 415,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 417,
                      "end": 422,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 417,
                        "end": 422,
                        "left": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 420,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 422,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 432,
                  "end": 458,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 443,
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
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 443,
                    "end": 458,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 444,
                        "end": 456,
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 449,
                          "end": 456,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 451,
                            "end": 456,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 451,
                              "end": 456,
                              "left": {
                                "type": "Identifier",
                                "start": 451,
                                "end": 454,
                                "decorators": [],
                                "name": "Baz",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 455,
                                "end": 456,
                                "decorators": [],
                                "name": "J",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
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
              "start": 397,
              "end": 400,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 168,
        "end": 174,
        "raw": "\"foo2\"",
        "value": "foo2"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 495,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 495,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 475,
                "end": 495,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 482,
                  "end": 488,
                  "literal": {
                    "type": "Literal",
                    "start": 482,
                    "end": 488,
                    "raw": "\"foo2\"",
                    "value": "foo2"
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "TSQualifiedName",
                  "start": 490,
                  "end": 495,
                  "left": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 493,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 498,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 500,
                "end": 505,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 501,
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
                  "start": 503,
                  "end": 505,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 507,
                "end": 511,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
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
                  "start": 510,
                  "end": 511,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 516,
      "end": 607,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 527,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 533,
            "end": 573,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 537,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 572,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 539,
                "end": 572,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 540,
                    "end": 550,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
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
                      "start": 541,
                      "end": 549,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 543,
                        "end": 549
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 551,
                    "end": 561,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
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
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 562,
                    "end": 571,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 563,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 563,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSObjectKeyword",
                        "start": 565,
                        "end": 571
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 605,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 589,
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
              "start": 589,
              "end": 605,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 603,
                "end": 605,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 590,
                  "end": 601,
                  "decorators": [],
                  "name": "input",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 601,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 598,
                      "end": 601
                    }
                  }
                }
              ],
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
        "start": 522,
        "end": 526,
        "decorators": [],
        "name": "Bar2",
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
      "start": 609,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 660,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 640,
            "decorators": [],
            "name": "shim",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 619,
                "end": 640,
                "exprName": {
                  "type": "TSImportType",
                  "start": 626,
                  "end": 640,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 633,
                    "end": 639,
                    "literal": {
                      "type": "Literal",
                      "start": 633,
                      "end": 639,
                      "raw": "\"foo2\"",
                      "value": "foo2"
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 643,
            "end": 660,
            "properties": [
              {
                "type": "Property",
                "start": 649,
                "end": 658,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 652,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 658,
                  "decorators": [],
                  "name": "Bar2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
