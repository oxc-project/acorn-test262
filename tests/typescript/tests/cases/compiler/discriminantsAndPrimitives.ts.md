__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 1378,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 89,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
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
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 147,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 117,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 136,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
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
      "start": 149,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "f1",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 167,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 170,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 173,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 309,
        "body": [
          {
            "type": "IfStatement",
            "start": 190,
            "end": 307,
            "test": {
              "type": "BinaryExpression",
              "start": 194,
              "end": 215,
              "left": {
                "type": "UnaryExpression",
                "start": 194,
                "end": 202,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 207,
                "end": 215,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 217,
              "end": 307,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 227,
                  "end": 301,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 234,
                    "end": 240,
                    "object": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 240,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 256,
                      "end": 291,
                      "test": {
                        "type": "Literal",
                        "start": 261,
                        "end": 266,
                        "value": "foo",
                        "raw": "'foo'"
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 284,
                          "end": 291,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 284,
                            "end": 290,
                            "object": {
                              "type": "Identifier",
                              "start": 284,
                              "end": 285,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 286,
                              "end": 290,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "decorators": [],
        "name": "f2",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 329,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 332,
                  "end": 335,
                  "typeName": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 335,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 483,
        "body": [
          {
            "type": "IfStatement",
            "start": 364,
            "end": 481,
            "test": {
              "type": "BinaryExpression",
              "start": 368,
              "end": 389,
              "left": {
                "type": "UnaryExpression",
                "start": 368,
                "end": 376,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 381,
                "end": 389,
                "value": "object",
                "raw": "\"object\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 391,
              "end": 481,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 401,
                  "end": 475,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 408,
                    "end": 414,
                    "object": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 414,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 430,
                      "end": 465,
                      "test": {
                        "type": "Literal",
                        "start": 435,
                        "end": 440,
                        "value": "foo",
                        "raw": "'foo'"
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 458,
                          "end": 465,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 458,
                            "end": 464,
                            "object": {
                              "type": "Identifier",
                              "start": 458,
                              "end": 459,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 460,
                              "end": 464,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 657,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "f3",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 503,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 509,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 509,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 527,
        "end": 657,
        "body": [
          {
            "type": "IfStatement",
            "start": 533,
            "end": 655,
            "test": {
              "type": "LogicalExpression",
              "start": 537,
              "end": 563,
              "left": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 542,
                "end": 563,
                "left": {
                  "type": "UnaryExpression",
                  "start": 542,
                  "end": 550,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 555,
                  "end": 563,
                  "value": "string",
                  "raw": "\"string\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 565,
              "end": 655,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 575,
                  "end": 649,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 582,
                    "end": 588,
                    "object": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 588,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 604,
                      "end": 639,
                      "test": {
                        "type": "Literal",
                        "start": 609,
                        "end": 614,
                        "value": "foo",
                        "raw": "'foo'"
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 632,
                          "end": 639,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 632,
                            "end": 638,
                            "object": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 638,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 659,
      "end": 840,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 670,
        "decorators": [],
        "name": "f4",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 674,
                    "end": 677,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 680,
                  "end": 683,
                  "typeName": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 683,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 840,
        "body": [
          {
            "type": "IfStatement",
            "start": 716,
            "end": 838,
            "test": {
              "type": "LogicalExpression",
              "start": 720,
              "end": 746,
              "left": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 725,
                "end": 746,
                "left": {
                  "type": "UnaryExpression",
                  "start": 725,
                  "end": 733,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 738,
                  "end": 746,
                  "value": "object",
                  "raw": "\"object\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 748,
              "end": 838,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 758,
                  "end": 832,
                  "discriminant": {
                    "type": "MemberExpression",
                    "start": 765,
                    "end": 771,
                    "object": {
                      "type": "Identifier",
                      "start": 765,
                      "end": 766,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 771,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 787,
                      "end": 822,
                      "test": {
                        "type": "Literal",
                        "start": 792,
                        "end": 797,
                        "value": "foo",
                        "raw": "'foo'"
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 815,
                          "end": 822,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 815,
                            "end": 821,
                            "object": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 816,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 817,
                              "end": 821,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 864,
      "end": 949,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 887,
        "decorators": [],
        "name": "EnumTypeNode",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 888,
        "end": 949,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 894,
            "end": 913,
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
              "value": "Pattern",
              "raw": "\"Pattern\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 919,
            "end": 946,
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
              "value": "Disjunction",
              "raw": "\"Disjunction\""
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 951,
      "end": 986,
      "id": {
        "type": "Identifier",
        "start": 956,
        "end": 961,
        "decorators": [],
        "name": "NodeA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 964,
        "end": 985,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 964,
            "end": 975,
            "typeName": {
              "type": "Identifier",
              "start": 964,
              "end": 975,
              "decorators": [],
              "name": "Disjunction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 978,
            "end": 985,
            "typeName": {
              "type": "Identifier",
              "start": 978,
              "end": 985,
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 988,
      "end": 1034,
      "id": {
        "type": "Identifier",
        "start": 998,
        "end": 1006,
        "decorators": [],
        "name": "NodeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1007,
        "end": 1034,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1013,
            "end": 1032,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1013,
              "end": 1017,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1019,
                "end": 1032,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1024,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1024,
                    "decorators": [],
                    "name": "NodeA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1025,
                  "end": 1031,
                  "literal": {
                    "type": "Literal",
                    "start": 1025,
                    "end": 1031,
                    "value": "type",
                    "raw": "\"type\""
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
      "type": "TSInterfaceDeclaration",
      "start": 1036,
      "end": 1140,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1057,
        "decorators": [],
        "name": "Disjunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1075,
        "end": 1140,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1081,
            "end": 1111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1085,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1085,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1087,
                "end": 1111,
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
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1116,
            "end": 1138,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1116,
              "end": 1128,
              "decorators": [],
              "name": "alternatives",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1142,
      "end": 1234,
      "id": {
        "type": "Identifier",
        "start": 1152,
        "end": 1159,
        "decorators": [],
        "name": "Pattern",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1177,
        "end": 1234,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1183,
            "end": 1209,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1183,
              "end": 1187,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1187,
              "end": 1209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1189,
                "end": 1209,
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
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1214,
            "end": 1232,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1222,
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 1236,
      "end": 1249,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1240,
          "end": 1249,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1249,
                  "decorators": [],
                  "name": "NodeA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": true
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1251,
      "end": 1378,
      "test": {
        "type": "BinaryExpression",
        "start": 1255,
        "end": 1279,
        "left": {
          "type": "MemberExpression",
          "start": 1255,
          "end": 1261,
          "object": {
            "type": "Identifier",
            "start": 1255,
            "end": 1256,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1257,
            "end": 1261,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1266,
          "end": 1279,
          "value": "Disjunction",
          "raw": "\"Disjunction\""
        }
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
            "expression": {
              "type": "CallExpression",
              "start": 1287,
              "end": 1309,
              "callee": {
                "type": "MemberExpression",
                "start": 1287,
                "end": 1307,
                "object": {
                  "type": "MemberExpression",
                  "start": 1287,
                  "end": 1301,
                  "object": {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1288,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1301,
                    "decorators": [],
                    "name": "alternatives",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1307,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1317,
        "end": 1378,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1323,
            "end": 1341,
            "expression": {
              "type": "CallExpression",
              "start": 1323,
              "end": 1341,
              "callee": {
                "type": "MemberExpression",
                "start": 1323,
                "end": 1339,
                "object": {
                  "type": "MemberExpression",
                  "start": 1323,
                  "end": 1333,
                  "object": {
                    "type": "Identifier",
                    "start": 1323,
                    "end": 1324,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1325,
                    "end": 1333,
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1334,
                  "end": 1339,
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
