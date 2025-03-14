__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    3,
    83
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          32,
          35
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 29,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          12,
          15
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "range": [
              19,
              23
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            },
            "range": [
              23,
              30
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  25,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "range": [
                25,
                30
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            }
          },
          "range": [
            16,
            30
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        3,
        35
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "quasi": {
          "type": "TemplateLiteral",
          "expressions": [
            {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          67,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 30,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"bad\"",
                        "value": "bad",
                        "range": [
                          71,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 6
                          },
                          "start": {
                            "column": 34,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        67,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 6
                        },
                        "start": {
                          "column": 30,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      67,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  65,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    },
                    "range": [
                      55,
                      63
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        57,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    54,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                44,
                79
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                41,
                44
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                80,
                82
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 6
                },
                "start": {
                  "column": 43,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            41,
            82
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            37,
            40
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "range": [
          37,
          82
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        37,
        83
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 46,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
