__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    57
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "range": [
              25,
              54
            ],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  51,
                  54
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Text",
                "optional": false,
                "range": [
                  46,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                40,
                54
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          56
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"Test\"",
        "value": "Test",
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
        0,
        56
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    40,
    134
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'Test'",
        "value": "Test",
        "range": [
          57,
          63
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            47,
            51
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              47,
              51
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        40,
        64
      ],
      "loc": {
        "end": {
          "column": 24,
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
              70,
              71
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              74,
              78
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            70,
            78
          ],
          "loc": {
            "end": {
              "column": 12,
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
        66,
        79
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            103,
            127
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "attr",
                "range": [
                  113,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "range": [
                    119,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                "range": [
                  118,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              "range": [
                113,
                124
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "anything",
            "range": [
              104,
              112
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "range": [
          103,
          127
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        103,
        128
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
