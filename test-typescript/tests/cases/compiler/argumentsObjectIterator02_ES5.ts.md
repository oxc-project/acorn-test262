__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    265
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                  "name": "blah",
                  "optional": false,
                  "range": [
                    101,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "range": [
                      108,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        118,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterator",
                      "optional": false,
                      "range": [
                        125,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      118,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    108,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "range": [
                  101,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              97,
              135
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "result",
                  "optional": false,
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    154,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "range": [
                  145,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              141,
              157
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            208,
                            211
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
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            214,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 26,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          208,
                          217
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
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          196,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
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
                        "name": "push",
                        "optional": false,
                        "range": [
                          203,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        196,
                        207
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
                      196,
                      218
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
                  "range": [
                    196,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                186,
                225
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 5
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
                    "name": "arg",
                    "optional": false,
                    "range": [
                      171,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    171,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                167,
                174
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "range": [
                  178,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                178,
                184
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              162,
              225
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "range": [
                  254,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 28,
                    "line": 8
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      239,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      244,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      249,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  238,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "range": [
                237,
                260
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              230,
              261
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          91,
          263
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 91,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doubleAndReturnAsArray",
        "optional": false,
        "range": [
          9,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            },
            "range": [
              33,
              41
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                35,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              }
            }
          },
          "range": [
            32,
            41
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 44,
                "line": 1
              }
            },
            "range": [
              44,
              52
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                46,
                52
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            }
          },
          "range": [
            43,
            52
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 43,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 1
              },
              "start": {
                "column": 55,
                "line": 1
              }
            },
            "range": [
              55,
              63
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                57,
                63
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 1
                },
                "start": {
                  "column": 57,
                  "line": 1
                }
              }
            }
          },
          "range": [
            54,
            63
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 1
            },
            "start": {
              "column": 54,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 90,
            "line": 1
          },
          "start": {
            "column": 64,
            "line": 1
          }
        },
        "range": [
          64,
          90
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "range": [
                67,
                73
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 1
                },
                "start": {
                  "column": 67,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                75,
                81
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 1
                },
                "start": {
                  "column": 75,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                83,
                89
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 1
                },
                "start": {
                  "column": 83,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            66,
            90
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 1
            },
            "start": {
              "column": 66,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        263
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
