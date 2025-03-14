__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 794,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 104,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 20,
                "end": 33,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 29,
                    "end": 33
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 102,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "decorators": [],
              "name": "nested",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 60,
                "end": 102,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 66,
                    "end": 76,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 69,
                        "end": 75
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 81,
                    "end": 98,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 84,
                        "end": 97,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 122,
            "decorators": [],
            "name": "aFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 122,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 125,
            "end": 171,
            "properties": [
              {
                "type": "Property",
                "start": 127,
                "end": 133,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 132,
                  "end": 133,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 135,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 138,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 140,
                  "end": 143,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "Property",
                "start": 145,
                "end": 169,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "decorators": [],
                  "name": "nested",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 153,
                  "end": 169,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 155,
                      "end": 159,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 158,
                        "end": 159,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 161,
                      "end": 167,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 164,
                        "end": 167,
                        "raw": "\"y\"",
                        "value": "y"
                      }
                    }
                  ]
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
      "type": "IfStatement",
      "start": 174,
      "end": 412,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 205,
        "end": 412,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 209,
            "end": 257,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 215,
                "end": 256,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 215,
                  "end": 249,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 217,
                      "end": 220,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 220,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 220,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 222,
                      "end": 225,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 225,
                        "decorators": [],
                        "name": "baz",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 225,
                        "decorators": [],
                        "name": "baz",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 227,
                      "end": 247,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 233,
                        "decorators": [],
                        "name": "nested",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectPattern",
                        "start": 235,
                        "end": 247,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 236,
                            "end": 237,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 239,
                            "end": 246,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 242,
                              "end": 246,
                              "decorators": [],
                              "name": "text",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "init": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 256,
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 291,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 266,
                "end": 290,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 279,
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 271,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 282,
                  "end": 290,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 286,
                    "decorators": [],
                    "name": "aFoo",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 290,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 320,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 300,
                "end": 319,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 313,
                  "decorators": [],
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 305,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 307,
                      "end": 313
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 319,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 323,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 329,
                "end": 350,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 344,
                  "decorators": [],
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 336,
                    "end": 344,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 338,
                      "end": 344
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 354,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 378,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 374,
                  "decorators": [],
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 366,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 378,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 382,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 409,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 402,
                  "decorators": [],
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 396,
                      "end": 402
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 409,
                  "decorators": [],
                  "name": "text",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 178,
        "end": 203,
        "operator": "&&",
        "left": {
          "type": "MemberExpression",
          "start": 178,
          "end": 186,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 182,
            "decorators": [],
            "name": "aFoo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 190,
          "end": 203,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 190,
            "end": 201,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 190,
              "end": 194,
              "decorators": [],
              "name": "aFoo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "nested",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 414,
      "end": 474,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 422,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 425,
        "end": 473,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 429,
            "end": 450,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 429,
              "end": 434,
              "decorators": [],
              "name": "elem1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 449,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 436,
                "end": 449,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 445,
                    "end": 449
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 453,
            "end": 471,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 453,
              "end": 458,
              "decorators": [],
              "name": "elem2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 470,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 460,
                "end": 470,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 460,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 463,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 466,
                    "end": 470
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 515,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 514,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 486,
            "decorators": [],
            "name": "bBar",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 489,
            "end": 514,
            "properties": [
              {
                "type": "Property",
                "start": 491,
                "end": 499,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 496,
                  "decorators": [],
                  "name": "elem1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "raw": "7",
                  "value": 7
                }
              },
              {
                "type": "Property",
                "start": 501,
                "end": 512,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 506,
                  "decorators": [],
                  "name": "elem2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 512,
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false
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
      "type": "IfStatement",
      "start": 517,
      "end": 793,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 574,
        "end": 793,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 578,
            "end": 632,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 584,
                "end": 631,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 584,
                  "end": 618,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 586,
                      "end": 589,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 589,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 589,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 591,
                      "end": 594,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 594,
                        "decorators": [],
                        "name": "baz",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 594,
                        "decorators": [],
                        "name": "baz",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 596,
                      "end": 616,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 602,
                        "decorators": [],
                        "name": "nested",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectPattern",
                        "start": 604,
                        "end": 616,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 605,
                            "end": 606,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 605,
                              "end": 606,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 605,
                              "end": 606,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 608,
                            "end": 615,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 609,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 611,
                              "end": 615,
                              "decorators": [],
                              "name": "text",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 621,
                  "end": 631,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 625,
                    "decorators": [],
                    "name": "bBar",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 631,
                    "decorators": [],
                    "name": "elem2",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 672,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 641,
                "end": 671,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 654,
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 646,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 648,
                      "end": 654
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 657,
                  "end": 671,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 657,
                    "end": 667,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 661,
                      "decorators": [],
                      "name": "bBar",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 667,
                      "decorators": [],
                      "name": "elem2",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 671,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 675,
            "end": 701,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 681,
                "end": 700,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 694,
                  "decorators": [],
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 686,
                    "end": 694,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 688,
                      "end": 694
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 700,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 704,
            "end": 732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 710,
                "end": 731,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 725,
                  "decorators": [],
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 717,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 731,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 735,
            "end": 760,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 759,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 755,
                  "decorators": [],
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 747,
                    "end": 755,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 749,
                      "end": 755
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 759,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 791,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 790,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 783,
                  "decorators": [],
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 775,
                    "end": 783,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 777,
                      "end": 783
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 790,
                  "decorators": [],
                  "name": "text",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 521,
        "end": 572,
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "start": 521,
          "end": 549,
          "operator": "&&",
          "left": {
            "type": "MemberExpression",
            "start": 521,
            "end": 531,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 521,
              "end": 525,
              "decorators": [],
              "name": "bBar",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 526,
              "end": 531,
              "decorators": [],
              "name": "elem2",
              "optional": false
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 535,
            "end": 549,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 535,
              "end": 545,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 535,
                "end": 539,
                "decorators": [],
                "name": "bBar",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 545,
                "decorators": [],
                "name": "elem2",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 553,
          "end": 572,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 553,
            "end": 570,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 553,
              "end": 563,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 553,
                "end": 557,
                "decorators": [],
                "name": "bBar",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 558,
                "end": 563,
                "decorators": [],
                "name": "elem2",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 564,
              "end": 570,
              "decorators": [],
              "name": "nested",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
