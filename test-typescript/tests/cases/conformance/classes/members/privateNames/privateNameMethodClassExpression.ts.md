__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    272
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
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                16,
                161
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "field",
                    "range": [
                      22,
                      28
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
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          31,
                          35
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 2
                          },
                          "start": {
                            "column": 13,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "range": [
                          36,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        31,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      31,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    22,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "method",
                    "range": [
                      51,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
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
                      58,
                      75
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              70,
                              72
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            63,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        61,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 3
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
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    51,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "range": [
                      87,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      98,
                      120
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                114,
                                115
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 4
                                },
                                "start": {
                                  "column": 38,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              110,
                              117
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 4
                              },
                              "start": {
                                "column": 34,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            103,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 4
                            },
                            "start": {
                              "column": 27,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        101,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
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
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    80,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "range": [
                      125,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
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
                      133,
                      158
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                145,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 24,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "range": [
                                150,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 5
                                },
                                "start": {
                                  "column": 29,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              145,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            138,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        136,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
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
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    125,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              10,
              161
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            161
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
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
        161
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      175,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "range": [
                      177,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    175,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  175,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getField",
                "optional": false,
                "range": [
                  191,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 28,
                    "line": 8
                  }
                }
              },
              "range": [
                175,
                199
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              175,
              201
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
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
            "name": "console",
            "optional": false,
            "range": [
              163,
              170
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              171,
              174
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            163,
            174
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          163,
          202
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        163,
        203
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                204,
                205
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 0,
                  "line": 9
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "range": [
                206,
                217
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            "range": [
              204,
              217
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            204,
            219
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "name": "method",
          "range": [
            220,
            227
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 16,
              "line": 9
            }
          }
        },
        "range": [
          204,
          227
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        204,
        228
      ],
      "loc": {
        "end": {
          "column": 24,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                238,
                239
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
              "name": "getInstance",
              "optional": false,
              "range": [
                240,
                251
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "range": [
              238,
              251
            ],
            "loc": {
              "end": {
                "column": 13,
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
            238,
            253
          ],
          "loc": {
            "end": {
              "column": 15,
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
          "type": "PrivateIdentifier",
          "name": "field",
          "range": [
            254,
            260
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        },
        "range": [
          238,
          260
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        238,
        261
      ],
      "loc": {
        "end": {
          "column": 23,
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
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
