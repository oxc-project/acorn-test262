__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    202
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          171
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                15,
                169
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        99,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 5
                        },
                        "start": {
                          "column": 50,
                          "line": 3
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
                              65,
                              66
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 3
                              },
                              "start": {
                                "column": 16,
                                "line": 3
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              69,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            65,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        61,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
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
                          72,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 23,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "range": [
                            76,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 27,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            86,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 3
                            },
                            "start": {
                              "column": 37,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          76,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 3
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        72,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
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
                          94,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 45,
                            "line": 3
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        94,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 3
                        },
                        "start": {
                          "column": 45,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      56,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 5
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  47,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 2
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
                  "name": "ii",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    },
                    "range": [
                      18,
                      25
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        19,
                        25
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    16,
                    25
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    },
                    "range": [
                      28,
                      35
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        29,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    27,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    },
                    "range": [
                      38,
                      45
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        39,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 2
                        },
                        "start": {
                          "column": 29,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    37,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "c",
            "optional": false,
            "range": [
              177,
              178
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                185,
                186
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "range": [
              181,
              188
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            177,
            188
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        173,
        189
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              194,
              195
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
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              196,
              197
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              198,
              199
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
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
            "name": "c",
            "optional": false,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 1,
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
            "name": "P",
            "optional": false,
            "range": [
              192,
              193
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          "range": [
            190,
            193
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
        "range": [
          190,
          200
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        190,
        201
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
