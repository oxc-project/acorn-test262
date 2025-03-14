__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    318
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      148,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    141,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                135,
                155
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "range": [
                    114,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  107,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"object\"",
                "value": "object",
                "range": [
                  125,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                107,
                133
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              155
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      172,
                      173
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      175,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    172,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "range": [
                      186,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      189,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 10
                      },
                      "start": {
                        "column": 7,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    186,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      200,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"baz\"",
                    "value": "baz",
                    "range": [
                      203,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 7,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    200,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                166,
                213
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "range": [
              159,
              214
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "range": [
          99,
          216
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 42,
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
        "name": "doSthWithParams",
        "optional": false,
        "range": [
          66,
          81
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            },
            "range": [
              88,
              97
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                90,
                97
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              }
            }
          },
          "range": [
            82,
            97
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        216
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "name": "bar",
            "optional": false,
            "range": [
              224,
              227
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    234,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 16
                    },
                    "start": {
                      "column": 2,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    237,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "range": [
                  234,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    245,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 17
                    },
                    "start": {
                      "column": 2,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    248,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 17
                    }
                  }
                },
                "range": [
                  245,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "range": [
                              281,
                              282
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 19
                              },
                              "start": {
                                "column": 4,
                                "line": 19
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              284,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 19
                              },
                              "start": {
                                "column": 7,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            281,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 19
                            },
                            "start": {
                              "column": 4,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              297,
                              298
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 20
                              },
                              "start": {
                                "column": 4,
                                "line": 20
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"world\"",
                            "value": "world",
                            "range": [
                              300,
                              307
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 20
                              },
                              "start": {
                                "column": 7,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            297,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 20
                            },
                            "start": {
                              "column": 4,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        275,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doSthWithParams",
                    "optional": false,
                    "range": [
                      259,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 18
                      },
                      "start": {
                        "column": 5,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    259,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 21
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                "range": [
                  256,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 21
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              230,
              316
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "range": [
            224,
            316
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        218,
        317
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
