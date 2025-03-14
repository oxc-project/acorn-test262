__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    163
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          13
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        13
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "as",
        "optional": false,
        "range": [
          31,
          33
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              37,
              41
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            },
            "range": [
              41,
              48
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  43,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "range": [
                43,
                48
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            }
          },
          "range": [
            34,
            48
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        }
      ],
      "range": [
        14,
        50
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "x",
            "optional": false,
            "range": [
              69,
              70
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              73,
              75
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            69,
            75
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        65,
        75
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "quasi": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "Hello world",
                "raw": "Hello world"
              },
              "range": [
                79,
                92
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 3,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            79,
            92
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 6
            },
            "start": {
              "column": 3,
              "line": 6
            }
          }
        },
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "as",
          "optional": false,
          "range": [
            76,
            78
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "range": [
          76,
          92
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        76,
        93
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "y",
            "optional": false,
            "range": [
              132,
              133
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "20",
            "value": 20,
            "range": [
              136,
              138
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            132,
            138
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        128,
        138
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              142,
              145
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 3,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "as",
          "optional": false,
          "range": [
            139,
            141
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          139,
          146
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        139,
        147
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
