__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    50,
    157
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          67,
          70
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            },
            "range": [
              79,
              84
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            }
          },
          "range": [
            71,
            84
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            },
            "range": [
              89,
              97
            ],
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "range": [
                91,
                97
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              }
            }
          },
          "range": [
            86,
            97
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 56,
            "line": 3
          },
          "start": {
            "column": 48,
            "line": 3
          }
        },
        "range": [
          98,
          106
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            100,
            106
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 3
            },
            "start": {
              "column": 50,
              "line": 3
            }
          }
        }
      },
      "range": [
        50,
        107
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": true,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                114,
                122
              ],
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "range": [
                  116,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              112,
              122
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            112,
            122
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        108,
        123
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              },
              "range": [
                135,
                143
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  137,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              129,
              143
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "quasi": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    152,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
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
                    149,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
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
                    153,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                149,
                155
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 24,
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
                146,
                149
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "range": [
              146,
              155
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 21,
                "line": 6
              }
            }
          },
          "range": [
            129,
            155
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        125,
        156
      ],
      "loc": {
        "end": {
          "column": 31,
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
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
