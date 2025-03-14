__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    19,
    338
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectionFromArray",
        "optional": false,
        "range": [
          36,
          55
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objects",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 2
              },
              "start": {
                "column": 44,
                "line": 2
              }
            },
            "range": [
              63,
              71
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 2
                },
                "start": {
                  "column": 46,
                  "line": 2
                }
              }
            }
          },
          "range": [
            56,
            71
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 2
            },
            "start": {
              "column": 37,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 2
              },
              "start": {
                "column": 58,
                "line": 2
              }
            },
            "range": [
              77,
              82
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                79,
                82
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 2
                },
                "start": {
                  "column": 60,
                  "line": 2
                }
              }
            }
          },
          "range": [
            73,
            82
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 2
          },
          "start": {
            "column": 64,
            "line": 2
          }
        },
        "range": [
          83,
          87
        ],
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            85,
            87
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 2
            },
            "start": {
              "column": 66,
              "line": 2
            }
          }
        }
      },
      "range": [
        19,
        88
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
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
                    "name": "resolve",
                    "optional": false,
                    "range": [
                      144,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
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
                                "type": "ObjectPattern",
                                "decorators": [],
                                "optional": false,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "range": [
                                        196,
                                        203
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": true,
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "range": [
                                        196,
                                        203
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      196,
                                      203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
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
                                  194,
                                  205
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 6
                                  }
                                }
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "objects",
                                        "optional": false,
                                        "range": [
                                          216,
                                          223
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "12",
                                        "value": 12,
                                        "range": [
                                          225,
                                          227
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 45,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        216,
                                        227
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    214,
                                    229
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  208,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                194,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 6
                                },
                                "start": {
                                  "column": 14,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            188,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "range": [
                                        277,
                                        284
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 8
                                        }
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "range": [
                                        286,
                                        290
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 8
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectionFromArray",
                                    "optional": false,
                                    "range": [
                                      257,
                                      276
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    257,
                                    291
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  254,
                                  291
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              244,
                              299
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 9
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            237,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 9
                            },
                            "start": {
                              "column": 6,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        178,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 10
                        },
                        "start": {
                          "column": 38,
                          "line": 5
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "range": [
                          160,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          169,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      153,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    144,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                138,
                310
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "range": [
              131,
              311
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          127,
          313
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 38,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rootConnection",
        "optional": false,
        "range": [
          98,
          112
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            },
            "range": [
              117,
              125
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                119,
                125
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 30,
                  "line": 3
                }
              }
            }
          },
          "range": [
            113,
            125
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        }
      ],
      "range": [
        89,
        313
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "'test'",
            "value": "test",
            "range": [
              329,
              335
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rootConnection",
          "optional": false,
          "range": [
            314,
            328
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          314,
          336
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        314,
        337
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
