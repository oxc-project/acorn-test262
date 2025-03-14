__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    145
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                43
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      15,
                      19
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 1
                            },
                            "start": {
                              "column": 25,
                              "line": 1
                            }
                          },
                          "range": [
                            25,
                            33
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              27,
                              33
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 1
                              },
                              "start": {
                                "column": 27,
                                "line": 1
                              }
                            }
                          }
                        },
                        "range": [
                          24,
                          33
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 1
                          },
                          "start": {
                            "column": 24,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      },
                      "range": [
                        35,
                        42
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          38,
                          42
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 1
                          },
                          "start": {
                            "column": 38,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      23,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 23,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  15,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "g",
            "optional": false,
            "range": [
              50,
              51
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
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "range": [
                              74,
                              77
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 28,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "range": [
                              78,
                              89
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            74,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          74,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "operator": "void",
                      "prefix": true,
                      "range": [
                        69,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      69,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  67,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
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
                  "name": "abc",
                  "optional": false,
                  "range": [
                    60,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                60,
                93
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              94
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            50,
            94
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        46,
        94
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
        },
        "start": {
          "column": 0,
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
            "name": "gg",
            "optional": false,
            "range": [
              99,
              101
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "range": [
                              124,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "range": [
                              128,
                              139
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
                          "range": [
                            124,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          124,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      },
                      "operator": "void",
                      "prefix": true,
                      "range": [
                        119,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      119,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  117,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
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
                  "name": "abc",
                  "optional": false,
                  "range": [
                    110,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                110,
                143
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              104,
              144
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            99,
            144
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        95,
        144
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 4
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
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
