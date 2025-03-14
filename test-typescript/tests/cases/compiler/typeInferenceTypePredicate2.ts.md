__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    120
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "range": [
                    101,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    107,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                },
                "range": [
                  101,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                101,
                117
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  92,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              92,
              117
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      67,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 41,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      77,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 51,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    67,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      39,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  },
                  "range": [
                    45,
                    63
                  ],
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "range": [
                        47,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 2
                        },
                        "start": {
                          "column": 21,
                          "line": 2
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      },
                      "range": [
                        56,
                        63
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          56,
                          63
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      47,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  38,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1,
                      5
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 1
                      },
                      "start": {
                        "column": 1,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      7,
                      11
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 1
                      },
                      "start": {
                        "column": 7,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      13,
                      18
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 1
                      },
                      "start": {
                        "column": 13,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      20,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  0,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 0,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  31,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              },
              "range": [
                0,
                37
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 0,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              0,
              82
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "range": [
              88,
              91
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 5,
                "line": 3
              }
            }
          },
          "range": [
            0,
            91
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          0,
          118
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        119
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
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
