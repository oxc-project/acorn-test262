__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "raw": "0",
        "value": 0,
        "range": [
          15,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "raw": "1",
        "value": 1,
        "range": [
          15,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "raw": "'fallback'",
        "value": "fallback",
        "range": [
          15,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    254
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        254
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "async": true,
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 2
                                  }
                                },
                                "range": [
                                  49,
                                  57
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    51,
                                    57
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 2
                                    }
                                  }
                                }
                              },
                              "range": [
                                48,
                                57
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 2
                                },
                                "start": {
                                  "column": 8,
                                  "line": 2
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                60,
                                61
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 2
                                },
                                "start": {
                                  "column": 20,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              48,
                              61
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 2
                              },
                              "start": {
                                "column": 8,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          42,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 2
                          },
                          "start": {
                            "column": 2,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "SwitchStatement",
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "raw": "\"./case0.js\"",
                                      "value": "./case0.js",
                                      "range": [
                                        116,
                                        128
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "range": [
                                      109,
                                      129
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    103,
                                    129
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  96,
                                  130
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                87,
                                88
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
                            "range": [
                              82,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 4,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "raw": "\"./case1.js\"",
                                      "value": "./case1.js",
                                      "range": [
                                        169,
                                        181
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      162,
                                      182
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    156,
                                    182
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  149,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                140,
                                141
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 6
                                },
                                "start": {
                                  "column": 9,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              135,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 7
                              },
                              "start": {
                                "column": 4,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "raw": "\"./caseFallback.js\"",
                                      "value": "./caseFallback.js",
                                      "range": [
                                        223,
                                        242
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      216,
                                      243
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    210,
                                    243
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  203,
                                  244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "test": null,
                            "range": [
                              188,
                              244
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 9
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "discriminant": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            73,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 3
                            },
                            "start": {
                              "column": 10,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          65,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 10
                          },
                          "start": {
                            "column": 2,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      38,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 11
                      },
                      "start": {
                        "column": 38,
                        "line": 1
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    26,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "range": [
                  25,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "range": [
                19,
                253
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              253
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          254
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 5,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 5,
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
