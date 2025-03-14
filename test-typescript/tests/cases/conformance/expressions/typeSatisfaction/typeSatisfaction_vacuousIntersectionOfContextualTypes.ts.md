__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    123
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                14
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"baz\"",
                  "value": "baz",
                  "range": [
                    9,
                    14
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 1
                    },
                    "start": {
                      "column": 9,
                      "line": 1
                    }
                  }
                },
                "range": [
                  9,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                17,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
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
                      33,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 1
                      },
                      "start": {
                        "column": 33,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    33,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 33,
                      "line": 1
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
                      41,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 1
                      },
                      "start": {
                        "column": 41,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    41,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                33,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              17,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            6,
            46
          ],
          "loc": {
            "end": {
              "column": 46,
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
        47
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                55,
                71
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "xyz",
                      "optional": false,
                      "range": [
                        59,
                        62
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 2
                        },
                        "start": {
                          "column": 14,
                          "line": 2
                        }
                      },
                      "range": [
                        62,
                        69
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"baz\"",
                          "value": "baz",
                          "range": [
                            64,
                            69
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 2
                            },
                            "start": {
                              "column": 16,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          64,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 2
                          },
                          "start": {
                            "column": 16,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      59,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  57,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
              54,
              71
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "range": [
                      76,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
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
                      81,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 33,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    76,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 28,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                74,
                88
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "range": [
                      101,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 53,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 2
                      },
                      "start": {
                        "column": 56,
                        "line": 2
                      }
                    },
                    "range": [
                      104,
                      119
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
                              106,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 2
                              },
                              "start": {
                                "column": 58,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            106,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 2
                            },
                            "start": {
                              "column": 58,
                              "line": 2
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
                              114,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 2
                              },
                              "start": {
                                "column": 66,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            114,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 2
                            },
                            "start": {
                              "column": 66,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        106,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 2
                        },
                        "start": {
                          "column": 58,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    101,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 2
                    },
                    "start": {
                      "column": 53,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                99,
                121
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 2
                },
                "start": {
                  "column": 51,
                  "line": 2
                }
              }
            },
            "range": [
              74,
              121
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 2
              },
              "start": {
                "column": 26,
                "line": 2
              }
            }
          },
          "range": [
            54,
            121
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        48,
        122
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 2
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
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
