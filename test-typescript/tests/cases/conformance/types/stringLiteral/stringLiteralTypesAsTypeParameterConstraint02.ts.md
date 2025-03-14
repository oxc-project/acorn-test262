__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    172
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                83,
                84
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
            "range": [
              76,
              85
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          70,
          87
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 46,
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
        "name": "foo",
        "optional": false,
        "range": [
          33,
          36
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            },
            "range": [
              55,
              68
            ],
            "typeAnnotation": {
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
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    },
                    "range": [
                      59,
                      62
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          61,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 3
                          },
                          "start": {
                            "column": 37,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        61,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 37,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    58,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                },
                "range": [
                  64,
                  68
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 43,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                57,
                68
              ],
              "loc": {
                "end": {
                  "column": 44,
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
            54,
            68
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          36,
          53
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  47,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                47,
                52
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              37,
              52
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        24,
        87
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "f",
            "optional": false,
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      141,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 52,
                        "line": 7
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      137,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 7
                      },
                      "start": {
                        "column": 48,
                        "line": 7
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        123,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 34,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        129,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 7
                        },
                        "start": {
                          "column": 40,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      123,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    123,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 14,
                          "line": 7
                        }
                      },
                      "range": [
                        103,
                        118
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"foo\"",
                              "value": "foo",
                              "range": [
                                105,
                                110
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              105,
                              110
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "\"bar\"",
                              "value": "bar",
                              "range": [
                                113,
                                118
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 7
                                },
                                "start": {
                                  "column": 24,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              113,
                              118
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 24,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          105,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      102,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  101,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                97,
                100
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              97,
              147
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            93,
            147
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        89,
        148
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "fResult",
            "optional": false,
            "range": [
              153,
              160
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  165,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                163,
                164
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              163,
              171
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "range": [
            153,
            171
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        149,
        172
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 23,
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
