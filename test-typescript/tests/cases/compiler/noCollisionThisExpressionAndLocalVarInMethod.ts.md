__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    372
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
            "name": "_this",
            "optional": false,
            "range": [
              4,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            4,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
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
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
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
          23,
          372
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "range": [
                29,
                36
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
                36,
                201
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                              70,
                              77
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
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
                                            121,
                                            126
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "raw": "2",
                                          "value": 2,
                                          "range": [
                                            129,
                                            130
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
                                        "range": [
                                          121,
                                          130
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 6
                                          }
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var",
                                    "range": [
                                      117,
                                      131
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 6
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
                                            164,
                                            169
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 7
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
                                          155,
                                          163
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 7
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        155,
                                        170
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      148,
                                      171
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 7
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  99,
                                  185
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 5
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                93,
                                185
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 8
                                },
                                "start": {
                                  "column": 35,
                                  "line": 5
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
                                  80,
                                  88
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              79,
                              185
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            70,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        56,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      49,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  39,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
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
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              29,
              201
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
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
              "name": "method2",
              "optional": false,
              "range": [
                206,
                213
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                213,
                370
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
                            230,
                            235
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
                            238,
                            239
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
                          230,
                          239
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
                      226,
                      240
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
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                              270,
                              277
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
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
                                            333,
                                            338
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 15
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
                                          324,
                                          332
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        324,
                                        339
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      317,
                                      340
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 15
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  299,
                                  354
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 14
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                293,
                                354
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 16
                                },
                                "start": {
                                  "column": 35,
                                  "line": 14
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
                                  280,
                                  288
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              279,
                              354
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 16
                              },
                              "start": {
                                "column": 21,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            270,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        256,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      249,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  216,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
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
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              206,
              370
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
            "line": 19
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          21,
          22
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        15,
        372
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 2
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
