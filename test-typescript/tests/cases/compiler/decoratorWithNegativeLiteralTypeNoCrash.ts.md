__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          54
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "range": [
                    15,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 5,
                      "line": 2
                    }
                  }
                },
                "range": [
                  14,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "range": [
                36,
                42
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                42,
                46
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      45,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    44,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  44,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "value": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                49,
                51
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "range": [
              14,
              52
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          99,
          101
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 5
          },
          "start": {
            "column": 44,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorator",
        "optional": false,
        "range": [
          64,
          73
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            },
            "range": [
              80,
              85
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                82,
                85
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            }
          },
          "range": [
            74,
            85
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 19,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            },
            "range": [
              92,
              97
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                94,
                97
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 39,
                  "line": 5
                }
              }
            }
          },
          "range": [
            87,
            97
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 5
            }
          }
        }
      ],
      "range": [
        55,
        101
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 46,
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
