typeGuardOfFromPropNameInUnionType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2040,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 45,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 43,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
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
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 66,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
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
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 87,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
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
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 201,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 201,
        "body": [
          {
            "type": "IfStatement",
            "start": 129,
            "end": 199,
            "alternate": {
              "type": "BlockStatement",
              "start": 175,
              "end": 199,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 185,
                  "end": 193,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 185,
                    "end": 192,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 185,
                      "end": 188,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 186,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 191,
                      "end": 192,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 143,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 163,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 153,
                    "end": 162,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 153,
                      "end": 156,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 159,
                      "end": 162,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 133,
              "end": 141,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 100,
        "end": 112,
        "decorators": [],
        "name": "namedClasses",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 121,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 121,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 116,
              "end": 121,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 116,
                  "end": 117,
                  "typeName": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 120,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 203,
      "end": 362,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 362,
        "body": [
          {
            "type": "IfStatement",
            "start": 252,
            "end": 360,
            "alternate": {
              "type": "BlockStatement",
              "start": 315,
              "end": 360,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 325,
                  "end": 354,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 329,
                      "end": 353,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 347,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 330,
                          "end": 347,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 332,
                            "end": 347,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 332,
                                "end": 338
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 341,
                                "end": 347,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 341,
                                  "end": 347,
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 350,
                        "end": 353,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 351,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 266,
              "end": 309,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 276,
                  "end": 303,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 280,
                      "end": 302,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 296,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 281,
                          "end": 296,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 283,
                            "end": 296,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 283,
                                "end": 289
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 292,
                                "end": 296,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 292,
                                  "end": 296,
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 299,
                        "end": 302,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 302,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
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
              "start": 256,
              "end": 264,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 256,
                "end": 259,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 212,
        "end": 227,
        "decorators": [],
        "name": "multipleClasses",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 228,
          "end": 244,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 244,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 231,
              "end": 244,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 232,
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 240,
                  "typeName": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 243,
                  "end": 244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 526,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 526,
        "body": [
          {
            "type": "IfStatement",
            "start": 432,
            "end": 524,
            "alternate": {
              "type": "BlockStatement",
              "start": 488,
              "end": 524,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 498,
                  "end": 518,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 502,
                      "end": 517,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 511,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 511,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 505,
                            "end": 511
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 514,
                        "end": 517,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 515,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 446,
              "end": 482,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 456,
                  "end": 476,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 460,
                      "end": 475,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 469,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 461,
                          "end": 469,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 463,
                            "end": 469
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 472,
                        "end": 475,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 475,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
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
              "start": 436,
              "end": 444,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 436,
                "end": 439,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 373,
        "end": 389,
        "decorators": [],
        "name": "anonymousClasses",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 424,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 424,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 393,
              "end": 424,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 393,
                  "end": 407,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 395,
                      "end": 405,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 396,
                        "end": 404,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 410,
                  "end": 424,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 412,
                      "end": 422,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 413,
                        "end": 421,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 415,
                          "end": 421
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 528,
      "end": 567,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 552,
        "end": 567,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 554,
            "end": 565,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 564,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 558,
                "end": 564
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
        "start": 534,
        "end": 551,
        "decorators": [],
        "name": "AWithOptionalProp",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 568,
      "end": 607,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 592,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 594,
            "end": 605,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 604,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 598,
                "end": 604
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
        "start": 574,
        "end": 591,
        "decorators": [],
        "name": "BWithOptionalProp",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 609,
      "end": 856,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 702,
        "end": 856,
        "body": [
          {
            "type": "IfStatement",
            "start": 708,
            "end": 854,
            "alternate": {
              "type": "BlockStatement",
              "start": 754,
              "end": 854,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 764,
                  "end": 848,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 770,
                      "end": 848,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 770,
                        "end": 779,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 771,
                          "end": 779,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 773,
                            "end": 779
                          }
                        }
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 782,
                        "end": 848,
                        "alternate": {
                          "type": "MemberExpression",
                          "start": 845,
                          "end": 848,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 845,
                            "end": 846,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 847,
                            "end": 848,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          }
                        },
                        "consequent": {
                          "type": "MemberExpression",
                          "start": 827,
                          "end": 830,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 828,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 829,
                            "end": 830,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 782,
                          "end": 812,
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "start": 782,
                            "end": 783,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 795,
                            "end": 812,
                            "decorators": [],
                            "name": "AWithOptionalProp",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 722,
              "end": 748,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 732,
                  "end": 742,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 732,
                    "end": 741,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 732,
                      "end": 735,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 733,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 735,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 738,
                      "end": 741,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 712,
              "end": 720,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 712,
                "end": 715,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 618,
        "end": 659,
        "decorators": [],
        "name": "positiveTestClassesWithOptionalProperties",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 660,
          "end": 700,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 700,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 663,
              "end": 700,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 663,
                  "end": 680,
                  "typeName": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 680,
                    "decorators": [],
                    "name": "AWithOptionalProp",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 683,
                  "end": 700,
                  "typeName": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 700,
                    "decorators": [],
                    "name": "BWithOptionalProp",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 858,
      "end": 1005,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 903,
        "end": 1005,
        "body": [
          {
            "type": "IfStatement",
            "start": 909,
            "end": 1003,
            "alternate": {
              "type": "BlockStatement",
              "start": 967,
              "end": 1003,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 977,
                  "end": 997,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 981,
                      "end": 996,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 981,
                        "end": 990,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 982,
                          "end": 990,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 984,
                            "end": 990
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 993,
                        "end": 996,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 993,
                          "end": 994,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 995,
                          "end": 996,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 925,
              "end": 961,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 935,
                  "end": 955,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 939,
                      "end": 954,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 948,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 940,
                          "end": 948,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 942,
                            "end": 948
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 951,
                        "end": 954,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 951,
                          "end": 952,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 953,
                          "end": 954,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
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
              "start": 913,
              "end": 923,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 913,
                "end": 916,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 921,
                "end": 922,
                "decorators": [],
                "name": "x",
                "optional": false
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
        "start": 867,
        "end": 892,
        "decorators": [],
        "name": "inParenthesizedExpression",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 893,
          "end": 901,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 894,
            "end": 901,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 896,
              "end": 901,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 900,
                  "end": 901,
                  "typeName": {
                    "type": "Identifier",
                    "start": 900,
                    "end": 901,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 1007,
      "end": 1048,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1032,
        "end": 1048,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1034,
            "end": 1046,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1034,
              "end": 1038,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1038,
              "end": 1045,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1040,
                "end": 1045,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1040,
                    "end": 1041,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1041,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1044,
                    "end": 1045,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1044,
                      "end": 1045,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
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
        "start": 1013,
        "end": 1031,
        "decorators": [],
        "name": "ClassWithUnionProp",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1050,
      "end": 1208,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1093,
        "end": 1208,
        "body": [
          {
            "type": "IfStatement",
            "start": 1099,
            "end": 1206,
            "alternate": {
              "type": "BlockStatement",
              "start": 1165,
              "end": 1206,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1175,
                  "end": 1200,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1179,
                      "end": 1199,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1179,
                        "end": 1188,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1180,
                          "end": 1188,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1182,
                            "end": 1188
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1191,
                        "end": 1199,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1191,
                          "end": 1197,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1191,
                            "end": 1192,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1193,
                            "end": 1197,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1198,
                          "end": 1199,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1118,
              "end": 1159,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1128,
                  "end": 1153,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1132,
                      "end": 1152,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1132,
                        "end": 1141,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1133,
                          "end": 1141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1135,
                            "end": 1141
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1144,
                        "end": 1152,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1144,
                          "end": 1150,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1144,
                            "end": 1145,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1150,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1151,
                          "end": 1152,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
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
              "start": 1103,
              "end": 1116,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1103,
                "end": 1106,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "MemberExpression",
                "start": 1110,
                "end": 1116,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1116,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
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
        "start": 1059,
        "end": 1069,
        "decorators": [],
        "name": "inProperty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1070,
          "end": 1091,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1071,
            "end": 1091,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1073,
              "end": 1091,
              "typeName": {
                "type": "Identifier",
                "start": 1073,
                "end": 1091,
                "decorators": [],
                "name": "ClassWithUnionProp",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 1210,
      "end": 1266,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1236,
        "end": 1266,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1238,
            "end": 1264,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1243,
              "decorators": [],
              "name": "outer",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1243,
              "end": 1263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1245,
                "end": 1263,
                "typeName": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1263,
                  "decorators": [],
                  "name": "ClassWithUnionProp",
                  "optional": false
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
        "start": 1216,
        "end": 1235,
        "decorators": [],
        "name": "NestedClassWithProp",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1268,
      "end": 1451,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1318,
        "end": 1451,
        "body": [
          {
            "type": "IfStatement",
            "start": 1324,
            "end": 1449,
            "alternate": {
              "type": "BlockStatement",
              "start": 1402,
              "end": 1449,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1412,
                  "end": 1443,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1416,
                      "end": 1442,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1416,
                        "end": 1425,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1417,
                          "end": 1425,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1419,
                            "end": 1425
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1428,
                        "end": 1442,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1428,
                          "end": 1440,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1428,
                            "end": 1435,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1428,
                              "end": 1429,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1430,
                              "end": 1435,
                              "decorators": [],
                              "name": "outer",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1436,
                            "end": 1440,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1441,
                          "end": 1442,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1349,
              "end": 1396,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1359,
                  "end": 1390,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1363,
                      "end": 1389,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1372,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1364,
                          "end": 1372,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1366,
                            "end": 1372
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1375,
                        "end": 1389,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1375,
                          "end": 1387,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1375,
                            "end": 1382,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1375,
                              "end": 1376,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1377,
                              "end": 1382,
                              "decorators": [],
                              "name": "outer",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1383,
                            "end": 1387,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1388,
                          "end": 1389,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
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
              "start": 1328,
              "end": 1347,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1328,
                "end": 1331,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "MemberExpression",
                "start": 1335,
                "end": 1347,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 1335,
                  "end": 1342,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1335,
                    "end": 1336,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1337,
                    "end": 1342,
                    "decorators": [],
                    "name": "outer",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1347,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
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
        "start": 1277,
        "end": 1293,
        "decorators": [],
        "name": "innestedProperty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1294,
          "end": 1316,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1295,
            "end": 1316,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1297,
              "end": 1316,
              "typeName": {
                "type": "Identifier",
                "start": 1297,
                "end": 1316,
                "decorators": [],
                "name": "NestedClassWithProp",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 1453,
      "end": 1667,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1475,
        "end": 1667,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1481,
            "end": 1503,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1491,
              "end": 1495,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1495,
              "end": 1502,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1497,
                "end": 1502,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1497,
                    "end": 1498,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1498,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1501,
                    "end": 1502,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1501,
                      "end": 1502,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1508,
            "end": 1665,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1508,
              "end": 1514,
              "decorators": [],
              "name": "inThis",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1514,
              "end": 1665,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1517,
                "end": 1665,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1527,
                    "end": 1659,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1607,
                      "end": 1659,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1621,
                          "end": 1649,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1625,
                              "end": 1648,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1625,
                                "end": 1634,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1626,
                                  "end": 1634,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1628,
                                    "end": 1634
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1637,
                                "end": 1648,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1637,
                                  "end": 1646,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1637,
                                    "end": 1641
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1642,
                                    "end": 1646,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1647,
                                  "end": 1648,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1549,
                      "end": 1601,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1563,
                          "end": 1591,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1567,
                              "end": 1590,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1567,
                                "end": 1576,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1568,
                                  "end": 1576,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1570,
                                    "end": 1576
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1579,
                                "end": 1590,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1579,
                                  "end": 1588,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1579,
                                    "end": 1583
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1584,
                                    "end": 1588,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1589,
                                  "end": 1590,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                }
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
                      "start": 1531,
                      "end": 1547,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 1531,
                        "end": 1534,
                        "raw": "\"a\"",
                        "value": "a"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1538,
                        "end": 1547,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1538,
                          "end": 1542
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1543,
                          "end": 1547,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1459,
        "end": 1474,
        "decorators": [],
        "name": "InMemberOfClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1695,
      "end": 1841,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1712,
        "end": 1841,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1718,
            "end": 1728,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1718,
              "end": 1719,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1719,
              "end": 1727,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1721,
                "end": 1727
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1733,
            "end": 1839,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1733,
              "end": 1739,
              "decorators": [],
              "name": "inThis",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1739,
              "end": 1839,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1742,
                "end": 1839,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1752,
                    "end": 1833,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1822,
                      "end": 1833,
                      "body": []
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1769,
                      "end": 1816,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1783,
                          "end": 1806,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1787,
                              "end": 1805,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1787,
                                "end": 1796,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1788,
                                  "end": 1796,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1790,
                                    "end": 1796
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1799,
                                "end": 1805,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1799,
                                  "end": 1803
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1804,
                                  "end": 1805,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                }
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
                      "start": 1756,
                      "end": 1767,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 1756,
                        "end": 1759,
                        "raw": "\"a\"",
                        "value": "a"
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 1763,
                        "end": 1767
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1701,
        "end": 1711,
        "decorators": [],
        "name": "SelfAssert",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1843,
      "end": 1886,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1861,
        "end": 1886,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1867,
            "end": 1884,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1868,
                "end": 1877,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1869,
                  "end": 1877,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1871,
                    "end": 1877
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1878,
              "end": 1883,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1880,
                "end": 1883
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1853,
        "end": 1860,
        "decorators": [],
        "name": "Indexed",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1888,
      "end": 2039,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1911,
        "end": 2039,
        "body": [
          {
            "type": "IfStatement",
            "start": 1917,
            "end": 2009,
            "alternate": {
              "type": "IfStatement",
              "start": 1968,
              "end": 2009,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1982,
                "end": 2009,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1992,
                    "end": 2003,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1999,
                      "end": 2002,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1999,
                        "end": 2000,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2001,
                        "end": 2002,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1972,
                "end": 1980,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 1972,
                  "end": 1975,
                  "raw": "\"b\"",
                  "value": "b"
                },
                "right": {
                  "type": "Identifier",
                  "start": 1979,
                  "end": 1980,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1931,
              "end": 1958,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1941,
                  "end": 1952,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 1948,
                    "end": 1951,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1948,
                      "end": 1949,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1950,
                      "end": 1951,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1921,
              "end": 1929,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1921,
                "end": 1924,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Identifier",
                "start": 1928,
                "end": 1929,
                "decorators": [],
                "name": "i",
                "optional": false
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2014,
            "end": 2037,
            "argument": {
              "type": "LogicalExpression",
              "start": 2021,
              "end": 2036,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 2021,
                "end": 2029,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 2021,
                  "end": 2024,
                  "raw": "\"c\"",
                  "value": "c"
                },
                "right": {
                  "type": "Identifier",
                  "start": 2028,
                  "end": 2029,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 2033,
                "end": 2036,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2033,
                  "end": 2034,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2035,
                  "end": 2036,
                  "decorators": [],
                  "name": "c",
                  "optional": false
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
        "start": 1897,
        "end": 1898,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1899,
          "end": 1909,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1900,
            "end": 1909,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1902,
              "end": 1909,
              "typeName": {
                "type": "Identifier",
                "start": 1902,
                "end": 1909,
                "decorators": [],
                "name": "Indexed",
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
