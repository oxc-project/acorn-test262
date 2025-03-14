__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    196
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          195
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                20,
                24
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                47
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 25,
                    "line": 2
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
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    },
                    "range": [
                      29,
                      39
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          31,
                          37
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        31,
                        39
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
                  },
                  "range": [
                    25,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              20,
              47
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "callTest",
              "optional": false,
              "range": [
                52,
                60
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                60,
                193
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
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                132,
                                133
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 5
                                },
                                "start": {
                                  "column": 19,
                                  "line": 5
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                135,
                                136
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 5
                                },
                                "start": {
                                  "column": 22,
                                  "line": 5
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "\"hi\"",
                              "value": "hi",
                              "range": [
                                138,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "5",
                              "value": 5,
                              "range": [
                                144,
                                145
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 5
                                },
                                "start": {
                                  "column": 31,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            131,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 18,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            121,
                            125
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "range": [
                            126,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          121,
                          130
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
                      "optional": false,
                      "range": [
                        121,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      121,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                170,
                                171
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 6
                                },
                                "start": {
                                  "column": 19,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                173,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 6
                                },
                                "start": {
                                  "column": 22,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "\"hi\"",
                              "value": "hi",
                              "range": [
                                176,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "5",
                              "value": 5,
                              "range": [
                                182,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 31,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            169,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            159,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "range": [
                            164,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          159,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        159,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      159,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  63,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
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
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "range": [
              52,
              193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrTest",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        195
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
