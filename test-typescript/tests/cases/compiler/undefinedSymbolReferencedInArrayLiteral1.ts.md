__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    147
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
            "name": "tokens",
            "optional": false,
            "range": [
              4,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false,
                      "range": [
                        16,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 1
                        },
                        "start": {
                          "column": 16,
                          "line": 1
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "deltaOffset",
                      "optional": false,
                      "range": [
                        28,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 1
                        },
                        "start": {
                          "column": 28,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      16,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 1
                      },
                      "start": {
                        "column": 16,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  14,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              13,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "range": [
            4,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
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
        43
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "functions",
            "optional": false,
            "range": [
              49,
              58
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  80,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 6,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 5,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  83,
                                  84
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  86,
                                  87
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              79,
                              88
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 4
                              },
                              "start": {
                                "column": 4,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "range": [
                              89,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            79,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 4,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          79,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        79,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
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
                          "name": "anotherNonExistingMethod",
                          "optional": false,
                          "range": [
                            114,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 4,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          114,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        114,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    73,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  62,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              61,
              144
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            49,
            144
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        45,
        145
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 6
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
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
