__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    151
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
            "name": "Foo",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
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
                151
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      22,
                      33
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
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
                      33,
                      63
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  46,
                                  50
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 3
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  51,
                                  54
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                46,
                                54
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 3
                                },
                                "start": {
                                  "column": 8,
                                  "line": 3
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              46,
                              56
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 3
                              },
                              "start": {
                                "column": 8,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            46,
                            57
                          ],
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
                        }
                      ],
                      "range": [
                        36,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 2
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
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    22,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      68,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      74,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    68,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
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
                    "name": "inc",
                    "optional": false,
                    "range": [
                      81,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  103,
                                  107
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  108,
                                  111
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                103,
                                111
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 7
                                },
                                "start": {
                                  "column": 8,
                                  "line": 7
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              103,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 7
                              },
                              "start": {
                                "column": 8,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            103,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        93,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      87,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    81,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 6
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
                      125,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
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
                      126,
                      149
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
                              "type": "ThisExpression",
                              "range": [
                                138,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 9
                                },
                                "start": {
                                  "column": 17,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                143,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 9
                                },
                                "start": {
                                  "column": 22,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              138,
                              146
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            131,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 9
                            },
                            "start": {
                              "column": 10,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        129,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
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
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 5,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    125,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
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
              151
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            151
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
