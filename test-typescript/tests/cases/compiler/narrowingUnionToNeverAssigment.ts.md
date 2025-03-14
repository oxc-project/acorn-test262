__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    164
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variants",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                16,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "range": [
              16,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "range": [
              22,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"c\"",
              "value": "c",
              "range": [
                28,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            },
            "range": [
              28,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"d\"",
              "value": "d",
              "range": [
                34,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            },
            "range": [
              34,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          }
        ],
        "range": [
          16,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          },
                          "range": [
                            143,
                            150
                          ],
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "range": [
                              145,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 8
                              },
                              "start": {
                                "column": 17,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          142,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          153,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        142,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    136,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                126,
                161
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                101,
                116
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    77,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    83,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                },
                "range": [
                  77,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    90,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"b\"",
                  "value": "b",
                  "range": [
                    96,
                    99
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
                },
                "range": [
                  90,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                77,
                99
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              73,
              161
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          67,
          163
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 26,
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
        "name": "fx1",
        "optional": false,
        "range": [
          50,
          53
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
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
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            },
            "range": [
              55,
              65
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Variants",
                "optional": false,
                "range": [
                  57,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                57,
                65
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            }
          },
          "range": [
            54,
            65
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        }
      ],
      "range": [
        41,
        163
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 4
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
