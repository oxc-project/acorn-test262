__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    198
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
            "name": "a",
            "optional": false,
            "range": [
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    37,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          54,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          57,
                          105
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    89,
                                    90
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
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    91,
                                    94
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  89,
                                  94
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                82,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 6
                                },
                                "start": {
                                  "column": 12,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            68,
                            105
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
                              "line": 5
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          },
                          "range": [
                            59,
                            67
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              61,
                              67
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        50,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          119,
                          122
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
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          122,
                          176
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      152,
                                      153
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "range": [
                                      154,
                                      157
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    152,
                                    157
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 9
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    160,
                                    165
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  152,
                                  165
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                152,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            138,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 10
                            },
                            "start": {
                              "column": 31,
                              "line": 8
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 21,
                                  "line": 8
                                }
                              },
                              "range": [
                                128,
                                136
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  130,
                                  136
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              123,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        115,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    40,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  37,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    188,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    193,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  188,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
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
              197
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            27,
            197
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        21,
        198
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
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
      "column": 2,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
