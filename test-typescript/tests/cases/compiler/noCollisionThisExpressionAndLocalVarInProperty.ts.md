__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    331
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          155
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                26,
                31
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
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
                      44,
                      51
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                                    91,
                                    96
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 4
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "raw": "2",
                                  "value": 2,
                                  "range": [
                                    99,
                                    100
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  91,
                                  100
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              87,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
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
                                    130,
                                    135
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 5
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
                                  121,
                                  129
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                121,
                                136
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 5
                                },
                                "start": {
                                  "column": 19,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              114,
                              137
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
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
                          73,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 37,
                            "line": 3
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        67,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 31,
                          "line": 3
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
                          54,
                          62
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      53,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    44,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                34,
                153
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "range": [
              19,
              153
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
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
            "line": 8
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
        155
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
          170,
          331
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                176,
                187
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                187,
                220
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
                            204,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            212,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 12
                            },
                            "start": {
                              "column": 20,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          204,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      200,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  190,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
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
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              176,
              220
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                232,
                237
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
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
                      250,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                                  "type": "Literal",
                                  "raw": "10",
                                  "value": 10,
                                  "range": [
                                    309,
                                    311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 16
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
                                  300,
                                  308
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 16
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                300,
                                312
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 16
                                },
                                "start": {
                                  "column": 19,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              293,
                              313
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          279,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 17
                          },
                          "start": {
                            "column": 37,
                            "line": 15
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        273,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 31,
                          "line": 15
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
                          260,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      259,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    250,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                240,
                329
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 14
                }
              }
            },
            "range": [
              225,
              329
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 10
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
          163,
          169
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        157,
        331
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
