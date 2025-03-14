__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    443
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
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
                        "name": "_arguments",
                        "optional": false,
                        "range": [
                          64,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          77,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        64,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    60,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "FunctionDeclaration",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "capture",
                              "optional": false,
                              "range": [
                                173,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "range": [
                                  189,
                                  198
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 7
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                183,
                                198
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              173,
                              198
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          169,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
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
                              "name": "_arguments",
                              "optional": false,
                              "range": [
                                277,
                                287
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              273,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            273,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          273,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      155,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "params": [],
                  "range": [
                    142,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                50,
                387
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "params": [],
            "range": [
              37,
              387
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "100",
                    "value": 100,
                    "range": [
                      431,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    424,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                414,
                441
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 12
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
                402,
                405
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
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
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 18,
                      "line": 12
                    }
                  },
                  "range": [
                    407,
                    412
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      409,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  406,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              393,
              441
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          31,
          443
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 13,
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
        "name": "f",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        18,
        443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
