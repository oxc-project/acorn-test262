__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    80
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
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                26
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 1
                        },
                        "start": {
                          "column": 10,
                          "line": 1
                        }
                      },
                      "range": [
                        10,
                        17
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          11,
                          17
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 1
                          },
                          "start": {
                            "column": 11,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      9,
                      17
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 1
                      },
                      "start": {
                        "column": 9,
                        "line": 1
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  },
                  "range": [
                    18,
                    26
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      20,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  8,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      48,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    41,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                40,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
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
                "name": "a",
                "optional": false,
                "range": [
                  38,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              29,
              50
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "range": [
            4,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
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
        51
      ],
      "loc": {
        "end": {
          "column": 51,
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
            52,
            55
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 1
            },
            "start": {
              "column": 52,
              "line": 1
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    77,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 1
                    },
                    "start": {
                      "column": 77,
                      "line": 1
                    }
                  }
                },
                "range": [
                  70,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 1
                  },
                  "start": {
                    "column": 70,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              69,
              79
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 1
              },
              "start": {
                "column": 69,
                "line": 1
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
              "name": "b",
              "optional": false,
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 1
                },
                "start": {
                  "column": 67,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            58,
            79
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 1
            },
            "start": {
              "column": 58,
              "line": 1
            }
          }
        },
        "range": [
          52,
          79
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 1
          },
          "start": {
            "column": 52,
            "line": 1
          }
        }
      },
      "range": [
        52,
        80
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 1
        },
        "start": {
          "column": 52,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 80,
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
