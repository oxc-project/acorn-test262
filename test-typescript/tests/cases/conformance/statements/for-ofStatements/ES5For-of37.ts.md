__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    400
  ],
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": false,
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
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "'ERR'",
                                    "value": "ERR",
                                    "range": [
                                      277,
                                      282
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "range": [
                                    271,
                                    276
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  267,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                261,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            243,
                            298
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 25,
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
                            "name": "i",
                            "optional": false,
                            "range": [
                              234,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              240,
                              241
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            234,
                            241
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          230,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      216,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            200,
                            201
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 19,
                              "line": 6
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          200,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      194,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          206,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 25,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          209,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 6
                          },
                          "start": {
                            "column": 28,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          212,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 31,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      205,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    189,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          329,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
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
                          317,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
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
                        "name": "log",
                        "optional": false,
                        "range": [
                          325,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        317,
                        328
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
                    },
                    "optional": false,
                    "range": [
                      317,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    317,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                100,
                338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "'E %s %s'",
                          "value": "E %s %s",
                          "range": [
                            373,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            384,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 13
                            },
                            "start": {
                              "column": 31,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "range": [
                            387,
                            390
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 13
                            },
                            "start": {
                              "column": 34,
                              "line": 13
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
                            361,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
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
                            369,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 16,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          361,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        361,
                        391
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      361,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
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
                  351,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "range": [
                  346,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                }
              },
              "range": [
                339,
                398
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              96,
              398
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          90,
          400
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 33,
            "line": 3
          }
        }
      },
      "left": {
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          62,
          69
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              77,
              78
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
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              80,
              81
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
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              83,
              84
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              86,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          }
        ],
        "range": [
          73,
          88
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        57,
        400
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
