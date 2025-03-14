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
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      31,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      35,
                      36
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
                  "range": [
                    31,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
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
                    37,
                    65
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
                            56,
                            58
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 14,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          50,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      40,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
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
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  26,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
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
                      76,
                      77
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
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      80,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    76,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
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
                    82,
                    111
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
                            102,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          95,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      85,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
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
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                },
                "range": [
                  71,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                      122,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      126,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    122,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
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
                    128,
                    178
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
                            169,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          163,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      131,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 9
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
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  117,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    188,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                    191,
                    256
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
                                  237,
                                  239
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                230,
                                240
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            216,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 14
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
                              208,
                              209
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              213,
                              214
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 14
                              },
                              "start": {
                                "column": 17,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            208,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          204,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      194,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 13
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
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  184,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 13
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
