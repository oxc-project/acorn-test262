__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    58
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./b\"",
        "value": "./b",
        "range": [
          16,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            10
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              7,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        23,
        50
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            48,
            50
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
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
            44,
            47
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          38,
          50
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            51,
            54
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          51,
          56
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        51,
        57
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
    0,
    139
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          16,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            10
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              7,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        23,
        67
      ],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    59,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 36,
                      "line": 2
                    }
                  }
                },
                "range": [
                  55,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "range": [
                55,
                65
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            53,
            67
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
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
            47,
            50
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [],
        "range": [
          38,
          67
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 44,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "Literal",
          "raw": "\"./a\"",
          "value": "./a",
          "range": [
            132,
            137
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        },
        "range": [
          125,
          138
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        125,
        139
      ],
      "loc": {
        "end": {
          "column": 14,
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
      "column": 14,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
