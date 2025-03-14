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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                21
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "range": [
                        10,
                        12
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 1
                        },
                        "start": {
                          "column": 10,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 1
                        },
                        "start": {
                          "column": 12,
                          "line": 1
                        }
                      },
                      "range": [
                        12,
                        19
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          13,
                          19
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 1
                          },
                          "start": {
                            "column": 13,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      10,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 10,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "range": [
                    25,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    28,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                },
                "range": [
                  25,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              24,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          },
          "range": [
            4,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            32,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  39,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
                    "line": 1
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "range": [
                39,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  46,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 1
                  },
                  "start": {
                    "column": 46,
                    "line": 1
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  51,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 51,
                    "line": 1
                  }
                }
              },
              "range": [
                46,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            38,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        },
        "range": [
          32,
          57
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 1
          },
          "start": {
            "column": 32,
            "line": 1
          }
        }
      },
      "range": [
        32,
        58
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 1
        },
        "start": {
          "column": 32,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 58,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
