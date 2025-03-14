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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          119
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                13,
                19
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 3,
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
                19,
                117
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        47,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "range": [
                        39,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      30,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
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
                          "name": "fn",
                          "optional": false,
                          "range": [
                            60,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 10,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": true,
                          "body": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "range": [
                                    95,
                                    99
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 4
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false,
                                  "range": [
                                    101,
                                    110
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 51,
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
                                  "name": "other",
                                  "optional": false,
                                  "range": [
                                    83,
                                    88
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 4
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "range": [
                                    89,
                                    94
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  83,
                                  94
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 4
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                83,
                                111
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 4
                                },
                                "start": {
                                  "column": 33,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              77,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 4
                              },
                              "start": {
                                "column": 27,
                                "line": 4
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            65,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 4
                            },
                            "start": {
                              "column": 15,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          60,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      56,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  22,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
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
                  "column": 4,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              117
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 5
              },
              "start": {
                "column": 3,
                "line": 2
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
      "implements": [],
      "superClass": null,
      "range": [
        0,
        119
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
