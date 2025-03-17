__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 1379,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 91,
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 70,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 70,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 70,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 89,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 147,
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 147,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 125,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 124,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 119,
                "end": 124,
                "literal": {
                  "type": "Literal",
                  "start": 119,
                  "end": 124,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 145,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 136,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 309,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 309,
        "body": [
          {
            "type": "IfStatement",
            "start": 190,
            "end": 307,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 217,
              "end": 307,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 227,
                  "end": 301,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 256,
                      "end": 291,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 284,
                          "end": 291,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 284,
                            "end": 290,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 284,
                              "end": 285,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 286,
                              "end": 290,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 261,
                        "end": 266,
                        "raw": "'foo'",
                        "value": "foo"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 234,
                    "end": 240,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 240,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 194,
              "end": 215,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 194,
                "end": 202,
                "argument": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 207,
                "end": 215,
                "raw": "'string'",
                "value": "string"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 182,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 182,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 164,
              "end": 182,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 167,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 167,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 170,
                  "end": 173,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 173,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 483,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 483,
        "body": [
          {
            "type": "IfStatement",
            "start": 364,
            "end": 481,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 391,
              "end": 481,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 401,
                  "end": 475,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 430,
                      "end": 465,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 458,
                          "end": 465,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 458,
                            "end": 464,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 458,
                              "end": 459,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 460,
                              "end": 464,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 435,
                        "end": 440,
                        "raw": "'foo'",
                        "value": "foo"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 408,
                    "end": 414,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 414,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 368,
              "end": 389,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 368,
                "end": 376,
                "argument": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 381,
                "end": 389,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 323,
          "end": 356,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 356,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 326,
              "end": 356,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 326,
                  "end": 329,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 329,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 332,
                  "end": 335,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 335,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 347,
                  "end": 356
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 657,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 527,
        "end": 657,
        "body": [
          {
            "type": "IfStatement",
            "start": 533,
            "end": 655,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 565,
              "end": 655,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 575,
                  "end": 649,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 604,
                      "end": 639,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 632,
                          "end": 639,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 632,
                            "end": 638,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 638,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 609,
                        "end": 614,
                        "raw": "'foo'",
                        "value": "foo"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 582,
                    "end": 588,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 588,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 537,
              "end": 563,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 542,
                "end": 563,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 542,
                  "end": 550,
                  "argument": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 555,
                  "end": 563,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 497,
          "end": 525,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 498,
            "end": 525,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 500,
              "end": 525,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 500,
                  "end": 503,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 503,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 509,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 509,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 512,
                  "end": 518
                },
                {
                  "type": "TSNullKeyword",
                  "start": 521,
                  "end": 525
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 659,
      "end": 840,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 840,
        "body": [
          {
            "type": "IfStatement",
            "start": 716,
            "end": 838,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 748,
              "end": 838,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 758,
                  "end": 832,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 787,
                      "end": 822,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 815,
                          "end": 822,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 815,
                            "end": 821,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 816,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 817,
                              "end": 821,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 792,
                        "end": 797,
                        "raw": "'foo'",
                        "value": "foo"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 765,
                    "end": 771,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 765,
                      "end": 766,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 771,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 720,
              "end": 746,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 725,
                "end": 746,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 725,
                  "end": 733,
                  "argument": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 738,
                  "end": 746,
                  "raw": "\"object\"",
                  "value": "object"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 670,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 671,
          "end": 708,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 672,
            "end": 708,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 674,
              "end": 708,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 674,
                  "end": 677,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 674,
                    "end": 677,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 680,
                  "end": 683,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 683,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 686,
                  "end": 692
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 695,
                  "end": 701
                },
                {
                  "type": "TSNullKeyword",
                  "start": 704,
                  "end": 708
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 864,
      "end": 949,
      "body": {
        "type": "TSEnumBody",
        "start": 888,
        "end": 949,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 894,
            "end": 913,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 894,
              "end": 901,
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 904,
              "end": 913,
              "raw": "\"Pattern\"",
              "value": "Pattern"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 919,
            "end": 946,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 919,
              "end": 930,
              "decorators": [],
              "name": "Disjunction",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 933,
              "end": 946,
              "raw": "\"Disjunction\"",
              "value": "Disjunction"
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 887,
        "decorators": [],
        "name": "EnumTypeNode",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 951,
      "end": 986,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 956,
        "end": 961,
        "decorators": [],
        "name": "NodeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 964,
        "end": 985,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 964,
            "end": 975,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 964,
              "end": 975,
              "decorators": [],
              "name": "Disjunction",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 978,
            "end": 985,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 978,
              "end": 985,
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 988,
      "end": 1034,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1007,
        "end": 1034,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1013,
            "end": 1032,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1013,
              "end": 1017,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1019,
                "end": 1032,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1025,
                  "end": 1031,
                  "literal": {
                    "type": "Literal",
                    "start": 1025,
                    "end": 1031,
                    "raw": "\"type\"",
                    "value": "type"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1024,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1024,
                    "decorators": [],
                    "name": "NodeA",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 998,
        "end": 1006,
        "decorators": [],
        "name": "NodeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1036,
      "end": 1140,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1075,
        "end": 1140,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1081,
            "end": 1111,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1085,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1085,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1087,
                "end": 1111,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1087,
                  "end": 1111,
                  "left": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1099,
                    "decorators": [],
                    "name": "EnumTypeNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1100,
                    "end": 1111,
                    "decorators": [],
                    "name": "Disjunction",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1116,
            "end": 1138,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1116,
              "end": 1128,
              "decorators": [],
              "name": "alternatives",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1128,
              "end": 1138,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1130,
                "end": 1138,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1130,
                  "end": 1136
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1066,
          "end": 1074,
          "expression": {
            "type": "Identifier",
            "start": 1066,
            "end": 1074,
            "decorators": [],
            "name": "NodeBase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1057,
        "decorators": [],
        "name": "Disjunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1142,
      "end": 1234,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1177,
        "end": 1234,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1183,
            "end": 1209,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1183,
              "end": 1187,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1187,
              "end": 1209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1189,
                "end": 1209,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1189,
                  "end": 1209,
                  "left": {
                    "type": "Identifier",
                    "start": 1189,
                    "end": 1201,
                    "decorators": [],
                    "name": "EnumTypeNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1209,
                    "decorators": [],
                    "name": "Pattern",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1214,
            "end": 1232,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1222,
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1222,
              "end": 1232,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1224,
                "end": 1232,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1224,
                  "end": 1230
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1168,
          "end": 1176,
          "expression": {
            "type": "Identifier",
            "start": 1168,
            "end": 1176,
            "decorators": [],
            "name": "NodeBase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1152,
        "end": 1159,
        "decorators": [],
        "name": "Pattern",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1236,
      "end": 1249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1240,
          "end": 1249,
          "definite": true,
          "id": {
            "type": "Identifier",
            "start": 1240,
            "end": 1249,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1242,
              "end": 1249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1244,
                "end": 1249,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1249,
                  "decorators": [],
                  "name": "NodeA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 1251,
      "end": 1378,
      "alternate": {
        "type": "BlockStatement",
        "start": 1317,
        "end": 1378,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1323,
            "end": 1341,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1323,
              "end": 1341,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1323,
                "end": 1339,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1323,
                  "end": 1333,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1323,
                    "end": 1324,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1325,
                    "end": 1333,
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1334,
                  "end": 1339,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1281,
        "end": 1311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1287,
            "end": 1309,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1287,
              "end": 1309,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1287,
                "end": 1307,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1287,
                  "end": 1301,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1288,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1301,
                    "decorators": [],
                    "name": "alternatives",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1307,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1255,
        "end": 1279,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 1255,
          "end": 1261,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1255,
            "end": 1256,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1257,
            "end": 1261,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1266,
          "end": 1279,
          "raw": "\"Disjunction\"",
          "value": "Disjunction"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
