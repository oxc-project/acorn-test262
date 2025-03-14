__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    260
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
            "name": "iter",
            "optional": false,
            "range": [
              62,
              66
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      83,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "range": [
                      90,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    83,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
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
                    104,
                    140
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
                            "raw": "0",
                            "value": 0,
                            "range": [
                              132,
                              133
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
                          "delegate": false,
                          "range": [
                            126,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          126,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      116,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 3
                          },
                          "start": {
                            "column": 35,
                            "line": 3
                          }
                        },
                        "range": [
                          106,
                          114
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            108,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 3
                            },
                            "start": {
                              "column": 37,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        105,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                "range": [
                  75,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              69,
              142
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "range": [
            62,
            142
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        56,
        143
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          162,
          163
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              167,
              171
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 26,
                "line": 8
              }
            },
            "range": [
              171,
              176
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                173,
                176
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            }
          },
          "range": [
            164,
            176
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 19,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 8
          },
          "start": {
            "column": 32,
            "line": 8
          }
        },
        "range": [
          177,
          182
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            179,
            182
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        }
      },
      "range": [
        145,
        183
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "body": {
              "type": "EmptyStatement",
              "range": [
                238,
                239
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 11
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
                    "name": "_",
                    "optional": false,
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    228,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                222,
                229
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iter",
              "optional": false,
              "range": [
                233,
                237
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            },
            "range": [
              211,
              239
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "iter",
                "optional": false,
                "range": [
                  252,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "delegate": true,
              "range": [
                245,
                256
              ],
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
            "range": [
              245,
              257
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          205,
          259
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 20,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          201,
          202
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        185,
        259
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
