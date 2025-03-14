__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    302
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
        "name": "setTimeout",
        "optional": false,
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            },
            "range": [
              38,
              43
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                40,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            }
          },
          "range": [
            28,
            43
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 28,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            },
            "range": [
              50,
              58
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                52,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              }
            }
          },
          "range": [
            45,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 1
            },
            "start": {
              "column": 45,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 1
              },
              "start": {
                "column": 69,
                "line": 1
              }
            },
            "range": [
              69,
              74
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                71,
                74
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 1
                },
                "start": {
                  "column": 71,
                  "line": 1
                }
              }
            }
          },
          "range": [
            60,
            74
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 1
            },
            "start": {
              "column": 60,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 83,
            "line": 1
          },
          "start": {
            "column": 75,
            "line": 1
          }
        },
        "range": [
          75,
          83
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            77,
            83
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 1
            },
            "start": {
              "column": 77,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        84
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "messenger",
            "optional": false,
            "range": [
              90,
              99
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
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
                  "name": "message",
                  "optional": false,
                  "range": [
                    108,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Hello World\"",
                  "value": "Hello World",
                  "range": [
                    117,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "range": [
                  108,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "range": [
                    136,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                  "type": "FunctionExpression",
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
                              "name": "_self",
                              "optional": false,
                              "range": [
                                168,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 6
                                },
                                "start": {
                                  "column": 12,
                                  "line": 6
                                }
                              }
                            },
                            "init": {
                              "type": "ThisExpression",
                              "range": [
                                176,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 6
                                },
                                "start": {
                                  "column": 20,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              168,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          164,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
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
                          "type": "CallExpression",
                          "arguments": [
                            {
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
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_self",
                                            "optional": false,
                                            "range": [
                                              226,
                                              231
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 17,
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
                                            "name": "message",
                                            "optional": false,
                                            "range": [
                                              232,
                                              239
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 18,
                                                "line": 8
                                              }
                                            }
                                          },
                                          "range": [
                                            226,
                                            239
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
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "toString",
                                          "optional": false,
                                          "range": [
                                            240,
                                            248
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 34,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          226,
                                          248
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
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
                                        226,
                                        250
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
                                    "range": [
                                      226,
                                      251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  212,
                                  262
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                201,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "3000",
                              "value": 3000,
                              "range": [
                                264,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 9
                                },
                                "start": {
                                  "column": 11,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "range": [
                              190,
                              200
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
                          "optional": false,
                          "range": [
                            190,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          190,
                          270
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "range": [
                      154,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    143,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "range": [
                  136,
                  277
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
              102,
              279
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            90,
            279
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        86,
        280
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
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
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "range": [
              282,
              291
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "start",
            "optional": false,
            "range": [
              292,
              297
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "range": [
            282,
            297
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          282,
          299
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        282,
        300
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 12
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
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
