__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    154
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Predicates",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  },
                  "range": [
                    22,
                    30
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      24,
                      30
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 24,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  21,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              },
              "range": [
                31,
                55
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      },
                      "range": [
                        35,
                        43
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          37,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 1
                          },
                          "start": {
                            "column": 37,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      34,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 1
                      },
                      "start": {
                        "column": 34,
                        "line": 1
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 45,
                      "line": 1
                    }
                  },
                  "range": [
                    45,
                    55
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      48,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  33,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              20,
              55
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          18,
          57
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        58
      ],
      "loc": {
        "end": {
          "column": 58,
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
            "name": "p",
            "optional": false,
            "range": [
              66,
              67
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isEven",
                    "optional": false,
                    "range": [
                      76,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
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
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            89,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            93,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          89,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          99,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        89,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          84,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      84,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    76,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
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
                    "name": "isOdd",
                    "optional": false,
                    "range": [
                      106,
                      111
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
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            118,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            122,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          118,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          128,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 26,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        118,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
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
                        "name": "n",
                        "optional": false,
                        "range": [
                          113,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      113,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    106,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                70,
                131
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Predicates",
                "optional": false,
                "range": [
                  142,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "range": [
                142,
                152
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              70,
              152
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            66,
            152
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 6
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
        60,
        153
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 6
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
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
