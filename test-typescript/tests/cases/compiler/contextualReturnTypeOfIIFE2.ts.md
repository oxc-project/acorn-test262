__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    172
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                35,
                38
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                40,
                46
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  42,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              26,
              47
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          49
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          18,
          21
        ],
        "decorators": [],
        "name": "app",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        49
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "range": [
                51,
                54
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 5
                },
                "start": {
                  "column": 0,
                  "line": 5
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
                55,
                58
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
            "range": [
              51,
              58
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
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
              59,
              62
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            51,
            62
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
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
                        "name": "someFun",
                        "optional": false,
                        "range": [
                          88,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            115,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 6
                            },
                            "start": {
                              "column": 35,
                              "line": 6
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
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 6
                                },
                                "start": {
                                  "column": 22,
                                  "line": 6
                                }
                              },
                              "range": [
                                102,
                                110
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  104,
                                  110
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              99,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 6
                              },
                              "start": {
                                "column": 19,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          98,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        88,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    82,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "range": [
                            130,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFun",
                          "optional": false,
                          "range": [
                            130,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          130,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      128,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    121,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 2,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                78,
                142
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              66,
              142
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            65,
            145
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        },
        "range": [
          51,
          145
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        51,
        146
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "app",
                "optional": false,
                "range": [
                  148,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 10
                  },
                  "start": {
                    "column": 0,
                    "line": 10
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
                  152,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "range": [
                148,
                155
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 0,
                  "line": 10
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
                156,
                159
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              148,
              159
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someFun",
            "optional": false,
            "range": [
              160,
              167
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            148,
            167
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          148,
          170
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        148,
        171
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
