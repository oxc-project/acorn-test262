__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    203
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
            "name": "array",
            "optional": false,
            "range": [
              6,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              14,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            6,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
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
        17
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ClassExpression",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      72,
                      198
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
                          "name": "myField",
                          "range": [
                            82,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            93,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 19,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          82,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "range": [
                            110,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
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
                            117,
                            122
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              120,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 5
                              },
                              "start": {
                                "column": 18,
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
                              "column": 20,
                              "line": 5
                            },
                            "start": {
                              "column": 15,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          110,
                          122
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
                      },
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "accessor",
                          "range": [
                            135,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "range": [
                            144,
                            161
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "42",
                                  "value": 42,
                                  "range": [
                                    156,
                                    158
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  149,
                                  159
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              147,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
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
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          131,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "accessor",
                          "range": [
                            174,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
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
                            183,
                            192
                          ],
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              189,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 7
                              },
                              "start": {
                                "column": 27,
                                "line": 7
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
                              "name": "val",
                              "optional": false,
                              "range": [
                                184,
                                187
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          170,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 3
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
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    64,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 3
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    53,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    59,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "range": [
                  53,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                53,
                199
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              53,
              200
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          47,
          202
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 2
          }
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              27,
              32
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          23,
          32
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            34,
            35
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            38,
            40
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 20,
              "line": 2
            }
          }
        },
        "range": [
          34,
          40
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            44,
            45
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        },
        "operator": "++",
        "prefix": true,
        "range": [
          42,
          45
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        }
      },
      "range": [
        18,
        202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
