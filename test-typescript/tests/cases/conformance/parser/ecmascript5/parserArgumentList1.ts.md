__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    276
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        276
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "range": [
                      68,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 2
                      },
                      "start": {
                        "column": 1,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "range": [
                      73,
                      82
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
                  "range": [
                    68,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 1,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "className",
                          "optional": false,
                          "range": [
                            125,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 2
                            },
                            "start": {
                              "column": 58,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_classNameRegexp",
                        "optional": false,
                        "range": [
                          108,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 2
                          },
                          "start": {
                            "column": 41,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        108,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 2
                        },
                        "start": {
                          "column": 41,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "FunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "alternate": {
                                "type": "Literal",
                                "raw": "''",
                                "value": "",
                                "range": [
                                  266,
                                  268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 3
                                  }
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "raw": "' '",
                                "value": " ",
                                "range": [
                                  260,
                                  263
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 3
                                  }
                                }
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "leftDelimiter",
                                      "optional": false,
                                      "range": [
                                        207,
                                        220
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 9,
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
                                        221,
                                        227
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      207,
                                      227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 9,
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
                                      "name": "rightDelimiter",
                                      "optional": false,
                                      "range": [
                                        230,
                                        244
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 32,
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
                                        245,
                                        251
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      230,
                                      251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    207,
                                    251
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 3
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    256,
                                    257
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 58,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  207,
                                  257
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                207,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 3
                                },
                                "start": {
                                  "column": 9,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              200,
                              269
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 3
                              },
                              "start": {
                                "column": 2,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          196,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 2,
                            "line": 4
                          },
                          "start": {
                            "column": 129,
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
                          "name": "everything",
                          "optional": false,
                          "range": [
                            147,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 2
                            },
                            "start": {
                              "column": 80,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "leftDelimiter",
                          "optional": false,
                          "range": [
                            159,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 105,
                              "line": 2
                            },
                            "start": {
                              "column": 92,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            174,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 111,
                              "line": 2
                            },
                            "start": {
                              "column": 107,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rightDelimiter",
                          "optional": false,
                          "range": [
                            180,
                            194
                          ],
                          "loc": {
                            "end": {
                              "column": 127,
                              "line": 2
                            },
                            "start": {
                              "column": 113,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        137,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 2,
                          "line": 4
                        },
                        "start": {
                          "column": 70,
                          "line": 2
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          85,
                          89
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
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "className",
                        "optional": false,
                        "range": [
                          90,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 2
                          },
                          "start": {
                            "column": 23,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        85,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "replace",
                      "optional": false,
                      "range": [
                        100,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 33,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      85,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    85,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  68,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 4
                  },
                  "start": {
                    "column": 1,
                    "line": 2
                  }
                }
              },
              "range": [
                68,
                274
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 4
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            65,
            276
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 65,
              "line": 1
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "removeClass",
          "optional": false,
          "range": [
            16,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                45
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "range": [
                    34,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 34,
                      "line": 1
                    }
                  }
                },
                "range": [
                  34,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              29,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "className",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 1
                },
                "start": {
                  "column": 56,
                  "line": 1
                }
              },
              "range": [
                56,
                63
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  57,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 1
                  },
                  "start": {
                    "column": 57,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              47,
              63
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "range": [
          7,
          276
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
