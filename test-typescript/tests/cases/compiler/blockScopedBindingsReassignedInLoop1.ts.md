__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    134
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              30
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        },
        "range": [
          31,
          37
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            33,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "raw": "'use strict'",
                  "value": "use strict",
                  "range": [
                    56,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                },
                "range": [
                  56,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 2,
                    "line": 3
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
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "UpdateExpression",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    118,
                                    119
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 5
                                    }
                                  }
                                },
                                "operator": "++",
                                "prefix": true,
                                "range": [
                                  116,
                                  119
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use",
                              "optional": false,
                              "range": [
                                112,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 5
                                },
                                "start": {
                                  "column": 11,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              112,
                              120
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 11,
                                "line": 5
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            106,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 5,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          105,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        105,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    99,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 4
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
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          84,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        80,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    76,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
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
                      87,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "9",
                    "value": 9,
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    87,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
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
                      96,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    94,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  71,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              52,
              130
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            40,
            130
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 1,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          39,
          133
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        39,
        134
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 7
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
      "column": 5,
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
