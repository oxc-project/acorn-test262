__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    111
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
            "name": "C",
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
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                16,
                83
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "x",
                    "range": [
                      26,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      28,
                      34
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        32,
                        34
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 2
                        },
                        "start": {
                          "column": 14,
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          29,
                          30
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 2
                          },
                          "start": {
                            "column": 11,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    22,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                    "name": "m",
                    "optional": false,
                    "range": [
                      39,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
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
                      40,
                      81
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  53,
                                  57
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "x",
                                "range": [
                                  58,
                                  60
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                53,
                                60
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 4
                                },
                                "start": {
                                  "column": 8,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                64,
                                65
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 4
                                },
                                "start": {
                                  "column": 19,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              53,
                              65
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            53,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        43,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
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
                        "line": 5
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    39,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
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
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              10,
              83
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            83
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        83
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    101,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  97,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  105,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "range": [
                97,
                106
              ],
              "loc": {
                "end": {
                  "column": 21,
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
              97,
              108
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
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
              85,
              92
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
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
              93,
              96
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            85,
            96
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          85,
          109
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        85,
        110
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
