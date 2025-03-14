__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    166
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handle",
                            "optional": false,
                            "range": [
                              143,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
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
                            "name": "kind",
                            "optional": false,
                            "range": [
                              150,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            143,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          143,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      133,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 6
                      },
                      "start": {
                        "column": 49,
                        "line": 4
                      }
                    }
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "range": [
                                106,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handle",
                              "optional": false,
                              "range": [
                                111,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 4
                                },
                                "start": {
                                  "column": 27,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "optional": false,
                          "range": [
                            105,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 4
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          105,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      99,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "range": [
                      122,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    88,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                82,
                163
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 57,
                  "line": 3
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "directory",
                "optional": false,
                "range": [
                  69,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              63,
              163
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 38,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "navigator",
                  "optional": false,
                  "range": [
                    25,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 0,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "storage",
                  "optional": false,
                  "range": [
                    35,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "range": [
                  25,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 0,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDirectory",
                "optional": false,
                "range": [
                  43,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "range": [
                25,
                55
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 0,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              25,
              57
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              58,
              62
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 33,
                "line": 3
              }
            }
          },
          "range": [
            25,
            62
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          25,
          164
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        25,
        165
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 7
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
      "line": 3
    }
  },
  "hashbang": null
}
```
