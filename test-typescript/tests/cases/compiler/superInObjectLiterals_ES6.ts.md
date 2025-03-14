__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1042
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
            "name": "obj",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
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
                  "name": "__proto__",
                  "optional": false,
                  "range": [
                    16,
                    25
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "range": [
                          37,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          43,
                          57
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            46,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
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
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        37,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    27,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "range": [
                  16,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
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
                  "name": "method",
                  "optional": false,
                  "range": [
                    69,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    75,
                    109
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                88,
                                93
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 8,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                94,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 14,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              88,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
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
                            88,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          88,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
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
                      78,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
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
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "range": [
                  69,
                  109
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    119,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
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
                    123,
                    176
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                136,
                                141
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 10
                                },
                                "start": {
                                  "column": 8,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                142,
                                148
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 10
                                },
                                "start": {
                                  "column": 14,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              136,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 10
                              },
                              "start": {
                                "column": 8,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            136,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          136,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            167,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          160,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
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
                      126,
                      176
                    ],
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
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  115,
                  176
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
                  "name": "prop",
                  "optional": false,
                  "range": [
                    186,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                    190,
                    229
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                208,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 14
                                },
                                "start": {
                                  "column": 8,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                214,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 14
                                },
                                "start": {
                                  "column": 14,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              208,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 14
                              },
                              "start": {
                                "column": 8,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            208,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          208,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      198,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 13
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        191,
                        196
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "range": [
                  182,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
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
                  "name": "p1",
                  "optional": false,
                  "range": [
                    235,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                261,
                                266
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 8,
                                  "line": 17
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                267,
                                273
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 17
                                },
                                "start": {
                                  "column": 14,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              261,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 17
                              },
                              "start": {
                                "column": 8,
                                "line": 17
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            261,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          261,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      251,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    239,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  235,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
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
                  "name": "p2",
                  "optional": false,
                  "range": [
                    288,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
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
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                315,
                                320
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 20
                                },
                                "start": {
                                  "column": 8,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                321,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 20
                                },
                                "start": {
                                  "column": 14,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              315,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 20
                              },
                              "start": {
                                "column": 8,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            315,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 20
                            },
                            "start": {
                              "column": 8,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          315,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      305,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 19
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      301,
                      302
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
                  "params": [],
                  "range": [
                    292,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "range": [
                  288,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
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
                  "name": "p3",
                  "optional": false,
                  "range": [
                    342,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                362,
                                367
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 23
                                },
                                "start": {
                                  "column": 8,
                                  "line": 23
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "range": [
                                368,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 23
                                },
                                "start": {
                                  "column": 14,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              362,
                              374
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 23
                              },
                              "start": {
                                "column": 8,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            362,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          362,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      352,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 22
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    346,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "range": [
                  342,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              10,
              385
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            385
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
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
        386
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          396,
          416
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                402,
                408
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                408,
                414
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  411,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 28
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
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "range": [
              402,
              414
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 8,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          394,
          395
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        388,
        416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          436,
          1042
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                442,
                443
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                443,
                1040
              ],
              "async": false,
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
                          "name": "obj",
                          "optional": false,
                          "range": [
                            460,
                            463
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
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
                                "name": "__proto__",
                                "optional": false,
                                "range": [
                                  480,
                                  489
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 34
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false,
                                      "range": [
                                        509,
                                        515
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 35
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": true,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "range": [
                                        515,
                                        537
                                      ],
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "range": [
                                          518,
                                          537
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 36
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 35
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
                                          "column": 17,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 35
                                        }
                                      }
                                    },
                                    "range": [
                                      509,
                                      537
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 35
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  491,
                                  551
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                480,
                                551
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 37
                                },
                                "start": {
                                  "column": 12,
                                  "line": 34
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "range": [
                                  565,
                                  571
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 38
                                  }
                                }
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "range": [
                                  571,
                                  621
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              592,
                                              597
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 39
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              598,
                                              604
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 39
                                              }
                                            }
                                          },
                                          "range": [
                                            592,
                                            604
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 39
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 39
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          592,
                                          606
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        592,
                                        607
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 39
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    574,
                                    621
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 38
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
                                    "column": 13,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                565,
                                621
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 40
                                },
                                "start": {
                                  "column": 12,
                                  "line": 38
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "range": [
                                  639,
                                  643
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 41
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
                                  643,
                                  720
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              664,
                                              669
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 42
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 42
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              670,
                                              676
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 42
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 42
                                              }
                                            }
                                          },
                                          "range": [
                                            664,
                                            676
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 42
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 42
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          664,
                                          678
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 42
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 42
                                          }
                                        }
                                      },
                                      "range": [
                                        664,
                                        679
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 42
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 42
                                        }
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "raw": "10",
                                        "value": 10,
                                        "range": [
                                          703,
                                          705
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 43
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 43
                                          }
                                        }
                                      },
                                      "range": [
                                        696,
                                        706
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 43
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 43
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    646,
                                    720
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 41
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
                                    "column": 13,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 41
                                  }
                                }
                              },
                              "range": [
                                635,
                                720
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 44
                                },
                                "start": {
                                  "column": 12,
                                  "line": 41
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "range": [
                                  738,
                                  742
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 45
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
                                  742,
                                  797
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              768,
                                              773
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 46
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 46
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              774,
                                              780
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 46
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 46
                                              }
                                            }
                                          },
                                          "range": [
                                            768,
                                            780
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 46
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 46
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          768,
                                          782
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 46
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 46
                                          }
                                        }
                                      },
                                      "range": [
                                        768,
                                        783
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 46
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 46
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    750,
                                    797
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 45
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
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      743,
                                      748
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 45
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 45
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                734,
                                797
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 47
                                },
                                "start": {
                                  "column": 12,
                                  "line": 45
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p1",
                                "optional": false,
                                "range": [
                                  811,
                                  813
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 48
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              845,
                                              850
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 49
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 49
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              851,
                                              857
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 49
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 49
                                              }
                                            }
                                          },
                                          "range": [
                                            845,
                                            857
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 49
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 49
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          845,
                                          859
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 49
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 49
                                          }
                                        }
                                      },
                                      "range": [
                                        845,
                                        860
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 49
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 49
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    827,
                                    874
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 48
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  815,
                                  874
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                811,
                                874
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 50
                                },
                                "start": {
                                  "column": 12,
                                  "line": 48
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
                                  888,
                                  890
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 51
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              923,
                                              928
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 52
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 52
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              929,
                                              935
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 52
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 52
                                              }
                                            }
                                          },
                                          "range": [
                                            923,
                                            935
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 52
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 52
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          923,
                                          937
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 52
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 52
                                          }
                                        }
                                      },
                                      "range": [
                                        923,
                                        938
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 52
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 52
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    905,
                                    952
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 51
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    901,
                                    902
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 51
                                    }
                                  }
                                },
                                "params": [],
                                "range": [
                                  892,
                                  952
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 53
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 51
                                  }
                                }
                              },
                              "range": [
                                888,
                                952
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 53
                                },
                                "start": {
                                  "column": 12,
                                  "line": 51
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "range": [
                                  966,
                                  968
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 54
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              994,
                                              999
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 21,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "range": [
                                              1000,
                                              1006
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 22,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "range": [
                                            994,
                                            1006
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 55
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 55
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          994,
                                          1008
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 55
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 55
                                          }
                                        }
                                      },
                                      "range": [
                                        994,
                                        1009
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 55
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 55
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    976,
                                    1023
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 56
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 54
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  970,
                                  1023
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                966,
                                1023
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 56
                                },
                                "start": {
                                  "column": 12,
                                  "line": 54
                                }
                              }
                            }
                          ],
                          "range": [
                            466,
                            1033
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 57
                            },
                            "start": {
                              "column": 18,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          460,
                          1033
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      456,
                      1034
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  446,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 32
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
                  "line": 58
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              }
            },
            "range": [
              442,
              1040
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 18,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          424,
          425
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          434,
          435
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 31
          }
        }
      },
      "range": [
        418,
        1042
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 59
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
