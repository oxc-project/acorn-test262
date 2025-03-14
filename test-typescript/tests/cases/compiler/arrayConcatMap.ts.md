__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    67
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      62,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      64,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    62,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      57,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  57,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                21,
                                22
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 1
                                },
                                "start": {
                                  "column": 21,
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
                              "raw": "1",
                              "value": 1,
                              "range": [
                                24,
                                25
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 1
                                },
                                "start": {
                                  "column": 24,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              21,
                              25
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 1
                              },
                              "start": {
                                "column": 21,
                                "line": 1
                              }
                            }
                          }
                        ],
                        "range": [
                          19,
                          27
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 1
                          },
                          "start": {
                            "column": 19,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      18,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  },
                  {
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                33,
                                34
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 1
                                },
                                "start": {
                                  "column": 33,
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
                              "raw": "2",
                              "value": 2,
                              "range": [
                                36,
                                37
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 1
                                },
                                "start": {
                                  "column": 36,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              33,
                              37
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 1
                              },
                              "start": {
                                "column": 33,
                                "line": 1
                              }
                            }
                          }
                        ],
                        "range": [
                          31,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 1
                          },
                          "start": {
                            "column": 31,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      30,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      8,
                      10
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 1
                      },
                      "start": {
                        "column": 8,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "concat",
                    "optional": false,
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
                  },
                  "range": [
                    8,
                    17
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 1
                    },
                    "start": {
                      "column": 8,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "range": [
                  8,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
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
                  53,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                8,
                56
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              8,
              66
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            66
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
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
        67
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 2
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
      "column": 25,
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
