__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    103
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          26
        ],
        "body": [
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 2
                },
                "start": {
                  "column": 1,
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
                12,
                24
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  21,
                  24
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                },
                "range": [
                  14,
                  20
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    16,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            },
            "range": [
              11,
              24
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
        "name": "A",
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
        26
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          45,
          102
        ],
        "body": [
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
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 1,
                  "line": 5
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
                49,
                100
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        60,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 7
                        },
                        "start": {
                          "column": 6,
                          "line": 6
                        }
                      }
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
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
                                  "type": "Super",
                                  "range": [
                                    83,
                                    88
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 3,
                                      "line": 9
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
                                    89,
                                    90
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  83,
                                  90
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 3,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                83,
                                92
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 9
                                },
                                "start": {
                                  "column": 3,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              83,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 9
                              },
                              "start": {
                                "column": 3,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          78,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "range": [
                          75,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 8
                          },
                          "start": {
                            "column": 9,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        68,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 10
                        },
                        "start": {
                          "column": 2,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      56,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  52,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 5
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
                  "column": 2,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            "range": [
              48,
              100
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 4
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
          33,
          34
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          43,
          44
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        27,
        102
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
