__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    397
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
                394
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bar",
                    "range": [
                      35,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
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
                      39,
                      79
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "42",
                                  "value": 42,
                                  "range": [
                                    73,
                                    75
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 2
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
                                  "name": "Promise",
                                  "optional": false,
                                  "range": [
                                    57,
                                    64
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 2
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "range": [
                                    65,
                                    72
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  57,
                                  72
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 2
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                57,
                                76
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 2
                                },
                                "start": {
                                  "column": 39,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              51,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 2
                              },
                              "start": {
                                "column": 33,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            44,
                            77
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 2
                            },
                            "start": {
                              "column": 26,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        42,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
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
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    22,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
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
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
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
                      100,
                      241
                    ],
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
                                "name": "b",
                                "optional": false,
                                "range": [
                                  119,
                                  120
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 4
                                  }
                                }
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        129,
                                        133
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "range": [
                                        134,
                                        138
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      129,
                                      138
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    129,
                                    140
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  123,
                                  140
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                119,
                                140
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 4
                                },
                                "start": {
                                  "column": 14,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            113,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  157,
                                  158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 5
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
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
                                            "type": "ThisExpression",
                                            "range": [
                                              162,
                                              166
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "range": [
                                              167,
                                              171
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "range": [
                                            162,
                                            171
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          162,
                                          173
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "range": [
                                          174,
                                          178
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        162,
                                        178
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      162,
                                      180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      181,
                                      186
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    162,
                                    186
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 5
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "raw": "0",
                                  "value": 0,
                                  "range": [
                                    190,
                                    191
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  162,
                                  191
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                157,
                                192
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 5
                                },
                                "start": {
                                  "column": 15,
                                  "line": 5
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "AwaitExpression",
                                  "argument": {
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
                                            "type": "ThisExpression",
                                            "range": [
                                              203,
                                              207
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 65,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 61,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "range": [
                                              208,
                                              212
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 66,
                                                "line": 5
                                              }
                                            }
                                          },
                                          "range": [
                                            203,
                                            212
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 61,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          203,
                                          214
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 72,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 61,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "range": [
                                          215,
                                          219
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 77,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 73,
                                            "line": 5
                                          }
                                        }
                                      },
                                      "range": [
                                        203,
                                        219
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 61,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      203,
                                      221
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    197,
                                    221
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 55,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    223,
                                    228
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 81,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  196,
                                  228
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 5
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  232,
                                  233
                                ],
                                "loc": {
                                  "end": {
                                    "column": 91,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 90,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                196,
                                233
                              ],
                              "loc": {
                                "end": {
                                  "column": 91,
                                  "line": 5
                                },
                                "start": {
                                  "column": 54,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              157,
                              234
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            150,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        103,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
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
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    84,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
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
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "range": [
                      254,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
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
                      258,
                      274
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "42",
                              "value": 42,
                              "range": [
                                269,
                                271
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 7
                                },
                                "start": {
                                  "column": 27,
                                  "line": 7
                                }
                              }
                            },
                            "delegate": false,
                            "range": [
                              263,
                              271
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            263,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        261,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    246,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "range": [
                      293,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
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
                      297,
                      350
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "42",
                                    "value": 42,
                                    "range": [
                                      339,
                                      341
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 9
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      323,
                                      330
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "range": [
                                      331,
                                      338
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    323,
                                    338
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  323,
                                  342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                317,
                                342
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 9
                                },
                                "start": {
                                  "column": 15,
                                  "line": 9
                                }
                              }
                            },
                            "delegate": false,
                            "range": [
                              310,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            310,
                            344
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
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
                        300,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 10
                        },
                        "start": {
                          "column": 25,
                          "line": 8
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    279,
                    350
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
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bazBad",
                    "range": [
                      369,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
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
                      376,
                      392
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "Literal",
                              "raw": "42",
                              "value": 42,
                              "range": [
                                387,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 11
                                },
                                "start": {
                                  "column": 36,
                                  "line": 11
                                }
                              }
                            },
                            "delegate": false,
                            "range": [
                              381,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 11
                              },
                              "start": {
                                "column": 30,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            381,
                            390
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 11
                            },
                            "start": {
                              "column": 30,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        379,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    355,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
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
              394
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            394
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
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
        394
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
