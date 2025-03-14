__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    141
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          74,
          77
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 1
          },
          "start": {
            "column": 74,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeFirstTwoEntries",
        "optional": false,
        "range": [
          9,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k1",
                    "optional": false,
                    "range": [
                      34,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "range": [
                      38,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 38,
                        "line": 1
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  33,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "range": [
                      44,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "range": [
                      48,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    }
                  }
                ],
                "optional": false,
                "range": [
                  43,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              32,
              52
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 52,
                "line": 1
              }
            },
            "range": [
              52,
              72
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 1
                      },
                      "start": {
                        "column": 55,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      63,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 1
                      },
                      "start": {
                        "column": 63,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  54,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              },
              "range": [
                54,
                72
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 1
                },
                "start": {
                  "column": 54,
                  "line": 1
                }
              }
            }
          },
          "range": [
            29,
            72
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        77
      ],
      "loc": {
        "end": {
          "column": 77,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            111,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 2
                            },
                            "start": {
                              "column": 33,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            115,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 2
                            },
                            "start": {
                              "column": 37,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        110,
                        120
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
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            123,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 2
                            },
                            "start": {
                              "column": 45,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            132,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 2
                            },
                            "start": {
                              "column": 54,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        122,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    109,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "range": [
                  105,
                  108
                ],
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
              "range": [
                101,
                139
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "range": [
              98,
              139
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeFirstTwoEntries",
          "optional": false,
          "range": [
            78,
            97
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          78,
          140
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        78,
        141
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 63,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
