__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    348
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
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
                  "name": "p1",
                  "optional": false,
                  "range": [
                    14,
                    16
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
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
                  "raw": "10",
                  "value": 10,
                  "range": [
                    18,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "range": [
                  14,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    30,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    33,
                    98
                  ],
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
                                "type": "Literal",
                                "raw": "10",
                                "value": 10,
                                "range": [
                                  79,
                                  81
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                72,
                                82
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            58,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              50,
                              51
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              55,
                              56
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            50,
                            56
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          46,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      36,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 14,
                        "line": 3
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
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "range": [
                  26,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      113,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    109,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    115,
                    143
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            134,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          128,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      118,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 8
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
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  104,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      158,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    154,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    160,
                    210
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            201,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 13
                            },
                            "start": {
                              "column": 14,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          195,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      163,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 11
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
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "range": [
                  149,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      221,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      225,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    221,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    227,
                    256
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            247,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          240,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      230,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 15
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
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                },
                "range": [
                  216,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    266,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    269,
                    334
                  ],
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
                                "type": "Literal",
                                "raw": "20",
                                "value": 20,
                                "range": [
                                  315,
                                  317
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                308,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 20
                                },
                                "start": {
                                  "column": 12,
                                  "line": 20
                                }
                              }
                            }
                          ],
                          "range": [
                            294,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 19
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              286,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 19
                              },
                              "start": {
                                "column": 12,
                                "line": 19
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              291,
                              292
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 19
                              },
                              "start": {
                                "column": 17,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            286,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          282,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      272,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 22
                      },
                      "start": {
                        "column": 14,
                        "line": 18
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
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 18
                    }
                  }
                },
                "range": [
                  262,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    340,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    344,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "range": [
                  340,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              8,
              348
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            348
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        348
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
