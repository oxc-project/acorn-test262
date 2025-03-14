__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    199
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          196
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                14,
                18
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  27,
                  129
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        37,
                        48
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        48,
                        96
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\"hello\"",
                                  "value": "hello",
                                  "range": [
                                    77,
                                    84
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "range": [
                                    65,
                                    72
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 4
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "range": [
                                    73,
                                    76
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  65,
                                  76
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                65,
                                85
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              65,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          51,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 19,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      37,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "range": [
                        112,
                        116
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        119,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      105,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                21,
                129
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              130
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo2",
              "range": [
                135,
                140
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  153,
                  193
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false,
                      "range": [
                        170,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        183,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 28,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      163,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 8
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
                  149,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                143,
                193
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              135,
              194
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
        "name": "B",
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
        196
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
