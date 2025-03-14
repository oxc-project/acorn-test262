__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    305
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              72,
              305
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": false,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "range": [
                    85,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": true,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    92,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 18,
                      "line": 4
                    }
                  }
                },
                "range": [
                  78,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              {
                "type": "StaticBlock",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              127,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              131,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            127,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
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
                            115,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
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
                            123,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          115,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        115,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      115,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "range": [
                            146,
                            149
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
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            150,
                            154
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
                        "range": [
                          146,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        146,
                        156
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
                    },
                    "range": [
                      146,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  98,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              {
                "type": "StaticBlock",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              197,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              201,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 10
                              },
                              "start": {
                                "column": 24,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            197,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            185,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
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
                          "name": "log",
                          "optional": false,
                          "range": [
                            193,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          185,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                        185,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      185,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "range": [
                            216,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            220,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          216,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        216,
                        226
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
                    },
                    "range": [
                      216,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  168,
                  233
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
                "type": "StaticBlock",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              267,
                              270
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 14
                              },
                              "start": {
                                "column": 20,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "range": [
                              271,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            267,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
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
                            255,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
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
                          "name": "log",
                          "optional": false,
                          "range": [
                            263,
                            266
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 16,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          255,
                          266
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                        255,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      255,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "range": [
                            286,
                            289
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            290,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          286,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        286,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      286,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  238,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              68,
              71
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            62,
            305
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 5,
              "line": 3
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          57,
          305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        57,
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
