__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    392
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          199
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                19,
                30
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                30,
                197
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            47,
                            49
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
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
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  66,
                                  73
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
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
                                  "type": "ArrowFunctionExpression",
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                117,
                                                122
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 25,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "raw": "2",
                                              "value": 2,
                                              "range": [
                                                125,
                                                126
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 28,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "range": [
                                              117,
                                              126
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
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var",
                                        "range": [
                                          113,
                                          127
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 5
                                          }
                                        }
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                160,
                                                165
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 6
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 6
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              151,
                                              159
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 6
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            151,
                                            166
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          144,
                                          167
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 6
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      95,
                                      181
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    89,
                                    181
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 4
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      76,
                                      84
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 4
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  75,
                                  181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                66,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            52,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          47,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      43,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  33,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              19,
              197
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class1",
        "optional": false,
        "range": [
          6,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
          214,
          392
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                220,
                231
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                231,
                390
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            248,
                            253
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            256,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          248,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      244,
                      258
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
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "range": [
                            271,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
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
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  290,
                                  297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
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
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                353,
                                                358
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 17
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 17
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              344,
                                              352
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 17
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 17
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            344,
                                            359
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 17
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 17
                                            }
                                          }
                                        },
                                        "range": [
                                          337,
                                          360
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 17
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      319,
                                      374
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    313,
                                    374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 16
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      300,
                                      308
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 16
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  299,
                                  374
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                290,
                                374
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 18
                                },
                                "start": {
                                  "column": 12,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            276,
                            384
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 19
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          271,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      267,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  234,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
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
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              220,
              390
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
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
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "range": [
          207,
          213
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        201,
        392
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
