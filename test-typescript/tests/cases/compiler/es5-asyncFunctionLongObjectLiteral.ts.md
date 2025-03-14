__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    51,
    712
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
            "name": "fooShort",
            "optional": false,
            "range": [
              57,
              65
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            103,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  128,
                                  129
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 5
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
                                  112,
                                  119
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 5
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
                                  120,
                                  127
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                112,
                                127
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 5
                                },
                                "start": {
                                  "column": 17,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              112,
                              130
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
                          },
                          "range": [
                            106,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 11,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          103,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            140,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  165,
                                  166
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 33,
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
                                "name": "Promise",
                                "optional": false,
                                "range": [
                                  149,
                                  156
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 6
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
                                  157,
                                  164
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                149,
                                164
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 17,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              149,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 6
                              },
                              "start": {
                                "column": 17,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            143,
                            167
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 6
                            },
                            "start": {
                              "column": 11,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          140,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            177,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  202,
                                  203
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 7
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
                                  186,
                                  193
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 7
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
                                  194,
                                  201
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                186,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 7
                                },
                                "start": {
                                  "column": 17,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              186,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            180,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          177,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            214,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  239,
                                  240
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 33,
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
                                "name": "Promise",
                                "optional": false,
                                "range": [
                                  223,
                                  230
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 8
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
                                  231,
                                  238
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                223,
                                238
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 8
                                },
                                "start": {
                                  "column": 17,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              223,
                              241
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 8
                              },
                              "start": {
                                "column": 17,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            217,
                            241
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 8
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          214,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            251,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "4",
                                "value": 4,
                                "range": [
                                  276,
                                  277
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 33,
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
                                  260,
                                  267
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 17,
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
                                  268,
                                  275
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                260,
                                275
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 9
                                },
                                "start": {
                                  "column": 17,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              260,
                              278
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            254,
                            278
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 9
                            },
                            "start": {
                              "column": 11,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          251,
                          278
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
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
                      93,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    86,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                80,
                288
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              68,
              288
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            57,
            288
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        51,
        288
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "fooLong",
            "optional": false,
            "range": [
              296,
              303
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            341,
                            342
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
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
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  366,
                                  367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 15
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
                                  350,
                                  357
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 15
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
                                  358,
                                  365
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                350,
                                365
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 15
                                },
                                "start": {
                                  "column": 17,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              350,
                              368
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 15
                              },
                              "start": {
                                "column": 17,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            344,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 15
                            },
                            "start": {
                              "column": 11,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          341,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            378,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  403,
                                  404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 16
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
                                  387,
                                  394
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 16
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
                                  395,
                                  402
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                387,
                                402
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 16
                                },
                                "start": {
                                  "column": 17,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              387,
                              405
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 16
                              },
                              "start": {
                                "column": 17,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            381,
                            405
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 16
                            },
                            "start": {
                              "column": 11,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          378,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            415,
                            416
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  440,
                                  441
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 17
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
                                  424,
                                  431
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 17
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
                                  432,
                                  439
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                424,
                                439
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 17
                                },
                                "start": {
                                  "column": 17,
                                  "line": 17
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              424,
                              442
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 17
                              },
                              "start": {
                                "column": 17,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            418,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 17
                            },
                            "start": {
                              "column": 11,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          415,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            452,
                            453
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 18
                            },
                            "start": {
                              "column": 8,
                              "line": 18
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  477,
                                  478
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 18
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
                                  461,
                                  468
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 18
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
                                  469,
                                  476
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                461,
                                476
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 18
                                },
                                "start": {
                                  "column": 17,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              461,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 18
                              },
                              "start": {
                                "column": 17,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            455,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 18
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          452,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "range": [
                            489,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 19
                            },
                            "start": {
                              "column": 8,
                              "line": 19
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "4",
                                "value": 4,
                                "range": [
                                  514,
                                  515
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 19
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
                                  498,
                                  505
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 19
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
                                  506,
                                  513
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                498,
                                513
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 19
                                },
                                "start": {
                                  "column": 17,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              498,
                              516
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 19
                              },
                              "start": {
                                "column": 17,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            492,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          489,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
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
                          "name": "f",
                          "optional": false,
                          "range": [
                            526,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 20
                            },
                            "start": {
                              "column": 8,
                              "line": 20
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "5",
                                "value": 5,
                                "range": [
                                  551,
                                  552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 20
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
                                  535,
                                  542
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 20
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
                                  543,
                                  550
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                535,
                                550
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 20
                                },
                                "start": {
                                  "column": 17,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              535,
                              553
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 20
                              },
                              "start": {
                                "column": 17,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            529,
                            553
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          526,
                          553
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "range": [
                            563,
                            564
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 21
                            },
                            "start": {
                              "column": 8,
                              "line": 21
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "6",
                                "value": 6,
                                "range": [
                                  588,
                                  589
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 21
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
                                  572,
                                  579
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 21
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
                                  580,
                                  587
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                572,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 21
                                },
                                "start": {
                                  "column": 17,
                                  "line": 21
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              572,
                              590
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 21
                              },
                              "start": {
                                "column": 17,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            566,
                            590
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 21
                            },
                            "start": {
                              "column": 11,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          563,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "range": [
                            600,
                            601
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 22
                            },
                            "start": {
                              "column": 8,
                              "line": 22
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "7",
                                "value": 7,
                                "range": [
                                  625,
                                  626
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 22
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
                                  609,
                                  616
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 22
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
                                  617,
                                  624
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                609,
                                624
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 22
                                },
                                "start": {
                                  "column": 17,
                                  "line": 22
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              609,
                              627
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            603,
                            627
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          600,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            637,
                            638
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "8",
                                "value": 8,
                                "range": [
                                  662,
                                  663
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 23
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
                                  646,
                                  653
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 23
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
                                  654,
                                  661
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                646,
                                661
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 23
                                },
                                "start": {
                                  "column": 17,
                                  "line": 23
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              646,
                              664
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 23
                              },
                              "start": {
                                "column": 17,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            640,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 23
                            },
                            "start": {
                              "column": 11,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          637,
                          664
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            674,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 24
                            },
                            "start": {
                              "column": 8,
                              "line": 24
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "9",
                                "value": 9,
                                "range": [
                                  699,
                                  700
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 24
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
                                  683,
                                  690
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 24
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
                                  691,
                                  698
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 24
                                  }
                                }
                              },
                              "range": [
                                683,
                                698
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 24
                                },
                                "start": {
                                  "column": 17,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              683,
                              701
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 24
                              },
                              "start": {
                                "column": 17,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            677,
                            701
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 24
                            },
                            "start": {
                              "column": 11,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          674,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      331,
                      708
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    324,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                318,
                711
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 26
                },
                "start": {
                  "column": 28,
                  "line": 13
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              306,
              711
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          },
          "range": [
            296,
            711
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        290,
        711
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
