__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    618
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                23
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      15,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    15,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 15,
                      "line": 1
                    }
                  }
                },
                "range": [
                  15,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
                "regex": {
                  "flags": "",
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
                },
                "value": null,
                "range": [
                  30,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
                },
                "value": null,
                "range": [
                  66,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\P[\\P\\w-_]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\P[\\P\\w-_]"
                },
                "value": null,
                "range": [
                  104,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
                },
                "value": null,
                "range": [
                  137,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
                },
                "value": null,
                "range": [
                  174,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\P[\\P\\w-_]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\P[\\P\\w-_]"
                },
                "value": null,
                "range": [
                  213,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              26,
              229
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "range": [
            6,
            229
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        230
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexesWithBraces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              },
              "range": [
                255,
                265
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      257,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    257,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  }
                },
                "range": [
                  257,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              238,
              265
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "/{??/",
                "regex": {
                  "flags": "",
                  "pattern": "{??"
                },
                "value": null,
                "range": [
                  272,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,??"
                },
                "value": null,
                "range": [
                  281,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,1??"
                },
                "value": null,
                "range": [
                  291,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 2,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1??"
                },
                "value": null,
                "range": [
                  302,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,??"
                },
                "value": null,
                "range": [
                  312,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,2??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,2??"
                },
                "value": null,
                "range": [
                  323,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{2,1??/",
                "regex": {
                  "flags": "",
                  "pattern": "{2,1??"
                },
                "value": null,
                "range": [
                  335,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 2,
                    "line": 19
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{}??"
                },
                "value": null,
                "range": [
                  347,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 20
                  },
                  "start": {
                    "column": 2,
                    "line": 20
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,}??"
                },
                "value": null,
                "range": [
                  357,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 21
                  },
                  "start": {
                    "column": 2,
                    "line": 21
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{,1}??"
                },
                "value": null,
                "range": [
                  368,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 2,
                    "line": 22
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1}??"
                },
                "value": null,
                "range": [
                  380,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 23
                  },
                  "start": {
                    "column": 2,
                    "line": 23
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,}??"
                },
                "value": null,
                "range": [
                  391,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 24
                  },
                  "start": {
                    "column": 2,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,2}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{1,2}??"
                },
                "value": null,
                "range": [
                  403,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 25
                  },
                  "start": {
                    "column": 2,
                    "line": 25
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{2,1}??/",
                "regex": {
                  "flags": "",
                  "pattern": "{2,1}??"
                },
                "value": null,
                "range": [
                  416,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 2,
                    "line": 26
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{??"
                },
                "value": null,
                "range": [
                  446,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 29
                  },
                  "start": {
                    "column": 2,
                    "line": 29
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,??"
                },
                "value": null,
                "range": [
                  456,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 30
                  },
                  "start": {
                    "column": 2,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,1??"
                },
                "value": null,
                "range": [
                  467,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 31
                  },
                  "start": {
                    "column": 2,
                    "line": 31
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1??"
                },
                "value": null,
                "range": [
                  479,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 32
                  },
                  "start": {
                    "column": 2,
                    "line": 32
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,??"
                },
                "value": null,
                "range": [
                  490,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 33
                  },
                  "start": {
                    "column": 2,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,2??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,2??"
                },
                "value": null,
                "range": [
                  502,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{2,1??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{2,1??"
                },
                "value": null,
                "range": [
                  515,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 35
                  },
                  "start": {
                    "column": 2,
                    "line": 35
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{}??"
                },
                "value": null,
                "range": [
                  528,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 36
                  },
                  "start": {
                    "column": 2,
                    "line": 36
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,}??"
                },
                "value": null,
                "range": [
                  539,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 37
                  },
                  "start": {
                    "column": 2,
                    "line": 37
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{,1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{,1}??"
                },
                "value": null,
                "range": [
                  551,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 38
                  },
                  "start": {
                    "column": 2,
                    "line": 38
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1}??"
                },
                "value": null,
                "range": [
                  564,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 39
                  },
                  "start": {
                    "column": 2,
                    "line": 39
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,}??"
                },
                "value": null,
                "range": [
                  576,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 40
                  },
                  "start": {
                    "column": 2,
                    "line": 40
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{1,2}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{1,2}??"
                },
                "value": null,
                "range": [
                  589,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 41
                  },
                  "start": {
                    "column": 2,
                    "line": 41
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/{2,1}??/u",
                "regex": {
                  "flags": "u",
                  "pattern": "{2,1}??"
                },
                "value": null,
                "range": [
                  603,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 42
                  },
                  "start": {
                    "column": 2,
                    "line": 42
                  }
                }
              }
            ],
            "range": [
              268,
              616
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 43
              },
              "start": {
                "column": 36,
                "line": 12
              }
            }
          },
          "range": [
            238,
            616
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        232,
        617
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
