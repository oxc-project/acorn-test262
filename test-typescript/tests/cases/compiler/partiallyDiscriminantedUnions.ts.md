partiallyDiscriminantedUnions.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 657,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 69,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 69,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 47,
                "end": 50,
                "literal": {
                  "type": "Literal",
                  "start": 47,
                  "end": 50,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 67,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 63,
              "decorators": [],
              "name": "subtype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 66,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 66,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 66,
                  "raw": "1",
                  "value": 1
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
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "A1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 135,
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 135,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 100,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 96,
                "end": 99,
                "literal": {
                  "type": "Literal",
                  "start": 96,
                  "end": 99,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 116,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "subtype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 114,
                "end": 115,
                "literal": {
                  "type": "Literal",
                  "start": 114,
                  "end": 115,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 133,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 132,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 126,
                "end": 132
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "decorators": [],
        "name": "A2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 137,
      "end": 167,
      "body": {
        "type": "TSInterfaceBody",
        "start": 149,
        "end": 167,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 155,
            "end": 165,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 159,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 164,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 161,
                "end": 164,
                "literal": {
                  "type": "Literal",
                  "start": 161,
                  "end": 164,
                  "raw": "'b'",
                  "value": "b"
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
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 169,
      "end": 191,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "AB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 179,
        "end": 190,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 179,
            "end": 181,
            "typeName": {
              "type": "Identifier",
              "start": 179,
              "end": 181,
              "decorators": [],
              "name": "A1",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 184,
            "end": 186,
            "typeName": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "A2",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 189,
            "end": 190,
            "typeName": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 205,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 205,
                  "decorators": [],
                  "name": "AB",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 208,
            "end": 214,
            "expression": {
              "type": "ObjectExpression",
              "start": 212,
              "end": 214,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 209,
              "end": 211,
              "typeName": {
                "type": "Identifier",
                "start": 209,
                "end": 211,
                "decorators": [],
                "name": "AB",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 217,
      "end": 291,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 238,
        "end": 291,
        "body": [
          {
            "type": "IfStatement",
            "start": 244,
            "end": 289,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 266,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 276,
                  "end": 283,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 276,
                    "end": 282,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 278,
                      "decorators": [],
                      "name": "ab",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 248,
              "end": 264,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 250,
                  "decorators": [],
                  "name": "ab",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 258,
                  "decorators": [],
                  "name": "subtype",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 263,
                "end": 264,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 221,
        "end": 236,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 221,
          "end": 228,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "ab",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 224,
            "end": 228,
            "decorators": [],
            "name": "type",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 233,
          "end": 236,
          "raw": "'a'",
          "value": "a"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 347,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 328,
        "end": 347,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 330,
            "end": 345,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 344,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 336,
                "end": 344,
                "literal": {
                  "type": "Literal",
                  "start": 336,
                  "end": 344,
                  "raw": "\"square\"",
                  "value": "square"
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 327,
        "decorators": [],
        "name": "Square",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 380,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 361,
        "end": 380,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 378,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 367,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 377,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 369,
                "end": 377,
                "literal": {
                  "type": "Literal",
                  "start": 369,
                  "end": 377,
                  "raw": "\"circle\"",
                  "value": "circle"
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 360,
        "decorators": [],
        "name": "Circle",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 382,
      "end": 411,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 392,
        "decorators": [],
        "name": "Shape",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 395,
        "end": 410,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 395,
            "end": 401,
            "typeName": {
              "type": "Identifier",
              "start": 395,
              "end": 401,
              "decorators": [],
              "name": "Circle",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 404,
            "end": 410,
            "typeName": {
              "type": "Identifier",
              "start": 404,
              "end": 410,
              "decorators": [],
              "name": "Square",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 412,
      "end": 447,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 423,
        "decorators": [],
        "name": "Shapes",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 426,
        "end": 446,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 426,
            "end": 431,
            "typeName": {
              "type": "Identifier",
              "start": 426,
              "end": 431,
              "decorators": [],
              "name": "Shape",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 434,
            "end": 446,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 439,
              "end": 446,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 440,
                  "end": 445,
                  "typeName": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 445,
                    "decorators": [],
                    "name": "Shape",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 434,
              "end": 439,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 523,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 523,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 496,
            "end": 521,
            "argument": {
              "type": "UnaryExpression",
              "start": 503,
              "end": 520,
              "argument": {
                "type": "CallExpression",
                "start": 504,
                "end": 520,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 518,
                    "end": 519,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 504,
                  "end": 517,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 509,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 517,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false
                  }
                },
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 465,
        "decorators": [],
        "name": "isShape",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 466,
          "end": 476,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 476,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 470,
              "end": 476,
              "typeName": {
                "type": "Identifier",
                "start": 470,
                "end": 476,
                "decorators": [],
                "name": "Shapes",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 477,
        "end": 489,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 479,
          "end": 489,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 484,
            "end": 489,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 484,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 489,
                "decorators": [],
                "name": "Shape",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 657,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 550,
        "end": 657,
        "body": [
          {
            "type": "IfStatement",
            "start": 556,
            "end": 655,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 572,
              "end": 655,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 582,
                  "end": 649,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 607,
                    "end": 649,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 621,
                        "end": 639,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 625,
                            "end": 638,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 634,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 626,
                                "end": 634,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 628,
                                  "end": 634,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 628,
                                    "end": 634,
                                    "decorators": [],
                                    "name": "Circle",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 637,
                              "end": 638,
                              "decorators": [],
                              "name": "s",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 586,
                    "end": 605,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 586,
                      "end": 592,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 592,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 597,
                      "end": 605,
                      "raw": "\"circle\"",
                      "value": "circle"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 560,
              "end": 570,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 560,
                "end": 567,
                "decorators": [],
                "name": "isShape",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 538,
        "decorators": [],
        "name": "fail",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 539,
          "end": 548,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 540,
            "end": 548,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 542,
              "end": 548,
              "typeName": {
                "type": "Identifier",
                "start": 542,
                "end": 548,
                "decorators": [],
                "name": "Shapes",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
